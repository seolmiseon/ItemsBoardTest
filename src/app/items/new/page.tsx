'use client';

import NewItemUI from '@/components/itemsCreate';
import { useRouter } from 'next/navigation';

export default function NewItemPage() {
    const router = useRouter();

    const handleComplete = () => {
        alert('상품이 등록되었습니다!');
        router.push('/');
    };

    return <NewItemUI isEdit={false} onComplete={handleComplete} />;
}
