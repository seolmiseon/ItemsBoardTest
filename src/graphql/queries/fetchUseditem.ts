import { gql } from '@apollo/client';

export const FETCH_USED_ITEM = gql`
    query FetchUseditem($useditemId: ID!) {
        fetchUseditem(useditemId: $useditemId) {
            _id
            name
            remarks
            contents
            price
            tags
            useditemAddress {
                address
                addressDetail
                zipcode
            }
        }
    }
`;
