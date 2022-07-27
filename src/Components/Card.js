import React from "react";
import 'CSS/CardBlock.css';

export default function Function(props) { 
    return (
        <div className="cardBlock text-center h-100">
            <a href={props.link} className="o-hiden"><img className="cardBlock-img img-fluid" src={props.image} alt="" /></a>
            <div className="p-3 bg-dark-4">
                <h4 className="c-light-2">{ props.title }</h4>
                <p className="c-light-3">{ props.description }</p>
                <a href={props.link} className="cardBlock-btn">Learn More</a>
            </div>
        </div>
    );
}