// importing necessary hooks and actions from cartSlice
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart } from '../utils/cartSlice';

function Checkout() {
// fetching the items in the cart
  const items = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();
// calculating the total price
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
// function for placing order which clears the cart and navigates to the order confirmation page when the place order button is clicked
  function placeOrder() {
    items.forEach(item => dispatch(removeFromCart(item.id)));
    navigate('/order');
  };
// rendering the checkout summary and place order and back to cart buttons
  return (
    <div className="checkout">
      <h2>Checkout Summary</h2>
      {items.length === 0 ? (
        <>
        <p>Your cart is empty.</p>
        <button className="back-to-cart-btn" onClick={()=> {navigate('/cart')}}>
            Back to Cart 🛒
          </button>
          </>
      ) : (
        <>
          <ul className="checkout-list">
            {items.map((item) => (
              <li key={item.id} className="checkout-item">
                <span>{item.title} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button className="place-order-btn" onClick={placeOrder}>
            Place Order
          </button>
          <button className="back-to-cart-btn" onClick={()=> {navigate('/cart')}}>
            Back to Cart 🛒
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
