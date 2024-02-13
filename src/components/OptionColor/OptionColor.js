import styles from './OptionColor.module.scss';
import PropTypes  from 'prop-types';
import clsx from 'clsx';
import shortid from 'shortid';

const OptionColor = props => {
  const colorOptions = color => { // ! alternatywny sposób dojścia do właściwości obiektu styles - nazwa podawana jest w formie stringu obiętego w []
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {props.colors.map(color =>
          <li key={shortid()}>
            <button type="button" onClick={() => props.setCurrentColor(color)} className={clsx(colorOptions(color), color === props.currentColor && styles.active)}></button>
          </li>
        )}
      </ul>
  </div>
  );
};

OptionColor.propTypes = {
  setCurrentColor: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
};

export default OptionColor;