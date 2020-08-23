import { Provider } from 'react-redux';
import withReduxStore from '../redux/store/with-redux-store';
import '../css/index.css';

function MyApp({ Component, pageProps, store }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default withReduxStore(MyApp);
