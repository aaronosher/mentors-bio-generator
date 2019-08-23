import React from 'react';
import { Layout, Typography, Menu, Row, Col } from 'antd';
import { fixedHeader, title as titleStyle } from './Header.module.less';

const defaultTitle = `Mentor Bios`;

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <Layout.Header className={fixedHeader}>
    <Row>
      <Col span={2}>
        <Typography.Title level={4} className={titleStyle}>
          {title || defaultTitle}
        </Typography.Title>
      </Col>
      <Col span={10}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}></Menu>
      </Col>
    </Row>
  </Layout.Header>
);

export default Header;
