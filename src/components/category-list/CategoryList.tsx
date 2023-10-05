import React from 'react';
import styles from './CategoryList.module.scss';

type Props = {
  data: string[]
}

const CategoryList = ({data}: Props) => {
  return (
    <div className={styles.container}>
      <label>Categories</label>
      <ul>
        {
          data && data.map(c => <li>{c}</li>)
        }
      </ul>
    </div>
    
  )
}

export default CategoryList;