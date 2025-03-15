import { createFileRoute } from '@tanstack/react-router';

// Định nghĩa tuyến đường
export const Route = createFileRoute('/sanpham/$id')({
  component: SanPhamChiTiet, // Gọi component hiển thị
});

// Component hiển thị trang chi tiết
function SanPhamChiTiet() {
  const { id } = Route.useParams(); // Lấy giá trị id từ URL
  return <div>Xin chào, đây là sản phẩm có ID: {id}</div>;
}