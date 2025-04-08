export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProductInput {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
}

export interface UpdateProductInput extends Partial<CreateProductInput> {
  id: string;
}
