import React from 'react';
import Head from 'next/head';
import { Layout } from 'antd';
import Header from '../Header';
const { Content, Footer } = Layout;

type LayoutProps = {
	title?: string
	children?: any
}


const Page = (props: LayoutProps): JSX.Element => (
	<>
		<Head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<title>{props.title}</title>
		</Head>
			<Header />
		<Layout style = {{height: "86vh"}}>
			<Content>
				{props.children}
			</Content>
		</Layout>
		<Footer style = {{textAlign: "center"}}>
			ALCoding PESU © 2020
        </Footer>
	</>
);

export default Page;