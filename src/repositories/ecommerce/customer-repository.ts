import apiClient from '@/lib/api-client';
import { apiRoutes } from '@/lib/api-routes';
import {
  apiPaginatedCustomersResponseSchema,
  PaginatedCustomersResponse,
} from '@/lib/schemas/ecommerce/customer-schema';
import { CustomerFilters } from '@/lib/types/filters/ecommerce/customer-filters';

interface FetchCustomersParams {
  page?: number;
  filters?: CustomerFilters;
}

class CustomerRepository {
  async getAll({
    page = 1,
    filters = {},
  }: FetchCustomersParams): Promise<PaginatedCustomersResponse> {
    const cleanFilters: Record<string, any> = {};
    for (const [key, value] of Object.entries(filters)) {
      if (value !== null && value !== undefined && value !== '') {
        cleanFilters[key] = value;
      }
    }

    const params = {
      page,
      ...cleanFilters,
    };

    const response = await apiClient.get(apiRoutes.ecommerce.customers, {
      params,
    });

    const validatedData = apiPaginatedCustomersResponseSchema.parse(
      response.data
    );

    return validatedData;
  }
}

export const customerRepository = new CustomerRepository();
