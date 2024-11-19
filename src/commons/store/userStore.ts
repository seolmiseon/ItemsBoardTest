import { create } from 'zustand';
import { useLoadStore } from './useLoadStore';

interface User {
    _id: string;
    name: string;
    email: string;
    picture?: string;
}

interface IUserStore {
    user: User | null;
    accessToken: string | null;
    userLoggedInStatus: boolean;

    setUser: (user: User | null, accessToken: string | null) => void;
    updateAccessToken: (newToken: string) => void;
    refreshAccessToken: () => Promise<string | null>;
    restoreSession: () => Promise<void>;
    logout: () => void;
    isAuthorized: (userId: string) => boolean;
}

export const userStore = create<IUserStore>((set, get) => ({
    user: null,
    accessToken: null,
    userLoggedInStatus: false,

    setUser: (user, accessToken) =>
        set({
            user,
            accessToken,
            userLoggedInStatus: !!user && !!accessToken,
        }),

    updateAccessToken: (newToken) => {
        set((state) => ({
            accessToken: newToken,
            userLoggedInStatus: !!state.user && !!newToken,
        }));
        if (newToken) {
            localStorage.setItem('accessToken', newToken);
        } else {
            localStorage.removeItem('accessToken');
        }
    },

    refreshAccessToken: async () => {
        const setIsLoading = useLoadStore.getState().setIsLoading;
        try {
            setIsLoading(true);
            const response = await fetch(
                'https://backend-practice.codebootcamp.co.kr/graphql',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({
                        query: `mutation restoreAccessToken { restoreAccessToken { accessToken } }`,
                    }),
                }
            );

            if (!response.ok) {
                console.error(
                    'Failed to fetch access token. HTTP Status:',
                    response.status
                );
                return null;
            }

            const result = await response.json();
            console.log('Server response:', result);

            const newToken = result?.data?.restoreAccessToken?.accessToken;

            if (newToken) {
                console.log('Access token refreshed successfully:', newToken);
                set((state) => ({
                    accessToken: newToken,
                    userLoggedInStatus: !!state.user && !!newToken,
                }));
                localStorage.setItem('accessToken', newToken);
                return newToken;
            }
        } catch (error) {
            console.log('리프레쉬오류', error);
            return null;
        } finally {
            setIsLoading(false);
        }
    },

    restoreSession: async () => {
        const storedToken = localStorage.getItem('accessToken');
        if (storedToken) {
            // 로컬 스토리지에 저장된 토큰 상태에 업데이트
            get().updateAccessToken(storedToken);
        } else {
            console.log('스토어에 없다고!!!');
            const newToken = await get().refreshAccessToken();
            if (!newToken) {
                console.log('세션 복구 실패: 새 토큰을 가져올 수 없습니다.');
                get().logout();
            } else {
                console.log('Session restored with new token:', newToken);
            }
        }
    },

    logout: () => {
        localStorage.removeItem('accessToken');
        set({ user: null, accessToken: null, userLoggedInStatus: false });
    },

    isAuthorized: (userId) => {
        const user = get().user;
        return user ? user._id === userId : false;
    },
}));

export const isLoggedIn = userStore.getState().userLoggedInStatus;
