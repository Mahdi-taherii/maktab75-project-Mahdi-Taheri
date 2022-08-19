import axios from "axios";
import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "./Login.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LoginAdmin = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState();
  const [login, setLogin] = useState();
  let navigate = useNavigate();
  const notify = () => toast.error("رمز اشتاه است ");
  const totify = () => toast.success("خوش امدید ")

  const Data = {
    username: emailValue,
    password: passwordValue,
  };

  const onLogInClicked =async () => {
    const response = await axios.post("http://localhost:3003/auth/login",Data)
      .then((res) => {
       localStorage.setItem("TOKEN", JSON.stringify(res.data.token));
       setTimeout(() => {
        navigate("/Management");
       }, 1000);
       totify()
      })
      .catch((err) => {
        notify();
        localStorage.clear()
      });
  };

  return (
    <Fragment>
      <div className={styled.container}>
        <section id={styled.content}>
          <form action="">
            <h1>ورود به پنل مدریت فروشگاه</h1>
            <div>
              <input
                type="text"
                placeholder="نام کاربری"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                required=""
                id={styled.username}
              />
              {!emailValue ? (
                <p className="text-danger">لطفا فیلد مورد نظر را پر کنید</p>
              ) : (
                <p></p>
              )}
            </div>
            <div>
              <input
                type="password"
                placeholder="رمز عبور"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                required=""
                id={styled.password}
              />
              {!passwordValue ? (
                <p className="text-danger">لطفا فیلد مورد نظر را پر کنید</p>
              ) : (
                <p></p>
              )}
            </div>
            <div>
              <input
                type="button"
                onClick={onLogInClicked}
                disabled={!emailValue || !passwordValue}
                value="ورود"
              />
            </div>
          </form>
          <div className={styled.button}></div>
        </section>
        <ToastContainer />
      </div>
    </Fragment>
  );
};
