import Header from "../../layout/Header/Header";
import React, { Fragment, useContext, useEffect, useState } from "react";
import Footer from "../../layout/Footer/Footer";
import styled from "./Cart.module.css";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { CommonContext } from "../../contexts";

export const Cart = (props) => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const { functions, dataSource, cart } = useContext(CommonContext)

  useEffect(() => {

    setUser(dataSource.Cart);
  }, []);

  const handleResult = () => {
    navigate("/FinalLevel")
  };

  return (
    <Fragment>
      <Header />
      <h1>سبد خرید</h1>
      <div className={styled.Cart}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>نام محصول</th>
              <th>قیمت</th>
              <th>تعداد مورد نیاز</th>
              <th>مجموع</th>
              <th>حذف از سبد</th>
            </tr>
          </thead>
          <tbody>
            {cart.items?.map((item, idx) => {

              const itemFunctions = functions.cart.items(idx)

              return (
                <tr key={idx}>
                  <td>
                    <img
                      src={`http://localhost:3003/files/${item.image[0]}`}
                      alt="img"
                      width={30}
                    />{" "}
                    {item.name}
                  </td>
                  <td>{(~~item.section).toLocaleString("en-US")}</td>
                  <td>
                    <input
                      type="number"
                      max={item.inventory}
                      min={1}
                      value={item.quantity}
                      onChange={({ target: { value } }) => {
                        itemFunctions.update({
                          'quantity': ~~value
                        })
                      }}
                    />
                  </td>
                  <td>{(item.quantity * ~~item.section).toLocaleString("en-US")}</td>
                  <td className="text-center ">
                    <button className="border-0 bg-danger text-white " onClick={() => {
                      itemFunctions.remove()
                    }}>حذف</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div className={styled.order}>
          <h2>مجموع کل سبد خرید</h2>
          <div className={styled.data}>
            <div>قیمت کل : {cart.items.reduce((prev, curr) => 
              (~~prev.section * prev.quantity || 0) + (~~curr.section * curr.quantity)
            ).toLocaleString("en-US")} تومان</div>
            <Button
              variant="primary"
              onClick={() => {
                handleResult();
              }}
            >
              تسویه حساب
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Cart;
