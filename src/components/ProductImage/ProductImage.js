import styles from './ProductImage.module.scss';
import PropTypes from 'prop-types';

const ProductImage = props => {
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image} // PUBLIC_URL - zmienna środowiskowa (globalna "zmienna" z inforamcjami, które Node.js udstępnia w kodzie) dostarczona przez Create React App
        alt={props.title}        // przechowuje ona ścieżkę do folderu public, dzięki temu wszystko, co zajduje się w tym folderze będzie dostępne w "zbudowanej" aplikacji
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.currentColor}.jpg`}
      />
    </div>
  );
}

ProductImage.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
}

export default ProductImage;