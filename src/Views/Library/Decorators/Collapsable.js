import React from "react";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center">Collapsable Decorator</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Collapsable attribute and the ListC{"<T>"} class are custom tools designed to enhance the Unity Inspector's usability and organization. 
                The Collapsable attribute allows classes and structs to be collapsible within the Inspector, which is especially useful for organizing complex data structures by letting developers expand or collapse their fields. 
                Meanwhile, the ListC{"<T>"} class provides a serialized, editable list of items directly within the Inspector, extending Unity's built-in List{"<T>"} with a more user-friendly interface. 
                It offers the ability to expand and collapse lists, making it easier to navigate and manage large collections of data within the Unity editor.
            </h6>

            <h3 className="p-2">How it Works</h3>

            <div className="p-3">
                <h4 className="c-light-1 pad-left-2">Collapsable Attribute</h4>
                <p className="pad-left-3">
                    The Collapsable attribute is a custom Unity attribute designed to make classes and structs collapsible in the Unity Inspector. 
                    This functionality is particularly useful for improving the organization and readability of complex data structures by allowing developers to expand and collapse the fields of classes and structs. 
                    The Collapsable attribute class provides constructors for initializing the attribute, optionally with a label to customize the display text for the collapsible section.
                </p>
                <h5 className="c-light-1 pad-left-3">Constructors</h5>
                <ul className="property-list">
                    <li><b1>CollapsableAttribute</b1>(): Initializes the attribute without a label.</li>
                    <li><b1>CollapsableAttribute</b1>(<b2>string</b2> <b1>label</b1>): Initializes the attribute with a custom label.</li>                    
                </ul>
                <h5 className="c-light-1 pad-left-3">Parameters</h5>
                <ul className="property-list">
                    <li><b2>string</b2> <b1>label</b1> (Optional): A custom label for the collapsible section. If no label is provided, the default field name will be used as the label. Default is “”.</li>                    
                </ul>

                <h4 className="c-light-1 pad-left-2">ListC Class</h4>
                <p className="pad-left-3">
                    The ListC{"<T>"} class is a custom collection, designed to offer a serialized, editable list of items in Unity's Inspector. 
                    It extends the functionality of Unity's built-in List{"<T>"} by providing a flexible and user-friendly interface for managing lists directly within the Unity editor. 
                    The ListC structure enhances the inspector experience, allowing users to expand and collapse the list, making it easier to navigate and manage large collections of data.
                </p>
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
            <p className="pad-left-2">
                To use the Collapsable attribute, apply it to classes or structs that you want to make collapsible in the Unity Inspector. 
                Below are examples demonstrating how to use this attribute:
            </p>

            <h4 className="c-light-1 p-3">Example 01: Making a Struct Collapsable</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Collapsable/Collapsable - 01.jpg" alt=""/>            
            <p className="pad-left-3">
                In this example, the PlayerSettings struct is made collapsable in the Inspector. 
                When the component is selected, the PlayerSettings field can be expanded or collapsed.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapsable/Collapsable - 02.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapsable/Collapsable - 03.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 02: Making a Class Collapsable with a Custom Label</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Collapsable/Collapsable - 04.jpg" alt=""/>            
            <p className="pad-left-3">
                Here, the AdvancedSettings class is collapsable and uses a custom label "Advanced" for the collapsible section in the Inspector.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapsable/Collapsable - 05.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapsable/Collapsable - 06.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 03: Nested Collapsable Classes</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Collapsable/Collapsable - 07.jpg" alt=""/>            
            <p className="pad-left-3"> 
                In this example, GraphicsSettings is a class nested inside GeneralSettings and are both made collapsable with custom labels. 
                Each section can be expanded or collapsed independently in the Inspector.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapsable/Collapsable - 08.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapsable/Collapsable - 09.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapsable/Collapsable - 10.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 04: Simple List of Integers</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Collapsable/Collapsable - 11.jpg" alt=""/>            
            <p className="pad-left-3">
                This example demonstrates how to create and use a ListC{"<int>"} to store integers. 
                The list is populated with three integers, and the first element is printed to the console.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapsable/Collapsable - 12.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapsable/Collapsable - 13.jpg" alt=""/>                     

            <h4 className="c-light-1 p-3">Example 05: List of Custom Objects</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Collapsable/Collapsable - 14.jpg" alt=""/>            
            <p className="pad-left-3">
                This example demonstrates how to use ListC to manage a list of custom objects, such as Item. 
                The list is used to store Item objects, and the name of the second item is printed to the console.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapsable/Collapsable - 15.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapsable/Collapsable - 16.jpg" alt=""/>                     

            <h4 className="c-light-1 p-3">Example 06: List with Custom Initial Capacity</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Collapsable/Collapsable - 17.jpg" alt=""/>            
            <p className="pad-left-3">
                This example shows how to initialize a ListC{"<string>"} with a custom capacity. 
                The list is created with a capacity of 5, and two strings are added to it.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapsable/Collapsable - 18.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Collapsable/Collapsable - 19.jpg" alt=""/>                     


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The Collapsable attribute only affects classes and structs that are marked as Serializable and used in MonoBehaviour or ScriptableObject scripts.</li>
                <li>If no label is provided, the default behavior uses the field name as the label.</li>
                <li>Using the Collapsable attribute does not impact the performance of the game or the Inspector significantly, as it is primarily a visual aid.</li>
                <li>The Collapsable attribute works with the default Unity property drawer system and requires no additional setup beyond adding the attribute to your fields.</li>                
                <li>The ListC class is serialized and editable in Unity's Inspector, making it suitable for use with Unity's serialization system.</li>
                <li>The ListC structure allows users to expand and collapse the list in the Inspector, improving readability and usability for large lists.</li>
                <li>ListC implements several collection interfaces, including ICollection{"<T>"}, IList{"<T>"} and IEnumerable{"<T>"}, making it compatible with a wide range of collection-based operations.</li>
            </ul>
            
            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The Collapsable attribute and the ListC class are powerful tools designed to enhance the Unity Inspector's usability and data management capabilities. 
                The Collapsable attribute helps make complex data structures more manageable by providing collapsible sections, improving organization and readability. 
                This allows developers to focus on relevant settings without being overwhelmed by too much information, whether dealing with simple structs or nested classes. 
                On the other hand, the ListC class offers a versatile solution for managing lists in Unity, combining the flexibility of standard lists with enhanced editor capabilities. 
                It provides a user-friendly way to handle collections of data, simplifying the process of managing and manipulating lists, regardless of whether you are working with simple types or complex custom objects. 
                Together, these tools streamline the development process, keeping the Unity Inspector neat and efficient.
            </p>
       </div>
    );
}