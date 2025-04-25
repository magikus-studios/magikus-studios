import React from "react";
import Group from "Components/Group";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Toggle Structure</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Versatile Structure for Associating Any Value Type with a Binary On/Off State
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Toggle structure provides a powerful and flexible solution for managing binary states alongside associated values, making it especially useful in game development scenarios where behaviors or states need to toggle based on designer configurations, user inputs or game events. 
                This structure allows you to attach actions or log messages whenever the state changes to "on" or "off," enabling controlled and context-aware functionality. 
                Whether used for enabling/disabling game features, controlling UI elements or managing player abilities, the Toggle structure helps to organize and streamline code, making it more maintainable and comprehensible. 
                The utility methods ensure that actions are executed only when relevant, resulting in cleaner and more efficient code.
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Toggles/Toggles - 03.jpg" alt=""/>            
            </div>

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
            <Group title="Toggle" content={(
                <div>
                    <p>
                        The Toggle attribute class provides several constructors to allow for flexible customization of the toggle button. 
                        Here are the constructors available:
                    </p>
                    <h5 className="c-light-1">Operators</h5>
                    <ul>
                        <li><b2>static implicit operator T</b2> (<b2>Toggle{"<T>"}</b2> <b1>value</b1>) {"=>"} <b1>value</b1>.Value</li>
                    </ul>
                    <h5 className="c-light-1">Properties</h5>
                    <ul>
                        <li><b2>bool</b2> <b1>State</b1>: State of the structure</li>
                        <li><b2>T</b2> <b1>Value</b1>: Value of the structure</li>
                    </ul>
                    <h5 className="c-light-1">Set</h5>
                    <ul>
                        <li><b2>void</b2> <b1>Set</b1>(<b2>Toggle{"<T>"}</b2> <b1>newValue</b1>): Sets the state of the Toggle based on another Toggle</li>
                    </ul>
                    <h5 className="c-light-1">If On</h5>
                    <ul>
                        <li><b2>void</b2> <b1>IfOn</b1>(<b2>string</b2> <b1>message</b1>): Prints a message to the console if the state is true</li>
                        <li><b2>void</b2> <b1>IfOn</b1>(<b2>object</b2> <b1>message</b1>): Prints the object to the console if the state is true</li>
                        <li><b2>void</b2> <b1>IfOn</b1>(<b2>Action</b2> <b1>action</b1>): Invokes an action if the state is true</li>
                        <li><b2>void</b2> <b1>IfOn</b1>(<b2>Action{"<T>"}</b2> <b1>action</b1>): Invokes an action that takes the value as a parameter if the state is true</li>
                    </ul>
                    <h5 className="c-light-1">If Off</h5>
                    <ul>
                        <li><b2>void</b2> <b1>IfOff</b1>(<b2>string</b2> <b1>message</b1>): Prints a message to the console if the state is false</li>
                        <li><b2>void</b2> <b1>IfOff</b1>(<b2>object</b2> <b1>message</b1>): Prints the object to the console if the state is false</li>
                        <li><b2>void</b2> <b1>IfOff</b1>(<b2>Action</b2> <b1>action</b1>): Invokes an action if the state is false</li>
                        <li><b2>void</b2> <b1>IfOff</b1>(<b2>Action{"<T>"}</b2> <b1>action</b1>): Invokes an action that takes the value as a parameter if the state is false</li>
                    </ul>
                    <h5 className="c-light-1">On On</h5>
                    <ul>
                        <li><b2>void</b2> <b1>OnOn</b1>(<b2>string</b2> <b1>message</b1>): Prints a message to the console when the state turns true</li>
                        <li><b2>void</b2> <b1>OnOn</b1>(<b2>object</b2> <b1>message</b1>): Prints the object to the console when the state turns true</li>
                        <li><b2>void</b2> <b1>OnOn</b1>(<b2>Action</b2> <b1>action</b1>): Invokes an action when the state turns true</li>
                        <li><b2>void</b2> <b1>OnOn</b1>(<b2>Action{"<T>"}</b2> <b1>action</b1>): Invokes an action that takes the value as a parameter when the state turns true</li>
                    </ul>
                    <h5 className="c-light-1">On Off</h5>
                    <ul>
                        <li><b2>void</b2> <b1>OnOff</b1>(<b2>string</b2> <b1>message</b1>): Prints a message to the console when the state turns false</li>
                        <li><b2>void</b2> <b1>OnOff</b1>(<b2>object</b2> <b1>message</b1>): Prints the object to the console when the state turns false</li>
                        <li><b2>void</b2> <b1>OnOff</b1>(<b2>Action</b2> <b1>action</b1>): Invokes an action when the state turns false</li>
                        <li><b2>void</b2> <b1>OnOff</b1>(<b2>Action{"<T>"}</b2> <b1>action</b1>): Invokes an action that takes the value as a parameter when the state turns false</li>
                    </ul>
                </div>
            )}/>

            <h3 className="p-2">Examples</h3>
            <p className="pad-left-2">
                The Toggle attribute can be applied to boolean fields within a MonoBehaviour or ScriptableObject class to visualize them as toggle buttons. 
                Here are some examples demonstrating its usage:

            </p>
            <ul>
                <li><b>Creating a Toggle Structure</b>: You can create a Toggle{"<T>"} structure with a specified type T. The type T represents the value you want to associate with the toggle state.</li>
                <li><b>Setting the State and Value</b>: You can set the state to either true (on) or false (off) and assign a value to it.</li>
                <li><b>Using Conditional Actions</b>: You can use methods like IfOn and IfOff to perform specific actions when the toggle state is on or off. These methods allow you to log messages, invoke actions or execute a function that uses the associated value.</li>
            </ul>
            <Group title="Example 01: Toggle a Debug Mode" content={(
                <div>
                    <p> 
                        This script demonstrates how to use a {"Toggle<int>"} to manage a debug mode state. 
                        The debugToggle object triggers specific actions when toggled on or off, printing messages to the console that indicate the current state of the debug mode along with its associated integer value. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Toggles/Toggles - 01.jpg" alt=""/>            
                    <p> 
                        This setup allows for easy tracking of debugging states within the game.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Toggles/Toggles - 02.jpg" alt=""/>            
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Toggles/Toggles - 03.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 02: Toggle UI Visibility" content={(
                <div>
                    <p> 
                        This example demonstrates toggling the visibility of a UI panel. 
                        The Toggle{"<GameObject>"} is used to manage the state of the UI panel. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Toggles/Toggles - 04.jpg" alt=""/>            
                    <p> 
                        When the state changes, the IfOn method activates the panel and IfOff hides it.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Toggles/Toggles - 05.jpg" alt=""/>            
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Toggles/Toggles - 06.jpg" alt=""/>            
                </div>
            )}/>

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The IfOn and IfOff methods provide flexibility by allowing you to pass in a delegate or lambda expression that gets executed based on the toggle's state.</li>
                <li>The Toggle structures are integrated with Unity’s Editor through custom property drawers, making them easy to manipulate within the Inspector.</li>
                <li> The Toggle structure enables an implicit conversion from Toggle{"<T>"} to its underlying type T. This allows the Toggle{"<T>"} instance to be used directly as T without requiring an explicit cast.</li>
            </ul>
       </div>
    );
}