import React from 'react';
import Head from 'next/head';
import Layout from '../Layout';
import Content from '../Content';
import Header from '../Header';
import Footer from '../Footer';

interface PageProps {
	children: React.ReactNode,
	title?: string,
}

const Page = (props: PageProps) => (
	<>
		<Layout>
			<Head>
				<meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>{props.title}</title>
			</Head>
			<Header />
			<Content>
				{props.children}
			</Content>
			<Footer />
		</Layout>
	</>
);

export default Page;