'use client';

import styles from './signIn.module.css';
import { useSignInPage } from './hook';
import { ChangeEvent, useEffect } from 'react';
import { userStore } from '@/commons/store/userStore';
import SignInButton from '@/components/button/signInBtn/signInBtn';
import { useFormStore } from '@/commons/store/useFormStore';

export default function SignInUIPage() {
    const { email, password, handleInputChange, handleSignIn } =
        useSignInPage();
    const { error } = useFormStore();
    const { userLoggedInStatus } = userStore();

    useEffect(() => {
        if (userLoggedInStatus) {
            console.log('로그인 상태 변경됨:', userLoggedInStatus);
        }
    }, [userLoggedInStatus]);
    const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        await handleSignIn(); // 로그인 처리 로직 호출
    };
    return (
        <div className={styles.signInPageContainer}>
            <div className={styles.signBox}>
                <div className={styles.titleText}>
                    <h1 className={styles.h1}>로그인</h1>{' '}
                    <h3 className={styles.h3}>Login</h3>
                </div>
                {userLoggedInStatus ? (
                    <img src="/images/userIcon.png" alt="로그인 성공 이미지" />
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className={styles.loginInputWrapper}
                    >
                        <input
                            className={styles.loginInput}
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleInputChange}
                            placeholder="아이디"
                        />
                        <input
                            className={styles.loginInput}
                            type="password"
                            id="password"
                            value={password}
                            onChange={handleInputChange}
                            placeholder="비밀번호"
                            autoComplete="current-password"
                        />
                        <SignInButton />
                        {error && (
                            <p className={styles.errorMessage}>{error}</p>
                        )}
                    </form>
                )}
            </div>
        </div>
    );
}
