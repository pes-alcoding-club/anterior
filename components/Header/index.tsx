import React from 'react';
import { Layout } from 'antd';
import '../../css/Header.module.css';

const { Header } = Layout;

export default () => {
	return (
		<Header id="navbar">
			<ul className="navbar-list">
				<li>
					<a className="navbar-link" href="/">
						<img src="/LOGO.jpg" className="logo" alt="logo" />
					</a>
				</li>
				<li className="navbar-end-li">
					<a className="navbar-link" href="/login">
						Login
					</a>
				</li>
			</ul>
		</Header >
	);
};