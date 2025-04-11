// importing the necessary hooks and components
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../utils/cartSlice';
import { Link } from 'react-router-dom';

function ProductDetail() {
// fetching the id parameter from the route
  const { id } = useParams();
// initializing the necessary state variables
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
// fetching the product matching the route id using useEffect hook
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message));
  }, [id]);
// giving the appropriate message if the product is not displayed
  if (error) return <p className="status-msg">Error: {error}</p>;
  if (!product) return <p className="status-msg">Loading product details...</p>;
// rendering the product details
  return (
    <>
    <Link to='/'><button className='back'>Back to Home</button></Link>
    <div className="product-detail">
      <img src={product.thumbnail} alt={product.title} className="detail-img" />
      <div className="detail-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className='detail'>Category: {product.category}</p>
        <p className='detail'>Brand: {product.brand}</p>
        <p className='detail'>Rating: {product.rating} ⭐</p>
        <p className="price">Price: ${product.price}</p>
        <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      </div>
    </div>
    </>
  );
};

export default ProductDetail;
