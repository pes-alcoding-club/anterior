import React from 'react';
import { Layout } from 'antd';
import '../../css/Layout.module.css';

export default ({ children }) => {
    return (
        <Layout className="main-layout">
            {children}
        </Layout>
    )
}