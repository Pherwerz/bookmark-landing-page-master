import React from 'react';
import classes from './List.module.scss';

const list = ['Features', 'Pricing', 'Contact'];

const List = props => (
  <ul className={classes.List}>
    {list.map(cur => (
      <li className={classes.ListItem} key={cur}>
        <a href={cur} className={classes.ListLink}>
          {cur}
        </a>
      </li>
    ))}
  </ul>
);

export default List;
