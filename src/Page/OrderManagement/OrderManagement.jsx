import React, { Fragment } from "react";
import styled from "./OrderManagement.module.css";
import HeaderAdmin from "../../layout/HeaderAdmin/HeaderAdmin";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const OrderManagement = () => {
  const [User, setUser] = useState([]);
 useEffect(()=>{
    axios.get("http://localhost:3003/Order").then(function(response) {
        setUser(response.data);
      });
 },[])
    

  const handleOrder =(id) =>{
      
  }

  return (
    <Fragment>
      <HeaderAdmin cart={{ background: "rgb(93, 93, 250)" }} />
      <Table striped bordered hover>
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
