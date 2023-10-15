import React from 'react';
import logo from './logo.svg';
import Home from './pages/home/Home';
import { HashRouter, Routes, BrowserRouter } from 'react-router-dom';
import Post from './pages/post/Post';
import Breadcrumbs from './components/breadcrumbs/Breadcrumbs';
import { Route } from 'use-react-router-breadcrumbs';
import Category from './pages/category/Category';
import { useConfig } from './providers/Environment';

const REGEX_MOBILE = /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;

const DynamicPostBreadcrumb = (match: { params: { postId: any; }; }) => (
  <span>{`blog/${match.params.postId}`}</span>
);

function App() {
  const touch = Boolean(navigator.userAgent.match(REGEX_MOBILE));
  const {categories} = useConfig();
  return (
    // <BrowserRouter basename='/rxblog'>
      <Routes>
        <Route path='/' element={<Home touch={touch}/>} />
        <Route path='/:category/:postId' element={<Post touch={touch}/>} />
        {
          categories && categories.map((catetory, index) => 
          <Route 
            key={`cateotry-route-${index}`} path={`/${catetory}`} 
            element={<Category touch={touch} />}/>)
        }
      </Routes>
    // </BrowserRouter>
  );
}

export default App;
