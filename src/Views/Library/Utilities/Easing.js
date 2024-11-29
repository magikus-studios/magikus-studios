import React from "react";
import Group from "Components/Group";

export default function Function() {

    
    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Easing Utilities</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Methods for creating Smooth Animations, Transitions and Subtle Effects
            </h6>
                        
            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Easing utilities provide a powerful set of tools for creating smooth and visually appealing transitions in your animations. 
                With different easing types and multiple variations, you can fine-tune the motion effects to fit your specific needs. 
                Whether you're animating UI elements, creating game effects or just adding a touch of polish to your project, these utilities offer a wide range of possibilities for enhancing the user experience.
            </p>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The Easing utilities are housed within the Easing static class and provide developers with a wide array of easing functions. 
                These utilities include 13 different easing types, each with three variations: In, Out and Both.
                These variations describe how the easing function will be applied over time, whether at the beginning (In), the end (Out) or both (Both).
            </p>

            <h3 className="p-2">How it Works</h3>
 
            <Group title="GetEasingFunc" content={(
                <div>
                    <p>
                        Returns a Func{"<float, float>"} that represents the specified easing function.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Func{"<float, float>"}</b2> <b1>GetEasingFunc</b1>(<b2>EASING_TYPE</b2> <b1>easingType</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>EASING_TYPE</b2> <b1>easingType</b1>: An EASING_TYPE enum value indicating which easing function to retrieve</li>                    
                    </ul>
                </div>
            )}/>

            <Group title="Linear" content={(
                <div>
                    <p>
                        A constant rate of change applying the easing at the beginning, at the endo or both. 
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static float</b2> <b1>LinearIn</b1>(<b2>float</b2> <b1>x</b1>)</li>
                        <li><b2>static float</b2> <b1>LinearOut</b1>(<b2>float</b2> <b1>x</b1>)</li>
                        <li><b2>static float</b2> <b1>LinearBoth</b1>(<b2>float</b2> <b1>x</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>x</b1>: The value to convert with the easing functions</li>                    
                    </ul>
                </div>
            )}/>

            <Group title="Sin" content={(
                <div>
                    <p>
                        Eases using the sine function applying the easing at the beginning, at the endo or both. 
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static float</b2> <b1>SinIn</b1>(<b2>float</b2> <b1>x</b1>)</li>
                        <li><b2>static float</b2> <b1>SinOut</b1>(<b2>float</b2> <b1>x</b1>)</li>
                        <li><b2>static float</b2> <b1>SinBoth</b1>(<b2>float</b2> <b1>x</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>x</b1>: The value to convert with the easing functions</li>                    
                    </ul>
                </div>
            )}/>

            <Group title="Cos" content={(
                <div>
                    <p>
                        Eases using the cosine function applying the easing at the beginning, at the endo or both. 
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static float</b2> <b1>CosIn</b1>(<b2>float</b2> <b1>x</b1>)</li>
                        <li><b2>static float</b2> <b1>CosOut</b1>(<b2>float</b2> <b1>x</b1>)</li>
                        <li><b2>static float</b2> <b1>CosBoth</b1>(<b2>float</b2> <b1>x</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>x</b1>: The value to convert with the easing functions</li>                    
                    </ul>
                </div>
            )}/>

            <Group title="Trig" content={(
                <div>
                    <p>
                        Trigonometric easing that smoothly accelerates or decelerates applying the easing at the beginning, at the endo or both. 
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static float</b2> <b1>TrigIn</b1>(<b2>float</b2> <b1>x</b1>)</li>
                        <li><b2>static float</b2> <b1>TrigOut</b1>(<b2>float</b2> <b1>x</b1>)</li>
                        <li><b2>static float</b2> <b1>TrigBoth</b1>(<b2>float</b2> <b1>x</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>x</b1>: The value to convert with the easing functions</li>                    
                    </ul>
                </div>
            )}/>

            <Group title="Quad" content={(
                <div>
                    <p>
                        Quadratic easing, accelerating or decelerating at a constant rate applying the easing at the beginning, at the endo or both. 
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static float</b2> <b1>QuadIn</b1>(<b2>float</b2> <b1>x</b1>)</li>
                        <li><b2>static float</b2> <b1>QuadOut</b1>(<b2>float</b2> <b1>x</b1>)</li>
                        <li><b2>static float</b2> <b1>QuadBoth</b1>(<b2>float</b2> <b1>x</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>x</b1>: The value to convert with the easing functions</li>                    
                    </ul>
                </div>
            )}/>

            <Group title="Cubic" content={(
                <div>
                    <p>
                        Cubic easing, for smoother, more pronounced accelerations or decelerations applying the easing at the beginning, at the endo or both. 
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static float</b2> <b1>CubicIn</b1>(<b2>float</b2> <b1>x</b1>)</li>
                        <li><b2>static float</b2> <b1>CubicOut</b1>(<b2>float</b2> <b1>x</b1>)</li>
                        <li><b2>static float</b2> <b1>CubicBoth</b1>(<b2>float</b2> <b1>x</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>x</b1>: The value to convert with the easing functions</li>                    
                    </ul>
                </div>
            )}/>

            <Group title="Quart" content={(
                <div>
                    <p>
                        Quartic easing, even smoother and more pronounced than cubic applying the easing at the beginning, at the endo or both. 
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static float</b2> <b1>QuartIn</b1>(<b2>float</b2> <b1>x</b1>)</li>
                        <li><b2>static float</b2> <b1>QuartOut</b1>(<b2>float</b2> <b1>x</b1>)</li>
                        <li><b2>static float</b2> <b1>QuartBoth</b1>(<b2>float</b2> <b1>x</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>x</b1>: The value to convert with the easing functions</li>                    
                    </ul>
                </div>
            )}/>

            <Group title="Quint" content={(
                <div>
                    <p>
                        Quintic easing, with a very steep curve applying the easing at the beginning, at the endo or both. 
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static float</b2> <b1>QuintIn</b1>(<b2>float</b2> <b1>x</b1>)</li>
                        <li><b2>static float</b2> <b1>QuintOut</b1>(<b2>float</b2> <b1>x</b1>)</li>
                        <li><b2>static float</b2> <b1>QuintBoth</b1>(<b2>float</b2> <b1>x</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>x</b1>: The value to convert with the easing functions</li>                    
                    </ul>
                </div>
            )}/>

            <Group title="Exp" content={(
                <div>
                    <p>
                        Exponential easing, for sharp accelerations or decelerations applying the easing at the beginning, at the endo or both. 
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static float</b2> <b1>ExpIn</b1>(<b2>float</b2> <b1>x</b1>)</li>
                        <li><b2>static float</b2> <b1>ExpOut</b1>(<b2>float</b2> <b1>x</b1>)</li>
                        <li><b2>static float</b2> <b1>ExpBoth</b1>(<b2>float</b2> <b1>x</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>x</b1>: The value to convert with the easing functions</li>                    
                    </ul>
                </div>
            )}/>

            <Group title="Circular" content={(
                <div>
                    <p>
                        Easing that follows a circular curve applying the easing at the beginning, at the endo or both. 
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static float</b2> <b1>CircularIn</b1>(<b2>float</b2> <b1>x</b1>)</li>
                        <li><b2>static float</b2> <b1>CircularOut</b1>(<b2>float</b2> <b1>x</b1>)</li>
                        <li><b2>static float</b2> <b1>CircularBoth</b1>(<b2>float</b2> <b1>x</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>x</b1>: The value to convert with the easing functions</li>                    
                    </ul>
                </div>
            )}/>

            <Group title="Back" content={(
                <div>
                    <p>
                        Easing with a slight overshoot at the beginning, at the endo or both. 
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static float</b2> <b1>BackIn</b1>(<b2>float</b2> <b1>x</b1>)</li>
                        <li><b2>static float</b2> <b1>BackOut</b1>(<b2>float</b2> <b1>x</b1>)</li>
                        <li><b2>static float</b2> <b1>BackBoth</b1>(<b2>float</b2> <b1>x</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>x</b1>: The value to convert with the easing functions</li>                    
                    </ul>
                </div>
            )}/>

            <Group title="Elastic" content={(
                <div>
                    <p>
                        Easing that mimics an elastic, with a bouncy effect applying the easing at the beginning, at the endo or both. 
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static float</b2> <b1>ElasticIn</b1>(<b2>float</b2> <b1>x</b1>)</li>
                        <li><b2>static float</b2> <b1>ElasticOut</b1>(<b2>float</b2> <b1>x</b1>)</li>
                        <li><b2>static float</b2> <b1>ElasticBoth</b1>(<b2>float</b2> <b1>x</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>x</b1>: The value to convert with the easing functions</li>                    
                    </ul>
                </div>
            )}/>

            <Group title="Bounce" content={(
                <div>
                    <p>
                        Easing that bounces, like a ball dropping to the ground applying the easing at the beginning, at the endo or both. 
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static float</b2> <b1>BounceIn</b1>(<b2>float</b2> <b1>x</b1>)</li>
                        <li><b2>static float</b2> <b1>BounceOut</b1>(<b2>float</b2> <b1>x</b1>)</li>
                        <li><b2>static float</b2> <b1>BounceBoth</b1>(<b2>float</b2> <b1>x</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>x</b1>: The value to convert with the easing functions</li>                    
                    </ul>
                </div>
            )}/>


            <h3 className="p-2">How to Use</h3>
            <h4 className="c-light-1 p-3">Example 01: Use of Circular Easing Functions</h4>
            <p className="pad-left-3">
                To create transitions that start and end at the same position you can use one of these circular easing:
            </p>
            <img className="block-center mar-bottom-3 img-border w-65" src="images/Library/Utilities/Easing/Easing - 01.jpg" alt=""/>            
            <h4 className="c-light-1 p-3">Example 02: Smooth Transition with Easing</h4>
            <p className="pad-left-3">
                Suppose you want to create an animation that starts slowly, accelerates and then slows down again at the end, you can use some of the smooth transition easing function:            
            </p>
            <img className="block-center mar-bottom-3 img-border w-65" src="images/Library/Utilities/Easing/Easing - 02.jpg" alt=""/>            
            <h4 className="c-light-1 p-3">Example 03: Applying a Bouncy Effect</h4>
            <p className="pad-left-3">
                To simulate a bouncy effect, such as an object dropping to the ground and bouncing, you can use the bounce easing functions:
            </p>
            <img className="block-center mar-bottom-3 img-border w-65" src="images/Library/Utilities/Easing/Easing - 03.jpg" alt=""/>            
            <h4 className="c-light-1 p-3">Example 04: Dynamic Easing Selection with GetEasingFunc</h4>
            <p className="pad-left-3">
                In cases where you want to dynamically choose the easing function, perhaps based on user input, you can use GetEasingFunc:
            </p>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Easing/Easing - 04.jpg" alt=""/>            

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The In, Out and Both variations provide flexibility for applying the easing function at different points of the animation.</li>
                <li>The Elastic and Bounce functions are especially useful for creating realistic motion effects.</li>
                <li>All easing functions take a float value (typically representing time normalized between 0 and 1) and return a float value that represents the eased output.</li>
                <li>Using GetEasingFunc can simplify your code if you need to switch between different easing functions dynamically.</li>
            </ul>
       </div>
    );
}