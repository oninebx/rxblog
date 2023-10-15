import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Post.module.scss';
import usePost from '../../hooks/usePost';
import cn from 'classnames';
import { TitlePage, Touchable } from '../../types';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import withPageLayout from '../../components/page-heading/PageLayout.desktop';

type Props = {
  htmlBody?: string;
} & Touchable
const Post = ({touch, htmlBody}: Props) => (
    <div className={cn(styles.article,'markdown-body')} dangerouslySetInnerHTML={{__html: htmlBody?? ''}}></div>
  );

const PostPage = withPageLayout<Props & TitlePage>(Post);

export default ({touch}: Touchable) => {
  const {postId} = useParams();
  const post = usePost(postId);
  return (<PostPage title={post?.title??''} touch={touch} htmlBody={post?.body_html}/>)
  
};