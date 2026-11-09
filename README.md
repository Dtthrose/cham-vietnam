# cham-vietnam

Website tĩnh của Chạm Vietnam (HTML + CSS + JS trong một file, không cần build).

## Cấu trúc

- `index.html`: toàn bộ website, gồm 3 trang chuyển bằng dấu `#`:
  - `/#home`: trang chủ thương hiệu
  - `/#street-charm`: bộ sưu tập Street Charm
  - `/#train-street`: hộp 01 Train Street Café (trang QR trên nắp hộp mở ra)
- `images/`: tranh màu nước (`train-street.jpg`, `box-iced-tea.jpg`, `box-delivery.jpg`)
- `video/`: video của hộp 01, đặt tên `train-street.mp4`
- `style.css`, `train-street.html`: bản Chút'Việt cũ, không còn dùng

## Thay ảnh, video

- Video hộp 01: đặt file vào `video/train-street.mp4` (hoặc sửa `VIDEO_SRC` cuối `index.html`).
- Tranh hộp: thay file cùng tên trong `images/`.

## Xem thử trên máy

Chạy `python3 -m http.server` trong thư mục này rồi vào http://localhost:8000

## Deploy lên Vercel

1. Vào https://vercel.com/new, chọn Import repo `cham-vietnam`.
2. Framework Preset: **Other**. Để trống Build Command và Output Directory.
3. Bấm Deploy. Mỗi lần push lên nhánh `main`, Vercel tự deploy lại.
