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
                The Grids module provides classes for creating and manipulating 2D grids, crucial for applications 
                like game development and spatial data representation. The main classes include Matrix2D, a generic 
                class for handling 2D grids of any type, Grid2D, an extension with spatial grid functionalities, 
                and Pathfinder2D, designed for implementing pathfinding algorithms. These classes allow developers 
                to represent and manage game boards, implement AI pathfinding and analyze spatial data effectively.
            </p>

            <a href="/#/library/structures/toggles" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Toggles</h4></a>
            <p className="pad-left-3">
                The Toggles structure allows for flexible management of binary states associated with any value type. 
                This is particularly useful in game development for toggling features or states based on user input 
                or game events. The structure supports actions or logging messages when the state is toggled "on" or "off". 
                This enhances controlled and context-aware execution, useful for enabling/disabling features, 
                managing player abilities and controlling UI elements.
            </p>

            <a href="/#/library/structures/vectors" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Vectors</h4></a>
            <p className="pad-left-3">
                Vector structures, such as Vector2{"<"}T{">"}, Vector3{"<"}T{">"} and Color{"<"}T{">"}, 
                manage multi-dimensional data for independent axes settings, accommodating types like bool, AnimationCurves and enums. 
                These structures are ideal for storing and manipulating multi-axis data, offering a flexible 
                system that supports complex configurations. They are particularly useful for tasks like animating 
                different states or managing data for independent axes.
            </p>

            <a href="/#/library/structures/couples" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Couples</h4></a>
            <p className="pad-left-3">
                The Couples structure provides a way to group two or three values of different types. It is useful for 
                scenarios where you need to combine multiple values of different types, such as coordinates or 
                various properties. The structure allows for flexibility and seamless integration with Unity’s Inspector, 
                enhancing the visualization and manipulation of coupled values through custom attributes that 
                control field sizes in the Inspector.
            </p>

            <a href="/#/library/structures/ranges" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Ranges</h4></a>
            <p className="pad-left-3">
                The Range structure holds a minimum and maximum value of any type that implements the IComparable interface. 
                It defines a range or interval between two values and is useful for scenarios requiring validation or comparison 
                of values within a specific range. This structure can check if a value is within, at the limit or outside the 
                defined range, making it adaptable to various types and contexts.
            </p>

            <a href="/#/library/structures/tier" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Tier</h4></a>
            <p className="pad-left-3">
                The Tier structure adds event-driven logic to the Range structure, automatically triggering actions when a value 
                is evaluated against a range. This is useful for monitoring and responding to value changes in real-time, such as 
                triggering effects when a player’s health falls below a threshold or when experience points reach a certain level. 
                It simplifies the evaluation and response process, enhancing efficiency in handling dynamic value changes.
            </p>

            <a href="/#/library/structures/label" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Labels</h4></a>
            <p className="pad-left-3">
                The Label structure serves as a tagging system, replacing string identifiers in Unity. It allows for organized 
                and flexible tagging of gameObjects and assets, improving performance and reducing errors associated with string 
                identifiers. This structure is useful for managing game assets, identifying objects in collisions and tagging 
                specific objects or components, enhancing clarity and control in complex scenes.
            </p>

            <a href="/#/library/structures/timeScale" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Time Scale</h4></a>
            <p className="pad-left-3">
                The TimeScale structure synchronizes time management across multiple objects in Unity, ensuring consistent time 
                values and uniform behavior. It is particularly useful for pausing game time independently of UI animations, 
                applying time effects like slow motion and aligning animation frames or physics calculations. The structure provides 
                a unified approach to time management, enhancing consistency and synchronization.
            </p>

            <a href="/#/library/structures/events" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Events</h4></a>
            <p className="pad-left-3">
                The Event structure is an enhanced version of the UnityEvent system, designed to improve usability and modularity. 
                It allows events to be collapsed in the Unity Inspector, displays the number of subscribed actions and supports null-safe 
                invocation. By integrating with a scriptable object framework, it facilitates communication between components and 
                supports the Observer pattern, ideal for managing global events and enabling code decoupling.
            </p>

            <a href="/#/library/structures/valueAssets" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Value Assets</h4></a>
            <p className="pad-left-3">
                ValueAssets represent different value types (e.g., bool, int, float) as ScriptableObjects, providing a modular and 
                decoupled way to share data across components and scenes in Unity. They allow different parts of a project to respond 
                to data changes without direct linkage, improving code flexibility and maintenance. ValueAssets act as a centralized 
                repository for critical game data, enabling seamless data flow and consistency.
            </p>

            <a href="/#/library/structures/switches" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Switches</h4></a>
            <p className="pad-left-3">
                Switch structures enhance script flexibility by allowing developers to choose among different types of values within 
                a single script component based on the current state. They compress similar types into a single parameter with setters 
                and getters, streamlining script manipulation. Switch structures enable developers to adjust types used without altering 
                scripts, facilitating easier manipulation and reducing code redundancy.
            </p>
       </div>
    );
}