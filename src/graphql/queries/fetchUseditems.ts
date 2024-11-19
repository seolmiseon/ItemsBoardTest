import { gql } from '@apollo/client';

export const FETCH_USED_ITEMS = gql`
    query FetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
        fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
            _id
            name
            remarks
            contents
            price
            tags
            images
            useditemAddress {
                address
                lat
                lng
            }
            createdAt
        }
    }
`;
