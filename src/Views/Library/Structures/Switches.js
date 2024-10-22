import React from "react";
import Group from "Components/Group";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center">Switch Structure</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Switch structures are designed to enhance script flexibility by allowing developers to choose among different types of values within a single script component, based on the current state. 
                This state is set through the Inspector in development environments and the Switch structure will show and use only the type value selected for that state. 
                This mechanism reduces the need to write repetitive code and simplifies the adjustment of types in various scenarios.
            </h6>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The primary purpose of Switch structures is to compress similar types into a single parameter with single value setters and getters, thereby streamlining script manipulation and enabling developers to change the type used without altering the underlying scripts. 
                Examples of composed structures using Switch include IntSwitch, ColorSwitch, TextSwitch and more, each encapsulating specific types such as integers, colors and text.
            </p>


            <h3 className="p-2">How it Works</h3>

            <Group title="Switch<A, B>" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>State</b1>: Represents the current state of the switch, either true or false</li>                    
                        <li><b2>A</b2> <b1>ValueA</b1>: Stores the value of type A associated with the switch</li>                    
                        <li><b2>B</b2> <b1>ValueB</b1>: Stores the value of type B associated with the switch</li>                    
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>Set</b1>(<b2>Switch{"<A, B>"}</b2> <b1>newValue</b1>): Updates the current switch by assigning it the values from another switch of the same type</li>
                    </ul>
                </div>
            )}/>

            <Group title="Switch<A, B, C> to Switch<A, B, C, D, E, F, G, H, I, J>" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>State</b1>: Represents the current state of the switch, from 0 to n</li>                    
                        <li><b2>A</b2> <b1>ValueA</b1>: Stores the value of type A associated with the switch</li>                    
                        <li><b2>B</b2> <b1>ValueB</b1>: Stores the value of type B associated with the switch</li>                    
                        <li><b2>C</b2> <b1>ValueC</b1>: Stores the value of type C associated with the switch</li>                    
                        <li><b2>D</b2> <b1>ValueD</b1>: Stores the value of type D associated with the switch</li>                    
                        <li><b2>E</b2> <b1>ValueE</b1>: Stores the value of type E associated with the switch</li>                    
                        <li><b2>F</b2> <b1>ValueF</b1>: Stores the value of type F associated with the switch</li>                    
                        <li><b2>G</b2> <b1>ValueG</b1>: Stores the value of type G associated with the switch</li>                    
                        <li><b2>H</b2> <b1>ValueH</b1>: Stores the value of type H associated with the switch</li>                    
                        <li><b2>I</b2> <b1>ValueI</b1>: Stores the value of type I associated with the switch</li>                    
                        <li><b2>J</b2> <b1>ValueJ</b1>: Stores the value of type J associated with the switch</li>                    
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>Set</b1>(<b2>Switch{"<A, B, C, D, E, F, G, H, I, J>"}</b2> <b1>newValue</b1>): Updates the current switch by assigning it the values from another switch of the same type</li>
                    </ul>
                </div>
            )}/>

            <Group title="BoolSwitch" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>State</b1>: Reflects the current state of the switch, indicating whether it is using the bool value (false) or the asset value (true)</li>
                        <li><b2>bool</b2> <b1>Value</b1>: Retrieves the active value of the switch, which corresponds to its current state</li>
                        <li><b2>bool</b2> <b1>BoolValue</b1>: Holds the bool value that the switch is currently using</li>
                        <li><b2>BoolAsset</b2> <b1>AssetValue</b1>: Stores the value of the associated BoolAsset</li>
                    </ul>
                </div>
            )}/>

            <Group title="IntSwitch" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>State</b1>: Reflects the current state of the switch, indicating whether it is using the int value (false) or the asset value (true)</li>
                        <li><b2>int</b2> <b1>Value</b1>: Retrieves the active value of the switch, which corresponds to its current state</li>
                        <li><b2>int</b2> <b1>IntValue</b1>: Holds the int value that the switch is currently using</li>
                        <li><b2>IntAsset</b2> <b1>AssetValue</b1>: Stores the value of the associated IntAsset</li>
                    </ul>
                </div>
            )}/>

            <Group title="FloatSwitch" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>State</b1>: Reflects the current state of the switch, indicating whether it is using the float value (false) or the asset value (true)</li>
                        <li><b2>float</b2> <b1>Value</b1>: Retrieves the active value of the switch, which corresponds to its current state</li>
                        <li><b2>float</b2> <b1>FloatValue</b1>: Holds the float value that the switch is currently using</li>
                        <li><b2>FloatAsset</b2> <b1>AssetValue</b1>: Stores the value of the associated FloatAsset</li>
                    </ul>
                </div>
            )}/>

            <Group title="StringSwitch" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>State</b1>: Reflects the current state of the switch, indicating whether it is using the string value (false) or the asset value (true)</li>
                        <li><b2>string</b2> <b1>Value</b1>: Retrieves the active value of the switch, which corresponds to its current state</li>
                        <li><b2>string</b2> <b1>StringValue</b1>: Holds the string value that the switch is currently using</li>
                        <li><b2>StringAsset</b2> <b1>AssetValue</b1>: Stores the value of the associated StringAsset</li>
                    </ul>
                </div>
            )}/>

            <Group title="TextSwitch" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>State</b1>: Reflects the current state of the switch, indicating whether it is using the Text value (false) or the Text_TMP value (true)</li>
                        <li><b2>string</b2> <b1>Text</b1>: Retrieves the active string value of the switch, which corresponds to its current state</li>
                        <li><b2>Color</b2> <b1>Color</b1>: Retrieves the active color value of the switch, which corresponds to its current state</li>
                        <li><b2>Text</b2> <b1>TextValue</b1>: Stores the value of the associated Text</li>
                        <li><b2>Text_TMP</b2> <b1>TMP_TextValue</b1>: Stores the value of the associated Text_TMP</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>TryGetComponents</b1>(<b2>GameObject</b2> <b1>gameObject</b1>): Tries to get the current active component in the GameObject provided</li>
                    </ul>
                </div>
            )}/>

            <Group title="Vector2Switch" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>State</b1>: Reflects the current state of the switch, indicating whether it is using the Vector2 value (false) or the asset value (true)</li>
                        <li><b2>Vector2</b2> <b1>Value</b1>: Retrieves the active value of the switch, which corresponds to its current state</li>
                        <li><b2>Vector2</b2> <b1>VectorValue</b1>: Holds the Vector2 value that the switch is currently using</li>
                        <li><b2>Vector2Asset</b2> <b1>AssetValue</b1>: Stores the value of the associated Vector2Asset</li>
                    </ul>
                </div>
            )}/>

            <Group title="Vector3Switch" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>State</b1>: Reflects the current state of the switch, indicating whether it is using the Vector3 value (false) or the asset value (true)</li>
                        <li><b2>Vector3</b2> <b1>Value</b1>: Retrieves the active value of the switch, which corresponds to its current state</li>
                        <li><b2>Vector3</b2> <b1>VectorValue</b1>: Holds the Vector3 value that the switch is currently using</li>
                        <li><b2>Vector3Asset</b2> <b1>AssetValue</b1>: Stores the value of the associated Vector3Asset</li>
                    </ul>
                </div>
            )}/>

            <Group title="TransformSwitch" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>State</b1>: Reflects the current state of the switch, indicating whether it is using the Transform value (false) or the Vector3Asset value (true)</li>
                        <li><b2>bool</b2> <b1>IsNull</b1>: Evaluates if the current active state value is null</li>
                        <li><b2>Vector3</b2> <b1>Position</b1>: Retrieves the active position value of the switch, which corresponds to its current state</li>
                        <li><b2>Vector3</b2> <b1>Rotation</b1>: Retrieves the active rotation value of the switch, which corresponds to its current state</li>
                        <li><b2>Vector3</b2> <b1>Scale</b1>: Retrieves the active scale value of the switch, which corresponds to its current state</li>
                        <li><b2>Transform</b2> <b1>TransformValue</b1>: Stores the value of the associated Transform</li>
                        <li><b2>Vector3Asset</b2> <b1>AssetValue</b1>: Stores the value of the associated Vector3Asset</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>TryGetComponents</b1>(<b2>GameObject</b2> <b1>gameObject</b1>): Tries to get the current active component in the GameObject provided</li>
                    </ul>
                </div>
            )}/>

            <Group title="RectTransformSwitch" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>State</b1>: Reflects the current state of the switch, indicating whether it is using the RectTransform value (false) or the Vector2Asset value (true)</li>
                        <li><b2>bool</b2> <b1>IsNull</b1>: Evaluates if the current active state value is null</li>
                        <li><b2>Vector2</b2> <b1>AnchoredPosition</b1>: Retrieves the active anchored position value of the switch, which corresponds to its current state</li>
                        <li><b2>Vector2</b2> <b1>SizeDelta</b1>: Retrieves the active size delta value of the switch, which corresponds to its current state</li>
                        <li><b2>RectTransform</b2> <b1>RectTransformValue</b1>: Stores the value of the associated RectTransform</li>
                        <li><b2>Vector2Asset</b2> <b1>AssetValue</b1>: Stores the value of the associated Vector2Asset</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>TryGetComponents</b1>(<b2>GameObject</b2> <b1>gameObject</b1>): Tries to get the current active component in the GameObject provided</li>
                    </ul>
                </div>
            )}/>

            <Group title="ColorSwitch" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>State</b1>: Reflects the current state of the switch, indicating whether it is using the SpriteRenderer value (0), the Image value (1), the Text value (2) or the Text_TMP value (3)</li>
                        <li><b2>Color</b2> <b1>Color</b1>: Retrieves the active color value of the switch, which corresponds to its current state</li>
                        <li><b2>SpriteRenderer</b2> <b1>SpriteValue</b1>: Stores the value of the associated SpriteRenderer</li>
                        <li><b2>Image</b2> <b1>ImageValue</b1>: Stores the value of the associated Image</li>
                        <li><b2>Text</b2> <b1>TextValue</b1>: Stores the value of the associated Text</li>
                        <li><b2>Text_TMP</b2> <b1>TMP_TextValue</b1>: Stores the value of the associated Text_TMP</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>TryGetComponents</b1>(<b2>GameObject</b2> <b1>gameObject</b1>): Tries to get the current active component in the GameObject provided</li>
                    </ul>
                </div>
            )}/>

            <Group title="SpriteSwitch" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>State</b1>: Reflects the current state of the switch, indicating whether it is using the SpriteRenderer value (false) or the Image value (true)</li>
                        <li><b2>Color</b2> <b1>Color</b1>: Retrieves the active color value of the switch, which corresponds to its current state</li>
                        <li><b2>Sprite</b2> <b1>Sprite</b1>: Retrieves the active sprite value of the switch, which corresponds to its current state</li>
                        <li><b2>SpriteRenderer</b2> <b1>SpriteValue</b1>: Stores the value of the associated SpriteRenderer</li>
                        <li><b2>Image</b2> <b1>ImageValue</b1>: Stores the value of the associated Image</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>TryGetComponents</b1>(<b2>GameObject</b2> <b1>gameObject</b1>): Tries to get the current active component in the GameObject provided</li>
                    </ul>
                </div>
            )}/>

            <Group title="TimeScaleSwitch" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>State</b1>: Reflects the current state of the switch, indicating whether it is using the TimeScale value (false) or the TimeScaleAsset value (true)</li>
                        <li><b2>float</b2> <b1>Delta</b1>: Retrieves the active delta time value of the switch, which corresponds to its current state</li>
                        <li><b2>float</b2> <b1>FixedDelta</b1>: Retrieves the active fixed delta time value of the switch, which corresponds to its current state</li>
                        <li><b2>float</b2> <b1>CurrentDelta</b1>: Retrieves the active current delta time value of the switch, which corresponds to its current state</li>
                        <li><b2>float</b2> <b1>Scale</b1>: Retrieves the active time scale value of the switch, which corresponds to its current state</li>
                        <li><b2>bool</b2> <b1>UseUnscaledTime</b1>: Retrieves the active use of unscaled time parameter value of the switch, which corresponds to its current state</li>
                        <li><b2>bool</b2> <b1>UseFixedTime</b1>: Retrieves the active use of fixed time parameter value of the switch, which corresponds to its current state</li>
                        <li><b2>TimeScale</b2> <b1>TimeScaleValue</b1>: Stores the value of the associated TimeScale</li>
                        <li><b2>TimeScaleAsset</b2> <b1>AssetValue</b1>: Stores the value of the associated TimeScaleAsset</li>
                    </ul>
                </div>
            )}/>


            <h3 className="p-2">How to Use</h3>

            <h4 className="c-light-1 p-3">Example 01: Using IntSwitch</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Switches/Switches - 01.jpg" alt=""/>            
            <p className="pad-left-3"> 
                This example explains how to use an IntSwitch. 
                An IntSwitch is defined in the script. 
                The Value property is used to set the int value and the current value is accessed and logged to the console.
            </p>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Switches/Switches - 02.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Switches/Switches - 03.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 02: Using ColorSwitch</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Switches/Switches - 04.jpg" alt=""/>            
            <p className="pad-left-3"> 
                In this example, a ColorSwitch is defined in the script and the Color property is used to set the color. 
                Then the color is printed to the console.
            </p>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Switches/Switches - 05.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Switches/Switches - 06.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Switches/Switches - 07.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Switches/Switches - 08.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 03: Using TextSwitch</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Switches/Switches - 09.jpg" alt=""/>            
            <p className="pad-left-3">
                Finally, in this example a TextSwitch is defined, the Text property is used to set the text of the field and then is printed to the console.
            </p>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Switches/Switches - 10.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Switches/Switches - 11.jpg" alt=""/>            


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>It is crucial to correctly set the state in the Inspector to ensure that the desired type value is selected and used.</li>
                <li>The Switch structures facilitate easy maintenance and updates to scripts without the need to directly modify code for changing types.</li>
                <li>These structures can be extended to other types as needed, ensuring flexibility and scalability.</li>
            </ul>
            
            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The Switch structure and its composed variations are invaluable tools for developers seeking to write more flexible, maintainable and scalable scripts. 
                By enabling the easy selection and manipulation of different type values through the Inspector, these structures reduce the complexity of script management and provide a streamlined approach to developing versatile applications. 
                Utilizing Switch structures can significantly improve the efficiency of script editing and maintenance.
            </p>
       </div>
    );
}