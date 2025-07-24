import React from "react";
import Products from "Views/Main/Products.json";
import News from "Views/Main/News.json";
import 'CSS/CardBlock.css';

export default function Function() {
    return (
        <div className="container c-light-2 min-vh-100">

            <div className="d-flex justify-content-center align-items-center h-100 pad-bottom-2">
                <div className="justify-content-center newsCardBlock bg-red bg-pattern-newCard col-12">
                    {
                        News.map((card) => {
                            if(card.hide){ return (<div></div>) }
                            else {
                                return (
                                    <div className="container d-flex row">           
                                        <a href={card.link} className="t-dec-none col-12" target={(card.newTab)?"_blank":"_self"}  rel="noopener noreferrer">
                                            <div className="p-1">
                                                <h4 className="c-red text-left mar-bottom-0">{ card.title }</h4>
                                                <p className="c-red text-justify mar-bottom-0">{ card.description }</p>
                                            </div>
                                        </a>
                                    </div>
                                )                        
                            }
                        })
                    }
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center h-100">
                <div className="justify-content-center cardBlock bg-dark-4 bg-pattern-2">
                    {
                        Products.map((card) => {
                            if(card.hide){ return (<div></div>) }
                            else if(!card.news) { 
                                return (
                                    <div className="container d-flex h-100 productBorder">
                                        <div className="row">

                                        <a href={card.link} className="o-hiden col-sm-12 col-md-5 col-lg-4 col-xl-3" target={(card.newTab)?"_blank":"_self"} rel="noopener noreferrer">
                                            <div className="h-100 jumbotron d-flex align-items-center p-2">
                                                <img className="cardBlock-img img-fluid img-border" src={card.image} alt="" />
                                            </div>
                                        </a>
                                        <a href={card.link} className="t-dec-none col-sm-12 col-md-7 col-lg-8 col-xl-9" target={(card.newTab)?"_blank":"_self"} rel="noopener noreferrer">
                                            <div className="p-3">
                                                <h2 className="c-light-2 text-left">{ card.title }</h2>
                                                <p className="c-light-2 text-justify">{ card.description }</p>
                                                <p className="c-light-2 text-justify">{ card.description2 }</p>
                                                <p className="c-light-2 text-justify mar-bottom-2">{ card.description3 }</p>
                                            </div>
                                        </a>
                                        </div>
                                    </div>
                                )
                            } 
                        })
                    }
                </div>
            </div>
        </div>
    );
}