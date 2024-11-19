import { gql } from '@apollo/client';

export const DELETE_BOARD = gql`
    mutation DeleteBoard($boardId: ID!) {
        deleteBoard(boardId: $boardId)
    }
`;
