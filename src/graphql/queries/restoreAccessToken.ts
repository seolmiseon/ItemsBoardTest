import { gql } from '@apollo/client';

export const RESTORE_ACCESS_TOKEN = gql`
    mutation RestoreAccessToken {
        restoreAccessToken {
            accessToken
        }
    }
`;
