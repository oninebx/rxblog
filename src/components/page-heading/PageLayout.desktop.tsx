import React, { ComponentType, FunctionComponent, PropsWithChildren } from 'react';
import styles from './PageLayout.desktop.module.scss';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import { TitlePage } from '../../types';
import { type } from 'os';

type Props = {
  title: string;
}

const PageLayout = ({title, children}: PropsWithChildren<Props>) => {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.inner}>
          <h3 className={styles.title}>{title}</h3>
          <Breadcrumbs />
        </div>
      </div>
      {children}
      
    </div>
  )
}

const withPageLayout = <P extends TitlePage> (Component: FunctionComponent<Omit<P, 'title'>>):FunctionComponent<P> => ({title, ...rest}: P) => (
  <PageLayout title={title}><Component {...rest}/></PageLayout>
);

export default withPageLayout;