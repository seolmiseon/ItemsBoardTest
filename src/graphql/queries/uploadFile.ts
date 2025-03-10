import { gql } from '@apollo/client';

export const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
        uploadFile(file: $file) {
            _id
            url
            size
            isUsed
            createdAt
            updatedAt
            deletedAt
        }
    }
`;
