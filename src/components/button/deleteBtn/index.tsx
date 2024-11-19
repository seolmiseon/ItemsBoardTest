'use client';

import { DeleteIcon } from '../../icon';
import { useMutation } from '@apollo/client';
import { DELETE_BOARD } from '@/graphql/queries/deleteBoard';
import { useRouter } from 'next/navigation';

interface DeleteButtonProps {
    boardId: string;
}

export default function DeleteButton({ boardId }: DeleteButtonProps) {
    const [deleteBoard] = useMutation(DELETE_BOARD);
    const router = useRouter();

    const handleOnClickDelete = async () => {
        const confirmDelete = confirm('정말 삭제하시겠습니까?');
        if (!confirmDelete) return;

        try {
            await deleteBoard({ variables: { boardId } });
            alert('삭제되었습니다.');
            router.push('/');
        } catch (error) {
            console.error(error);
            alert('삭제 실패');
        }
    };

    return (
        <button onClick={handleOnClickDelete}>
            <DeleteIcon width={18} height={18} color="#BDBDBD" />
            삭제
        </button>
    );
}
