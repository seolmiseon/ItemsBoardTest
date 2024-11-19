'use client';

import React, { useEffect, useRef } from 'react';
import Tagify from '@yaireo/tagify';
import '@yaireo/tagify/dist/tagify.css';

interface IHashTagProps {
    value: string[];
    onChange: (updatedTags: string[]) => void;
    readOnly?: boolean;
}

const HashTag = ({ value, onChange, readOnly = false }: IHashTagProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const tagifyRef = useRef<Tagify | null>(null);

    useEffect(() => {
        // Tagify 인스턴스가 이미 존재하면 제거
        if (tagifyRef.current) {
            tagifyRef.current.destroy();
        }

        // 새 Tagify 인스턴스 생성
        if (inputRef.current) {
            tagifyRef.current = new Tagify(inputRef.current, {
                enforceWhitelist: false,
                delimiters: ', ',
                maxTags: 10,
                backspace: 'edit',
                placeholder: '태그를 입력하세요...',
                dropdown: {
                    enabled: 0,
                },
                readonly: readOnly,
            });

            // 이벤트 핸들러
            const handleChange = (e: CustomEvent) => {
                const tagifyEvent = e.detail as { value: string };
                const newTags = tagifyEvent.value
                    ? tagifyEvent.value.split(',').filter(Boolean)
                    : [];
                onChange(newTags);
            };

            // 이벤트 리스너 등록
            tagifyRef.current.on('change', handleChange as EventListener);
        }

        // 클린업 함수
        return () => {
            if (tagifyRef.current) {
                tagifyRef.current.destroy();
                tagifyRef.current = null;
            }
        };
    }, [readOnly]); // readOnly가 변경될 때만 재생성

    // value prop이 변경될 때 태그 업데이트
    useEffect(() => {
        if (tagifyRef.current && value) {
            tagifyRef.current.loadOriginalValues(value);
        }
    }, [value]);

    return (
        <div className="w-full">
            <input
                ref={inputRef}
                defaultValue={value.join(', ')}
                className="tagify-input w-full p-2 border rounded"
            />
        </div>
    );
};

export default HashTag;
