// importing necessary hooks and components and redux slice
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

function Cart () {
// fetching data from cartSlice
  const cartItems = useSelector((state) => state.cart.items);
// calculating the total price of items in the cart
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
// rendering appropriate message if cart is empty
  if (cartItems.length === 0) {
    return (
      <div className='cart'>
      <Link to='/'><button>Back to Home</button></Link>
      <p className="status-msg">Your cart is empty.</p>
      </div>
    )
  }
// rendering the cart items, total and a proceed to checkout button
  return (
    <div className="cart">
      <Link to='/'><button>Back to Home</button></Link>
      <h2>Your Shopping Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="cart-total">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <Link to="/checkout"><button>Proceed to Checkout</button></Link>
      </div>
    </div>
  );
};

export default Cart;
