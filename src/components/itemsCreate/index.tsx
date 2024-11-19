'use client';

import React, { useEffect, useState } from 'react';
import { FormProvider } from 'react-hook-form';
import styles from './create.module.css';
import { useNewItem } from './hook';
import UploadUI from '../imageUpload';
import Editor from '../editor';
import KakaoMap from '../kakaoMap';
import HashTag from '../hashTag';
import { useMutation } from '@apollo/client';
import { UPLOAD_FILE } from '@/graphql/queries/uploadFile';
import CreateOrEditBtn from '../button/createEditBtn';

interface IItemUIProps {
    isEdit: boolean;
    itemId?: string;
    onComplete?: () => void;
    readOnly?: boolean;
}

const NewItemUI = ({
    isEdit,
    itemId,
    onComplete,
    readOnly = false,
}: IItemUIProps) => {
    const {
        register,
        handleSubmit,
        errors,
        onSubmit,

        data,
        setValue,
        methods,
    } = useNewItem(isEdit, itemId, onComplete);
    const [contents, setContents] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);
    const [uploadFile] = useMutation(UPLOAD_FILE);

    const handleTagChange = (newTags: string[]) => {
        setTags(newTags);
    };

    const handleImagesUpload = async (files: File[]) => {
        if (readOnly) return;
        try {
            const results = await Promise.all(
                files.map(async (file) => {
                    const { data } = await uploadFile({ variables: { file } });
                    return data.uploadFile.url;
                })
            );

            setUploadedUrls((prevUrls) => [...prevUrls, ...results]);
            console.log('업로드된 URL:', results);
        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };

    useEffect(() => {
        if (isEdit && data?.fetchUseditem) {
            const { name, remarks, contents, price, tags, images } =
                data.fetchUseditem;
            setValue('title', name || '');
            setValue('remarks', remarks || '');
            setValue('contents', contents || '');
            setValue('price', price || 0);
            setValue('tags', tags || []);
            setContents(contents || '');

            if (images) {
                handleImagesUpload(images);
            }
        }
    }, [isEdit, data, setValue]);

    const handleEditorChange = (value: string) => {
        if (readOnly) return;
        if (value.trim() === '<p><br></p>') {
            setContents('');
            setValue('contents', '');
        } else {
            setContents(value);
            setValue('contents', value);
        }
    };

    return (
        <FormProvider {...methods}>
            <div className={styles['board-new-item']}>
                <h2 className={styles['board-new-item__subject']}>
                    {isEdit ? '상품 수정' : '상품 등록'}
                </h2>
                {errors.title && (
                    <p style={{ color: 'red' }}>{errors.title.message}</p>
                )}

                <form
                    onSubmit={readOnly ? undefined : handleSubmit(onSubmit)}
                    className={styles['board-new-item__form']}
                >
                    <div className={styles['board-new-item__input-group']}>
                        <label
                            htmlFor="title"
                            className={styles['board-new-item__title']}
                        >
                            상품명
                        </label>
                        <input
                            id="title"
                            type="text"
                            {...register('title')}
                            placeholder="상품명을 입력해주세요"
                            autoComplete="title"
                            readOnly={readOnly} // 읽기 전용 처리
                            disabled={readOnly} // 읽기 전용 처리
                        />
                    </div>

                    <div className={styles['board-new-item__input-group']}>
                        <label
                            htmlFor="remarks"
                            className={styles['board-new-item__title']}
                        >
                            상품 요약
                        </label>
                        <input
                            id="remarks"
                            type="text"
                            {...register('remarks')}
                            placeholder="상품 요약을 입력해주세요"
                            readOnly={readOnly} // 읽기 전용 처리
                            disabled={readOnly} // 읽기 전용 처리
                        />
                    </div>

                    <div className={styles['board-new-item__editor']}>
                        <label
                            htmlFor="contents"
                            className={styles['board-new-item__title']}
                        >
                            상품 내용
                        </label>
                        <div
                            style={{
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                height: '300px',
                                padding: '10px',
                            }}
                        >
                            <Editor
                                value={contents}
                                onChange={handleEditorChange}
                                readOnly={readOnly}
                            />
                        </div>
                    </div>

                    <div className={styles['board-new-item__input-group']}>
                        <label
                            htmlFor="price"
                            className={styles['board-new-item__title']}
                        >
                            판매 가격
                        </label>
                        <input
                            id="price"
                            type="number"
                            {...register('price')}
                            placeholder="판매 가격을 입력해주세요"
                            readOnly={readOnly} // 읽기 전용 처리
                            disabled={readOnly} // 읽기 전용 처리
                        />
                    </div>

                    <div className={styles['board-new-item__input-group']}>
                        <label
                            htmlFor="tags"
                            className={styles['board-new-item__title']}
                        >
                            태그 입력
                        </label>
                        <HashTag
                            value={tags}
                            onChange={handleTagChange}
                            readOnly={readOnly}
                        />
                    </div>
                    <div className={styles['form-group']}>
                        <label>위치 정보</label>
                        <KakaoMap readOnly={readOnly} />
                    </div>
                    <UploadUI
                        onImagesUpload={handleImagesUpload}
                        readOnly={readOnly}
                    />
                    <ul>
                        {uploadedUrls.map((url, index) => (
                            <li key={index}>{url}</li>
                        ))}
                    </ul>

                    <CreateOrEditBtn
                        isEdit={isEdit}
                        reset={methods.reset}
                        itemId={itemId}
                    />
                </form>
            </div>
        </FormProvider>
    );
};

export default NewItemUI;
