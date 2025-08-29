'use client';

import { ColumnDef } from '@tanstack/react-table';
import type { Customer } from '@/lib/schemas/ecommerce/customer-schema';

export const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: 'firstName',
    header: 'Nome',
    cell: ({ row }) => {
      const customer = row.original;
      return <div>{`${customer.firstName} ${customer.lastName}`}</div>;
    },
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'totalSpent',
    header: 'Total Gasto',
    cell: ({ row }) => {
      const amount = row.original.totalSpent;

      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'customerGroup',
    header: 'Grupo',
    cell: ({ row }) => {
      return <div>{row.original.customerGroup.name}</div>;
    },
  },
];
