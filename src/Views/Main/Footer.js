import React from "react";
import Separator from "../../Components/SeparatorLine";

export default function Function()
{
    return (
        <footer className="bg-dark-3 fixed-bottom">
            <Separator />
            <div className="d-flex p-1">
                <h5 className="c-light-2 m-auto">contact@magikusstudios.com</h5>
                <a href="/#/aboutUs" className="c-light-2 m-auto t-dec-none c-light-4-h"><h5 className="m-auto">About Us</h5></a>
            </div>
        </footer>
    );
}