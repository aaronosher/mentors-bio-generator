import React from 'react';
import { Layout } from 'antd';

interface FooterProps {
  version?: string;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Layout.Footer style={{ textAlign: 'center' }}>
      Copyright &copy;2019 Created by{' '}
      <a href="https://osher.dev" rel="noreferrer noopener" target="_blank">
        Aaron Osher
      </a>
    </Layout.Footer>
  );
};

export default Footer;
