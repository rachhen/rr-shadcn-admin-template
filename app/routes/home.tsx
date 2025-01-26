import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { getAuthenticatedUser } from "~/utils/auth.server";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ context, request }: Route.LoaderArgs) {
  const user = await getAuthenticatedUser(request);

  return { user, message: context.VALUE_FROM_VERCEL };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex h-screen items-center justify-center">
      <nav className="absolute top-0 left-0 right-0 flex justify-between p-4">
        <Link to="/" className="text-2xl font-bold">
          My App
        </Link>
        <div className="space-x-4 text-sm">
          <Button asChild>
            {loaderData.user ? (
              <Link to="/dashboard">Dashboard</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </Button>
        </div>
      </nav>
      <div className="text-center">
        <h1 className="text-6xl font-bold">Welcome to my app!</h1>
        <p className="mt-4 text-xl">
          This is a simple landing page created with React Router, Vite, ShadCN
          UI and Tailwind CSS.
        </p>
        <p className="mt-4 text-lg">
          You can see the value from Vercel in the loader data:{" "}
          {loaderData.message}
        </p>
      </div>
    </div>
  );
}
