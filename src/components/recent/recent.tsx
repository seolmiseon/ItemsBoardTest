import { useEffect } from 'react';
import { recentStore } from '@/commons/store/recentStore';
import Link from 'next/link';

export default function RecentViewed() {
    const items = recentStore((state) => state.items);

    useEffect(() => {
        const storeItems = JSON.parse(
            localStorage.getItem('recentItems') || '[]'
        );
        const normalizedItems = storeItems.map(
            (item: { id: string; name: string; imageUrl?: string }) => ({
                ...item,
                imageUrl: item.imageUrl || '/default-image.jpg', // 기본값 설정
            })
        );
        if (normalizedItems.length) {
            recentStore.setState({ items: normalizedItems });
        }
    }, []);

    return (
        <div>
            <h3>최근 본 상품</h3>
            {items.length === 0 ? (
                <p>최근 본 상품이 없습니다.</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {items.map((item) => (
                        <li
                            key={item.id}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '10px',
                            }}
                        >
                            <img
                                src={item.imageUrl}
                                alt={item.name}
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    marginRight: '10px',
                                    borderRadius: '5px',
                                }}
                            />
                            <Link href={`/items/${item.id}`}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
