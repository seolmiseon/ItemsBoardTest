'use client';
import React from 'react';

interface IconProps {
    width?: number;
    height?: number;
    color?: string;
    isFilled?: boolean;
}

// 좋아요 아이콘
export const LikeIcon: React.FC<IconProps> = ({
    width = 32,
    height = 27,
    isFilled,
    color = '#ffffff',
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isFilled ? '#ffe000' : 'none'}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={isFilled ? 'none' : color}
            width={width}
            height={height}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
        </svg>
    );
};

// 수정 아이콘
export const EditIcon: React.FC<IconProps> = ({
    width = 18,
    height = 18,
    color = '#BDBDBD',
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={color}
            width={width}
            height={height}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 3.487l3.65 3.65-10.89 10.89-4.1.45.45-4.1 10.89-10.89z"
            />
        </svg>
    );
};

// 삭제 아이콘
export const DeleteIcon: React.FC<IconProps> = ({
    width = 18,
    height = 18,
    color = '#BDBDBD',
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={color}
            width={18}
            height={18}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 7l1-2h10l1 2M5 7h14v12a2 2 0 01-2 2H7a2 2 0 01-2-2V7z"
            />
        </svg>
    );
};

export const XIcon = ({
    onClick,
    className,
}: {
    onClick: () => void;
    className?: string;
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={className}
        style={{
            width: '15px',
            height: '15px',
            cursor: 'pointer',
            transition: 'transform 0.2s',
        }}
        onClick={onClick}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
        />
    </svg>
);

export const PencilIcon = ({
    onClick,
    className,
}: {
    onClick: () => void;
    className?: string;
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={2}
        stroke="currentColor"
        className={className}
        style={{
            width: '15px',
            height: '15px',
            cursor: 'pointer',
            transition: 'transform 0.2s',
        }}
        onClick={onClick}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 3.487a2.25 2.25 0 013.182 3.182l-9.829 9.83a4.5 4.5 0 01-1.694 1.063l-3.038.911.91-3.037a4.5 4.5 0 011.063-1.694l9.83-9.83zM10.5 7.5l6 6M5.25 18.75h13.5"
        />
    </svg>
);
