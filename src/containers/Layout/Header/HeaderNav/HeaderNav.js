import React, { Component } from 'react';
import Container from '../../../Container/Container';
import classes from './HeaderNav.module.scss';
import Logo from '../../../../components/Logo/Logo';
import List from '../../../../components/List/List';
import Button from '../../../../components/Button/Button';
import open from '../../../../images/icon-hamburger.svg';
import NavBar from './NavBar/NavBar';

class HeaderNav extends Component {
  state = { height: '0' };

  opened = () => {
    this.setState({ height: '100vh' });
  };

  closed = () => {
    this.setState({ height: '0' });
  };

  render() {
    return (
      <Container>
        <NavBar
          closer={this.closed}
          syl={{ height: this.state.height }}
        />

        <div className={classes.HeaderNav}>
          <Logo type="dark" />

          <List type="dark" />

          <Button
            name="Login"
            type="orange"
            className={classes.HeaderNavB}
          />

          <button
            className={classes.HeaderNavBtn}
            onClick={this.opened}
          >
            <img src={open} alt={open} />
          </button>
        </div>
      </Container>
    );
  }
}

export default HeaderNav;
