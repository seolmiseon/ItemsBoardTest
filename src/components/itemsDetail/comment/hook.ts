import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { CREATE_BOARD_COMMENT } from '@/graphql/queries/createBoardComment';
import { FETCH_BOARD_COMMENTS } from '@/graphql/queries/fetchBoardComments';
import { UPDATE_BOARD_COMMENT } from '@/graphql/queries/updateBoardComment';
import { DELETE_BOARD_COMMENT } from '@/graphql/queries/deleteBoardComment';

export default function useComment(boardId: string) {
    const { data, loading, refetch } = useQuery(FETCH_BOARD_COMMENTS, {
        variables: { boardId, page: 1 },
    });
    const [createComment] = useMutation(CREATE_BOARD_COMMENT);
    const [updateComment] = useMutation(UPDATE_BOARD_COMMENT);
    const [deleteComment] = useMutation(DELETE_BOARD_COMMENT);

    const [editingCommentId, setEditingCommentId] = useState<string | null>(
        null
    );
    const [commentContent, setCommentContent] = useState('');

    const handleDelete = async (commentId: string) => {
        try {
            await deleteComment({ variables: { boardCommentId: commentId } });
            alert('댓글이 삭제되었습니다.');
            refetch();
        } catch (error) {
            console.error(error);
            alert('댓글 삭제에 실패했습니다.');
        }
    };

    const handleEdit = (commentId: string, content: string) => {
        setEditingCommentId(commentId);
        setCommentContent(content);
    };

    const handleSubmit = async () => {
        try {
            if (editingCommentId) {
                await updateComment({
                    variables: {
                        updateBoardCommentInput: { contents: commentContent },
                        boardCommentId: editingCommentId,
                    },
                });
                alert('댓글이 수정되었습니다.');
            } else {
                await createComment({
                    variables: {
                        createBoardCommentInput: { contents: commentContent },
                        boardId,
                    },
                });
                alert('댓글이 작성되었습니다.');
            }
            setCommentContent('');
            setEditingCommentId(null);
            refetch();
        } catch (error) {
            console.error(error);
            alert('댓글 작성/수정에 실패했습니다.');
        }
    };

    return {
        comments: data?.fetchBoardComments || [],
        loading,
        commentContent,
        setCommentContent,
        handleSubmit,
        handleEdit,
        handleDelete,
        editingCommentId,
    };
}
