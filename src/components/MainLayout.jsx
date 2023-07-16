import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
 
} from '@ant-design/icons';
import {AiOutlineDashboard, AiOutlineShoppingCart, AiOutlineUser} from 'react-icons/ai';
import {SiBrandfolder} from 'react-icons/si'
import { Layout, Menu, Button, theme } from 'antd';
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate()
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({key})=>{
            if (key === 'signout') {

            } else {
              navigate(key)
            }

          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard className='fs-4' />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <AiOutlineDashboard className='fs-4'/>,
              label: 'Customers',
            },
            {
              key: 'catalog',
              icon: <AiOutlineShoppingCart className='fs-4'/>,
              label: 'Catalog',
              children: [
                {
                  key: 'product',
                  icon: <AiOutlineShoppingCart className='fs-4'/>,
                  label: 'Add Product'
                },
                {
                  key: 'product-list',
                  icon: <AiOutlineShoppingCart className='fs-4'/>,
                  label: 'Product List'
                },
                {
                  key: "category",
                  icon: <SiBrandfolder className='fs-4' />,
                  label: "Brand"
                },
                {
                  key: "list-category",
                  icon: <SiBrandfolder className='fs-4' />,
                  label: "Brand List"
                },
                {
                  key: "category",
                  icon: <SiBrandfolder className='fs-4' />,
                  label: "Category"
                },
                {
                  key: "list-category",
                  icon: <SiBrandfolder className='fs-4' />,
                  label: "Category List"
                }
              ]
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;