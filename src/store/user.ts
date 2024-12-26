import { create } from "zustand";

type Role = 'user' | 'admin' | null;

type UserState = {
    logged: boolean;
    role: Role;
    name: string;
    email: string;
    setUser: (role: Role, name: string, email: string) => void;
}

export const useUserStore = create<UserState>(set => ({
    logged: false,
    role: 'user',
    name: "",
    email: "",
    setUser: (role, name, email) => set(_ => ({
        role: role,
        name: name,
        email: email
    })),
}))