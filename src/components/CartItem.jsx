// importing the necessary hooks, components and actions from cartSlice
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../utils/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();
// rendering the cart item received as a props with the quantity control and remove buttons
  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} className="cart-img" />
      <div className="cart-details">
        <h4>{item.title}</h4>
        <p>Price: ${item.price}</p>
        <p className="item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>

        <div className="quantity-control">
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        </div>

        <button
          className="remove-btn"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
