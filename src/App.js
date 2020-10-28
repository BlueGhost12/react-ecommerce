import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './Components/Nav'
import CartPage from './Components/CartPage'
import ProductDetails from './Components/ProductDetails'
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CartProvider from './Components/Context/CartContext'

function App() {
	return (
		<CartProvider>
			<Router>
				<div className="App">
					<Nav/>
					<Switch>
						<Route path="/product/:productId" component={ProductDetails} />
						<Route path="/" exact component={Home} />
						<Route path="/cart" component={CartPage} />
					</Switch>
				</div>
			</Router>
		</CartProvider>
	);
}
export default App;