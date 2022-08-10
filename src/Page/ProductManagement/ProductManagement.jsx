import React, { Fragment, useEffect, useState } from "react";
import HeaderAdmin from "../../layout/HeaderAdmin/HeaderAdmin";
import Table from "react-bootstrap/Table";
import axios from "axios";
import del from "../../assets/images/icons8-delete-64.png"
import edit from "../../assets/images/icons8-edit-64.png"


export const ProductManagement = () => {
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3003/Product").then((response) => {
      setProduct(response.data);
    });
  });

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
                  <td><img src={item.image} alt="image" width={35}/></td>
                  <td>{item.name}</td>
                  <td>{`${item.group}/${item.leader}`}</td>
                  <td><img src={edit} alt="edit" width={30}/></td>
                  <td><img src={del} alt="del" width={30}/></td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </Fragment>
  );
};
