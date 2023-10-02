import React from 'react';
import styles from './Header.mobile.module.scss';
import { HeaderProps } from '.';
import CircleImage from '../CircleImage';
import { withStyles } from '../../hocs/withStyles';
import MottoFrame from '../motto-frame/Motto';
import SearchBox from '../search-box/SearchBox';

type Props = {}

const Header = ({avatarUrl, title, mottoes}: HeaderProps) => {
  
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <MottoFrame  data={mottoes}/>
      </div>
      <div className={styles.avatarContainer} >
        <CircleImage diameter='10vh' url={avatarUrl}/>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.bottomBar} />
    </div>
  )
}

export default Header;