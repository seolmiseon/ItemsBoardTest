'use client';

import React from 'react';
import useSignUp from './hook';
import styles from './signUp.module.css';
import { FormProvider } from 'react-hook-form';

const SignUp = () => {
    const methods = useSignUp();
    console.log(methods);

    return (
        <FormProvider {...methods}>
            <div className={styles.signUpContainer}>
                <form
                    onSubmit={methods.handleSubmit(methods.onSubmit)}
                    className={styles.signUpBox}
                >
                    <div className={styles.inputText}>
                        <label>이메일</label>
                        <input
                            type="email"
                            {...methods.register('email')}
                            placeholder="example@email.com"
                        />
                        {methods.formState.errors.email && (
                            <p>{methods.formState.errors.email.message}</p>
                        )}
                    </div>

                    <div className={styles.inputText}>
                        <label>비밀번호</label>
                        <input
                            type="password"
                            {...methods.register('password')}
                            placeholder="비밀번호"
                        />
                        {methods.formState.errors.password && (
                            <p>{methods.formState.errors.password.message}</p>
                        )}
                    </div>

                    <div className={styles.inputText}>
                        <label>비밀번호 확인</label>
                        <input
                            type="password"
                            {...methods.register('password2')}
                            placeholder="비밀번호 확인"
                        />
                        {methods.formState.errors.password2 && (
                            <p>{methods.formState.errors.password2.message}</p>
                        )}
                    </div>

                    <div className={styles.inputText}>
                        <label>이름</label>
                        <input
                            type="text"
                            {...methods.register('name')}
                            placeholder="이름"
                        />
                        {methods.formState.errors.name && (
                            <p>{methods.formState.errors.name.message}</p>
                        )}
                    </div>
                    <div className={styles.btnWrapper}>
                        <button
                            type="submit"
                            disabled={!methods.formState.isValid}
                            className={styles.signUpBtn}
                        >
                            회원가입
                        </button>
                        <button
                            type="button"
                            className={styles.cancelBtn}
                            onClick={() => methods.reset()}
                        >
                            취소
                        </button>
                    </div>
                </form>
            </div>
        </FormProvider>
    );
};

export default SignUp;
