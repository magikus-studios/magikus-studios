import React, { useState } from "react";

export default function Function(props) {
    var [open, setOpen] = useState(false);
    let close = () => 
    {
            setOpen(!open); 
            let offsetTop  = document.getElementById(props.title).offsetTop;
            window.scrollTo({ top: offsetTop-100, behavior: "smooth" }); 
    }

    return (
        <div id={props.title}>
            <h4 onClick={() => { setOpen(!open) }} className="c-light-1 c-light-0-h pad-left-2">{!open ? "║" : "╠"} {props.title}</h4>
            <div className={`${open ? "open-group" : "close-group"}`}>
                {props.content}
                <h4 className={`c-light-1 c-light-0-h pad-left-2 text-center`} onClick={close}>{"╚═ ═ ═ ═ ═╝"}</h4>
            </div>
        </div>
    );
}