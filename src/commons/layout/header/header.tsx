'use client';

import Image from 'next/image';
import styles from './header.module.css';
import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();

    const handleSellClick = () => {
        router.push('/items/new');
    };
    return (
        <>
            <div className={styles.headerLayout}>
                <div className={styles.leftHeader}>
                    <div>
                        <Image
                            className={styles.logo}
                            src="/images/logo.png"
                            alt="logo"
                            width={150}
                            height={30}
                            priority
                        />
                    </div>
                </div>
                <div className={styles.rightHeader} onClick={handleSellClick}>
                    <Image
                        className={styles.sellIcon}
                        src="/images/sell.png"
                        alt="sell"
                        width={30}
                        height={30}
                    />
                    <div className={styles.headerText}>판매하기</div>
                </div>
            </div>
        </>
    );
}
