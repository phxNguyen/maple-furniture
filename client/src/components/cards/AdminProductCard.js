import React from "react";
import { Card } from "antd";
import Sample from "../../images/Sample.png";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Meta } = Card;
const AdminProductCard = ({ product }) => {
  // destructure
  const { title, description, images } = product;

  return (
    <Card
      cover={
        <img
          src={images && images.length ? images[0].url : Sample}
          style={{ height: "300px", objectFit: "cover" }}
          className="p-1"
        />
      }
      actions={[
        <EditOutlined className="text-warning" />,
        <DeleteOutlined className="text-danger" />,
      ]}
    >
      <Meta
        title={title}
        description={`${description && description.substring(0, 40)}...`}
      />
    </Card>
  );
};

export default AdminProductCard;