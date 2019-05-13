import React, { Component } from 'react';
import { ProductDetails } from './ProductDetails';
import { ReviewList } from './ReviewList';
import { Product } from "../api/product";

class ProductShowPage extends Component {
	constructor(props) {
		super(props);
        this.state = {
			product: {}
		};
		this.deleteReview = this.deleteReview.bind(this);
	}

	componentDidMount() {

		const id = this.props.match.params.id;
		Product.one(id).then(product => {
		  this.setState({
			product
		  });
		});
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
		if (!this.state.product) {
			return (
			  <main className="Page">
				<h2>Product is loading or doesn't exist!</h2>
			  </main>
			);
		  }
		
		const { reviews, ...product } = this.state.product;
		return (
			<div className="ProductShowPage">
				<ProductDetails {...product} />
				{/* <ProductDetails {...this.state.product} /> */}
				<h3>Reviews</h3>
				<ReviewList onDeleteReview={this.deleteReview}
				reviews={this.state.product.reviews} />
			</div>
		);
	}
}

export { ProductShowPage };
