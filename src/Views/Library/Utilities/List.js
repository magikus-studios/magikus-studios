import React from "react";
import Group from "Components/Group";

export default function Function() {

    
    return (
        <div className="c-light-2">           
            <h1 className="text-center">List Utilities</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The List utilities provide a range of helper methods designed to enhance the functionality of arrays and lists, especially in game development scenarios. 
            </h6>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                These utilities make it easier to manipulate, access and modify elements within arrays and lists through a variety of convenient operations. 
                The supported methods include accessing elements from the last position, concatenating multiple lists, splitting, creating subsets, reversing order, swapping elements, shifting, shuffling and moving elements between positions.
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
            
            <h4 className="c-light-1 p-3">Example</h4>
            <p className="pad-left-3">
                Here’s an example of how to use each method:
            </p>
            <img className="block-center mar-bottom-3 img-border w-100" src="images/Library/Utilities/List/List - 01.jpg" alt=""/>            

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The Shift method can shift elements to either the left or the right depending on whether the shift value is positive or negative.</li>
                <li>When using Swap, ensure that both indices are valid, otherwise an error may occur.</li>
                <li>The Shuffle method leverages randomness, so the output may differ each time the function is called.</li>
            </ul>

            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The List utilities provide a powerful and flexible set of methods for manipulating arrays and lists, making them especially useful in game development where such manipulations are common. 
                These utilities allow developers to streamline their workflows by offering intuitive, easy-to-use functions for handling complex list and array operations.
            </p>
       </div>
    );
}