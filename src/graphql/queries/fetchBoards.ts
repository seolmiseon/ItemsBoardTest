import { gql } from '@apollo/client';

export const FETCH_BOARDS = gql`
    query FetchBoards(
        $endDate: DateTime
        $startDate: DateTime
        $search: String
        $page: Int
    ) {
        fetchBoards(
            endDate: $endDate
            startDate: $startDate
            search: $search
            page: $page
        ) {
            _id
            title
            writer
            contents
            createdAt
            youtubeUrl
            likeCount
            dislikeCount
            images
            boardAddress {
                _id
                zipcode
                address
                addressDetail
            }
            user {
                _id
                name
                email
                picture
            }
        }
    }
`;
