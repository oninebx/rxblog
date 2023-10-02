import React from 'react';
import logo from './logo.svg';
import Home from './pages/home/Home';
import { BrowserRouter, Params, Routes } from 'react-router-dom';
import BlogPost from './pages/blog-post/BlogPost';
import Breadcrumbs from './components/breadcrumbs/Breadcrumbs';
import { BreadcrumbsRoute, Route } from 'use-react-router-breadcrumbs';

const REGEX_MOBILE = /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;

const DynamicPostBreadcrumb = (match: { params: { postId: any; }; }) => (
  <span>{`blog/${match.params.postId}`}</span>
);

function App() {
  const touch = Boolean(navigator.userAgent.match(REGEX_MOBILE));

  return (
    <BrowserRouter>
    <Breadcrumbs />
      <Routes>
        <Route path='/rxblog' element={<Home touch={touch}/>} />
        <Route path='/rxblog/blog/:postId' element={<BlogPost touch={touch}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
