import * as z from 'zod';

export const signupSchema = z
  .object({
    email: z.email({ message: 'E-mail inválido' }),
    username: z.string().min(3, 'Usuário deve ter ao menos 3 caracteres.'),
    password: z.string().min(6, 'Senha deve possuir ao menos 6 caracteres.'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não conferem.',
    path: ['confirmPassword'],
  });

export type SignupFormValues = z.infer<typeof signupSchema>;
