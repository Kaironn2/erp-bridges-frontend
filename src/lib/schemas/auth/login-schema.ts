import * as z from 'zod';

export const loginSchema = z.object({
  username: z.string().min(3, 'Usuário é obrigatório'),
  password: z.string().min(6, 'Senha deve possuir ao menos 6 caracteres.'),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
