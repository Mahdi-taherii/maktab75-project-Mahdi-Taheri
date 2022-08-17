import React, { Fragment, useEffect, useState } from "react";
import styled from "./ListProductLaptop.module.css";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import axios from "axios";
import CardProduct from "../../components/Card/CardProduct";
import { Link } from "react-router-dom";

export const ListProductLaptop = () => {
  const [laptop, setLaptop] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3003/product?leader=لپ تاپ").then((response) => {
      setLaptop(response.data);
    });
  }, []);

  return (
    <Fragment>
      <Header />
      <div className={styled.boxphoto}>
        <div className={styled.Fragment}>
          <i className="fas fa-home"></i>
          /آرشیو محصولات
        </div>
        <div className={styled.boxdash}>
          <div className={styled.navbar}>
            <div className={styled.order}>
              <h3>دسته بندی محصولات</h3>
              <div>
                <input type="checkbox" />
                <label htmlFor="" className={styled.pading}>
                  همه
                </label>
              </div>
              <div>
                <Link to="/ListProductMobile">
                <input type="checkbox" />
                <label htmlFor="" className={styled.pading}>
                  گوشی موبایل
                </label>
                </Link>
              </div>
              <div>
                <Link to="/ListProductLaptop">
                <input type="checkbox" />
                <label htmlFor="" className={styled.pading}>
                  لپ تاپ
                </label>
                </Link>
              </div>
              <div>
                <Link to="/ListProductCamera">
                <input type="checkbox" />
                <label htmlFor="" className={styled.pading}>
                  دوربین
                </label>
                </Link>
              </div>
            </div>
            <div className={styled.brand}>
              <h3>برند ها</h3>
              <div>
                <input type="checkbox" />
                <label htmlFor="" className={styled.pading}>
                  سامسونگ
                </label>
              </div>
              <div>
                <input type="checkbox" />
                <label htmlFor="" className={styled.pading}>
                  اپل
                </label>
              </div>
              <div>
                <input type="checkbox" />
                <label htmlFor="" className={styled.pading}>
                  نوکیا
                </label>
              </div>
              <div>
                <input type="checkbox" />
                <label htmlFor="" className={styled.pading}>
                  هواوی
                </label>
              </div>
              <div>
                <input type="checkbox" />
                <label htmlFor="" className={styled.pading}>
                  شیاومی
                </label>
              </div>
              <div>
                <input type="checkbox" />
                <label htmlFor="" className={styled.pading}>
                  ال جی
                </label>
              </div>
            </div>
          </div>
          <div className={styled.listproduct}>
            <div className={styled.arshive}>
              <h3>آرشیو محصولات</h3>
              <div className={styled.filterPro}>
                مرتب سازی بر اساس :
                <ul className="d-flex ">
                  <li>پربازدید ترین</li>
                  <li>پرفروش ترین</li>
                  <li>محبوب ترین</li>
                  <li>جدید ترین</li>
                  <li>ارزان ترین</li>
                  <li>گران ترین</li>
                </ul>
              </div>
            </div>
            <div className={styled.cardList}>
              {laptop.map((item) => {
                return (
                  <>
                    <CardProduct
                      image={`http://localhost:3003/files/${item.image[0]}`}
                      name={item.name}
                      section={item.section}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
