import React, { Fragment } from "react";
import styled from "./ListProduct.module.css";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";


export const ListProduct=()=> {
    return ( 
        <Fragment>
            <Header/>
                <h1>لیست محصول ها</h1>
            <Footer/>
        </Fragment>
     );
}

