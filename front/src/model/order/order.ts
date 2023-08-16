import { User } from "../user/user";
import { OrderStatus } from "./orderStatus.enum";

export interface Order {
    id: number;
    user: User;
    totalPrice: number;
    totalDiscount: number;
    createdAt: Date;
    shippedAt: Date;
    deliveredAt: Date;
    status: OrderStatus;
}