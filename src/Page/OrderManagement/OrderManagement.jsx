import React, { Fragment } from "react";
import styled from "./OrderManagement.module.css";
import HeaderAdmin from "../../layout/HeaderAdmin/HeaderAdmin";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { isEditable } from "@testing-library/user-event/dist/utils";

export const OrderManagement = () => {
  const [User, setUser] = useState([]);
  const [Pagin, setPagi] = useState([]);
  const [Page, setPage] = useState(1);
  const [btn, setbtn] = useState([]);
  const [Modol, setModol] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3003/Orders?_page=${Page}&_limit=5`)
      .then(function (response) {
        setUser(response.data);
      });
    axios.get(`http://localhost:3003/Orders`).then(function (response) {
      setPagi(response.data);
    });
  }, [Page]);

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

  const waiting = () => {
    axios.get(`http://localhost:3003/Orders?Delivery=true`).then((response) => {
      setUser(response.data);
    });
  };
  const confirmation = () => {
    axios
      .get(`http://localhost:3003/Orders?Delivery=false`)
      .then((response) => {
        setUser(response.data);
      });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOrder = (id) => {
    const modal = User.filter((item) => {
      return item.id === id;
    });
    setModol(modal);
    console.log(modal);
    handleShow();
  };
  const handleDelivery = (id) =>{
    axios.put(`http://localhost:3003/Orders?_id=${id}`,{
      Delivery : true
    })
      console.log(id);
      handleClose()
  }

  return (
    <Fragment>
      <HeaderAdmin cart={{ background: "rgb(93, 93, 250)" }} />
      <div className="d-flex">
        <h1 className="col-8">?????????? ?????????? ????</h1>
        <div className="col-2">
          <label htmlFor="order">?????????? ?????? ?????????? ??????</label>
          <input type="radio" name="radio" id="order" onClick={waiting} />
        </div>
        <div className="col-2">
          <label htmlFor="orders">?????????? ?????? ???? ???????????? ??????????</label>
          <input type="radio" name="radio" id="orders" onClick={confirmation} />
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>?????? ????????????</th>
            <th>?????????? ????????</th>
            <th>???????? ?????? ??????????</th>
            <th>??????????</th>
          </tr>
        </thead>
        <tbody>
          {User.map((item) => {
            var res = 0;
            item.products.map((value) => {
              res += value.section * value.quantity;
            });
            return (
              <>
                <tr>
                  <td>{`${item.name} ${item.family}`}</td>
                  <td>{res}??????????</td>
                  <td>{item.time}</td>
                  <td
                    onClick={() => handleOrder(item.id)}
                    className="text-primary"
                  >
                    ?????????? ??????????
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
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="ms-5">?????????? ??????????</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {Modol.map((item) => {
              var car = 0;
              return (
                <>
                  <div> ?????? ?????????? : {`${item.name} ${item.family}`}</div>
                  <div>???????? : {item.address}</div>
                  <div> ???????? : {item.phone}</div>
                  <div>???????? ?????????? : {item.time}</div>
                  <div>???????? ?????????? : {item.deliveryDate}</div>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>????????</th>
                        <th>????????</th>
                        <th>??????????</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.products.map((value) => {
                        car += value.section * value.quantity;
                        return (
                          <>
                            <tr>
                              <td>{value.name}</td>
                              <td>{value.section}??????????</td>
                              <td>{value.quantity}</td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </Table>
                  <div> ?????????? ???????? : {car} ??????????</div>
                </>
              );
            })}
          </Modal.Body>
          <Modal.Footer>
            {Modol.map((item) => {
              return (
                <>
                  {item.Delivery == false ? (
                    <Button variant="success" onClick={()=>handleDelivery(item.id)}>
                      ?????????? ????
                    </Button>
                  ) : (
                    <div>???????? ?????????? : {item.time}</div>
                  )}
                </>
              );
            })}
          </Modal.Footer>
        </Modal>
      </div>
    </Fragment>
  );
};
