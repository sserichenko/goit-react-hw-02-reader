import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';
import style from './Reader.module.css';

class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  state = {
    index: 0,
    step: 1,
  };

  onIncrement = () => {
    const { step } = this.state;
    this.setState(prevState => ({ index: prevState.index + step }));
  };

  onDecrement = () => {
    const { step } = this.state;
    this.setState(prevState => ({ index: prevState.index - step }));
  };

  render() {
    const { index } = this.state;
    const { items } = this.props;

    const buttonPrevActive = index === 0;
    const buttonNextActive = index + 1 === items.length;

    return (
      <>
        <div className={style.reader}>
          <Controls
            onIncrement={this.onIncrement}
            onDecrement={this.onDecrement}
            buttonPrevActive={buttonPrevActive}
            buttonNextActive={buttonNextActive}
          />
          <Counter activeIndex={index + 1} maxIndex={items.length} />
          <Publication
            currentPublic={items[index].text}
            currentPublicTitle={items[index].title}
          />
        </div>
      </>
    );
  }
}

export default Reader;
