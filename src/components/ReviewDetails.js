import React from "react";
import { StarRating } from './StarRating';

export function ReviewDetails(props) {
    const { rating, body, created_at, reviewer = {} } = props;
    const { full_name } = reviewer;
  return (
    <div>
      <p>
      <h3>Reviewer: {full_name}</h3>
        <StarRating max={5} rating={rating} />
        <br />
        {body}
        <br />
        Reviewer: {full_name}
      </p>
      <p>
        <small>Created at: {created_at}</small>
      </p>
    </div>
  );
}
