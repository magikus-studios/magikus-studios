import React from "react";
import Group from "Components/Group";

export default function Function() {

    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Hierarchy Editor</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Unity Editor for Managing and Organizing the Hierarchy of GameObjects in a Scene 
            </h6>
            {/*
            <div className="text-center pad-bottom-2"><prolabel>Only in Pro version</prolabel></div>
            */}

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Hierarchy editor enhances the Unity Editor by providing an easy-to-use interface for managing the hierarchy of GameObjects.  
                By using this tool, developers can save time and maintain a well-organized project structure, leading to a more efficient and streamlined workflow.
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Tools/HierarchyEditor/Hierarchy Editor - 01.jpg" alt=""/>
            </div>


            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2 pad-bottom-2">
                This tool allows users to move selected objects up or down int the hierarchy, to the top or bottom of the group, nest them inside other objects or group them efficiently.
            </p>
            <Group title="Access" content={(
                <div>
                    <p>
                        In Unity, navigate to <b1>Magikus {">"} Hierarchy Editor</b1> from the top menu to open the Hierarchy editor window.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Tools/HierarchyEditor/Hierarchy Editor - 05.jpg" alt=""/>
                </div>
            )}/>
            <Group title="Interface" content={(
                <div>
                    <p>
                        The tool operates on the currently selected objects in the hierarchy.
                        It dynamically updates the selection and enables/disables buttons based on the current selection context.
                        The Hierarchy editor window consists of several buttons:
                    </p>
                    <ul>
                        <li><b1>|--</b1>: Move the selected objects to the top of their sibling list.</li>
                        <li><b1>{"<"}--</b1>: Move the selected objects up by one position in their sibling list.</li>
                        <li><b1>--{">"}</b1>: Move the selected objects down by one position in their sibling list.</li>
                        <li><b1>--|</b1>: Move the selected objects to the bottom of their sibling list.</li>
                        <li><b1>{"<"}</b1>: Move the selected objects out of their current parent, making them siblings of their parent.</li>
                        <li><b1>{">"}</b1>: Nest the selected object inside the next sibling object in the hierarchy.</li>
                        <li><b1>[-]</b1>: Group the selected objects under a new empty parent object named "Group".</li>
                    </ul>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/HierarchyEditor/Hierarchy Editor - 02.jpg" alt=""/>
                </div>
            )}/>

                        
            <h3 className="p-2">Examples</h3>
            <Group title="Example 01: Grouping GameObjects" content={(
                <div>
                    <p>
                        To group several selected objects under a new parent object:
                    </p>
                    <ol className="oList">
                        <li>Open the Hierarchy Editor window.</li>
                        <li>Select the objects you want to group in the Unity hierarchy.</li>
                        <img className="block-center mar-vertical-3 img-border w-50" src="images/Library/Tools/HierarchyEditor/Hierarchy Editor - 03.jpg" alt=""/>
                        <li>Click the <b1>[-]</b1> button to group the selected objects under a new parent named "Group".</li>
                        <img className="block-center mar-vertical-3 img-border w-50" src="images/Library/Tools/HierarchyEditor/Hierarchy Editor - 04.jpg" alt=""/>
                    </ol>
                </div>
            )}/>

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The tool dynamically updates based on the selection, enabling and disabling buttons as necessary to ensure valid operations.</li>
                <li>The MoveIn operation only works when a single object is selected.</li>
                <li>The tool ensures that sibling index operations do not cause out-of-bound errors or invalid parent-child relationships.</li>
            </ul>
       </div>
    );
}