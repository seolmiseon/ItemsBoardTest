import { LOGIN_USER } from '@/graphql/queries/loginUser';
import { ApolloError, useApolloClient, useMutation } from '@apollo/client';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { userStore } from '@/commons/store/userStore';
import { useFormStore } from '@/commons/store/useFormStore';
import { fetchUserData } from '@/app/utils/fetchUserData';

export const useSignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setError } = useFormStore();
    const { setUser } = userStore();
    const client = useApolloClient();
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectPath = searchParams.get('redirect') || '/';

    const [loginUser] = useMutation(LOGIN_USER, {
        onError: (error: ApolloError) => {
            console.error('Login failed:', error);

            if (error.networkError) {
                console.error('네트워크 오류:', error.networkError);
            }

            if (error.graphQLErrors && error.graphQLErrors.length > 0) {
                error.graphQLErrors.forEach((err) => {
                    console.error('GraphQL 오류:', err.message);
                });
            }
            setError('로그인 실패: 서버 오류가 발생했습니다.');
        },
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setError('');
        if (id === 'email') setEmail(value);
        if (id === 'password') setPassword(value);
    };

    const validateEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    const validatePassword = (password: string) =>
        password.trim().length >= 6 && /[A-Za-z]/.test(password);

    const isInputValid = () => {
        if (!validateEmail(email)) {
            setError('올바른 이메일 주소를 입력하세요.');
            return false;
        }
        if (!validatePassword(password)) {
            setError('비밀번호는 6자 이상이어야 합니다.');
            return false;
        }
        setError('');
        return true;
    };

    const handleLoginSuccess = async (data: {
        loginUser: { accessToken: string };
    }) => {
        try {
            const fetchUser = await fetchUserData(client);
            if (!fetchUser) {
                setError('유저 정보를 가져오는 데 실패했습니다.');
                return;
            }

            setUser(fetchUser, data.loginUser.accessToken);

            router.push(redirectPath);
        } catch (error) {
            console.error('로그인 후처리 오류:', error);
            setError('로그인 처리 중 오류가 발생했습니다.');
        }
    };

    const handleSignIn = async () => {
        if (!isInputValid()) return;

        try {
            console.log('Sign In Variables:', { email, password });
            const { data } = await loginUser({
                variables: {
                    email: email.trim(),
                    password: password.trim(),
                },
            });

            if (data?.loginUser?.accessToken) {
                console.log('Sign In Response:', data);
                const { accessToken } = data.loginUser;
                userStore.getState().updateAccessToken(accessToken);
                await handleLoginSuccess(data);
            } else {
                setError('로그인 응답에 액세스 토큰이 없습니다.');
            }
        } catch (error) {
            console.error('로그인 요청 오류:', error);
            setError('로그인 요청 중 문제가 발생했습니다.');
        }
    };

    return {
        email,
        password,
        handleInputChange,
        handleSignIn,
    };
};
