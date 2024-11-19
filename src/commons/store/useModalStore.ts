import { title } from 'process';
import { set } from 'react-hook-form';
import { create } from 'zustand';

type ModalType = 'alert' | 'confirm' | 'custom';

interface ModalState {
    isOpen: boolean;
    type: ModalType;
    title: string;
    message: string;
    onConfirm?: () => void;
    onCancel?: () => void;

    openModal: (params: {
        type: ModalType;
        title: string;
        message: string;
        onConfirm?: () => void;
        onCancel?: () => void;
    }) => void;
    closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
    isOpen: false,
    type: 'alert',
    title: '',
    message: '',

    openModal: (params) => set({ isOpen: true, ...params }),
    closeModal: () => set({ isOpen: false }),
}));
