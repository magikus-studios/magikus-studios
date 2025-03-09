import React from "react";
import Group from "Components/Group";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Timescale System</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                System designed to Facilitate the Synchronization of Time and Timescale between different Objects
            </h6>
            
            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Timescale system offers a robust and adaptable solution for managing and synchronizing time across multiple objects within a Unity project. 
                By utilizing a shared Timescale, objects can maintain consistent time values, ensuring cohesive behavior throughout the application. 
                This feature is especially beneficial for independently pausing game time while UI animations continue, applying time effects like slow motion or fast-forwarding across different entities or synchronizing objects to operate in a unified timeframe, such as aligning animation frames or physics calculations. 
                Leveraging the Timescale structure's properties and methods enables developers to create immersive and responsive gameplay experiences.
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Systems/Timescale/Timescale - 02.jpg" alt=""/>            
            </div>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The Timescale system can be used by both the Timescale structure and the Timescale asset, which implements the ITimescale interface. 
                The Timescale asset provides a convenient ScriptableObject for easily integrating Timescale functionality into scripts, with custom drawers enabling special serialization.
                Additionally, both the Timescale structure and Timescale asset include a Chain feature, allowing each instance to be linked to a master instance. 
                When calculating the time scale, if an instance has a master, its effective scale is determined by multiplying its own scale with the master’s scale. 
                This system enables seamless control over multiple time scales at once.
                Rather than adjusting each individually, modifying the master scale automatically updates all linked instances. 
                To prevent infinite loops, the system verifies master assignments before setting them, ensuring that circular dependencies are not created. 
                If an infinite loop is detected, the master instance is not assigned.
            </p>
            <Group title="ITimescale" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>ITimescale</b2> <b1>Master</b1>: Returns the master of this chain instance</li>
                        <li><b2>float</b2> <b1>Scale</b1>: Returns the scale of the Timescale</li>
                        <li><b2>float</b2> <b1>Delta</b1>: Returns the scaled Time.DeltaTime or Time.UnscaledDeltaTime</li>
                        <li><b2>float</b2> <b1>FixedDelta</b1>: Returns the scaled Time.FixedDeltaTime or Time.FixedUnscaledDeltaTime</li>
                        <li><b2>float</b2> <b1>CurrentDelta</b1>: Returns Delta or FixedDelta</li>
                        <li><b2>bool</b2> <b1>UseUnscaledTime</b1>: Enable/Disable the use of unscale time values</li>
                        <li><b2>bool</b2> <b1>UseFixedTime</b1>: Enable/Disable the use of fixed time values</li>
                    </ul>
                </div>
            )}/>
            <Group title="Timescale Structure: ITimescale" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>ITimescale</b2> <b1>Master</b1>: Returns the master of this chain instance</li>
                        <li><b2>float</b2> <b1>Scale</b1>: Returns the scale of the Timescale</li>
                        <li><b2>float</b2> <b1>Delta</b1>: Returns the scaled Time.DeltaTime or Time.UnscaledDeltaTime</li>
                        <li><b2>float</b2> <b1>FixedDelta</b1>: Returns the scaled Time.FixedDeltaTime or Time.FixedUnscaledDeltaTime</li>
                        <li><b2>float</b2> <b1>CurrentDelta</b1>: Returns Delta or FixedDelta</li>
                        <li><b2>bool</b2> <b1>UseUnscaledTime</b1>: Enable/Disable the use of unscale time values</li>
                        <li><b2>bool</b2> <b1>UseFixedTime</b1>: Enable/Disable the use of fixed time values</li>
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>IsValidMaster</b1>(<b2>ITimescale</b2> <b1>master</b1>): Checks if the provided master is a valid master for this chain</li>
                    </ul>
                </div>
            )}/>
            <Group title="Timescale Asset : ITimescale" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>ITimescale</b2> <b1>Master</b1>: Returns the master of this chain instance</li>
                        <li><b2>float</b2> <b1>Scale</b1>: Returns the scale of the Timescale</li>
                        <li><b2>float</b2> <b1>Delta</b1>: Returns the scaled Time.DeltaTime or Time.UnscaledDeltaTime</li>
                        <li><b2>float</b2> <b1>FixedDelta</b1>: Returns the scaled Time.FixedDeltaTime or Time.FixedUnscaledDeltaTime</li>
                        <li><b2>float</b2> <b1>CurrentDelta</b1>: Returns Delta or FixedDelta</li>
                        <li><b2>bool</b2> <b1>UseUnscaledTime</b1>: Enable/Disable the use of unscale time values</li>
                        <li><b2>bool</b2> <b1>UseFixedTime</b1>: Enable/Disable the use of fixed time values</li>
                        <li><b2>int</b2> <b1>SubscribersCount</b1>: Returns the amount of subscribers to this asset</li>                    
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>SkipNextChange</b1>(): Skips the next scale change</li>
                        <li><b2>void</b2> <b1>Subscribe</b1>(<b2>Action{"<Timescale>"}</b2> <b1>action</b1>): Subscribes the action to the onChange event</li>
                        <li><b2>void</b2> <b1>Subscribe</b1>(<b2>UnityEvent{"<Timescale>"}</b2> <b1>action</b1>): Subscribes the action to the onChange event</li>
                        <li><b2>void</b2> <b1>Unsubscribe</b1>(<b2>Action{"<Timescale>"}</b2> <b1>action</b1>): Unsubscribes the action from the onChange event</li>
                        <li><b2>void</b2> <b1>Unsubscribe</b1>(<b2>UnityEvent{"<Timescale>"}</b2> <b1>action</b1>): Unsubscribes the action from the onChange event</li>
                        <li><b2>void</b2> <b1>PrintValue</b1>(): Print the asset to the console</li>
                    </ul>
                </div>
            )}/>

            <h3 className="p-2">Examples</h3>
            <p className="pad-left-2">
                The Timescale system offers several properties and methods to manage and retrieve time-related values. 
                Here’s a breakdown of how to use the Timescale structure in your Unity project.
            </p>
            <ul>
                <li><b>Master</b>: A parent ITimescale instance that multiplies its scale with the current one</li> 
                <li><b>Scale</b>: Controls the scale factor applied to the delta time</li>
                <li><b>Delta</b>: Returns the delta time, adjusted by the time scale and optionally the unscaled time</li>
                <li><b>FixedDelta</b>: Returns the fixed delta time, adjusted by the time scale and optionally the unscaled time</li>
                <li><b>CurrentDelta</b>: Chooses between Delta and FixedDelta based on the UseFixedTime property</li>
                <li><b>UseUnscaledTime</b>: A bool indicating whether to use unscaled time (ignoring game pause)</li>
                <li><b>UseFixedTime</b>: A bool indicating whether to use the fixed delta time</li>
            </ul>
            <p className="pad-left-2">
                You can create a Timescale asset by going to the Unity menu, <b1>Assets {">"} Create {">"} Magikus {">"} Timescale System {">"} Timescale Asset</b1>.
            </p>
            <Group title="Example 01: Basic Timescale Usage" content={(
                <div>
                    <p> 
                        This example demonstrates how to create and use a Timescale object in a script to control the speed of a moving object.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Systems/Timescale/Timescale - 01.jpg" alt=""/>            
                    <p> 
                        A Timescale object is used to control the delta time applied to the object's movement speed. 
                        Adjusting the Scale property of the Timescale object will dynamically affect the movement speed of the object in the game.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Systems/Timescale/Timescale - 02.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 02: Pausing Game Time" content={(
                <div>
                    <p> 
                        In this example, a TimescaleAsset is used to pause game time while keeping UI animations running.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Systems/Timescale/Timescale - 03.jpg" alt=""/>            
                    <p> 
                        This script demonstrates how to pause and resume the game using TimescaleAsset. 
                        The game is paused by setting the Scale of gameTimescale to 0f, while the UI continues to run by maintaining its scale at 1f.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Systems/Timescale/Timescale - 04.jpg" alt=""/>            
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Systems/Timescale/Timescale - 05.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 03: Implementing Slow Motion Effect" content={(
                <div>
                    <p> 
                        This example showcases how to apply a slow motion effect to certain objects using a Timescale structure.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Systems/Timescale/Timescale - 06.jpg" alt=""/>            
                    <p> 
                        The Timescale structure is used to create a slow motion effect by halving the time scale. 
                        Objects using this Timescale will operate at half the normal speed until the scale is reset to 1f.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Systems/Timescale/Timescale - 07.jpg" alt=""/>            
                </div>
            )}/>

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The Timescale and TimescaleAsset structures both implement the ITimescale interface, allowing for consistent interaction across different implementations.</li>
                <li>Custom property drawers enable enhanced visualization and serialization in the Unity Editor, making it easier to configure and manage Timescale objects.</li>
            </ul>
       </div>
    );
}