import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
  useRouterState,
} from "@tanstack/react-router";
import { useEffect } from "react";
import RootLayout from "./layout";

export const Route = createRootRoute({
  component: RootRoute,
});

function ScrollToTop() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function RootRoute() {
  return (
    <RootLayout>
      <ScrollToTop />
      <ScrollRestoration />
      <Outlet />
    </RootLayout>
  );
}
