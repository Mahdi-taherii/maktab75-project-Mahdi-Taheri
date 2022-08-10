import React, { Fragment, useEffect, useState } from "react";
import styled from "./HomePage.module.css";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import Carousel from "react-bootstrap/Carousel";
import cro1 from "../../assets/images/slider-main/sm-1.jpg";
import cro2 from "../../assets/images/slider-main/sm-2.jpg";
import cro3 from "../../assets/images/slider-main/sm-5.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export const HomePage = () => {

  const handleClick = () =>{
    axios({
      method: 'post',
      url: 'http://localhost:3003/product',
      data: {
        id: 4,
        name : "سامسونگ a20",
        section : 250
      }
    });
  }

  

  return (
    <Fragment>
      <Header />

      <div>
        <div className={styled.Carousel}>
          <Carousel>
            <Carousel.Item interval={100}>
              <img className="d-block w-100" src={cro1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img className="d-block w-100" src={cro2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={cro3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className={styled.Carousel2}></div>
      </div>
      <Footer />
      <div>
        <button onClick={handleClick}>submit</button>
      </div>
    </Fragment>
  );
}


