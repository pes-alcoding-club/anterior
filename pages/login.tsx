import React, { FC } from 'react';
import Page from '../components/Page';
import { Form, Input, Button, Checkbox } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import axios from '../axios';

const Login: FC = () => {

    const onFinish = values => {
        const { email, password } = values;

        axios.post('/login', { email, password })
            .then(() => {
                console.log('Login Success:', values);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Page title="Login">
            <div className="login-container">
                <h1>Login</h1>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >

                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your Email!' }]}
                    >
                        <Input
                            prefix={<MailOutlined className="site-form-item-icon" />}
                            type="email"
                            placeholder="Email"
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
                        </Form.Item>
                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
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

export default Login;