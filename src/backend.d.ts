declare namespace backend {
  const categoryType = {
    smartphones: "smartphones",
    laptops: "laptops",
    fragrances: "fragrances",
    skincare: "skincare",
    groceries: "groceries",
    "home-decoration": "home-decoration",
  } as const;

  type Category = keyof typeof categoryType;

  type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: Category;
    thumbnail: string;
    images: string[];
  };

  type Products = Product[];

  type ProductsRes = {
    products: Products;
    total: number;
    skip: number;
    limit: number;
  };
}
