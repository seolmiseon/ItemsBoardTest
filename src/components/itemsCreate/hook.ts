import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';

// import usePostCode from '../daumPostcode/hook';
import {
    CreateUseditemMutation,
    CreateUseditemMutationVariables,
    FetchUseditemQuery,
    FetchUseditemQueryVariables,
    UpdateUseditemMutation,
    UpdateUseditemMutationVariables,
} from '@/types/graphql';
import { useForm } from 'react-hook-form';
import { CREATE_USED_ITEM } from '@/graphql/queries/createUseditem';
import { UPDATE_USED_ITEM } from '@/graphql/queries/updateUseditem';
import { FETCH_USED_ITEM } from '@/graphql/queries/fetchUseditem';

interface IFormInput {
    title: string;
    contents: string;
    writer: string;
    password?: string;
    images: string[];
    price?: number;
    remarks?: string;
    tags?: string[];
}

export const useNewItem = (
    isEdit: boolean,
    itemId?: string,
    onComplete?: () => void
) => {
    const methods = useForm<IFormInput>();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = methods;

    const [images, setImages] = useState<string[]>([]);

    const [createUseditem] = useMutation(CREATE_USED_ITEM);
    const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

    const { data, loading } = useQuery(FETCH_USED_ITEM, {
        variables: { useditemId: itemId || '' },
        skip: !isEdit,
    });

    const onSubmit = async (formData: IFormInput) => {
        console.log('Submitting form data:', formData);
        try {
            const graphqlInput: CreateUseditemMutationVariables['createUseditemInput'] =
                {
                    name: formData.title,
                    remarks: formData.remarks || '',
                    contents: formData.contents,
                    price: formData.price || 0,
                    tags: formData.tags || [],
                    images: images,
                };

            console.log('Sending GraphQL Input:', graphqlInput);

            if (isEdit && itemId) {
                await updateUseditem({
                    variables: {
                        updateUseditemInput: graphqlInput,
                        useditemId: itemId,
                    },
                });
            } else {
                await createUseditem({
                    variables: { createUseditemInput: graphqlInput },
                });
            }
            if (onComplete && typeof onComplete === 'function') {
                onComplete();
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(
                    'Error submitting form:',
                    error.message,
                    error.stack
                );
            } else {
                console.error('Unknown error occurred during form submission.');
            }
            alert('오류가 발생했습니다. 다시 시도해주세요.');
        }
    };

    return {
        register,
        handleSubmit,
        errors,
        setValue,
        onSubmit,
        loading,
        data,
        methods,
    };
};
