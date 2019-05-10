import React, { Component } from 'react';
import { ProductDetails } from './ProductDetails';
import { ReviewList } from './ReviewList';
import productData from '../data/productData';

class ProductShowPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			product: productData
		};
	}

	render() {
		const { reviews, ...product } = this.state.product;
		return (
			<div className="ProductShowPage">
				<ProductDetails {...product} />
				<h3>Reviews</h3>
				<ReviewList reviews={reviews} />
			</div>
		);
	}
}

export { ProductShowPage };
