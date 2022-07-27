import React from "react";
import Institutional from "./Institutional";
import Products from "./Products";

export default function Function() {
    return (
        <div className="bg-dark-4 min-vh-100 pb-5 c-light-2">
            <Institutional />
            <div className="container pb-5 mb-5 w-75 c-light-2">
                <Products/>
            </div>
        </div>
    );
}