import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
  pendingComponent: () => <div>Loading....</div>
});

function RouteComponent() {
  return (
    <div>
      Đang truy cập vào đường dẫn "/"!
      <h1>Home Page</h1>
    </div>
  );
}
