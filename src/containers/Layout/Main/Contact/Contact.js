import React from 'react';
import classes from './Contact.module.scss';
import Button from '../../../../components/Button/Button';

const Contact = () => {
  return (
    <section className={classes.Contact}>
      <div className={classes.ContactBox}>
        <p>35,000+ already joined</p>

        <h2>Stay up-to-date with what we’re doing</h2>

        <form className={classes.ContactForm}>
          <input
            type="text"
            placeholder="Enter your Email address"
            className={classes.ContactInput}
          />
          <Button type="orange" name="Contact Us" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
