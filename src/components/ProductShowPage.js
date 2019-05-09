import React from 'react';
import { ProductDetails } from './ProductDetails';
import { ReviewList } from './ReviewList';
import productData from '../data/productData';

function ProductShowPage(props) {
	const { reviews, ...product } = productData;
	return (
		<div className="ProductShowPage">
			<ProductDetails {...product} />
			<h3>Reviews</h3>
			<ReviewList reviews={reviews} />
		</div>
	);
}

export { ProductShowPage };
