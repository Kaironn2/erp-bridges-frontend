import apiClient from '@/lib/api-client';
import { apiRoutes } from '@/lib/api-routes';
import {
  apiPaginatedCustomersResponseSchema,
  Customer,
  customersArraySchema,
  PaginatedCustomersResponse,
} from '@/lib/schemas/ecommerce/customer-schema';
import { create } from 'zustand';

type PaginationState = Omit<PaginatedCustomersResponse, 'results'> | null;

interface CustomerState {
  customers: Customer[];
  pagination: PaginationState;
  isLoading: boolean;
  error: string | null;
  fetchCustomers: (page?: number) => Promise<void>;
}

export const useCustomerStore = create<CustomerState>((set) => ({
  customers: [],
  pagination: null,
  isLoading: true,
  error: null,

  fetchCustomers: async (page = 1) => {
    set({ isLoading: true, error: null });
    try {
      const response = await apiClient.get(apiRoutes.ecommerce.customers, {
        params: { page },
      });

      console.log(response.data);

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
}));
