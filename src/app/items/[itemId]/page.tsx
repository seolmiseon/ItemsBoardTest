'use client';

import NewItemUI from '@/components/itemsCreate';
import { PencilIcon, XIcon } from '@/components/icon';
import { useRouter } from 'next/navigation';
import styles from './styles.module.css';
import useComment from '@/components/itemsDetail/comment/hook';
import CommentUI from '@/components/itemsDetail/comment/index';

export default function ItemDetailPage({
    params,
}: {
    params: { itemId: string };
}) {
    const router = useRouter();
    const currentUserId = 'mockUserId';
    const {
        comments,
        loading,
        commentContent,
        setCommentContent,
        handleSubmit,
        editingCommentId,
    } = useComment(params.itemId);

    const handleDelete = () => {
        alert('상품이 삭제되었습니다.');
        router.push('/');
    };

    const handleEdit = () => {
        router.push(`/items/edit/${params.itemId}`);
    };
    return (
        <div>
            <NewItemUI
                isEdit={true}
                itemId={params.itemId}
                readOnly={true}
                onComplete={() => {
                    console.log('수정 완료!');
                }}
            />
            <div className={styles.iconContainer}>
                <PencilIcon className={styles.icon} onClick={handleEdit} />
                <XIcon className={styles.icon} onClick={handleDelete} />
            </div>
            <CommentUI
                comments={comments}
                loading={loading}
                currentUserId={currentUserId}
                commentContent={commentContent}
                setCommentContent={setCommentContent}
                handleSubmit={handleSubmit}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                isEditing={!!editingCommentId}
            />
        </div>
    );
}
