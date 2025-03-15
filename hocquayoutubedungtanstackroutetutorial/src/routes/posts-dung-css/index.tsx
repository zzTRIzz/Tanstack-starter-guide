import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts-dung-css/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/posts-dung-css/"!</div>
}
