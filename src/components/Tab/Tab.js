import React from 'react';
import classes from './Tab.module.scss';
import Button from '../Button/Button';
import Container from '../../containers/Container/Container';

const Tab = props => (
  <div className={classes.Tab}>
    <div className={classes.Tabbg} />
    <Container>
      <div className={classes.TabItem}>
        <div className={classes.Tableft}>
          <img src={props.srcs} alt="illustartion" />
        </div>

        <div className={classes.Tabright}>
          <div className={classes.TabrightCon}>
            <h2>{props.h}</h2>
            <p>{props.p}</p>
            <Button name="More info" type="blue" />
          </div>
        </div>
      </div>
    </Container>
  </div>
);

export default Tab;
