import styles from './OptionSize.module.scss';
import PropTypes  from 'prop-types';
import clsx from 'clsx';
import shortid from 'shortid';

const OptionSize = props => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map(size =>
          <li key={shortid()}>
            <button type="button" onClick={() => props.setCurrentSize(size)} className={clsx(size === props.currentSize && styles.active)}>{size.name}</button>
          </li>
        )}
      </ul>
    </div>
  );
}

OptionSize.propTypes = {
  setCurrentSize: PropTypes.func.isRequired,
  currentSize: PropTypes.object.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default OptionSize;