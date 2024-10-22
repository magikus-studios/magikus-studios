import React from "react";

export default function Function(props) {
    return (
    <a href={props.item.link}>
        <li>
            <div className="tree-item">{props.item.label} {props.item.pro?<pro>Pro</pro>: ""}</div>
        </li>
    </a> 
    );
}