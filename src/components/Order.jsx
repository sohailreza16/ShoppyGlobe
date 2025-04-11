// importing the necessary components
import React from 'react';
import { Link } from 'react-router-dom';

function Order() {
// rendering the order confirmation message with a shop more button which navigates to home page
  return (
    <div className="order-confirmation">
      <h2>🎉 Congratulations!</h2>
      <p>Your order has been placed successfully.</p>
      <Link to='/'><button>Shop More</button></Link>
    </div>
  );
};

export default Order;
