import React from "react";
import Group from "Components/Group";

export default function Function() {

    
    return (
        <div className="c-light-2">           
            <h1 className="text-center">Randget Utilities</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Randget utilities consist of a collection of random value getters. 
                These utilities are tailored for game development to add unpredictability and variation in values such as booleans, numbers, vectors, colors and even randomly selected elements from lists or arrays. 
            </h6>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                They are especially beneficial in enhancing the realism of interactions and randomization in games.            
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
                Let’s go through a few examples to demonstrate how these methods work in practice.
            </p>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Randget/Randget - 01.jpg" alt=""/>            
            <p className="pad-left-3">
                This script showcases the use of the Randget utility in Unity to generate random values of various types, including bool, int, floats, 2D and 3D vectors, colors and points in both screen and world space. 
                It starts by generating and logging random values for each type, such as a random boolean, an integer between 0 and 100, a float between 1.0 and 10.0 and vectors with specified ranges. 
                Additionally, it generates a random color and retrieves random points on the screen and in the world space, making it particularly useful for adding randomness to game mechanics.
            </p>


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The random number methods allow flexibility in specifying ranges, making them ideal for scenarios where you want controlled randomness.</li>
                <li>The vector and point getters are excellent for game physics, pathfinding and character movements where randomization helps simulate more natural actions.</li>
                <li>Using the color getters can make procedural generation of visual effects simple, while array and list methods are ideal for selecting random objects, assets or game states.</li>
            </ul>
                        
            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The Randget utilities provide a robust set of tools for developers, especially in game development, where randomness can add complexity and unpredictability to interactions. 
                Whether you’re generating random points in a 3D space, selecting random items from an array or applying random colors to visual elements, the Randget methods are efficient and easy to implement. 
                These utilities not only speed up development but also enhance the natural feel of in-game dynamics, making them invaluable for any game development project requiring randomness.
            </p>
       </div>
    );
}