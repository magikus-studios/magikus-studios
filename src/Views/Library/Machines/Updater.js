import React from "react";
import Group from "Components/Group";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Updater Machine</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Structure designed to Handle Different Types of Update Cycles within Unity
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Updater machine offers a powerful and efficient solution for managing update cycles in Unity. 
                By abstracting the update process, it enables a flexible and modular execution of recurring tasks without relying on MonoBehaviours. 
                Its structured system for subscribing and unsubscribing actions ensures that periodic tasks are managed with clarity and efficiency. 
                Supporting regular, fixed, late and asynchronous updates, the Updater machine adapts seamlessly to a wide range of game development needs.
            </p>


            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The primary purpose of the Updater Machine is to allow developers to subscribe and unsubscribe actions to specific update cycles, enabling controlled and organized execution of periodic tasks. 
                This tool ensures that developers can manage updates efficiently without the need of a monobehaviour update method, leading to better performance and cleaner code.
                <br/>
                The Updater Machine is particularly useful in scenarios where you need to:
            </p>
            <ul>
                <li>Perform specific actions at different intervals (e.g., regular, fixed, late or async updates).</li>
                <li>Manage complex update requirements without affecting the main update loop.</li>
                <li>Ensure certain actions are executed in a controlled and non-destructive manner.</li>
            </ul>

            <Group title="IUpdater Interface" content={(
                <div>
                    <h5 className="c-light-0">Properties</h5>
                    <ul className="property-list">
                        <li><b2>UPDATER_TYPE</b2> <b1>Type</b1>: Property representing the type of updater (Regular, Fixed, Late, Async).</li>
                        <li><b2>float</b2> <b1>UnscaledDeltaTime</b1>: Property representing the unscaled delta time for the update.</li>
                        <li><b2>float</b2> <b1>DeltaTime</b1>: Property representing the delta time for the update.</li>
                    </ul>
                    <h5 className="c-light-0">Methods</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>Subscribe</b1>(<b2>Action</b2> <b1>action</b1>): Method to subscribe an action to the updater.</li>
                        <li><b2>void</b2> <b1>Unsubscribe</b1>(<b2>Action</b2> <b1>action</b1>): Method to unsubscribe an action from the updater.</li>               
                    </ul>
                </div>
            )}/>

            <Group title="Updater Class" content={(
                <div>
                    <h5 className="c-light-0">Methods</h5>
                    <ul className="property-list">
                        <li><b2>static IUpdater</b2> <b1>Get</b1>(<b2>UPDATER_TYPE</b2> <b1>type</b1> = <b2>UPDATER_TYPE.Regular</b2>): Static method to retrieve an updater of the specified type.</li>
                    </ul>
                </div>               
            )}/>

            <h3 className="p-2">Examples</h3>
            <Group title="Example 01: Basic Usage of the Updater Machine" content={(
                <div>
                    <p>
                        This example shows the basic usage of the Updater Machine: 
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Machines/Updater/Updater - 01.jpg" alt=""/>
                    <ul>
                        <li><b>Retrieve an Updater Instance</b>: Use the Updater.Get method to obtain an instance of the desired updater type.</li>
                        <li><b>Subscribe Actions</b>: Attach actions to the updater using the Subscribe method.</li>
                        <li><b>Unsubscribe Actions</b>: Remove actions from the updater using the Unsubscribe method when they are no longer needed.</li>
                    </ul>
                </div>               
            )}/>


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>Updater instances have a lifespan mechanism that destroys them if no actions are subscribed for a certain period (5 seconds by default).</li>
                <li>Using the Updater Machine can help improve performance by managing update cycles more efficiently.</li>
                <li>The machine supports multiple update types, allowing developers to choose the most appropriate for their needs.</li>
            </ul>
       </div>
    );
}