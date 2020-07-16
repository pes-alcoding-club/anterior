import React from 'react';
import Head from 'next/head';
import '../css/Index.module.css';

const Index = (): JSX.Element => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>AlCoding</title>
			</Head>
			<div className = "index-container"> 
				<h1>The AlCoding Club PESU Web Coding Portal</h1>
			</div>
		</>
	);
};

export default Index;