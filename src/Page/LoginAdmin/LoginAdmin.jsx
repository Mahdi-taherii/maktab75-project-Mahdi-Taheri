import axios from "axios";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import styled from "./Login.module.css";

export const LoginAdmin = () => {
  const [emailValue , setEmailValue] = useState('');
  const [passwordValue , setPasswordValue] = useState();
  const [login , setLogin] = useState();

  const Data ={
    username: emailValue,
    password : passwordValue
  }

 const onLogInClicked =()=>{
      axios({
      method: 'post',
      url: 'http://localhost:3003/auth/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : Data
    })
      .then((response)=>{
        setLogin(response.data)
      })
 }

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
                onChange={(e)=>setEmailValue(e.target.value)}
                required=""
                id={styled.username}
              />
              {!emailValue ? <p className="text-danger">لطفا فیلد مورد نظر را پر کنید</p> : <p></p>}
            </div>
            <div>
              <input
                type="password"
                placeholder="رمز عبور"
                value={passwordValue}
                onChange={(e)=>setPasswordValue(e.target.value)}
                required=""
                id={styled.password}
              />
              {!passwordValue ? <p className="text-danger">لطفا فیلد مورد نظر را پر کنید</p> : <p></p>}
            </div>
            <div>
              <Link to="/Management"><input type="submit" onClick={onLogInClicked} disabled={!emailValue || !passwordValue} value="ورود" /> </Link>
            </div>
          </form>
          <div className={styled.button}>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

