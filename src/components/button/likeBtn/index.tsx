'use client';

import { LikeIcon } from '../../icon';
import { useMutation } from '@apollo/client';
import { TOGGLE_USED_ITEM_PICK } from '@/graphql/queries/toggleUseditemPick';

interface LikeButtonProps {
    item: {
        _id: string;
        isLiked: boolean;
        likeCount: number;
    };
}

export default function LikeButton({ item }: LikeButtonProps) {
    const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

    const handleOnClickLike = async () => {
        try {
            await toggleUseditemPick({ variables: { useditemId: item._id } });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <button onClick={handleOnClickLike}>
            <LikeIcon isFilled={item.isLiked} width={32} height={27} />
            {item.isLiked ? '❤️' : '🤍'} 찜 ({item.likeCount})
        </button>
    );
}
