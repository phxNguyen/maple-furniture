import React, { useState } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;

const Header = () => {
  const [state, setState] = useState("");

  const handleClick = () =>{ 
    //
  };

  return (
    <Menu onClick={handleClick}  mode="horizontal">
      <Menu.Item key="mail" >
        Home
      </Menu.Item>
      
      <SubMenu
        key="SubMenu"
        title="Navigation Three - Submenu"
      >
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>

    </Menu>
  );
};

export default Header;
