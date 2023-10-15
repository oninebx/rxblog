import React from 'react';
import BlogItem from './BlogItem';
import { Blog, BlogItemProps, Touchable } from '../../types';
import ListSection from '../list-section/ListSection';

type Props = {
  labelText?: string;
  data?: BlogItemProps[];
} & Touchable

const BlogList = ({ labelText, data, touch, ...rest }: Props) => {
  return (
    <ListSection title={labelText??''} {...rest}>
      {
        data?.map((b, index) => <BlogItem key={`${labelText}-${index}`} {...b}/>)
      }
    </ListSection>
  )
}

export default BlogList;