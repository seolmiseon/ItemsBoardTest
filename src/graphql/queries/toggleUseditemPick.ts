import { gql } from '@apollo/client';

export const TOGGLE_USED_ITEM_PICK = gql`
    mutation ToggleUseditemPick($useditemId: ID!) {
        toggleUseditemPick(useditemId: $useditemId)
    }
`;
