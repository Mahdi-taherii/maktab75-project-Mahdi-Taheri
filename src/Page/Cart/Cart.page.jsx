import Header from "../../layout/Header/Header";
import React, { Fragment } from "react";
import Footer from "../../layout/Footer/Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "./Cart.module.css";

export const Cart = (props) => {
  return (
    <Fragment>
      <Header />
      <h1>سبد خرید</h1>
      
      <Footer />
    </Fragment>
  );
};

export default Cart;
