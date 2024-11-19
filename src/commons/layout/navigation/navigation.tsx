import { useRouter } from 'next/navigation';
import styles from './navigation.module.css';
import Image from 'next/image';

export default function Navigation() {
    const router = useRouter();

    const handleOnClickSignIn = () => {
        router.push('/signIn');
    };

    const handleOnClickSignUp = () => {
        router.push('/signUp');
    };

    const handleOnClickBasket = () => {
        router.push('/basket');
    };
    return (
        <>
            <div className={styles.navLayout}>
                <div className={styles.navWrapper}>
                    <button
                        onClick={handleOnClickSignIn}
                        className={styles.nav}
                    >
                        로그인
                    </button>
                    <button
                        onClick={handleOnClickSignUp}
                        className={styles.nav}
                    >
                        회원가입
                    </button>
                    <div className={styles.basketWrapper}>
                        <button
                            onClick={handleOnClickBasket}
                            className={styles.nav}
                        >
                            장바구니
                        </button>
                        <div className={styles.ellipse}>
                            <Image
                                src="/images/Ellipse.png"
                                alt="ellipse"
                                width={18}
                                height={18}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
