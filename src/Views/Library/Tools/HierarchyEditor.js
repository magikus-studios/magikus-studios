import React from "react";

export default function Function() {

    return (
        <div className="c-light-2">           
            <h1 className="text-center">Hierarchy Editor</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Hierarchy editor is a custom Unity editor tool designed to enhance the workflow within 
                the Unity Editor by providing additional functionalities for managing and organizing the 
                hierarchy of game objects in a scene. This tool allows users to move selected objects up, 
                down, top, bottom, nest them inside other objects, and group them efficiently.
            </h6>

            <h3 className="p-2">How to Use</h3>

            <h4 className="c-light-1 p-3">Accessing the Hierarchy editor</h4>
            <p className="pad-left-3">
                In Unity, navigate to Magikus {">"} Hierarchy editor from the top menu to open the Hierarchy editor window.
            </p>

            <h4 className="c-light-1 p-3">Using the Hierarchy editor</h4>

            <h5 className="c-light-0 pad-left-3">Interface</h5>
            <p className="pad-left-3">
                The Hierarchy editor window consists of several buttons:
            </p>
            <ul className="property-list">
                <li><b1>|--</b1>: Move the selected objects to the top of their sibling list.</li>
                <li><b1>{"<"}--</b1>: Move the selected objects up by one position in their sibling list.</li>
                <li><b1>--{">"}</b1>: Move the selected objects down by one position in their sibling list.</li>
                <li><b1>--|</b1>: Move the selected objects to the bottom of their sibling list.</li>
                <li><b1>{"<"}</b1>: Move the selected objects out of their current parent, making them siblings of their parent.</li>
                <li><b1>{">"}</b1>: Nest the selected object inside the next sibling object in the hierarchy.</li>
                <li><b1>[-]</b1>: Group the selected objects under a new empty parent object named "Group".</li>
            </ul>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/HierarchyEditor/Hierarchy Editor - 01.jpg" alt=""/>
            
            <h5 className="c-light-0 pad-left-3">Functionality</h5>
            <p className="pad-left-3">
                The tool operates on the currently selected objects in the hierarchy.
                It dynamically updates the selection and enables/disables buttons based on the current selection context.
            </p>
            
            <h5 className="c-light-0 pad-left-3">Example</h5>
            <p className="pad-left-3">
                To group several selected objects under a new parent object:
            </p>
            <ul className="property-list">
                <li>Select the objects you want to group in the Unity hierarchy.</li>
                <li>Open the Hierarchy Tools window.</li>
                <li>Click the [-] button to group the selected objects under a new parent named "Group".</li>
            </ul>

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The tool dynamically updates based on the selection, enabling and disabling buttons as necessary to ensure valid operations.</li>
                <li>The MoveIn operation only works when a single object is selected.</li>
                <li>The tool ensures that sibling index operations do not cause out-of-bound errors or invalid parent-child relationships.</li>
            </ul>

            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The Hierarchy editor enhances the Unity Editor by providing an easy-to-use interface for managing the 
                hierarchy of game objects. By using this tool, developers can save time and maintain a well-organized 
                project structure, leading to a more efficient and streamlined workflow.
            </p>
       </div>
    );
}