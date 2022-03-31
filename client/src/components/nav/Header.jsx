import React, { useState } from "react";
import { Menu } from "antd";
import { UserAddOutlined, UserOutlined, SkinOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <>
      <div className="container-fluid">
      <Menu onClick={handleClick} mode="horizontal">
        <Item key="home" icon={<SkinOutlined />}>
          <Link to="/">Home</Link>
        </Item>

        <SubMenu key="SubMenu" title="Navigation">
          <Item key="setting:1">Option 1</Item>
          <Item key="setting:2">Option 2</Item>
        </SubMenu>

        <Item key="register" icon={<UserAddOutlined />} className="float-end">
          <Link to="/register">Register</Link>
        </Item>
        <Item key="login" icon={<UserOutlined />} className="float-end">
          <Link to="/login">Login</Link>
        </Item>
      </Menu>
      </div>
    </>
  );
};

export default Header;
