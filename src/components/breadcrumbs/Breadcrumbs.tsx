import React from 'react';
import useBreadcrumbs, { BreadcrumbMatch, BreadcrumbsRoute } from 'use-react-router-breadcrumbs';
import styles from './Breadcrumbs.module.scss';
import { NavLink } from 'react-router-dom';
import { indexBase, useBlogBase } from '../../providers/BlogBase';

type Props = {}

const routes = [
  { path: "/rxblog/blogs/:postId", breadcrumb: ({match}) => indexBase[`${match.params.postId}`]},
  { path: "/rxblog", breadcrumb: "Home" }
] as BreadcrumbsRoute[];

const Breadcrumbs = (props: Props) => {

  const breadcrumbs = useBreadcrumbs(routes, {
    excludePaths: ["/"],
  });
  return (
    <div className={styles.container}>
      {breadcrumbs.map(({match, breadcrumb}, index) => {
        const isLast = index === breadcrumbs.length - 1;
        return isLast ? breadcrumb : (
          <NavLink className={styles.link} to={match.pathname}>
            {breadcrumb} &gt; &#20;
          </NavLink>
        );
})}
    </div>
  )
}

export default Breadcrumbs;