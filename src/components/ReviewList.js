import React from 'react';
import { ReviewDetails } from './ReviewDetails';

function ReviewList(props) {
	const { reviews = [], onDeleteReview = () => {} } = props;
	return (
		<div className="ReviewList">
			<ul>
				{reviews.map((review, index) => (
					<li key={index}>
						<ReviewDetails onDelete={onDeleteReview} {...review} />
					</li>
				))}
			</ul>
		</div>
	);
}

export { ReviewList };
