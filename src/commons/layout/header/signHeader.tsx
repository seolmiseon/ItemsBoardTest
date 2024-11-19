import Image from 'next/image';
import styles from './signHeader.module.css';

export default function SignHeader() {
    return (
        <>
            <div className={styles.logo2}>
                <Image
                    src="/images/anotherLogo.png"
                    width={150}
                    height={30}
                    alt="logo2"
                    priority
                />
            </div>
        </>
    );
}
