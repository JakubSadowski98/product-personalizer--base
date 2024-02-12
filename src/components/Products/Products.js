// functionality: rendering list of products
import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData); // przypisanie do stanu zaimportowanych danych (tablicy obiektów-produktów); ! zignorowanie referencji do funkcji modyfikującej stan (nie będzie ona potrzebna)

  return (
    <section> {/* instrukcja {...products[0]} "wyciąga" wszystkie elementy obiektu/tablicy*/}
      {products.map(product => <Product key={product.id} {...product} />)}
    </section>
  );
};

export default Products;