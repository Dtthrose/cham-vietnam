# cham-vietnam

Website tĩnh của Chút'Việt (HTML + CSS, không cần build).

## Cấu trúc

- `index.html`: trang chủ, bộ sưu tập, hướng dẫn pha
- `train-street.html`: trang cho QR của hộp 1
- `style.css`: màu và font
- `images/`: ảnh (hero.jpg, box-train-street.jpg, box-iced-tea.jpg, box-delivery.jpg)
- `audio/`: âm thanh (train-street.mp3)

## Xem thử trên máy

Mở `index.html` bằng trình duyệt, hoặc chạy `python3 -m http.server` rồi vào http://localhost:8000

## Deploy lên Vercel

1. Đẩy repo lên GitHub.
2. Vào https://vercel.com/new, chọn Import repo `cham-vietnam`.
3. Framework Preset: **Other**. Để trống Build Command và Output Directory.
4. Bấm Deploy. Mỗi lần push lên nhánh `main`, Vercel tự deploy lại.

`vercel.json` bật `cleanUrls`, nên link QR có thể dùng `/train-street` thay cho `/train-street.html`.
