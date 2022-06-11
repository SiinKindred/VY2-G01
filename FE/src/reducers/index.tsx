import { combineReducers } from "redux";
import { userReducer } from "./user";
import {ordersReducer} from "./orders";
import {profileReducer} from "./profile";

const rootReducer = combineReducers({
	userState: userReducer,
	orderState: ordersReducer,
	profileState: profileReducer
});

export default rootReducer;
