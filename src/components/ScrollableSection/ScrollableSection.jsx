import { useState } from "react";
import { useEffect } from "react";
import "./ScrollableSection.css";


export const ScrollableSection = ({ children }) => {

    return (

        <div className="scroll-container" >
            {children}


        </div >
    );
};