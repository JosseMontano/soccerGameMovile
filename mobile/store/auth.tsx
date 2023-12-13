// authStore.ts
import { create } from 'zustand';

interface AuthState {
    isAuthenticated: boolean;
    userId: string
    login: (uuid: string) => void;
    logout: () => void;
}

const useAuthStore = create<AuthState>((set: any) => ({
    isAuthenticated: false,
    userId: "",
    login: (uuid: string) => {
        set({ isAuthenticated: true, userId: uuid });
    },
    logout: () => set({ isAuthenticated: false }),
}));

export default useAuthStore;
