// This mirrors the backend data for the self-contained demo.
// In a real setup, this is fetched via GET /api/products
const PRODUCTS = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    category: "Electronics",
    price: 2499,
    originalPrice: 3999,
    rating: 4.5,
    reviews: 1284,
    stock: 15,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    badge: "Best Seller",
    description: "Premium sound quality with 30-hour battery life and active noise cancellation."
  },
  {
    id: 2,
    name: "Minimalist Leather Watch",
    category: "Fashion",
    price: 1899,
    originalPrice: 2999,
    rating: 4.7,
    reviews: 856,
    stock: 8,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    badge: "New",
    description: "Slim profile with genuine leather strap and sapphire crystal glass."
  },
  {
    id: 3,
    name: "Ceramic Pour-Over Coffee Set",
    category: "Home",
    price: 849,
    originalPrice: 1199,
    rating: 4.8,
    reviews: 432,
    stock: 22,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
    badge: "Sale",
    description: "Handcrafted ceramic set for the perfect pour-over brewing experience."
  },
  {
    id: 4,
    name: "Merino Wool Crew Neck",
    category: "Fashion",
    price: 1299,
    originalPrice: 1799,
    rating: 4.6,
    reviews: 673,
    stock: 30,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
    badge: null,
    description: "Ultra-soft merino wool in a classic silhouette. Machine washable."
  },
  {
    id: 5,
    name: "GYM Bar",
    category: "Electronics",
    price: 1599,
    originalPrice: 2199,
    rating: 4.4,
    reviews: 318,
    stock: 12,
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400https://picsum.photos/seed/lamp42/400/400h=400https://picsum.photos/seed/lamp42/400/400fit=crop",
    badge: "Sale",
    description: "Touch-controlled LED lamp with wireless charging pad and USB ports."
  },
  {
    id: 6,
    name: "Linen Throw Blanket",
    category: "Home",
    price: 699,
    originalPrice: 999,
    rating: 4.9,
    reviews: 1102,
    stock: 45,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    badge: "Top Rated",
    description: "Stone-washed linen for that perfectly lived-in look and feel."
  },
  {
    id: 7,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 3499,
    originalPrice: 4599,
    rating: 4.6,
    reviews: 542,
    stock: 7,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
    badge: "Limited",
    description: "TKL layout with tactile switches, RGB backlight and aluminum body."
  },
  {
    id: 8,
    name: "Botanical Candle Set",
    category: "Home",
    price: 549,
    originalPrice: 799,
    rating: 4.7,
    reviews: 289,
    stock: 60,
    image: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=400&h=400&fit=crop",
    badge: "New",
    description: "Set of 3 hand-poured soy candles with botanical scents. 40+ hours each."
  }
];
