import React, { Fragment } from "react";
import HeaderAdmin from "../../layout/HeaderAdmin/HeaderAdmin";

export const ProductManagement = () => {
    return ( 
        <Fragment>
           <HeaderAdmin product={{background: "rgb(93, 93, 250)" }}/>

           <h1>مدریت کالاها</h1> 
        </Fragment>
     );
}

