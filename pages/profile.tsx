import React from 'react';
import Head from 'next/head';
import '../css/Profile.module.css';
import { Card, Typography, Avatar, Row, Col, List } from 'antd';
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
} from '@ant-design/icons';

const { Meta } = Card;
const { Title, Paragraph } = Typography;
const profile = () => {
	const data = [
		{
			icon: 'fa fa-graduation-cap',
			title: 'PES University',
		},
		{
			icon: 'fa fa-map-marker',
			title: 'Bangalore, India',
		},
		{
			icon: 'fa fa-envelope',
			title: 'abc@gmail.com',
		},
	];
	const weblinks = ['xyz.com,abc.com', 'google.com'];
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
				<title>User Profile</title>
				<link
					rel='stylesheet'
					href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
					integrity='sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN'
					crossOrigin='anonymous'
				/>
			</Head>
			<Row>
				<Col style={{ fontWeight: 'normal' }} span={8}>
					<Card
						/*hoverable={true}*/
						style={{ width: '100%', height: '100%' }}
						actions={[
							<SettingOutlined key='setting' />,
							<EditOutlined key='edit' />,
							<EllipsisOutlined key='ellipsis' />,
						]}
					>
						<div className='profile-pic'>
							<Avatar
								size={150}
								alt={'profile pic'}
								shape={'circle'}
								src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
							/>
							<Title level={4}>John Doe</Title>
						</div>

						<div className='card-description'>
							<Typography>
								<Paragraph>
									Front-end developer, Musician, Golfer, Cook.
								</Paragraph>
							</Typography>
							<div className='contact'>
								<List
									itemLayout='horizontal'
									dataSource={data}
									renderItem={(item) => (
										<List.Item>
											<i className={item.icon}></i>
											{'  '}
											{item.title}
										</List.Item>
									)}
								></List>
								<Title level={4}>Links</Title>
								<List
									itemLayout='horizontal'
									dataSource={weblinks}
									renderItem={(item) => (
										<List.Item>
											<a href={item}>{item}</a>
										</List.Item>
									)}
								></List>
							</div>
						</div>
					</Card>
				</Col>
				<Col
					style={{ background: 'white', fontWeight: 'normal' }}
					span={16}
				>
					col-16
				</Col>
			</Row>
		</>
	);
};

export default profile;
