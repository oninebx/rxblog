import React from 'react';
import { BlogItemProps } from '../../types';
import { Link } from 'react-router-dom';
import styles from './BlogItem.module.scss';

const BlogItem = ({ number, title, category }: BlogItemProps) =>  (
    <Link className={styles.link} to={`/${category}/${number}`}>
        {title}
    </Link> 
    
  )

export default BlogItem;