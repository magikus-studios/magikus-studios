import React from "react";

export default function Function() {

    let scrollUp = () => { window.scrollTo({ top: 0, behavior: "smooth" }); }

    return (
        <div className="c-light-2">
            <h1 className="text-center pad-top-4">Magikus Library</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Unity Development Toolkit
            </h6>

            <h2 className="p-2">Overview</h2>
            <p className="pad-left-2">
                The Magikus Library is a versatile toolkit for Unity development that offers utilities, tools and pre-built solutions to simplify common development challenges. 
                This comprehensive toolkit is designed to streamline workflows, improve code quality and simplify complex tasks.                 
                By reducing repetitive work, the library allows developers to focus on creative aspects and game-specific logic, making game development faster and more efficient.
                Whether for large projects or small indie games, the Magikus Library offers the essential building blocks for success, boosting productivity and simplifying the development process.
            </p>

            <a href="/#/library/utilities" className="t-dec-none" onClick={scrollUp}><h3 className="c-light-1 c-light-3-h p-3">Utilities</h3></a>
            <p className="pad-left-3">
                The Utilities module offers a wide range of static and extension methods that simplify script development, allowing developers to handle common tasks efficiently while maintaining a clean and manageable codebase.
            </p>

            <a href="/#/library/structures" className="t-dec-none" onClick={scrollUp}><h3 className="c-light-1 c-light-3-h p-3">Structures</h3></a>
            <p className="pad-left-3">
                The Structures module offers essential building blocks that streamline game development by simplifying code, enhancing flexibility and promoting a modular, decoupled architecture for easier maintenance and adaptation in Unity.
            </p>

            <a href="/#/library/machines" className="t-dec-none" onClick={scrollUp}><h3 className="c-light-1 c-light-3-h p-3">Machines</h3></a>
            <p className="pad-left-3">
                The Machines module provides dynamic data structures that simplify time-based, state-driven and animated tasks, enabling developers to focus on creativity over complex implementation.    
            </p>

            <a href="/#/library/systems" className="t-dec-none" onClick={scrollUp}><h3 className="c-light-1 c-light-3-h p-3">Systems</h3></a>
            <p className="pad-left-3">
                The Systems module offers pre-built, easily integrable solutions that simplify essential game development tasks, allowing developers to focus on gameplay with minimal coding, while providing flexibility and customization directly through Unity’s editor.                
            </p>

            <a href="/#/library/decorators" className="t-dec-none" onClick={scrollUp}><h3 className="c-light-1 c-light-3-h p-3">Decorators</h3></a>
            <p className="pad-left-3">
                The Decorators module offers custom attributes and property drawers that enhance data visualization in the Unity Inspector, improving the organization, readability and interactivity of serialized fields for a more effective workflow.
            </p>

            <a href="/#/library/tools" className="t-dec-none" onClick={scrollUp}><h3 className="c-light-1 c-light-3-h p-3">Tools</h3></a>
            <p className="pad-left-3">
                The Tools module provides attributes, property drawers and editors that enhance Unity Editor workflows, increasing productivity and simplifying game design and project management tasks.
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
        </div>
    );
}