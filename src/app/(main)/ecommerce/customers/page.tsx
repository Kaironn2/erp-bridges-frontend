import { PageTitle } from '@/components/commom/PageTitle';
import clsx from 'clsx';
import { Users } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ecommerce - Clientes',
};

export default function CustomersPage() {
  return (
    <div className={clsx('h-full rounded-lg bg-card', 'px-6 pt-8')}>
      <PageTitle
        icon={<Users />}
        title="Ecommerce - Clientes"
        description="Consulte informações sobre clientes do seu Ecommerce"
      />
      <div className="border-y border-muted/50 dark:border-muted-foreground/50 mt-8">
        <div></div>
      </div>
    </div>
  );
}
