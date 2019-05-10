import React, { Component } from 'react';
import productsData from '../data/productsData';

class ProductIndexPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: productsData
		};
    }
    
    deleteProduct(id) {
        this.setState({
          products: this.state.products.filter(p => p.id !== id)
        });
      }

	render() {
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
