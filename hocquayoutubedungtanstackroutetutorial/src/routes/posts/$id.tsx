import { createFileRoute, useLoaderData } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/$id")({
  component: RouteComponent,
  loader: async ({ params }) => {
    const id = params.id;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!response.ok) throw new Error(">>>>>>Failed to fetch post");

    const data = await response.json();
    return {data, id};
  },
  pendingComponent: () => <div>Loading....</div>,
  errorComponent: ({ error }) => <div>Error: {error.message}</div>
});

function RouteComponent() {

  const {data, id} = useLoaderData({ from: "/posts/$id"})

  return (
    <div>
      Đang truy cập vào đường dẫn "/posts/$id"!
      <div>
        Đường dẫn trên url: "/posts/{id}"!
      </div>
      <p>{data.userId}</p>
      <div>
        <p>
        {JSON.stringify(data, null, 2)}
        </p>
      </div>
    </div>
  );
}
