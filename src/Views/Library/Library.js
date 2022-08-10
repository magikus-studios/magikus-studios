import React from "react";

import TreeView from "../../Components/TreeView";

export default function Function(props) {

    let submenu;
    if (props.submenu != null) { submenu = <TreeView menu={props.submenu} /> }

    let fullPath = window.location.hash.substring(1, window.location.hash.length);
    let pathSteps = fullPath.substring(1, fullPath.length).split('/');
    let links = [];
    // eslint-disable-next-line array-callback-return
    pathSteps.map((i, index) => {
        if (index === 0) { links.push("/#/" + i); }
        else { links.push(links[index - 1] + "/" + i); }
    });
    let path = <h6 className="c-light-0 pt-md-2 pb-2">
        {
            pathSteps.map((i, index) => {
                i = i.substring(0, 1).toUpperCase() + i.substring(1, i.length);
                i = i.split(/(?=[A-Z])/).join(" ");
                return <a className="t-dec-none c-light-0 c-light-4-h" href={links[index]}>{"| " + i + " "}</a>;
            }) 
        }
    </h6>;

    console.log('current Pathname 👉️', links);

    return (
        <div className="bg-dark-4 min-vh-100">
            <div className="container pt-3 pb-5 mb-5">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-12 pb-4">
                        <TreeView menu={props.menu} />
                        <div className="pb-4"></div>
                        { submenu }
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-12">
                        {path}
                        {props.content}
                    </div>
                </div>
            </div>
        </div>
    );
}