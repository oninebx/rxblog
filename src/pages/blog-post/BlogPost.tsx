import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './BlogPost.module.scss';
import usePost from '../../hooks/usePost';
import cn from 'classnames';
import { Touchable } from '../../types';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';

const BlogPost = ({touch}: Touchable) => {
  const {postId} = useParams();
  const post = usePost(postId);
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.inner}>
          <h3 className={styles.title}>{post?.title}</h3>
          <Breadcrumbs />
        </div>
        
      </div>
      <div className={cn(styles.article,'markdown-body')} dangerouslySetInnerHTML={{__html: post?.body_html?? ''}}></div>
    </div>
  )
}

export default BlogPost;