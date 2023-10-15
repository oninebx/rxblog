import React from 'react';
import Header from '../../components/header';
import BlogList from '../../components/blog-list/BlogList';
import { BlogItemProps, Touchable } from '../../types';
import { useConfig, useEnvironment } from '../../providers/Environment';
import { useBlogs } from '../../hooks/useBlogs';
import Heading from '../../components/heading/Heading';
import styles from './Home.module.scss';
import cn from 'classnames';
import { useBlogBase } from '../../providers/BlogBase';
import CategoryList from '../../components/category-list/CategoryList';
import { lables2Category } from '../../common/config-enhancer';
import { withStyles } from '../../hocs/withStyles';

const Home = ({ touch } : Touchable) => {
  const {title, avatarUrl, name, repo, categories} = useConfig();
  const { mottoes } = useEnvironment();
  const blogs = useBlogs(name, repo);

  const {indexBase} = useBlogBase();
  blogs?.forEach(b => {
    indexBase[b.number] = b.title;
  });
  const blogItems = blogs?.map(b => (
    {
      number: b.number,
      category: lables2Category(b.labels, categories),
      title: `${touch ? '' : `${new Date(b.created_at).toLocaleDateString()} > `}${b.title}`
    } as BlogItemProps));
    const BlogSection = withStyles({
      flexGrow: '1',
      marginRight: '5vw'
    })(BlogList);
  return (
    <div className={styles.container}>
      <Header touch={touch} title={title} avatarUrl={avatarUrl} mottoes={mottoes}/>
      <div className={cn(styles.articleContainer, {[styles.desktop]: !touch})}>
        <BlogSection labelText={'Recent Articles'} touch={touch} data={blogItems}/>
        <CategoryList data={categories}/>
      </div>
      
    </div>
  )
}

export default Home;