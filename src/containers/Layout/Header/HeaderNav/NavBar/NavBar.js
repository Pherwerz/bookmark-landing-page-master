import React, { Component } from 'react';
import classes from './NavBar.module.scss';
import close from '../../../../../images/icon-close.svg';
import Logo from '../../../../../components/Logo/Logo';
import Container from '../../../../Container/Container';
import Icons from '../../../../../components/Icons/Icons';

const links = ['Features', 'Pricing', 'Contact'];

class NavBar extends Component {
  render() {
    return (
      <div
        className={classes.NavBar}
        style={this.props.syl}
      >
        <Container>
          <div className={classes.NavBarTop}>
            <div className={classes.NavBarUp}>
              <Logo type="light" />

              <button
                className={classes.NavBarBtn}
                onClick={this.props.closer}
              >
                <img src={close} alt="close" />
              </button>
            </div>

            <div className={classes.NavBarBtm}>
              <ul className={classes.NavBarList}>
                {links.map((cur, i) => (
                  <li className={classes.NavBarItem}>
                    <a
                      className={classes.NavBarLink}
                      href={cur}
                    >
                      {cur}
                    </a>
                  </li>
                ))}
              </ul>

              <button
                className={[
                  classes.NavBarBtn,
                  classes.NavBarBtn2
                ].join(' ')}
              >
                LOGIN
              </button>

              <Icons />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default NavBar;
