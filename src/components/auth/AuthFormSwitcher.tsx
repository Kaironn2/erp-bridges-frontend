'use client';

import { usePathname, useRouter } from 'next/navigation';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

export function AuthFormSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const isLogin = pathname === '/auth/login';

  const handleToggle = (to: 'auth/login' | 'auth/signup') => {
    router.push(`/${to}`);
  };

  return (
    <div className="w-full">
      <div className="flex mb-6 border-b border-gray-300">
        <button
          className={clsx(
            'flex-1 py-2 text-center font-bold transition-colors',
            isLogin ? 'border-b-2 border-primary text-primary' : 'text-gray-500'
          )}
          onClick={() => handleToggle('auth/login')}
        >
          Entrar
        </button>
        <button
          className={clsx(
            'flex-1 py-2 text-center font-bold transition-colors',
            !isLogin
              ? 'border-b-2 border-primary text-primary'
              : 'text-gray-500'
          )}
          onClick={() => handleToggle('auth/signup')}
        >
          Cadastrar
        </button>
      </div>

      <div className="relative min-h-[200px]">
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute w-full"
            >
              <LoginForm />
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute w-full"
            >
              <SignupForm />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
