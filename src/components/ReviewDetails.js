import React from "react";

export function ReviewDetails(props) {
    const { rating, body, created_at, reviewer = {} } = props;
    const { full_name } = reviewer;
  return (
    <div>
      <p>
      <h3>{rating}</h3>
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
