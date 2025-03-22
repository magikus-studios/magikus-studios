import React from "react";
import Group from "Components/Group";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Collapse Decorator</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Tools that allow Classes and Lists to be Collapsed in the Unity Inspector
            </h6>
            
            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Collapse decorator enables classes, structs and Lists to be collapsible in the Inspector, which is invaluable for organizing complex data structures. 
                These tools are designed to enhance Unity Inspector usability and improve data management. 
                By enabling fields to expand or collapse, developers can focus on relevant settings without the distraction of excessive information, whether managing simple structs or nested classes. 
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapse/Collapse - 03.jpg" alt=""/>            
            </div>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Collapse decorator includes two core tools: the <b2>[Collapse]</b2> attribute and the ListC{"<T>"} class. 
                The <b2>[Collapse]</b2> attribute allows classes and structs to be collapsible while the ListC{"<T>"} class, on the other hand, extends Unity's built-in List{"<T>"} by providing a serialized, editable list interface in the Inspector. 
                This interface includes the ability to expand and collapse lists, making it easier to navigate and manage extensive data collections within Unity. 
                Together, these tools streamline development by keeping the Inspector organized and efficient.
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
                        <li><b1>Collapse</b1>()</li>
                        <li><b1>Collapse</b1>(<b2>string</b2> <b1>label</b1>)</li>                    
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>label</b1>: A custom label for the collapsible section. If no label is provided, the default field name will be used as the label. Default is “”.</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="ListC Class" content={(
                <div>
                    <p>
                        The ListC{"<T>"} class is a custom collection, designed to offer a serialized, editable list of items in Unity's Inspector. 
                        It extends the functionality of Unity's built-in List{"<T>"} by providing a flexible and user-friendly interface for managing lists directly within the Unity editor. 
                        The ListC structure enhances the inspector experience, allowing users to expand and collapse the list, making it easier to navigate and manage large collections of data.
                    </p>
                    <h5 className="c-light-1">Constructors</h5>
                    <ul className="property-list">
                        <li><b1>ListC</b1>()</li>
                        <li><b1>ListC</b1>(<b2>IEnumerable{"<T>"}</b2> <b1>collection</b1>)</li>
                        <li><b1>ListC</b1>(<b2>int</b2> <b1>capacity</b1>)</li>
                        <li><b1>ListC</b1>(<b2>List{"<T>"}</b2> <b1>list</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>IEnumerable{"<T>"}</b2> <b1>collection</b1>: A collection of elements to copy to the list.</li>
                        <li><b2>int</b2> <b1>capacity</b1>: The number of elements that the list can initially store.</li>
                        <li><b2>List{"<T>"}</b2> <b1>list</b1>: A list of elements to copy to the new list.</li>
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
            <Group title="Example 04: Simple List of Integers" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Collapse/Collapse - 11.jpg" alt=""/>            
                    <p>
                        This example demonstrates how to create and use a ListC{"<int>"} to store integers. 
                        The list is populated with three integers, and the first element is printed to the console.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapse/Collapse - 04.gif" alt=""/>            
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapse/Collapse - 13.jpg" alt=""/>                     
                </div>
            )}/>
            <Group title="Example 05: List of Custom Objects" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Collapse/Collapse - 14.jpg" alt=""/>            
                    <p>
                        This example demonstrates how to use ListC to manage a list of custom objects, such as Item. 
                        The list is used to store Item objects, and the name of the second item is printed to the console.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapse/Collapse - 05.gif" alt=""/>            
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapse/Collapse - 16.jpg" alt=""/>                     
                </div>
            )}/>
            <Group title="Example 06: List with Custom Initial Capacity" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Collapse/Collapse - 17.jpg" alt=""/>            
                    <p>
                        This example shows how to initialize a ListC{"<string>"} with a custom capacity. 
                        The list is created with a capacity of 5, and two strings are added to it.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapse/Collapse - 06.gif" alt=""/>            
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapse/Collapse - 19.jpg" alt=""/>                     
                </div>
            )}/>


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The <b2>[Collapse]</b2> attribute only affects classes and structs that are marked as Serializable and used in MonoBehaviour or ScriptableObject scripts.</li>
                <li>If no label is provided, the default behavior uses the field name as the label.</li>
                <li>Using the <b2>[Collapse]</b2> attribute does not impact the performance of the game or the Inspector significantly, as it is primarily a visual aid.</li>
                <li>The <b2>[Collapse]</b2> attribute works with the default Unity property drawer system and requires no additional setup beyond adding the attribute to your fields.</li>                
                <li>The ListC class is serialized and editable in Unity's Inspector, making it suitable for use with Unity's serialization system.</li>
                <li>The ListC structure allows users to expand and collapse the list in the Inspector, improving readability and usability for large lists.</li>
                <li>ListC implements several collection interfaces, including ICollection{"<T>"}, IList{"<T>"} and IEnumerable{"<T>"}, making it compatible with a wide range of collection-based operations.</li>
            </ul>
       </div>
    );
}