import React from "react";
import Group from "Components/Group";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center">State Machine</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The State Machine is a versatile and powerful tool designed to manage states and their transitions within an application. 
                It is commonly used in scenarios such as game mechanics, user interfaces and workflow management where various states and 
                state transitions need to be managed effectively.
            </h6>


            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The primary purpose of the State Machine is to provide a structured way to manage states and the transitions between them. 
                It allows developers to define states and the actions that occur before, during and after a state transition. 
                This helps in organizing code, making it more readable, maintainable and scalable. 
            </p>
            <p className="pad-left-2">
                Some use cases are:
            </p>
            <ul className="property-list">
                <li>Managing player states such as idle, running, jumping and attacking.</li>
                <li>Managing different views and states of a UI component.</li>                
                <li>Managing various stages in a business process or workflow.</li>
            </ul>

            <h3 className="p-2">How it Works</h3>

            <Group title="StateMachine<T>" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Constructors</h5>
                    <ul className="property-list">
                        <li><b2>StateMachine{"<T>"}</b2> <b1>StateMachine</b1>(<b2>params State{"<T>"}[]</b2> <b1>states</b1>): Initializes the state machine with an array of states.</li>
                        <li><b2>StateMachine{"<T>"}</b2> <b1>StateMachine</b1>(<b2>float</b2> <b1>updateRate</b1>, <b2>params State{"<T>"}[]</b2> <b1>states</b1>): Initializes the state machine with an update rate and an array of states.</li>
                        <li><b2>StateMachine{"<T>"}</b2> <b1>StateMachine</b1>(<b2>ITimeScale</b2> <b1>timeScale</b1>, <b2>params State{"<T>"}[]</b2> <b1>states</b1>): Initializes the state machine with a time scale and an array of states.</li>
                        <li><b2>StateMachine{"<T>"}</b2> <b1>StateMachine</b1>(<b2>float</b2> <b1>updateRate</b1>, <b2>ITimeScale</b2> <b1>timeScale</b1>, <b2>params State{"<T>"}[]</b2> <b1>states</b1>): Initializes the state machine with an update rate, a time scale and an array of states.</li>
                    </ul>

                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>Play</b1>(): Starts the state machine.</li>
                        <li><b2>void</b2> <b1>Pause</b1>(): Pauses the state machine.</li>
                        <li><b2>StateMachine{"<T>"}</b2> <b1>AddState</b1>(<b2>T</b2> <b1>stateName</b1>): Adds a state to the state machine.</li>                        
                        <li><b2>StateMachine{"<T>"}</b2> <b1>AddState</b1>(<b2>T</b2> <b1>stateName</b1>, <b2>Action</b2> <b1>stateAction</b1>): Adds a state with an action to the state machine.</li>
                        <li><b2>StateMachine{"<T>"}</b2> <b1>AddState</b1>(<b2>T</b2> <b1>stateName</b1>, <b2>Action</b2> <b1>stateAction</b1>, <b2>Action</b2> <b1>beforeStateAction</b1>): Adds a state with actions to execute before and during the state.</li>
                        <li><b2>StateMachine{"<T>"}</b2> <b1>AddState</b1>(<b2>T</b2> <b1>stateName</b1>, <b2>Action</b2> <b1>stateAction</b1>, <b2>Action</b2> <b1>beforeStateAction</b1>, <b2>Action</b2> <b1>afterStateAction</b1>): Adds a state with actions to execute before, during, and after the state.</li>
                        <li><b2>StateMachine{"<T>"}</b2> <b1>AddState</b1>(<b2>State{"<T>"}</b2> <b1>state</b1>): Adds a State object to the state machine.</li>
                        <li><b2>bool</b2> <b1>SetState</b1>(<b2>T</b2> <b1>stateName</b1>): Sets the current state of the state machine.</li>
                        <li><b2>bool</b2> <b1>IsCurrentState</b1>(<b2>T</b2> <b1>stateName</b1>): Checks if the given state name is the current state.</li>
                    </ul>

                    <h5 className="c-light-1 pad-left-3">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>T</b2> <b1>stateName</b1>: The name of the state.</li>
                        <li><b2>Action</b2> <b1>stateAction</b1>: The action to be executed during the state.</li>
                        <li><b2>Action</b2> <b1>beforeStateAction</b1>: The action to be executed before the state.</li>
                        <li><b2>Action</b2> <b1>afterStateAction</b1>: The action to be executed after the state.</li>
                        <li><b2>float</b2> <b1>updateRate</b1>: The rate at which the state machine updates.</li>
                        <li><b2>ITimeScale</b2> <b1>timeScale</b1>: The time scale used for updating the state machine.</li>
                    </ul>
                                        
                </div>
            )}/>

            <div className="pad-bottom-3"></div>


            <h3 className="p-2">How to Use</h3>

            <h4 className="c-light-1 p-3">Example 01: Basic Usage</h4>
            <p className="pad-left-3">
                This example demonstrates the basic setup of a state machine with three simple states, each executing a console log action when active.
            </p>
            <img className="block-center mar-bottom-3 img-border w-95" src="images/Library/Machines/State/State - 01.jpg" alt=""/>
            <ul className="property-list pad-left-3">
                <li><b>Creating the State Machine</b>: First create an instance of the StateMachine class, specifying the state type as string.</li>
                <li><b>Adding States</b>: Use the AddState method to add three states: "Idle", "Running" and "Jumping". Each state has an associated action that prints a message to the console. This action will be executed whenever the state is active.</li>
                <li><b>Setting the Initial State</b>: Set the initial state to "Idle" using the SetState method.</li>                
                <li><b>Starting the State Machine</b>: Finally, call the Play method to start the state machine, allowing it to begin executing the actions associated with the current state.</li>
            </ul>

            <h4 className="c-light-1 p-3">Example 02: Using Before and After State Actions</h4>
            <p className="pad-left-3">
                In this example, the additional beforeStateAction and afterStateAction provide hooks for performing operations 
                during state transitions, such as logging or setting up/cleaning up resources.
            </p>
            <img className="block-center mar-bottom-3 img-border w-95" src="images/Library/Machines/State/State - 02.jpg" alt=""/>

            <h4 className="c-light-1 p-3">Example 03: Using Enums</h4>
            <p className="pad-left-3">
                This example showcases how to manage and transition between multiple states dynamically using enums instead of strings. 
                Using enums as state names makes code a lot more reliable and maintainable. 
            </p>
            <img className="block-center mar-bottom-3 img-border w-95" src="images/Library/Machines/State/State - 03.jpg" alt=""/>


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>Ensure that states are added to the state machine before attempting to set or transition between states.</li>
                <li>The Play method must be called to start the state machine.</li>
                <li>The Pause method can be used to temporarily halt state transitions.</li>                
            </ul>

            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The State Machine is a robust and flexible tool for managing states and transitions in various applications. 
                By providing a structured way to handle state management, it simplifies code organization and enhances maintainability. 
                Whether used in game mechanics, user interfaces or workflow management, the State Machine offers a powerful solution for state handling needs.
            </p>
       </div>
    );
}