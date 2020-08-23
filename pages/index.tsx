import React from 'react';
import Page from '../components/Page';
import '../css/Index.module.css';

const Index = (): JSX.Element => {
	return (
		<>
		<Page title="Alcoding">
			<div className = "index-container"> 
				<h1>The Alcoding Club PESU Web Coding Portal</h1>
			</div>
		</Page>
		</>
	);
};

export default Index;