import React, { Fragment } from "react";
import styled from "./OrderManagement.module.css";
import HeaderAdmin from "../../layout/HeaderAdmin/HeaderAdmin";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Pagination from 'react-bootstrap/Pagination';

export const OrderManagement = () => {
  const [User, setUser] = useState([]);
  const [Pagin, setPagi] = useState([]);
  const [Page, setPage] = useState(1);
  const [btn, setbtn] = useState([]);
  
 useEffect(()=>{
    axios.get(`http://localhost:3003/Orders?_page=${Page}&_limit=5`).then(function(response) {
        setUser(response.data);
      });
      axios.get(`http://localhost:3003/Orders`).then(function(response) {
        setPagi(response.data);
      });
 },[Page])

 useEffect(() => {
  const Pagination = [];
  for (let i = 1; i < Pagin.length / 5 + 1; i++) {
    Pagination.push(i);
    console.log(Pagination);
  }
  setbtn(Pagination);
}, [Pagin]);

const hendleNext = () =>{
  if (Page < btn.length) {
    setPage(Page+1)
  }
  return
}

const handlePrev = ()=>{
  if (Page >= 1) {
    setPage(Page-1)
  }
  return
}

const waiting = () =>{
  axios.get(`http://localhost:3003/Orders?Delivery=true`)
  .then((response)=>{
    setUser(response.data)
  })
}
const confirmation = () =>{
  axios.get(`http://localhost:3003/Orders?Delivery=false`)
  .then((response)=>{
    setUser(response.data)
  })
}

  const handleOrder =(id) =>{
      
  }

  return (
    <Fragment>
      <HeaderAdmin cart={{ background: "rgb(93, 93, 250)" }} />
      <div className="d-flex">
        <h1 className="col-8">مدریت سفارش ها</h1>
        <div className="col-2">
        <label htmlFor="order">سفارش های تحویل شده</label>
        <input type="radio" name="radio" onClick={waiting}/>
        </div>
       <div className="col-2">
       <label htmlFor="orders">سفارش های در انتضار ارسال</label>
        <input type="radio" name="radio" onClick={confirmation}/>
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
      <div >
        <Pagination>
        <Pagination.Item onClick={hendleNext}>Next</Pagination.Item>
          {btn.map((item) => {
            return (
              <>
                <Pagination.Item key={item} onClick={()=>setPage(item)}>{item}</Pagination.Item>
              </>
            );
          })}
          <Pagination.Item  onClick={handlePrev}>prev</Pagination.Item>
       </Pagination>
       </div>
    </Fragment>
  );
};
