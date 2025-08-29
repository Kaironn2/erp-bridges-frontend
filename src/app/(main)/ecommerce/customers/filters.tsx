'use client';

import { FilterContainer } from '@/components/filters/FilterContainer';
import { FilterField } from '@/components/filters/FilterField';
import { RangeInput } from '@/components/filters/RangeInput';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useCustomerStore } from '@/store/ecommerce/use-customer-store';
import { Search } from 'lucide-react';
import { useState } from 'react';

export function EcommerceCustomerFilters() {
  const { setFilters, fetchCustomers } = useCustomerStore();

  const [email, setEmail] = useState('');

  const handleSearch = () => {
    setFilters({ email });
    fetchCustomers({ page: 1 });
  };

  return (
    <FilterContainer
      mainFilters={
        <>
          <div className="grid w-full items-center gap-1.5">
            <div className="relative">
              <Input
                id="email-search"
                placeholder="email@exemplo.com"
                className="pl-8"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
          <Button onClick={handleSearch}>Buscar</Button>
        </>
      }
      advancedFilters={
        <>
          <FilterField id="name" label="Nome" placeholder="João Pedro" />
          <FilterField id="cpf" label="CPF" placeholder="000.000.000-00" />
          <FilterField
            id="phone"
            label="Telefone"
            placeholder="(75) 99999-9999"
          />

          <FilterField
            id="inactive-time"
            label="Tempo Inativo"
            placeholder="Selecione um período"
          />

          <RangeInput label="Total Gasto (R$)" />
          <RangeInput label="Total de Pedidos" />

          <div className="grid items-center gap-1.5">
            <Label>Grupo de Clientes</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecione um grupo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vip">VIP</SelectItem>
                <SelectItem value="regular">Regular</SelectItem>
                <SelectItem value="new">Novo</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </>
      }
    />
  );
}
