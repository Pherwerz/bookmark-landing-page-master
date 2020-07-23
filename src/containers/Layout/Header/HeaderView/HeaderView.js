import React from 'react';
import classes from './HeaderView.module.scss';
import Logo from '../../../../images/illustration-hero.svg';
import Button from '../../../../components/Button/Button';

const HeaderView = props => (
  <div className={classes.HeaderView}>
    <div className={classes.HeaderViewleft}>
      <div className={classes.HeaderViewItem}>
        <h1>A Simple Bookmark Manager</h1>

        <p>
          A clean and simple interface to organize your
          favourite websites. Open a new browser tab and see
          your sites load instantly. Try it for free.
        </p>

        <div>
          <Button name="Get it on Chrome" type="blue" />
          <Button name="Get it on Firefox" type="white" />
        </div>
      </div>
    </div>
    <div className={classes.HeaderViewright}>
      <div className={classes.HeaderViewrightbg} />
      <img src={Logo} alt="illustartion" />
    </div>
  </div>
);

export default HeaderView;
