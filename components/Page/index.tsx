import React from 'react';
import Layout from '../Layout';
import Content from '../Content';
import Header from '../Header';
import Footer from '../Footer';
import withRedux from '../../redux/store/with-redux-store';

const Page = ({ children }) => (
	<>
		<Layout> 
			<Header />
			<Content>
				{children}
			</Content>
			<Footer />
		</Layout>
	</>
);

export default withRedux(Page);