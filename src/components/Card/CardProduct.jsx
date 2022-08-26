import React from "react";
import { Link } from "react-router-dom";
import styled from "./CardProduct.module.css";

const CardProduct = (props) =>  (
    <div className={styled.card} onClick={()=>props.handleProduct()}>
      <div className={styled.photo}>
          <img src={props.image} alt="image" className={styled.photo}  width={220} height={200}/>
      </div>
      <div className={styled.name}>
          {props.name}
      </div>
      <div className={styled.section}>
            {`${props.section.toLocaleString("en-US")} تومان`}
      </div>
    </div>
  );

export default CardProduct;
