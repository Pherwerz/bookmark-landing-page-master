import React from 'react';
import classes from './List.module.scss';

const list = ['Features', 'Pricing', 'Contact'];

const List = props => {
  let style;

  if (props.type === 'dark') {
    style = classes.ListLinkdark;
  } else if (props.type === 'light') {
    style = classes.ListLinklight;
  }

  return (
    <ul className={classes.List}>
      {list.map(cur => (
        <li className={classes.ListItem} key={cur}>
          <a
            href={cur}
            className={[classes.ListLink, style].join(' ')}
          >
            {cur}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default List;
