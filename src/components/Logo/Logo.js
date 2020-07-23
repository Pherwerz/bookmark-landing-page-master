import React from 'react';
import Icon from '../../images/logo-bookmark.svg';
import classes from './Logo.module.scss';

const Logo = props => {
  let type;

  if (props.type === 'dark') {
    type = 'svg';
  } else if (props.type === 'light') {
    type = 'svg2';
  }

  return (
    <div className={classes.Logo}>
      <svg className={classes.Logoicon}>
        <use xlinkHref={Icon + `#${type}`}></use>
      </svg>
    </div>
  );
};

export default Logo;
