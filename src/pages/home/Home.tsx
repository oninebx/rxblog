import React from 'react';
import Header from '../../components/header';
import BlogList from '../../components/blog-list/BlogList';
import { Touchable } from '../../types';
import { useConfig, useEnvironment } from '../../providers/Environment';
import { useBlogs } from '../../hooks/useBlogs';
import Category from '../../components/category/Category';
import Heading from '../../components/heading/Heading';
import styles from './Home.module.scss';
import cn from 'classnames';
import { useBlogBase } from '../../providers/BlogBase';

const Home = ({ touch } : Touchable) => {
  const {title, avatarUrl, name, repo} = useConfig();
  const { mottoes } = useEnvironment();
  const blogs = useBlogs(name, repo);
  const {indexBase} = useBlogBase();
  blogs?.forEach(b => {
    indexBase[b.number] = b.title;
  });
  return (
    <div className={styles.container}>
      <Header touch={touch} title={title} avatarUrl={avatarUrl} mottoes={mottoes}/>
      <div className={cn(styles.articleContainer, {[styles.desktop]: !touch})}>
        <Heading text='Recent Articles' />
        <br/>
        <BlogList touch={touch} data={blogs}/>
      </div>
      
    </div>
  )
}

export default Home;