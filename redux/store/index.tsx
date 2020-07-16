import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

// Creating inital store
export default function getStore(initialState) {
	return createStore(
		reducers,
		initialState,
		composeWithDevTools(applyMiddleware(thunkMiddleware))
	);
}