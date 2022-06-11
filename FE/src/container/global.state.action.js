import { connect } from "react-redux";
import { fetchUser } from "../actions/user";
import {setOrders} from "../actions/orders";
import {setIsChange} from "../actions/profile";

export default function globalStateAndAction(name) {
	const mapStateToProps = (state) => {
		// return {...state.userState}
		return {
			user: state.userState.user,
			orders: state.orderState.orders,
			profile: state.profileState
		};
	};

	const mapActionToProps = (dispatch) => ({
		fetchUser: (data) => dispatch(fetchUser(data)),
		setOrders: (data) => dispatch(setOrders(data)),
		setIsChange: (data) => dispatch(setIsChange(data)),
	});
	return connect(mapStateToProps, mapActionToProps)(name);
}
