import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("routes/dashboard/layout.tsx", [
    ...prefix("dashboard", [
      index("routes/dashboard/index.tsx"),
      ...prefix("products", [
        layout("routes/dashboard/products/layout.tsx", [
          index("routes/dashboard/products/index.tsx"),
          route("new", "routes/dashboard/products/new.tsx"),
          route(":id/edit", "routes/dashboard/products/edit.tsx"),
        ]),
      ]),
    ]),
  ]),
] satisfies RouteConfig;
