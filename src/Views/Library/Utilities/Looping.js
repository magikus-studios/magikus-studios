import React from "react";
import Group from "Components/Group";

export default function Function() {

    
    return (
        <div className="c-light-2">           
            <h1 className="text-center">Looping Utilities</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Looping utilities consist of a collection of static and extension methods designed to simplify looping through different types of collections, including arrays, lists and dictionaries. 
            </h6>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                These methods allow looping to occur either from the start to the end or in reverse (backward), offering significant flexibility when iterating over items. 
                The utilities can be used with both simple data types like integers and floats, as well as more complex structures like vectors, colors, AnimationCurves, Texture2Ds, Sprites and character arrays (strings).            
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
                The Looping Utilities simplify looping by abstracting the mathematical complexity behind iterating through collections. 
                Below are three practical examples showing how each of the main looping methods can be applied.
            </p>
            <h4 className="c-light-1 p-3">Example 01: Looping Forward</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Looping/Looping - 01.jpg" alt=""/>            
            <h4 className="c-light-1 p-3">Example 02: Looping Backward</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Looping/Looping - 02.jpg" alt=""/>            
            <h4 className="c-light-1 p-3">Example 03: Looping Through AnimationCurves</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Looping/Looping - 03.jpg" alt=""/>            
            <h4 className="c-light-1 p-3">Example 04: Looping Through Texture2D Colors</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Looping/Looping - 04.jpg" alt=""/>            

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The methods optimize for performance by abstracting unnecessary calculations when looping through large collections like textures or large data arrays.</li>
                <li>These utilities are compatible with a variety of Unity data types, making them highly flexible for different use cases like animations, texture manipulations and complex data structures.</li>
                <li>The utilities can be extended to accommodate other Unity objects or custom classes if needed, by defining additional extension methods.</li>
                <li>For extremely large collections, it is recommended to manage memory carefully when looping through textures or arrays to avoid performance hits.</li>
            </ul>
                        
            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The Looping utilities offer an easy and intuitive way to work with collections in Unity, providing methods for forward and backward looping, and specialized utilities for working with Unity’s AnimationCurves, textures and strings. 
                By abstracting the complexity of iteration, developers can focus on logic and functionality without worrying about the mathematical intricacies of looping, whether through integers, colors or complex data structures. 
                This suite of utilities significantly enhances code readability and maintainability, making them a valuable tool in any Unity developer's toolkit.
            </p>
       </div>
    );
}