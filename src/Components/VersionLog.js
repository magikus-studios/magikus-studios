import React from "react";

export default function Function(props) {
    let addedFeatures;
    let changedFeatures;
    let depricatedFeatures;
    let removedFeatures;
    let fixedFeatures;
    let securityFeatures;
    
    if (props.added != null) { addedFeatures = <div> <h5 className="c-light-1">Added</h5> <ul> {props.added.map((item, index) => { return <li key={index}>{item.feature}</li> })} </ul> </div> }
    if (props.changed != null) { changedFeatures = <div> <h5 className="c-light-1">Changed</h5> <ul> {props.changed.map((item, index) => { return <li key={index}>{item.feature}</li> })} </ul> </div> }
    if (props.depricated != null) { depricatedFeatures = <div> <h5 className="c-light-1">Depricated</h5> <ul> {props.depricated.map((item, index) => { return <li key={index}>{item.feature}</li> })} </ul> </div> }
    if (props.removed != null) { removedFeatures = <div> <h5 className="c-light-1">Removed</h5> <ul> {props.removed.map((item, index) => { return <li key={index}>{item.feature}</li> })} </ul> </div> }
    if (props.fixed != null) { fixedFeatures = <div> <h5 className="c-light-1">Fixed</h5> <ul> {props.fixed.map((item, index) => { return <li key={index}>{item.feature}</li> })} </ul> </div> }
    if (props.security != null) { securityFeatures = <div> <h5 className="c-light-1">Security</h5> <ul> {props.security.map((item, index) => { return <li key={index}>{item.feature}</li> })} </ul> </div> }

    return (
        <div className="pt-4">
            <h3 className="text-center c-light-2">--- Version {props.version} ---</h3>
            <h5 className="text-center c-light-2">[{props.date}]</h5>
            {addedFeatures}
            {changedFeatures}
            {depricatedFeatures}
            {removedFeatures}
            {fixedFeatures}
            {securityFeatures}
        </div>
    );
}