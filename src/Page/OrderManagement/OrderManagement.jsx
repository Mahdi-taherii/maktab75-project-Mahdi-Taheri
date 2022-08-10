import React, { Fragment } from "react";
import styled from "./OrderManagement.module.css";
import HeaderAdmin from "../../layout/HeaderAdmin/HeaderAdmin";

export const OrderManagement = () => {
    return ( 
        <Fragment>
            <HeaderAdmin cart={{background: "rgb(93, 93, 250)" }}/>
            <h1>مدریت سفارش</h1>
        </Fragment>
     );
}

