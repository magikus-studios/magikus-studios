import React from "react";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center">Non Editable Decorator</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The NonEditable attribute is a custom attribute designed to make fields in Unity's Inspector read-only. This is useful for fields that should display data without allowing the user to modify them directly in the Inspector.
            </h6>
      
            <h3 className="p-2">How to Use</h3>
            <p className="pad-left-2">
                To use the NonEditable attribute, simply apply it to any field in your script that you want to make read-only in the Unity Inspector. 
                Below are examples demonstrating how to use this attribute:
            </p>

            <h4 className="c-light-1 p-3">Example 01: Making a Single Field Non-Editable</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/NonEditable/Non Editable - 01.jpg" alt=""/>            
            <p className="pad-left-3">
                In this example, the readOnlyString field is displayed as read-only in the Unity Inspector. Users can see the value but cannot change it.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/NonEditable/Non Editable - 02.jpg" alt=""/>            
   
            <h4 className="c-light-1 p-3">Example 02: Non-Editable Field in a Struct</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/NonEditable/Non Editable - 03.jpg" alt=""/>            
            <p className="pad-left-3">
                Here, the playerID field within the PlayerData struct is made non-editable. Users can modify playerName but not playerID in the Inspector.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/NonEditable/Non Editable - 04.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 03: Combining Non-Editable with Editable Fields</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/NonEditable/Non Editable - 05.jpg" alt=""/>            
            <p className="pad-left-3">
                In this example, editableField is editable in the Inspector, while readOnlyField is read-only, showing how you can mix editable and non-editable fields in the same class.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/NonEditable/Non Editable - 06.jpg" alt=""/>            

            
            <h3 className="p-2">Notes</h3>
            <ul>
                <li>Applying NonEditable attribute to a field ensures that it is displayed in the Inspector but cannot be modified. This is useful for fields that should reflect data without user interference.</li>                
                <li>This attribute does not affect the runtime behavior of the fields. It is solely for the purpose of restricting editability in the Unity Editor.</li>
                <li>The NonEditable attribute can be used with any field type, including primitive types, structs, and complex objects, as long as they are serialized and displayed in the Inspector.</li>
                <li>Ensure that your fields are properly serialized for them to appear in the Inspector.</li>
            </ul>

            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The NonEditable attribute is a simple yet powerful tool for ensuring certain fields remain read-only in the Unity Inspector, helping maintain data integrity by preventing accidental modifications. 
                Whether you are working with simple variables or complex data structures, the NonEditable attribute provides a straightforward way to safeguard your data presentation in Unity's editing environment.
            </p>
       </div>
    );
}