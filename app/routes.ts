import {
  type RouteConfig,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("routes/dashboard/layout.tsx", [
    ...prefix("dashboard", [
      index("routes/dashboard/index.tsx"),
      ...prefix("products", [
        layout("routes/dashboard/products/layout.tsx", [
          index("routes/dashboard/products/index.tsx"),
        ]),
      ]),
    ]),
  ]),
] satisfies RouteConfig;
