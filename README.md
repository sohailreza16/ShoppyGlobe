<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->


# HOW TO RUN

1. Open the course 7 assignment 2 folder in vs code
2. Go to My To-Do by typing on terminal: cd .\ShoppyGlobe\
3. Install the node_modules folder by typing on terminal: npm install
4. Run the project by typing on terminal: npm run dev
5. Click on the server link provided, it will open the project

## HOW TO USE

1. On the top there is a header in which there is the ShoppyGlobe logo, a search box and two navigation link for Home and Cart.
2. You can go to the Home page by either clicking on the logo or the Home navigation link.
3. You can go to the Cart page by clicking on the Cart navigation link, it also displays no of products in the cart.
4. You can filter out the products on the Home page by searching the product name in the search box, it will show all the products having that text in their name, if no product is found, it will display "No products match the search input".
5. If there is an error occurred while fetching the data, it will display the error message.
6. In the Home page, the list of product is shown in the form of product cards, while loading the products a Loading Products... message is displayed.
7. In the product card, the image,name and price of the product is listed and a button "Add to Cart" is present to add the product to the cart.
8. You can also click anywhere on the product card to view product's details.
9. In the product details page, along with the product image, name, price and add to cart button, there is the product description, category, brand and rating, there is also a back to home button.
10. In the Cart page, if no item is added to the cart, then a message "Your cart is empty" will display, also there is a back to home button.
11. If items are added to the cart, it will display the list of products added to the cart with their image, name, price, quantity and total price.
12. It will also have buttons to increase or decrease the quantity and also a button to remove the item from the cart.
13. There will also be a big total adding the total price of each product, and a proceed to checkout button which brings us to checkout page.
14. On the Checkout page, if by chance the cart becomes empty it will display message "Your cart is empty" with a back to cart button, otherwise, it will display the checkout summary, listing the name, quantity and price of the products and the total price to be paid on order.
15. It also has the place order button on clicking which it clears the cart and navigates to order confirmation page.
16. On order confirmation page, there is a confirmation message and a shop more button on clicking which we are back to Home page.

### GitHub Link
https://github.com/sohailreza16/ShoppyGlobe.git