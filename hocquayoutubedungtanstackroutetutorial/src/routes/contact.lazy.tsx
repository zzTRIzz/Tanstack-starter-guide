import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/contact")({
  component: RouteComponent,
  pendingComponent: () => <div>Loading....</div>
});

function RouteComponent() {
  const nagitave = useNavigate()
  
  return (
    <div>
      Đang truy cập vào đường dẫn "/contact"!
      <h1>Hello Contact</h1>
      <button onClick={() => nagitave({to: '/about'})}>Navigate to About Page</button>
    </div>
  );
}
