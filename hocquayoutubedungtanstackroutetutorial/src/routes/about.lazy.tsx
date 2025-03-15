import { createLazyFileRoute} from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: RouteComponent,
  pendingComponent: () => <div>Loading....</div>
});

function RouteComponent() {
  return (
    <div>
      Đang truy cập vào đường dẫn "/about"!
      <h1>Hello About</h1>
    </div>
  );
}
