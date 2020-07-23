import React from 'react';
import Container from '../../../Container/Container';
import classes from './HeaderNav.module.scss';
import Logo from '../../../../components/Logo/Logo';
import List from '../../../../components/List/List';
import Button from '../../../../components/Button/Button';

const HeaderNav = () => (
  <Container>
    <div className={classes.HeaderNav}>
      <Logo type="dark" />
      <List type="dark" />
      <Button name="Login" type="orange" />
    </div>
  </Container>
);

export default HeaderNav;
