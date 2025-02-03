import React from "react";
import Group from "Components/Group";

export default function Function() {
    
    
    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Set Structure</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Generic Structures to manage Multi-Dimensional Data for Independent Axes Settings 
            </h6>
            
            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Set structures provide a robust and versatile solution for managing multi-axis data in Unity. 
                This includes Set2{"<T>"}, Set3{"<T>"} and Set4{"<T>"}, each designed to store values of a specified type T (such as bool, AnimationCurves, enums, or custom types) across their respective axes. 
                These structures are ideal for handling complex animations, conditional states, and game settings, offering a clean, reusable framework adaptable to diverse applications. 
                Seamlessly integrated into the Unity Editor, these Vector structures enhance both the functionality and maintainability of projects, streamlining development workflows.
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Sets/Sets - 02.jpg" alt=""/>            
            </div>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The purpose of these structures is to provide a flexible and reusable system for storing and manipulating multi-axis data in various contexts and are ideal 
                for managing independent axis settings for various types, allowing complex configurations without needing separate structures for each specific case 
                such as managing the interpolation of different animation states (e.g., a Vector3{"<AnimationCurve>"} to animate X, Y, and Z axes independently).
            </p>
            <Group title="Set2" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul>
                        <li><b2>T</b2> <b1>x</b1>: X value of the set</li>
                        <li><b2>T</b2> <b1>y</b1>: Y value of the set</li>
                    </ul>
                </div>
            )}/>
            <Group title="Set3" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul>
                        <li><b2>T</b2> <b1>x</b1>: X value of the set</li>
                        <li><b2>T</b2> <b1>y</b1>: Y value of the set</li>
                        <li><b2>T</b2> <b1>z</b1>: Z value of the set</li>
                    </ul>
                </div>
            )}/>
            <Group title="Set4" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul>
                        <li><b2>T</b2> <b1>r</b1>: Red value of the set</li>
                        <li><b2>T</b2> <b1>g</b1>: Green value of the set</li>
                        <li><b2>T</b2> <b1>b</b1>: Blue value of the set</li>
                        <li><b2>T</b2> <b1>a</b1>: Alpha value of the set</li>        
                    </ul>
                </div>
            )}/>
 
            <h3 className="p-2">Examples</h3>
            <p className="pad-left-2">
                The Set structures are easy to integrate and use within the Unity environment. 
                You can create these structures by specifying the type T you want to store in each axis.
            </p>
            <ul>
                <li>These structures are instantiated with the type parameter T, representing the data type for each axis (x, y, z).</li>
                <li>You can assign values to each axis (e.g., x, y, z for vectors or r, g, b, a for colors) and access them as needed.</li>
                <li>The Set structures are integrated with Unity’s Editor using custom property drawers, allowing you to easily modify and visualize the values within the Inspector.</li>
            </ul>
            <Group title="Example 01: Managing Animation Curves with Vector2" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Sets/Sets - 01.jpg" alt=""/>            
                    <p>  
                        In this example, a Set2{"<AnimationCurve>"} is used to store and manage animation curves for the X and Y axes. 
                        Each curve is independently evaluated based on the time, allowing for complex animations.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Sets/Sets - 02.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 02: Custom Boolean Settings with Vector3" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Sets/Sets - 03.jpg" alt=""/>            
                    <p>
                        This example demonstrates using a Set3{"<bool>"} structure to manage toggles for three different features. 
                        Each axis represents a bool value indicating whether a particular feature is enabled.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Sets/Sets - 04.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 03: Configuring Game Settings with Enum" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Sets/Sets - 05.jpg" alt=""/>            
                    <p> 
                        This example utilizes Set2{"<Quality>"} and Set2{"<Resolution>"} to store game settings for quality and resolution. 
                        The settings are then applied at the start of the game, allowing easy configuration and adjustment.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Sets/Sets - 06.jpg" alt=""/>            
                </div>
            )}/>

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The Set2, Set3, and Set4 structures are generic, allowing them to be used with any type T. This flexibility makes them ideal for complex scenarios where standard Unity vectors or colors might not suffice.</li>
                <li>The structures are fully integrated into Unity's Inspector through custom property drawers, making it easy to visualize and modify the values during development.</li>
                <li>These structures provide independent control over each axis, which is beneficial when different conditions or behaviors are needed for each dimension.</li>
            </ul>
       </div>
    );
}