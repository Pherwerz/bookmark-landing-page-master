import React, { Component } from 'react';
import Heading from '../../../../components/Heading/Heading';
import Container from '../../../Container/Container';
import classes from './Feature.module.scss';
import Tab from '../../../../components/Tab/Tab';
import img1 from '../../../../images/illustration-features-tab-1.svg';
import img2 from '../../../../images/illustration-features-tab-2.svg';
import img3 from '../../../../images/illustration-features-tab-3.svg';

const btn = [
  'Simple Bookmarking',
  'Speedy Searching',
  'Easy Sharing'
];

class Feature extends Component {
  state = {
    number: 0,
    tabs: [
      {
        h: 'Bookmark in one click',
        p:
          'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
        img: img1
      },
      {
        h: 'Intelligent search',
        p:
          'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
        img: img2
      },
      {
        h: 'Share your bookmarks',
        p:
          'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
        img: img3
      }
    ]
  };

  change = e => {
    const id = parseInt(e.target.id);
    this.setState({
      number: id
    });
  };

  render() {
    return (
      <section className={classes.Feature}>
        <Container>
          <Heading
            h="Features"
            p="
              Our aim is to make it quick and easy for you to
              access your favourite websites. Your bookmarks sync
              between your devices so you can access them on the
              go."
          />

          <div className={classes.FeatureTabBtn}>
            {btn.map((cur, i) => (
              <button
                key={i}
                id={i}
                className={[
                  classes.FeatureBtn,
                  i === this.state.number
                    ? classes.active
                    : null
                ].join(' ')}
                onClick={this.change}
              >
                {cur}
              </button>
            ))}
          </div>
        </Container>

        <Tab
          srcs={this.state.tabs[this.state.number].img}
          h={this.state.tabs[this.state.number].h}
          p={this.state.tabs[this.state.number].p}
        />
      </section>
    );
  }
}

export default Feature;
