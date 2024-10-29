import React from "react";

export default function Function(props) {
    
    let scrollUp = () => { window.scrollTo({ top: 0, behavior: "smooth" }); }
    
    return (
    <a href={props.item.link} onClick={scrollUp}>
        <li>
            <div className="tree-item">{props.item.label} {props.item.pro?<pro>Pro</pro>: ""}</div>
        </li>
    </a> 
    );
}