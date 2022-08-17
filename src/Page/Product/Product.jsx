import React, { Fragment, useEffect, useState } from "react";
import styled from "./Product.module.css";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";

export const Product = () => {
  const [user, setUser] = useState([]);
  
  useEffect(()=>{
    const res = [{
      image: [
        "fe321d9e72838be828834121d5468c95",
        "7bec9145206280a507acdabd105d1dc8",
        "fc38907ba040f055924dd523f588fef1",
        "8611a5e3b18ce4c077c3a5e801a1598d",
      ],
      name: "گوشی موبایل هوآوی مدی nova y70",
      group: "کالای دیجیتال",
      leader: "گوشی موبایل",
      Description:
        "<ul><li>فناوری صفحه‌نمایش :Dynamic AMOLED 2X</li><li>اندازه :6.8</li><li>شبکه های ارتباطی :2G، 3G، 4G، 5G</li><li>حافظه داخلی :256 گیگابایت</li><li>نسخه سیستم عامل :Android 11<li/></ul>",
      section: 4450000,
      inventory: 5,
      date: "1401/5/19",
      createdAt: 1660559925360,
      id: 16
    }];
    setUser(res);
  },[])

  return (
    <Fragment>
      <Header />
      <div>
        {user.map(item=>{
          return(
            <>
            <div>
              <i className="fas fa-home"></i>
            </div>
            </>
          )
        })}
      </div>

      <Footer />
    </Fragment>
  );
};
