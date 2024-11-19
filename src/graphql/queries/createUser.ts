import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation CreateUser($createUserInput: CreateUserInput!) {
        createUser(createUserInput: $createUserInput) {
            _id
            email
            name
            picture
            userPoint {
                _id
                amount
            }
            createdAt
            updatedAt
        }
    }
`;
