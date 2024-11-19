'use client';

import { MouseEvent } from 'react';
import styles from './createBtn.module.css';
import { useRouter } from 'next/navigation';

interface ButtonProps {
    isEdit: boolean;
    reset: () => void;
    itemId?: string;
}

const CreateOrEditBtn = ({
    isEdit,
    reset,
    itemId,
}: ButtonProps): JSX.Element => {
    const router = useRouter();

    const handleCancel = () => {
        if (isEdit && itemId) {
            router.push(`/items/${itemId}`); // 수정 페이지: 상세 페이지로 이동
        } else {
            router.push('/items/'); // 등록 페이지: 목록 페이지로 이동
        }
    };

    return (
        <div className={styles['board-new-item__button-group']}>
            <button
                type="submit"
                className={styles['board-new-item__button--create']}
            >
                {isEdit ? '수정' : '등록'}
            </button>
            <button
                type="button"
                className={styles['board-new-item__button--cancel']}
                onClick={handleCancel}
            >
                취소
            </button>
        </div>
    );
};

export default CreateOrEditBtn;
