'use client';

import Image from 'next/image';
import useImageUpload from './hook';
import { useState } from 'react';
import styles from './upload.module.css';

interface UploadUIProps {
    onImagesUpload: (files: File[]) => void;
    uploadedUrls?: string[];
    readOnly?: boolean;
}

const UploadUI: React.FC<UploadUIProps> = ({
    onImagesUpload,
    uploadedUrls = [],
    readOnly = false,
}) => {
    const {
        fileRef,
        uploadedImages,
        handleOnChangeImg,
        handleOnClickImage,
        handleDeleteImage,
    } = useImageUpload(onImagesUpload);

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleOnClickImageWithReadOnly = () => {
        if (readOnly) {
            return; // 읽기 전용 상태일 때 파일 선택 막기
        }
        handleOnClickImage(); // 그렇지 않으면 원래 동작 실행
    };

    return (
        <>
            <div
                className={styles.imgCard}
                onClick={handleOnClickImageWithReadOnly}
            >
                {uploadedImages.length > 0 ? (
                    uploadedImages.map((image, index) => (
                        <div
                            key={index}
                            className={styles.imagePreview}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <Image
                                src={image}
                                alt={`Uploaded preview ${index}`}
                                layout="fill"
                                objectFit="cover"
                            />
                            {hoveredIndex === index && !readOnly && (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDeleteImage(index);
                                    }}
                                    className={styles.deleteButton}
                                >
                                    x
                                </button>
                            )}
                        </div>
                    ))
                ) : (
                    <div>
                        <div className={styles.uploadText}>+</div>
                        <div className={styles.uploadText}>사진첨부</div>
                    </div>
                )}
                <input
                    type="file"
                    onChange={handleOnChangeImg}
                    style={{ display: 'none' }}
                    ref={fileRef}
                    multiple
                    disabled={readOnly}
                />
            </div>
        </>
    );
};

export default UploadUI;
