import React from "react";
import Group from "Components/Group";

export default function Function() {

    
    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Controls Utilities</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Methods designed to enhance Input and Output Functionality
            </h6>
                        
            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Controls utilities offer a robust set of tools to enhance input handling and debugging in Unity projects. 
                By abstracting common input operations and providing flexible output methods, these utilities allow developers to focus more on core game logic and less on repetitive tasks. 
                Whether managing directional input, calculating positions or enhancing console output, the Controls utilities are designed to streamline and simplify the development process within Unity.
            </p>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                These utilities simplify tasks such as capturing directional input from arrow keys, retrieving the direction to the mouse or touch, getting the current mouse position and extending the debug functionality by printing messages to the console in various styles. 
                The utility methods help developers streamline the handling of input and output, making code more readable and efficient, while also facilitating the debugging process.
            </p>
            <Group title="Axis" content={(
                <div>
                    <p>
                        Retrieves a Vector2 direction based on the "Horizontal" and "Vertical" input axes.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector2</b2> <b1>Axis</b1>(<b2>bool</b2> <b1>normilized = true</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>normalized</b1>: Indicates whether to normalize the vector</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Arrows" content={(
                <div>
                    <p>
                        Retrieves a Vector2 direction based on arrow keys.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector2</b2> <b1>Arrows</b1>(<b2>bool</b2> <b1>normilized = true</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>normalized</b1>: Indicates whether to normalize the vector</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="ArrowsDown" content={(
                <div>
                    <p>
                        Retrieves a Vector2 direction when arrow keys are pressed down.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector2</b2> <b1>ArrowsDown</b1>(<b2>bool</b2> <b1>normilized = true</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>normalized</b1>: Indicates whether to normalize the vector</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="ArrowsUp" content={(
                <div>
                    <p>
                        Retrieves a Vector2 direction when arrow keys are released.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector2</b2> <b1>ArrowsUp</b1>(<b2>bool</b2> <b1>normilized = true</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>normalized</b1>: Indicates whether to normalize the vector</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="DirToMouse" content={(
                <div>
                    <p>
                        Calculates the direction from a GameObject or Transform to the mouse position.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector2</b2> <b1>DirToMouse</b1>(<b2>this GameObject</b2> <b1>origin</b1>, <b2>bool</b2> <b1>normilized = false</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>DirToMouse</b1>(<b2>this Transform</b2> <b1>origin</b1>, <b2>bool</b2> <b1>normilized = false</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>DirToMouse</b1>(<b2>Vector3</b2> <b1>origin</b1>, <b2>bool</b2> <b1>normilized = false</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>normalized</b1>: Indicates whether to normalize the vector</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="DirToTouch" content={(
                <div>
                    <p>
                        Calculates the direction from a GameObject or Transform to a touch position.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector2</b2> <b1>DirToTouch</b1>(<b2>this GameObject</b2> <b1>origin</b1>, <b2>int</b2> <b1>touchId</b1>, <b2>bool</b2> <b1>normilized = false</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>DirToTouch</b1>(<b2>this Transform</b2> <b1>origin</b1>, <b2>int</b2> <b1>touchId</b1>, <b2>bool</b2> <b1>normilized = false</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>DirToTouch</b1>(<b2>Vector3</b2> <b1>origin</b1>, <b2>int</b2> <b1>touchId</b1>, <b2>bool</b2> <b1>normilized = false</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>touchId</b1>: The ID of the touch</li>                    
                        <li><b2>bool</b2> <b1>normalized</b1>: Indicates whether to normalize the vector</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="MouseScreenPosition" content={(
                <div>
                    <p>
                        Gets the mouse position on the screen.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector3</b2> <b1>MouseScreenPosition</b1>(<b2>bool</b2> <b1>flat = false</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>flat</b1>: Indicates whether to set the z-value to 0</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="MouseWorldPosition" content={(
                <div>
                    <p>
                        Gets the mouse position in world space.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector3</b2> <b1>MouseWorldPosition</b1>(<b2>bool</b2> <b1>flat = false</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>flat</b1>: Indicates whether to set the z-value to 0</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="MouseRectPosition" content={(
                <div>
                    <p>
                        Converts mouse position to a local position within a RectTransform.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector2</b2> <b1>MouseRectPosition</b1>(<b2>this RectTransform</b2> <b1>rect</b1>, <b2>Camera</b2> <b1>UICamera = null</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>RectTransform</b2> <b1>rect</b1>: The rectangle to calculate the local position in</li>                    
                        <li><b2>Camera</b2> <b1>UICamera</b1>: The camera used for UI rendering</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="ScreenPosition" content={(
                <div>
                    <p>
                        Calculates the screen position based on alignment and offset.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector3</b2> <b1>ScreenPosition</b1>(<b2>ALIGMENT</b2> <b1>aligment = ALIGMENT.Center</b1>, <b2>float</b2> <b1>horizontalOffset = 0</b1>, <b2>float</b2> <b1>verticalOffset = 0</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>ALIGMENT</b2> <b1>alignment</b1>: Specifies the alignment of the position</li>                    
                        <li><b2>float</b2> <b1>horizontalOffset</b1>: Horizontal offset from the alignment point</li>                    
                        <li><b2>float</b2> <b1>verticalOffset</b1>: Vertical offset from the alignment point</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="ScreenWorldPosition" content={(
                <div>
                    <p>
                        Calculates the world position corresponding to a screen alignment and offset.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector3</b2> <b1>ScreenWorldPosition</b1>(<b2>ALIGMENT</b2> <b1>aligment = ALIGMENT.Center</b1>, <b2>float</b2> <b1>horizontalOffset = 0</b1>, <b2>float</b2> <b1>verticalOffset = 0</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>ALIGMENT</b2> <b1>alignment</b1>: Specifies the alignment of the position</li>                    
                        <li><b2>float</b2> <b1>horizontalOffset</b1>: Horizontal offset from the alignment point</li>                    
                        <li><b2>float</b2> <b1>verticalOffset</b1>: Vertical offset from the alignment point</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Screen" content={(
                <div>
                    <p>
                        Retrieves the current screen width and height as a Vector2.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector2</b2> <b1>Screen</b1>()</li>
                    </ul>
                </div>
            )}/>
            <Group title="ScreenFlat" content={(
                <div>
                    <p>
                        Retrieves the current screen dimensions as a Vector3 with a specified z-value.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector3</b2> <b1>ScreenFlat</b1>(<b2>float</b2> <b1>z = 0f</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>z</b1>: The z-value for the vector</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="WorldScreen" content={(
                <div>
                    <p>
                        Converts the screen dimensions to world coordinates.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector2</b2> <b1>WorldScreen</b1>()</li>
                    </ul>
                </div>
            )}/>
            <Group title="WorldScreenFlat" content={(
                <div>
                    <p>
                        Converts the screen dimensions to world coordinates with a specified z-value.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector3</b2> <b1>WorldScreenFlat</b1>(<b2>float</b2> <b1>z = 0f</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>z</b1>: The z-value for the vector</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Print" content={(
                <div>
                    <p>
                        Prints an object to the console with optional styling and context.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static void</b2> <b1>Print</b1>(<b2>this object</b2> <b1>obj</b1>)</li>
                        <li><b2>static void</b2> <b1>Print</b1>(<b2>this object</b2> <b1>obj</b1>, <b2>Object</b2> <b1>context</b1>)</li>
                        <li><b2>static void</b2> <b1>Print</b1>(<b2>this object</b2> <b1>obj</b1>, <b2>Color</b2> <b1>color</b1>)</li>
                        <li><b2>static void</b2> <b1>Print</b1>(<b2>this object</b2> <b1>obj</b1>, <b2>Color</b2> <b1>color</b1>, <b2>Object</b2> <b1>context</b1>)</li>
                        <li><b2>static void</b2> <b1>Print</b1>(<b2>this object</b2> <b1>obj</b1>, <b2>string</b2> <b1>colorHex</b1>)</li>
                        <li><b2>static void</b2> <b1>Print</b1>(<b2>this object</b2> <b1>obj</b1>, <b2>string</b2> <b1>colorHex</b1>, <b2>Object</b2> <b1>context</b1>)</li>
                        <li><b2>static void</b2> <b1>Print</b1>(<b2>this object</b2> <b1>obj</b1>, <b2>MESSAGE_TYPE</b2> <b1>messageType</b1>)</li>
                        <li><b2>static void</b2> <b1>Print</b1>(<b2>this object</b2> <b1>obj</b1>, <b2>MESSAGE_TYPE</b2> <b1>messageType</b1>, <b2>Object</b2> <b1>context</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Object</b2> <b1>context</b1>: The context to associate with the printed message</li>                    
                        <li><b2>Color</b2> <b1>color</b1>: Options for styling the message</li>                    
                        <li><b2>string</b2> <b1>colorHex</b1>: Options for styling the message</li>                    
                        <li><b2>MESSAGE_TYPE</b2> <b1>messageType</b1>: Options for styling the message</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="AddColorTag" content={(
                <div>
                    <p>
                        Wraps the provided text in a {'<'}Color{'>'} tag with the specified color, allowing you to create logs with multiple color styles for enhanced readability.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static string</b2> <b1>AddColorTag</b1>(<b2>this string</b2> <b1>text</b1>, <b2>string</b2> <b1>colorHex</b1>)</li>
                        <li><b2>static string</b2> <b1>AddColorTag</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Color</b2> <b1>color</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Color</b2> <b1>color</b1>: Options for styling the message</li>                    
                        <li><b2>string</b2> <b1>colorHex</b1>: Options for styling the message</li>                    
                    </ul>
                </div>
            )}/>

            <h3 className="p-2">Examples</h3>
            <Group title="Example 01: Using Directional Input" content={(
                <div>
                    <p>
                        This script demonstrates how to use directional input utilities from the Magikus Library within a Unity project.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-65" src="images/Library/Utilities/Controls/Controls - 01.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 02: Getting Mouse and Touch Positions" content={(
                <div>
                    <p>
                        This script shows how to retrieve the mouse position and calculate the direction towards the touch position from a GameObject.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-65" src="images/Library/Utilities/Controls/Controls - 02.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 03: Screen and World Positioning" content={(
                <div>
                    <p>
                        This script showcases how to calculate positions on the screen and in the world using the Magikus Library.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-65" src="images/Library/Utilities/Controls/Controls - 03.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 04: Enhanced Console Output" content={(
                <div>
                    <p>
                        This script illustrates how to enhance console output with different styles and colors using the Magikus Library.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-90" src="images/Library/Utilities/Controls/Controls - 04.jpg" alt=""/>            
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Utilities/Controls/Controls - 05.jpg" alt=""/>            
                </div>
            )}/>

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The Controls utilities rely on the Unity Input system and require an active Unity environment.</li>
                <li>The DirToMouse and DirToTouch methods assume that the main camera (Camera.main) is properly set up in the scene.</li>
                <li>The Print method can be used with different parameters for styling but requires familiarity with Unity’s Debug class for full functionality.</li>
            </ul>
       </div>
    );
}