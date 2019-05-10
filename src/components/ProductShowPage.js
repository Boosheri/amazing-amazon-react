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
		this.deleteReview = this.deleteReview.bind(this);
	}

	deleteReview(reviewId) {
		const { product } = this.state;
		const { reviews, ...restProduct } = product;
		this.setState({
			product: {
				...restProduct,
				reviews: reviews.filter(review => review.id !== reviewId)
			}
        });
    }

	render() {
		const { reviews, ...product } = this.state.product;
		return (
			<div className="ProductShowPage">
				<ProductDetails {...product} />
				<h3>Reviews</h3>
				<ReviewList onDeleteReview={this.deleteReview} reviews={reviews} />
			</div>
		);
	}
}

export { ProductShowPage };
