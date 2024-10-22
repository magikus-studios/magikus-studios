import React from "react";

export default function Function() {

    return (
        <div className="c-light-2">
            <h1 className="text-center p-3">Magikus Library</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Magikus Library provides a rich set of tools and utilities that address many of the most common challenges in
                Unity development. By offering a unified and well-structured framework, the library empowers
                developers to streamline their workflow, write cleaner and more maintainable code, and tackle
                complex game development tasks with confidence. From decorators and utilities to machines and
                systems, Magikus Library accelerates the development process and enhances productivity.
            </h6>

            <h2 className="p-2">Introduction</h2>
            <p className="pad-left-2">
                The Magikus Library is a powerful and versatile C# framework designed specifically for the
                Unity3D game engine. It aims to streamline the game development process by providing a
                comprehensive toolkit that improves code readability and enhances team collaboration. The
                framework is organized into six core pillars - Decorators, Utilities, Structures, Machines, Systems
                and Tools - each offering a unique set of functionalities that address common development tasks.
                Whether you are looking to simplify data management, improve the inspector experience or
                implement state machines, the Magikus Library delivers the necessary resources to accelerate
                your development journey.
            </p>
            <p className="pad-left-2">
                It is particularly effective in reducing development time while promoting clean, maintainable code.
                Its flexible design allows developers to focus on creative and game-specific logic, without getting
                bogged down in repetitive tasks. Whether you're working on a large-scale project or a small indie
                game, the Magikus Library provides the building blocks for success, making it easier to tackle
                complex challenges and enhance productivity.
            </p>

            <h2 className="p-2">Installation</h2>
            <p className="pad-left-2">
                Getting started with the Magikus Library is straightforward and quick. Follow the steps below to
                integrate it into your Unity project:
                <ul>
                    <li>
                        Download the Magikus Library package from either the official website or the Unity Asset
                        Store.
                    </li>
                    <li>
                        Import the package into your Unity project: In the Unity Editor, navigate to Assets -{">"}
                        Import Package -{">"} Custom Package and select the Magikus Library package file you
                        downloaded.
                    </li>
                    <li>
                        After successful import, you should see the Magikus Library components available in your
                        project's assets.
                    </li>
                    <li>
                        To begin using the library in your scripts, make sure to include the "using Magikus"
                        statement at the top of each script. This will allow you to access all the features and tools
                        provided by the Magikus Library. Keep in mind that all the classes, methods and utilities of
                        the library are organized within the Magikus namespace. 
                    </li>
                </ul>
            </p>

            <h2 className="p-2">How it Works</h2>
            <p className="pad-left-2">
                The Magikus Library is structured into six distinct sections, each providing a set of tools tailored to
                different aspects of Unity game development. Here's a breakdown of how each section works and
                what it offers:
           </p>

            <h3 className="c-light-1 p-3">Decorators</h3>
            <p className="pad-left-3">
                The Decorators module contains a set of custom Unity Inspector attributes that enhance the visual
                organization and interactivity of serialized fields. Decorators allow you to customize how variables
                appear in the Unity Inspector, enabling better categorization and formatting. Whether you're
                displaying numbers, colors or complex data, decorators provide a user-friendly way to manipulate
                values. By using decorators, developers can present data in a more structured and intuitive
                manner within the Unity Editor, improving the workflow for both developers and designers. 
            </p>

            <h3 className="c-light-1 p-3">Utilities</h3>
            <p className="pad-left-3">
                The Utilities module includes a comprehensive set of methods that help simplify common game
                development tasks. The utilities cover a wide range of common tasks, including converting
                between types, looping through collections, creating random values and more. These methods
                allow developers to write less code, resulting in a cleaner and more maintainable codebase.
                Whether you're working with collections, handling file operations, performing mathematical
                calculations or generating random values, the Utilities module gives you the flexibility to handle
                data efficiently. 
            </p>

            <h3 className="c-light-1 p-3">Structures</h3>
            <p className="pad-left-3">
                The Structures module provides data structures that facilitate the management of game data,
                grids, binary states, ranges, time management and event handling. By offering predefined
                structures for grids, states and other game elements, the Structures module reduces the
                complexity of game logic. Developers can focus on the higher-level design and rely on these robust
                structures to handle core functionalities like pathfinding, event-driven systems or time
                synchronization. These structures make it easy to implement complex game mechanics and
                systems while promoting modularity and scalability. 
            </p>

            <h3 className="c-light-1 p-3">Machines</h3>
            <p className="pad-left-3">
                The Machines module provides tools for managing state-based behaviors, animation and periodic
                updates. This module includes State Machines, Tween Machines, Cycle Machines and Updater
                Machines which handle complex behavior patterns and transitions in a structured manner.
                Machines abstract common tasks such as animations, state transitions and behavior updates into
                reusable components. For example, the State Machine simplifies the process of managing game
                states, while the Tween Machine helps you create smooth transitions and animations without
                complex coding. 
            </p>

            <h3 className="c-light-1 p-3">Systems</h3>
            <p className="pad-left-3">
                The Systems module offers a range of pre-built solutions for commonly encountered game
                development needs. These systems, including audio, animation, dialog, event-driven systems and
                pooling systems, are designed to integrate seamlessly into Unity. Importantly, most systems do
                not require scripting knowledge to implement. These systems are designed to handle core aspects
                of game development with minimal setup. For example, you can easily manage audio playback or
                animations without writing custom scripts for each action. The event-driven systems enable better
                communication between game components, enhancing responsiveness and modularity.
            </p>

            <h3 className="c-light-1 p-3">Tools</h3>
            <p className="pad-left-3">
                The Tools module includes several development tools that streamline specific tasks within the
                Unity Editor. This includes tools like the Curve Tool, which simplifies animation curve editing, and
                the Hierarchy Tool, which enhances hierarchy navigation. These Tools are integrated directly into
                the Unity Editor, allowing developers to perform specific tasks more efficiently. Whether you're
                editing curves, monitoring references or navigating the hierarchy, these tools improve your overall
                development workflow by providing enhanced capabilities. 
            </p>
        </div>
    );
}