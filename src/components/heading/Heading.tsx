import React from 'react';
import styles from './Heading.module.scss';

type Props = {
  text: string;
}

const Heading = ({text}: Props) => {
  return (
    <div className={styles.container}>{text}</div>
  )
}

export default Heading;