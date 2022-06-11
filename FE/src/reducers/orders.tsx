import {SET_ORDERS} from "../constant/constant";

const initialState = {
    orders: []
}

export const ordersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_ORDERS:
            return {
                ...state,
                orders: action.payload
            }
        default:
            return {...state};
    }
}