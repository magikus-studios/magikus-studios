import React from "react";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center">Toggle</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Toggle attribute is a custom Unity attribute designed to change the appearance of a boolean (bool) value in the Unity Inspector to look like a toggle button. 
                This attribute allows developers to easily visualize and interact with boolean properties as buttons, improving the usability and clarity of the Inspector for toggling features or options.
            </h6>

            <h3 className="p-2">How it Works</h3>

            <div className="p-3">
                <h4 className="c-light-1 pad-left-2">Toggle Attribute</h4>
                <p className="pad-left-3">
                    The Toggle attribute class provides several constructors to allow for flexible customization of the toggle button. 
                    Here are the constructors available:
                </p>
                <h5 className="c-light-1 pad-left-3">Constructors</h5>
                <ul className="property-list">
                    <li><b1>ToggleAttribute</b1>(): Initializes with default settings.</li>
                    <li><b1>ToggleAttribute</b1>(<b2>bool</b2> <b1>displayLabel</b1>): Initializes with an option to display the label.</li>
                    <li><b1>ToggleAttribute</b1>(<b2>string</b2> <b1>onLabel</b1>, <b2>string</b2> <b1>offLabel</b1>): Initializes with custom labels for the "On" and "Off" states.</li>
                    <li><b1>ToggleAttribute</b1>(<b2>bool</b2> <b1>displayLabel</b1>, <b2>string</b2> <b1>onLabel</b1>, <b2>string</b2> <b1>offLabel</b1>, <b2>string</b2> <b1>onColor</b1>, <b2>string</b2> <b1>offColor</b1>): Initializes with custom labels and colors for the "On" and "Off" states.</li>
                    <li><b1>ToggleAttribute</b1>(<b2>bool</b2> <b1>displayLabel</b1>, <b2>string</b2> <b1>onLabel</b1>, <b2>string</b2> <b1>offLabel</b1>): Initializes with an option to display the label and custom labels for the "On" and "Off" states.</li>
                    <li><b1>ToggleAttribute</b1>(<b2>bool</b2> <b1>displayLabel</b1>, <b2>string</b2> <b1>onLabel</b1>, <b2>string</b2> <b1>offLabel</b1>, <b2>string</b2> <b1>onColor</b1>, <b2>string</b2> <b1>offColor</b1>): Initializes with an option to display the label, custom labels, and custom colors for the "On" and "Off" states.</li>
                </ul>
                <h5 className="c-light-1 pad-left-3">Parameters</h5>
                <ul className="property-list">
                    <li><b2>bool</b2> <b1>displayLabel</b1> (Optional): A boolean that determines whether the label for the toggle should be displayed. Default is true.</li>
                    <li><b2>string</b2> <b1>onLabel</b1> (Optional): A string representing the label for the "On" state. Default is "On".</li>                        
                    <li><b2>string</b2> <b1>offLabel</b1> (Optional): A string representing the label for the "Off" state. Default is "Off".</li>                        
                    <li><b2>string</b2> <b1>onColor</b1> (Optional): A Color representing the color for the "On" state. Default is a red color (#FF6E40).</li>                        
                    <li><b2>string</b2> <b1>offColor</b1> (Optional): A Color representing the color for the "Off" state. Default is a blue color (#81B4FF).</li>                        
                </ul>
            </div>

            <h3 className="p-2">How to Use</h3>
            <p className="pad-left-2">
                The Toggle attribute can be applied to boolean fields within a MonoBehaviour or ScriptableObject class to visualize them as toggle buttons. 
                Here are some examples demonstrating its usage:

            </p>

            <h4 className="c-light-1 p-3">Example 01: Basic Toggle</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Toggle/Toggle - 01.jpg" alt=""/>            
            <p className="pad-left-3"> 
                This example adds a basic toggle button for the isEnabled boolean property. The default labels ("On" and "Off") and colors are used.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Toggle/Toggle - 02.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Toggle/Toggle - 03.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 02: Toggle with Custom Labels</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Toggle/Toggle - 04.jpg" alt=""/>            
            <p className="pad-left-3">
                This example creates a toggle button for the isActivated property with custom labels "Activate" for true and "Deactivate" for false.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Toggle/Toggle - 05.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Toggle/Toggle - 06.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 03: Toggle with Custom Colors and Label Visibility</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Toggle/Toggle - 07.jpg" alt=""/>            
            <p className="pad-left-3">
                This example sets up a toggle button for the isRunning property with no label, using custom labels "Start" and "Stop," and custom colors yellow for true and red for false.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Toggle/Toggle - 08.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Toggle/Toggle - 09.jpg" alt=""/>            
            
            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The custom colors can be specified using standard color names (e.g., "Blue", "Red", “Yellow”, “White”) or hexadecimal values for more precise color control.</li>
                <li>The displayLabel parameter is useful for cases where the label is unnecessary or might clutter the UI, allowing for a cleaner look.</li>
            </ul>

            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The Toggle attribute is a powerful and easy-to-use tool for converting boolean fields into intuitive toggle buttons in the Unity Inspector. 
                It helps to create a more user-friendly and visually appealing interface for toggling features or settings. 
                With options for custom labels, colors and label visibility, the Toggle attribute provides flexible customization to suit various project needs.
            </p>
       </div>
    );
}