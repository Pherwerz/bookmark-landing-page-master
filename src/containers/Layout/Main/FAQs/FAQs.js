import React, { Component } from 'react';
import Heading from '../../../../components/Heading/Heading';
import Button from '../../../../components/Button/Button';
import Container from '../../../Container/Container';
import classes from './FAQs.module.scss';
import arrow from '../../../../images/arrows.svg';

const Quest = [
  {
    Q: 'What is Bookmark?',
    A:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'
  },
  {
    Q: 'How can I request a new browser?',
    A:
      'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'
  },
  {
    Q: 'Is there a mobile app?',
    A:
      'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed  sollicitudin ex et ultricies bibendum.'
  },
  {
    Q: 'What about other Chromium browsers?',
    A:
      'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.'
  }
];

class FAQs extends Component {
  state = {
    ans: [
      {
        test: true,
        A:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'
      },
      {
        test: true,
        A:
          'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'
      },
      {
        test: true,
        A:
          'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed  sollicitudin ex et ultricies bibendum.'
      },
      {
        test: true,
        A:
          'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.'
      }
    ]
  };

  clicked = e => {
    // const id = parseInt(e.target.id);
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
            {Quest.map((cur, i) => (
              <div className={classes.FAQsItem} key={i}>
                <button
                  className={classes.FAQsQuest}
                  onClick={this.clicked}
                  id={i}
                >
                  <h3>{cur.Q}</h3>
                  <svg>
                    <use
                      xlinkHref={
                        arrow + `#icon-chevron-down`
                      }
                    />
                  </svg>
                </button>
                <div className={classes.FAQsAns}>
                  <p>{this.state.ans[i].A}</p>
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
