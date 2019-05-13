import React, { Component } from 'react';
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
						<a href="">{product.title}</a> <br />
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
