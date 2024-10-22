import React from "react";
import Group from "Components/Group";

export default function Function() {

    
    return (
        <div className="c-light-2">           
            <h1 className="text-center">Control Utilities</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Control utilities in the Magikus Library provide a collection of methods and extension methods designed to enhance input and output functionality within the Unity engine. 
            </h6>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                These utilities simplify tasks such as capturing directional input from arrow keys, retrieving the direction to the mouse or touch, getting the current mouse position and extending the debug functionality by printing messages to the console in various styles. 
                The utility methods help developers streamline the handling of input and output, making code more readable and efficient, while also facilitating the debugging process.
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
            <h4 className="c-light-1 p-3">Example 01: Using Directional Input</h4>
            <p className="pad-left-3">
                This script demonstrates how to use directional input utilities from the Magikus Library within a Unity project.
            </p>
            <img className="block-center mar-bottom-3 img-border w-65" src="images/Library/Utilities/Control/Control - 01.jpg" alt=""/>            
            <h4 className="c-light-1 p-3">Example 02: Getting Mouse and Touch Positions</h4>
            <p className="pad-left-3">
                This script shows how to retrieve the mouse position and calculate the direction towards the touch position from a GameObject.
            </p>
            <img className="block-center mar-bottom-3 img-border w-65" src="images/Library/Utilities/Control/Control - 02.jpg" alt=""/>            
            <h4 className="c-light-1 p-3">Example 03: Screen and World Positioning</h4>
            <p className="pad-left-3">
                This script showcases how to calculate positions on the screen and in the world using the Magikus Library.
            </p>
            <img className="block-center mar-bottom-3 img-border w-65" src="images/Library/Utilities/Control/Control - 03.jpg" alt=""/>            
            <h4 className="c-light-1 p-3">Example 04: Enhanced Console Output</h4>
            <p className="pad-left-3">
                This script illustrates how to enhance console output with different styles and colors using the Magikus Library.
            </p>
            <img className="block-center mar-bottom-3 img-border w-65" src="images/Library/Utilities/Control/Control - 04.jpg" alt=""/>            


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The Control utilities rely on the Unity Input system and require an active Unity environment.</li>
                <li>The DirToMouse and DirToTouch methods assume that the main camera (Camera.main) is properly set up in the scene.</li>
                <li>The Print method can be used with different parameters for styling but requires familiarity with Unity’s Debug class for full functionality.</li>
            </ul>
                        
            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The Control utilities provided by the Magikus Library offer a robust set of tools to enhance input handling and debugging in Unity projects. 
                By abstracting common input operations and providing flexible output methods, these utilities allow developers to focus more on core game logic and less on repetitive tasks. 
                Whether managing directional input, calculating positions or enhancing console output, the Control utilities are designed to streamline and simplify the development process within Unity.
            </p>
       </div>
    );
}