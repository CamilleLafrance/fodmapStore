import { User } from "src/model/user/user";
import { Order } from "../order";
import { PaymentStatus } from "./paymentStatus.enum";
import { PaymentMethod } from "./paymentMethod.enum";

export interface Payment {
    id: number;
    user: User;
    order: Order;
    amount: number;
    paidAt: Date;
    paymentStatus: PaymentStatus;
    paymentMethod: PaymentMethod;
}