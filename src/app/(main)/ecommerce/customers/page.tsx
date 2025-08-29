import { PageTitle } from '@/components/commom/PageTitle';
import { Users } from 'lucide-react';
import { Metadata } from 'next';
import { Separator } from '@/components/ui/separator';
import { EcommerceCustomerFilters } from './filters';
import { CustomerDataTable } from './data-table';

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

      <Separator className="mt-4" />

      <div className="mt-8">
        <div className="my-4 flex flex-col gap-8">
          <EcommerceCustomerFilters />
          <CustomerDataTable />
        </div>
      </div>
    </div>
  );
}
