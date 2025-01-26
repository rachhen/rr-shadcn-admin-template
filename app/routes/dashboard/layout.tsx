import { Outlet } from "react-router";

import { AppBreadcrumb } from "~/components/app-breadcrumb";
import { AppSidebar } from "~/components/app-sidebar";
import { ThemeToggle } from "~/components/theme-toggle";
import { Separator } from "~/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import { requiredAuth } from "~/utils/auth.server";
import type { Route } from "./+types";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const user = await requiredAuth(request);

  return { user };
};

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <AppBreadcrumb baseHref="/dashboard" baseTitle="Dashboard" />
          </div>
          <div className="ml-auto pr-4">
            <ThemeToggle />
          </div>
        </header>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
