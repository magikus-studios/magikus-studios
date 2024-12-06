import React, { useState } from "react";

export default function Function(props) {
    var [open, setOpen] = useState(false);

    return (
        <div>
            <h6 onClick={() => { setOpen(!open) }} className="c-light-2 c-light-3-h pad-left-3 pad-top-1">{props.name}</h6>
            <div className={`${open ? "open-group" : "close-group"}`}>
                {props.description?<p className="pad-left-3">{props.description}</p>:""}
                {props.signatures}
            </div>
        </div>
    );
}