'use client';
import {
    ApolloClient,
    ApolloLink,
    ApolloProvider,
    InMemoryCache,
    Observable,
} from '@apollo/client';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { useLoadStore } from '../store/useLoadStore';
import { useEffect, useState } from 'react';
import { userStore } from '../store/userStore';

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSetting {
    children: React.ReactNode;
}

interface IAuthError {
    extensions: {
        code: string;
    };
}

export default function ApolloSetting(props: IApolloSetting) {
    const { refreshAccessToken, updateAccessToken } = userStore();
    const { setIsLoading } = useLoadStore();
    const [tokenReady, setTokenReady] = useState(false);

    const authLink = setContext((_, { headers }) => {
        const token = userStore.getState().accessToken;
        return {
            headers: {
                ...headers,
                Authorization: token ? `Bearer ${token}` : '',
            },
        };
    });

    useEffect(() => {
        if (!userStore.getState().accessToken) {
            setIsLoading(true);
            refreshAccessToken()
                .then((newToken) => {
                    if (newToken) updateAccessToken(newToken);
                    setTokenReady(true);
                })
                .catch((error) => {
                    console.log('Initial token refresh error:', error);
                    setTokenReady(true); // 에러가 발생해도 앱은 계속 실행되어야 함
                })
                .finally(() => setIsLoading(false));
        } else {
            setTokenReady(true);
        }
    }, []);

    const IsAuthErrors = (error: any): error is IAuthError => {
        return (
            error?.extensions?.code === 'UNAUTHENTICATED' ||
            error?.message?.toLowerCase().includes('unauthenticated')
        );
    };

    const errorLink = onError(({ graphQLErrors, operation, forward }) => {
        if (graphQLErrors) {
            for (const error of graphQLErrors) {
                if (IsAuthErrors(error)) {
                    return new Observable((observer) => {
                        refreshAccessToken()
                            .then((newToken) => {
                                if (newToken) {
                                    updateAccessToken(newToken);
                                    // Retry the operation with the new token
                                    operation.setContext(
                                        ({ headers = {} }) => ({
                                            headers: {
                                                ...headers,
                                                Authorization: `Bearer ${newToken}`,
                                            },
                                        })
                                    );

                                    forward(operation).subscribe(observer);
                                }
                            })
                            .catch((error) => {
                                observer.error(error);
                            });
                    });
                }
            }
        }

        return forward(operation);
    });
    const uploadLink = createUploadLink({
        uri: 'https://backend-practice.codebootcamp.co.kr/graphql',
        credentials: 'include',
    });

    const client = new ApolloClient({
        link: ApolloLink.from([authLink, errorLink, uploadLink]),
        cache: GLOBAL_STATE,
        connectToDevTools: true,
    });

    if (!tokenReady) {
        return <div>로딩 중...</div>;
    }

    return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
