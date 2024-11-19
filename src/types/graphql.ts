import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
    T extends { [key: string]: unknown },
    K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
    | T
    | {
          [P in keyof T]?: P extends ' $fragmentName' | '__typename'
              ? T[P]
              : never;
      };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
    DateTime: { input: any; output: any };
    Upload: { input: any; output: any };
};

export type Board = {
    __typename?: 'Board';
    _id: Scalars['ID']['output'];
    boardAddress?: Maybe<BoardAddress>;
    contents: Scalars['String']['output'];
    createdAt: Scalars['DateTime']['output'];
    deletedAt?: Maybe<Scalars['DateTime']['output']>;
    dislikeCount: Scalars['Int']['output'];
    images?: Maybe<Array<Scalars['String']['output']>>;
    likeCount: Scalars['Int']['output'];
    title: Scalars['String']['output'];
    updatedAt: Scalars['DateTime']['output'];
    user?: Maybe<User>;
    writer?: Maybe<Scalars['String']['output']>;
    youtubeUrl?: Maybe<Scalars['String']['output']>;
};

export type BoardAddress = {
    __typename?: 'BoardAddress';
    _id: Scalars['ID']['output'];
    address?: Maybe<Scalars['String']['output']>;
    addressDetail?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['DateTime']['output'];
    deletedAt?: Maybe<Scalars['DateTime']['output']>;
    updatedAt: Scalars['DateTime']['output'];
    zipcode?: Maybe<Scalars['String']['output']>;
};

export type BoardAddressInput = {
    address?: InputMaybe<Scalars['String']['input']>;
    addressDetail?: InputMaybe<Scalars['String']['input']>;
    zipcode?: InputMaybe<Scalars['String']['input']>;
};

export type BoardComment = {
    __typename?: 'BoardComment';
    _id: Scalars['ID']['output'];
    contents: Scalars['String']['output'];
    createdAt: Scalars['DateTime']['output'];
    deletedAt?: Maybe<Scalars['DateTime']['output']>;
    rating: Scalars['Float']['output'];
    updatedAt: Scalars['DateTime']['output'];
    user?: Maybe<User>;
    writer?: Maybe<Scalars['String']['output']>;
};

export type CreateBoardCommentInput = {
    contents: Scalars['String']['input'];
    password?: InputMaybe<Scalars['String']['input']>;
    rating: Scalars['Float']['input'];
    writer?: InputMaybe<Scalars['String']['input']>;
};

