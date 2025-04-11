// importing necessary hooks
import { useEffect, useState } from 'react';

function useFetchProducts() {
// initializing necessary state variables
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
// fetching product data using useEffect
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;
