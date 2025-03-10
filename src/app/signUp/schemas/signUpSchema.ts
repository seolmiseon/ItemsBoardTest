import { z } from 'zod';

export const signUpSchema = z
    .object({
        email: z
            .string()
            .email('유효한 이메일을 입력해주세요.')
            .min(1, '이메일은 필수입니다.'),
        password: z.string().min(8, '비밀번호는 최소 8글자 이상이어야 합니다.'),
        password2: z
            .string()
            .min(8, '비밀번호 확인은 최소 8글자 이상이어야 합니다.'),
        name: z.string().min(1, '이름은 필수입니다.'),
    })
    .refine((data) => data.password === data.password2, {
        message: '비밀번호와 비밀번호 확인이 일치하지 않습니다.',
        path: ['password2'], // 에러 메시지를 보여줄 필드
    });
