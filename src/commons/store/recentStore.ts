import { create } from 'zustand';

interface item {
    id: string;
    name: string;
    imageUrl?: string;
}
interface RecentStore {
    items: item[];
    addItem: (item: { id: string; name: string }) => void;
}

export const recentStore = create<RecentStore>((set) => ({
    items: [],
    addItem: (item) =>
        set((state) => {
            const updatedItems = [
                ...state.items.filter((p) => p.id !== item.id),
                item,
            ];
            localStorage.setItem('recentItems', JSON.stringify(updatedItems));
            return { items: updatedItems };
        }),
}));
