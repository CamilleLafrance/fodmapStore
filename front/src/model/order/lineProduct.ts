import { Product } from "../product/product";
import { Order } from "./order";

export interface LineProduct {
    id: number;
    order: Order;
    product: Product;
    quantity: number;
    unitPrice: number;
    discount: number;
    totalPrice: number;
}