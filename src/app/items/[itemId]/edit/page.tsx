'use client';

import NewItemUI from '@/components/itemsCreate';
import { useRouter } from 'next/navigation';
const router = useRouter();

const handleComplete = () => {
    alert('상품수정이 완료되었습니다!');
    router.push('/items');
};

export default function ItemEditPage() {
    return <NewItemUI isEdit={true} onComplete={handleComplete} />;
}
