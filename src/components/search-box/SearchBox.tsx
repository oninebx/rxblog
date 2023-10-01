import React from 'react';
import {ReactComponent as Icon} from '../../svgs/search.svg';
import styles from './SearchBox.module.scss';

type Props = {}

const SearchBox = ({...rest}: Props) => {
  return (
    <div className={styles.container} {...rest}>
      <input type="text" className={styles.input} placeholder="press enter..." />
      <Icon className={styles.icon}/>
    </div>
  )
}

export default SearchBox;