import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Sample from "../../images/Sample.png"
import { Link } from "react-router-dom";
import { showAverage } from "../../services/rating";

const { Meta } = Card;

const ProductCard = ({ product }) => {
  // destructure
  const { images, title, description, slug, price } = product;
  return (
    <>
      {/* {product && product.ratings && product.ratings.length > 0
            ? showAverage(product)
            : "No rating yet"} */}
    <Card
      cover={
        <img
          src={images && images.length ? images[0].url : Sample}
          style={{ height: "280px", objectFit: "cover" }}
          className="p-1"
        />
      }
      actions={[
        <Link to={`/product/${slug}`}>
          <EyeOutlined className="text-warning" /> <br /> View Product
        </Link>,
        <>
          <ShoppingCartOutlined className="text-danger" /> <br /> Add to Cart
        </>,
      ]}
    >
      <Meta
        title={`${title} - $${price}`}
        description={`${description && description.substring(0, 40)}...`}
        
      />
    </Card></>
  );
};

export default ProductCard;
