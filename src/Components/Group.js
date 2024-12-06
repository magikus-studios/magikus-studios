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
            <div onClick={open} className="c-light-1 c-light-0-h pad-horizontal-2 img-border bg-dark-3 bg-dark-2-h o-auto mar-bottom-1">
                <h5 className="f-left mar-bottom-0">{props.title}</h5>
                {props.subtitle?<h5 className="f-right mar-bottom-0">{props.subtitle}</h5>:""}
            </div>
            <div className={`${isOpen ? "open-group bg-dark-5 mar-horizontal-1 mar-bottom-2 img-border pad-horizontal-3 pad-top-3" : "close-group"}`}>
                {props.content}
                <h5 id={`${props.title}#END`} className={`c-light-1 c-light-0-h text-center`} onClick={close}>{"···"}</h5>
            </div>
        </div>
    );
}