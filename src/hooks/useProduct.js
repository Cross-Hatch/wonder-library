import { useEffect, useState } from 'react';
import commerce from '../lib/commerce';

const useProduct = ({limit = "", query = ""}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = () => {
    commerce.products
      .list({
        limit: limit,
      })
      .then((products) => {
        setProducts(products.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('There was an error fetching the products', error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
console.log(products);
  return { loading, products };
};

export default useProduct;
