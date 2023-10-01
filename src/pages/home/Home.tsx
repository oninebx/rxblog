import React from 'react';
import Header from '../../components/header/Header';
import BlogList from '../../components/blog-list/BlogList';
import { BlogBriefProps } from '../../types';
import { useConfig } from '../../providers/Config';
import { useExternalData } from '../../providers/ExternalData';
import { useBlogs } from '../../hooks/useBlogs';

type Props = {}

const Home = (props: Props) => {
  const {title, avatarUrl, name, repo} = useConfig();
  const { mottoes } = useExternalData();
  const blogs = useBlogs(name, repo);
  return (
    <div>
      <Header title={title} avatarUrl={avatarUrl} mottoes={mottoes}/>
      <BlogList data={blogs}/>
    </div>
  )
}

export default Home;