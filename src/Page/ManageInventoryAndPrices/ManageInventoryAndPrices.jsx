import React, { Fragment, useEffect, useState } from "react";
import HeaderAdmin from "../../layout/HeaderAdmin/HeaderAdmin";
import Table from "react-bootstrap/Table";
import styled from "./ManageInventoryAndPrices.module.css";
import axios from "axios";
import { Pagination } from "react-bootstrap";
import { ButtonSend } from "../../components/Button/Button";

export const ManageInventoryAndPrices = () => {
  const [Product, setProduct] = useState([]);
  const [Pagin, setPagin] = useState([]);
  const [Page, setPage] = useState(1);
  const [btn, setbtn] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3003/Product?_page=${Page}&_limit=5`).then((response) => {
      setProduct(response.data);
    });
    axios.get(`http://localhost:3003/Product`).then((response) => {
      setPagin(response.data);
    });
  },[Page]);

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

  return (
    <Fragment>
      <HeaderAdmin number={{ background: "rgb(93, 93, 250)" }} />
      <div className="d-flex p-2">
        <h1 className="col-11">مدریت موجودی و قیمت ها</h1>
        <ButtonSend color={"success"}>ذخیره</ButtonSend>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>کالا</th>
            <th>قیمت</th>
            <th>موجودی</th>
          </tr>
        </thead>
        <tbody>
          {Product.map((item) => {
            return (
              <>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.section}</td>
                  <td>{item.inventory}</td>
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
