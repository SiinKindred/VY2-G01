import { SET_ORDERS } from "../constant/constant";

export const setOrders = (data: any[]) => ({
    type: SET_ORDERS,
    payload: data,
});

