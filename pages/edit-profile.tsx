import React, { useState } from 'react';
import Head from 'next/head';
import '../css/Edit-Profile.module.css';
import { Empty, Typography, Avatar, Space, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
const dateFormat = 'YYYY/MM/DD';

const {  Sider, Content } = Layout;


const { Title, Text, Link } = Typography; 

import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox
} from 'antd';


function handleChange(value) {
  console.log(`selected ${value}`);
}


const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 10 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

const formItemLayout1 = {
  labelCol: {
    xs: { span: 40 },
    sm: { span: 0 },
  },
  wrapperCol: {
    xs: { span: 40 },
    sm: { span: 0 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

  
export default () => {

    const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
      </Select>
    </Form.Item>
  );

  
  return (
    <>
    
      <Head>
				<meta charSet='utf-8' />
				<meta	name='viewport'	content='initial-scale=1.0, width=device-width' />
				<title>Edit Profile</title>
				<link
					rel='stylesheet'
					href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
					integrity='sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN'
					crossOrigin='anonymous'
				/>
      </Head>
      <div className="cont">
      <div className="space">  </div>
      <Layout>
          <Content>
            <div className="Info">Personal Information</div>
      <Form size="small"
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: '91'
      }}
      scrollToFirstError
    >
     
      <Form.Item
        name="name"
        label={
          <span>
            Name&nbsp;
          </span>
        }
        rules={[{ required: true, message: 'Please input your name!', whitespace: true }]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
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
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name="dob"
        label="DOB"
      >
      <DatePicker initialvalues={moment('2015/01/01', dateFormat)} format={dateFormat} size="small" style={{width: '100%'}} />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
      >
      <Select initialvalues="Select" style={{ width: '100%' }} onChange={handleChange} align="left">
      <Option value="m">Male</Option>
      <Option value="f">Female</Option>
      <Option value="o">Other</Option>
      </Select>
      </Form.Item>

      <Form.Item
        name="location"
        label="Location"
      >
          <Input />
      </Form.Item>

      <Form.Item
        name="interests"
        label="Interests"
        rules={[
          { type: 'array'},
        ]}
      > <Input />
          </Form.Item>
      <div className="Info">Education</div>
      <Form.Item
        name="university"
        label={
          <span>
            University&nbsp;
          </span>
        }
        rules={[{ required: true, message: 'Please input your University Name!', whitespace: true }]}
      >
               <Input/>
      </Form.Item>
      <Form.Item
        name="branch"
        label={
          <span>
            Branch&nbsp;
          </span>
        }
        rules={[{ required: true, message: 'Please input the Branch!', whitespace: true }]}
      >
        <Input/>
      </Form.Item>
      

        <Form.Item
        name="degree"
        label="Degree "
        rules={[{ required: true, message: 'Please input the Degree!', whitespace: true }]}
        >
        <Input/>
        </Form.Item>

        <Form.Item
        name="semester"
        label="Semester "
        rules={[{ required: true, message: 'Please input the Semester!', whitespace: true }]}
        >
        <Input type="number"/>
        </Form.Item>

    </Form>

    </Content>
    <Sider width="650">
        <Avatar size={160} icon={<UserOutlined />} />
        <div className="vertical-container">

        </div>
        <div className="links-sec">
  Links
</div>
        <div>
          <Space size="small">
<Form size="medium"
{...formItemLayout1}
>
<Form.Item
        name="link1"
      >
        <Input placeholder="Enter url"/>
      </Form.Item>
      <Form.Item 
        name="link2"
      >
        <Input placeholder="Enter url"/>
      </Form.Item>
</Form>
</Space>
</div>
<Space size="small">
        <Button type="primary" htmlType="submit" shape="round" size="small">
        &nbsp;Save&nbsp;
        </Button>
        <Button type="primary" htmlType="cancel" shape="round" size="small">
          Cancel
        </Button>
        </Space>
    </Sider>
    </Layout>
    </div>
        </>
  )
};

