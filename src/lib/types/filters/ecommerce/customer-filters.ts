export type CustomerFilters = {
  name?: string;
  email?: string;
  cpf?: string;
  customer_group?: number;
  phone?: string;
  state?: string;
  country?: string;
  postal_code?: string;
  total_spent_min?: number;
  total_spent_max?: number;
  total_orders_min?: number;
  total_orders_max?: number;
  last_order_min?: string;
  last_order_max?: string;
};
