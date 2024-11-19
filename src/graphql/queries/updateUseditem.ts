import { gql } from '@apollo/client';

export const UPDATE_USED_ITEM = gql`
    mutation UpdateUseditem(
        $updateUseditemInput: UpdateUseditemInput!
        $useditemId: ID!
    ) {
        updateUseditem(
            updateUseditemInput: $updateUseditemInput
            useditemId: $useditemId
        ) {
            _id
            name
            price
            tags
            images
            updatedAt
        }
    }
`;
