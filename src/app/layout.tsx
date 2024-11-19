'use client';

import '../styles/globals.css';
import localFont from 'next/font/local';
import LayoutComponent from '@/commons/layout';
import ApolloSetting from '@/commons/settings/ApolloSetting';
import GlobalModal from '../../components/modal/globalModal';
import { userStore } from '@/commons/store/userStore';
import { useEffect } from 'react';

const pretendard = localFont({
    src: './fonts/woff2/PretendardVariable.woff2',
    display: 'swap',
    weight: '100 900',
    variable: '--font-pretendard',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    useEffect(() => {
        userStore.getState().restoreSession();
    }, []);

    return (
        <html lang="en">
            <body className={`${pretendard.variable} vsc-initialized`}>
                <ApolloSetting>
                    <LayoutComponent>
                        {children}
                        <GlobalModal />
                    </LayoutComponent>
                </ApolloSetting>
            </body>
        </html>
    );
}
