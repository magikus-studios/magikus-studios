import React from "react";

export default function Function() {
    return (
        <header className="bg-dark-43 p-2">
            <div className="d-inline-flex container-fluid row">
                <div className="col-md-3 col-sm-12 align-self-center text-center">
                    <a href="/">
                        <img src="images/Assets/Magikus - Label with Logo (512).png" alt="" className=".img-center" height={70} />
                    </a>
                </div>
                <div className="col-md-6 align-self-center d-none d-md-block">
                    <div className="text-center c-light-2">
                        <h1 className="ft-primary">Magikus Studios</h1>
                        <h2 className="ts-i c-light-4 fs-lg ft-secondary">Crafting Games and Tools that Inspire</h2>
                    </div>               
                </div>
                <div className="col-md-3 align-self-center d-none d-xl-block">
                    <div className="text-center">
                        <h3 className="ts-i c-light-3 fs-md ft-secondary">A passionate game designer exploring new ideas and approaches to game development</h3>
                    </div>
                </div>
            </div>
        </header>
    );
}