import Page from '../components/Page';
import { Provider } from 'react-redux';
import withReduxStore from '../redux/store/with-redux-store';
import '../css/index.css';

function MyApp({ Component, pageProps, store }) {
	return (
		<Provider store={store}>
			<Page>
				<Component {...pageProps} />
			</Page>
		</Provider>
	);
}

export default withReduxStore(MyApp);
