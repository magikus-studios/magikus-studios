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
                <img className="block-center mar-bottom-3 img-border w-40" src="images/Library/Tools/HierarchyEditor/Hierarchy Editor - 01.gif" alt=""/>
            </div>


            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2 pad-bottom-2">
                This tool allows users to move selected objects up or down int the hierarchy, to the top or bottom of the group, nest them inside other objects or group them efficiently.
            </p>
            <Group title="Access" content={(
                <div>
                    <p>
                        In Unity, navigate to <b1>Window {">"} Magikus {">"} Hierarchy Editor</b1> from the top menu to open the Hierarchy editor window.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Tools/HierarchyEditor/Hierarchy Editor - 05.jpg" alt=""/>
                </div>
            )}/>
            <Group title="Interface" content={(
                <div>
                    <p>
                        The tool operates on the currently selected objects in the hierarchy.
                        It dynamically updates the selection and enables/disables buttons based on the current selection context.
                        The Hierarchy editor window consists of several buttons:
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Tools/HierarchyEditor/Hierarchy Editor - 02.jpg" alt=""/>
                    <ul>
                        <li><b1>{"▲"}</b1>  : Move the selected objects to the top of their sibling list.</li>
                        <li><b1>{"↑"}</b1>  : Move the selected objects up by one position in their sibling list.</li>
                        <li><b1>{"↓"}</b1>  : Move the selected objects down by one position in their sibling list.</li>
                        <li><b1>{"▼"}</b1>  : Move the selected objects to the bottom of their sibling list.</li>
                        <li><b1>{"◄"}</b1>  : Move the selected objects out of their current parent, making them siblings of their parent.</li>
                        <li><b1>{"►"}</b1>  : Nest the selected object inside the next sibling object in the hierarchy.</li>
                        <li><b1>{"☉"}</b1> : Group the selected objects under a new empty parent object named "Group".</li>
                        <li><b1>{"●"}</b1>  : Activate all the selected GameObjects in the scene.</li>
                        <li><b1>{"○"}</b1>  : Deactivate all the selected GameObjects in the scene.</li>
                        <li><b1>{"❍"}</b1> : Toggle the state of the selected GameObjects (activating or deactivating them based on their current state).</li>
                        <li><b1>{"☀"}</b1> : Enable auto toggling. With this enabled, if you make any changes to the selection, the active state of the selected GameObjects will automatically toggle (on/off) based on their current state.</li>
                    </ul>
                </div>
            )}/>

                        
            <h3 className="p-2">Examples</h3>
            <Group title="Example 01: Reordering GameObjects in the Hierarchy" content={(
                <div>
                    <ol className="oList">
                        <li>Select multiple GameObjects in the scene hierarchy.</li>
                        <li>To move them up, click the <b1>"↑"</b1> button.</li>
                        <li>To move them down, click the <b1>"↓"</b1> button.</li>
                        <li>To move them to the top of their parent, click the <b1>"▲"</b1> button.</li>
                        <li>To move them to the bottom  of their parent, click the <b1>"▼"</b1> button.</li>
                    </ol>
                    <img className="block-center mar-vertical-3 img-border w-40" src="images/Library/Tools/HierarchyEditor/Hierarchy Editor - 02.gif" alt=""/>
                </div>
            )}/>
            <Group title="Example 02: Parenting GameObjects" content={(
                <div>
                    <ol className="oList">
                        <li>Select a GameObject in the hierarchy.</li>
                        <li>To move it inside the next sibling (as a parent), click the <b1>"►"</b1> button.</li>
                        <li>To move it outside of the parent (i.e., back to the root), click the <b1>"◄"</b1> button.</li>
                    </ol>
                    <img className="block-center mar-vertical-3 img-border w-40" src="images/Library/Tools/HierarchyEditor/Hierarchy Editor - 03.gif" alt=""/>
                </div>
            )}/>
            <Group title="Example 03: Grouping GameObjects" content={(
                <div>
                    <ol className="oList">
                        <li>Select the objects you want to group in the Unity hierarchy.</li>
                        <li>Click the <b1>"☉"</b1> button to group the selected objects under a new parent named "Group".</li>
                    </ol>
                    <img className="block-center mar-vertical-3 img-border w-40" src="images/Library/Tools/HierarchyEditor/Hierarchy Editor - 04.gif" alt=""/>
                </div>
            )}/>
            <Group title="Example 04: Activating and Deactivating GameObjects" content={(
                <div>
                    <ol className="oList">
                        <li>Select multiple GameObjects in the hierarchy.</li>
                        <li>To activate them, click the <b1>"●"</b1> button.</li>
                        <li>To deactivate them, click the <b1>"○"</b1> button.</li>
                        <li>To toggle their current active state, click the <b1>"❍"</b1> button.</li>
                    </ol>
                    <img className="block-center mar-vertical-3 img-border w-40" src="images/Library/Tools/HierarchyEditor/Hierarchy Editor - 05.gif" alt=""/>
                </div>
            )}/>
            <Group title="Example 05: Auto Toggle State on Selection Change" content={(
                <div>
                    <ol className="oList">
                        <li>Enable the AutoStateToggle by clicking the <b1>"☀"</b1> checkbox.</li>
                        <li>Whenever you change the selection, the active state of the selected GameObjects will automatically toggle based on their current state (i.e., active GameObjects will become inactive, and vice versa).</li>
                    </ol>
                    <img className="block-center mar-vertical-3 img-border w-40" src="images/Library/Tools/HierarchyEditor/Hierarchy Editor - 06.gif" alt=""/>
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