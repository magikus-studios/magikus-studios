import React from "react";
import Group from "Components/Group";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Tween Machine</h1>
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
            <ul className="property-list">
                <li>Moving an object from one position to another smoothly.</li>
                <li>Rotating an object continuously or to a specific angle.</li>
                <li>Scaling an object up or down.</li>
                <li>Changing the transparency of an object.</li>
                <li>Changing the color of an object.</li>
            </ul>

            <h3 className="p-2">How it Works</h3>

            <Group title="Move" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>ICycle</b2> <b1>Move</b1>(<b2>this Transform</b2> <b1>transform</b1>): Translate an object by a specified offset over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>Move</b1>(<b2>this GameObject</b2> <b1>gameObject</b1>): Translate an object by a specified offset over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>MoveTo</b1>(<b2>this Transform</b2> <b1>transform</b1>): Translate an object to a specific position over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>MoveTo</b1>(<b2>this GameObject</b2> <b1>gameObject</b1>): Translate an object to a specific position over time.</li>                        
                    </ul>

                    <h5 className="c-light-1 pad-left-3">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Transform</b2> <b1>transform</b1>: The targeted Transform for the tween.</li>                        
                        <li><b2>GameObject</b2> <b1>gameObject</b1>: The targeted GameObject for the tween.</li>
                        <li><b2>float</b2> <b1>duration</b1> (optional): Time in seconds for the operation. Defaults to 1f.</li>                        
                        <li><b2>EASING_TYPE</b2> <b1>easingType</b1> (optional): Easing function to use for the tween. Defaults to EASING_TYPE.LinearIn.</li>
                        <li><b2>ITimeScale</b2> <b1>timeScale</b1> (optional): Custom TimeScale for the tween.</li>
                        <li><b2>Vector3</b2> <b1>direction</b1>: The direction to move the object.</li>                        
                        <li><b2>Vector3</b2> <b1>position</b1>: The position to move the object to.</li>
                    </ul>                                        
                </div>
            )}/>

            <Group title="Spin" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>ICycle</b2> <b1>Spin</b1>(<b2>this Transform</b2> <b1>transform</b1>): Rotates an object continuously around its axes.</li>                                                
                        <li><b2>ICycle</b2> <b1>Spin</b1>(<b2>this GameObject</b2> <b1>gameObject</b1>): Rotates an object continuously around its axes.</li>                                                
                        <li><b2>ICycle</b2> <b1>SpinTo</b1>(<b2>this Transform</b2> <b1>transform</b1>): Rotates an object to a specific angle over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>SpinTo</b1>(<b2>this GameObject</b2> <b1>gameObject</b1>): Rotates an object to a specific angle over time.</li>                        
                    </ul>

                    <h5 className="c-light-1 pad-left-3">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Transform</b2> <b1>transform</b1>: The targeted Transform for the tween.</li>                        
                        <li><b2>GameObject</b2> <b1>gameObject</b1>: The targeted GameObject for the tween.</li>
                        <li><b2>float</b2> <b1>duration</b1> (optional): Time in seconds for the operation. Defaults to 1f.</li>                        
                        <li><b2>EASING_TYPE</b2> <b1>easingType</b1> (optional): Easing function to use for the tween. Defaults to EASING_TYPE.LinearIn.</li>
                        <li><b2>ITimeScale</b2> <b1>timeScale</b1> (optional): Custom TimeScale for the tween.</li>
                        <li><b2>Vector3</b2> <b1>localEulers</b1>: The angle by which to rotate the object over time.</li>                        
                        <li><b2>Vector3</b2> <b1>eulerAngle</b1>: The target angle for the object.</li>
                    </ul>                                        
                </div>
            )}/>

            <Group title="Grow" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>ICycle</b2> <b1>Grow</b1>(<b2>this Transform</b2> <b1>transform</b1>): Scales an object by a specified factor over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>Grow</b1>(<b2>this GameObject</b2> <b1>gameObject</b1>): Scales an object by a specified factor over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>GrowTo</b1>(<b2>this Transform</b2> <b1>transform</b1>): Scales an object to a specific size over time.</li>                                                
                        <li><b2>ICycle</b2> <b1>GrowTo</b1>(<b2>this GameObject</b2> <b1>gameObject</b1>): Scales an object to a specific size over time.</li>                        
                    </ul>

                    <h5 className="c-light-1 pad-left-3">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Transform</b2> <b1>transform</b1>: The targeted Transform for the tween.</li>                        
                        <li><b2>GameObject</b2> <b1>gameObject</b1>: The targeted GameObject for the tween.</li>
                        <li><b2>float</b2> <b1>duration</b1> (optional): Time in seconds for the operation. Defaults to 1f.</li>                        
                        <li><b2>EASING_TYPE</b2> <b1>easingType</b1> (optional): Easing function to use for the tween. Defaults to EASING_TYPE.LinearIn.</li>
                        <li><b2>ITimeScale</b2> <b1>timeScale</b1> (optional): Custom TimeScale for the tween.</li>
                        <li><b2>Vector3</b2> <b1>scale</b1>: The factor by which to scale the object over time.</li>                        
                        <li><b2>Vector3</b2> <b1>size</b1>: The target scale for the object.</li>
                    </ul>                                        
                </div>
            )}/>

            <Group title="Fade" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
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
                    </ul>

                    <h5 className="c-light-1 pad-left-3">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>SpriteRenderer</b2> <b1>image</b1>: The targeted SpriteRenderer for the tween.</li>                        
                        <li><b2>Image</b2> <b1>image</b1>: The targeted Image for the tween.</li>                        
                        <li><b2>Text</b2> <b1>image</b1>: The targeted Text for the tween.</li>                                                
                        <li><b2>TMP_Text</b2> <b1>image</b1>: The targeted TMP_Text for the tween.</li>                        
                        <li><b2>ColorSwitch</b2> <b1>image</b1>: The targeted ColorSwitch for the tween.</li>                        
                        <li><b2>float</b2> <b1>duration</b1> (optional): Time in seconds for the operation. Defaults to 1f.</li>                        
                        <li><b2>EASING_TYPE</b2> <b1>easingType</b1> (optional): Easing function to use for the tween. Defaults to EASING_TYPE.LinearIn.</li>
                        <li><b2>ITimeScale</b2> <b1>timeScale</b1> (optional): Custom TimeScale for the tween.</li>
                        <li><b2>float</b2> <b1>value</b1>: The amount to change the transparency over time.</li>                        
                        <li><b2>float</b2> <b1>alpha</b1>: The target transparency for the object.</li>                        
                    </ul>                                        
                </div>
            )}/>

            <Group title="Tint" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
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
                    </ul>

                    <h5 className="c-light-1 pad-left-3">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>SpriteRenderer</b2> <b1>image</b1>: The targeted SpriteRenderer for the tween.</li>                        
                        <li><b2>Image</b2> <b1>image</b1>: The targeted Image for the tween.</li>                        
                        <li><b2>Text</b2> <b1>image</b1>: The targeted Text for the tween.</li>                                                
                        <li><b2>TMP_Text</b2> <b1>image</b1>: The targeted TMP_Text for the tween.</li>                        
                        <li><b2>ColorSwitch</b2> <b1>image</b1>: The targeted ColorSwitch for the tween.</li>                        
                        <li><b2>float</b2> <b1>duration</b1> (optional): Time in seconds for the operation. Defaults to 1f.</li>                        
                        <li><b2>EASING_TYPE</b2> <b1>easingType</b1> (optional): Easing function to use for the tween. Defaults to EASING_TYPE.LinearIn.</li>
                        <li><b2>ITimeScale</b2> <b1>timeScale</b1> (optional): Custom TimeScale for the tween.</li>
                        <li><b2>Color</b2> <b1>value</b1>: The amount to change the color over time.</li>                        
                        <li><b2>Color</b2> <b1>tint</b1>: The target color for the object.</li>                                                
                    </ul>                                        
                </div>
            )}/>

            <div className="pad-bottom-3"></div>


            <h3 className="p-2">How to Use</h3>
            <p className="pad-left-2">
                To use Tween Machines, instantiate the desired tween class and configure its parameters as needed. 
                Then, call the Play method to start the animation.
            </p>
            <h4 className="c-light-1 p-3">Example 01: Move a GameObject to a New Position</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Machines/Tween/Tween - 01.jpg" alt=""/>
            <h4 className="c-light-1 p-3">Example 02: Rotate a GameObject</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Machines/Tween/Tween - 02.jpg" alt=""/>
            <h4 className="c-light-1 p-3">Example 03: Scale a GameObject Up</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Machines/Tween/Tween - 03.jpg" alt=""/>
            <h4 className="c-light-1 p-3">Example 04: Fade Out a SpriteRenderer</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Machines/Tween/Tween - 04.jpg" alt=""/>
            <h4 className="c-light-1 p-3">Example 05: Change the Tint of a SpriteRenderer</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Machines/Tween/Tween - 05.jpg" alt=""/>

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