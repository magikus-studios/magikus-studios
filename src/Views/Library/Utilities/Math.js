import React from "react";
import Group from "Components/Group";

export default function Function() {

    
    return (
        <div className="c-light-2">           
            <h1 className="text-center">Math Utilities</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Math utilities consist of a collection of extension methods that provide operations for basic number and mathematical manipulations. 
                These methods are applicable to types like int, float, Vector2, Vector3, Vector2Int, Vector3Int, Color and Rect. 
            </h6>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The methods are designed to simplify complex mathematical operations while offering flexibility across multiple data types. 
                They include operations such as Add, Multiply, Complement, Modulo, Power, Root, Inverse, Abs, Sign, Min, Max, Clamp, ClampRange, Wrap and WrapRange.
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
            <h4 className="c-light-1 p-3">Example 01: Basic Mathematical Operations on Integers</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Math/Math - 01.jpg" alt=""/>            
            <h4 className="c-light-1 p-3">Example 02: Using UMath on Float Values</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Math/Math - 02.jpg" alt=""/>            
            <h4 className="c-light-1 p-3">Example 03: Vector2 Manipulations</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Math/Math - 03.jpg" alt=""/>            

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>Each method adapts the operation for the specific data type. For instance, Add and Multiply functions behave differently when applied to vectors versus floats.</li>
                <li>The Wrap and Clamp functions are particularly useful for keeping values within limits, for example, to ensure that colors stay within valid ranges or positions remain bounded.</li>
                <li>Methods such as Inverse and Power are helpful for mathematical transformations on game objects, such as scaling or positioning.</li>
            </ul>
                        
            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The Math utilities provide a powerful toolkit for performing mathematical operations across a variety of data types. 
                These methods simplify common tasks like clamping, wrapping or applying arithmetic transformations, making them invaluable for game development and UI manipulation. 
                By offering consistent method signatures across different types, they ensure that developers can handle complex mathematical computations with minimal effort.
            </p>
       </div>
    );
}