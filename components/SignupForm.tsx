import { useForm, useFormContext, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from './Input';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

export type SignupFormData = yup.InferType<typeof schema>;

export const SignupForm = () => {
  const methods = useForm<SignupFormData>({
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  const onSubmit = async (data: SignupFormData) => {
    const response = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });

    const json = await response.json();

    if (json.ok) {
      router.push('/api/auth/signin');
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="">
        <h1 className="mb-4 font-semibold text-2xl text-center">Zarejestruj się</h1>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8 flex justify-center flex-col items-center">
          <div className=" w-[70%]">
            <Input className="w-full p-2" id="email" label="Email" type="email" />
          </div>
          <div className="w-[70%]">
            <Input className="w-full p-2" id="password" label="Password" type="password" />
          </div>
          <button className="px-5 rounded-xl text-xl">Dalej</button>
          <Link href="/api/auth/signin">
            <a>Masz już konto? Zaloguj się</a>
          </Link>
        </form>
      </div>
    </FormProvider>
  );
};
