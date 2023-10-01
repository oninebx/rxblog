import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './BlogPost.module.scss';
import usePost from '../../hooks/usePost';
import cn from 'classnames';

type Props = {}

const BlogPost = (props: Props) => {
  const {postId} = useParams();
  const post = usePost(postId);
  
  return (
    <div className={styles.container}>
      <span className={styles.title}>{post?.title}</span>
      <div className={cn(styles.article,'markdown-body')} dangerouslySetInnerHTML={{__html: post?.body_html?? ''}}></div>
      
    </div>
  )
}

export default BlogPost;