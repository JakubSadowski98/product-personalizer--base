// functionality: including whole product view
import styles from './Product.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types'
import shortid from 'shortid';

const Product = props => {
  // ! w jednym komponencie można mieć dowolną liczbę zmiennych stanu
  const [currentColor, setCurrentColor] = useState(props.colors[0]); // zmienna stanu z informacją o wybranym kolorze
  const [currentSize, setCurrentSize] = useState(props.sizes[0]); // zmienna stanu z informacją o wybranym rozmiarze

  const colorOptions = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()]; // ! alternatywny sposób dojścia do właściwości obiektu styles - nazwa podawana jest w formie stringu obiętego w []
  }

  const getPrice = () => {
    if(currentSize.additionalPrice !== 0) {
      const curretPrice = props.basePrice + currentSize.additionalPrice;
      return curretPrice;
    } else {
      return props.basePrice
    }
  }

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
    )
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image} // PUBLIC_URL - zmienna środowiskowa (globalna "zmienna" z inforamcjami, które Node.js udstępnia w kodzie) dostarczona przez Create React App
          alt={props.title}      // przechowuje ona ścieżkę do folderu public, dzięki temu wszystko, co zajduje się w tym folderze będzie dostępne w "zbudowanej" aplikacji
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size =>
                <li key={shortid()}>
                  <button type="button" onClick={() => setCurrentSize(size)} className={clsx(size === currentSize && styles.active)}>{size.name}</button>
                </li>
              )}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color =>
                <li key={color}>
                  <button type="button" onClick={() => setCurrentColor(color)} className={clsx(colorOptions(color), color === currentColor && styles.active)}></button>
                </li>
              )}
            </ul>
          </div>
          <Button className={styles.button} onClick={e => summaryOrder(e, props.title, getPrice(), currentColor, currentSize.name)}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = { // ustalenie wymagań komponentu (jakie parametry, o jakich nazwach i jakich typach są potrzebne w komponencie)
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
};

export default Product;