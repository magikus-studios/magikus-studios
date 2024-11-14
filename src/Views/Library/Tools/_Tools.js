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
            
            <a href="/#/library/tools/baseComponent" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Base Component</h4></a>
            <p className="pad-left-3">
                The Base component simplifies debugging by enabling or disabling functionality within MonoBehaviour or 
                ScriptableObject scripts in Unity. It includes properties for toggling debugging messages and disabling script 
                features during runtime. This tool enhances the flexibility and efficiency of the development and testing process 
                by allowing developers to control script behavior without modifying the underlying code.
            </p>

            <a href="/#/library/tools/buttonAttribute" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Button Attribute</h4></a>
            <p className="pad-left-3">
                The Button attribute allows developers to create button elements within the Unity Inspector.
                These buttons can be linked to methods, with options to customize labels, widths and heights. This
                feature simplifies invoking methods directly from the Inspector, making it more efficient to trigger
                actions during development. 
            </p>

            <a href="/#/library/tools/referenceValueAttribute" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Reference Value Attribute</h4></a>
            <p className="pad-left-3">
                The ReferenceValue attribute provides a convenient interface for managing ObjectReference fields
                in the Unity Inspector. It allows for the creation or removal of object references directly from the
                Inspector using customizable buttons, streamlining the management of references to assets like
                prefabs, materials or scriptable objects.
            </p>

            <a href="/#/library/tools/keyBindingDrawer" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Key Binding Drawer</h4></a>
            <p className="pad-left-3">
                The KeyBinding tool is a custom property drawer that enhances the editing experience of
                KeyCode fields in inspector windows. This tool simplifies the process of setting KeyCode values,
                making it easier and more intuitive.
            </p>

            <a href="/#/library/tools/hierarchyEditor" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Hierarchy Editor</h4></a>
            <p className="pad-left-3">
                The Hierarchy editor is designed to enhance workflow within the Unity Editor by providing additional 
                functionalities for managing and organizing the hierarchy of game objects in a scene. This tool 
                helps maintain a well-organized scene hierarchy, improving overall project management.
            </p>

            <a href="/#/library/tools/curveEditor" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Curve Editor</h4></a>
            <p className="pad-left-3">
                The Curve Editor is a powerful utility designed for the creation and manipulation of animationCurves 
                within the Unity Editor. It provides an intuitive interface for generating, editing and applying 
                various types of animation curves. This tool is invaluable for developers working with animations, 
                offering a flexible and non-destructive workflow.
            </p>

            <a href="/#/library/tools/referenceConsole" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Reference Console</h4></a>
            <p className="pad-left-3">
                The Reference Console is a custom Unity Editor Window that helps manage and track references within 
                Unity projects. This tool makes it easier to fix issues related to lost or broken links between 
                objects and assets, ensuring project integrity.
            </p>

            <a href="/#/library/tools/scriptManager" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Script Manager</h4></a>
            <p className="pad-left-3">
            </p>
        </div>
    );
}