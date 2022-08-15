import React, { Fragment, useEffect, useRef, useState } from "react";
import styled from "./HomePage.module.css";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import Carousel from "react-bootstrap/Carousel";
import cro1 from "../../assets/images/slider-main/h-4/Huawei-P20-Pro.jpg";
import cro2 from "../../assets/images/slider-main/h-4/iphone-12.png";
import cro3 from "../../assets/images/slider-main/h-4/samsung_galaxy_note_20-ultra.jpg";
import photo from "../../assets/images/adplacement/a-8.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export const HomePage = () => {
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
                <h1 className="text-white">هواوی پی 20 پرو 128 گیگابایت – دو سیم کارت</h1>
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
                <h1 className="text-white">... اپل آیفون پرو مکس 12 - 256 گیگابایت</h1>
                <p>
                Apple iPhone Pro Max 12 - 256GB - Dual SIM
                </p>
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
                <h1 className="text-white">سامسونگ گلگسی نوت 20 آلترا - 512 گیگابایت</h1>
                <p>
                Sumsung Galaxy Note 20 Ultra - 512GB - Dual SIM
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className={styled.photo}>
          <img src={photo} alt="img" className="w-100 mt-4 rounded"/>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
