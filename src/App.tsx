import React from 'react';
import logo from './logo.svg';
import Home from './pages/home/Home';
import { ConfigProvider } from './providers/Config';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogPost from './pages/blog-post/BlogPost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/rxblog' element={<Home />} />
        <Route path='/rxblog/blog/:postId' element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
