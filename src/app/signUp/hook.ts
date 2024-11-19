import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema } from './schemas/signUpSchema';
import { CREATE_USER } from '@/graphql/queries/createUser';

interface SignUpFormData {
    email: string;
    password: string;
    password2: string;
    name: string;
}

export default function useSignUp() {
    const methods = useForm<SignUpFormData>({
        resolver: zodResolver(signUpSchema),
        mode: 'onChange',
    });

    const router = useRouter();
    const [createUser] = useMutation(CREATE_USER);

    const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
        if (data.password !== data.password2) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        const serverData = {
            email: data.email,
            password: data.password,
            name: data.name,
        };
        try {
            await createUser({
                variables: {
                    createUserInput: serverData,
                },
            });
            alert('회원가입이 완료되었습니다!');
            methods.reset();
            router.push('/signIn');
        } catch (error) {
            console.error('회원가입 오류:', error);
        }
    };

    return {
        ...methods,
        onSubmit,
    };
}
