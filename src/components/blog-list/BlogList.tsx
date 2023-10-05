import React from 'react';
import BlogBrief from './BlogBrief';
import { Blog, Touchable } from '../../types';
import styles from './BlogList.module.scss';
import Heading from '../heading/Heading';

type Props = {
  labelText?: string;
  data?: Blog[];
} & Touchable

const BlogList = ({ labelText, data, touch, ...rest }: Props) => {
  return (
      <div className={styles.container} {...rest}>
        {labelText && <Heading text={labelText} />}
        <br/>
        { 
          data?.map(b => <BlogBrief key={b.id} number={b.number} 
            title={`${touch ? '' : `${new Date(b.created_at).toLocaleDateString()} > `}${b.title}`}/>)
        }
      </div>
    
  )
}

export default BlogList;