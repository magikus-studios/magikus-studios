import React from "react";

import TreeView from "../../Components/TreeView";

export default function Function(props) {

    let submenu;
    if (props.submenu != null) { submenu = <TreeView menu={props.submenu} /> }

    return (
        <div className="bg-dark-4 min-vh-100">
            <div className="container pt-5 pb-5 mb-5">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-12 pb-4">
                        <TreeView menu={props.menu} />
                        <div className="pb-4"></div>
                        { submenu }
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-12">{props.content}</div>
                </div>
            </div>
        </div>
    );
}