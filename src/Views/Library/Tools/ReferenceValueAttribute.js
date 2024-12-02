import React from "react";
import Group from "Components/Group";

export default function Function() {
    
    
    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Reference Value Attribute</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Attribute that provides an interface for handling ObjectReference fields in Unity's Inspector 
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The <b2>[ReferenceValue]</b2> attribute provides a streamlined way to manage object references in Unity's Inspector. 
                This attribute is especially useful in scenarios where references need to be created or removed frequently, making it a valuable tool for improving productivity in Unity development.              
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/ReferenceValueAttribute/Reference Value Attribute - 10.jpg" alt=""/>                     
            </div>


            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2 pad-bottom-2">              
                The <b2>[ReferenceValue]</b2> attribute allows you to create or remove object references directly from the Inspector using customizable buttons. 
                This is particularly useful for managing references to assets like prefabs, materials or other scriptable objects, providing a seamless way to assign and manage them in the editor.
                By offering customizable labels and field width ratios, it enhances the workflow for assigning and managing references. 
            </p>

            <Group title="ReferenceValue Attribute" content={(
                <div>
                    <p>
                        Initializes the <b2>[ReferenceValue]</b2> attribute with a specified menu path for creating new assets, a custom ratio for the reference field width and custom labels for the “create” and “remove” buttons.
                    </p>
                    <h5 className="c-light-1">Constructors</h5>
                    <ul className="property-list">
                        <li><b1>ReferenceValue</b1>(<b2>string</b2> <b1>menuPath</b1>)</li>
                        <li><b1>ReferenceValue</b1>(<b2>string</b2> <b1>menuPath</b1>, <b2>float</b2> <b1>ratio</b1>)</li>
                        <li><b1>ReferenceValue</b1>(<b2>string</b2> <b1>menuPath</b1>, <b2>string</b2> <b1>createLabel</b1>, <b2>string</b2> <b1>removeLabel</b1>)</li>
                        <li><b1>ReferenceValue</b1>(<b2>string</b2> <b1>menuPath</b1>, <b2>string</b2> <b1>createLabel</b1>, <b2>string</b2> <b1>removeLabel</b1>, <b2>float</b2> <b1>ratio</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>menuPath</b1>: The path in Unity's Assets menu to trigger for creating a new object.</li>
                        <li><b2>string</b2> <b1>createLabel</b1>: The label for the button used to create a new reference. Default is "Create".</li>
                        <li><b2>string</b2> <b1>removeLabel</b1>: The label for the button used to remove an existing reference. Default is "Remove".</li>                    
                        <li><b2>float</b2> <b1>ratio</b1>: The ratio of the width of the reference field to the total width of the inspector field. Default is 0.6f.</li>
                    </ul>
                </div>
            )}/>
            

            <h3 className="p-2">Examples</h3>
            <p className="pad-left-2">
                To use the <b2>[ReferenceValue]</b2> attribute, apply it to an ObjectReference field in your script. 
                Below are examples demonstrating various ways to use this attribute:
            </p>
            <Group title="Example 01: Simple Object Reference with Default Buttons" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/ReferenceValueAttribute/Reference Value Attribute - 01.jpg" alt=""/>            
                    <p>
                        This example shows how to apply the <b2>[ReferenceValue]</b2> attribute to a GameObject field. 
                        The menu path "GameObject/Create Empty" is triggered when the create button is clicked.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/ReferenceValueAttribute/Reference Value Attribute - 02.jpg" alt=""/>            
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/ReferenceValueAttribute/Reference Value Attribute - 03.jpg" alt=""/>                     
                </div>
            )}/>
            <Group title="Example 02: Custom Ratio for Reference Field Width" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/ReferenceValueAttribute/Reference Value Attribute - 04.jpg" alt=""/>            
                    <p>
                        Here, the reference field width for myMaterial is set to 70% of the total field width. 
                        The menu path "Assets/Create/Material" is used for creating a new reference. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Tools/ReferenceValueAttribute/Reference Value Attribute - 05.jpg" alt=""/>            
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Tools/ReferenceValueAttribute/Reference Value Attribute - 06.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 03: Custom Button Labels" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/ReferenceValueAttribute/Reference Value Attribute - 07.jpg" alt=""/>            
                    <p>
                        This example sets custom labels for the “create” and “remove” buttons. 
                        Clicking "Add Prefab" will create a new Prefab asset using the menu path "Assets/Create/Prefab", while clicking "Remove Prefab" will clear the reference.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Tools/ReferenceValueAttribute/Reference Value Attribute - 08.jpg" alt=""/>            
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Tools/ReferenceValueAttribute/Reference Value Attribute - 09.jpg" alt=""/>            
                </div>
            )}/>

            
            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The <b2>[ReferenceValue]</b2> attribute is intended for fields of type ObjectReference. It will not work with other field types.</li>
                <li>Ensure that the specified menu path corresponds to an existing menu item in Unity's Assets menu. Otherwise, the create button will not function as expected.</li>
                <li>The Ratio parameter defines the proportion of the total field width allocated to the reference field. The remainder is used for the buttons. Adjust this value to fit your layout requirements.</li>
            </ul>
       </div>
    );
}