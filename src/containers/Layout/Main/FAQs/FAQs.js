import React, { Component } from 'react';
import Heading from '../../../../components/Heading/Heading';
import Button from '../../../../components/Button/Button';
import Container from '../../../Container/Container';
import classes from './FAQs.module.scss';
import arrow from '../../../../images/arrows.svg';

class FAQs extends Component {
  state = {
    Quest: [
      {
        Q: 'What is Bookmark?',
        icon: arrow + '#icon-chevron-down',
        ifill: 'var(--soft-blue)',
        classs: classes.FAQsAnshide,
        A:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'
      },
      {
        Q: 'How can I request a new browser?',
        icon: arrow + '#icon-chevron-down',
        ifill: 'var(--soft-blue)',
        classs: classes.FAQsAnshide,
        A:
          'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'
      },
      {
        Q: 'Is there a mobile app?',
        icon: arrow + '#icon-chevron-down',
        ifill: 'var(--soft-blue)',
        classs: classes.FAQsAnshide,
        A:
          'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed  sollicitudin ex et ultricies bibendum.'
      },
      {
        Q: 'What about other Chromium browsers?',
        icon: arrow + '#icon-chevron-down',
        ifill: 'var(--soft-blue)',
        classs: classes.FAQsAnshide,
        A:
          'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.'
      }
    ]
  };

  clicked = id => {
    this.setState({
      Quest: this.state.Quest.map((cur, i) => {
        if (id === i) {
          cur.classs === classes.FAQsAnshide
            ? (cur.classs = null)
            : (cur.classs = classes.FAQsAnshide);

          cur.icon === arrow + '#icon-chevron-down'
            ? (cur.icon = arrow + '#icon-chevron-up')
            : (cur.icon = arrow + '#icon-chevron-down');

          cur.ifill === 'var(--soft-blue)'
            ? (cur.ifill = 'var(--soft-red)')
            : (cur.ifill = 'var(--soft-blue)');
        }

        return cur;
      })
    });
  };

  render() {
    return (
      <section className={classes.FAQs}>
        <Heading
          h="Frequently Asked Questions"
          p="
            Here are some of our FAQs. If you have any 
            other questions you’d like answered please 
            feel free to email us."
        />

        <Container>
          <div className={classes.FAQsList}>
            {this.state.Quest.map((cur, i) => (
              <div className={classes.FAQsItem} key={i}>
                <button
                  className={classes.FAQsQuest}
                  onClick={() => this.clicked(i)}
                >
                  <h3>{cur.Q}</h3>
                  <svg style={{ fill: cur.ifill }}>
                    <use xlinkHref={cur.icon} />
                  </svg>
                </button>

                <div
                  className={[
                    classes.FAQsAns,
                    cur.classs
                  ].join(' ')}
                >
                  <p>{cur.A}</p>
                </div>
              </div>
            ))}
          </div>

          <Button type="blue" name="More Info" />
        </Container>
      </section>
    );
  }
}

export default FAQs;
