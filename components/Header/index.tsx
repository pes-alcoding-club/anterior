import React from 'react';
import { Layout } from 'antd';
const { Header } = Layout;

export default () => {
    return (
        <Header style={{ color: "white", padding: "0", paddingRight: "50px" }}>
            <ul style={{ listStyle: "none", display: "flex" }}>
                <li>
                    <a className="navbar_link" href="/" style={{ color: "white" }}>
                        ALCoding
                    </a>
                </li>
                <li className="navbar_end_li" style={{ marginLeft: "auto" }}>
                    <a className="navbar_link" href="/login" style={{ color: "white" }}>
                        Login
                    </a>
                </li>
            </ul>
        </Header >
    )
};