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
  const [Section, setSection] = useState();
  const [Inventory, setinvertory] = useState();
  const [idpro, setidpro] = useState();
  const [Data , setData ] = useState()
  const [refresh , setrefresh] = useState(false)
  useEffect(() => {
    axios
      .get(`http://localhost:3003/Product?_page=${Page}&_limit=5`)
      .then((response) => {
        setProduct(response.data);
      });
    axios.get(`http://localhost:3003/Product`).then((response) => {
      setPagin(response.data);
    });
  }, [Page,refresh]);

  useEffect(() => {
    const Pagination = [];
    for (let i = 1; i < Pagin.length / 5 + 1; i++) {
      Pagination.push(i);
    }
    setbtn(Pagination);
  }, [Pagin]);

  const hendleNext = () => {
    if (Page < btn.length) {
      setPage(Page + 1);
    }
    return;
  };

  const handlePrev = () => {
    if (Page >= 1) {
      setPage(Page - 1);
    }
    return;
  };
  const handleList = (id)=>{
    setidpro(id)
    const res = Product.filter(item=>{
      return  item.id === id;
    })
    const List = {
      image: res[0].image,
      name: res[0].name,
      group: res[0].group,
      leader: res[0].leader ,
      Description: res[0].Description,
      section:Section ,
      inventory: Inventory,
      date: res[0].date,
    };
    setData(List)
  }
  const handleEdit = () => {
    axios.put(`http://localhost:3003/product/${idpro}`, Data);
    setrefresh(!refresh)
  };

  return (
    <Fragment>
      <HeaderAdmin number={{ background: "rgb(93, 93, 250)" }} />
      <div className="d-flex p-2">
        <h1 className="col-11">مدریت موجودی و قیمت ها</h1>
        <ButtonSend
          color={"success"}
          disabled={!Section && !Inventory}
          onClick={handleEdit}
        >
          ذخیره
        </ButtonSend>
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
                  <td>
                    <input
                      type="text"
                      defaultValue={item.section}
                      onClick={() => {
                        handleList(item.id);
                      }}
                      className={styled.inputsec}
                      onChange={(e) => {
                        setSection(e.target.value);
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      defaultValue={item.inventory}
                      onClick={() => {
                        handleList(item.id);
                      }}
                      className={styled.inputsec}
                      onChange={(e) => {
                        setinvertory(e.target.value);
                      }}
                    />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
      <div>
        <Pagination>
          <Pagination.Item onClick={hendleNext}>Next</Pagination.Item>
          {btn.map((item) => {
            return (
              <>
                <Pagination.Item key={item} onClick={() => setPage(item)}>
                  {item}
                </Pagination.Item>
              </>
            );
          })}
          <Pagination.Item onClick={handlePrev}>prev</Pagination.Item>
        </Pagination>
      </div>
    </Fragment>
  );
};