export type CreateBoardInput = {
    boardAddress?: InputMaybe<BoardAddressInput>;
    contents: Scalars['String']['input'];
    images?: InputMaybe<Array<Scalars['String']['input']>>;
    password?: InputMaybe<Scalars['String']['input']>;
    title: Scalars['String']['input'];
    writer?: InputMaybe<Scalars['String']['input']>;
    youtubeUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUseditemInput = {
    contents: Scalars['String']['input'];
    images?: InputMaybe<Array<Scalars['String']['input']>>;
    name: Scalars['String']['input'];
    price: Scalars['Int']['input'];
    remarks: Scalars['String']['input'];
    tags?: InputMaybe<Array<Scalars['String']['input']>>;
    useditemAddress?: InputMaybe<UseditemAddressInput>;
};

export type CreateUseditemQuestionAnswerInput = {
    contents: Scalars['String']['input'];
};

export type CreateUseditemQuestionInput = {
    contents: Scalars['String']['input'];
};

export type CreateUserInput = {
    email: Scalars['String']['input'];
    name: Scalars['String']['input'];
    password: Scalars['String']['input'];
};

export type FileManager = {
    __typename?: 'FileManager';
    _id: Scalars['ID']['output'];
    createdAt: Scalars['DateTime']['output'];
    deletedAt?: Maybe<Scalars['DateTime']['output']>;
    isUsed: Scalars['Boolean']['output'];
    size?: Maybe<Scalars['Float']['output']>;
    updatedAt: Scalars['DateTime']['output'];
    url: Scalars['String']['output'];
};

export type Mutation = {
    __typename?: 'Mutation';
    createBoard: Board;
    createBoardComment: BoardComment;
    createPointTransactionOfBuyingAndSelling: Useditem;
    createPointTransactionOfLoading: PointTransaction;
    createUseditem: Useditem;
    createUseditemQuestion: UseditemQuestion;
    createUseditemQuestionAnswer: UseditemQuestionAnswer;
    createUser: User;
    deleteBoard: Scalars['ID']['output'];
    deleteBoardComment: Scalars['ID']['output'];
    deleteBoards: Array<Scalars['ID']['output']>;
    deleteUseditem: Scalars['ID']['output'];
    deleteUseditemQuestion: Scalars['ID']['output'];
    deleteUseditemQuestionAnswer: Scalars['String']['output'];
    dislikeBoard: Scalars['Int']['output'];
    likeBoard: Scalars['Int']['output'];
    loginUser: Token;
    loginUserExample: Token;
    logoutUser: Scalars['Boolean']['output'];
    resetUserPassword: Scalars['Boolean']['output'];
    restoreAccessToken: Token;
    toggleUseditemPick: Scalars['Int']['output'];
    updateBoard: Board;
    updateBoardComment: BoardComment;
    updateUseditem: Useditem;
    updateUseditemQuestion: UseditemQuestion;
    updateUseditemQuestionAnswer: UseditemQuestionAnswer;
    updateUser: User;
    uploadFile: FileManager;
};

export type MutationCreateBoardArgs = {
    createBoardInput: CreateBoardInput;
};

export type MutationCreateBoardCommentArgs = {
    boardId: Scalars['ID']['input'];
    createBoardCommentInput: CreateBoardCommentInput;
};

export type MutationCreatePointTransactionOfBuyingAndSellingArgs = {
    useritemId: Scalars['ID']['input'];
};

export type MutationCreatePointTransactionOfLoadingArgs = {
    impUid: Scalars['ID']['input'];
};

export type MutationCreateUseditemArgs = {
    createUseditemInput: CreateUseditemInput;
};

export type MutationCreateUseditemQuestionArgs = {
    createUseditemQuestionInput: CreateUseditemQuestionInput;
    useditemId: Scalars['ID']['input'];
};

export type MutationCreateUseditemQuestionAnswerArgs = {
    createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput;
    useditemQuestionId: Scalars['ID']['input'];
};

export type MutationCreateUserArgs = {
    createUserInput: CreateUserInput;
};

export type MutationDeleteBoardArgs = {
    boardId: Scalars['ID']['input'];
};

export type MutationDeleteBoardCommentArgs = {
    boardCommentId: Scalars['ID']['input'];
    password?: InputMaybe<Scalars['String']['input']>;
};

export type MutationDeleteBoardsArgs = {
    boardIds: Array<Scalars['ID']['input']>;
};

export type MutationDeleteUseditemArgs = {
    useditemId: Scalars['ID']['input'];
};

export type MutationDeleteUseditemQuestionArgs = {
    useditemQuestionId: Scalars['ID']['input'];
};

export type MutationDeleteUseditemQuestionAnswerArgs = {
    useditemQuestionAnswerId: Scalars['ID']['input'];
};

export type MutationDislikeBoardArgs = {
    boardId: Scalars['ID']['input'];
};

export type MutationLikeBoardArgs = {
    boardId: Scalars['ID']['input'];
};

export type MutationLoginUserArgs = {
    email: Scalars['String']['input'];
    password: Scalars['String']['input'];
};

export type MutationLoginUserExampleArgs = {
    email: Scalars['String']['input'];
    password: Scalars['String']['input'];
};

export type MutationResetUserPasswordArgs = {
    password: Scalars['String']['input'];
};

export type MutationToggleUseditemPickArgs = {
    useditemId: Scalars['ID']['input'];
};

export type MutationUpdateBoardArgs = {
    boardId: Scalars['ID']['input'];
    password?: InputMaybe<Scalars['String']['input']>;
    updateBoardInput: UpdateBoardInput;
};

export type MutationUpdateBoardCommentArgs = {
    boardCommentId: Scalars['ID']['input'];
    password?: InputMaybe<Scalars['String']['input']>;
    updateBoardCommentInput: UpdateBoardCommentInput;
};

export type MutationUpdateUseditemArgs = {
    updateUseditemInput: UpdateUseditemInput;
    useditemId: Scalars['ID']['input'];
};

export type MutationUpdateUseditemQuestionArgs = {
    updateUseditemQuestionInput: UpdateUseditemQuestionInput;
    useditemQuestionId: Scalars['ID']['input'];
};

export type MutationUpdateUseditemQuestionAnswerArgs = {
    updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput;
    useditemQuestionAnswerId: Scalars['ID']['input'];
};

export type MutationUpdateUserArgs = {
    updateUserInput: UpdateUserInput;
};

export type MutationUploadFileArgs = {
    file: Scalars['Upload']['input'];
};

export type PointTransaction = {
    __typename?: 'PointTransaction';
    _id: Scalars['ID']['output'];
    amount: Scalars['Int']['output'];
    balance: Scalars['Int']['output'];
    createdAt: Scalars['DateTime']['output'];
    deletedAt?: Maybe<Scalars['DateTime']['output']>;
    impUid?: Maybe<Scalars['ID']['output']>;
    status: Scalars['String']['output'];
    statusDetail: Scalars['String']['output'];
    updatedAt: Scalars['DateTime']['output'];
    useditem?: Maybe<Useditem>;
    user?: Maybe<User>;
};

export type Query = {
    __typename?: 'Query';
    fetchBoard: Board;
    fetchBoardComments: Array<BoardComment>;
    fetchBoards: Array<Board>;
    fetchBoardsCount: Scalars['Int']['output'];
    fetchBoardsCountOfMine: Scalars['Int']['output'];
    fetchBoardsOfMine: Array<Board>;
    fetchBoardsOfTheBest: Array<Board>;
    fetchPointTransactions: Array<PointTransaction>;
    fetchPointTransactionsCountOfBuying: Scalars['Int']['output'];
    fetchPointTransactionsCountOfLoading: Scalars['Int']['output'];
    fetchPointTransactionsCountOfSelling: Scalars['Int']['output'];
    fetchPointTransactionsOfBuying: Array<PointTransaction>;
    fetchPointTransactionsOfLoading: Array<PointTransaction>;
    fetchPointTransactionsOfSelling: Array<PointTransaction>;
    fetchUseditem: Useditem;
    fetchUseditemQuestionAnswers: Array<UseditemQuestionAnswer>;
    fetchUseditemQuestions: Array<UseditemQuestion>;
    fetchUseditems: Array<Useditem>;
    fetchUseditemsCountIBought: Scalars['Int']['output'];
    fetchUseditemsCountIPicked: Scalars['Int']['output'];
    fetchUseditemsCountISold: Scalars['Int']['output'];
    fetchUseditemsIBought: Array<Useditem>;
    fetchUseditemsIPicked: Array<Useditem>;
    fetchUseditemsISold: Array<Useditem>;
    fetchUseditemsOfTheBest: Array<Useditem>;
    fetchUserLoggedIn: User;
};

export type QueryFetchBoardArgs = {
    boardId: Scalars['ID']['input'];
};

export type QueryFetchBoardCommentsArgs = {
    boardId: Scalars['ID']['input'];
    page?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryFetchBoardsArgs = {
    endDate?: InputMaybe<Scalars['DateTime']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type QueryFetchBoardsCountArgs = {
    endDate?: InputMaybe<Scalars['DateTime']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type QueryFetchPointTransactionsArgs = {
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFetchPointTransactionsOfBuyingArgs = {
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFetchPointTransactionsOfLoadingArgs = {
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFetchPointTransactionsOfSellingArgs = {
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFetchUseditemArgs = {
    useditemId: Scalars['ID']['input'];
};

export type QueryFetchUseditemQuestionAnswersArgs = {
    page?: InputMaybe<Scalars['Int']['input']>;
    useditemQuestionId: Scalars['ID']['input'];
};

export type QueryFetchUseditemQuestionsArgs = {
    page?: InputMaybe<Scalars['Int']['input']>;
    useditemId: Scalars['ID']['input'];
};

export type QueryFetchUseditemsArgs = {
    isSoldout?: InputMaybe<Scalars['Boolean']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFetchUseditemsIBoughtArgs = {
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFetchUseditemsIPickedArgs = {
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
};

export type QueryFetchUseditemsISoldArgs = {
    page?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
};

export type Token = {
    __typename?: 'Token';
    accessToken: Scalars['String']['output'];
};

export type UpdateBoardCommentInput = {
    contents?: InputMaybe<Scalars['String']['input']>;
    rating?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateBoardInput = {
    boardAddress?: InputMaybe<BoardAddressInput>;
    contents?: InputMaybe<Scalars['String']['input']>;
    images?: InputMaybe<Array<Scalars['String']['input']>>;
    title?: InputMaybe<Scalars['String']['input']>;
    youtubeUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUseditemInput = {
    contents?: InputMaybe<Scalars['String']['input']>;
    images?: InputMaybe<Array<Scalars['String']['input']>>;
    name?: InputMaybe<Scalars['String']['input']>;
    price?: InputMaybe<Scalars['Int']['input']>;
    remarks?: InputMaybe<Scalars['String']['input']>;
    tags?: InputMaybe<Array<Scalars['String']['input']>>;
    useditemAddress?: InputMaybe<UseditemAddressInput>;
};

export type UpdateUseditemQuestionAnswerInput = {
    contents: Scalars['String']['input'];
};

export type UpdateUseditemQuestionInput = {
    contents: Scalars['String']['input'];
};

export type UpdateUserInput = {
    name?: InputMaybe<Scalars['String']['input']>;
    picture?: InputMaybe<Scalars['String']['input']>;
};

export type Useditem = {
    __typename?: 'Useditem';
    _id: Scalars['ID']['output'];
    buyer?: Maybe<User>;
    contents: Scalars['String']['output'];
    createdAt: Scalars['DateTime']['output'];
    deletedAt?: Maybe<Scalars['DateTime']['output']>;
    images?: Maybe<Array<Scalars['String']['output']>>;
    name: Scalars['String']['output'];
    pickedCount?: Maybe<Scalars['Int']['output']>;
    price?: Maybe<Scalars['Int']['output']>;
    remarks: Scalars['String']['output'];
    seller?: Maybe<User>;
    soldAt?: Maybe<Scalars['DateTime']['output']>;
    tags?: Maybe<Array<Scalars['String']['output']>>;
    updatedAt: Scalars['DateTime']['output'];
    useditemAddress?: Maybe<UseditemAddress>;
};

export type UseditemAddress = {
    __typename?: 'UseditemAddress';
    _id: Scalars['ID']['output'];
    address?: Maybe<Scalars['String']['output']>;
    addressDetail?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['DateTime']['output'];
    deletedAt?: Maybe<Scalars['DateTime']['output']>;
    lat?: Maybe<Scalars['Float']['output']>;
    lng?: Maybe<Scalars['Float']['output']>;
    updatedAt: Scalars['DateTime']['output'];
    zipcode?: Maybe<Scalars['String']['output']>;
};

export type UseditemAddressInput = {
    address?: InputMaybe<Scalars['String']['input']>;
    addressDetail?: InputMaybe<Scalars['String']['input']>;
    lat?: InputMaybe<Scalars['Float']['input']>;
    lng?: InputMaybe<Scalars['Float']['input']>;
    zipcode?: InputMaybe<Scalars['String']['input']>;
};

export type UseditemQuestion = {
    __typename?: 'UseditemQuestion';
    _id: Scalars['ID']['output'];
    contents: Scalars['String']['output'];
    createdAt: Scalars['DateTime']['output'];
    deletedAt?: Maybe<Scalars['DateTime']['output']>;
    updatedAt: Scalars['DateTime']['output'];
    useditem: Useditem;
    user: User;
};

export type UseditemQuestionAnswer = {
    __typename?: 'UseditemQuestionAnswer';
    _id: Scalars['ID']['output'];
    contents: Scalars['String']['output'];
    createdAt: Scalars['DateTime']['output'];
    deletedAt?: Maybe<Scalars['DateTime']['output']>;
    updatedAt: Scalars['DateTime']['output'];
    useditemQuestion: UseditemQuestion;
    user: User;
};

export type User = {
    __typename?: 'User';
    _id: Scalars['ID']['output'];
    createdAt: Scalars['DateTime']['output'];
    deletedAt?: Maybe<Scalars['DateTime']['output']>;
    email: Scalars['String']['output'];
    name: Scalars['String']['output'];
    picture?: Maybe<Scalars['String']['output']>;
    updatedAt: Scalars['DateTime']['output'];
    userPoint?: Maybe<UserPoint>;
};

export type UserPoint = {
    __typename?: 'UserPoint';
    _id: Scalars['ID']['output'];
    amount: Scalars['Int']['output'];
    createdAt: Scalars['DateTime']['output'];
    deletedAt?: Maybe<Scalars['DateTime']['output']>;
    updatedAt: Scalars['DateTime']['output'];
    user: User;
};

export type CreateBoardMutationVariables = Exact<{
    createBoardInput: CreateBoardInput;
}>;

export type CreateBoardMutation = {
    __typename?: 'Mutation';
    createBoard: {
        __typename?: 'Board';
        _id: string;
        writer?: string | null;
        title: string;
        contents: string;
        youtubeUrl?: string | null;
        boardAddress?: {
            __typename?: 'BoardAddress';
            zipcode?: string | null;
            address?: string | null;
            addressDetail?: string | null;
        } | null;
    };
};

export type CreateBoardCommentMutationVariables = Exact<{
    createBoardCommentInput: CreateBoardCommentInput;
    boardId: Scalars['ID']['input'];
}>;

export type CreateBoardCommentMutation = {
    __typename?: 'Mutation';
    createBoardComment: {
        __typename?: 'BoardComment';
        _id: string;
        writer?: string | null;
        contents: string;
        rating: number;
        createdAt: any;
    };
};

export type CreateUseditemMutationVariables = Exact<{
    createUseditemInput: CreateUseditemInput;
}>;

export type CreateUseditemMutation = {
    __typename?: 'Mutation';
    createUseditem: {
        __typename?: 'Useditem';
        _id: string;
        name: string;
        price?: number | null;
        tags?: Array<string> | null;
        images?: Array<string> | null;
        createdAt: any;
        updatedAt: any;
    };
};

export type CreateUserMutationVariables = Exact<{
    createUserInput: CreateUserInput;
}>;

export type CreateUserMutation = {
    __typename?: 'Mutation';
    createUser: {
        __typename?: 'User';
        _id: string;
        email: string;
        name: string;
        picture?: string | null;
        createdAt: any;
        updatedAt: any;
        userPoint?: {
            __typename?: 'UserPoint';
            _id: string;
            amount: number;
        } | null;
    };
};

export type DeleteBoardMutationVariables = Exact<{
    boardId: Scalars['ID']['input'];
}>;

export type DeleteBoardMutation = {
    __typename?: 'Mutation';
    deleteBoard: string;
};

export type DeleteBoardCommentMutationVariables = Exact<{
    password?: InputMaybe<Scalars['String']['input']>;
    boardCommentId: Scalars['ID']['input'];
}>;

export type DeleteBoardCommentMutation = {
    __typename?: 'Mutation';
    deleteBoardComment: string;
};

export type FetchBoardCommentsQueryVariables = Exact<{
    boardId: Scalars['ID']['input'];
    page?: InputMaybe<Scalars['Int']['input']>;
}>;

export type FetchBoardCommentsQuery = {
    __typename?: 'Query';
    fetchBoardComments: Array<{
        __typename?: 'BoardComment';
        _id: string;
        writer?: string | null;
        contents: string;
        createdAt: any;
        rating: number;
    }>;
};

export type FetchBoardsQueryVariables = Exact<{
    endDate?: InputMaybe<Scalars['DateTime']['input']>;
    startDate?: InputMaybe<Scalars['DateTime']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
}>;

export type FetchBoardsQuery = {
    __typename?: 'Query';
    fetchBoards: Array<{
        __typename?: 'Board';
        _id: string;
        title: string;
        writer?: string | null;
        contents: string;
        createdAt: any;
        youtubeUrl?: string | null;
        likeCount: number;
        dislikeCount: number;
        images?: Array<string> | null;
        boardAddress?: {
            __typename?: 'BoardAddress';
            _id: string;
            zipcode?: string | null;
            address?: string | null;
            addressDetail?: string | null;
        } | null;
        user?: {
            __typename?: 'User';
            _id: string;
            name: string;
            email: string;
            picture?: string | null;
        } | null;
    }>;
};

export type FetchUseditemQueryVariables = Exact<{
    useditemId: Scalars['ID']['input'];
}>;

export type FetchUseditemQuery = {
    __typename?: 'Query';
    fetchUseditem: {
        images: never[];
        __typename?: 'Useditem';
        _id: string;
        name: string;
        remarks: string;
        contents: string;
        price?: number | null;
        tags?: Array<string> | null;
        useditemAddress?: {
            __typename?: 'UseditemAddress';
            address?: string | null;
            addressDetail?: string | null;
            zipcode?: string | null;
        } | null;
    };
};

export type FetchUserLoggedInQueryVariables = Exact<{ [key: string]: never }>;

export type FetchUserLoggedInQuery = {
    __typename?: 'Query';
    fetchUserLoggedIn: {
        __typename?: 'User';
        email: string;
        name: string;
        picture?: string | null;
    };
};

export type LoginUserMutationVariables = Exact<{
    email: Scalars['String']['input'];
    password: Scalars['String']['input'];
}>;

export type LoginUserMutation = {
    __typename?: 'Mutation';
    loginUser: { __typename?: 'Token'; accessToken: string };
};

export type RestoreAccessTokenMutationVariables = Exact<{
    [key: string]: never;
}>;

export type RestoreAccessTokenMutation = {
    __typename?: 'Mutation';
    restoreAccessToken: { __typename?: 'Token'; accessToken: string };
};

export type UpdateBoardMutationVariables = Exact<{
    updateBoardInput: UpdateBoardInput;
    password?: InputMaybe<Scalars['String']['input']>;
    boardId: Scalars['ID']['input'];
}>;

export type UpdateBoardMutation = {
    __typename?: 'Mutation';
    updateBoard: {
        __typename?: 'Board';
        _id: string;
        writer?: string | null;
        title: string;
        contents: string;
        youtubeUrl?: string | null;
        images?: Array<string> | null;
        boardAddress?: {
            __typename?: 'BoardAddress';
            zipcode?: string | null;
            address?: string | null;
            addressDetail?: string | null;
        } | null;
    };
};

export type UpdateBoardCommentMutationVariables = Exact<{
    boardCommentId: Scalars['ID']['input'];
    password?: InputMaybe<Scalars['String']['input']>;
    updateBoardCommentInput: UpdateBoardCommentInput;
}>;

export type UpdateBoardCommentMutation = {
    __typename?: 'Mutation';
    updateBoardComment: {
        __typename?: 'BoardComment';
        _id: string;
        writer?: string | null;
        contents: string;
        rating: number;
        createdAt: any;
        updatedAt: any;
        deletedAt?: any | null;
        user?: { __typename?: 'User'; _id: string; name: string } | null;
    };
};

export type UpdateUseditemMutationVariables = Exact<{
    updateUseditemInput: UpdateUseditemInput;
    useditemId: Scalars['ID']['input'];
}>;

export type UpdateUseditemMutation = {
    __typename?: 'Mutation';
    updateUseditem: {
        __typename?: 'Useditem';
        _id: string;
        name: string;
        price?: number | null;
        tags?: Array<string> | null;
        images?: Array<string> | null;
        updatedAt: any;
    };
};

export type UploadFileMutationVariables = Exact<{
    file: Scalars['Upload']['input'];
}>;

export type UploadFileMutation = {
    __typename?: 'Mutation';
    uploadFile: { __typename?: 'FileManager'; url: string };
};

export const CreateBoardDocument = gql`
    mutation CreateBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
            writer
            title
            contents
            youtubeUrl
            boardAddress {
                zipcode
                address
                addressDetail
            }
        }
    }
`;
export type CreateBoardMutationFn = Apollo.MutationFunction<
    CreateBoardMutation,
    CreateBoardMutationVariables
>;

/**
 * __useCreateBoardMutation__
 *
 * To run a mutation, you first call `useCreateBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBoardMutation, { data, loading, error }] = useCreateBoardMutation({
 *   variables: {
 *      createBoardInput: // value for 'createBoardInput'
 *   },
 * });
 */
export function useCreateBoardMutation(
    baseOptions?: Apollo.MutationHookOptions<
        CreateBoardMutation,
        CreateBoardMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<
        CreateBoardMutation,
        CreateBoardMutationVariables
    >(CreateBoardDocument, options);
}
export type CreateBoardMutationHookResult = ReturnType<
    typeof useCreateBoardMutation
>;
export type CreateBoardMutationResult =
    Apollo.MutationResult<CreateBoardMutation>;
export type CreateBoardMutationOptions = Apollo.BaseMutationOptions<
    CreateBoardMutation,
    CreateBoardMutationVariables
>;
export const CreateBoardCommentDocument = gql`
    mutation CreateBoardComment(
        $createBoardCommentInput: CreateBoardCommentInput!
        $boardId: ID!
    ) {
        createBoardComment(
            createBoardCommentInput: $createBoardCommentInput
            boardId: $boardId
        ) {
            _id
            writer
            contents
            rating
            createdAt
        }
    }
`;
export type CreateBoardCommentMutationFn = Apollo.MutationFunction<
    CreateBoardCommentMutation,
    CreateBoardCommentMutationVariables
>;

/**
 * __useCreateBoardCommentMutation__
 *
 * To run a mutation, you first call `useCreateBoardCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBoardCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBoardCommentMutation, { data, loading, error }] = useCreateBoardCommentMutation({
 *   variables: {
 *      createBoardCommentInput: // value for 'createBoardCommentInput'
 *      boardId: // value for 'boardId'
 *   },
 * });
 */
export function useCreateBoardCommentMutation(
    baseOptions?: Apollo.MutationHookOptions<
        CreateBoardCommentMutation,
        CreateBoardCommentMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<
        CreateBoardCommentMutation,
        CreateBoardCommentMutationVariables
    >(CreateBoardCommentDocument, options);
}
export type CreateBoardCommentMutationHookResult = ReturnType<
    typeof useCreateBoardCommentMutation
>;
export type CreateBoardCommentMutationResult =
    Apollo.MutationResult<CreateBoardCommentMutation>;
export type CreateBoardCommentMutationOptions = Apollo.BaseMutationOptions<
    CreateBoardCommentMutation,
    CreateBoardCommentMutationVariables
>;
export const CreateUseditemDocument = gql`
    mutation CreateUseditem($createUseditemInput: CreateUseditemInput!) {
        createUseditem(createUseditemInput: $createUseditemInput) {
            _id
            name
            price
            tags
            images
            createdAt
            updatedAt
        }
    }
`;
export type CreateUseditemMutationFn = Apollo.MutationFunction<
    CreateUseditemMutation,
    CreateUseditemMutationVariables
>;

/**
 * __useCreateUseditemMutation__
 *
 * To run a mutation, you first call `useCreateUseditemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUseditemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUseditemMutation, { data, loading, error }] = useCreateUseditemMutation({
 *   variables: {
 *      createUseditemInput: // value for 'createUseditemInput'
 *   },
 * });
 */
export function useCreateUseditemMutation(
    baseOptions?: Apollo.MutationHookOptions<
        CreateUseditemMutation,
        CreateUseditemMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<
        CreateUseditemMutation,
        CreateUseditemMutationVariables
    >(CreateUseditemDocument, options);
}
export type CreateUseditemMutationHookResult = ReturnType<
    typeof useCreateUseditemMutation
>;
export type CreateUseditemMutationResult =
    Apollo.MutationResult<CreateUseditemMutation>;
export type CreateUseditemMutationOptions = Apollo.BaseMutationOptions<
    CreateUseditemMutation,
    CreateUseditemMutationVariables
>;
export const CreateUserDocument = gql`
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
export type CreateUserMutationFn = Apollo.MutationFunction<
    CreateUserMutation,
    CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      createUserInput: // value for 'createUserInput'
 *   },
 * });
 */
export function useCreateUserMutation(
    baseOptions?: Apollo.MutationHookOptions<
        CreateUserMutation,
        CreateUserMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
        CreateUserDocument,
        options
    );
}
export type CreateUserMutationHookResult = ReturnType<
    typeof useCreateUserMutation
>;
export type CreateUserMutationResult =
    Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
    CreateUserMutation,
    CreateUserMutationVariables
>;
export const DeleteBoardDocument = gql`
    mutation DeleteBoard($boardId: ID!) {
        deleteBoard(boardId: $boardId)
    }
`;
export type DeleteBoardMutationFn = Apollo.MutationFunction<
    DeleteBoardMutation,
    DeleteBoardMutationVariables
>;

/**
 * __useDeleteBoardMutation__
 *
 * To run a mutation, you first call `useDeleteBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBoardMutation, { data, loading, error }] = useDeleteBoardMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *   },
 * });
 */
export function useDeleteBoardMutation(
    baseOptions?: Apollo.MutationHookOptions<
        DeleteBoardMutation,
        DeleteBoardMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<
        DeleteBoardMutation,
        DeleteBoardMutationVariables
    >(DeleteBoardDocument, options);
}
export type DeleteBoardMutationHookResult = ReturnType<
    typeof useDeleteBoardMutation
>;
export type DeleteBoardMutationResult =
    Apollo.MutationResult<DeleteBoardMutation>;
export type DeleteBoardMutationOptions = Apollo.BaseMutationOptions<
    DeleteBoardMutation,
    DeleteBoardMutationVariables
>;
export const DeleteBoardCommentDocument = gql`
    mutation DeleteBoardComment($password: String, $boardCommentId: ID!) {
        deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
    }
`;
export type DeleteBoardCommentMutationFn = Apollo.MutationFunction<
    DeleteBoardCommentMutation,
    DeleteBoardCommentMutationVariables
>;

/**
 * __useDeleteBoardCommentMutation__
 *
 * To run a mutation, you first call `useDeleteBoardCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBoardCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBoardCommentMutation, { data, loading, error }] = useDeleteBoardCommentMutation({
 *   variables: {
 *      password: // value for 'password'
 *      boardCommentId: // value for 'boardCommentId'
 *   },
 * });
 */
export function useDeleteBoardCommentMutation(
    baseOptions?: Apollo.MutationHookOptions<
        DeleteBoardCommentMutation,
        DeleteBoardCommentMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<
        DeleteBoardCommentMutation,
        DeleteBoardCommentMutationVariables
    >(DeleteBoardCommentDocument, options);
}
export type DeleteBoardCommentMutationHookResult = ReturnType<
    typeof useDeleteBoardCommentMutation
>;
export type DeleteBoardCommentMutationResult =
    Apollo.MutationResult<DeleteBoardCommentMutation>;
export type DeleteBoardCommentMutationOptions = Apollo.BaseMutationOptions<
    DeleteBoardCommentMutation,
    DeleteBoardCommentMutationVariables
>;
export const FetchBoardCommentsDocument = gql`
    query FetchBoardComments($boardId: ID!, $page: Int) {
        fetchBoardComments(boardId: $boardId, page: $page) {
            _id
            writer
            contents
            createdAt
            rating
        }
    }
`;

/**
 * __useFetchBoardCommentsQuery__
 *
 * To run a query within a React component, call `useFetchBoardCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchBoardCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchBoardCommentsQuery({
 *   variables: {
 *      boardId: // value for 'boardId'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useFetchBoardCommentsQuery(
    baseOptions: Apollo.QueryHookOptions<
        FetchBoardCommentsQuery,
        FetchBoardCommentsQueryVariables
    > &
        (
            | { variables: FetchBoardCommentsQueryVariables; skip?: boolean }
            | { skip: boolean }
        )
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<
        FetchBoardCommentsQuery,
        FetchBoardCommentsQueryVariables
    >(FetchBoardCommentsDocument, options);
}
export function useFetchBoardCommentsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        FetchBoardCommentsQuery,
        FetchBoardCommentsQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<
        FetchBoardCommentsQuery,
        FetchBoardCommentsQueryVariables
    >(FetchBoardCommentsDocument, options);
}
export function useFetchBoardCommentsSuspenseQuery(
    baseOptions?:
        | Apollo.SkipToken
        | Apollo.SuspenseQueryHookOptions<
              FetchBoardCommentsQuery,
              FetchBoardCommentsQueryVariables
          >
) {
    const options =
        baseOptions === Apollo.skipToken
            ? baseOptions
            : { ...defaultOptions, ...baseOptions };
    return Apollo.useSuspenseQuery<
        FetchBoardCommentsQuery,
        FetchBoardCommentsQueryVariables
    >(FetchBoardCommentsDocument, options);
}
export type FetchBoardCommentsQueryHookResult = ReturnType<
    typeof useFetchBoardCommentsQuery
>;
export type FetchBoardCommentsLazyQueryHookResult = ReturnType<
    typeof useFetchBoardCommentsLazyQuery
>;
export type FetchBoardCommentsSuspenseQueryHookResult = ReturnType<
    typeof useFetchBoardCommentsSuspenseQuery
>;
export type FetchBoardCommentsQueryResult = Apollo.QueryResult<
    FetchBoardCommentsQuery,
    FetchBoardCommentsQueryVariables
>;
export const FetchBoardsDocument = gql`
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

/**
 * __useFetchBoardsQuery__
 *
 * To run a query within a React component, call `useFetchBoardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchBoardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchBoardsQuery({
 *   variables: {
 *      endDate: // value for 'endDate'
 *      startDate: // value for 'startDate'
 *      search: // value for 'search'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useFetchBoardsQuery(
    baseOptions?: Apollo.QueryHookOptions<
        FetchBoardsQuery,
        FetchBoardsQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<FetchBoardsQuery, FetchBoardsQueryVariables>(
        FetchBoardsDocument,
        options
    );
}
export function useFetchBoardsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        FetchBoardsQuery,
        FetchBoardsQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<FetchBoardsQuery, FetchBoardsQueryVariables>(
        FetchBoardsDocument,
        options
    );
}
export function useFetchBoardsSuspenseQuery(
    baseOptions?:
        | Apollo.SkipToken
        | Apollo.SuspenseQueryHookOptions<
              FetchBoardsQuery,
              FetchBoardsQueryVariables
          >
) {
    const options =
        baseOptions === Apollo.skipToken
            ? baseOptions
            : { ...defaultOptions, ...baseOptions };
    return Apollo.useSuspenseQuery<FetchBoardsQuery, FetchBoardsQueryVariables>(
        FetchBoardsDocument,
        options
    );
}
export type FetchBoardsQueryHookResult = ReturnType<typeof useFetchBoardsQuery>;
export type FetchBoardsLazyQueryHookResult = ReturnType<
    typeof useFetchBoardsLazyQuery
>;
export type FetchBoardsSuspenseQueryHookResult = ReturnType<
    typeof useFetchBoardsSuspenseQuery
>;
export type FetchBoardsQueryResult = Apollo.QueryResult<
    FetchBoardsQuery,
    FetchBoardsQueryVariables
>;
export const FetchUseditemDocument = gql`
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

/**
 * __useFetchUseditemQuery__
 *
 * To run a query within a React component, call `useFetchUseditemQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchUseditemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchUseditemQuery({
 *   variables: {
 *      useditemId: // value for 'useditemId'
 *   },
 * });
 */
export function useFetchUseditemQuery(
    baseOptions: Apollo.QueryHookOptions<
        FetchUseditemQuery,
        FetchUseditemQueryVariables
    > &
        (
            | { variables: FetchUseditemQueryVariables; skip?: boolean }
            | { skip: boolean }
        )
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<FetchUseditemQuery, FetchUseditemQueryVariables>(
        FetchUseditemDocument,
        options
    );
}
export function useFetchUseditemLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        FetchUseditemQuery,
        FetchUseditemQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<FetchUseditemQuery, FetchUseditemQueryVariables>(
        FetchUseditemDocument,
        options
    );
}
export function useFetchUseditemSuspenseQuery(
    baseOptions?:
        | Apollo.SkipToken
        | Apollo.SuspenseQueryHookOptions<
              FetchUseditemQuery,
              FetchUseditemQueryVariables
          >
) {
    const options =
        baseOptions === Apollo.skipToken
            ? baseOptions
            : { ...defaultOptions, ...baseOptions };
    return Apollo.useSuspenseQuery<
        FetchUseditemQuery,
        FetchUseditemQueryVariables
    >(FetchUseditemDocument, options);
}
export type FetchUseditemQueryHookResult = ReturnType<
    typeof useFetchUseditemQuery
>;
export type FetchUseditemLazyQueryHookResult = ReturnType<
    typeof useFetchUseditemLazyQuery
>;
export type FetchUseditemSuspenseQueryHookResult = ReturnType<
    typeof useFetchUseditemSuspenseQuery
>;
export type FetchUseditemQueryResult = Apollo.QueryResult<
    FetchUseditemQuery,
    FetchUseditemQueryVariables
>;
export const FetchUserLoggedInDocument = gql`
    query FetchUserLoggedIn {
        fetchUserLoggedIn {
            email
            name
            picture
        }
    }
`;

/**
 * __useFetchUserLoggedInQuery__
 *
 * To run a query within a React component, call `useFetchUserLoggedInQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchUserLoggedInQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchUserLoggedInQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchUserLoggedInQuery(
    baseOptions?: Apollo.QueryHookOptions<
        FetchUserLoggedInQuery,
        FetchUserLoggedInQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<
        FetchUserLoggedInQuery,
        FetchUserLoggedInQueryVariables
    >(FetchUserLoggedInDocument, options);
}
export function useFetchUserLoggedInLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        FetchUserLoggedInQuery,
        FetchUserLoggedInQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<
        FetchUserLoggedInQuery,
        FetchUserLoggedInQueryVariables
    >(FetchUserLoggedInDocument, options);
}
export function useFetchUserLoggedInSuspenseQuery(
    baseOptions?:
        | Apollo.SkipToken
        | Apollo.SuspenseQueryHookOptions<
              FetchUserLoggedInQuery,
              FetchUserLoggedInQueryVariables
          >
) {
    const options =
        baseOptions === Apollo.skipToken
            ? baseOptions
            : { ...defaultOptions, ...baseOptions };
    return Apollo.useSuspenseQuery<
        FetchUserLoggedInQuery,
        FetchUserLoggedInQueryVariables
    >(FetchUserLoggedInDocument, options);
}
export type FetchUserLoggedInQueryHookResult = ReturnType<
    typeof useFetchUserLoggedInQuery
>;
export type FetchUserLoggedInLazyQueryHookResult = ReturnType<
    typeof useFetchUserLoggedInLazyQuery
>;
export type FetchUserLoggedInSuspenseQueryHookResult = ReturnType<
    typeof useFetchUserLoggedInSuspenseQuery
>;
export type FetchUserLoggedInQueryResult = Apollo.QueryResult<
    FetchUserLoggedInQuery,
    FetchUserLoggedInQueryVariables
>;
export const LoginUserDocument = gql`
    mutation LoginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            accessToken
        }
    }
`;
export type LoginUserMutationFn = Apollo.MutationFunction<
    LoginUserMutation,
    LoginUserMutationVariables
>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(
    baseOptions?: Apollo.MutationHookOptions<
        LoginUserMutation,
        LoginUserMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(
        LoginUserDocument,
        options
    );
}
export type LoginUserMutationHookResult = ReturnType<
    typeof useLoginUserMutation
>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<
    LoginUserMutation,
    LoginUserMutationVariables
>;
export const RestoreAccessTokenDocument = gql`
    mutation RestoreAccessToken {
        restoreAccessToken {
            accessToken
        }
    }
`;
export type RestoreAccessTokenMutationFn = Apollo.MutationFunction<
    RestoreAccessTokenMutation,
    RestoreAccessTokenMutationVariables
>;

/**
 * __useRestoreAccessTokenMutation__
 *
 * To run a mutation, you first call `useRestoreAccessTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRestoreAccessTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [restoreAccessTokenMutation, { data, loading, error }] = useRestoreAccessTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useRestoreAccessTokenMutation(
    baseOptions?: Apollo.MutationHookOptions<
        RestoreAccessTokenMutation,
        RestoreAccessTokenMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<
        RestoreAccessTokenMutation,
        RestoreAccessTokenMutationVariables
    >(RestoreAccessTokenDocument, options);
}
export type RestoreAccessTokenMutationHookResult = ReturnType<
    typeof useRestoreAccessTokenMutation
>;
export type RestoreAccessTokenMutationResult =
    Apollo.MutationResult<RestoreAccessTokenMutation>;
export type RestoreAccessTokenMutationOptions = Apollo.BaseMutationOptions<
    RestoreAccessTokenMutation,
    RestoreAccessTokenMutationVariables
>;
export const UpdateBoardDocument = gql`
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
export type UpdateBoardMutationFn = Apollo.MutationFunction<
    UpdateBoardMutation,
    UpdateBoardMutationVariables
>;

/**
 * __useUpdateBoardMutation__
 *
 * To run a mutation, you first call `useUpdateBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBoardMutation, { data, loading, error }] = useUpdateBoardMutation({
 *   variables: {
 *      updateBoardInput: // value for 'updateBoardInput'
 *      password: // value for 'password'
 *      boardId: // value for 'boardId'
 *   },
 * });
 */
export function useUpdateBoardMutation(
    baseOptions?: Apollo.MutationHookOptions<
        UpdateBoardMutation,
        UpdateBoardMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<
        UpdateBoardMutation,
        UpdateBoardMutationVariables
    >(UpdateBoardDocument, options);
}
export type UpdateBoardMutationHookResult = ReturnType<
    typeof useUpdateBoardMutation
>;
export type UpdateBoardMutationResult =
    Apollo.MutationResult<UpdateBoardMutation>;
export type UpdateBoardMutationOptions = Apollo.BaseMutationOptions<
    UpdateBoardMutation,
    UpdateBoardMutationVariables
>;
export const UpdateBoardCommentDocument = gql`
    mutation UpdateBoardComment(
        $boardCommentId: ID!
        $password: String
        $updateBoardCommentInput: UpdateBoardCommentInput!
    ) {
        updateBoardComment(
            boardCommentId: $boardCommentId
            password: $password
            updateBoardCommentInput: $updateBoardCommentInput
        ) {
            _id
            writer
            contents
            rating
            user {
                _id
                name
            }
            createdAt
            updatedAt
            deletedAt
        }
    }
`;
export type UpdateBoardCommentMutationFn = Apollo.MutationFunction<
    UpdateBoardCommentMutation,
    UpdateBoardCommentMutationVariables
>;

/**
 * __useUpdateBoardCommentMutation__
 *
 * To run a mutation, you first call `useUpdateBoardCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBoardCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBoardCommentMutation, { data, loading, error }] = useUpdateBoardCommentMutation({
 *   variables: {
 *      boardCommentId: // value for 'boardCommentId'
 *      password: // value for 'password'
 *      updateBoardCommentInput: // value for 'updateBoardCommentInput'
 *   },
 * });
 */
export function useUpdateBoardCommentMutation(
    baseOptions?: Apollo.MutationHookOptions<
        UpdateBoardCommentMutation,
        UpdateBoardCommentMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<
        UpdateBoardCommentMutation,
        UpdateBoardCommentMutationVariables
    >(UpdateBoardCommentDocument, options);
}
export type UpdateBoardCommentMutationHookResult = ReturnType<
    typeof useUpdateBoardCommentMutation
>;
export type UpdateBoardCommentMutationResult =
    Apollo.MutationResult<UpdateBoardCommentMutation>;
export type UpdateBoardCommentMutationOptions = Apollo.BaseMutationOptions<
    UpdateBoardCommentMutation,
    UpdateBoardCommentMutationVariables
>;
export const UpdateUseditemDocument = gql`
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
export type UpdateUseditemMutationFn = Apollo.MutationFunction<
    UpdateUseditemMutation,
    UpdateUseditemMutationVariables
>;

/**
 * __useUpdateUseditemMutation__
 *
 * To run a mutation, you first call `useUpdateUseditemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUseditemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUseditemMutation, { data, loading, error }] = useUpdateUseditemMutation({
 *   variables: {
 *      updateUseditemInput: // value for 'updateUseditemInput'
 *      useditemId: // value for 'useditemId'
 *   },
 * });
 */
export function useUpdateUseditemMutation(
    baseOptions?: Apollo.MutationHookOptions<
        UpdateUseditemMutation,
        UpdateUseditemMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<
        UpdateUseditemMutation,
        UpdateUseditemMutationVariables
    >(UpdateUseditemDocument, options);
}
export type UpdateUseditemMutationHookResult = ReturnType<
    typeof useUpdateUseditemMutation
>;
export type UpdateUseditemMutationResult =
    Apollo.MutationResult<UpdateUseditemMutation>;
export type UpdateUseditemMutationOptions = Apollo.BaseMutationOptions<
    UpdateUseditemMutation,
    UpdateUseditemMutationVariables
>;
export const UploadFileDocument = gql`
    mutation UploadFile($file: Upload!) {
        uploadFile(file: $file) {
            url
        }
    }
`;
export type UploadFileMutationFn = Apollo.MutationFunction<
    UploadFileMutation,
    UploadFileMutationVariables
>;

/**
 * __useUploadFileMutation__
 *
 * To run a mutation, you first call `useUploadFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadFileMutation, { data, loading, error }] = useUploadFileMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadFileMutation(
    baseOptions?: Apollo.MutationHookOptions<
        UploadFileMutation,
        UploadFileMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<UploadFileMutation, UploadFileMutationVariables>(
        UploadFileDocument,
        options
    );
}
export type UploadFileMutationHookResult = ReturnType<
    typeof useUploadFileMutation
>;
export type UploadFileMutationResult =
    Apollo.MutationResult<UploadFileMutation>;
export type UploadFileMutationOptions = Apollo.BaseMutationOptions<
    UploadFileMutation,
    UploadFileMutationVariables
>;
