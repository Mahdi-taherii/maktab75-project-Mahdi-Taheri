import React from "react";
import Button from 'react-bootstrap/Button';

export const ButtonSend = (props) =>{

    return(
        <>
        <Button variant={props.color}>{props.children}</Button>
        </>
    )

}