import React from 'react';
import { BlogBriefProps } from '../../types';
import { Link } from 'react-router-dom';
import styles from './BlogBrief.module.scss';

const BlogBrief = ({ number, title }: BlogBriefProps) =>  (
    <Link className={styles.link} to={`/rxblog/blogs/${number}`}>
        {title}
    </Link> 
    
  )

export default BlogBrief