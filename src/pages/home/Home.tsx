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
import CategoryList from '../../components/category-list/CategoryList';

const Home = ({ touch } : Touchable) => {
  const {title, avatarUrl, name, repo, categories} = useConfig();
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
        <BlogList labelText={'Recent Articles'} touch={touch} data={blogs}/>
        <CategoryList data={categories}/>
      </div>
      
    </div>
  )
}

export default Home;