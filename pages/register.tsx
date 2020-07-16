import React from 'react';
import Head from 'next/head';
import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import axios from '../axios';
import Router from 'next/router';
import '../css/Login.module.css';


export default () => {
    const [form] = Form.useForm();

    const handleRegister = (values) => {
        const { email, username, name, password } = values;

        axios.post('/register', { name, email, username, password })
            .then(() => {
                console.log('Success:', values);
                Router.push('/login');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>Register</title>
            </Head>

            <div className="login-container">
                <h1>Register</h1>
                <Form
                    className="login-form"
                    form={form}
                    name="register"
                    onFinish={handleRegister}
                    scrollToFirstError
                >

                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Please input your Full Name!', whitespace: true }]}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Full Name"
                        />
                    </Form.Item>

                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!', whitespace: true }]}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Username"
                        />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<MailOutlined className="site-form-item-icon" />}
                            placeholder="E-Mail"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            minLength={5}
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('The two passwords that you entered do not match!');
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            minLength={5}
                            placeholder="Confirm Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" id="login-form-button">
                            Register
                        </Button>
                    </Form.Item>

                </Form>
            </div>
        </>
    );
};


