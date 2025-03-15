import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createRouter, Link, RouterProvider } from "@tanstack/react-router";
import "./index.css";

import { routeTree } from "./routeTree.gen";
const router = createRouter({
  routeTree,
  defaultPendingComponent: () => {
    return <div>Loading...</div>;
  },
  defaultNotFoundComponent: () => {
    return (
      <div>
        <h1>404 Not Found</h1>
        <Link to="/">Go to Home</Link>
      </div>
    );
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    route: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
