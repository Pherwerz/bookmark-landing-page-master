import React from 'react';
import classes from './Button.module.scss';

const Button = props => {
  let style;

  if (props.type === 'orange') {
    style = classes.Buttonorange;
  } else if (props.type === 'blue') {
    style = classes.Buttonblue;
  } else if (props.type === 'white') {
    style = classes.Buttonwhite;
  }

  return (
    <button className={[classes.Button, style].join(' ')}>
      {props.name}
    </button>
  );
};

export default Button;
