import React from "react";
import Group from "Components/Group";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Debase Structure</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Base script for MonoBehaviours and ScriptableObjects
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Debase structure is designed to simplify debugging and enable or disable functionality within MonoBehaviour or ScriptableObject scripts in Unity. 
                It is an effective tool for developers who need to toggle debugging and disabling features during runtime, making the development and testing processes more flexible and efficient. 
                By incorporating this tool, developers can streamline their workflow, enhance their testing capabilities and maintain cleaner codebases. 
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Debase/Debase - 03.gif" alt=""/>            
            </div>


            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The Debase structure is a utility class with two properties: Debug, a boolean that determines whether debugging messages should be displayed, and Disable, a boolean that can deactivate certain script functionalities.
                Together, these elements allow developers to conditionally enable or disable script functionalities and output debug information, making it easier to adjust script behavior directly within the Unity Editor or during runtime without needing to modify the code.            
                The feature includes two foundational classes, MonoDebase (a MonoBehaviour) and AssetDebase (a ScriptableObject), which serve as base classes for inheritance. 
                These classes are designed to provide essential debugging functionalities.
            </p>
            
            <Group title="Debase Class" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>Disable</b1>: Enables/Disables the component state</li>
                        <li><b2>bool</b2> <b1>Debug</b1>: Enables/Disables the debug state</li>
                    </ul>
                    <h5 className="c-light-1">Print</h5>
                    <p>
                        Prints a message to the console
                    </p>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>Print</b1>(<b2>string</b2> <b1>message</b1>): Prints a message to the console</li>
                        <li><b2>void</b2> <b1>Print</b1>(<b2>Color</b2> <b1>color</b1>, <b2>string</b2> <b1>message</b1>): Prints a message to the console</li>
                        <li><b2>void</b2> <b1>Print</b1>(<b2>string</b2> <b1>colorHex</b1>, <b2>string</b2> <b1>message</b1>): Prints a message to the console</li>
                        <li><b2>void</b2> <b1>Print</b1>(<b2>MESSAGE_TYPE</b2> <b1>type</b1>, <b2>string</b2> <b1>message</b1>): Prints a message to the console</li>
                        <li><b2>void</b2> <b1>Print</b1>(<b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context</b1>): Prints a message to the console</li>
                        <li><b2>void</b2> <b1>Print</b1>(<b2>Color</b2> <b1>color</b1>, <b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context</b1>): Prints a message to the console</li>
                        <li><b2>void</b2> <b1>Print</b1>(<b2>string</b2> <b1>colorHex</b1>, <b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context</b1>): Prints a message to the console</li>
                        <li><b2>void</b2> <b1>Print</b1>(<b2>MESSAGE_TYPE</b2> <b1>type</b1>, <b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context</b1>): Prints a message to the console</li>
                    </ul>
                    <h5 className="c-light-1">IfDebug</h5>
                    <p>
                        Prints a message to the console if debug value is on
                    </p>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>string</b2> <b1>message</b1>)</li>
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>Color</b2> <b1>color</b1>, <b2>string</b2> <b1>message</b1>)</li>
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>string</b2> <b1>colorHex</b1>, <b2>string</b2> <b1>message</b1>)</li>
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>MESSAGE_TYPE</b2> <b1>type</b1>, <b2>string</b2> <b1>message</b1>)</li>
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context</b1>)</li>
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>Color</b2> <b1>color</b1>, <b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context</b1>)</li>
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>string</b2> <b1>colorHex</b1>, <b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context</b1>)</li>
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>MESSAGE_TYPE</b2> <b1>type</b1>, <b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">IsDisable</h5>
                    <p>
                        Returns the disable state of the component. If disable value is on, prints a message to the console
                    </p>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>IsDisable</b1>(<b2>string</b2> <b1>message</b1>)</li>
                        <li><b2>bool</b2> <b1>IsDisable</b1>(<b2>Color</b2> <b1>color</b1>, <b2>string</b2> <b1>message</b1>)</li>
                        <li><b2>bool</b2> <b1>IsDisable</b1>(<b2>string</b2> <b1>colorHex</b1>, <b2>string</b2> <b1>message</b1>)</li>
                        <li><b2>bool</b2> <b1>IsDisable</b1>(<b2>MESSAGE_TYPE</b2> <b1>type</b1>, <b2>string</b2> <b1>message</b1>)</li>
                        <li><b2>bool</b2> <b1>IsDisable</b1>(<b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context</b1>)</li>
                        <li><b2>bool</b2> <b1>IsDisable</b1>(<b2>Color</b2> <b1>color</b1>, <b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context</b1>)</li>
                        <li><b2>bool</b2> <b1>IsDisable</b1>(<b2>string</b2> <b1>colorHex</b1>, <b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context</b1>)</li>
                        <li><b2>bool</b2> <b1>IsDisable</b1>(<b2>MESSAGE_TYPE</b2> <b1>type</b1>, <b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context</b1>)</li>
                    </ul>
                </div>
            )}/>
            <Group title="MonoDebase and AssetDebase" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>DebugState</b2> <b1>State</b1>: DebugState value</li>
                        <li><b2>bool</b2> <b1>Disable</b1>: Disable state value</li>
                    </ul>
                    <h5 className="c-light-1">Print</h5>
                    <p>
                        Prints a message to the console
                    </p>
                    <ul className="property-list">                        
                        <li><b2>void</b2> <b1>Print</b1>(<b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context = null</b1>)</li>
                        <li><b2>void</b2> <b1>Print</b1>(<b2>Color</b2> <b1>color</b1>, <b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context = null</b1>)</li>
                        <li><b2>void</b2> <b1>Print</b1>(<b2>string</b2> <b1>colorHex</b1>, <b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context = null</b1>)</li>
                        <li><b2>void</b2> <b1>Print</b1>(<b2>MESSAGE_TYPE</b2> <b1>type</b1>, <b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context = null</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">IfDebug</h5>
                    <p>
                        Prints a message to the console if debug value is on
                    </p>
                    <ul className="property-list">                        
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context = null</b1>)</li>
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>Color</b2> <b1>color</b1>, <b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context = null</b1>)</li>
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>string</b2> <b1>colorHex</b1>, <b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context = null</b1>)</li>
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>MESSAGE_TYPE</b2> <b1>type</b1>, <b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context = null</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">IsDisable</h5>
                    <p>
                        Returns the disable state of the component. If disable value is on, prints a message to the console
                    </p>
                    <ul className="property-list">                        
                        <li><b2>bool</b2> <b1>IsDisable</b1>(<b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context = null</b1>)</li>
                        <li><b2>bool</b2> <b1>IsDisable</b1>(<b2>Color</b2> <b1>color</b1>, <b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context = null</b1>)</li>
                        <li><b2>bool</b2> <b1>IsDisable</b1>(<b2>string</b2> <b1>colorHex</b1>, <b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context = null</b1>)</li>
                        <li><b2>bool</b2> <b1>IsDisable</b1>(<b2>MESSAGE_TYPE</b2> <b1>type</b1>, <b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context = null</b1>)</li>
                    </ul>
                </div>
            )}/>
            

            <h3 className="p-2">Examples</h3>
            <p className="pad-left-2">
                To use Debase, you can either declare a Debase property within your MonoBehaviour or ScriptableObject, or you can inherit from the MonoDebase or AssetDebase classes. 
                These classes provide additional helper methods for handling debug output. 
                The DebaseDrawer class provides a custom property drawer, allowing developers to toggle the debug and disable properties through buttons in the Unity Inspector. 
                The Inspector will display two buttons, Debug and Disable, to control the state of the Debase instance.
            </p>

            <Group title="Example 01: Using the Print Method" content={(
                <div>
                    <p> 
                        This example demonstrates how to use the Print method to log messages in various styles.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Debase/Debase - 01.jpg" alt=""/>            
                    <p> 
                        It shows how to print plain messages, apply custom colors using Color or hex codes, display messages by type (e.g., warning) and include context for better debugging clarity in Unity’s Console.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Debase/Debase - 02.jpg" alt=""/>            
                    <p> 
                        The Print method outputs a message to the console. It can be used with or without color and context.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Debase/Debase - 03.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 02: Using the IfDebug Method" content={(
                <div>
                    <p> 
                        This example demonstrates how to use the IfDebug method to conditionally print messages based on the debug state.
                        The IfDebug method checks the debug state before printing a message.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Debase/Debase - 04.jpg" alt=""/>            
                    <p> 
                        The first message is displayed only if debugging is enabled and appears in yellow.
                        The second message is printed only if debugging is disabled, showcasing how to manage debug output dynamically.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-90" src="images/Library/Structures/Debase/Debase - 01.gif" alt=""/>            
                    <p> 
                        To enhance performance in the final build, the code is wrapped within <b1>#if UNITY_EDITOR</b1> and <b1>#endif</b1> preprocessor directives.
                        This ensures that the debugging functionality is excluded from the final build, as it is only relevant during development and not required in the production version.
                    </p>
                </div>
            )}/>
            <Group title="Example 03: Disabling Functionality" content={(
                <div>
                    <p> 
                        This example demonstrates how to use the IsDisable method to conditionally stop execution if the component is disabled.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Debase/Debase - 07.jpg" alt=""/>            
                    <p> 
                        The Disable state can be used to conditionally execute code.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-90" src="images/Library/Structures/Debase/Debase - 02.gif" alt=""/>            
                </div>
            )}/>


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>Frequent calls to debug methods can affect performance if not used carefully. Ensure that the debug state is checked only when necessary.</li> 
                <li>To ensure that performance is not affected during build time, all Debase functionality is enclosed in <b1>#if UNITY_EDITOR</b1> and <b1>#endif</b1> preprocessor instructions. This ensures that the debug code is not compiled into the final build, thus avoiding any runtime overhead.</li>
                <li>The Debase structure is intended for use within the Unity Editor and may not be suitable for builds where performance is critical.</li>
            </ul>
       </div>
    );
}