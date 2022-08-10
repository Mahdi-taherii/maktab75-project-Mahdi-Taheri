import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "./Login.module.css";

export const LoginAdmin = () => {
  return (
    <Fragment>
      <div class={styled.container}>
        <section id={styled.content}>
          <form action="">
            <h1>ورود به پنل مدریت فروشگاه</h1>
            <div>
              <input
                type="text"
                placeholder="نام کاربری"
                required=""
                id={styled.username}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="رمز عبور"
                required=""
                id={styled.password}
              />
            </div>
            <div>
              <Link to="/Management"><input type="submit" value="ورود" /></Link>
            </div>
          </form>
          <div class={styled.button}>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

