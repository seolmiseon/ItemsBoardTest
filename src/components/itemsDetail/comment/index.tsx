'use client';

import { PencilIcon, XIcon } from '@/components/icon';
import styles from './styles.module.css';

interface CommentUIProps {
    comments: any[];
    loading: boolean;
    currentUserId: string;
    commentContent: string;
    setCommentContent: (content: string) => void;
    handleSubmit: () => void;
    handleEdit: (commentId: string, content: string) => void;
    handleDelete: (commentId: string) => void;
    isEditing: boolean;
}

export default function CommentUI({
    comments,
    loading,
    currentUserId,
    commentContent,
    setCommentContent,
    handleSubmit,
    handleEdit,
    handleDelete,
    isEditing,
}: CommentUIProps) {
    if (loading) return <p>로딩 중...</p>;

    return (
        <div className={styles.commentContainer}>
            <ul className={styles.commentList}>
                {comments.map((comment) => (
                    <li key={comment._id} className={styles.commentItem}>
                        <div className={styles.commentContent}>
                            <p>{comment.contents}</p>
                            <p className={styles.commentAuthor}>
                                작성자: {comment.writer}
                            </p>
                        </div>
                        {comment.user?._id === currentUserId && (
                            <div className={styles.commentActions}>
                                <PencilIcon
                                    className={styles.icon}
                                    onClick={() =>
                                        handleEdit(
                                            comment._id,
                                            comment.contents
                                        )
                                    }
                                />
                                <XIcon
                                    className={styles.icon}
                                    onClick={() => handleDelete(comment._id)}
                                />
                            </div>
                        )}
                    </li>
                ))}
            </ul>

            <div className={styles.commentInput}>
                <textarea
                    className={styles.textarea}
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                    placeholder={
                        isEditing ? '댓글을 수정하세요.' : '댓글을 입력하세요.'
                    }
                />
                <button className={styles.submitButton} onClick={handleSubmit}>
                    {isEditing ? '수정 완료' : '댓글 작성'}
                </button>
            </div>
        </div>
    );
}
