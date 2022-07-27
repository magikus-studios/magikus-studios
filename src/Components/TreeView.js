import React from "react";
import 'CSS/TreeView.css';
import TreeViewItem from "./TreeViewItem";
import TreeViewNested from "./TreeViewNested";

export default function Function(props)
{
    return (
        <ul className="tree">
            { 
                props.menu.map((item, index) => {
                    if (item.items == null) { return <TreeViewItem label={item.label} link={ item.link } key={ index } /> }
                    else { return <TreeViewNested menu={ item } key={ index } /> }
                })
            }
        </ul>
    );
}