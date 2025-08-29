'use client';

import { useEffect } from 'react';
import { useCustomerStore } from '@/store/ecommerce/use-customer-store';
import { DataTable } from '@/components/commom/DataTable';
import { columns } from './columns';
import { Spinner } from '@/components/commom/Spinner';

export function CustomerDataTable() {
  const { customers, pagination, isLoading, error, fetchCustomers } =
    useCustomerStore();

  useEffect(() => {
    fetchCustomers(1);
  }, [fetchCustomers]);

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-destructive">{error}</p>
      </div>
    );
  }

  return (
    <DataTable
      columns={columns}
      data={customers}
      noResultsText="Nenhum cliente encontrado"
      pagination={pagination}
      onPageChange={fetchCustomers}
    />
  );
}
