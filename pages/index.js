import React, { Component } from 'react';
import Link from "next/link";
import { fetch } from "cross-fetch";
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

class Home extends Component {
  static async getInitialProps() {
    const meetups = await fetch(
      "https://api.meetup.com/bendjs/events?photo-host=public&page=20&sig_id=13359878&sig=d052a7d6f8ec6f8e374c2a2665e4aa724208ca5d"
    )
      .then(res => res.json())
      .then(data => Object.values(data));

    return { meetups };
  }

  render() {
    const { meetups } = this.props;
    return (
      <Layout className="layout">
        <Header>
          {/* <div className="logo" /> */}
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">
              <Link href="/about">
                <a role="link">About</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link href="/people">
                <a role="link">Go to people</a>
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <h1>Hello BendJS 👋</h1>
            Next Meetup: {meetups[0].name}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          BendJS ©2019 Created by some badass BendJS devs (yup...its like that)
        </Footer>
      </Layout>
    );
  }
}

export default Home;
