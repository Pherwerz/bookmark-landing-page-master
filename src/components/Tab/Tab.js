import React from 'react';
import classes from './Tab.module.scss';
import Button from '../Button/Button';

const Tab = props => (
  <div className={classes.Tab}>
    <div className={classes.Tableft}>
      <div className={classes.Tabbg} />
      <div className={classes.TableftCon}>
        <img src={props.srcs} alt="illustartion" />
      </div>
    </div>

    <div className={classes.Tabright}>
      <div className={classes.TabrightCon}>
        <h2>{props.h}</h2>
        <p>{props.p}</p>
        <Button name="More info" type="blue" />
      </div>
    </div>
  </div>
);

export default Tab;
