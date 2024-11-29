import React from "react";
import Group from "Components/Group";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Toggle Decorator</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Attribute designed to Change the Appearance of a Boolean value in the Unity Inspector to look like a Toggle Button 
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The <b2>[Toggle]</b2> attribute is a powerful and easy-to-use tool for converting boolean fields into intuitive toggle buttons in the Unity Inspector. 
                This attribute allows developers to easily visualize and interact with boolean properties as buttons, improving the usability and clarity of the Inspector for toggling features or options.
                It helps to create a more user-friendly and visually appealing interface for toggling features or settings. 
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Toggle/Toggle - 02.jpg" alt=""/>            
            </div>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2 pad-bottom-2">
                With options for custom labels, colors and label visibility, the <b2>[Toggle]</b2> attribute provides flexible customization to suit various project needs.
            </p>
            <Group title="Toggle Attribute" content={(
                <div>
                    <p>
                        The Toggle attribute class provides several constructors to allow for flexible customization of the toggle button. 
                        Here are the constructors available:
                    </p>
                    <h5 className="c-light-1">Constructors</h5>
                    <ul className="property-list">
                        <li><b1>Toggle</b1>()</li>
                        <li><b1>Toggle</b1>(<b2>bool</b2> <b1>displayLabel</b1>)</li>
                        <li><b1>Toggle</b1>(<b2>string</b2> <b1>onLabel</b1>, <b2>string</b2> <b1>offLabel</b1>)</li>
                        <li><b1>Toggle</b1>(<b2>bool</b2> <b1>displayLabel</b1>, <b2>string</b2> <b1>onLabel</b1>, <b2>string</b2> <b1>offLabel</b1>, <b2>string</b2> <b1>onColor</b1>, <b2>string</b2> <b1>offColor</b1>)</li>
                        <li><b1>Toggle</b1>(<b2>bool</b2> <b1>displayLabel</b1>, <b2>string</b2> <b1>onLabel</b1>, <b2>string</b2> <b1>offLabel</b1>)</li>
                        <li><b1>Toggle</b1>(<b2>bool</b2> <b1>displayLabel</b1>, <b2>string</b2> <b1>onLabel</b1>, <b2>string</b2> <b1>offLabel</b1>, <b2>string</b2> <b1>onColor</b1>, <b2>string</b2> <b1>offColor</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>displayLabel</b1>: A boolean that determines whether the label for the toggle should be displayed. Default is true.</li>
                        <li><b2>string</b2> <b1>onLabel</b1>: A string representing the label for the "On" state. Default is "On".</li>                        
                        <li><b2>string</b2> <b1>offLabel</b1>: A string representing the label for the "Off" state. Default is "Off".</li>                        
                        <li><b2>string</b2> <b1>onColor</b1>: A Color representing the color for the "On" state. Default is a red color (#FF6E40).</li>                        
                        <li><b2>string</b2> <b1>offColor</b1>: A Color representing the color for the "Off" state. Default is a blue color (#81B4FF).</li>                        
                    </ul>
                </div>
            )}/>


            <h3 className="p-2">Examples</h3>
            <p className="pad-left-2">
                The <b2>[Toggle]</b2> attribute can be applied to boolean fields within a MonoBehaviour or ScriptableObject class to visualize them as toggle buttons. 
                Here are some examples demonstrating its usage:
            </p>
            <Group title="Example 01: Basic Toggle" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Toggle/Toggle - 01.jpg" alt=""/>            
                    <p> 
                        This example adds a basic toggle button for the isEnabled boolean property. The default labels ("On" and "Off") and colors are used.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Toggle/Toggle - 02.jpg" alt=""/>            
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Toggle/Toggle - 03.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 02: Toggle with Custom Labels" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Toggle/Toggle - 04.jpg" alt=""/>            
                    <p>
                        This example creates a toggle button for the isActivated property with custom labels "Activate" for true and "Deactivate" for false.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Toggle/Toggle - 05.jpg" alt=""/>            
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Toggle/Toggle - 06.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 03: Toggle with Custom Colors and Label Visibility" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Toggle/Toggle - 07.jpg" alt=""/>            
                    <p>
                        This example sets up a toggle button for the isRunning property with no label, using custom labels "Start" and "Stop," and custom colors yellow for true and red for false.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Toggle/Toggle - 08.jpg" alt=""/>            
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Toggle/Toggle - 09.jpg" alt=""/>            
                </div>
            )}/>

            
            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The custom colors can be specified using standard color names (e.g., "Blue", "Red", “Yellow”, “White”) or hexadecimal values for more precise color control.</li>
                <li>The displayLabel parameter is useful for cases where the label is unnecessary or might clutter the UI, allowing for a cleaner look.</li>
            </ul>
       </div>
    );
}