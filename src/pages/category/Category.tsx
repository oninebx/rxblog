import React from 'react'
import withPageLayout from '../../components/page-layout/PageLayout.desktop'
import { BlogItemProps, TitlePage, Touchable } from '../../types'
import { useLocation, useParams } from 'react-router-dom'
import { useConfig } from '../../providers/Environment'
import { useBlogs } from '../../hooks/useBlogs'
import NotFound from '../not-found/NotFound'
import BlogList from '../../components/blog-list/BlogList';
import styles from './Category.module.scss';
import { lables2Category } from '../../common/config-enhancer'

type Props = {
  blogs?: BlogItemProps[]
} & Touchable



const Category = ({touch, blogs}: Props) => {
  const {archives} = useConfig();
  
  return (
    <div className={styles.container}>
      {
        archives.map(
          (archive, index) => (
            <BlogList key={`${archive}-${index}`} touch={touch} labelText={archive} data={blogs} />
          )
        )
      }
    </div>
  )
}

const CategoryPage = withPageLayout<Props & TitlePage>(Category);

export default (props: Props) => {
  const {pathname} = useLocation();
  const title = pathname.split('/').pop()?.toUpperCase();
  if(!title) {
    return <NotFound />
  }
  const { name, repo, categories } = useConfig();
  const data = useBlogs(name, repo, {labels: [title.toLowerCase()]})
  const blogsData = data?.map(d => (
    {
      title: `${d.title}(${new Date(d.created_at).toISOString().slice(5, 19).replace('T',' ')})`, 
      number: d.number,
      category: lables2Category(d.labels, categories),
    } as BlogItemProps));
  return (<CategoryPage title={title??''} blogs={blogsData} {...props}/>)
  
};