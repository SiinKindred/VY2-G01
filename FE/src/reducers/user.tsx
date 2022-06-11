import { FETCH_USER } from "../constant/constant";
import {User} from "../model/user";
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	user: {},
};

export const userReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case FETCH_USER:
			return {
				...state,
				user: new User(action.payload),
			};
		default:
			return { ...state };
	}
};
