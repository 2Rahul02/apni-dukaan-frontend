import React, { Fragment, useState } from "react";
import "./Header.css";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import SearchIcon from '@material-ui/icons/Search';
import Backdrop from "@material-ui/core/Backdrop";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import CategoryIcon from '@material-ui/icons/Category';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import { logout } from "../../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";

const UserOptions = ({ user }) => {
  const { cartItems } = useSelector((state) => state.cart);

  const [open, setOpen] = useState(false);
  const history = useHistory();
  const alert = useAlert();
  const dispatch = useDispatch();
  var options=[];
  if(user!=null){
   options = [
    { icon: <ListAltIcon />, name: "Orders", func: orders },
    { icon: <HomeIcon />, name: "Home", func: home },
    {
      icon: (
        <ShoppingCartIcon
          style={{ color: cartItems.length > 0 ? "rgb(0,190,150)" : "unset" }}
        />
      ),
      name: `Cart(${cartItems.length})`,
      func: cart,
    },
    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
    if(window.innerWidth<998){
      options.unshift({
        icon: <SearchIcon/>,
        name: "Search",
        func: search,
      });
      options.unshift({
        icon: <CategoryIcon/>,
        name: "Products",
        func: products,
      });
      options.unshift({
        icon: <AccountBoxIcon/>,
        name: "Profile",
        func: profile,
      });
      

    }
  }
}else if(window.innerWidth<998){
  options = [
    { icon: <HomeIcon />, name: "Home", func: home },
    {icon: <CategoryIcon/>, name: "Products", func: products },
    {
      icon: <SearchIcon/>,
      name: "Search",
      func: search,
    },
    {
      icon: (
        <ShoppingCartIcon
          style={{ color: cartItems.length > 0 ? "rgb(0,190,150)" : "unset" }}
        />
      ),
      name: `Cart(${cartItems.length})`,
      func: cart,
    },
    {
      icon: <AccountBoxIcon/>,
      name: "Profile",
      func: profile,
    }
]
}

  function dashboard() {
    history.push("/admin/dashboard");
  }
  function home(){
    history.push("/");
  }
  function orders() {
    history.push("/orders");
  }
  function account() {
    history.push("/account");
  }
  function cart() {
    history.push("/cart");
  }
  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
  }
  function search(){
    history.push("/search");
  }
  function products(){
    history.push("/products")
  }
  function profile(){
    history.push("/account")
  }

  return (
    <Fragment>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "11" }}
        open={open}
        direction="down"
        className={user==null&&window.innerWidth>998?"speedDial hide":"speedDial"}
        icon={
          <img
            className="speedDialIcon" 
            src={user?.avatar?.url ? user.avatar.url : "/Profile.png"}
            alt="Profile"
          />
        }
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth <= 600 ? true : false}
            
          />
        ))}
      </SpeedDial>
    </Fragment>
  );
};

export default UserOptions;
