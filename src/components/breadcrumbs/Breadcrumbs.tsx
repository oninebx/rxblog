import React from 'react';
import useBreadcrumbs, { BreadcrumbMatch, BreadcrumbsRoute } from 'use-react-router-breadcrumbs';
import styles from './Breadcrumbs.module.scss';
import { NavLink } from 'react-router-dom';

type Props = {}

const routes = [
  { path: "/rxblog/blog/:postId", breadcrumb: ({match}) => ` Blog#${match.params.postId}`},
  { path: "/rxblog", breadcrumb: "Home" }
] as BreadcrumbsRoute[];

const Breadcrumbs = (props: Props) => {
  const breadcrumbs = useBreadcrumbs(routes, {
    excludePaths: ["/", "/rxblog/blog"],
  });
  return (
    <div className={styles.container}>
      {breadcrumbs.map(({match, breadcrumb}, index) => {
        const isLast = index === breadcrumbs.length - 1;
        return isLast ? breadcrumb : (
          <NavLink to={match.pathname}>
            {breadcrumb} &gt; 
          </NavLink>
        );
})}
    </div>
  )
}

export default Breadcrumbs;