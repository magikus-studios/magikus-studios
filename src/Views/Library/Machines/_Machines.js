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
                The Updater machine efficiently manages recurring tasks in Unity by abstracting update cycles, supporting various update types and allowing modular execution without having to rely on MonoBehaviours.
            </p>

            <a href="/#/library/machines/cycle" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Cycles</h4></a>
            <p className="pad-left-3">
                The Cycle machine is a flexible tool for creating and managing time- or frame-based looping behaviors in Unity, with event handling and control features that enhance game development efficiency and gameplay.
            </p>

            <a href="/#/library/machines/state" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">State Machine</h4></a>
            <p className="pad-left-3">
                The State machine is a versatile framework for managing complex state transitions in Unity, enhancing code organization, maintainability and efficiency across applications like game mechanics, UI and gameflow control.
            </p>

            <a href="/#/library/machines/tween" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Tween Machines</h4></a>
            <p className="pad-left-3">
                Tween machines provide a powerful and flexible way to animate GameObject properties (like position, rotation, scale and color) over time in Unity, enabling developers to create smooth, professional-grade animations through scripting with minimal effort.
            </p>
      </div>
    );
}