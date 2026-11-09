/* The Street Charm collection. To add a box: add an entry here, put its painting in public/images/. */
export const BOXES = [
  {
    no: "01",
    title: "Train Street Café",
    vn: "Phố đường tàu, Hà Nội",
    image: "/images/train-street.jpg",
    size: [900, 900],
    alt: "Box 01 painting: Train Street Café",
    path: "/train-street",
  },
  {
    no: "02",
    title: "Sidewalk Iced Tea",
    vn: "Trà đá vỉa hè",
    image: "/images/box-iced-tea.jpg",
    size: [872, 900],
    alt: "Box 02 painting: iced tea on a Hà Nội sidewalk",
  },
  {
    no: "03",
    title: "The Delivery Rider",
    vn: "Người giao hàng",
    image: "/images/box-delivery.jpg",
    size: [720, 1080],
    alt: "Box 03 painting: a delivery motorbike at sunset",
    /* keep the rider and his parcels in frame when the painting is cropped */
    focus: "50% 82%",
  },
];

export const SENSES = [
  { key: "picture", name: "Picture", vn: "hình ảnh" },
  { key: "story", name: "Story", vn: "câu chuyện" },
  { key: "sound", name: "Sound", vn: "âm thanh" },
  { key: "scent", name: "Scent", vn: "mùi hương" },
  { key: "taste", name: "Taste", vn: "hương vị" },
];
