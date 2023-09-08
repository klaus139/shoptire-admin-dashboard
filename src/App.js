import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
import MainLayout from './components/MainLayout';
import Enquiries from './pages/Enquiries';
import BlogList from './pages/BlogList';
import BlogCatlist from './pages/BlogCatlist';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import ColorList from './pages/ColorList';
import CategoryList from './CategoryList';
import BrandList from './pages/BrandList';
import ProductList from './pages/ProductList';
import AddBlog from './pages/AddBlog';
import AddBlogCat from './pages/AddBlogCat';
import AddColor from './pages/AddColor';
import AddCat from './pages/AddCat';
import AddBrand from './pages/AddBrand';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/admin' element={<MainLayout />} >
          <Route index element={<Dashboard />} />
          <Route path='enquiries' element={<Enquiries />} />
          <Route path='blog-list' element={<BlogList />} />
          <Route path='blog' element={<AddBlog />} />
          <Route path='blog-category-list' element={<BlogCatlist />} />
          <Route path='blog-category' element={<AddBlogCat />} />
          <Route path='category' element={<AddCat />} />

          <Route path='orders' element={<Orders />} />
          <Route path='customers' element={<Customers />} />
          <Route path='list-color' element={<ColorList />} />
          <Route path='color' element={<AddColor />} />
          <Route path='list-category' element={<CategoryList />} />
          <Route path='list-brand' element={<BrandList />} />
          <Route path='brand' element={<AddBrand />} />
          <Route path='list-product' element={<ProductList />}/>
          <Route path='product' element={<AddProduct />}/>
        </Route>
      </Routes>
    </Router>
  )
    
  
}

export default App;
