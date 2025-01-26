import { createCookieSessionStorage, redirect } from "react-router";
import type { User } from "~/types/models";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "sid",
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secrets: ["s3cr3t"],
    secure: process.env.NODE_ENV === "production",
  },
});

export const authenticate = async (user: User, redirectPath?: string) => {
  const session = await sessionStorage.getSession();
  session.set("user", user);

  throw redirect(redirectPath || "/dashboard", {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
};

export const getAuthenticatedUser = async (
  request: Request
): Promise<User | null> => {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  const user = session.get("user");

  if (!user) {
    return null;
  }

  return user;
};

export const logout = async (redirectPath?: string) => {
  const session = await sessionStorage.getSession();

  throw redirect(redirectPath || "/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
};

export const requiredAuth = async (request: Request) => {
  const user = await getAuthenticatedUser(request);

  if (!user) {
    throw redirect("/login");
  }

  return user;
};
