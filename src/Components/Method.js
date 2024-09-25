import React, { useState } from "react";

export default function Function(props) {
    var [open, setOpen] = useState(false);

    return (
        <div onClick={() => { setOpen(!open) }}>
                <h5 className="c-light-0 c-light-1-h pad-left-3">{open ? "-" : "+"} {props.title}</h5>
                <div className={`${open ? "" : "hide"}`}>
                    {props.content}
                </div>
        </div>
    );
}