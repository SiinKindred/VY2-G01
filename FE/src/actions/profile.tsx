import { SET_ISCHANGE_PASSWORD } from "../constant/constant";

export const setIsChange = (data: any[]) => ({
    type: SET_ISCHANGE_PASSWORD,
    payload: data,
});

