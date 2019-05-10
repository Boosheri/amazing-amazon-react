import React from "react";
import { StarRating } from './StarRating';

export function ReviewDetails(props) {
    const {
		id,
		rating,
		body,
		created_at,
		reviewer = {},
		onDelete = () => {}
	} = props;
    const { full_name } = reviewer;
	return (
		<div className="ReviewDetails">
			<h3>Reviewer: {full_name}</h3>
			<p>{body}</p>
			<StarRating max={5} rating={rating} />
			<p>Created at: {created_at}</p>
			<input onClick={() => onDelete(id)} type="submit" value="Delete" />
		</div>
	);
}
