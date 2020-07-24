import React from 'react';
import Logo from '../../../components/Logo/Logo';
import List from '../../../components/List/List';
import classes from './Footer.module.scss';
import Container from '../../Container/Container';
import Icons from '../../../components/Icons/Icons';

const Footer = () => (
  <footer className={classes.Footer}>
    <Container>
      <div className={classes.FooterItem}>
        <Logo type="light" />

        <List type="light" />

        <Icons />
      </div>
    </Container>

    <p className={classes.attribution}>
      Challenge by{' '}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noopener noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by <a href="foot">Adebayo Fawaz</a>.
    </p>
  </footer>
);

export default Footer;
