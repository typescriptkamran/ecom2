import {
  Product,
  CreateProductInput,
  UpdateProductInput,
} from "@/types/product";

// Mock database for products
let products: Product[] = [
  {
    id: "1",
    name: "Rose Bouquet",
    description: "Beautiful bouquet of fresh roses",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1548586196-aa5803b77379?w=800&q=80",
    category: "Bouquets",
    stock: 15,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Tulip Arrangement",
    description: "Colorful arrangement of tulips",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1589123053646-4e8b5493f3f4?w=800&q=80",
    category: "Arrangements",
    stock: 10,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Lily Bouquet",
    description: "Elegant bouquet of lilies",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?w=800&q=80",
    category: "Bouquets",
    stock: 8,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "4",
    name: "Succulent Collection",
    description: "Set of 3 small succulents in decorative pots",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80",
    category: "Plants",
    stock: 20,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// Product CRUD operations
export const getProducts = async (): Promise<Product[]> => {
  return products;
};

export const getProduct = async (id: string): Promise<Product | undefined> => {
  return products.find((product) => product.id === id);
};

export const createProduct = async (
  input: CreateProductInput,
): Promise<Product> => {
  const newProduct: Product = {
    id: Math.random().toString(36).substring(2, 9),
    ...input,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  products.push(newProduct);
  return newProduct;
};

export const updateProduct = async (
  input: UpdateProductInput,
): Promise<Product | undefined> => {
  const index = products.findIndex((product) => product.id === input.id);

  if (index === -1) return undefined;

  const updatedProduct = {
    ...products[index],
    ...input,
    updatedAt: new Date().toISOString(),
  };

  products[index] = updatedProduct;
  return updatedProduct;
};

export const deleteProduct = async (id: string): Promise<boolean> => {
  const initialLength = products.length;
  products = products.filter((product) => product.id !== id);
  return products.length !== initialLength;
};
