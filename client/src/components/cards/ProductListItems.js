import React from "react";
import { Link } from "react-router-dom";
import { showAverage } from "../../services/rating";
const ProductListItems = ({ product }) => {
  const { price, category, subs, delivery, color, brand, quantity, sold } =
    product;

  return (
    <ul className="list-group list-group-light">
      <li className="list-group-item  border-0">
        Price{" "}
        <span className="label label-default label-pill float-end">
          $ {price}
        </span>
      </li>

      {category && (
        <li className="list-group-item  border-0">
          Category{" "}
          <Link
            to={`/category/${category.slug}`}
            className="label label-default label-pill float-end"
          >
            {category.name}
          </Link>
        </li>
      )}

      {subs && (
        <li className="list-group-item  border-0">
          Sub Categories
          {subs.map((s) => (
            <Link
              key={s._id}
              to={`/sub/${s.slug}`}
              className="label label-default label-pill float-end ms-4"
            >
              {s.name}
            </Link>
          ))}
        </li>
      )}

      <li className="list-group-item  border-0">
        Delivery{" "}
        <span className="label label-default label-pill float-end">
          {delivery}
        </span>
      </li>

      <li className="list-group-item  border-0">
        Color{" "}
        <span className="label label-default label-pill float-end">
          {color}
        </span>
      </li>

      <li className="list-group-item  border-0">
        Brand{" "}
        <span className="label label-default label-pill float-end">
          {brand}
        </span>
      </li>

      <li className="list-group-item  border-0">
        Available{" "}
        <span className="label label-default label-pill float-end">
          {quantity}
        </span>
      </li>

      <li className="list-group-item  border-0">
        Sold{" "}
        <span className="label label-default label-pill float-end">{sold}</span>
      </li>

      <li className="list-group-item  border-0">
        Rating{" "}
        <span className="label label-default label-pill float-end">
          {product && product.ratings && product.ratings.length > 0
            ? showAverage(product)
            : "No rating yet"}
        </span>
      </li>
    </ul>
  );
};

export default ProductListItems;
