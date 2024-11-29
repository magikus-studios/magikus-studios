import React from "react";
import Group from "Components/Group";

export default function Function() {

    let scrollUp = () => { window.scrollTo({ top: 0, behavior: "smooth" }); }

    return (
        <div className="c-light-2">           
            <h1 className="text-center">Show & Hide Decorators</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                Attributes that provides conditional visibility for fields in the Unity Inspector 
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2">
                The <b2>[Show]</b2> and <b2>[Hide]</b2> attributes are a versatile and powerful tool for controlling the visibility of fields in the Unity Inspector based on the value of another property. 
                It allows developers to control when specific fields should be displayed. 
                This can help to declutter the Inspector and make it more intuitive by showing only relevant fields under certain conditions.
                By providing conditional visibility, it helps to create a more organized and intuitive interface, making it easier for developers to manage and configure game components. 
            </p>


            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The <b2>[Show]</b2> and <b2>[Hide]</b2> attributes are designed to be combined with conditional attributes.
                Simply by adding the <b2>[Show]</b2> or <b2>[Hide]</b2> attribute to the property, the field will be shown or hidden.
                By adding a conditional attribute to the property (<a href="/#/library/decorators/conditional" className="t-dec-none c-light-0 c-light-4-h" onClick={scrollUp}>See Conditional Decorator</a>), this tool becames super useful.
            </p>
            <Group title="Show Attribute" content={(
                <div>
                    <p>
                        The Show attribute class offers constructors to initialize the attribute with the necessary properties to control field visibility:
                    </p>
                    <h5 className="c-light-1">Constructors</h5>
                    <ul className="property-list">
                        <li><b1>Show</b1>(<b2>bool</b2> <b1>ignoreCondition</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>ignoreCondition</b1>: If true, this attribute will ignore any conditional attribute that this field could have.</li>
                    </ul>
                </div>
            )}/>
            <Group title="Hide Attribute" content={(
                <div>
                    <p>
                        The Hide attribute class offers constructors to initialize the attribute with the necessary properties to control field visibility:
                    </p>
                    <h5 className="c-light-1">Constructors</h5>
                    <ul className="property-list">
                        <li><b1>Hide</b1>(<b2>bool</b2> <b1>ignoreCondition</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>ignoreCondition</b1>: If true, this attribute will ignore any conditional attribute that this field could have.</li>
                    </ul>
                </div>
            )}/>


            <h3 className="p-2">Examples</h3>
            <p className="pad-left-3">
                The <b2>[Show]</b2> and <b2>[Hide]</b2> attributes are applied to fields within a MonoBehaviour or ScriptableObject class to control their visibility in the Unity Inspector based on another property. 
                Below are examples demonstrating its usage:
            </p>
            <Group title="Example 01: Show Field Based on a Boolean Property" content={(
                <div>
                    <h4 className="c-light-1 p-3"></h4>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/ShowHide/ShowHide - 01.jpg" alt=""/>            
                    <p>
                        In this example, the details field will only be visible in the Inspector if the showDetails boolean property is set to true.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ShowHide/ShowHide - 02.jpg" alt=""/>            
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ShowHide/ShowHide - 03.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 02: Hide Field Based on an Enum Property" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/ShowHide/ShowHide - 04.jpg" alt=""/>            
                    <p>
                        Here, the advancedSetting field is only shown if currentMode is set to Mode.Advanced.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/ShowHide/ShowHide - 05.jpg" alt=""/>            
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/ShowHide/ShowHide - 06.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 03: Show Field Based on Multiple Values" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/ShowHide/ShowHide - 07.jpg" alt=""/>            
                    <p>
                        In this example, the multipleOptionDetails field is displayed if displayOption is either 1, 2, or 3.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ShowHide/ShowHide - 08.jpg" alt=""/>            
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ShowHide/ShowHide - 09.jpg" alt=""/>            
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ShowHide/ShowHide - 10.jpg" alt=""/>            
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ShowHide/ShowHide - 11.jpg" alt=""/>            
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ShowHide/ShowHide - 12.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 04: Show Field Based on a Reference Value" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/ShowHide/ShowHide - 13.jpg" alt=""/>            
                    <p>
                        In this example, the referenceDetails field is displayed if referenceValue has a GameObject selected as a reference. 
                        If the value is none, then the field will be hidden.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ShowHide/ShowHide - 14.jpg" alt=""/>            
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ShowHide/ShowHide - 15.jpg" alt=""/>            
                </div>
            )}/>


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The <b2>[Show]</b2> and <b2>[Hide]</b2> attributes support Conditional decorators for conditional behaviours.</li>
                <li>This attribute enhances the user experience in the Inspector by conditionally displaying fields, thus reducing clutter and improving focus on relevant settings.</li>
            </ul>
       </div>
    );
}