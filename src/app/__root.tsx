import { Outlet, createRootRoute } from "@tanstack/react-router";
import RootLayout from "./layout";

export const Route = createRootRoute({
  component: RootRoute,
});

function RootRoute() {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
}
