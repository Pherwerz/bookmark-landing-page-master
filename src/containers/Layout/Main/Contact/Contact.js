import React, { Component } from 'react';
import classes from './Contact.module.scss';
import Button from '../../../../components/Button/Button';

class Contact extends Component {
  state = { value: '' };

  submitted = () => {};

  inputhandler = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <section className={classes.Contact}>
        <div className={classes.ContactBox}>
          <p>35,000+ already joined</p>

          <h2>Stay up-to-date with what we’re doing</h2>

          <form
            className={classes.ContactForm}
            onSubmit={this.submitted}
          >
            <input
              type="email"
              placeholder="Enter your Email address"
              className={classes.ContactInput}
              onChange={this.inputhandler}
              value={this.state.value}
            />
            <Button type="orange" name="Contact Us" />
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
