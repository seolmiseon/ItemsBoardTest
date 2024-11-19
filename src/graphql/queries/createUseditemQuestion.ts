import { gql } from '@apollo/client';

export const CREATE_USED_ITEM_QUESTION = gql`
    mutation CreateUseditemQuestion(
        $createUseditemQuestionInput: CreateUseditemQuestionInput!
        $useditemId: ID!
    ) {
        createUseditemQuestion(
            createUseditemQuestionInput: $createUseditemQuestionInput
            useditemId: $useditemId
        ) {
            _id
            contents
            createdAt
            updatedAt
            user {
                _id
                name
            }
        }
    }
`;
