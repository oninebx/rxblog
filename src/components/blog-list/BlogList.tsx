import React from 'react';
import BlogBrief from './BlogBrief';
import { Blog, Touchable } from '../../types';
import styles from './BlogList.module.scss';

type Props = {
  data?: Blog[];
} & Touchable

const BlogList = ({ data, touch, ...rest }: Props) => {
  return (
    <div className={styles.container} {...rest}>
      { 
        data?.map(b => <BlogBrief key={b.id} number={b.number} 
          title={`${touch ? '' : `${new Date(b.created_at).toLocaleDateString()} > `}${b.title}`}/>)
      }
    </div>
  )
}

export default BlogList;