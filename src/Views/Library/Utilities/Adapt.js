import React from "react";
import Group from "Components/Group";

export default function Function() {

    
    return (
        <div className="c-light-2">           
            <h1 className="text-center">Adapt Utilities</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Adapt utility class in the Magikus Library provides a comprehensive set of static and extension methods for various data type conversions and formatting. 
            </h6>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                These methods facilitate transforming bool, int, floats, vectors, arrays, lists, colors and actions values into different representations, making data manipulation in Unity projects easier and more efficient.
            </p>

            <h3 className="p-2">How it Works</h3>
 
            <Group title="Vector2" content={(
                <div className="p-3">
                    <p className="pad-left-3">
                        Creates a Vector2 instance with both components set to the same value, by copying the values from another Vector2 or with specified x and y components.
                    </p>
                    <h5 className="c-light-1 pad-left-3">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector2</b2> <b1>Vector2</b1>(<b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Vector2</b1>(<b2>Vector2</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Vector2</b1>(<b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>)</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>value</b1>: The value to set for both the x and y components</li>                    
                        <li><b2>Vector2</b2> <b1>vector</b1>: The source Vector2 from which to copy values</li>                    
                        <li><b2>float</b2> <b1>x</b1>: The value for the x component</li>                    
                        <li><b2>float</b2> <b1>y</b1>: The value for the y component</li>                    
                    </ul>
                </div>
            )}/>

            <h3 className="p-2">How to Use</h3>
            <p className="pad-left-3">
                Below are examples demonstrating the usage of the Adapt utilities methods across various scenarios.
            </p>
            <img className="block-center mar-bottom-3 img-border w-100" src="images/Library/Utilities/Adapt/Adapt - 01.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-100" src="images/Library/Utilities/Adapt/Adapt - 02.jpg" alt=""/>            

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>Ensure that the Magikus namespace is included at the beginning of your script to access the Adapt utility methods.</li>
                <li>The methods are implemented as extension methods, so they can be called directly on the instances of the types they extend.</li>
                <li>Since these are extension methods, they add an additional layer of abstraction which may have minor performance implications in performance-critical applications.</li>
            </ul>
                        
            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The Adapt utilities class provides a comprehensive suite of methods to transform various types, especially useful in game development using Unity. 
                By offering a range of conversions, from booleans to vectors, colors and actions, these utilities enhance code readability, reduce boilerplate and improve the overall developer experience. 
                They are particularly valuable for developers who need to adapt types frequently in their applications, providing a flexible and efficient solution to common programming tasks.
            </p>
       </div>
    );
}