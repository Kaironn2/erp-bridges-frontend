import { PageTitle } from '@/components/commom/PageTitle';
import { Users } from 'lucide-react';
import { EcommerceCustomerFilters } from '@/components/filters/ecommerce/EcommerceCustomerFilters';
import { Metadata } from 'next';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Ecommerce - Clientes',
};

export default function CustomersPage() {
  return (
    <div className="h-full rounded-lg bg-card px-6 pt-8 pb-16">
      <PageTitle
        icon={<Users className="h-6 w-6" />}
        title="Ecommerce - Clientes"
        description="Consulte informações sobre clientes do seu Ecommerce"
      />

      <Separator />

      <div className="mt-8">
        <div className="my-4">
          <EcommerceCustomerFilters />
        </div>
      </div>
    </div>
  );
}
