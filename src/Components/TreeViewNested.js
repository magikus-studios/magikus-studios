import React, { useState } from "react";
import TreeViewItem from "./TreeViewItem";

export default function Function(props) {
    var [open, setOpen] = useState(false);
    
    let content;

    if (open) { 
        content =
            <ul>
                {
                    props.menu.items.map((item, index) => {
                        if (item.items == null) { return <TreeViewItem label={item.label} link={item.link} key={index} /> }
                        else { return <Function menu={item} key={index} /> }
                    })
                }
            </ul>
    }
    
    return (
        <div className={`${open ? "tree-nested-open" : "tree-nested-close"}` } >
            <li className={`${open ? "tree-nested-label-open" : "tree-nested-label-close"}`} onClick={() => { setOpen(!open) }}>
                <div className="tree-item">{props.menu.label}</div>
            </li>
            { content }      
        </div>
    );
}