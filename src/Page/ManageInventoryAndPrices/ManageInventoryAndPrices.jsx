import React, { Fragment, useEffect, useState } from "react";
import HeaderAdmin from "../../layout/HeaderAdmin/HeaderAdmin";
import Table from "react-bootstrap/Table";
import styled from "./ManageInventoryAndPrices.module.css";
import axios from "axios";

export const ManageInventoryAndPrices = () => {
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3003/Product").then((response) => {
      setProduct(response.data);
    });
  });

  return (
    <Fragment>
      <HeaderAdmin number={{ background: "rgb(93, 93, 250)" }} />
      <div>
        <h1>مدریت موجودی و قیمت ها</h1>
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
    </Fragment>
  );
};
