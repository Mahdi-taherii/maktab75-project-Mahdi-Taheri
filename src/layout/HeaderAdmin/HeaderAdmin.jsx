import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import styled from "./HeaderAdmin.module.css"

function HeaderAdmin(props) {
    return ( 
        <header className={styled.header}>
            <div className={styled.logoAdmin}><img src={logo} alt="logo" /><p className="panel">پنل مدریت فروشگاه</p></div>
            <div className={styled.page}>
                <div className={styled.productss} style={props.product}><Link to="/Management">کالا ها </Link></div>
                <div className={styled.numberr} style={props.number}><Link to="/Prices">موجودی و قیمت ها</Link></div>
                <div className={styled.cartt} style={props.cart}><Link to="/Order">سفارش ها</Link></div>
            </div>
            <div className={styled.ejectHome}><Link to="/HomePage">بازگشت به سایت</Link></div>
        </header>
     );
}

export default HeaderAdmin;