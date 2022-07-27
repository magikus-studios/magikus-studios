import React from "react";
import Label from "Assets/Magikus - Label with Logo (512).png";

export default function Function() {
    return (
        <header className="bg-dark-30">
            <div className="d-flex container justify-content-center">
                <a href="/" className="w-35 w-sm-50 p-3"><img src={Label} alt="" className="img-fluid" /></a>
            </div>
        </header>
    );
}