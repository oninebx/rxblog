import React from 'react';
import styles from './CategoryList.module.scss';
import { Link } from 'react-router-dom';

type Props = {
  data: string[]
}

const CategoryList = ({data}: Props) => {
  return (
    <div className={styles.container}>
      <label>Categories</label>
      <ul>
        {
          data && data.map(category => (
          <li className={styles.item}>
            <Link className={styles.link} to={`/rxblog/${category}`}>
              {category}
            </Link> 
          </li>))
        }
      </ul>
    </div>
    
  )
}

export default CategoryList;