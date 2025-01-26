import { Outlet, redirect } from "react-router";

import { getAuthenticatedUser } from "~/utils/auth.server";
import type { Route } from "./+types/layout";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const user = await getAuthenticatedUser(request);

  if (user) {
    return redirect("/dashboard");
  }

  return null;
};

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Outlet />
      </div>
    </div>
  );
}
