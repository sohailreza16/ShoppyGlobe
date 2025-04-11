// importing the necessary hooks and components
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../utils/cartSlice';
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
  const dispatch = useDispatch();
// rendering the product item with add to cart button
  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} className="product-img" />
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
      </Link>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
