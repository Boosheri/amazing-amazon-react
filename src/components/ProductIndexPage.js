import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Product } from "../api/product";

class ProductIndexPage extends Component {
	state = {
    products: []
  };
		
	componentDidMount() {
		Product.all().then(products => {
			this.setState({ products });
		});
	}

	deleteProduct(id) {
			this.setState({
				products: this.state.products.filter(p => p.id !== id)
			});
		}

	render() {
		console.log (Product )
		return (
			<div className="ProductIndexPage">
				<h2>Products</h2>
				{this.state.products.map(product => (
					<div key={product.id}>
						<Link to={`/products/${product.id}`}>{product.title}</Link> <br />
							<button onClick={() => this.deleteProduct(product.id)}>
							Delete
							</button>
					</div>
				))}
			</div>
		);
	}
}

export { ProductIndexPage };
