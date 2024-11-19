'use client';

import { useQuery } from '@apollo/client';
import { useCallback, useEffect, useState } from 'react';
import ItemCard from '@/components/itemCard';
import InfiniteScroll from '@/components/itemsList/InfiniteScroll';
import { FETCH_USED_ITEMS } from '@/graphql/queries/fetchUseditems';
import styles from './styles.module.css';

interface IItem {
    _id: string;
    name: string;
    price: number;
    images: string[];
    createdAt: string;
}

export default function MainPage(): JSX.Element {
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const { data, loading, fetchMore } = useQuery(FETCH_USED_ITEMS, {
        variables: { isSoldout: false, page },
        notifyOnNetworkStatusChange: true,
    });

    const items: IItem[] = data?.fetchUseditems || [];

    const loadMore = useCallback(async () => {
        if (loading || !hasMore) return;

        try {
            const result = await fetchMore({
                variables: { page: page + 1 },
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;
                    return {
                        fetchUseditems: [
                            ...prev.fetchUseditems,
                            ...fetchMoreResult.fetchUseditems,
                        ],
                    };
                },
            });
            if (result.data.fetchUseditems.length > 0) {
                setPage((prev) => prev + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error('Error loading more items:', error);
        }
    }, [fetchMore, loading, hasMore, page]);

    return (
        <>
            <InfiniteScroll
                onLoadMore={loadMore}
                hasMore={hasMore}
                loading={loading}
                loader={<p>Loading...</p>}
            >
                <div className={styles.listContainer}>
                    {items.map((item) => (
                        <ItemCard
                            key={item._id}
                            _id={item._id}
                            name={item.name}
                            price={item.price}
                            image={item.images?.[0]}
                            createdAt={new Date(
                                item.createdAt
                            ).toLocaleTimeString()}
                        />
                    ))}
                </div>
            </InfiniteScroll>
        </>
    );
}
