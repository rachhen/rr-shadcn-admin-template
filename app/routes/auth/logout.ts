import { logout } from "~/utils/auth.server";
import type { Route } from "./+types/logout";

export const action = async ({}: Route.ActionArgs) => {
  await logout();

  return null;
};
