[Previous sections remain the same]

## 18. Tối ưu hiệu suất và SEO

### 18.1. Code Splitting

TanStack Router hỗ trợ code splitting tự động với lazy loading:

```typescript
// src/routes/users/index.tsx
export const Route = new FileRoute('/users').createRoute({
  component: lazy(() => import('./UsersPage')),
});
```

### 18.2. Prefetching Data

```typescript
// Prefetch data khi hover vào link
<Link
  to="/users/$id/view"
  params={{ id: user.id.toString() }}
  preload="intent" // Tự động prefetch khi hover
>
  View
</Link>

// Prefetch thủ công
const router = useRouter();
useEffect(() => {
  router.preloadRoute({
    to: '/users/$id/view',
    params: { id: '123' }
  });
}, []);
```

### 18.3. Cache Management

```typescript
// Cấu hình cache trong route
export const Route = new FileRoute('/users').createRoute({
  loader: async () => {
    const { data } = await api.get('/users');
    return { users: data };
  },
  // Giữ cache trong 5 phút
  cacheTime: 1000 * 60 * 5,
});

// Invalidate cache thủ công
const router = useRouter();
await router.invalidate();

// Invalidate route cụ thể
await router.invalidate({
  to: '/users/$id/view',
  params: { id: '123' }
});
```

### 18.4. SEO Optimization

```typescript
// src/routes/users/$id/view.tsx
export const Route = new FileRoute('/users/$id/view').createRoute({
  loader: async ({ params: { id } }) => {
    const { data } = await api.get(`/user/${id}`);
    return { user: data };
  },
  meta: ({ loaderData }) => {
    const { user } = loaderData;
    return {
      title: `Chi tiết người dùng - ${user.name}`,
      description: `Thông tin chi tiết về ${user.name}`,
      'og:title': `Chi tiết người dùng - ${user.name}`,
      'og:description': `Thông tin chi tiết về ${user.name}`,
    };
  },
  component: () => {
    const { user } = Route.useLoaderData();
    return <UserDetails user={user} />;
  },
});
```

### 18.5. Performance Best Practices

1. **Lazy Loading**:
   - Sử dụng code splitting cho các routes lớn
   - Lazy load các components không cần thiết ngay
   - Sử dụng Suspense để hiển thị loading state

2. **Data Management**:
   - Cấu hình cache time phù hợp cho từng route
   - Sử dụng prefetching cho UX tốt hơn
   - Chỉ invalidate cache khi cần thiết

3. **Bundle Size**:
   - Tách các dependencies lớn thành chunks riêng
   - Sử dụng dynamic imports cho các features ít dùng
   - Monitoring bundle size với tools như `source-map-explorer`

4. **SEO**:
   - Cung cấp meta tags đầy đủ cho mỗi route
   - Sử dụng SSR khi cần thiết
   - Đảm bảo accessibility với semantic HTML

### 18.6. Monitoring và Analytics

```typescript
// src/routes/__root.tsx
export const Route = createRootRoute({
  beforeLoad: ({ location }) => {
    // Track page views
    analytics.pageView(location.pathname);
  },
  component: () => {
    return (
      <div>
        <Outlet />
      </div>
    );
  },
});
```

### 18.7. Development Tools

1. **Router DevTools**:
```typescript
import { RouterDevtools } from '@tanstack/router-devtools';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {process.env.NODE_ENV === 'development' && (
        <RouterDevtools router={router} />
      )}
    </>
  );
}
```

2. **Performance Monitoring**:
```typescript
export const Route = new FileRoute('/users').createRoute({
  loader: async () => {
    const start = performance.now();
    const { data } = await api.get('/users');
    const end = performance.now();
    
    console.log(`Users data loaded in ${end - start}ms`);
    return { users: data };
  },
});
```

[Previous sections remain the same]
