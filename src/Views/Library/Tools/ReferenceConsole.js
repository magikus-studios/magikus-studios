import React from "react";
import Group from "Components/Group";

export default function Function() {

    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Reference Console</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Editor Window designed to Manage and Track References within Unity Projects 
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Reference Console is a powerful tool for managing object references within Unity projects. 
                By providing a detailed view of references and quick access to missing or broken links, it aids developers in maintaining the integrity of their projects. 
                Whether you are working on a small scene or a large-scale project, this tool helps ensure that all references are correctly maintained, contributing to a more stable and efficient development workflow.
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/ReferenceConsole/Reference Console - 01.jpg" alt=""/>
            </div>


            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Reference Console can identify references between objects in the currently open scene and/or all scenes in the project and assets. 
                Additionally, it allows for quick identification of missing references, making it easier to fix issues related to lost or broken links between objects and assets.
            </p>
            <Group title="Access" content={(
                <div>
                    <p>
                        In Unity, navigate to <b1>Magikus {">"} Reference Console</b1> from the top menu. This will open the Reference Console window, which you can dock anywhere within the Unity Editor interface.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Tools/ReferenceConsole/Reference Console - 06.jpg" alt=""/>
                </div>
            )}/>
            <Group title="Interface" content={(
                <div>
                    <p>
                        The window provides several buttons and options to help manage references:
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/ReferenceConsole/Reference Console - 02.jpg" alt=""/>
                    <ul>
                        <li><b1>Expand</b1>: Expands all reference entries to show detailed information.</li>
                        <li><b1>Collapse</b1>: Collapses all reference entries to show only summary information.</li>
                        <li><b1>Refresh</b1>: Manually refreshes the list of references based on the current selection and mode.</li>
                        <li><b1>Auto</b1>: Toggles automatic refreshing of references when the selection changes.</li>
                        <li><b1>Mode Selection</b1>: Allows you to select the scope of the reference search, including options for the open scene, all scenes, assets, or a combination of these.</li>
                    </ul>
                </div>
            )}/>
            <Group title="Display Modes" content={(
                <div>
                    <p>
                        You can choose which references to display by selecting one or more of the following modes:
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/ReferenceConsole/Reference Console - 04.jpg" alt=""/>
                    <ul>
                        <li><b1>Open Scene</b1>: Displays references within the currently open scene.</li>
                        <li><b1>Assets</b1>: Displays references within all assets in the project.</li>
                        <li><b1>All Scenes</b1>: Displays references across all scenes in the project.</li>
                        <li><b1>All</b1>: Displays references across all scenes and assets.</li>
                    </ul>
                </div>
            )}/>
            <Group title="Viewing and Managing References" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/ReferenceConsole/Reference Console - 03.jpg" alt=""/>
                    <ul>
                        <li><b1>Missing References</b1>: If any missing references are found, they will be listed at the top. Each entry shows the missing object's name, type, and asset name.
                            <ul>
                                <li><b2>Clicking the “+” button next to a missing reference will ping the location of the reference in the project.</b2></li>
                                <li><b2>Clicking the object's name or type will select and ping the object in the Inspector.</b2></li>
                            </ul>
                        </li>
                        <li><b1>Reference Holders</b1>: Lists objects that have references to other objects. Each entry shows the object name, type, and the count of references.
                            <ul>
                                <li><b2>Clicking the “–“ button removes the object from the selection.</b2></li>
                                <li><b2>Clicking the count or name expands/collapses the list of references.</b2></li>
                                <li><b2>Each reference entry provides detailed information about the target object and allows for selecting and pinging the reference in the Inspector.</b2></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            )}/>
            <Group title="Handling References" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/ReferenceConsole/Reference Console - 05.jpg" alt=""/>
                    <ul>
                        <li><b1>Add to Selection</b1>: To add an object to the selection, click the “+“ button next to a reference.</li>
                        <li><b1>Remove from Selection</b1>: To remove an object from the selection, click the “-“ button next to the reference holder.</li>
                    </ul>
                </div>
            )}/>


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>If the automatic refresh option is enabled, the reference list will update whenever the selection changes in the Unity Editor. This can be useful for dynamically tracking references but may impact performance in large projects.</li>
                <li>If a reference is missing, it could be due to an object being deleted or moved. The console helps identify these issues so they can be resolved quickly.</li>
                <li>Scanning all scenes and assets can be time-consuming, especially in large projects. Use the specific modes (Open Scene, Assets) to limit the scope of the search and improve performance.</li>
            </ul>
       </div>
    );
}