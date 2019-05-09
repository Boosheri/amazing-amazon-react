import React from "react";

export function ReviewDetails(props) {
  return (
    <div>
      <p>
        {props.rating}
        <br />
        {props.body}
        <br />
        By {props.user && props.user.full_name}
      </p>
      <p>
        <small>Created at {props.created_at}</small>
      </p>
    </div>
  );
}
