import { ApolloClient, gql } from '@apollo/client';

const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn {
        fetchUserLoggedIn {
            _id
            email
            name
        }
    }
`;

export const fetchUserData = async (client: ApolloClient<any>) => {
    try {
        const { data } = await client.query({
            query: FETCH_USER_LOGGED_IN,
        });
        return data.fetchUserLoggedIn;
    } catch (error) {
        console.error('where useData:', error);
        return null;
    }
};
