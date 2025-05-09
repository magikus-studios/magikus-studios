import React from "react";

export default function Function() {

    let scrollUp = () => { window.scrollTo({ top: 0, behavior: "smooth" }); }

    return (
        <div className="c-light-2">
            <h1 className="text-center pad-top-4">Structures</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Data Structures that provide Essential Building Blocks for Game Development
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2">
                The Structures module provides a robust set of essential building blocks, designed to streamline game development by making it faster, easier and more decoupled. 
                These structures help developers manage game design and data more efficiently, reduce the complexity of their code while enhancing performance and flexibility. 
                By integrating seamlessly with Unity's GameObjects and Components, the Structures module promotes a modular and decoupled architecture, resulting in code that is easier to maintain, adapt and extend.                    
            </p>

            <a href="/#/library/structures/grids" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Grids</h4></a>
            <p className="pad-left-3">
                The Grid structures module provides classes for creating and managing grids, streamlining tasks like pathfinding and spatial data handling in game development.
            </p>

            <a href="/#/library/structures/toggles" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Toggles</h4></a>
            <p className="pad-left-3">
                The Toggle structure provides a flexible way to manage binary on/off states with associated values, enabling controlled functionality changes and streamlined code in scenarios like enabling/disabling features, controlling UI elements or managing player abilities.
            </p>

            <a href="/#/library/structures/sets" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Sets</h4></a>
            <p className="pad-left-3">
                The Set structures offer a flexible framework for managing multi-axis data in Unity, supporting various data types and seamlessly integrating with the Unity Editor to enhance functionality and streamline development workflows.
            </p>

            <a href="/#/library/structures/couples" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Couples</h4></a>
            <p className="pad-left-3">
                The Couple structures are versatile data containers that efficiently manage pairs or trios of related values of different types, offering flexibility, easy visualization in Unity's Inspector and customizable layouts.
            </p>

            <a href="/#/library/structures/ranges" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Ranges</h4></a>
            <p className="pad-left-3">
                The Range structure is a versatile tool for defining and manipulating value ranges, supporting any type that implements the IComparable interface and offering flexibility for diverse range-based logic in projects.
            </p>

            <a href="/#/library/structures/tier" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Tier</h4></a>
            <p className="pad-left-3">
                The Tier structure adds event-driven logic to the Range structure, automatically triggering actions when a value is evaluated against a range.
            </p>

            <a href="/#/library/structures/switches" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Switches</h4></a>
            <p className="pad-left-3">
                The Switch structure and its variations provide a way to manage and select different value types within a single object, enhancing script maintainability and scalability by allowing state-dependent value selection directly in Unity's Inspector.
            </p>

            <a href="/#/library/structures/debase" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Debase</h4></a>
            <p className="pad-left-3">
                A foundational script for MonoBehaviours and ScriptableObjects, the Debase structure simplifies debugging, enables runtime toggling of features and streamlines development and testing for cleaner, more efficient workflows.
            </p>
       </div>
    );
}