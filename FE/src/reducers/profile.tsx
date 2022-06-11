import {SET_ISCHANGE_PASSWORD} from "../constant/constant"

const initialState = {
    isChangePassword: false
}

export const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_ISCHANGE_PASSWORD:
            return {...state, isChangePassword: action.payload};
        default:
            return {...state};
    }
}