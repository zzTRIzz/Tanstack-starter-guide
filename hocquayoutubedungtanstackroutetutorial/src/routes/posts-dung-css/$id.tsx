import { createFileRoute, useLoaderData } from "@tanstack/react-router";

export const Route = createFileRoute("/posts-dung-css/$id")({
  component: RouteComponent,
  loader: async ({ params }) => {
    const id = params.id;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!response.ok) throw new Error(">>>>>>Failed to fetch post");

    const data = await response.json();
    return { data, id };
  },
  pendingComponent: () => <div>Loading....</div>,
  errorComponent: ({ error }) => <div>Error: {error.message}</div>
});

function RouteComponent() {
  const { data, id } = useLoaderData({ from: "/posts-dung-css/$id" });

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ color: "#333", borderBottom: "2px solid #333", paddingBottom: "10px" }}>
        Đang truy cập vào đường dẫn: <span style={{ color: "#007BFF" }}>"/posts/{id}"</span>
      </h2>
      <div style={{ margin: "20px 0", fontStyle: "italic", color: "#666" }}>
        Đường dẫn trên URL: <strong>"/posts/{id}"</strong>
      </div>
      <div style={{ background: "#f5f5f5", padding: "15px", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
        <pre style={{ margin: 0, whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
}