import React from "react";
import Group from "Components/Group";

export default function Function() {

    
    return (
        <div className="c-light-2">           
            <h1 className="text-center">Easing Utilities</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Easing utilities are a comprehensive set of static methods housed within the Easing static class, designed to provide developers with a wide array of easing functions for creating smooth animations, transitions and subtle effects in their code.
            </h6>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                These utilities include 13 different easing types, each with three variations: In, Out and Both.
                These variations describe how the easing function will be applied over time, whether at the beginning (In), the end (Out) or both (Both).
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
            <h4 className="c-light-1 p-3">Example 01: Use of Circular Easing Functions</h4>
            <p className="pad-left-3">
                To create transitions that start and end at the same position you can use one of these circular easing:
            </p>
            <img className="block-center mar-bottom-3 img-border w-65" src="images/Library/Utilities/Easing/Easing - 01.jpg" alt=""/>            
            <h4 className="c-light-1 p-3">Example 02: Smooth Transition with Easing</h4>
            <p className="pad-left-3">
                Suppose you want to create an animation that starts slowly, accelerates and then slows down again at the end, you can use some of the smooth transition easing function:            
            </p>
            <img className="block-center mar-bottom-3 img-border w-65" src="images/Library/Utilities/Easing/Easing - 02.jpg" alt=""/>            
            <h4 className="c-light-1 p-3">Example 03: Applying a Bouncy Effect</h4>
            <p className="pad-left-3">
                To simulate a bouncy effect, such as an object dropping to the ground and bouncing, you can use the bounce easing functions:
            </p>
            <img className="block-center mar-bottom-3 img-border w-65" src="images/Library/Utilities/Easing/Easing - 03.jpg" alt=""/>            
            <h4 className="c-light-1 p-3">Example 04: Dynamic Easing Selection with GetEasingFunc</h4>
            <p className="pad-left-3">
                In cases where you want to dynamically choose the easing function, perhaps based on user input, you can use GetEasingFunc:
            </p>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Easing/Easing - 04.jpg" alt=""/>            

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The In, Out and Both variations provide flexibility for applying the easing function at different points of the animation.</li>
                <li>The Elastic and Bounce functions are especially useful for creating realistic motion effects.</li>
                <li>All easing functions take a float value (typically representing time normalized between 0 and 1) and return a float value that represents the eased output.</li>
                <li>Using GetEasingFunc can simplify your code if you need to switch between different easing functions dynamically.</li>
            </ul>
                        
            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The Easing utilities provide a powerful set of tools for creating smooth and visually appealing transitions in your animations. 
                With 13 different types and multiple variations, you can fine-tune the motion effects to fit your specific needs. 
                Whether you're animating UI elements, creating game effects or just adding a touch of polish to your project, these utilities offer a wide range of possibilities for enhancing the user experience.
            </p>
       </div>
    );
}