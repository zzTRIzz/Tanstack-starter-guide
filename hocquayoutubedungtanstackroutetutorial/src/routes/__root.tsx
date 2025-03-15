import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
  pendingComponent: () => <div>Loading....</div>
});

function RootComponent() {
  return (
    <React.Fragment>
      <div>
        <Link to="/"> Home </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/about"> About </Link>
        <Link to="/posts"> Post </Link>
        <Link to="/posts-dung-css"> Post dùng thêm CSS </Link>
      </div>
      <Outlet />
      <div>
        <p>Copyright PedroTech</p>
      </div>
    </React.Fragment>
  );
}
