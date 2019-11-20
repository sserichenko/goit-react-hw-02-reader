import React from 'react';
import PropTypes from 'prop-types';
import st from './Controls.module.css';

const Controls = ({
  onIncrement,
  onDecrement,
  buttonPrevActive,
  buttonNextActive,
}) => {
  return (
    <>
      <div className={st.reader}>
        <section className={st.controls}>
          <button
            disabled={buttonPrevActive}
            onClick={onDecrement}
            type="button"
            className={buttonPrevActive ? st.button_disabled : st.button}
          >
            Назад
          </button>
          <button
            disabled={buttonNextActive}
            onClick={onIncrement}
            type="button"
            className={buttonNextActive ? st.button_disabled : st.button}
          >
            Вперед
          </button>
        </section>
      </div>
    </>
  );
};

Controls.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  buttonPrevActive: PropTypes.bool.isRequired,
  buttonNextActive: PropTypes.bool.isRequired,
};

export default Controls;
