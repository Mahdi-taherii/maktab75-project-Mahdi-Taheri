import Header from "../../layout/Header/Header";
import React, { Fragment } from "react";
import styled from "./FinalLevel.module.css";
import Footer from "../../layout/Footer/Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export const FinalLevel = () => {

  const navigate =useNavigate()
 
 const handleSend = ()=>{
  navigate("/Gateway")
 }

  return (
    <Fragment>
      <Header />
      <h1>نهایی کردن خرید</h1>
      <div className={styled.divForm}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>نام :</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>نام خوانوادگی : </Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>آدرس : </Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>تلفن همراه : </Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={()=>{handleSend()}}>
            پرداخت
          </Button>
        </Form>
      </div>
      <Footer />
    </Fragment>
  );
};
