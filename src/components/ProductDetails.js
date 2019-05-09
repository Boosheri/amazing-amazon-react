import React from "react";

export function ProductDetails(props) {
  const { title, description, price, created_at, seller = {} } = props;
	const { full_name } = seller
  return (
    <div>
      <h2>{title}</h2>
      <p>
        {description}
        <br />
        {price}
        <br />
        Seller: {full_name}
      </p>
      <p>
        <small>Created at: {created_at}</small>
      </p>
    </div>
  );
}

