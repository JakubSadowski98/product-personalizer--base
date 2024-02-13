import styles from './ProductOptions.module.scss';
import PropTypes from 'prop-types';
import OptionSize from "../OptionSize/OptionSize";
import OptionColor from "../OptionColor/OptionColor";
import Button from "../Button/Button";

const ProductOptions = props => {
  const summaryOrder = (e, title, price, color, size) => {
    e.preventDefault();
    console.log(
      `Summary:
      =========
      title: ${title}
      price: ${price}
      color: ${color}
      size: ${size}
      `
    );
  };

  return (
    <form>
      <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} />
      <OptionColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} />
      <Button className={styles.button} onClick={e => summaryOrder(e, props.title, props.totalPrice, props.currentColor, props.currentSize.name)} >
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

ProductOptions.propTypes = {
  title: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.object.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
};

export default ProductOptions;