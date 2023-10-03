import React, { useState } from 'react';
import styles from './Motto.module.scss';
import useInterval from '../../hooks/useInterval';

type Props = {
  data: string[];
}

const MottoFrame = ({
  data,
  ...rest
}: Props) => {
  const [ordinal, setOrdinal] = useState(0);
  useInterval(() => {
    data && setOrdinal(Math.round(Math.random() * (data.length - 1)));
  }, 5000);
 
  
  return (
    <div className={styles.container} {...rest}>
      {
        data && data[ordinal]
      }
    </div>
  )
}

export default MottoFrame;