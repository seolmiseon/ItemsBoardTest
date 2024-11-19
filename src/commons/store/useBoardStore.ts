import { create } from 'zustand';

interface Item {
    id: string;
    title: string;
    content: string;
}

interface CrudState {
    items: Item[];
    fetchItems: () => void;
    addItem: (item: Item) => void;
    updateItem: (id: string, newItem: Item) => void;
    deleteItem: (id: string) => void;
}

export const useBoardStore = create<CrudState>((set) => ({
    items: [],
    fetchItems: async () => {
        const response = await fetch('/api/items');
        const data = await response.json();
        set({ items: data });
    },
    addItem: (item) =>
        set((state) => ({
            items: [...state.items, item],
        })),
    updateItem: (id, newItem) =>
        set((state) => ({
            items: state.items.map((item) => (item.id === id ? newItem : item)),
        })),
    deleteItem: (id) =>
        set((state) => ({
            items: state.items.filter((item) => item.id !== id),
        })),
}));
