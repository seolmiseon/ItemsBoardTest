// import { checkFileValidation } from '@/commons/libraries/FileValidation';
import { useUploadStore } from '@/commons/store/useUploadStore';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

const useImageUpload = (onImagesUpload: (files: File[]) => void) => {
    const { uploadedImages, addUploadedImage, removeUploadedImage } =
        useUploadStore();
    const fileRef = useRef<HTMLInputElement>(null);

    const checkFileValidation = (file: File) => {
        const allowedTypes = ['image/jpeg', 'image/png'];
        const maxSize = 5 * 1024 * 1024; // 5MB

        if (!allowedTypes.includes(file.type)) {
            alert('이미지 파일만 업로드 가능합니다.');
            return false;
        }

        if (file.size > maxSize) {
            alert('파일 크기는 5MB를 초과할 수 없습니다.');
            return false;
        }

        return true;
    };

    const handleOnChangeImg = async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        console.log(files, '있니없니');
        if (!files) return;

        const validFiles = Array.from(files).filter(checkFileValidation);

        onImagesUpload(validFiles);

        const temporaryUrls = validFiles.map((file) =>
            URL.createObjectURL(file)
        );
        temporaryUrls.forEach((url: string) => addUploadedImage(url));
    };

    const handleOnClickImage = () => {
        fileRef.current?.click();
    };

    const handleDeleteImage = (index: number) => {
        removeUploadedImage(index);
    };
    return {
        fileRef,
        uploadedImages,
        handleOnChangeImg,
        handleOnClickImage,
        handleDeleteImage,
    };
};
export default useImageUpload;
