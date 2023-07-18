import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
 
} from '@ant-design/icons';
import {AiOutlineDashboard, AiOutlineShoppingCart, AiOutlineUser, AiOutlineBgColors} from 'react-icons/ai';
import {SiBrandfolder} from 'react-icons/si'
import {BiCategoryAlt} from 'react-icons/bi';
import {ImBlog} from 'react-icons/im'
import {FaClipboardList, FaBloggerB} from 'react-icons/fa';
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
        <div className="logo">
          <h2 className='text-white fs-5 text-center py-3 mb-0'>
            <span className='sm-logo'>ST</span>
            <span className='lg-logo'>ShopTire</span>
          </h2>
        </div>
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
              icon: <AiOutlineUser className='fs-4'/>,
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
                  icon: <BiCategoryAlt className='fs-4' />,
                  label: "Category"
                },
                {
                  key: "list-category",
                  icon: <BiCategoryAlt className='fs-4' />,
                  label: "Category List"
                },
                {
                  key: "color",
                  icon: <AiOutlineBgColors className='fs-4' />,
                  label: "Color"
                },
                {
                  key: "list-color",
                  icon: <AiOutlineBgColors className='fs-4' />,
                  label: "Color List"
                }
              ]
            },
            {
              key: 'orders',
              icon: <FaClipboardList className='fs-4'/>,
              label: 'Orders',
            },
            {
              key: 'blog',
              icon: <FaBloggerB className='fs-4'/>,
              label: 'Blogs',
              children : [
                {
                  key: 'blog',
                  icon: <ImBlog className='fs-4'/>,
                  label: 'Add Blog',
                },
                {
                  key: 'blog-list',
                  icon: <FaBloggerB className='fs-4'/>,
                  label: 'Blog List',
                },
                {
                  key: 'blog-category',
                  icon: <FaBloggerB className='fs-4'/>,
                  label: 'Add Blog Category',
                },
                {
                  key: 'blog-category-list',
                  icon: <FaBloggerB className='fs-4'/>,
                  label: 'Blog Category List',
                },
               
               
              ]
            },
            {
              key: 'enquiries',
              icon: <FaClipboardList className='fs-4'/>,
              label: 'Enquiries',
            },
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