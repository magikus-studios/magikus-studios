import React from "react";

export default function Function(props) {
    return (
    <a href={props.item.link}>
        <li>
            <div className="tree-item">{props.item.label} {props.item.pro?<i className="c-light-0">[pro]</i>: ""}</div>
        </li>
    </a> 
    );
}