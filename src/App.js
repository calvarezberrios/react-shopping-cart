import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";

// Actions
import { fetchProductData } from "./actions/productActions";
import { addItem, removeItem } from "./actions/cartActions";

// Context
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App({products, cart, fetchProductData, addItem, removeItem}) {

	React.useEffect(() => {
		fetchProductData();
	});

	React.useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);

	return (	
		<div className="App">
			<ProductContext.Provider value = {{ products, addItem }}>
				<CartContext.Provider value = {{cart, removeItem}}>

					<Navigation cartLength = {cart.length} />

					{/* Routes */}
					<Route exact path="/" component = {Products} />

					<Route path="/cart" component = {ShoppingCart} />

				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}
const mapStateToProps = state => {
	return {
		products: state.productReducer.data,
		cart: state.cartReducer.cart
	}
}
export default connect(mapStateToProps, {fetchProductData, addItem, removeItem})(App);
