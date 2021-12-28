import React from "react";
import Menu from "./Menu";
import Items from "./Items";
import Cart from "./Cart";
import { Row, Col, Navbar } from "react-bootstrap";

export default function Layout() {
  return (
    <div className="grid-layout">
      <div className="grid-menu-heading"><h3>Menu</h3></div>
      <div className="grid-items-heading" ><h3>Items</h3></div>
      <div className="grid-cart-heading"><h3>Cart</h3></div>


      <div className="grid-menu"><Menu /></div>
      <div className="grid-items" ><Items /></div>
      <div className="grid-cart"><Cart /></div>
    </div>
  );
}
