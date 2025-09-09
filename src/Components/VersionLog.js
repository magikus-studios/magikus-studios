import React from "react";
import Group from "Components/Group";
import Method from "Components/Method";

export default function Function(props) {
    let featuresAmount = 0; 

    let addedFeatures;
    if (props.added != null) 
    { 
        addedFeatures = <Method name={props.added.length + " | " + "Added"} signatures={(<div><ul className="property-list">{props.added.map((item, index) => { return <li key={index}>{item.feature}</li> })}</ul></div>)}/> 
        featuresAmount += props.added.length;
    }
    else {addedFeatures = <h6 className="c-light-2 c-light-3-h pad-left-3 pad-top-1">0 | Added</h6> }    
    
    let changedFeatures;
    if (props.changed != null) 
    { 
        changedFeatures = <Method name={props.changed.length + " | " + "Changed"} signatures={(<div><ul className="property-list">{props.changed.map((item, index) => { return <li key={index}>{item.feature}</li> })}</ul></div>)}/> 
        featuresAmount += props.changed.length;
    }
    else {changedFeatures = <h6 className="c-light-2 c-light-3-h pad-left-3 pad-top-1">0 | Changed</h6> }    
    
    let depricatedFeatures;
    if (props.depricated != null) 
    {
        depricatedFeatures = <Method name={props.depricated.length + " | " + "Depricated"} signatures={(<div><ul className="property-list">{props.depricated.map((item, index) => { return <li key={index}>{item.feature}</li> })}</ul></div>)}/> 
        featuresAmount += props.depricated.length;
    }
    else {depricatedFeatures = <h6 className="c-light-2 c-light-3-h pad-left-3 pad-top-1">0 | Depricated</h6> }    
    
    let removedFeatures;
    if (props.removed != null) 
    {
        removedFeatures = <Method name={props.removed.length + " | " + "Removed"} signatures={(<div><ul className="property-list">{props.removed.map((item, index) => { return <li key={index}>{item.feature}</li> })}</ul></div>)}/> 
        featuresAmount += props.removed.length;
    }
    else {removedFeatures = <h6 className="c-light-2 c-light-3-h pad-left-3 pad-top-1">0 | Removed</h6> }    
    
    let fixedFeatures;
    if (props.fixed != null) 
    {
        fixedFeatures = <Method name={props.fixed.length + " | " + "Fixed"} signatures={(<div><ul className="property-list">{props.fixed.map((item, index) => { return <li key={index}>{item.feature}</li> })}</ul></div>)}/> 
        featuresAmount += props.fixed.length;
    }
    else {fixedFeatures = <h6 className="c-light-2 c-light-3-h pad-left-3 pad-top-1">0 | Fixed</h6> }    
    
    let securityFeatures;
    if (props.security != null) 
    {
        securityFeatures = <Method name={props.security.length + " | " + "Security"} signatures={(<div><ul className="property-list">{props.security.map((item, index) => { return <li key={index}>{item.feature}</li> })}</ul></div>)}/> 
        featuresAmount += props.security.length;
    }   
    else {securityFeatures = <h6 className="c-light-2 c-light-3-h pad-left-3 pad-top-1">0 | Security</h6> }    
    
    return (
        <div>
            <Group title={"Version " + props.version + " | " + featuresAmount} subtitle={"[" + props.date + "]"} content={(
                <div>
                    {props.added == null? null : addedFeatures}
                    {props.changed == null? null : changedFeatures}
                    {props.depricated == null? null : depricatedFeatures}
                    {props.removed == null? null : removedFeatures}
                    {props.fixed == null? null : fixedFeatures}
                    {props.security == null? null : securityFeatures}
                </div>
            )}/>
        </div>
    );
}