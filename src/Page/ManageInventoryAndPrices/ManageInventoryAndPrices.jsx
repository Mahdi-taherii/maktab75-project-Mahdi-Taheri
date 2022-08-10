import React, { Fragment } from "react";
import HeaderAdmin from "../../layout/HeaderAdmin/HeaderAdmin";
import styled from "./ManageInventoryAndPrices.module.css";

export const ManageInventoryAndPrices = ()=> {
    return ( 
        <Fragment>
            <HeaderAdmin  number={{background: "rgb(93, 93, 250)" }}/>
            <h1>مدریت موجودی و قیمت ها</h1>

        </Fragment>
     );
}

