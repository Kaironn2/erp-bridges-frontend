import { z } from 'zod';

const customerGroupSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const customerSchema = z
  .object({
    id: z.number(),
    external_id: z.string().nullable(),
    first_name: z.string(),
    last_name: z.string(),
    email: z.email(),
    cpf: z.string().nullable(),
    phone: z.string().nullable(),
    customer_group: customerGroupSchema,
    customer_since: z.coerce.date().nullable(),
    postal_code: z.string().nullable(),
    city: z.string().nullable(),
    state: z.string().nullable(),
    country: z.string().nullable(),
    last_order: z.coerce.date().nullable(),
    total_orders: z.number(),
    total_spent: z.coerce.number(),
  })
  .transform((data) => ({
    id: data.id,
    externalId: data.external_id,
    firstName: data.first_name,
    lastName: data.last_name,
    email: data.email,
    cpf: data.cpf,
    phone: data.phone,
    customerGroup: data.customer_group,
    customerSince: data.customer_since,
    postalCode: data.postal_code,
    city: data.city,
    state: data.state,
    country: data.country,
    lastOrder: data.last_order,
    totalOrders: data.total_orders,
    totalSpent: data.total_spent,
  }));

export const apiPaginatedCustomersResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(customerSchema),
});

export type Customer = z.infer<typeof customerSchema>;
export type PaginatedCustomersResponse = z.infer<
  typeof apiPaginatedCustomersResponseSchema
>;
