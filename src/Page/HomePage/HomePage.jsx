import React, { Fragment, useEffect, useRef, useState } from "react";
import styled from "./HomePage.module.css";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import Carousel from "react-bootstrap/Carousel";
import cro1 from "../../assets/images/slider-main/h-4/Huawei-P20-Pro.jpg";
import cro2 from "../../assets/images/slider-main/h-4/iphone-12.png";
import cro3 from "../../assets/images/slider-main/h-4/samsung_galaxy_note_20-ultra.jpg";
import photo from "../../assets/images/adplacement/a-8.jpg";
import photo2 from "../../assets/images/adplacement/a-4.jpg";
import photo3 from "../../assets/images/adplacement/a-5.jpg";
import photo4 from "../../assets/images/adplacement/a-6.jpg";
import photo5 from "../../assets/images/adplacement/a-7.jpg";
import photo6 from "../../assets/images/adplacement/a-12.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import CardProduct from "../../components/Card/CardProduct";
import axios from "axios";
import { Link } from "react-router-dom";
import { Product } from "../Product/Product";

export const HomePage = (props) => {
  const [mobile, setMobile] = useState([]);
  const [laptop, setLaptop] = useState([]);
  const [camera, setCamera] = useState([]);
  const [user ,setUser] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3003/product?leader=گوشی موبایل")
      .then((response) => {
        setMobile(response.data);
      });
    axios
      .get("http://localhost:3003/product?leader=لپ تاپ")
      .then((response) => {
        setLaptop(response.data);
      });
    axios
      .get("http://localhost:3003/product?leader=دوربین")
      .then((response) => {
        setCamera(response.data);
      });
  }, []);

  const handleProduct =  (Id) => {
   localStorage.setItem("user" , JSON.stringify([Id]));

  };

  return (
    <Fragment>
      <Header />

      <div className={styled.body}>
        <div className={styled.Carousel}>
          <Carousel>
            <Carousel.Item interval={100}>
              <img
                className="d-block w-100 rounded"
                src={cro1}
                alt="First slide"
                height={400}
              />
              <Carousel.Caption>
                <h1 className="text-white">
                  هواوی پی 20 پرو 128 گیگابایت – دو سیم کارت
                </h1>
                <p>Apple iPhone Pro Max 12 - 256GB - Dual SIM</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100 rounded"
                src={cro2}
                alt="Second slide"
                height={400}
              />
              <Carousel.Caption>
                <h1 className="text-white">
                  ... اپل آیفون پرو مکس 12 - 256 گیگابایت
                </h1>
                <p>Apple iPhone Pro Max 12 - 256GB - Dual SIM</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded"
                src={cro3}
                alt="Third slide"
                height={400}
              />
              <Carousel.Caption>
                <h1 className="text-white">
                  سامسونگ گلگسی نوت 20 آلترا - 512 گیگابایت
                </h1>
                <p>Sumsung Galaxy Note 20 Ultra - 512GB - Dual SIM</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className={styled.photo}>
          <img src={photo} alt="img" className="w-100 mt-4 rounded" />
        </div>
        <div className={styled.sliders}>
          <div className={styled.Caption}>
            <div className={styled.link}>
              <Link to="/ListProductMobile">گوشی موبایل</Link>
            </div>
          </div>
          <div className={styled.scrol}>
            {mobile.map((item) => {
              return (
                <>
                  <CardProduct
                    image={`http://localhost:3003/files/${item.image[0]}`}
                    name={item.name}
                    section={item.section}
                    handleProduct={() => {
                      handleProduct(item);
                    }}
                  />
                </>
              );
            })}
          </div>
        </div>
        <div className={styled.carpor}>
          <img src={photo2} alt="img" className={styled.photoUrl} />
          <img src={photo3} alt="img" className={styled.photoUrl} />
          <img src={photo4} alt="img" className={styled.photoUrl} />
          <img src={photo5} alt="img" className={styled.photoUrl} />
        </div>
        <div className={styled.sliders}>
          <div className={styled.Caption}>
            <div className={styled.link}>
              <Link to="/ListProductLaptop">لپ تاپ</Link>
            </div>
          </div>
          <div className={styled.scrol}>
            {laptop.map((item) => {
              return (
                <>
                  <CardProduct
                    image={`http://localhost:3003/files/${item.image[0]}`}
                    name={item.name}
                    section={item.section}
                    handleProduct={() => {
                      handleProduct(item);
                    }}
                  />
                </>
              );
            })}
          </div>
        </div>
        <div className={styled.axios}>
          <img src={photo6} alt="app" className={styled.imgurl} />
        </div>
        <div className={styled.sliders}>
          <div className={styled.Caption}>
            <div className={styled.link}>
              <Link to="/ListProductCamera">دوربین</Link>
            </div>
          </div>
          <div className={styled.scrol}>
            {camera.map((item) => {
              return (
                <>
                  <CardProduct
                    image={`http://localhost:3003/files/${item.image[0]}`}
                    name={item.name}
                    section={item.section}
                    handleProduct={() => {
                      handleProduct(item);
                    }}
                  />
                </>
              );
            })}
          </div>
        </div>
        {/* <div className={styled.position}>
            <Product Item={user}/>
        </div> */}
      </div>
      <Footer />
    </Fragment>
  );
};
