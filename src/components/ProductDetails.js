import React from "react";

export function ProductDetails(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>
        {props.description}
        <br />
        {props.price}
        <br />
        By {props.seller && props.seller.full_name}
      </p>
      <p>
        <small>Created at {props.created_at}</small>
      </p>
    </div>
  );
}

