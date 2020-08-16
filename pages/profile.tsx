import React from 'react';
import Head from 'next/head';
import '../css/Profile.module.css';
import { Empty, Typography, Avatar, Space, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Text, Link } = Typography; 

export default () => {
  return (
    <>
      <Head>
				<meta charSet='utf-8' />
				<meta	name='viewport'	content='initial-scale=1.0, width=device-width' />
				<title>User Profile</title>
				<link
					rel='stylesheet'
					href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
					integrity='sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN'
					crossOrigin='anonymous'
				/>
      </Head>
      <div className="profile-container">
        <div className="profile-grid">
          <div className="profile-details">
            <div className="profile-details-container">
              <div className="center-class"><Avatar size={200} icon={<UserOutlined />} /></div>
              <div className="center-class username-div"><Title level={2}>John Doe</Title></div>
              <div className="interests-div">
                <Text strong style={{ fontSize: '14pt' }}>Frontend Developer, Music Producer, Public Speaker, Game Designer</Text>
              </div>
              <div className="contact-div">
                <div className="contact-icon">
                  <img src="/EDUCATION.svg" alt="Education"/>
                </div>
                <div className="contact-data">
                  <Text>PES University, Ring Road Campus</Text>
                </div>
                <div className="contact-icon">
                  <img src="/LOCATION.svg" alt="Location"/>
                </div>
                <div className="contact-data">
                  <Text>Bangalore, India</Text>
                </div>
                <div className="contact-icon">
                  <img src="/MAIL.svg" alt="Mail"/>
                </div>
                <div className="contact-data">
                  <Text>example@mail.com</Text>
                </div>
              </div>
              <div className="links-div">
                <Space direction="vertical">
                  <Title level={4}>Links</Title>
                  <Link href="https://www.hackerearth.com/challenges/" target="_blank">
                    Hackerearth
                  </Link>
                  <Link href="https://www.codechef.com/" target="_blank">
                    Codechef
                  </Link>
                </Space>
              </div>
              <div className="edit-button center-class">
                <Button type="primary" size='large' block>Edit Profile</Button>
              </div>
            </div>
          </div>
          <div className="profile-content">
            <div className="profile-content-container">
              <Title level={2}>User Ranking History</Title>
              <div className="user-ranking-box center-class"><Empty /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};