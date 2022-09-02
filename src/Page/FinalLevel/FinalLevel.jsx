import Header from "../../layout/Header/Header";
import React, { Fragment } from "react";
import styled from "./FinalLevel.module.css";
import Footer from "../../layout/Footer/Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { object } from "yup";

export const FinalLevel = () => {

  const navigate =useNavigate()
 
 const handleSend = ()=>{
  // navigate("/Gateway")
 }
 const handleForm = (e)=>{
  e.preventDefault();
  const form = new FormData(e.target);
  const data = Object.formEntries(form);

  

 }

  return (
    <Fragment>
      <Header />
      <h1>نهایی کردن خرید</h1>
      <div className={styled.divForm}>
        <Form onSubmit={handleForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>نام :</Form.Label>
            <Form.Control type="text" name="name"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>نام خوانوادگی : </Form.Label>
            <Form.Control type="text" name="family" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>آدرس : </Form.Label>
            <Form.Control type="text"  name="address"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>تلفن همراه : </Form.Label>
            <Form.Control type="text" name="phone"/>
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
