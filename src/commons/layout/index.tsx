'use client';

import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Header from './header/header';
import Navigation from './navigation/navigation';
import SignHeader from './header/signHeader';
import styles from './layout.module.css';

interface ILayoutProps {
    children: ReactNode;
}

export default function LayoutComponent({ children }: ILayoutProps) {
    const pathname = usePathname();

    const isSignPage = pathname === '/signUp' || pathname === '/signIn';

    return (
        <>
            <div className={styles.layoutWrapper}>
                {!isSignPage && (
                    <>
                        <Navigation />
                        <Header />
                    </>
                )}
                {isSignPage && <SignHeader />}

                <div className={styles.mainContent}>{children}</div>
            </div>
        </>
    );
}
