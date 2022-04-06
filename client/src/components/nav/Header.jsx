
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { Menu } from "antd";
import { UserAddOutlined, UserOutlined, SkinOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/compat/app';
const { SubMenu, Item } = Menu;




const Header = () => {
  const [current, setCurrent] = useState("home");

  let dispatch = useDispatch();
  let history = useHistory();

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const logout = () =>{
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null
    });
    history.push('/login')    
  }

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
          <Item icon={<LogoutOutlined />} onClick={logout}>Logout</Item>
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
