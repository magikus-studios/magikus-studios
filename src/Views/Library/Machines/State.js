import React from "react";
import Group from "Components/Group";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">State Machine</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Structure designed to Manage States and their Transitions
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The State machine is a powerful and versatile structure for managing states and transitions across various applications, including game mechanics, user interfaces and gameflow control. 
                It provides a well-organized framework for handling complex state transitions, improving code organization and enhancing maintainability. 
                With its structured approach, the State machine is an essential solution for efficiently managing dynamic states and interactions in Unity projects.
            </p>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The primary purpose of the State Machine is to provide a structured way to manage states and the transitions between them. 
                It allows developers to define states and the actions that occur before, during and after a state transition. 
                This helps in organizing code, making it more readable, maintainable and scalable. 
                <br/>
                Some use cases are:
            </p>
            <ul>
                <li>Managing player states such as idle, running, jumping and attacking.</li>
                <li>Managing different views and states of a UI component.</li>                
                <li>Managing various stages in a business process or workflow.</li>
            </ul>
            <Group title="StateMachine<T>" content={(
                <div>
                    <h5 className="c-light-1">Constructors</h5>
                    <ul className="property-list">
                        <li><b2>StateMachine{"<T>"}</b2> <b1>StateMachine</b1>(<b2>params State{"<T>"}[]</b2> <b1>states</b1>): Initializes the state machine with an array of states.</li>
                        <li><b2>StateMachine{"<T>"}</b2> <b1>StateMachine</b1>(<b2>float</b2> <b1>updateRate</b1>, <b2>params State{"<T>"}[]</b2> <b1>states</b1>): Initializes the state machine with an update rate and an array of states.</li>
                        <li><b2>StateMachine{"<T>"}</b2> <b1>StateMachine</b1>(<b2>ITimescale</b2> <b1>timescale</b1>, <b2>params State{"<T>"}[]</b2> <b1>states</b1>): Initializes the state machine with a timescale and an array of states.</li>
                        <li><b2>StateMachine{"<T>"}</b2> <b1>StateMachine</b1>(<b2>float</b2> <b1>updateRate</b1>, <b2>ITimescale</b2> <b1>timescale</b1>, <b2>params State{"<T>"}[]</b2> <b1>states</b1>): Initializes the state machine with an update rate, a timescale and an array of states.</li>
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>Play</b1>(): Starts the state machine.</li>
                        <li><b2>void</b2> <b1>Pause</b1>(): Pauses the state machine.</li>
                        <li><b2>void</b2> <b1>Finish</b1>(): Stops the state machine cycle.</li>
                        <li><b2>StateMachine{"<T>"}</b2> <b1>AddState</b1>(<b2>T</b2> <b1>stateName</b1>): Adds a state to the state machine.</li>                        
                        <li><b2>StateMachine{"<T>"}</b2> <b1>AddState</b1>(<b2>T</b2> <b1>stateName</b1>, <b2>Action</b2> <b1>stateAction</b1>): Adds a state with an action to the state machine.</li>
                        <li><b2>StateMachine{"<T>"}</b2> <b1>AddState</b1>(<b2>T</b2> <b1>stateName</b1>, <b2>Action</b2> <b1>stateAction</b1>, <b2>Action</b2> <b1>beforeStateAction</b1>): Adds a state with actions to execute before and during the state.</li>
                        <li><b2>StateMachine{"<T>"}</b2> <b1>AddState</b1>(<b2>T</b2> <b1>stateName</b1>, <b2>Action</b2> <b1>stateAction</b1>, <b2>Action</b2> <b1>beforeStateAction</b1>, <b2>Action</b2> <b1>afterStateAction</b1>): Adds a state with actions to execute before, during, and after the state.</li>
                        <li><b2>StateMachine{"<T>"}</b2> <b1>AddState</b1>(<b2>State{"<T>"}</b2> <b1>state</b1>): Adds a State object to the state machine.</li>
                        <li><b2>bool</b2> <b1>SetState</b1>(<b2>T</b2> <b1>stateName</b1>): Sets the current state of the state machine.</li>
                        <li><b2>bool</b2> <b1>SetStateIfDifferent</b1>(<b2>T</b2> <b1>stateName</b1>): Sets the state only if it's not already the current state.</li>
                        <li><b2>bool</b2> <b1>IsCurrentState</b1>(<b2>T</b2> <b1>stateName</b1>): Checks if the given state name is the current state.</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>T</b2> <b1>stateName</b1>: The name of the state.</li>
                        <li><b2>Action</b2> <b1>stateAction</b1>: The action to be executed during the state.</li>
                        <li><b2>Action</b2> <b1>beforeStateAction</b1>: The action to be executed before the state.</li>
                        <li><b2>Action</b2> <b1>afterStateAction</b1>: The action to be executed after the state.</li>
                        <li><b2>float</b2> <b1>updateRate</b1>: The rate at which the state machine updates.</li>
                        <li><b2>ITimescale</b2> <b1>timescale</b1>: The timescale used for updating the state machine.</li>
                    </ul>     
                </div>
            )}/>


            <h3 className="p-2">Examples</h3>
            <Group title="Example 01: Basic Usage" content={(
                <div>
                    <p>
                        This example demonstrates the basic setup of a state machine with three simple states, each executing a console log action when active.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-95" src="images/Library/Machines/State/State - 01.jpg" alt=""/>
                    <ul>
                        <li><b>Creating the State Machine</b>: First create an instance of the StateMachine class, specifying the state type as string.</li>
                        <li><b>Adding States</b>: Use the AddState method to add three states: "Idle", "Running" and "Jumping". Each state has an associated action that prints a message to the console. This action will be executed whenever the state is active.</li>
                        <li><b>Setting the Initial State</b>: Set the initial state to "Idle" using the SetState method.</li>                
                        <li><b>Starting the State Machine</b>: Finally, call the Play method to start the state machine, allowing it to begin executing the actions associated with the current state.</li>
                    </ul>
                    <img className="block-center mar-bottom-3 img-border w-55" src="images/Library/Machines/State/State - 01.gif" alt=""/>
                </div>
            )}/>
            <Group title="Example 02: Using Before and After State Actions" content={(
                <div>
                    <p>
                        In this example, the additional beforeStateAction and afterStateAction provide hooks for performing operations 
                        during state transitions, such as logging or setting up/cleaning up resources.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-95" src="images/Library/Machines/State/State - 02.jpg" alt=""/>
                    <p>
                        It defines two states, "Idle" and "Running", each with corresponding debug logs for when the state is entered, updated or exited. 
                        The machine switches between these states based on user input (WASD keys) and showcases how to use the SetStateIfDifferent, Play and Pause methods to control state transitions during gameplay.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-55" src="images/Library/Machines/State/State - 02.gif" alt=""/>
                </div>
            )}/>
            <Group title="Example 03: Using Enums" content={(
                <div>
                    <p>
                        This example showcases how to manage and transition between multiple states dynamically using enums instead of strings. 
                        Using enums as state names makes code a lot more reliable and maintainable. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-95" src="images/Library/Machines/State/State - 03.jpg" alt=""/>
                    <p>
                        It defines three states (Idle, Running, Jumping) and assigns actions to each. 
                        When the Play() method is called, the state machine starts in the Idle state and updates every UpdateRate seconds. 
                        Based on player input, the state transitions between Running, Jumping and back to Idle, with each state logging a message to the console. 
                        The Stop() method pauses the state machine.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-55" src="images/Library/Machines/State/State - 03.gif" alt=""/>
                </div>
            )}/>


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>Ensure that states are added to the state machine before attempting to set or transition between states.</li>
                <li>The Play method must be called to start the state machine.</li>
                <li>The Pause method can be used to temporarily halt state transitions.</li>                
            </ul>
       </div>
    );
}