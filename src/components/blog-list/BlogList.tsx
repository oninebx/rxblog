import React from 'react';
import BlogBrief from './BlogBrief';
import { Blog } from '../../types';

type Props = {
  data?: Blog[];
}

const BlogList = ({ data }: Props) => {
  return (
    <div>
      { 
        data?.map(b => <BlogBrief key={b.id} number={b.number} title={b.title}/>)
      }
    </div>
  )
}

export default BlogList;