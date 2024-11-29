import React from "react";

export default function Function() {
    
    
    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Vector Structure</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Generic Structures to manage Multi-Dimensional Data for Independent Axes Settings 
            </h6>
            
            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Vector structures provide a robust and versatile solution for managing multi-axis data in Unity. 
                This includes Vector2{"<T>"}, Vector3{"<T>"} and Color{"<T>"}, each designed to store values of a specified type T (such as bool, AnimationCurves, enums, or custom types) across their respective axes. 
                These structures are ideal for handling complex animations, conditional states, and game settings, offering a clean, reusable framework adaptable to diverse applications. 
                Seamlessly integrated into the Unity Editor, these Vector structures enhance both the functionality and maintainability of projects, streamlining development workflows.
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Vectors/Vectors - 02.jpg" alt=""/>            
            </div>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The purpose of these structures is to provide a flexible and reusable system for storing and manipulating multi-axis data in various contexts and are ideal 
                for managing independent axis settings for various types, allowing complex configurations without needing separate structures for each specific case 
                such as managing the interpolation of different animation states (e.g., a Vector3{"<AnimationCurve>"} to animate X, Y, and Z axes independently).
            </p>
        

            <h3 className="p-2">How it Works</h3>

            <div className="p-3">
                <h4 className="c-light-1 pad-left-2">Vector2</h4>
                <h5 className="c-light-1 pad-left-3">Properties</h5>
                <ul>
                    <li><b2>T</b2> <b1>x</b1>: X value of the vector</li>
                    <li><b2>T</b2> <b1>y</b1>: Y value of the vector</li>
                </ul>
                <h4 className="c-light-1 pad-left-2">Vector3</h4>
                <h5 className="c-light-1 pad-left-3">Properties</h5>
                <ul>
                    <li><b2>T</b2> <b1>x</b1>: X value of the vector</li>
                    <li><b2>T</b2> <b1>y</b1>: Y value of the vector</li>
                    <li><b2>T</b2> <b1>z</b1>: Z value of the vector</li>
                </ul>
                <h4 className="c-light-1 pad-left-2">Color</h4>
                <h5 className="c-light-1 pad-left-3">Properties</h5>
                <ul>
                    <li><b2>T</b2> <b1>r</b1>: Red value of the color</li>
                    <li><b2>T</b2> <b1>g</b1>: Green value of the color</li>
                    <li><b2>T</b2> <b1>b</b1>: Blue value of the color</li>
                    <li><b2>T</b2> <b1>a</b1>: Alpha value of the color</li>        
                </ul>
            </div>
 

            <h3 className="p-2">How to Use</h3>
            <p className="pad-left-2">
                The Vector structures are easy to integrate and use within the Unity environment. 
                You can create these structures by specifying the type T you want to store in each axis.
            </p>
            <ul>
                <li>These structures are instantiated with the type parameter T, representing the data type for each axis (x, y, z).</li>
                <li>You can assign values to each axis (e.g., x, y, z for vectors or r, g, b, a for colors) and access them as needed.</li>
                <li>The Vector structures are integrated with Unity’s Editor using custom property drawers, allowing you to easily modify and visualize the values within the Inspector.</li>
            </ul>

            <h4 className="c-light-1 p-3">Example 01: Managing Animation Curves with Vector2</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Vectors/Vectors - 01.jpg" alt=""/>            
            <p className="pad-left-3">  
                In this example, a Vector2{"<AnimationCurve>"} is used to store and manage animation curves for the X and Y axes. 
                Each curve is independently evaluated based on the time, allowing for complex animations.
            </p>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Vectors/Vectors - 02.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 02: Custom Boolean Settings with Vector3</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Vectors/Vectors - 03.jpg" alt=""/>            
            <p className="pad-left-3">
                This example demonstrates using a Vector3{"<bool>"} structure to manage toggles for three different features. 
                Each axis represents a bool value indicating whether a particular feature is enabled.
            </p>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Vectors/Vectors - 04.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 03: Configuring Game Settings with Enum</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Vectors/Vectors - 05.jpg" alt=""/>            
            <p className="pad-left-3"> 
                This example utilizes Vector2{"<Quality>"} and Vector2{"<Resolution>"} to store game settings for quality and resolution. 
                The settings are then applied at the start of the game, allowing easy configuration and adjustment.
            </p>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Vectors/Vectors - 06.jpg" alt=""/>            


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The Vector2, Vector3, and Color structures are generic, allowing them to be used with any type T. This flexibility makes them ideal for complex scenarios where standard Unity vectors or colors might not suffice.</li>
                <li>The structures are fully integrated into Unity's Inspector through custom property drawers, making it easy to visualize and modify the values during development.</li>
                <li>These structures provide independent control over each axis, which is beneficial when different conditions or behaviors are needed for each dimension.</li>
            </ul>
       </div>
    );
}