// importing the necessary hooks and components
import React from 'react';
import ProductItem from './ProductItem';
import useFetchProducts from '../utils/useFetchProducts';
import { useSelector } from 'react-redux';

function ProductList() {
// fetching the data using custom hook
  const { products, loading, error } = useFetchProducts();
// fetching the text in the search box
  const searchQuery = useSelector((state) => state.cart.searchQuery.toLowerCase());
// filtering the products according the searched text
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.trim())
  );
// giving the appropriate message if the products are not displayed
  if (loading) return <p className="status-msg">Loading products...</p>;
  if (error) return <p className="status-msg">Error: {error}</p>;
  if (filteredProducts.length==0) return <p className="status-msg">No products match the search input</p>;
// rendering the products using map function
  return (
    <>
    <p className='status-msg'>Products</p>
    <div className="product-list">
      {filteredProducts.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
    </>
  );
};

export default ProductList;
