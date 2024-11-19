import { gql } from '@apollo/client';

export const UPDATE_BOARD = gql`
    mutation UpdateBoard(
        $updateBoardInput: UpdateBoardInput!
        $password: String
        $boardId: ID!
    ) {
        updateBoard(
            updateBoardInput: $updateBoardInput
            password: $password
            boardId: $boardId
        ) {
            _id
            writer
            title
            contents
            youtubeUrl
            images
            boardAddress {
                zipcode
                address
                addressDetail
            }
        }
    }
`;
