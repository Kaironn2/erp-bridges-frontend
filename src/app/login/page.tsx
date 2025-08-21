'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Toast, ToastProvider, useToast } from '@/components/ui/toast';

export default function LoginPage() {
  const router = useRouter();
  const { login, isAuthenticated, loading, error } = useAuthStore();
  const { toast } = useToast();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isAuthenticated) router.push('/dashboard');
  }, [isAuthenticated, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ username, password });
      toast({
        title: 'Login realizado',
        description: 'Você entrou com sucesso!',
        variant: 'default',
      });
    } catch {
      toast({
        title: 'Erro no login',
        description: error || 'Usuário ou senha inválidos',
        variant: 'destructive',
      });
    }
  };

  return (
    <ToastProvider>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg space-y-6"
        >
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Bem-vindo
          </h1>
          <p className="text-center text-gray-500">
            Entre com suas credenciais
          </p>

          <div className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="username">Usuário</Label>
              <Input
                id="username"
                type="text"
                placeholder="Digite seu usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </Button>

          {error && (
            <Alert variant="destructive">
              <AlertTitle>Erro</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </form>

        <Toast />
      </div>
    </ToastProvider>
  );
}
