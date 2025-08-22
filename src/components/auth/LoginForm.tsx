import clsx from 'clsx';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { LoginFormValues, loginSchema } from '@/lib/schemas/auth/login-schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/button';

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
  };

  const mainDivClasses = clsx('flex flex-col gap-6 w-full max-w-sm');
  const inputDivClasses = clsx('grid w-full max-w-sm items-center gap-3');

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
          {errors.username && (
            <span className="destructive">{errors.username.message}</span>
          )}
        </div>

        <div className={inputDivClasses}>
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            placeholder="Insira sua senha..."
            {...register('password')}
          />
          {errors.password && (
            <span className="destructive">{errors.password.message}</span>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting}>
          Entrar
        </Button>
      </div>
    </form>
  );
}
