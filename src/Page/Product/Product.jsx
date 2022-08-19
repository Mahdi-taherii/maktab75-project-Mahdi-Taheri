import React, { Fragment, useEffect, useState } from "react";
import styled from "./Product.module.css";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import logo from "../../assets/images/page-single-product/contact-us.svg"
import logo2 from "../../assets/images/page-single-product/delivery.svg"
import logo3 from "../../assets/images/page-single-product/origin-guarantee.svg"
import logo4 from "../../assets/images/page-single-product/payment-terms.svg"
import logo5 from "../../assets/images/page-single-product/return-policy.svg"
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import axios from "axios";

export const Product = (props) => {
  const [number , setNumber] = useState([])
  const [user, setUser] = useState([]);


  useEffect( ()=>{
    const res =  JSON.parse(localStorage.getItem("user"));
    setUser(res)
  },[user])
  

  return (
    <Fragment>
      <Header />
      <div>
        {user.map((item) => {
          return (
            <>
              <div className="p-3">
                <i className="fas fa-home"></i>/ خانه / {item.group} /{" "}
                {item.leader} / {item.name}
              </div>
              <div>
                <div className={styled.divProduct}>
                  <div className={styled.imageProduct}>
                    <Fade>
                      {item.image.map((value, index) => {
                        return (
                          <>
                            <img
                              src={`http://localhost:3003/files/${value}`}
                             className={styled.imageSlider}
                              key={index}
                            />
                          </>
                        );
                      })}
                    </Fade>
                  </div>
                  <div className={styled.nameProduct}>
                    <div className="p-3">{item.name}</div>
                    <div className="p-3">
                      دسته : {item.group} , {item.leader}
                    </div>
                    <div className={styled.section}>
                      <div className={styled.description}>
                        <div className="d-flex p-3">
                          رنگ بندی : <label htmlFor="blue" className="p-1">آبی</label>
                          <input type="radio" id="blue" name="ali" />
                          <label htmlFor="red" className="p-1">قرمز</label>{" "} 
                          <input type="radio" id="red" name="ali" />
                          <label htmlFor="black" className="p-1">مشکی</label>{" "}
                          <input type="radio" id="black" name="ali" />
                        </div>
                        <div><h3>ویژگی های محصول</h3></div>
                        <div>
                          <ul>
                            <li>فناوری صحفه نمایش : Dynamic AMOLED 2X</li>
                            <li>اندازه : 6.8</li>
                            <li>شبکه های ارتباطی : 3G 4G 5G</li>
                            <li>حافظه داخلی : 256 گیگابایت</li>
                            <li>نسخه سیستم عامل : Android 11</li>
                          </ul>
                        </div>
                      </div>
                      <div className={styled.boxSection}>
                          <div className={styled.div1}>
                            <h3>فروشنده : </h3>
                            <h3>دیجی اسمارت</h3>
                          </div>
                          <div className={styled.div2}>
                            <h3>گارانتی :</h3>
                            <h3>18ماهه دیجی اسمارت</h3>
                          </div>
                          <div className={styled.div3}>
                            <h3>قیمت : </h3>
                            <h3 className="text-danger">{item.section}تومان</h3>
                          </div>
                          <div className={styled.div4}>
                            <h3>تعداد : </h3>
                            <input type="number"  max={item.inventory} min={1} defaultValue={1}/>
                          </div>
                          <div className={styled.div5}>
                            <button className={styled.btn}>افزودن به سبد خرید</button>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className={styled.footer}>
                      <div className={styled.svg}><img src={logo2} alt="logo"  width={60}/><p>امکان تحویل<br /> اکسپرس</p></div>
                      <div className={styled.svg}><img src={logo} alt="logo" width={60} /><p>هفت روز هفته <br /> 24ساعته</p></div>
                      <div className={styled.svg}><img src={logo4} alt="logo" width={60} /><p>امکان <br /> پرداخت درمحل</p></div>
                      <div className={styled.svg}><img src={logo5} alt="logo" width={60} /><p>هفت روز ضمانت بازگشت <br /> کالا</p></div>
                      <div className={styled.svg}><img src={logo3} alt="logo" width={60} />ضمانت <br /> اصل بودن کالا</div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <Footer />
    </Fragment>
  );
};
