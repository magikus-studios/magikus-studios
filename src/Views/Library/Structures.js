import React from "react";

export default function Function() {

    let scrollUp = () => { window.scrollTo({ top: 0, behavior: "smooth" }); }

    return (
        <div className="c-light-2">
            <h1 className="text-center pad-top-4">Structures</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Data and Dynamic Structures that provide Essential Building Blocks for Game Development
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2">
                The Structures module provides a robust set of essential building blocks, designed to streamline game development by making it faster, easier and more decoupled. 
                These structures help developers manage game design and data more efficiently, reduce the complexity of their code while enhancing performance and flexibility. 
                By integrating seamlessly with Unity's GameObjects and Components, the Structures module promotes a modular and decoupled architecture, resulting in code that is easier to maintain, adapt and extend.                    
            </p>

            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Library/04 - [1950x1300] Structures V2.png" alt=""/>            
            </div>

            <div className="container mar-bottom-3">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <a href="/#/magikus/structures/debase" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Debase</h4></a>
                        <p className="pad-left-3">
                            A foundational script for MonoBehaviours and ScriptableObjects, the Debase structure simplifies debugging, enables runtime toggling of features and streamlines development and testing for cleaner, more efficient workflows.
                        </p>
                    </div>
                    <div className="p-2 col-lg-5 col-md-12">
                        <a href="/#/magikus/structures/debase" className="t-dec-none vertical-center" onClick={scrollUp}>
                            <img className="block-center img-border w-80" src="images/Library/Structures/Debase/Debase - 03.gif" alt=""/>            
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mar-bottom-3">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <a href="/#/magikus/structures/toggles" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Toggles</h4></a>
                        <p className="pad-left-3">
                            The Toggle structure provides a flexible way to manage binary on/off states with associated values, enabling controlled functionality changes and streamlined code in scenarios like enabling/disabling features, controlling UI elements or managing player abilities.
                        </p>
                    </div>
                    <div className="p-2 col-lg-5 col-md-12">
                        <a href="/#/magikus/structures/toggles" className="t-dec-none vertical-center" onClick={scrollUp}>
                            <img className="block-center img-border w-80" src="images/Library/Structures/Toggles/Toggles - 03.gif" alt=""/>            
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mar-bottom-3">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <a href="/#/magikus/structures/flexors" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Flexors</h4></a>
                        <p className="pad-left-3">
                            The Flexor structures offer a flexible framework for managing multi-axis data in Unity, supporting various data types and seamlessly integrating with the Unity Editor to enhance functionality and streamline development workflows.
                        </p>
                    </div>
                    <div className="p-2 col-lg-5 col-md-12">
                        <a href="/#/magikus/structures/flexors" className="t-dec-none vertical-center" onClick={scrollUp}>
                            <img className="block-center img-border w-80" src="images/Library/Structures/Flexors/Flexors - 06.jpg" alt=""/>            
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mar-bottom-3">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <a href="/#/magikus/structures/switches" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Switches</h4></a>
                        <p className="pad-left-3">
                            The Switch structure and its variations provide a way to manage and select different value types within a single object, enhancing script maintainability and scalability by allowing state-dependent value selection directly in Unity's Inspector.
                        </p>
                    </div>
                    <div className="p-2 col-lg-5 col-md-12">
                        <a href="/#/magikus/structures/switches" className="t-dec-none vertical-center" onClick={scrollUp}>
                            <img className="block-center img-border w-80" src="images/Library/Structures/Switches/Switches - 12.jpg" alt=""/>            
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mar-bottom-3">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <a href="/#/magikus/structures/tier" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Tier</h4></a>
                        <p className="pad-left-3">
                            The Tier Structure defines numeric ranges and automates state transitions, eliminating repetitive conditional checks.
                        </p>
                    </div>
                    <div className="p-2 col-lg-5 col-md-12">
                        <a href="/#/magikus/structures/tier" className="t-dec-none vertical-center" onClick={scrollUp}>
                            <img className="block-center img-border w-80" src="images/Library/Structures/Tier/Tier - 01.gif" alt=""/>            
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mar-bottom-3">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <a href="/#/magikus/structures/clist" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Clist</h4></a>
                        <p className="pad-left-3">
                            The Clist wrapper enhances Unity's Inspector by making lists collapsible, improving usability, organization and overall data visualization.
                        </p>
                    </div>
                    <div className="p-2 col-lg-5 col-md-12">
                        <a href="/#/magikus/structures/clist" className="t-dec-none vertical-center" onClick={scrollUp}>
                            <img className="block-center img-border w-80" src="images/Library/Structures/Clist/Clist - 04.gif" alt=""/>            
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="container mar-bottom-3">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <a href="/#/magikus/structures/interef" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Interef</h4></a>
                        <p className="pad-left-3">
                            Interef is a generic Unity reference wrapper that enables safe, Inspector-friendly assignment of interface or base-class references while preserving clean, decoupled runtime code.
                        </p>
                    </div>
                    <div className="p-2 col-lg-5 col-md-12">
                        <a href="/#/magikus/structures/interef" className="t-dec-none vertical-center" onClick={scrollUp}>
                            <img className="block-center img-border w-80" src="images/Library/Structures/Interef/Interef - 05.jpg" alt=""/>            
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mar-bottom-3">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <a href="/#/magikus/structures/label" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Label</h4></a>
                        <p className="pad-left-3">
                            The Label asset is a scriptable object in Unity that provides an alternative to string identifiers, allowing developers to tag and categorize gameObjects and assets for improved management in complex projects.
                        </p>
                    </div>
                    <div className="p-2 col-lg-5 col-md-12">
                        <a href="/#/magikus/structures/label" className="t-dec-none vertical-center" onClick={scrollUp}>
                            <img className="block-center img-border w-80" src="images/Library/Structures/Labels/Labels - 02.jpg" alt=""/>            
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mar-bottom-3">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <a href="/#/magikus/structures/timescale" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Timescale</h4></a>
                        <p className="pad-left-3">
                            The Timescale asset provides a solution for managing and synchronizing time across Unity objects, allowing consistent timing, independent pausing and time effects like slow motion or fast-forwarding, enhancing cohesive gameplay experiences.
                        </p>
                    </div>
                    <div className="p-2 col-lg-5 col-md-12">
                        <a href="/#/magikus/structures/timescale" className="t-dec-none vertical-center" onClick={scrollUp}>
                            <img className="block-center img-border w-80" src="images/Library/Structures/Timescale/Timescale - 08.jpg" alt=""/>            
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mar-bottom-3">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <a href="/#/magikus/structures/SOAP" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">SOAP</h4></a>
                        <p className="pad-left-3">
                            The SOAP assets in Unity enhances modularity and efficiency by using scriptable objects to centralize event handling and data sharing, enabling decoupled communication, streamlined scene management and maintainable project architecture.
                        </p>
                    </div>
                    <div className="p-2 col-lg-5 col-md-12">
                        <a href="/#/magikus/structures/SOAP" className="t-dec-none vertical-center" onClick={scrollUp}>
                            <img className="block-center img-border w-80" src="images/Library/Structures/SOAP/SOAP - Events - 02.jpg" alt=""/>            
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mar-bottom-3">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <a href="/#/magikus/structures/cycle" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Cycles</h4></a>
                        <p className="pad-left-3">
                            The Cycle machine is a flexible tool for creating and managing time- or frame-based looping behaviors in Unity, with event handling and control features that enhance game development efficiency and gameplay.
                        </p>
                    </div>
                    <div className="p-2 col-lg-5 col-md-12">
                        <a href="/#/magikus/structures/cycle" className="t-dec-none vertical-center" onClick={scrollUp}>
                            <img className="block-center img-border w-80" src="images/Library/Structures/Cycle/Cycle - 04.jpg" alt=""/>            
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mar-bottom-3">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <a href="/#/magikus/structures/state" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">State Machine</h4></a>
                        <p className="pad-left-3">
                            The State machine is a versatile framework for managing complex state transitions in Unity, enhancing code organization, maintainability and efficiency across applications like game mechanics, UI and gameflow control.
                        </p>
                    </div>
                    <div className="p-2 col-lg-5 col-md-12">
                        <a href="/#/magikus/structures/state" className="t-dec-none vertical-center" onClick={scrollUp}>
                            <img className="block-center img-border w-80" src="images/Library/Structures/State/State - 04.jpg" alt=""/>            
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mar-bottom-3">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <a href="/#/magikus/structures/tween" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Tweens</h4></a>
                        <p className="pad-left-3">
                            Tween machines provide a powerful and flexible way to animate GameObject properties (like position, rotation, scale and color) over time in Unity, enabling developers to create smooth, professional-grade animations through scripting with minimal effort.
                        </p>
                    </div>
                    <div className="p-2 col-lg-5 col-md-12">
                        <a href="/#/magikus/structures/tween" className="t-dec-none vertical-center" onClick={scrollUp}>
                            <img className="block-center img-border w-80" src="images/Library/Structures/Tween/Tween - 06.jpg" alt=""/>            
                        </a>
                    </div>
                </div>
            </div>

{/* 
            <a href="/#/magikus/structures/grids" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Grids</h4></a>
            <p className="pad-left-3">
                The Grid structures module provides classes for creating and managing grids, streamlining tasks like pathfinding and spatial data handling in game development.
            </p>
*/}
       </div>
    );
}