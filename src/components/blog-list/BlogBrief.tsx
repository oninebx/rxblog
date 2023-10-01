import React from 'react';
import { BlogBriefProps } from '../../types';
import { Link } from 'react-router-dom';

const BlogBrief = ({ number, title }: BlogBriefProps) => {
  return (
    <Link to={`/rxblog/blog/${number}`}>
      {title}
    </Link>
  )
}

export default BlogBrief