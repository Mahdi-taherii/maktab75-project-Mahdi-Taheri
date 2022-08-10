import React, { Fragment } from "react";
import styled from "./OrderManagement.module.css";
import HeaderAdmin from "../../layout/HeaderAdmin/HeaderAdmin";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const OrderManagement = () => {
  const [User, setUser] = useState([]);
  const [Image , setImage] = useState();
 useEffect(()=>{
    axios.get("http://localhost:3003/Orders").then(function(response) {
        setUser(response.data);
      });
 },[])
 const uploadImage = (e) => {
  let file = e.target.files[0];

  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (e) => {
    setImage({
      image: e.target.result
    });
    axios.post('http://localhost:3003/Image',Image)
  };
};

  const handleOrder =(id) =>{
      
  }

  return (
    <Fragment>
      <HeaderAdmin cart={{ background: "rgb(93, 93, 250)" }} />
      <div className="d-flex ">
        <h1>مدریت سفارش ها</h1>
        <div className="mr-6">
        <label htmlFor="order">سفارش های تحویل شده</label>
        <input type="radio" checked/>
        </div>
       <div>
       <label htmlFor="orders">سفارش های در انتضار ارسال</label>
        <input type="radio" />
       </div>
      </div>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>نام کاربری</th>
            <th>مجموع مبلغ</th>
            <th>زمان ثبت سفارش</th>
            <th>بررسی</th>
          </tr>
        </thead>
        <tbody>
          {User.map((item) => {
            return (
              <>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.section}</td>
                  <td>{item.time}</td>
                  <td onClick={handleOrder(item.id)}>بررسی سفارش</td>
                </tr>
              </>
            );
          })}
        </tbody>
       
      </Table>
    </Fragment>
  );
};
