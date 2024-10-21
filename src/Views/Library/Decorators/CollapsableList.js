import React from "react";

export default function Function() {
    
    
    return (
        <div className="c-light-2">           
            <h1 className="text-center">Collapsable List</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The ListC{"<T>"} class is a custom collection, designed to offer a serialized, editable list of items in Unity's Inspector. 
                It extends the functionality of Unity's built-in List{"<T>"} by providing a flexible and user-friendly interface for managing lists directly within the Unity editor. 
                The ListC structure enhances the inspector experience, allowing users to expand and collapse the list, making it easier to navigate and manage large collections of data.
            </h6>

            <h3 className="p-2">How it Works</h3>

            <div className="p-3">
                <h4 className="c-light-1 pad-left-2">ListC Class</h4>
                <h5 className="c-light-1 pad-left-3">Constructors</h5>
                <ul className="property-list">
                    <li><b1>ListC</b1>(): Initializes an empty ListC{"<T>"} instance.</li>
                    <li><b1>ListC</b1>(<b2>IEnumerable{"<T>"}</b2> <b1>collection</b1>): Initializes a ListC{"<T>"} instance with elements copied from the specified collection.</li>
                    <li><b1>ListC</b1>(<b2>int</b2> <b1>capacity</b1>): Initializes a ListC{"<T>"} instance with the specified initial capacity.</li>
                    <li><b1>ListC</b1>(<b2>List{"<T>"}</b2> <b1>list</b1>): Initializes a ListC{"<T>"} instance with elements copied from the specified list.</li>
                </ul>
                <h5 className="c-light-1 pad-left-3">Parameters</h5>
                <ul className="property-list">
                    <li><b2>IEnumerable{"<T>"}</b2> <b1>collection</b1>: A collection of elements to copy to the list.</li>
                    <li><b2>int</b2> <b1>capacity</b1>: The number of elements that the list can initially store.</li>
                    <li><b2>List{"<T>"}</b2> <b1>list</b1>: A list of elements to copy to the new list.</li>
                </ul>
            </div>
            

            <h3 className="p-2">How to Use</h3>

            <h4 className="c-light-1 p-3">Example 01: Simple List of Integers</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/CollapsableList/Collapsable List - 01.jpg" alt=""/>            
            <p className="pad-left-3">
                This example demonstrates how to create and use a ListC{"<int>"} to store integers. 
                The list is populated with three integers, and the first element is printed to the console.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/CollapsableList/Collapsable List - 02.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/CollapsableList/Collapsable List - 03.jpg" alt=""/>                     

            <h4 className="c-light-1 p-3">Example 02: List of Custom Objects</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/CollapsableList/Collapsable List - 04.jpg" alt=""/>            
            <p className="pad-left-3">
                This example demonstrates how to use ListC to manage a list of custom objects, such as Item. 
                The list is used to store Item objects, and the name of the second item is printed to the console.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/CollapsableList/Collapsable List - 05.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/CollapsableList/Collapsable List - 06.jpg" alt=""/>                     

            <h4 className="c-light-1 p-3">Example 03: List with Custom Initial Capacity</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/CollapsableList/Collapsable List - 07.jpg" alt=""/>            
            <p className="pad-left-3">
                This example shows how to initialize a ListC{"<string>"} with a custom capacity. 
                The list is created with a capacity of 5, and two strings are added to it.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/CollapsableList/Collapsable List - 08.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/CollapsableList/Collapsable List - 09.jpg" alt=""/>                     

             
            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The ListC class is serialized and editable in Unity's Inspector, making it suitable for use with Unity's serialization system.</li>
                <li>The ListC structure allows users to expand and collapse the list in the Inspector, improving readability and usability for large lists.</li>
                <li>ListC implements several collection interfaces, including ICollection{"<T>"}, IList{"<T>"} and IEnumerable{"<T>"}, making it compatible with a wide range of collection-based operations.</li>
            </ul>

            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The ListC class is a versatile and powerful tool for managing lists in Unity. 
                By combining the flexibility of a standard list with enhanced editor capabilities, it provides a user-friendly way to handle collections of data within the Unity environment. 
                Whether you're working with simple types or complex custom objects, ListC streamlines the process of managing and manipulating lists in your Unity projects.
            </p>
       </div>
    );
}