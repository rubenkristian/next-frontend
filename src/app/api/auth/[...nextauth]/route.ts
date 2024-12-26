import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";  

export const authOptions: AuthOptions = {
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({token, user}: any) {
            if (user) {
                token.access_token = user.access_token;
                token.refresh_token = user.refresh_token;
                token.user = user;
            }

            return token;
        },
        async session({session, token}: any) {
            session.access_token = token.access_token;
            session.refresh_token = token.refresh_token;
            session.user = token.user;

            return session;
        }
    },
    pages: {
        signIn: "/login"
    },
    providers: [
        Credentials({
            name: "Credentials-User",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Email/Phone Number"},
                password: { label: "Password", type: "password"}
            },
            async authorize(credentials, _) {
                const { username, password } =  credentials as {
                    username: string;
                    password: string;
                };

                console.log(username, password);

                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/user/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password,
                    })
                });

                const data = await res.json();

                if (res.ok && data.code === 200) {
                    return {
                        access_token: data.data.access_token,
                        refresh_token: data.data.refresh_token,
                        user: data.data.user,
                    };
                }

                throw new Error("Login failed");
            },
        })
    ]
}

export default NextAuth(authOptions);
