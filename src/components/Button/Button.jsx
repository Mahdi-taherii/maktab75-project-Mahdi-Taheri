import React from "react";
import Button from 'react-bootstrap/Button';

export const ButtonSend = (props) =>{

    return(
        <>
        <Button variant={props.color} onClick={props.onClick} disabled={props.disabled}>{props.children}</Button>
        </>
    )

}