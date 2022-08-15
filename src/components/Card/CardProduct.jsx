import React from "react";
import styled from "./CardProduct.module.css";

const CardProduct = (props) => {
  return (
    <div className={styled.card}>
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
  );
};
export default CardProduct;
