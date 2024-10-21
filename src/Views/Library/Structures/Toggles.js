import React from "react";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center">Toggles</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Toggle structures in the Magikus Library provide a flexible mechanism for managing binary states (on/off) associated with a value of any type. 
                This structure is highly useful in game development where you might need to toggle certain behaviors or states based on user input, game events or other conditions. 
                The Toggle structure supports attaching an action or logging a message when the state is either "on" or "off", enabling controlled and context-aware execution. 
            </h6>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The primary purpose of the Toggle structures is to encapsulate a state (true/false) with a value and offer utility methods that perform actions or log messages based on the state. 
                It is highly useful in scenarios such as:
            </p>
            <ul>
                <li>Enabling or disabling game features (e.g., toggling a debug mode).</li>
                <li>Managing player abilities or status effects (e.g., activating a shield or boost).</li>
                <li>Controlling UI elements (e.g., showing or hiding components).</li>
            </ul>
            <p className="pad-left-2">
                This structure is useful for managing states and ensuring that certain actions only happen when a particular condition is met.
            </p>


            <h3 className="p-2">How it Works</h3>

            <div className="p-3">
                <h4 className="c-light-1 pad-left-2">Toggle</h4>
                <p className="pad-left-3">
                    The Toggle attribute class provides several constructors to allow for flexible customization of the toggle button. 
                    Here are the constructors available:
                </p>
                <h5 className="c-light-1 pad-left-3">Properties</h5>
                <ul className="property-list">
                    <li><b2>bool</b2> <b1>State</b1>: State of the structure</li>
                    <li><b2>T</b2> <b1>Value</b1>: Value of the structure</li>
                </ul>
                <h5 className="c-light-1 pad-left-3">Set</h5>
                <ul className="property-list">
                    <li><b2>void</b2> <b1>Set</b1>(<b2>Toggle{"<T>"}</b2> <b1>newValue</b1>): Sets the state of the Toggle based on another Toggle</li>
                </ul>
                <h5 className="c-light-1 pad-left-3">If On</h5>
                <ul className="property-list">
                    <li><b2>void</b2> <b1>IfOn</b1>(<b2>string</b2> <b1>message</b1>): Prints a message to the console if the state is true</li>
                    <li><b2>void</b2> <b1>IfOn</b1>(<b2>object</b2> <b1>message</b1>): Prints the object to the console if the state is true</li>
                    <li><b2>void</b2> <b1>IfOn</b1>(<b2>Action</b2> <b1>action</b1>): Invokes an action if the state is true</li>
                    <li><b2>void</b2> <b1>IfOn</b1>(<b2>Action{"<T>"}</b2> <b1>action</b1>): Invokes an action that takes the value as a parameter if the state is true</li>
                </ul>
                <h5 className="c-light-1 pad-left-3">If Off</h5>
                <ul className="property-list">
                    <li><b2>void</b2> <b1>IfOff</b1>(<b2>string</b2> <b1>message</b1>): Prints a message to the console if the state is false</li>
                    <li><b2>void</b2> <b1>IfOff</b1>(<b2>object</b2> <b1>message</b1>): Prints the object to the console if the state is false</li>
                    <li><b2>void</b2> <b1>IfOff</b1>(<b2>Action</b2> <b1>action</b1>): Invokes an action if the state is false</li>
                    <li><b2>void</b2> <b1>IfOff</b1>(<b2>Action{"<T>"}</b2> <b1>action</b1>): Invokes an action that takes the value as a parameter if the state is false</li>
                </ul>
            </div>


            <h3 className="p-2">How to Use</h3>
            <p className="pad-left-2">
                The Toggle attribute can be applied to boolean fields within a MonoBehaviour or ScriptableObject class to visualize them as toggle buttons. 
                Here are some examples demonstrating its usage:

            </p>
            <ul>
                <li><b>Creating a Toggle Structure</b>: You can create a Toggle{"<T>"} structure with a specified type T. The type T represents the value you want to associate with the toggle state.</li>
                <li><b>Setting the State and Value</b>: You can set the state to either true (on) or false (off) and assign a value to it.</li>
                <li><b>Using Conditional Actions</b>: You can use methods like IfOn and IfOff to perform specific actions when the toggle state is on or off. These methods allow you to log messages, invoke actions or execute a function that uses the associated value.</li>
            </ul>

            <h4 className="c-light-1 p-3">Example 01: Toggle a Debug Mode</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Toggles/Toggles - 01.jpg" alt=""/>            
            <p className="pad-left-3"> 
                In this example, a Toggle{"<string>"} is used to manage a debug mode. The state is set to true, and the value is "Debug Mode Active". 
                The IfOn method is used to log a message if the debug mode is on.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Toggles/Toggles - 02.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Toggles/Toggles - 03.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 02: Toggle UI Visibility</h4>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Toggles/Toggles - 04.jpg" alt=""/>            
            <p className="pad-left-3"> 
                This example demonstrates toggling the visibility of a UI panel. 
                The Toggle{"<GameObject>"} is used to manage the state of the UI panel. When the state changes, the IfOn method activates the panel and IfOff hides it.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Toggles/Toggles - 05.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Toggles/Toggles - 06.jpg" alt=""/>            


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The IfOn and IfOff methods provide flexibility by allowing you to pass in a delegate or lambda expression that gets executed based on the toggle's state.</li>
                <li>The Toggle structures are integrated with Unity’s Editor through custom property drawers, making them easy to manipulate within the Inspector.</li>
            </ul>

            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The Toggle structures in the Magikus Library offer a robust and flexible solution for managing binary states alongside associated values. 
                Whether it's enabling/disabling game features, controlling UI elements or managing player abilities, these structures help organize and streamline the code, making it more maintainable and understandable. 
                The utility methods provided ensure that actions are performed only when relevant, contributing to cleaner, more efficient code.
            </p>
       </div>
    );
}