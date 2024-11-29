import React from "react";
import Group from "Components/Group";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Base Component</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Base script for MonoBehaviours and ScriptableObjects
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Base component is designed to simplify debugging and enable or disable functionality within MonoBehaviour or ScriptableObject scripts in Unity. 
                It is an effective tool for developers who need to toggle debugging and disabling features during runtime, making the development and testing processes more flexible and efficient. 
                By incorporating this tool, developers can streamline their workflow, enhance their testing capabilities and maintain cleaner codebases. 
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Tools/BaseComponent/Base Component - 10.jpg" alt=""/>            
            </div>


            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The Base component includes two foundational classes, MonoBaseMk (a MonoBehaviour) and AssetBaseMK (a ScriptableObject), which serve as base classes for inheritance. 
                These classes are designed to provide essential debugging functionalities.
                The DebugState structure is a utility class with two properties: Debug, a boolean that determines whether debugging messages should be displayed, and Disable, a boolean that can deactivate certain script functionalities.
                Together, these elements allow developers to conditionally enable or disable script functionalities and output debug information, making it easier to adjust script behavior directly within the Unity Editor or during runtime without needing to modify the code.            
            </p>

            <h3 className="p-2">How it Works</h3>
            
            <Group title="MonoBaseMK and AssetBaseMK" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>DebugState</b2> <b1>State</b1>: DebugState value</li>
                    </ul>
                    <h5 className="c-light-1">Print</h5>
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
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>string</b2> <b1>message</b1>): Prints a message to the console if debug value is on</li>
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>Color</b2> <b1>color</b1>, <b2>string</b2> <b1>message</b1>): Prints a message to the console if debug value is on</li>
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>string</b2> <b1>colorHex</b1>, <b2>string</b2> <b1>message</b1>): Prints a message to the console if debug value is on</li>
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>MESSAGE_TYPE</b2> <b1>type</b1>, <b2>string</b2> <b1>message</b1>): Prints a message to the console if debug value is on</li>
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context</b1>): Prints a message to the console if debug value is on</li>
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>Color</b2> <b1>color</b1>, <b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context</b1>): Prints a message to the console if debug value is on</li>
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>string</b2> <b1>colorHex</b1>, <b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context</b1>): Prints a message to the console if debug value is on</li>
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>MESSAGE_TYPE</b2> <b1>type</b1>, <b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context</b1>): Prints a message to the console if debug value is on</li>
                    </ul>
                </div>
            )}/>
            <Group title="DebugState Class" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>Disable</b1>: Enables/Disables the component state</li>
                        <li><b2>bool</b2> <b1>Debug</b1>: Enables/Disables the debug state</li>
                    </ul>
                    <h5 className="c-light-1">Print</h5>
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
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>string</b2> <b1>message</b1>): Prints a message to the console if debug value is on</li>
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>Color</b2> <b1>color</b1>, <b2>string</b2> <b1>message</b1>): Prints a message to the console if debug value is on</li>
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>string</b2> <b1>colorHex</b1>, <b2>string</b2> <b1>message</b1>): Prints a message to the console if debug value is on</li>
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>MESSAGE_TYPE</b2> <b1>type</b1>, <b2>string</b2> <b1>message</b1>): Prints a message to the console if debug value is on</li>
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context</b1>): Prints a message to the console if debug value is on</li>
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>Color</b2> <b1>color</b1>, <b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context</b1>): Prints a message to the console if debug value is on</li>
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>string</b2> <b1>colorHex</b1>, <b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context</b1>): Prints a message to the console if debug value is on</li>
                        <li><b2>void</b2> <b1>IfDebug</b1>(<b2>MESSAGE_TYPE</b2> <b1>type</b1>, <b2>string</b2> <b1>message</b1>, <b2>UnityEngine.Object</b2> <b1>context</b1>): Prints a message to the console if debug value is on</li>
                    </ul>
                </div>
            )}/>
            

            <h3 className="p-2">How to Use</h3>
            <p className="pad-left-2">
                To use DebugState, you can either declare a DebugState property within your MonoBehaviour or ScriptableObject, or you can inherit from the MonoBaseMk or AssetBaseMk classes. 
                These classes provide additional helper methods for handling debug output. 
                The DebugStateDrawer class provides a custom property drawer, allowing developers to toggle the debug and disable properties through buttons in the Unity Inspector. 
                The Inspector will display two buttons, Debug and Disable, to control the state of the DebugState instance.
            </p>

            <h4 className="c-light-1 p-3">Example 01: Using the Print Method</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/BaseComponent/Base Component - 01.jpg" alt=""/>            
            <p className="pad-left-3"> 
                The Print method outputs a message to the console. It can be used with or without color and context.
            </p>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Tools/BaseComponent/Base Component - 02.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Tools/BaseComponent/Base Component - 03.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 02: Using the IfDebug Method</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/BaseComponent/Base Component - 04.jpg" alt=""/>            
            <p className="pad-left-3"> 
                The IfDebug method checks the debug state before printing a message.
            </p>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Tools/BaseComponent/Base Component - 05.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Tools/BaseComponent/Base Component - 06.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 03: Disabling Functionality</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/BaseComponent/Base Component - 07.jpg" alt=""/>            
            <p className="pad-left-3"> 
                The Disable state can be used to conditionally execute code.
            </p>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Tools/BaseComponent/Base Component - 08.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Tools/BaseComponent/Base Component - 09.jpg" alt=""/>            


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>Frequent calls to debug methods can affect performance if not used carefully. Ensure that the debug state is checked only when necessary.</li> 
                <li>To ensure that performance is not affected during build time, all DebugState functionality is enclosed in #if UNITY_EDITOR and #endif preprocessor instructions. This ensures that the debug code is not compiled into the final build, thus avoiding any runtime overhead.</li>
                <li>The DebugState structure is intended for use within the Unity Editor and may not be suitable for builds where performance is critical.</li>
            </ul>
       </div>
    );
}