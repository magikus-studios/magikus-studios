import React from "react";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center">ShowIf</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The ShowIf attribute is a custom Unity attribute that provides conditional visibility for fields in the Unity Inspector. 
                It allows developers to control when specific fields should be displayed based on the value of another property. 
                This can help to declutter the Inspector and make it more intuitive by showing only relevant fields under certain conditions.
            </h6>

            <h3 className="p-2">How it Works</h3>

            <div className="p-3">
                <h4 className="c-light-1 pad-left-2">ShowIf Attribute</h4>
                <p className="pad-left-3">
                    The ShowIf attribute class offers constructors to initialize the attribute with the necessary properties to control field visibility:
                </p>
                <h5 className="c-light-1 pad-left-3">Constructors</h5>
                <ul className="property-list">
                    <li><b1>ShowIfAttribute</b1>(<b2>string</b2> <b1>propertyName</b1>): Initializes the attribute with the name of the property that determines visibility.</li>
                    <li><b1>ShowIfAttribute</b1>(<b2>string</b2> <b1>propertyName</b1>, <b2>object</b2> <b1>value</b1>, <b2>params object[]</b2> <b1>alternativeValues</b1>): Initializes the attribute with the property name, a specific value, and optional alternative values that determine when the field should be visible.</li>
                </ul>
                <h5 className="c-light-1 pad-left-3">Parameters</h5>
                <ul className="property-list">
                    <li><b2>string</b2> <b1>propertyName</b1>: The name of the property whose value determines the visibility of the field. This is a required parameter.</li>
                    <li><b2>object</b2> <b1>value</b1> (Optional): The value of the property that will make the field visible. The default value is true. Default is true.</li>
                    <li><b2>object[]</b2> <b1>alternativeValues</b1> (Optional): An array of alternative values that will also make the field visible. If none are provided, only the specified Value will be used for comparison. Default is null.</li>
                </ul>
            </div>

            <h3 className="p-2">How to Use</h3>
            <p className="pad-left-3">
                The ShowIf attribute is applied to fields within a MonoBehaviour or ScriptableObject class to control their visibility in the Unity Inspector based on another property. 
                Below are examples demonstrating its usage:
            </p>

            <h4 className="c-light-1 p-3">Example 01: Show Field Based on a Boolean Property</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/ShowIf/Show If - 01.jpg" alt=""/>            
            <p className="pad-left-3">
                In this example, the details field will only be visible in the Inspector if the showDetails boolean property is set to true.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ShowIf/Show If - 02.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ShowIf/Show If - 03.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 02: Show Field Based on an Enum Property</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/ShowIf/Show If - 04.jpg" alt=""/>            
            <p className="pad-left-3">
                Here, the advancedSetting field is only shown if currentMode is set to Mode.Advanced.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ShowIf/Show If - 05.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ShowIf/Show If - 06.jpg" alt=""/>            
 
            <h4 className="c-light-1 p-3">Example 03: Show Field Based on Multiple Values</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/ShowIf/Show If - 07.jpg" alt=""/>            
            <p className="pad-left-3">
                In this example, the multipleOptionDetails field is displayed if displayOption is either 1, 2, or 3.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ShowIf/Show If - 08.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ShowIf/Show If - 09.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ShowIf/Show If - 10.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ShowIf/Show If - 11.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ShowIf/Show If - 12.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 04: Show Field Based on a Reference Value</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/ShowIf/Show If - 13.jpg" alt=""/>            
            <p className="pad-left-3">
                In this example, the referenceDetails field is displayed if referenceValue has a GameObject selected as a reference. 
                If the value is none, then the field will be hidden.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ShowIf/Show If - 14.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ShowIf/Show If - 15.jpg" alt=""/>            

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The ShowIf attribute uses reflection to evaluate the value of the specified property at runtime in the Unity Editor.</li>
                <li>It can be used with properties of various types, including bool, int, enum and reference types as long as the comparison with the Value and alternativeValues is meaningful.</li>
                <li>The alternativeValues parameter provides flexibility by allowing multiple values to trigger the visibility of a field.</li>
                <li>This attribute enhances the user experience in the Inspector by conditionally displaying fields, thus reducing clutter and improving focus on relevant settings.</li>
            </ul>

            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The ShowIf attribute is a versatile and powerful tool for controlling the visibility of fields in the Unity Inspector based on the value of another property. 
                By providing conditional visibility, it helps to create a more organized and intuitive interface, making it easier for developers to manage and configure game components. 
                With flexible constructors and support for multiple values, the ShowIf attribute can be tailored to fit a wide range of use cases in Unity projects.
            </p>
       </div>
    );
}