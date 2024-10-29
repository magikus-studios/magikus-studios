import React from "react";

export default function Function() {

    let scrollUp = () => { window.scrollTo({ top: 0, behavior: "smooth" }); }

    return (
        <div className="c-light-2">
            <h1 className="text-center pad-top-4">Machines</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Dynamic Structures that exploit In-Game Time Cycles
            </h6>
            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2">
                The Machines module offers a suite of dynamic data structures designed to change state over time, simplifying time-based and regularly updated tasks in game development. 
                These structures excel in managing repetitive, state-driven and animated behaviors, allowing developers to focus more on creativity and design rather than the complexities of implementation.
            </p>

            <a href="/#/library/machines/updater" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Updaters</h4></a>
            <p className="pad-left-3">
                The Updater Machine in the Magikus Library is a utility designed to handle different types of update 
                cycles within Unity. By abstracting the update mechanisms, it provides a flexible and modular approach 
                to executing periodic actions. The Updater Machine supports regular, fixed, late and asynchronous 
                updates, making it adaptable to various game development scenarios. The primary purpose of the Updater 
                Machine is to allow developers to subscribe and unsubscribe actions to specific update cycles, enabling 
                controlled and organized execution of periodic tasks.
            </p>

            <a href="/#/library/machines/cycle" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Cycles</h4></a>
            <p className="pad-left-3">
                The Cycle Machine is designed to facilitate the creation and management of cycles within the context of 
                Unity game development. It allows developers to define and control various looping behaviors, such as 
                timed or frame-based cycles, with options to handle start, finish and cycle events. The primary purpose 
                of the Cycle Machine is to provide a flexible and robust mechanism for executing repeated actions in a game. 
                It can be used to manage animations, periodic updates or any repetitive tasks that need to be executed at regular intervals.
            </p>

            <a href="/#/library/machines/state" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">State Machine</h4></a>
            <p className="pad-left-3">
                The State Machine is a versatile and powerful tool designed to manage states and their transitions within an application. 
                It is commonly used in scenarios such as game mechanics, user interfaces and workflow management where various states and 
                state transitions need to be managed effectively. The primary purpose of the State Machine is to provide a structured way 
                to manage states and the transitions between them. It allows developers to define states and the actions that occur before, 
                during and after a state transition.
            </p>

            <a href="/#/library/machines/tween" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Tween Machines</h4></a>
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