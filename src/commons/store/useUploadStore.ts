import { create } from 'zustand';

interface UploadState {
    uploadedImages: string[]; // 업로드된 이미지 URL
    setUploadedImages: (images: string[]) => void; // 전체 이미지 업데이트
    addUploadedImage: (image: string) => void; // 단일 이미지 추가
    removeUploadedImage: (index: number) => void; // 특정 이미지 삭제
    clearUploadedImages: () => void; // 이미지 초기화
}

export const useUploadStore = create<UploadState>((set) => ({
    uploadedImages: [],
    setUploadedImages: (images) => set({ uploadedImages: images }),
    addUploadedImage: (image) =>
        set((state) => ({
            uploadedImages: [...state.uploadedImages, image],
        })),
    removeUploadedImage: (index) =>
        set((state) => ({
            uploadedImages: state.uploadedImages.filter((_, i) => i !== index),
        })),
    clearUploadedImages: () => set({ uploadedImages: [] }),
}));
