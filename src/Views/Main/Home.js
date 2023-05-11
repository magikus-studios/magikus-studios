import React from "react";
import Institutional from "./Institutional";
import Products from "./Products";

export default function Function() {
    return (
        <div className="bg-dark-4 h-100 pb-5 c-light-2">           
            <div className="container w-75 h-100">
                <Institutional />
                <Products />
            </div>
        </div>
    );
}