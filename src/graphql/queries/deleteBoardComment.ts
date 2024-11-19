import { gql } from '@apollo/client';

export const DELETE_BOARD_COMMENT = gql`
    mutation DeleteBoardComment($password: String, $boardCommentId: ID!) {
        deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
    }
`;
