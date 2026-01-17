import React from "react";

export default function Function()
{
    let scrollUp = () => { window.scrollTo({ top: 0, behavior: "smooth" }); }

    return (
        <footer className="fixed-bottom hg-70">
            <div className="ground-container">
                <div className="ground"></div>
            </div>
            <div className="container-fluid row text-center hg-100">
                <div className="col-3 align-self-center">
                    <a href="/#/about" className="c-light-2 t-dec-none c-light-3-h"><h5 className="m-auto f-left">About</h5></a>
                </div>
                <div className="col-6 align-self-center">
                    <h6 className="c-light-2 m-auto fs-sm">contact@magikusstudios.com</h6>
                </div>
                <div className="col-3 align-self-center">
                    <a className="c-light-2 t-dec-none c-light-3-h" onClick={() => { scrollUp() }}><h3 className="m-auto f-right">▲</h3></a>
                </div>
            </div>
        </footer>
    );
}