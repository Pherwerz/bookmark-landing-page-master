import React from 'react';
import Icon from '../../images/logo-bookmark.svg';
import Icon2 from '../../images/logo-bookmark-white.svg';
import classes from './Logo.module.scss';

const Logo = props => {
  let type;

  if (props.type === 'dark') {
    type = Icon;
  } else if (props.type === 'light') {
    type = Icon2;
  }

  return (
    <div className={classes.Logo}>
      <img
        className={classes.Logoicon}
        src={type}
        alt="Logo"
      />
    </div>
  );
};

export default Logo;
