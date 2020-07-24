import React from 'react';
import classes from './Icons.module.scss';
import Icon from '../../images/icons.svg';

const icons = ['#icon-facebook2', '#icon-twitter'];

const Icons = () => (
  <div className={classes.Icons}>
    {icons.map((cur, i) => (
      <svg key={i}>
        <use xlinkHref={Icon + cur} />
      </svg>
    ))}
  </div>
);

export default Icons;
