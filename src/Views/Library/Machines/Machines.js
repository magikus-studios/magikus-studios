import React from "react";

export default function Function() {

    return (
        <div className="c-light-2">
            <h1 className="text-center">Machines</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Magikus Library provides a suite of powerful tools designed to facilitate various repetitive, 
                state-based and animated behaviors in Unity. These tools, or "machines", include the Updater Machine, 
                Cycle Machine, State Machine and Tween Machines. Each machine serves a specific purpose, ranging from 
                managing update cycles to creating smooth animations, ensuring that developers can implement complex 
                behaviors in a structured and efficient manner.
                The purpose of these machines is to abstract and simplify common tasks in game development, such as
                periodic updates, state management, looping behaviors and animations. By leveraging these utilities, 
                developers can write cleaner, more maintainable code, and focus on the creative aspects of game 
                development rather than the intricacies of implementation.
            </h6>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The Magikus Library Machines (Updaters, Cycles, State Machine and Tween Machines) are essential tools 
                for game developers using Unity. They simplify the implementation of complex behaviors, enhance 
                performance and promote code maintainability. By abstracting common tasks such as update cycles, 
                looping behaviors, state management and animations, these machines allow developers to focus on the 
                creative aspects of game development.             
            </p>

            <h3 className="p-2">Summary</h3>

            <h4 className="c-light-1 p-3">Updaters</h4>
            <p className="pad-left-3">
                The Updater Machine in the Magikus Library is a utility designed to handle different types of update 
                cycles within Unity. By abstracting the update mechanisms, it provides a flexible and modular approach 
                to executing periodic actions. The Updater Machine supports regular, fixed, late and asynchronous 
                updates, making it adaptable to various game development scenarios. The primary purpose of the Updater 
                Machine is to allow developers to subscribe and unsubscribe actions to specific update cycles, enabling 
                controlled and organized execution of periodic tasks.
            </p>

            <h4 className="c-light-1 p-3">Cycles</h4>
            <p className="pad-left-3">
                The Cycle Machine is designed to facilitate the creation and management of cycles within the context of 
                Unity game development. It allows developers to define and control various looping behaviors, such as 
                timed or frame-based cycles, with options to handle start, finish and cycle events. The primary purpose 
                of the Cycle Machine is to provide a flexible and robust mechanism for executing repeated actions in a game. 
                It can be used to manage animations, periodic updates or any repetitive tasks that need to be executed at regular intervals.
            </p>

            <h4 className="c-light-1 p-3">State Machine</h4>
            <p className="pad-left-3">
                The State Machine is a versatile and powerful tool designed to manage states and their transitions within an application. 
                It is commonly used in scenarios such as game mechanics, user interfaces and workflow management where various states and 
                state transitions need to be managed effectively. The primary purpose of the State Machine is to provide a structured way 
                to manage states and the transitions between them. It allows developers to define states and the actions that occur before, 
                during and after a state transition.
            </p>

            <h4 className="c-light-1 p-3">Tween Machines</h4>
            <p className="pad-left-3">
                Tween Machines are utilities designed to facilitate smooth animations and transitions for game objects in Unity. 
                They provide a way to animate various properties of game objects, such as position, rotation, scale and color, over time. 
                The purpose of Tween Machines is to create fluid, non-blocking animations that can be easily controlled and sequenced. 
                They are especially useful for creating user interface animations, character movements, object transformations and other 
                dynamic visual effects.
            </p>
      </div>
    );
}