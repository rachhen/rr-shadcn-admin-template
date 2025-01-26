import { getValidatedFormData } from "remix-hook-form";

import { RegisterForm } from "~/features/auth/components/register-form";
import {
  registerResolver,
  type RegisterSchema,
} from "~/features/auth/validators/auth";
import { authenticate } from "~/utils/auth.server";
import type { Route } from "./+types/register";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Login" }];
};

export const action = async ({ request }: Route.ActionArgs) => {
  const {
    errors,
    data,
    receivedValues: defaultValues,
  } = await getValidatedFormData<RegisterSchema>(request, registerResolver);
  if (errors) {
    // The keys "errors" and "defaultValues" are picked up automatically by useRemixForm
    return { errors, defaultValues };
  }

  await authenticate({
    id: 1,
    email: data.email,
    name: data.fullName,
    image: "/avatars/shadcn.jpg",
  });

  return null;
};

function Page() {
  return <RegisterForm />;
}

export default Page;
