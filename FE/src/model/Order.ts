import { OrderDetail } from "./OrderDetail";
import { User } from "./user";
const {REACT_APP_API_URL} = process.env;

export class Order {
     order_id: string = "";
     create_at: Date = new Date();
     total: number = 0;
     reward: number = 0;
     voucherCode: string = "";
     user_id: User = new User();
     partner_id: User = new User();
     details: OrderDetail[] = [];
     static async getOrders() {
          const token = localStorage.getItem("access_token");
          const res = await fetch(`${REACT_APP_API_URL}/api/orders`, {
               headers: {
                    authorization: `Bearer ${token}`
               }
          });
          return res.json();
     }
}