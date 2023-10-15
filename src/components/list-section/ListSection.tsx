import React, { PropsWithChildren } from 'react';
import Heading from '../heading/Heading';
import styles from './ListSection.module.scss';

type Props = {
  title: string;
}

const ListSection = (
  {
    title,
    children,
    ...rest
  }: PropsWithChildren<Props>) => {
  return (
    <div className={styles.container} {...rest}>
        <Heading text={title} />
        <br/>
        {children}
      </div>
  )
}

export default ListSection;