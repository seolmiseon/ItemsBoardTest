import { gql } from '@apollo/client';

export const FETCH_USER_LOGGED_IN = gql`
    query FetchUserLoggedIn {
        fetchUserLoggedIn {
            email
            name
            picture
        }
    }
`;
