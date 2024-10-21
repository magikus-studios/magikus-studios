import React from "react";

export default function Function() {

    return (
        <div className="c-light-2">
            <h1 className="text-center">Structures</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Structures module of the Magikus Library is designed to facilitate various development tasks,
                particularly in game design and data management. This module includes a diverse array of
                structures that streamline common tasks such as managing 2D grids, controlling binary states,
                grouping multiple values, handling ranges and synchronizing time management. Additionally, it
                offers advanced tools for debugging and event handling. By using these structures, developers can
                reduce the complexity of their code, improve performance and maintain a high degree of
                flexibility. The Structures module's implementation within the Unity environment provides
                seamless integration with gameObjects and Components, promoting a modular and decoupled
                architecture. This results in more maintainable code that can be easily adapted and extended.
                Whether for implementing pathfinding algorithms, managing state-based game features or
                controlling the flow of events, the Structures module provides a robust framework that caters to
                the unique requirements of modern game development and data handling. 
            </h6>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The Structures module in the Magikus Library offers several specialized frameworks to enhance
                and simplify Unity development. It includes Grids for handling 2D spatial data, Toggles for
                managing binary states, Vectors for multi-dimensional data management, Couples for grouping
                different types of values and Ranges for defining intervals. Additionally, Tier structures automate
                event-driven logic based on value ranges, while DebugState and Labels improve development and
                object tagging. The TimeScale structure ensures synchronized time management across objects
                and the Events structure provides a comprehensive system for modular communication.
                ValueAssets facilitate the sharing of data across components or scenes and Switches allow
                developers to choose between different value types based on state conditions. Overall, the
                Structures module offers a versatile set of tools that streamline various aspects of game
                development and data handling, making it a valuable resource for developers looking to build
                flexible, maintainable and efficient code structures in Unity. 
            </p>

            <h3 className="p-2">Summary</h3>

            <h4 className="c-light-1 p-3">Grids</h4>
            <p className="pad-left-3">
                The Grids module provides classes for creating and manipulating 2D grids, crucial for applications 
                like game development and spatial data representation. The main classes include Matrix2D, a generic 
                class for handling 2D grids of any type, Grid2D, an extension with spatial grid functionalities, 
                and Pathfinder2D, designed for implementing pathfinding algorithms. These classes allow developers 
                to represent and manage game boards, implement AI pathfinding and analyze spatial data effectively.
            </p>

            <h4 className="c-light-1 p-3">Toggles</h4>
            <p className="pad-left-3">
                The Toggles structure allows for flexible management of binary states associated with any value type. 
                This is particularly useful in game development for toggling features or states based on user input 
                or game events. The structure supports actions or logging messages when the state is toggled "on" or "off". 
                This enhances controlled and context-aware execution, useful for enabling/disabling features, 
                managing player abilities and controlling UI elements.
            </p>

            <h4 className="c-light-1 p-3">Vectors</h4>
            <p className="pad-left-3">
                Vector structures, such as Vector2{"<"}T{">"}, Vector3{"<"}T{">"} and Color{"<"}T{">"}, 
                manage multi-dimensional data for independent axes settings, accommodating types like bool, AnimationCurves and enums. 
                These structures are ideal for storing and manipulating multi-axis data, offering a flexible 
                system that supports complex configurations. They are particularly useful for tasks like animating 
                different states or managing data for independent axes.
            </p>

            <h4 className="c-light-1 p-3">Couples</h4>
            <p className="pad-left-3">
                The Couples structure provides a way to group two or three values of different types. It is useful for 
                scenarios where you need to combine multiple values of different types, such as coordinates or 
                various properties. The structure allows for flexibility and seamless integration with Unity’s Inspector, 
                enhancing the visualization and manipulation of coupled values through custom attributes that 
                control field sizes in the Inspector.
            </p>

            <h4 className="c-light-1 p-3">Ranges</h4>
            <p className="pad-left-3">
                The Range structure holds a minimum and maximum value of any type that implements the IComparable interface. 
                It defines a range or interval between two values and is useful for scenarios requiring validation or comparison 
                of values within a specific range. This structure can check if a value is within, at the limit or outside the 
                defined range, making it adaptable to various types and contexts.
            </p>

            <h4 className="c-light-1 p-3">Tier</h4>
            <p className="pad-left-3">
                The Tier structure adds event-driven logic to the Range structure, automatically triggering actions when a value 
                is evaluated against a range. This is useful for monitoring and responding to value changes in real-time, such as 
                triggering effects when a player’s health falls below a threshold or when experience points reach a certain level. 
                It simplifies the evaluation and response process, enhancing efficiency in handling dynamic value changes.
            </p>

            <h4 className="c-light-1 p-3">Debug State</h4>
            <p className="pad-left-3">
                The DebugState structure simplifies debugging by enabling or disabling functionality within MonoBehaviour or 
                ScriptableObject scripts in Unity. It includes properties for toggling debugging messages and disabling script 
                features during runtime. This tool enhances the flexibility and efficiency of the development and testing process 
                by allowing developers to control script behavior without modifying the underlying code.
            </p>

            <h4 className="c-light-1 p-3">Labels</h4>
            <p className="pad-left-3">
                The Label structure serves as a tagging system, replacing string identifiers in Unity. It allows for organized 
                and flexible tagging of gameObjects and assets, improving performance and reducing errors associated with string 
                identifiers. This structure is useful for managing game assets, identifying objects in collisions and tagging 
                specific objects or components, enhancing clarity and control in complex scenes.
            </p>

            <h4 className="c-light-1 p-3">Time Scale</h4>
            <p className="pad-left-3">
                The TimeScale structure synchronizes time management across multiple objects in Unity, ensuring consistent time 
                values and uniform behavior. It is particularly useful for pausing game time independently of UI animations, 
                applying time effects like slow motion and aligning animation frames or physics calculations. The structure provides 
                a unified approach to time management, enhancing consistency and synchronization.
            </p>

            <h4 className="c-light-1 p-3">Events</h4>
            <p className="pad-left-3">
                The Event structure is an enhanced version of the UnityEvent system, designed to improve usability and modularity. 
                It allows events to be collapsed in the Unity Inspector, displays the number of subscribed actions and supports null-safe 
                invocation. By integrating with a scriptable object framework, it facilitates communication between components and 
                supports the Observer pattern, ideal for managing global events and enabling code decoupling.
            </p>

            <h4 className="c-light-1 p-3">Value Assets</h4>
            <p className="pad-left-3">
                ValueAssets represent different value types (e.g., bool, int, float) as ScriptableObjects, providing a modular and 
                decoupled way to share data across components and scenes in Unity. They allow different parts of a project to respond 
                to data changes without direct linkage, improving code flexibility and maintenance. ValueAssets act as a centralized 
                repository for critical game data, enabling seamless data flow and consistency.
            </p>

            <h4 className="c-light-1 p-3">Switches</h4>
            <p className="pad-left-3">
                Switch structures enhance script flexibility by allowing developers to choose among different types of values within 
                a single script component based on the current state. They compress similar types into a single parameter with setters 
                and getters, streamlining script manipulation. Switch structures enable developers to adjust types used without altering 
                scripts, facilitating easier manipulation and reducing code redundancy.
            </p>
       </div>
    );
}