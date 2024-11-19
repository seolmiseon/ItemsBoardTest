import { create } from 'zustand';

interface FormState {
    error: string | null;
    resetForm: () => void;
    setError: (message: string) => void;
}

export const useFormStore = create<FormState>((set) => ({
    error: null,
    resetForm: () => {
        // 폼 초기화 로직
        set({ error: null });
    },
    setError: (message) => {
        set({ error: message });
    },
}));
