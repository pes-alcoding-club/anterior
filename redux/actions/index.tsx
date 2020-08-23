import {
	LOG_IN, 
	LOG_OUT
} from './types';

export const logIn = (userDetails) => {
	return {
		type: LOG_IN,
		payload: userDetails
	};
};

export const logOut = () => {
	return {
		type: LOG_OUT,
	};
};