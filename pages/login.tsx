import React from 'react';
import Page from '../components/Page';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from '../axios';
import '../css/Login.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/actions';
import Router from 'next/router';

export default () => {
    const dispatch = useDispatch();

    const handleLogin = userDetails => {
        const { username, password } = userDetails;

        axios.post('/login', { username, password })
            .then(() => {
                console.log('Login Success:', userDetails);
                dispatch(logIn(userDetails));
                Router.push('/');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Page title='Login'>
            <div className="login-container">
                <h1>Login</h1>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={handleLogin}
                >

                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Username"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            minLength={5}
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        <a className="login-form-forgot" href="">
                            Forgot password?
						</a>
                        </Form.Item>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" id="login-form-button">
                            Log in
						</Button>
                        Or <a href="/register">register now!</a>
                    </Form.Item>

                </Form>
            </div>
        </Page>
    );
};