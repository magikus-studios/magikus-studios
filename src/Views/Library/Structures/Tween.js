import React from "react";
import Group from "Components/Group";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Tweens</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Smooth Animations and Transitions for GameObjects in Unity
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                Tween machines offer a robust and flexible way to animate GameObjects in Unity through scripting. 
                They allow developers to animate various properties of GameObjects (such as position, rotation, scale and color) over time. 
                By leveraging these tools via code, developers can create smooth, polished animations with minimal effort. 
                Whether you need to move, rotate, scale, fade or tint an object, Tween machines provide the scripting functionality necessary to achieve professional-grade animations.
            </p>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The purpose of Tween Machines is to create fluid, non-blocking animations that can be easily controlled and sequenced. 
                They are especially useful for creating user interface animations, character movements, object transformations and other dynamic visual effects.
                <br/>
                Some use cases are:
            </p>
            <ul>
                <li>Moving an object from one position to another smoothly.</li>
                <li>Rotating an object continuously or to a specific angle.</li>
                <li>Scaling an object up or down.</li>
                <li>Changing the transparency of an object.</li>
                <li>Changing the color of an object.</li>
            </ul>
            <Group title="Move" content={(
                <div>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>ICycle</b2> <b1>Move</b1>(<b2>this Transform</b2> <b1>transform</b1>): Translate an object by a specified offset over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>Move</b1>(<b2>this GameObject</b2> <b1>gameObject</b1>): Translate an object by a specified offset over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>Move</b1>(<b2>this RectTransform</b2> <b1>transform</b1>): Translate an object by a specified offset over time using the anchored position.</li>                                                
                        <li><b2>ICycle</b2> <b1>MoveTo</b1>(<b2>this Transform</b2> <b1>transform</b1>): Translate an object to a specific position over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>MoveTo</b1>(<b2>this GameObject</b2> <b1>gameObject</b1>): Translate an object to a specific position over time.</li>                        
                        <li><b2>ICycle</b2> <b1>MoveTo</b1>(<b2>this RectTransform</b2> <b1>transform</b1>): Translate an object to a specific position over time using the anchored position.</li>                                                
                        <li><b2>ICycle</b2> <b1>MoveBy</b1>(<b2>this Transform</b2> <b1>transform</b1>): Translate an object by a specified multiple over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>MoveBy</b1>(<b2>this GameObject</b2> <b1>gameObject</b1>): Translate an object by a specified multiple over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>MoveBy</b1>(<b2>this RectTransform</b2> <b1>transform</b1>): Translate an object by a specified multiple over time using the anchored position.</li>                                                
                        <li><b2>ICycle</b2> <b1>MoveFor</b1>(<b2>this Transform</b2> <b1>transform</b1>): Translate an object in a specified direction over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>MoveFor</b1>(<b2>this GameObject</b2> <b1>gameObject</b1>): Translate an object in a specified direction over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>MoveFor</b1>(<b2>this RectTransform</b2> <b1>transform</b1>): Translate an object in a specified direction over time using the anchored position.</li>                                                
                        <li><b2>ICycle</b2> <b1>MoveBounce</b1>(<b2>this Transform</b2> <b1>transform</b1>): Translate an object to a specified position and then return it to its original position over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>MoveBounce</b1>(<b2>this GameObject</b2> <b1>gameObject</b1>): Translate an object to a specified position and then return it to its original position over time.</li>                        
                        <li><b2>ICycle</b2> <b1>MoveBounce</b1>(<b2>this RectTransform</b2> <b1>transform</b1>): Translate an object to a specified position and then return it to its original position over time using the anchored position.</li>                                                
                    </ul>

                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Transform</b2> <b1>transform</b1>: The targeted Transform for the tween.</li>                        
                        <li><b2>GameObject</b2> <b1>gameObject</b1>: The targeted GameObject for the tween.</li>
                        <li><b2>RectTransform</b2> <b1>transform</b1>: The targeted RectTransform for the tween.</li>                        
                        <li><b2>float</b2> <b1>duration</b1> (optional): Time in seconds for the operation. Defaults to 1f.</li>                        
                        <li><b2>EASING_TYPE</b2> <b1>easingType</b1> (optional): Easing function to use for the tween. Defaults to EASING_TYPE.LinearIn.</li>
                        <li><b2>ITimescale</b2> <b1>timescale</b1> (optional): Custom Timescale for the tween.</li>
                        <li><b2>Vector3</b2> <b1>direction</b1>: The direction to move the object.</li>                        
                        <li><b2>Vector3</b2> <b1>position</b1>: The position to move the object to.</li>
                        <li><b2>Vector2</b2> <b1>direction</b1>: The direction to move the UI object.</li>                        
                        <li><b2>Vector2</b2> <b1>position</b1>: The position to move the UI object to.</li>
                    </ul>                                        
                </div>
            )}/>
            <Group title="Spin" content={(
                <div>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>ICycle</b2> <b1>Spin</b1>(<b2>this Transform</b2> <b1>transform</b1>): Rotates an object to a specific offset over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>Spin</b1>(<b2>this GameObject</b2> <b1>gameObject</b1>): Rotates an object to a specific offset over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>SpinTo</b1>(<b2>this Transform</b2> <b1>transform</b1>): Rotates an object to a specific angle over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>SpinTo</b1>(<b2>this GameObject</b2> <b1>gameObject</b1>): Rotates an object to a specific angle over time.</li>                        
                        <li><b2>ICycle</b2> <b1>SpinBy</b1>(<b2>this Transform</b2> <b1>transform</b1>): Rotates an object to a specific multiple over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>SpinBy</b1>(<b2>this GameObject</b2> <b1>gameObject</b1>): Rotates an object to a specific multiple over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>SpinFor</b1>(<b2>this Transform</b2> <b1>transform</b1>): Rotates an object continuously around its axes.</li>                                                
                        <li><b2>ICycle</b2> <b1>SpinFor</b1>(<b2>this GameObject</b2> <b1>gameObject</b1>): Rotates an object continuously around its axes.</li>                                                
                        <li><b2>ICycle</b2> <b1>SpinBounce</b1>(<b2>this Transform</b2> <b1>transform</b1>): Rotates an object to a specific angle and then return it to its original angle over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>SpinBounce</b1>(<b2>this GameObject</b2> <b1>gameObject</b1>): Rotates an object to a specific angle and then return it to its original angle over time.</li>                        
                    </ul>

                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Transform</b2> <b1>transform</b1>: The targeted Transform for the tween.</li>                        
                        <li><b2>GameObject</b2> <b1>gameObject</b1>: The targeted GameObject for the tween.</li>
                        <li><b2>float</b2> <b1>duration</b1> (optional): Time in seconds for the operation. Defaults to 1f.</li>                        
                        <li><b2>EASING_TYPE</b2> <b1>easingType</b1> (optional): Easing function to use for the tween. Defaults to EASING_TYPE.LinearIn.</li>
                        <li><b2>ITimescale</b2> <b1>timescale</b1> (optional): Custom Timescale for the tween.</li>
                        <li><b2>Vector3</b2> <b1>localEulers</b1>: The angle by which to rotate the object over time.</li>                        
                        <li><b2>Vector3</b2> <b1>eulerAngle</b1>: The target angle for the object.</li>
                    </ul>                                        
                </div>
            )}/>
            <Group title="Grow" content={(
                <div>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>ICycle</b2> <b1>Grow</b1>(<b2>this Transform</b2> <b1>transform</b1>): Scales an object by a specified factor over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>Grow</b1>(<b2>this GameObject</b2> <b1>gameObject</b1>): Scales an object by a specified factor over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>GrowTo</b1>(<b2>this Transform</b2> <b1>transform</b1>): Scales an object to a specific size over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>GrowTo</b1>(<b2>this GameObject</b2> <b1>gameObject</b1>): Scales an object to a specific size over time.</li>                        
                        <li><b2>ICycle</b2> <b1>GrowBy</b1>(<b2>this Transform</b2> <b1>transform</b1>): Scales an object by a specified multiple over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>GrowBy</b1>(<b2>this GameObject</b2> <b1>gameObject</b1>): Scales an object by a specified multiple over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>GrowFor</b1>(<b2>this Transform</b2> <b1>transform</b1>): Scales an object in a specified factor during a period of time.</li>                                                
                        <li><b2>ICycle</b2> <b1>GrowFor</b1>(<b2>this GameObject</b2> <b1>gameObject</b1>): Scales an object in a specified factor during a period of time.</li>                                                
                        <li><b2>ICycle</b2> <b1>GrowBounce</b1>(<b2>this Transform</b2> <b1>transform</b1>): Scales an object to a specific size and then return it to its original size over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>GrowBounce</b1>(<b2>this GameObject</b2> <b1>gameObject</b1>): Scales an object to a specific size and then return it to its original size over time.</li>                        
                    </ul>

                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Transform</b2> <b1>transform</b1>: The targeted Transform for the tween.</li>                        
                        <li><b2>GameObject</b2> <b1>gameObject</b1>: The targeted GameObject for the tween.</li>
                        <li><b2>float</b2> <b1>duration</b1> (optional): Time in seconds for the operation. Defaults to 1f.</li>                        
                        <li><b2>EASING_TYPE</b2> <b1>easingType</b1> (optional): Easing function to use for the tween. Defaults to EASING_TYPE.LinearIn.</li>
                        <li><b2>ITimescale</b2> <b1>timescale</b1> (optional): Custom Timescale for the tween.</li>
                        <li><b2>Vector3</b2> <b1>scale</b1>: The factor by which to scale the object over time.</li>                        
                        <li><b2>Vector3</b2> <b1>size</b1>: The target scale for the object.</li>
                    </ul>                                        
                </div>
            )}/>
            <Group title="Fade" content={(
                <div>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>ICycle</b2> <b1>Fade</b1>(<b2>this SpriteRenderer</b2> <b1>image</b1>): Changes the transparency of an object by a specified amount over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>Fade</b1>(<b2>this Image</b2> <b1>image</b1>): Changes the transparency of an object by a specified amount over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>Fade</b1>(<b2>this Text</b2> <b1>image</b1>): Changes the transparency of an object by a specified amount over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>Fade</b1>(<b2>this TMP_Text</b2> <b1>image</b1>): Changes the transparency of an object by a specified amount over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>Fade</b1>(<b2>this ColorSwitch</b2> <b1>image</b1>): Changes the transparency of an object by a specified amount over time.</li>                                                

                        <li><b2>ICycle</b2> <b1>FadeTo</b1>(<b2>this SpriteRenderer</b2> <b1>image</b1>): Changes the transparency of an object to a specific value over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>FadeTo</b1>(<b2>this Image</b2> <b1>image</b1>): Changes the transparency of an object to a specific value over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>FadeTo</b1>(<b2>this Text</b2> <b1>image</b1>): Changes the transparency of an object to a specific value over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>FadeTo</b1>(<b2>this TMP_Text</b2> <b1>image</b1>): Changes the transparency of an object to a specific value over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>FadeTo</b1>(<b2>this ColorSwitch</b2> <b1>image</b1>): Changes the transparency of an object to a specific value over time.</li>                                                

                        <li><b2>ICycle</b2> <b1>FadeBounce</b1>(<b2>this SpriteRenderer</b2> <b1>image</b1>): Changes the transparency of an object to a specific value and then return it to its original value over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>FadeBounce</b1>(<b2>this Image</b2> <b1>image</b1>): Changes the transparency of an object to a specific value and then return it to its original value over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>FadeBounce</b1>(<b2>this Text</b2> <b1>image</b1>): Changes the transparency of an object to a specific value and then return it to its original value over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>FadeBounce</b1>(<b2>this TMP_Text</b2> <b1>image</b1>): Changes the transparency of an object to a specific value and then return it to its original value over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>FadeBounce</b1>(<b2>this ColorSwitch</b2> <b1>image</b1>): Changes the transparency of an object to a specific value and then return it to its original value over time.</li>                                                
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>SpriteRenderer</b2> <b1>image</b1>: The targeted SpriteRenderer for the tween.</li>                        
                        <li><b2>Image</b2> <b1>image</b1>: The targeted Image for the tween.</li>                        
                        <li><b2>Text</b2> <b1>image</b1>: The targeted Text for the tween.</li>                                                
                        <li><b2>TMP_Text</b2> <b1>image</b1>: The targeted TMP_Text for the tween.</li>                        
                        <li><b2>ColorSwitch</b2> <b1>image</b1>: The targeted ColorSwitch for the tween.</li>                        
                        <li><b2>float</b2> <b1>duration</b1> (optional): Time in seconds for the operation. Defaults to 1f.</li>                        
                        <li><b2>EASING_TYPE</b2> <b1>easingType</b1> (optional): Easing function to use for the tween. Defaults to EASING_TYPE.LinearIn.</li>
                        <li><b2>ITimescale</b2> <b1>timescale</b1> (optional): Custom Timescale for the tween.</li>
                        <li><b2>float</b2> <b1>value</b1>: The amount to change the transparency over time.</li>                        
                        <li><b2>float</b2> <b1>alpha</b1>: The target transparency for the object.</li>                        
                    </ul>                                        
                </div>
            )}/>
            <Group title="Tint" content={(
                <div>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>ICycle</b2> <b1>Tint</b1>(<b2>this SpriteRenderer</b2> <b1>image</b1>): Changes the color of an object by a specified amount over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>Tint</b1>(<b2>this Image</b2> <b1>image</b1>): Changes the color of an object by a specified amount over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>Tint</b1>(<b2>this Text</b2> <b1>image</b1>): Changes the color of an object by a specified amount over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>Tint</b1>(<b2>this TMP_Text</b2> <b1>image</b1>): Changes the color of an object by a specified amount over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>Tint</b1>(<b2>this ColorSwitch</b2> <b1>image</b1>): Changes the color of an object by a specified amount over time.</li>                                                
                        
                        <li><b2>ICycle</b2> <b1>TintTo</b1>(<b2>this SpriteRenderer</b2> <b1>image</b1>): Changes the color of an object to a specific value over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>TintTo</b1>(<b2>this Image</b2> <b1>image</b1>): Changes the color of an object to a specific value over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>TintTo</b1>(<b2>this Text</b2> <b1>image</b1>): Changes the color of an object to a specific value over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>TintTo</b1>(<b2>this TMP_Text</b2> <b1>image</b1>): Changes the color of an object to a specific value over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>TintTo</b1>(<b2>this ColorSwitch</b2> <b1>image</b1>): Changes the color of an object to a specific value over time.</li>                                                
                        
                        <li><b2>ICycle</b2> <b1>TintBounce</b1>(<b2>this SpriteRenderer</b2> <b1>image</b1>): Changes the color of an object to a specific value and then return it to its original value over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>TintBounce</b1>(<b2>this Image</b2> <b1>image</b1>): Changes the color of an object to a specific value and then return it to its original value over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>TintBounce</b1>(<b2>this Text</b2> <b1>image</b1>): Changes the color of an object to a specific value and then return it to its original value over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>TintBounce</b1>(<b2>this TMP_Text</b2> <b1>image</b1>): Changes the color of an object to a specific value and then return it to its original value over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>TintBounce</b1>(<b2>this ColorSwitch</b2> <b1>image</b1>): Changes the color of an object to a specific value and then return it to its original value over time.</li>                                                
                    </ul> 
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>SpriteRenderer</b2> <b1>image</b1>: The targeted SpriteRenderer for the tween.</li>                        
                        <li><b2>Image</b2> <b1>image</b1>: The targeted Image for the tween.</li>                        
                        <li><b2>Text</b2> <b1>image</b1>: The targeted Text for the tween.</li>                                                
                        <li><b2>TMP_Text</b2> <b1>image</b1>: The targeted TMP_Text for the tween.</li>                        
                        <li><b2>ColorSwitch</b2> <b1>image</b1>: The targeted ColorSwitch for the tween.</li>                        
                        <li><b2>float</b2> <b1>duration</b1> (optional): Time in seconds for the operation. Defaults to 1f.</li>                        
                        <li><b2>EASING_TYPE</b2> <b1>easingType</b1> (optional): Easing function to use for the tween. Defaults to EASING_TYPE.LinearIn.</li>
                        <li><b2>ITimescale</b2> <b1>timescale</b1> (optional): Custom Timescale for the tween.</li>
                        <li><b2>Color</b2> <b1>value</b1>: The amount to change the color over time.</li>                        
                        <li><b2>Color</b2> <b1>tint</b1>: The target color for the object.</li>                                                
                    </ul>                                        
                </div>
            )}/>

            <h3 className="p-2">Examples</h3>
            <p className="pad-left-2">
                To use Tween Machines, instantiate the desired tween class and configure its parameters as needed. 
                Then, call the Play method to start the animation.
            </p>
            <Group title="Example 01: Move a GameObject to a New Position" content={(
                <div>
                    <p>
                        This example demonstrates how to smoothly move a GameObject between two positions.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Tween/Tween - 01.jpg" alt=""/>
                    <p>
                        By pressing the M key, the object transitions between its original position and a target position using a specified easing type and duration. 
                        The script uses the MoveTo method along with an easing function and an OnFinish callback to handle movement and animation state toggling.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Tween/Tween - 01.gif" alt=""/>
                </div>
            )}/>
            <Group title="Example 02: Rotate a GameObject" content={(
                <div>
                    <p>
                        This example demonstrates how to smoothly rotate a GameObject.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Tween/Tween - 02.jpg" alt=""/>
                    <p>
                        When the S key is pressed, the Spin() method triggers a tween animation that rotates the object by a specified value over a given duration using the selected easing type. 
                        A flag prevents multiple tweens from playing simultaneously and the animation resets the flag once completed.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-20" src="images/Library/Structures/Tween/Tween - 02.gif" alt=""/>
                </div>
            )}/>
            <Group title="Example 03: Scale a GameObject Up" content={(
                <div>
                    <p>
                        This example demonstrates how to smoothly scale a GameObject up or down with easing.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Tween/Tween - 03.jpg" alt=""/>
                    <p>
                        When the G key is pressed, the object scales by a specified amount over a set duration, using the selected easing type.
                        It toggles between scaling up and scaling back down and ensures only one animation plays at a time using state flags.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-20" src="images/Library/Structures/Tween/Tween - 03.gif" alt=""/>
                </div>
            )}/>
            <Group title="Example 04: Fade Out a SpriteRenderer" content={(
                <div>
                    <p>
                        This example demonstrates how to fade in a SpriteRenderer using a tween animation. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Tween/Tween - 04.jpg" alt=""/>
                    <p>
                        When the user presses the F key, the script triggers a fade-in effect that smoothly transitions the sprite’s opacity to fully visible (alpha = 1) over a specified duration using a chosen easing function. 
                        The tween plays only once at a time and resets its state after completion, ensuring clean and controlled visual transitions.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-20" src="images/Library/Structures/Tween/Tween - 04.gif" alt=""/>
                </div>
            )}/>
            <Group title="Example 05: Change the Tint of a SpriteRenderer" content={(
                <div>
                    <p>
                        This example demonstrates how to smoothly tint a SpriteRenderer. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Tween/Tween - 05.jpg" alt=""/>
                    <p>
                        When the T key is pressed, the script animates the color transition of the target sprite between its original color and a specified tint using a defined easing function and duration.
                        The animation plays only when not already in progress and automatically resets once complete, enabling toggling between tinted and original colors.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-20" src="images/Library/Structures/Tween/Tween - 05.gif" alt=""/>
                </div>
            )}/>


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>Ensure that the GameObject you are animating has the necessary components (e.g., Renderer for color changes, Transform for position, rotation, and scale changes).</li>
                <li>Tween operations are non-blocking, allowing other game logic to continue running while the animation is in progress.</li>
                <li>Combining multiple tweens can create complex animations. Use the OnFinish callback to chain animations.</li>
                <li>Easing functions determine the speed curve of the animation. Choose the appropriate easing function based on the desired effect.</li>
            </ul>
       </div>
    );
}