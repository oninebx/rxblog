import React from 'react';
import styles from './Header.module.scss';
import MottoFrame from '../motto-frame/Motto';
import { withStyles } from '../../hocs/withStyles';
import SearchBox from '../search-box/SearchBox';

type Props = {
  title: string;
  avatarUrl: string;
  mottoes: string[];
}

const Header = ({ title, avatarUrl, mottoes }: Props) => {
  const MottoDisplay = withStyles({flexGrow: 1})(MottoFrame);
  const SearchBar = withStyles({marginRight: '20px'})(SearchBox);
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={avatarUrl}/>
      <span className={styles.title}>{title}</span>
      <MottoDisplay data={mottoes} />
      <SearchBar />
    </div>
  )
}

export default Header;