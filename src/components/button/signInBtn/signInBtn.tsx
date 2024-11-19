'use client';

import { useSignInPage } from '@/app/signIn/hook';
import styles from './signIn.module.css';

export default function SignInButton() {
    const { handleSignIn } = useSignInPage();
    return (
        <>
            <div className={styles.signInWrapper}>
                <button onClick={handleSignIn} className={styles.signInBtn}>
                    로그인
                </button>
            </div>
        </>
    );
}
