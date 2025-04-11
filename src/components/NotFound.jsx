// importing the necessary components
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
// rendering the not found error message and a go back home button which navigates to home page
  return (
    <div className="not-found">
      <h2>404</h2>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
