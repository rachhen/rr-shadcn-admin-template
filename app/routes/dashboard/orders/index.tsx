import { format } from "date-fns";

import { DataTable } from "~/components/data-table/data-table";
import { Button } from "~/components/ui/button";
import { statuses } from "~/features/orders/api/status";
import { columns } from "~/features/orders/components/columns";
import { OrdersToolbar } from "~/features/orders/components/orders-toolbar";
import type { Order } from "~/types/models";
import type { Route } from "./+types";

export const clientLoader = async () => {
  const orders: Order[] = Array.from({ length: 100 }).map((_, i) => {
    const date = format(
      new Date(Date.now() - i * 1000 * 60 * 60 * 24),
      "dd/MM/yyyy"
    );

    return {
      id: i + 1,
      date,
      products: [],
      total: Math.floor(Math.random() * 100),
      status: statuses[Math.floor(Math.random() * statuses.length)].value,
    };
  });

  return { orders };
};

clientLoader.hydrate = true as const;

export function HydrateFallback() {
  return <div>Loading...</div>;
}

function Page({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
        <div className="flex items-center space-x-2">
          <Button>New Order</Button>
        </div>
      </div>
      <DataTable
        data={loaderData.orders}
        columns={columns}
        renderToolbar={(table) => <OrdersToolbar table={table} />}
      />
    </div>
  );
}

export default Page;
