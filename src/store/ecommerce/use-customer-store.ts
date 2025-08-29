import apiClient from '@/lib/api-client';
import { apiRoutes } from '@/lib/api-routes';
import {
  apiPaginatedCustomersResponseSchema,
  Customer,
  PaginatedCustomersResponse,
} from '@/lib/schemas/ecommerce/customer-schema';
import { type CustomerFilters } from '@/lib/types/filters/ecommerce/customer-filters';
import { create } from 'zustand';

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
      const cleanFilters: Record<string, any> = {};
      for (const [key, value] of Object.entries(filters)) {
        if (value !== null && value !== undefined && value !== '') {
          cleanFilters[key] = value;
        }
      }

      const response = await apiClient.get(apiRoutes.ecommerce.customers, {
        params: {
          page,
          ...cleanFilters,
        },
      });

      const validatedData = apiPaginatedCustomersResponseSchema.parse(
        response.data
      );

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
