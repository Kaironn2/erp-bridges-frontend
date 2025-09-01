import { create } from 'zustand';
import {
  Customer,
  PaginatedCustomersResponse,
} from '@/lib/schemas/ecommerce/customer-schema';
import { type CustomerFilters } from '@/lib/types/filters/ecommerce/customer-filters';
import { customerRepository } from '@/repositories/ecommerce/customer-repository';

type PaginationState = Omit<PaginatedCustomersResponse, 'results'> | null;

interface FetchCustomersParams {
  page?: number;
}

interface CustomerState {
  customers: Customer[];
  pagination: PaginationState;
  filters: CustomerFilters;
  isLoading: boolean;
  error: string | null;
  fetchCustomers: (params?: FetchCustomersParams) => Promise<void>;
  setFilters: (newFilters: Partial<CustomerFilters>) => void;
}

export const useCustomerStore = create<CustomerState>((set, get) => ({
  customers: [],
  pagination: null,
  filters: {},
  isLoading: true,
  error: null,

  fetchCustomers: async (params = {}) => {
    const { page = 1 } = params;
    const { filters } = get();

    set({ isLoading: true, error: null });
    try {
      const validatedData = await customerRepository.getAll({ page, filters });

      set({
        customers: validatedData.results,
        pagination: {
          count: validatedData.count,
          next: validatedData.next,
          previous: validatedData.previous,
        },
        isLoading: false,
      });
    } catch (error) {
      console.error('Falha ao buscar clientes:', error);
      set({
        error: 'Não foi possível carregar os clientes.',
        isLoading: false,
      });
    }
  },

  setFilters: (newFilters) => {
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    }));
  },
}));
