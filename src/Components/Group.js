import React, { useState } from "react";

export default function Function(props) {
    var [isOpen, setOpen] = useState(false);
    let open = () => 
    {
            setOpen(!isOpen); 
            setTimeout(()=>
            {
                let offsetTop  = document.getElementById(props.title).offsetTop - 100;
                window.scrollTo({ top: offsetTop, behavior: "smooth" }); 
            }, 100)
}
    let close = () => 
    {
            setOpen(!isOpen); 
            setTimeout(()=>
            {
                let offsetTop  = document.getElementById(props.title).offsetTop - 100;
                window.scrollTo({ top: offsetTop, behavior: "smooth" }); 
            }, 100)
    }

    return (
        <div id={props.title} className="mar-horizontal-3">
            <h5 onClick={open} className="c-light-1 c-light-0-h pad-left-2 img-border bg-dark-3 bg-dark-2-h">{props.title}</h5>
            <div className={`${isOpen ? "open-group bg-dark-5 mar-horizontal-1 mar-bottom-2 img-border pad-horizontal-3 pad-top-3" : "close-group"}`}>
                {props.content}
                <h5 id={`${props.title}#END`} className={`c-light-1 c-light-0-h text-center`} onClick={close}>{"···"}</h5>
            </div>
        </div>
    );
}