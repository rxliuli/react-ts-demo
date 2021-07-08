import { RouteConfig } from "react-router-config";
import { lazy } from "react";

export const routeList: RouteConfig[] = [
  {
    path: "/",
    component: lazy(() => import("../pages/home/")),
    exact: true,
  },
  {
    path: "/parent",
    component: lazy(() => import("../pages/parent/")) as any,
    routes: [
      {
        path: "/parent/",
        component: lazy(() => import("../pages/parent/page/sub1")),
        exact: true,
      },
      {
        path: "/parent/sub2",
        component: lazy(() => import("../pages/parent/page/sub2")),
      },
    ],
  },
];
