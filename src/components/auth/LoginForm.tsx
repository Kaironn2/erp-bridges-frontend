import clsx from 'clsx';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { LoginFormValues, loginSchema } from '@/lib/schemas/auth/login-schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ValidationErrorMessage } from './ValidationErrorMessage';
import { useAuthStore } from '@/store/use-auth-store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { AuthButton } from './AuthButton';

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const { login, error: authError, clearError } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    clearError();
  }, [clearError]);

  const onSubmit = async (data: LoginFormValues) => {
    const sucess = await login(data);

    if (sucess) {
      router.push('/');
    }
  };

  const mainDivClasses = clsx('flex flex-col gap-3 w-full max-w-sm');
  const inputDivClasses = clsx('grid w-full max-w-sm items-center gap-1');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={mainDivClasses}>
        <div className={inputDivClasses}>
          <Label htmlFor="username">Usuário</Label>
          <Input
            id="username"
            type="text"
            placeholder="Insira seu usuário..."
            {...register('username')}
          />
          <ValidationErrorMessage message={errors.username?.message} />
        </div>

        <div className={inputDivClasses}>
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            placeholder="Insira sua senha..."
            {...register('password')}
          />
          <ValidationErrorMessage message={errors.password?.message} />
        </div>

        <AuthButton
          text="Entrar"
          isSubmitting={isSubmitting}
          isSubmittingText="Entrando..."
        />
        {authError && (
          <p className="text-sm text-destructive text-center">{authError}</p>
        )}
      </div>
    </form>
  );
}
