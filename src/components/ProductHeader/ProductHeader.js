import styles from './ProductHeader.module.scss';
import PropTypes from 'prop-types';

const ProductHeader = props => {
  return (
    <header>
      <h2 className={styles.name}>{props.title}</h2>
      <span className={styles.price}>Price: {props.totalPrice}$</span>
    </header>
  );
};

ProductHeader.propTypes = {
  title: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default ProductHeader;

