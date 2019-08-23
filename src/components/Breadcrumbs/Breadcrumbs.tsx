import React from 'react';
import { Breadcrumb } from 'antd';

interface BreadcrumbsProps {
  crumbs: {
    title: string;
    href: string;
  }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = props => {
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {props.crumbs.map((crumb, i) => (
        <Breadcrumb.Item key={i}>
          <a href={crumb.href}>{crumb.title}</a>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
