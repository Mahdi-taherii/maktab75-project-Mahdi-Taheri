import React, { Fragment, useEffect, useState } from "react";
import HeaderAdmin from "../../layout/HeaderAdmin/HeaderAdmin";
import Table from "react-bootstrap/Table";
import axios from "axios";
import del from "../../assets/images/icons8-delete-64.png";
import edit from "../../assets/images/icons8-edit-64.png";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";

export const ProductManagement = () => {
  const [Product, setProduct] = useState([]);
  const [Pagin, setPagi] = useState([]);
  const [Page, setPage] = useState(1);
  const [btn, setbtn] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3003/Product?_page=${Page}&_limit=5`)
      .then((response) => {
        setProduct(response.data);
      });
    axios.get("http://localhost:3003/Product").then((response) => {
      setPagi(response.data);
    });
  }, [Page]);

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
      <HeaderAdmin product={{ background: "rgb(93, 93, 250)" }} />
      <h1>مدریت کالاها</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>تصویر</th>
            <th>نام کالا</th>
            <th>دسته بندی</th>
            <th>ویرایش</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>
          {Product.map((item) => {
            return (
              <>
                <tr>
                  <td>
                    <img src={item.image} alt="image" width={35} />
                  </td>
                  <td>{item.name}</td>
                  <td>{`${item.group}/${item.leader}`}</td>
                  <td>
                    <img src={edit} alt="edit" width={30} />
                  </td>
                  <td>
                    <img src={del} alt="del" width={30} />
                  </td>
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
