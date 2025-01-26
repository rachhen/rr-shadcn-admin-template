import { getValidatedFormData } from "remix-hook-form";

import { LoginForm } from "~/features/auth/components/login-form";
import {
  loginResolver,
  type LoginSchema,
} from "~/features/auth/validators/auth";
import { authenticate } from "~/utils/auth.server";
import type { Route } from "./+types/login";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Login" }];
};

export const action = async ({ request }: Route.ActionArgs) => {
  const {
    errors,
    data,
    receivedValues: defaultValues,
  } = await getValidatedFormData<LoginSchema>(request, loginResolver);
  if (errors) {
    // The keys "errors" and "defaultValues" are picked up automatically by useRemixForm
    return { errors, defaultValues };
  }

  await authenticate({
    id: 1,
    email: data.email,
    name: "John Doe",
    image: "/avatars/shadcn.jpg",
  });

  return null;
};

export default function Page() {
  return <LoginForm />;
}
