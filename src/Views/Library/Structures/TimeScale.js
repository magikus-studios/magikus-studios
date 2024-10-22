import React from "react";
import Group from "Components/Group";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center">Time Scale Structure</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The TimeScale structure is designed to facilitate the synchronization of time and time scale management between different objects in Unity. 
                By sharing the same TimeScale object, multiple objects can maintain consistent time values, ensuring uniform behavior throughout the application. 
                This can be particularly useful in scenarios where there is a need to pause game time independently from UI animations, to apply various time effects 
                like slow motion or fast-forwarding across different entities or ensuring multiple objects operate with a unified sense of time, such as aligning animation frames or physics calculations.
            </h6>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The TimeScale structure can be used by both the TimeScale class and the TimeScale asset, which implements the ITimeScale interface. 
                The TimeScale asset provides a convenient ScriptableObject for easily integrating TimeScale functionality into scripts, with custom drawers enabling special serialization.
            </p>


            <h3 className="p-2">How it Works</h3>

            <Group title="ITimeScale" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>Delta</b1>: Returns the scaled Time.DeltaTime or Time.UnscaledDeltaTime</li>
                        <li><b2>float</b2> <b1>FixedDelta</b1>: Returns the scaled Time.FixedDeltaTime or Time.FixedUnscaledDeltaTime</li>
                        <li><b2>float</b2> <b1>CurrentDelta</b1>: Returns Delta or FixedDelta</li>
                        <li><b2>float</b2> <b1>Scale</b1>: Returns the scale of the TimeScale</li>
                        <li><b2>bool</b2> <b1>UseUnscaledTime</b1>: Enable/Disable the use of unscale time values</li>
                        <li><b2>bool</b2> <b1>UseFixedTime</b1>: Enable/Disable the use of fixed time values</li>
                    </ul>
                </div>
            )}/>
            <Group title="TimeScale Asset : ITimeScale" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>SubscribersCount</b1>: Returns the amount of subscribers to this asset</li>                    
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>SkipNextChange</b1>(): Skips the next scale change</li>
                        <li><b2>void</b2> <b1>Subscribe</b1>(<b2>Action{"<TimeScale>"}</b2> <b1>action</b1>): Subscribes the action to the onChange event</li>
                        <li><b2>void</b2> <b1>Subscribe</b1>(<b2>UnityEvent{"<TimeScale>"}</b2> <b1>action</b1>): Subscribes the action to the onChange event</li>
                        <li><b2>void</b2> <b1>Unsubscribe</b1>(<b2>Action{"<TimeScale>"}</b2> <b1>action</b1>): Unsubscribes the action from the onChange event</li>
                        <li><b2>void</b2> <b1>Unsubscribe</b1>(<b2>UnityEvent{"<TimeScale>"}</b2> <b1>action</b1>): Unsubscribes the action from the onChange event</li>
                        <li><b2>void</b2> <b1>ResetAssetValue</b1>(): Reset the asset value</li>
                        <li><b2>void</b2> <b1>SetDefaultValue</b1>(): Set the asset with default values</li>
                        <li><b2>void</b2> <b1>PrintValue</b1>(): Print the asset to the console</li>
                    </ul>
                </div>
            )}/>


            <h3 className="p-2">How to Use</h3>
            <p className="pad-left-2">
                The TimeScale structure offers several properties and methods to manage and retrieve time-related values. 
                Here’s a breakdown of how to use the TimeScale structure in your Unity project.
            </p>
            <ul>
                <li><b>Scale</b>: Controls the scale factor applied to the delta time</li>
                <li><b>Delta</b>: Returns the delta time, adjusted by the time scale and optionally the unscaled time</li>
                <li><b>FixedDelta</b>: Returns the fixed delta time, adjusted by the time scale and optionally the unscaled time</li>
                <li><b>CurrentDelta</b>: Chooses between Delta and FixedDelta based on the UseFixedTime property</li>
                <li><b>UseUnscaledTime</b>: A bool indicating whether to use unscaled time (ignoring game pause)</li>
                <li><b>UseFixedTime</b>: A bool indicating whether to use the fixed delta time</li>
            </ul>
            <p className="pad-left-2">
                You can create a TimeScale asset by going to the Unity menu, Assets {">"} Create {">"} Magikus {">"} Structures {">"} TimeScale Structure {">"} Time Scale Asset.
            </p>

            <h4 className="c-light-1 p-3">Example 01: Basic TimeScale Usage</h4>
            <p className="pad-left-3"> 
                This example demonstrates how to create and use a TimeScale object in a script to control the speed of a moving object.
            </p>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/TimeScale/Time Scale - 01.jpg" alt=""/>            
            <p className="pad-left-3"> 
                A TimeScale object is used to control the delta time applied to the object's movement speed. 
                Adjusting the Scale property of the TimeScale object will dynamically affect the movement speed of the object in the game.
            </p>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/TimeScale/Time Scale - 02.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 02: Pausing Game Time</h4>
            <p className="pad-left-3"> 
                In this example, a TimeScaleAsset is used to pause game time while keeping UI animations running.
            </p>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/TimeScale/Time Scale - 03.jpg" alt=""/>            
            <p className="pad-left-3"> 
                This script demonstrates how to pause and resume the game using TimeScaleAsset. 
                The game is paused by setting the Scale of gameTimeScale to 0f, while the UI continues to run by maintaining its scale at 1f.
            </p>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/TimeScale/Time Scale - 04.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/TimeScale/Time Scale - 05.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 03: Implementing Slow Motion Effect</h4>
            <p className="pad-left-3"> 
                This example showcases how to apply a slow motion effect to certain objects using a TimeScale structure.
            </p>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/TimeScale/Time Scale - 06.jpg" alt=""/>            
            <p className="pad-left-3"> 
                The TimeScale structure is used to create a slow motion effect by halving the time scale. 
                Objects using this TimeScale will operate at half the normal speed until the scale is reset to 1f.
            </p>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/TimeScale/Time Scale - 07.jpg" alt=""/>            


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The TimeScale and TimeScaleAsset structures both implement the ITimeScale interface, allowing for consistent interaction across different implementations.</li>
                <li>Custom property drawers enable enhanced visualization and serialization in the Unity Editor, making it easier to configure and manage TimeScale objects.</li>
            </ul>
            
            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The TimeScale structure provides a powerful and flexible way to manage and synchronize time across various objects in a Unity project. 
                Whether you need to pause the game, create time manipulation effects or synchronize animations, the TimeScale structure and its associated asset can help streamline these processes and enhance the functionality of your game. 
                By leveraging the properties and methods provided by the TimeScale structure, developers can create dynamic and responsive gameplay experiences.
            </p>
       </div>
    );
}