import { Category } from "./category";

export interface Product {
    id: number;
    barCode: number;
    name: string;
    description: string;
    image: string;
    weight: number;
    price: number;
    category: Category;
    stockQuantity: number;
}