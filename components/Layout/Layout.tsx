import React from 'react';
import Head from 'next/head';

type LayoutProps = {
    title?: string
    children?: any
}


const Layout = (props: LayoutProps):JSX.Element => (
	<div>
		<Head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<title>{props.title}</title>            
		</Head>
		{props.children}
	</div>
);

export default Layout;