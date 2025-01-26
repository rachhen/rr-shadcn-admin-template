import { Link } from "react-router";
import { DataTable } from "~/components/data-table/data-table";
import { Button } from "~/components/ui/button";
import { getProducts } from "~/features/products/api/get-products";
import { columns } from "~/features/products/components/columns";
import { ProductsToolbar } from "~/features/products/components/products-toolbar";
import type { Route } from "./+types";

export const clientLoader = async () => {
  const products = await getProducts();

  return { products };
};

clientLoader.hydrate = true as const;

export function HydrateFallback() {
  return <div>Loading...</div>;
}

function Products({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Products</h2>
        <div className="flex items-center space-x-2">
          <Button asChild>
            <Link to="new">New Product</Link>
          </Button>
        </div>
      </div>
      <DataTable
        data={loaderData.products}
        columns={columns}
        renderToolbar={(table) => <ProductsToolbar table={table} />}
      />
    </div>
  );
}

export default Products;
