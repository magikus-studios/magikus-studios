import React from "react";
import Label from "Assets/Magikus - Label with Logo (512).png";

export default function Function() {
    return (
        <header className="bg-dark-43 p-2">
            <div className="d-inline-flex container-fluid row">
                <div className="col-md-2 col-sm-12 align-self-center text-center">
                    <a href="/">
                        <img src={Label} alt="" className=".img-center" height={70}/>
                    </a>
                </div>
                <div className="col-md-8 align-self-center d-none d-md-block">
                    <div className="text-center c-light-2">
                        <h1 className="">Magikus Studios</h1>
                        <h2 className="ts-i c-light-3 fs-lg">Crafting games and tools that inspire</h2>
                    </div>               
                </div>
                <div className="col-md-2 align-self-center d-none d-xl-block">
                    <div className="text-center">
                        <h3 className="ts-i c-light-3 fs-md">A passionate game designer exploring new ideas and approaches to game development</h3>
                    </div>
                </div>
            </div>
        </header>
    );
}