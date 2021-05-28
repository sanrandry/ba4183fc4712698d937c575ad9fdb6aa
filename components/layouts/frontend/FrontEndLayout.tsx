import React from 'react'
import FrontEndLayoutNavbar from "./FrontEndLayoutNavbar";
import FrontEndLayoutFooter from "./FrontEndLayoutFooter";

export default function FrontEndLayout(props:any) {
    return (
        <div>
            <FrontEndLayoutNavbar></FrontEndLayoutNavbar>
            {props.children}
            <FrontEndLayoutFooter></FrontEndLayoutFooter>
        </div>
    )
}
