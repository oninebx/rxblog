import React from 'react';
import styles from './Header.module.scss';
import MottoFrame from '../motto-frame/Motto';
import { withStyles } from '../../hocs/withStyles';
import SearchBox from '../search-box/SearchBox';
import { HeaderProps } from '.';
import CircleImage from '../CircleImage';



const Header = ({ title, avatarUrl, mottoes }: HeaderProps) => {
  const MottoDisplay = withStyles({flexGrow: 1})(MottoFrame);
  const SearchBar = withStyles({marginRight: '20px'})(SearchBox);
  return (
    <div className={styles.container}>
      <CircleImage diameter='10vh' url={avatarUrl} injectClass={styles.avatar} />
      <span className={styles.title}>{title}</span>
      <MottoDisplay data={mottoes} />
      <SearchBar />
    </div>
  )
}

export default Header;