'use client';

import { IconButton } from '@/components/commom/IconButton';
import { FilterContainer } from '@/components/filters/FilterContainer';
import { FilterField } from '@/components/filters/FilterField';
import { RangeInput } from '@/components/filters/RangeInput';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useDebounce } from '@/hooks/useDebounce';
import { CustomerFilters } from '@/lib/types/filters/ecommerce/customer-filters';
import { useCustomerStore } from '@/store/ecommerce/use-customer-store';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';

export function EcommerceCustomerFilters() {
  const { setFilters: setGlobalFilters, fetchCustomers } = useCustomerStore();

  const [localFilters, setLocalFilters] = useState<CustomerFilters>({
    email: '',
    name: '',
    cpf: '',
    phone: '',
  });

  const debouncedFilters = useDebounce(localFilters, 300);

  useEffect(() => {
    setGlobalFilters(debouncedFilters);
    fetchCustomers({ page: 1 });
  }, [debouncedFilters, setGlobalFilters, fetchCustomers]);

  const handleFilterChange = (key: keyof CustomerFilters, value: string) => {
    setLocalFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    setGlobalFilters(localFilters);
    fetchCustomers({ page: 1 });
  };

  return (
    <FilterContainer
      mainFilters={
        <>
          <FilterField
            id="email"
            placeholder="email@exemplo.com"
            value={localFilters.email}
            onValueChange={handleFilterChange}
            onPressEnter={handleSearch}
          />
          <IconButton icon={<Search />} onClick={handleSearch}>
            Buscar
          </IconButton>
        </>
      }
      advancedFilters={
        <>
          <FilterField
            id="name"
            label="Nome"
            placeholder="João Pedro"
            value={localFilters.name}
            onValueChange={handleFilterChange}
            onPressEnter={handleSearch}
          />
          <FilterField
            id="cpf"
            label="CPF"
            placeholder="000.000.000-00"
            value={localFilters.cpf}
            onValueChange={handleFilterChange}
            onPressEnter={handleSearch}
          />
          <FilterField
            id="phone"
            label="Telefone"
            placeholder="(75) 99999-9999"
            value={localFilters.phone}
            onValueChange={handleFilterChange}
            onPressEnter={handleSearch}
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
