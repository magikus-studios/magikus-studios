import React from "react";

export default function Function() {

    let scrollUp = () => { window.scrollTo({ top: 0, behavior: "smooth" }); }

    return (
        <div className="c-light-2">
            <h1 className="text-center pad-top-4">Magikus</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Unity Development Toolkit
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2">
                Magikus is a versatile toolkit for Unity development that offers utilities, tools and pre-built solutions to simplify common development challenges. 
                This comprehensive toolkit is designed to streamline workflows, improve code quality and simplify complex tasks.                 
                By reducing repetitive work, the library allows developers to focus on creative aspects and game-specific logic, making game development faster and more efficient.
                Whether for large projects or small indie games, Magikus offers the essential building blocks for success, boosting productivity and simplifying the development process.
            </p>

            <a href="/#/magikus/utilities" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Utilities</h4></a>
            <p className="pad-left-3">
                The Utilities module offers a wide range of static and extension methods that simplify script development, allowing developers to handle common tasks efficiently while maintaining a clean and manageable codebase.
            </p>

            <a href="/#/magikus/decorators" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Decorators</h4></a>
            <p className="pad-left-3">
                The Decorators module offers custom attributes and property drawers that enhance data visualization in the Unity Inspector, improving the organization, readability and interactivity of serialized fields for a more effective workflow.
            </p>

            <a href="/#/magikus/structures" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Structures</h4></a>
            <p className="pad-left-3">
                The Structures module offers essential building blocks that streamline game development by simplifying code, enhancing flexibility and promoting a modular, decoupled architecture for easier maintenance and adaptation in Unity.
            </p>

            <a href="/#/magikus/machines" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Machines</h4></a>
            <p className="pad-left-3">
                The Machines module provides dynamic data structures that simplify time-based, state-driven and animated tasks, enabling developers to focus on creativity over complex implementation.    
            </p>

            <a href="/#/magikus/systems" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Systems</h4></a>
            <p className="pad-left-3">
                The Systems module offers pre-built, easily integrable solutions that simplify essential game development tasks, allowing developers to focus on gameplay with minimal coding, while providing flexibility and customization directly through Unity’s editor.                
            </p>

            <a href="/#/magikus/tools" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Tools</h4></a>
            <p className="pad-left-3">
                The Tools module provides attributes, property drawers and editors that enhance Unity Editor workflows, increasing productivity and simplifying game design and project management tasks.
            </p>
{/*
*/}
        </div>
    );
}