import React from "react";
import Group from "Components/Group";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center">Updater Machine</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Updater Machine in the Magikus Library is a utility designed to handle different types of update cycles within Unity. 
                By abstracting the update mechanisms, it provides a flexible and modular approach to executing periodic actions. 
                The Updater Machine supports regular, fixed, late and asynchronous updates, making it adaptable to various game development scenarios.
            </h6>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The primary purpose of the Updater Machine is to allow developers to subscribe and unsubscribe actions to 
                specific update cycles, enabling controlled and organized execution of periodic tasks. This tool ensures 
                that developers can manage updates efficiently without cluttering the main game loop, leading to better 
                performance and cleaner code.
            </p>
            <p className="pad-left-2">
                The Updater Machine is particularly useful in scenarios where you need to:
            </p>
            <ul className="property-list">
                <li>Perform specific actions at different intervals (e.g., regular, fixed, late, or async updates).</li>
                <li>Manage complex update requirements without affecting the main update loop.</li>
                <li>Ensure certain actions are executed in a controlled and non-destructive manner.</li>
            </ul>


            <h3 className="p-2">How it Works</h3>

            <Group title="IUpdater Interface" content={(
                <div className="p-3">
                    <h5 className="c-light-0 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>UPDATER_TYPE</b2> <b1>Type</b1>: Property representing the type of updater (Regular, Fixed, Late, Async).</li>
                        <li><b2>float</b2> <b1>UnscaledDeltaTime</b1>: Property representing the unscaled delta time for the update.</li>
                        <li><b2>float</b2> <b1>DeltaTime</b1>: Property representing the delta time for the update.</li>
                    </ul>
                    <h5 className="c-light-0 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>Subscribe</b1>(<b2>Action</b2> <b1>action</b1>): Method to subscribe an action to the updater.</li>
                        <li><b2>void</b2> <b1>Unsubscribe</b1>(<b2>Action</b2> <b1>action</b1>): Method to unsubscribe an action from the updater.</li>               
                    </ul>
                </div>
            )}/>

            <Group title="Updater Class" content={(
                <div className="p-3">
                    <h5 className="c-light-0 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>static IUpdater</b2> <b1>Get</b1>(<b2>UPDATER_TYPE</b2> <b1>type</b1> = <b2>UPDATER_TYPE.Regular</b2>): Static method to retrieve an updater of the specified type.</li>
                    </ul>
                </div>               
            )}/>

            <div className="pad-bottom-3"></div>

            <h3 className="p-2">How to Use</h3>
            <ul className="property-list">
                <li><b>Retrieve an Updater Instance</b>: Use the Updater.Get method to obtain an instance of the desired updater type.</li>
                <li><b>Subscribe Actions</b>: Attach actions to the updater using the Subscribe method.</li>
                <li><b>Unsubscribe Actions</b>: Remove actions from the updater using the Unsubscribe method when they are no longer needed.</li>
            </ul>

            <h4 className="c-light-1 p-3">Example</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Machines/Updater/Updater - 01.jpg" alt=""/>

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>Updater instances have a lifespan mechanism that destroys them if no actions are subscribed for a certain period (5 seconds by default).</li>
                <li>Using the Updater Machine can help improve performance by managing update cycles more efficiently.</li>
                <li>The machine supports multiple update types, allowing developers to choose the most appropriate for their needs.</li>
            </ul>

            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The Updater Machine in the Magikus Library is a versatile and efficient tool for managing update cycles in Unity. By providing 
                a structured approach to subscribing and unsubscribing actions, it ensures that periodic tasks are handled cleanly and efficiently. 
                Whether you need regular updates, fixed intervals, late updates or asynchronous operations, the Updater Machine offers a robust 
                solution to enhance your development workflow.
            </p>
       </div>
    );
}