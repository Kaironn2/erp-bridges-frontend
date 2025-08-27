import clsx from 'clsx';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  SignupFormValues,
  signupSchema,
} from '@/lib/schemas/auth/signup-schema';
import { ValidationErrorMessage } from './ValidationErrorMessage';
import { AuthButton } from './AuthButton';

export function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupFormValues) => {
    console.log(data);
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
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="text"
            placeholder="Insira seu email..."
            {...register('email')}
          />
          <ValidationErrorMessage message={errors.email?.message} />
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

        <div className={inputDivClasses}>
          <Label htmlFor="confirm-password">Senha</Label>
          <Input
            id="confirm-password"
            type="password"
            placeholder="Confirme sua senha..."
            {...register('confirmPassword')}
          />
          <ValidationErrorMessage message={errors.confirmPassword?.message} />
        </div>

        <AuthButton
          text="Cadastrar"
          isSubmitting={isSubmitting}
          isSubmittingText="Cadastrando..."
        />
      </div>
    </form>
  );
}
