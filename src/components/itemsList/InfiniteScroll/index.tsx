import React, { useEffect, useRef } from 'react';

interface IInfiniteScrollProps {
    onLoadMore: () => Promise<void>;
    hasMore: boolean;
    loading: boolean;
    loader: React.ReactNode;
    children?: React.ReactNode;
}

const InfiniteScroll: React.FC<IInfiniteScrollProps> = ({
    onLoadMore,
    hasMore,
    loading,
    loader,
    children,
}) => {
    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleObserver = (entries: IntersectionObserverEntry[]) => {
            const target = entries[0];
            if (target.isIntersecting && !loading && hasMore) {
                onLoadMore();
            }
        };

        const observer = new IntersectionObserver(handleObserver, {
            rootMargin: '100px',
        });

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        return () => {
            observer?.disconnect();
        };
    }, [onLoadMore, hasMore, loading]);

    return (
        <div>
            {children}
            {hasMore && <div ref={loadMoreRef}>{loading && loader} </div>}
        </div>
    );
};

export default InfiniteScroll;
