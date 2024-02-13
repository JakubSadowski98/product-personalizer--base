// functionality: including whole product view
import styles from './Product.module.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage';
import ProductHeader from '../ProductHeader/ProductHeader';
import ProductOptions from '../ProductOptions/ProductOptions';

const Product = props => {
  // ! w jednym komponencie można mieć dowolną liczbę zmiennych stanu
  const [currentColor, setCurrentColor] = useState(props.colors[0]); // zmienna stanu z informacją o wybranym kolorze
  const [currentSize, setCurrentSize] = useState(props.sizes[0]); // zmienna stanu z informacją o wybranym rozmiarze

  const getPrice = () => {
    if(currentSize.additionalPrice !== 0) {
      const curretPrice = props.basePrice + currentSize.additionalPrice;
      return curretPrice;
    } else {
      return props.basePrice
    }
  };
  const totalPrice = getPrice();

  return (
    <article className={styles.product}>
      <div>
        <ProductImage name={props.name} title={props.title} currentColor={currentColor}/>
        <ProductHeader title={props.title} totalPrice={totalPrice} />
        <ProductOptions sizes={props.sizes} colors={props.colors} title={props.title} totalPrice={totalPrice} currentColor={currentColor} currentSize={currentSize} setCurrentColor={setCurrentColor} setCurrentSize={setCurrentSize} />
      </div>
    </article>
  );
};

Product.propTypes = { // ustalenie wymagań komponentu (jakie parametry, o jakich nazwach i jakich typach są potrzebne w komponencie)
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
};

export default Product;