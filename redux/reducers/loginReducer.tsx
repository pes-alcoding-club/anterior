import {
	LOG_IN,
	LOG_OUT
} from '../actions/types';
import initialStore from '../store/initialStore';

export default (state = initialStore, action) => {
	switch (action.type) {
	case LOG_IN:
		return { ...state, isLoggedIn: true, userDetails: action.payload };
	case LOG_OUT:
		return { ...state, isLoggedIn: false, userDetails: null };
	default:
		return state;
	}
};