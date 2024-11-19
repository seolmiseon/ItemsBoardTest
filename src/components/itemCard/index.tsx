'use client';

import { useRouter } from 'next/navigation';
import styles from './itemCard.module.css';
import Image from 'next/image';

interface IItemCardProps {
    _id: string;
    name: string;
    price: number | null;
    image: string;
    createdAt: string;
}

const ItemCard: React.FC<IItemCardProps> = ({
    _id,
    name,
    price,
    image,
    createdAt,
}) => {
    const router = useRouter();

    const handleCardClick = () => {
        router.push(`/items/${_id}`);
    };

    return (
        <div
            className={styles.card}
            onClick={handleCardClick}
            style={{ cursor: 'pointer' }}
        >
            <div className={styles.cardBackground}>
                <Image
                    src={
                        image
                            ? `https://storage.googleapis.com/${image}`
                            : '/images/bellyFat.png'
                    }
                    alt={name || '상품 이미지'}
                    width={300}
                    height={200}
                    className={styles.cardImage}
                />
                <div className={styles.cardName}>{name}</div>
                <div className={styles.cardPrice}>
                    {price !== null && price !== undefined
                        ? `${price.toLocaleString()}원`
                        : '가격 정보 없음'}
                </div>
                <div className={styles.time}>{createdAt}</div>
            </div>
        </div>
    );
};

export default ItemCard;
