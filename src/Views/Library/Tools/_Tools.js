import React from "react";

export default function Function() {

    let scrollUp = () => { window.scrollTo({ top: 0, behavior: "smooth" }); }

    return (
        <div className="c-light-2">
            <h1 className="text-center pad-top-4">Tools</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Gadgets that boost Editor Capabilities
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2">
                The Tools module provides a robust set of attributes, property drawers and editors to enhance and optimize development within the Unity Editor. 
                These tools extend the functionality of serialized fields and offer specialized editor windows that support game design and project management tasks. 
                Each tool is built to simplify specific workflows, resulting in a more efficient and intuitive development process. 
                By utilizing these tools, developers can boost productivity and maintain a well-organized project structure.
            </p>
            
            <a href="/#/library/tools/debaseComponent" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Debase Component</h4></a>
            <p className="pad-left-3">
                A foundational script for MonoBehaviours and ScriptableObjects, the Debase component simplifies debugging, enables runtime toggling of features and streamlines development and testing for cleaner, more efficient workflows.
            </p>

            <a href="/#/library/tools/buttonAttribute" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Button Attribute</h4></a>
            <p className="pad-left-3">
                An attribute that adds customizable buttons to the Unity Inspector, enabling developers to trigger methods directly within the editor.
            </p>

            <a href="/#/library/tools/referenceValueAttribute" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Reference Value Attribute</h4></a>
            <p className="pad-left-3">
                An attribute that simplifies the management of referenced objects in Unity's Inspector, enhancing productivity in scenarios requiring frequent creation or removal of referenced value objects such as GameObjecs or ScriptableObjects.
            </p>

            <a href="/#/library/tools/keyBindingDrawer" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Key Binding Drawer</h4></a>
            <p className="pad-left-3">
                A Property Drawer that enhances editing KeyCode fields in Unity, offering intuitive key binding and reset functionality to enhance workflow and productivity.
            </p>

            <a href="/#/library/tools/hierarchyEditor" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Hierarchy Editor</h4></a>
            <p className="pad-left-3">
                An enhanced Unity Editor tool for efficiently managing and organizing the hierarchy of GameObjects in a scene.
            </p>

            <a href="/#/library/tools/curveEditor" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Curve Editor</h4></a>
            <p className="pad-left-3">
                The Curve Editor is a powerful Unity Editor that simplifies the creation and editing of animation curves, enabling developers to achieve precise and dynamic animations with an intuitive interface.
            </p>

            <a href="/#/library/tools/referenceConsole" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Reference Console</h4></a>
            <p className="pad-left-3">
                A powerful Editor Window for managing and tracking object references, ensuring integrity and efficiency in Unity projects.
            </p>

            <a href="/#/library/tools/scriptManager" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Script Manager</h4></a>
            <p className="pad-left-3">
                The Script Manager is a powerful Unity Editor that streamlines script organization and management, providing essential insights and customization options for projects.
            </p>
        </div>
    );
}