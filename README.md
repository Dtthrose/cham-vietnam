# cham-vietnam

Website Chạm Vietnam, viết bằng Vite + React.

## Chạy trên máy

```
npm install
npm run dev      # xem thử, thường ở http://localhost:5173
npm run build    # build ra thư mục dist/
```

## Các trang

- `/`: trang chủ thương hiệu
- `/street-charm`: bộ sưu tập Street Charm
- `/train-street`: hộp 01 Train Street Café (trang mà QR trên nắp hộp mở ra)
  - Các phần trong trang: `#box`, `#picture-story`, `#scent-taste`, `#watch`
  - Link QR mở thẳng phần video: `https://<tên-miền>/train-street#watch`

## Cấu trúc

- `src/pages/`: Home, StreetCharm, TrainStreet
- `src/components/`: header, footer, logo, thẻ hộp, đồng hồ pha, trình phát video, hình vẽ nắp hộp và túi drip bag
- `src/data/streetCharm.js`: danh sách hộp trong bộ sưu tập (thêm hộp mới ở đây)
- `src/lib/art.js`: tranh vẽ bằng code (bìa Tết Việt, cành cà phê, thẻ quà)
- `src/styles.css`: toàn bộ CSS
- `public/images/`: tranh màu nước
- `public/video/`: video hộp 01, đặt tên `train-street.mp4`

## Deploy lên Vercel

Import repo trên https://vercel.com/new. Vercel tự nhận Vite (`vercel.json` đã khai báo), không cần chỉnh Build Command hay Output Directory. Mỗi lần push lên `main`, Vercel tự deploy lại.
