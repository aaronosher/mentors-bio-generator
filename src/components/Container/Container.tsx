import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import Header from '../Header';
import Footer from '../Footer';
import Breadcrumbs from '../Breadcrumbs';
import { layout } from './Container.module.less';

const { Content } = Layout;

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = props => (
  <Layout className={layout}>
    <Header />
    <Content style={{ margin: '0 16px' }}>
      <Breadcrumbs crumbs={[]} />
      <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{props.children}</div>
    </Content>
    <Footer />
  </Layout>
);

export default Container;
