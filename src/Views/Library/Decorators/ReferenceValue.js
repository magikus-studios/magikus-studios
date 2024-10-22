import React from "react";

export default function Function() {
    
    
    return (
        <div className="c-light-2">           
            <h1 className="text-center">Reference Value Decorator</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The ReferenceValue attribute is a custom attribute that provides a convenient interface for handling ObjectReference fields in Unity's Inspector. 
                It allows you to create or remove object references directly from the Inspector using customizable buttons. 
                This is particularly useful for managing references to assets like prefabs, materials, or other scriptable objects, providing a seamless way to assign and manage them in the editor.
            </h6>

            <h3 className="p-2">How it Works</h3>

            <div className="p-3">
                <h4 className="c-light-1 pad-left-2">ReferenceValue Attribute</h4>
                <h5 className="c-light-1 pad-left-3">Constructors</h5>
                <ul className="property-list">
                    <li><b1>ReferenceValueAttribute</b1>(<b2>string</b2> <b1>menuPath</b1>): Initializes the ReferenceValue attribute with a specified menu path for creating new assets.</li>
                    <li><b1>ReferenceValueAttribute</b1>(<b2>string</b2> <b1>menuPath</b1>, <b2>float</b2> <b1>ratio</b1>): Initializes the ReferenceValueAttribute with a specified menu path and a custom ratio for the reference field width.</li>
                    <li><b1>ReferenceValueAttribute</b1>(<b2>string</b2> <b1>menuPath</b1>, <b2>string</b2> <b1>createLabel</b1>, <b2>string</b2> <b1>removeLabel</b1>): Initializes the ReferenceValue attribute with a specified menu path and custom labels for the “create” and “remove” buttons.</li>
                    <li><b1>ReferenceValueAttribute</b1>(<b2>string</b2> <b1>menuPath</b1>, <b2>string</b2> <b1>createLabel</b1>, <b2>string</b2> <b1>removeLabel</b1>, <b2>float</b2> <b1>ratio</b1>): Initializes the ReferenceValue attribute with a specified menu path, custom labels, and a custom ratio for the reference field width.</li>
                </ul>
                <h5 className="c-light-1 pad-left-3">Parameters</h5>
                <ul className="property-list">
                    <li><b2>string</b2> <b1>menuPath</b1>: The path in Unity's Assets menu to trigger for creating a new object.</li>
                    <li><b2>string</b2> <b1>createLabel</b1> (optional): The label for the button used to create a new reference. Default is "Create".</li>
                    <li><b2>string</b2> <b1>removeLabel</b1> (optional): The label for the button used to remove an existing reference. Default is "Remove".</li>                    
                    <li><b2>float</b2> <b1>ratio</b1> (optional): The ratio of the width of the reference field to the total width of the inspector field. Default is 0.6f.</li>
                </ul>
            </div>
            

            <h3 className="p-2">How to Use</h3>
            <p className="pad-left-2">
                To use the ReferenceValue attribute, apply it to an ObjectReference field in your script. 
                Below are examples demonstrating various ways to use this attribute:
            </p>

            <h4 className="c-light-1 p-3">Example 01: Simple Object Reference with Default Buttons</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/ReferenceValue/Reference Value - 01.jpg" alt=""/>            
            <p className="pad-left-3">
                This example shows how to apply the ReferenceValue attribute to a GameObject field. 
                The menu path "GameObject/Create Empty" is triggered when the create button is clicked.
            </p>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/ReferenceValue/Reference Value - 02.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/ReferenceValue/Reference Value - 03.jpg" alt=""/>                     

            <h4 className="c-light-1 p-3">Example 02: Custom Ratio for Reference Field Width</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/ReferenceValue/Reference Value - 04.jpg" alt=""/>            
            <p className="pad-left-3">
                Here, the reference field width for myMaterial is set to 70% of the total field width. 
                The menu path "Assets/Create/Material" is used for creating a new reference. 
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ReferenceValue/Reference Value - 05.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ReferenceValue/Reference Value - 06.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 03: Custom Button Labels</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/ReferenceValue/Reference Value - 07.jpg" alt=""/>            
            <p className="pad-left-3">
                This example sets custom labels for the “create” and “remove” buttons. 
                Clicking "Add Prefab" will create a new Prefab asset using the menu path "Assets/Create/Prefab", while clicking "Remove Prefab" will clear the reference.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ReferenceValue/Reference Value - 08.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ReferenceValue/Reference Value - 09.jpg" alt=""/>            

            
            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The ReferenceValue attribute is intended for fields of type ObjectReference. It will not work with other field types.</li>
                <li>Ensure that the specified menu path corresponds to an existing menu item in Unity's Assets menu. Otherwise, the create button will not function as expected.</li>
                <li>The Ratio parameter defines the proportion of the total field width allocated to the reference field. The remainder is used for the buttons. Adjust this value to fit your layout requirements.</li>
            </ul>

            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The ReferenceValue attribute provides a streamlined way to manage object references in Unity's Inspector. 
                By offering customizable labels and field width ratios, it enhances the workflow for assigning and managing references. 
                This attribute is especially useful in scenarios where references need to be created or removed frequently, making it a valuable tool for improving productivity in Unity development.
            </p>
       </div>
    );
}