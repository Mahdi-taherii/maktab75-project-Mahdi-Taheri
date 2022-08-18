import React from "react";
import { Link } from "react-router-dom";
import styled from "./CardProduct.module.css";

const CardProduct = (props) => {
  return (
   <Link to="/Product">
    <div className={styled.card} onClick={()=>props.handleProduct()}>
      <div className={styled.photo}>
          <img src={props.image} alt="image"  width={220} height={200}/>
      </div>
      <div className={styled.name}>
          {props.name}
      </div>
      <div className={styled.section}>
            {props.section}تومان
      </div>
    </div>
   </Link>
  );
};
export default CardProduct;
