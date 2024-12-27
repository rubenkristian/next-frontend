import NextAuth, { User, type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
        access_token: string;
        refresh_token: string;
        user: {
            id: number;
            name: string;
            role: string;
            phone_number: string;
            email: string;
        };
    };
  }
  interface User {
    access_token: string;
    refresh_token: string;
    user: {
        id: number;
        name: string;
        role: string;
        phone_number: string;
        email: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
        access_token: string;
        refresh_token: string;
        user: {
            id: number;
            name: string;
            role: string;
            phone_number: string;
            email: string;
        };
    };
  }
}