import { create } from 'zustand';
interface MapState {
    userLocation: { latitude: number; longitude: number } | null;
    setUserLocation: (location: {
        latitude: number;
        longitude: number;
    }) => void;
}

export const useMapStore = create<MapState>((set) => ({
    userLocation: null,
    setUserLocation: (location) => set({ userLocation: location }),
}));
