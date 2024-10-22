import React from "react";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center">Collapsable Decorator</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Collapsable attribute is a custom Unity attribute designed to make classes and structs collapsible in the Unity Inspector. 
                This functionality is particularly useful for improving the organization and readability of complex data structures by allowing developers to expand and collapse the fields of classes and structs. 
            </h6>


            <h3 className="p-2">How it Works</h3>

            <div className="p-3">
                <h4 className="c-light-1 pad-left-2">Collapsable Attribute</h4>
                <h5 className="c-light-1 pad-left-3">Constructors</h5>
                <p className="pad-left-3">
                    The Collapsable attribute class provides constructors for initializing the attribute, optionally with a label to customize the display text for the collapsible section:
                </p>
                <ul className="property-list">
                    <li><b1>CollapsableAttribute</b1>(): Initializes the attribute without a label.</li>
                    <li><b1>CollapsableAttribute</b1>(<b2>string</b2> <b1>label</b1>): Initializes the attribute with a custom label.</li>                    
                </ul>
                <h5 className="c-light-1 pad-left-3">Parameters</h5>
                <ul className="property-list">
                    <li><b2>string</b2> <b1>label</b1> (Optional): A custom label for the collapsible section. If no label is provided, the default field name will be used as the label. Default is “”.</li>                    
                </ul>
            </div>
            
 
            <h3 className="p-2">How to Use</h3>
            <p className="pad-left-2">
                To use the Collapsable attribute, apply it to classes or structs that you want to make collapsible in the Unity Inspector. 
                Below are examples demonstrating how to use this attribute:
            </p>

            <h4 className="c-light-1 p-3">Example 01: Making a Struct Collapsible</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Collapsable/Collapsable - 01.jpg" alt=""/>            
            <p className="pad-left-3">
                In this example, the PlayerSettings struct is made collapsible in the Inspector. 
                When the component is selected, the PlayerSettings field can be expanded or collapsed.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapsable/Collapsable - 02.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapsable/Collapsable - 03.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 02: Making a Class Collapsible with a Custom Label</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Collapsable/Collapsable - 04.jpg" alt=""/>            
            <p className="pad-left-3">
                Here, the AdvancedSettings class is collapsible and uses a custom label "Advanced" for the collapsible section in the Inspector.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapsable/Collapsable - 05.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapsable/Collapsable - 06.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 03: Nested Collapsible Classes</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Collapsable/Collapsable - 07.jpg" alt=""/>            
            <p className="pad-left-3"> 
                In this example, GraphicsSettings is a class nested inside GeneralSettings and are both made collapsible with custom labels. 
                Each section can be expanded or collapsed independently in the Inspector.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapsable/Collapsable - 08.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapsable/Collapsable - 09.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapsable/Collapsable - 10.jpg" alt=""/>            
            
            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The Collapsable attribute only affects classes and structs that are marked as Serializable and used in MonoBehaviour or ScriptableObject scripts.</li>
                <li>If no label is provided, the default behavior uses the field name as the label.</li>
                <li>Using the Collapsable attribute does not impact the performance of the game or the Inspector significantly, as it is primarily a visual aid.</li>
                <li>The Collapsable attribute works with the default Unity property drawer system and requires no additional setup beyond adding the attribute to your fields.</li>                
            </ul>
            
            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The Collapsable attribute is a powerful and easy-to-use tool for making complex data structures more manageable in the Unity Inspector. 
                By providing collapsible sections, it enhances the organization and readability of data, helping developers to focus on relevant settings without being overwhelmed by too much information at once. 
                Whether you are working with simple structs or nested classes, the Collapsable attribute offers a flexible way to keep your Inspector neat and user-friendly.
            </p>
       </div>
    );
}