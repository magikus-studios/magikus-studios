import React from "react";
import Group from "Components/Group";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Collapse Attribute</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Attribute that allow Classes to be Collapsed in the Unity Inspector
            </h6>
            
            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Collapse decorator enables classes and structs to be collapsible in the Inspector, which is invaluable for organizing complex data structures. 
                These tools are designed to enhance Unity Inspector usability and improve data management. 
                By enabling fields to expand or collapse, developers can focus on relevant settings without the distraction of excessive information, whether managing simple structs or nested classes. 
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapse/Collapse - 03.jpg" alt=""/>            
            </div>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Collapse decorator includes one core tool: the <b2>[Collapse]</b2> attribute. 
                The <b2>[Collapse]</b2> attribute allows classes and structs to be collapsible. 
                This interface includes the ability to expand and collapse structures, making it easier to navigate and manage extensive data collections within Unity.
                This tool streamline development by keeping the Inspector organized and efficient.
            </p>
            <Group title="Collapse Attribute" content={(
                <div>
                    <p>
                        The <b2>[Collapse]</b2> attribute is a custom Unity attribute designed to make classes and structs collapsible in the Unity Inspector. 
                        This functionality is particularly useful for improving the organization and readability of complex data structures by allowing developers to expand and collapse the fields of classes and structs. 
                        The Collapse attribute class provides constructors for initializing the attribute, optionally with a label to customize the display text for the collapsible section.
                    </p>
                    <h5 className="c-light-1">Constructors</h5>
                    <ul className="property-list">
                        <li><b1>Collapse</b1>(<b2>string</b2> <b1>label = ""</b1>, <b2>FontStyle</b2> <b1>fontstyle = FontStyle.Normal</b1>)</li>                    
                        <li><b1>Collapse</b1>(<b2>string</b2> <b1>label</b1>, <b2>string</b2> <b1>color</b1>)</li>                    
                        <li><b1>Collapse</b1>(<b2>string</b2> <b1>label</b1>, <b2>string</b2> <b1>closeColor</b1>, <b2>string</b2> <b1>closeColor</b1>)</li>                    
                        <li><b1>Collapse</b1>(<b2>FontStyle</b2> <b1>fontstyle</b1>, <b2>string</b2> <b1>color</b1>)</li>                    
                        <li><b1>Collapse</b1>(<b2>FontStyle</b2> <b1>fontstyle</b1>, <b2>string</b2> <b1>closeColor</b1>, <b2>string</b2> <b1>closeColor</b1>)</li>                    
                        <li><b1>Collapse</b1>(<b2>string</b2> <b1>label</b1>, <b2>FontStyle</b2> <b1>fontstyle</b1>, <b2>string</b2> <b1>color</b1>)</li>                    
                        <li><b1>Collapse</b1>(<b2>string</b2> <b1>label</b1>, <b2>FontStyle</b2> <b1>fontstyle</b1>, <b2>string</b2> <b1>closeColor</b1>, <b2>string</b2> <b1>closeColor</b1>)</li>                    
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>label</b1>: A custom label for the collapsible section. If no label is provided, the default field name will be used as the label. Default is “”.</li>                    
                        <li><b2>string</b2> <b1>fontstyle</b1>: The font style for the collapsible section label. Default is <b1>FontStyle.Normal</b1>.</li>                    
                        <li><b2>string</b2> <b1>color</b1>: The text color for the collapsible section label.</li>                    
                        <li><b2>string</b2> <b1>closeColor</b1>: The text color for the collapsible section label when it's collapsed.</li>                    
                        <li><b2>string</b2> <b1>openColor</b1>: The text color for the collapsible section label when it's expanded.</li>                    
                    </ul>
                </div>
            )}/>

 
            <h3 className="p-2">Examples</h3>
            <p className="pad-left-2">
                To use the <b2>[Collapse]</b2> attribute, apply it to classes or structs that you want to make collapsible in the Unity Inspector. 
                Below are examples demonstrating how to use this attribute:
            </p>
            <Group title="Example 01: Making a Struct Collapsible" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Collapse/Collapse - 01.jpg" alt=""/>            
                    <p>
                        In this example, the PlayerSettings struct is made collapsible in the Inspector. 
                        When the component is selected, the PlayerSettings field can be expanded or collapsed.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapse/Collapse - 01.gif" alt=""/>            
                </div>
            )}/>
            <Group title="Example 02: Making a Class Collapsible with a Custom Label" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Collapse/Collapse - 04.jpg" alt=""/>            
                    <p>
                        Here, the AdvancedSettings class is collapsible and uses a custom label "Advanced" for the collapsible section in the Inspector.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapse/Collapse - 02.gif" alt=""/>            
                </div>
            )}/>
            <Group title="Example 03: Nested Collapsible Classes" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Collapse/Collapse - 07.jpg" alt=""/>            
                    <p> 
                        In this example, GraphicsSettings is a class nested inside GeneralSettings and are both made collapsible with custom labels. 
                        Each section can be expanded or collapsed independently in the Inspector.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapse/Collapse - 03.gif" alt=""/>            
                </div>
            )}/>


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The <b2>[Collapse]</b2> attribute only affects classes and structs that are marked as Serializable and used in MonoBehaviour or ScriptableObject scripts.</li>
                <li>If no label is provided, the default behavior uses the field name as the label.</li>
                <li>Using the <b2>[Collapse]</b2> attribute does not impact the performance of the game or the Inspector significantly, as it is primarily a visual aid.</li>
                <li>The <b2>[Collapse]</b2> attribute works with the default Unity property drawer system and requires no additional setup beyond adding the attribute to your fields.</li>                
            </ul>
       </div>
    );
}