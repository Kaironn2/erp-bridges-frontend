'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search } from 'lucide-react';
import { FilterContainer } from '../shared/FilterContainer';
import { FilterField } from '../shared/FilterField';
import { RangeInput } from '../shared/RangeInput';

export function EcommerceCustomerFilters() {
  return (
    <FilterContainer
      mainFilters={
        <>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email-search">Buscar por Email</Label>
            <div className="relative">
              <Input
                id="email-search"
                placeholder="email@exemplo.com"
                className="pl-8"
              />
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
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
