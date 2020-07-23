import React from 'react';
import Heading from '../../../../components/Heading/Heading';
import classes from './Download.module.scss';
import chrome from '../../../../images/logo-chrome.svg';
import firefox from '../../../../images/logo-firefox.svg';
import opera from '../../../../images/logo-opera.svg';
import Button from '../../../../components/Button/Button';
import Container from '../../../Container/Container';

const data = [
  {
    img: chrome,
    h: 'Add to Chrome',
    p: 'Minimum version 62'
  },
  {
    img: firefox,
    h: 'Add to Firefox',
    p: 'Minimum version 55'
  },
  {
    img: opera,
    h: 'Add to Opera',
    p: 'Minimum version 46'
  }
];

const Download = () => (
  <section className={classes.Download}>
    <Heading
      h="Download the extension"
      p="
        We’ve got more browsers in the pipeline. 
        Please do let us know if you’ve 
        got a favourite you’d like us to prioritize."
    />

    <Container>
      <div className={classes.DownloadList}>
        {data.map((cur, i) => (
          <div className={classes.DownloadItem} key={i}>
            <img src={cur.img} alt={cur.img} />
            <h3>{cur.h}</h3>
            <p>{cur.p}</p>
            <div>
              <Button
                type="blue"
                name="Add & Install Extension"
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Download;
