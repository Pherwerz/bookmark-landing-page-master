import React from 'react';
import classes from './Heading.module.scss';

const Heading = props => (
  <div className={classes.Heading}>
    <h2>{props.h}</h2>

    <p>{props.p}</p>
  </div>
);

export default Heading;
