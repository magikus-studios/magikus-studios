import React from "react";
import 'CSS/CardBlock.css';

export default function Function(props) { 
    return (
        <div className="cardBlock h-100 container d-flex bg-dark-4 row">
            <a href={props.link} className="o-hiden col-12 col-md-4 col-lg-3" target={(props.newTab)?"_blank":"_self"}>
                <div className="h-100 jumbotron d-flex align-items-center">
                    <img className="cardBlock-img img-fluid p-3" src={props.image} alt="" />
                </div>
            </a>
            <a href={props.link} className="t-dec-none col-12 col-md-8 col-lg-9" target={(props.newTab)?"_blank":"_self"}>
                <div className="p-3">
                    <h4 className="c-light-2 text-left">{ props.title }</h4>
                    <p className="c-light-2 text-justify">{ props.description }</p>
                    <a href={props.link} className="cardBlock-btn">Learn More</a>
                </div>
            </a>
        </div>
    );
}