import React from "react";
import Group from "Components/Group";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Clist Wrapper</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Wrapper class that allow Lists to be Collapsed in the Unity Inspector
            </h6>
            
            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                This structure is a wrapper class that enables Lists to be collapsible in the Inspector, which is invaluable for organizing complex data structures. 
                This structure is designed to enhance Unity Inspector usability and improve data management. 
                By enabling lists to expand or collapse, developers can focus on relevant settings without the distraction of excessive information, whether managing simple structs or nested classes. 
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Clist/Clist - 04.gif" alt=""/>            
            </div>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Clist{"<T>"} class extends Unity's built-in List{"<T>"} by providing a serialized, editable list interface in the Inspector. 
                This interface includes the ability to expand and collapse lists, making it easier to navigate and manage extensive data collections within Unity. 
            </p>
            <Group title="Clist Class" content={(
                <div>
                    <p>
                        The Clist{"<T>"} class is a custom collection, designed to offer a serialized, editable list of items in Unity's Inspector. 
                        It extends the functionality of Unity's built-in List{"<T>"} by providing a flexible and user-friendly interface for managing lists directly within the Unity editor. 
                        The Clist structure enhances the inspector experience, allowing users to expand and collapse the list, making it easier to navigate and manage large collections of data.
                    </p>
                    <h5 className="c-light-1">Constructors</h5>
                    <ul className="property-list">
                        <li><b1>Clist</b1>()</li>
                        <li><b1>Clist</b1>(<b2>IEnumerable{"<T>"}</b2> <b1>collection</b1>)</li>
                        <li><b1>Clist</b1>(<b2>int</b2> <b1>capacity</b1>)</li>
                        <li><b1>Clist</b1>(<b2>List{"<T>"}</b2> <b1>list</b1>)</li>
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
                Below are examples demonstrating how to use this structure:
            </p>
            <Group title="Example 01: Simple List of Integers" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Clist/Clist - 11.jpg" alt=""/>            
                    <p>
                        This example demonstrates how to create and use a Clist{"<int>"} to store integers. 
                        The list is populated with three integers, and the first element is printed to the console.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Clist/Clist - 04.gif" alt=""/>            
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Clist/Clist - 13.jpg" alt=""/>                     
                </div>
            )}/>
            <Group title="Example 02: List of Custom Objects" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Clist/Clist - 14.jpg" alt=""/>            
                    <p>
                        This example demonstrates how to use Clist to manage a list of custom objects, such as Item. 
                        The list is used to store Item objects, and the name of the second item is printed to the console.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Clist/Clist - 05.gif" alt=""/>            
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Clist/Clist - 16.jpg" alt=""/>                     
                </div>
            )}/>
            <Group title="Example 03: List with Custom Initial Capacity" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Clist/Clist - 17.jpg" alt=""/>            
                    <p>
                        This example shows how to initialize a Clist{"<string>"} with a custom capacity. 
                        The list is created with a capacity of 5, and two strings are added to it.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Clist/Clist - 06.gif" alt=""/>            
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Clist/Clist - 19.jpg" alt=""/>                     
                </div>
            )}/>


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The Clist class is serialized and editable in Unity's Inspector, making it suitable for use with Unity's serialization system.</li>
                <li>The Clist structure allows users to expand and collapse the list in the Inspector, improving readability and usability for large lists.</li>
                <li>Clist implements several collection interfaces, including ICollection{"<T>"}, IList{"<T>"} and IEnumerable{"<T>"}, making it compatible with a wide range of collection-based operations.</li>
            </ul>
       </div>
    );
}