import React from "react";
import Group from "Components/Group";

export default function Function() {

    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Reference Console</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Editor Window designed to Manage and Track References within Unity Projects 
            </h6>
            {/*
            <div className="text-center pad-bottom-2"><prolabel>Only in Pro version</prolabel></div>
            */}

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Reference Console is a powerful tool for managing object references within Unity projects. 
                By providing a detailed view of references and quick access to missing or broken links, it aids developers in maintaining the integrity of their projects. 
                Whether you are working on a small scene or a large-scale project, this tool helps ensure that all references are correctly maintained, contributing to a more stable and efficient development workflow.
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/ReferenceConsole/Reference Console - 03.jpg" alt=""/>
            </div>


            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Reference Console can identify references between objects in the currently open scene and/or all scenes in the project and assets. 
                Additionally, it allows for quick identification of missing references, making it easier to fix issues related to lost or broken links between objects and assets.
            </p>
            <Group title="Access" content={(
                <div>
                    <p>
                        In Unity, navigate to <b1>Window {">"} Magikus {">"} Reference Console</b1> from the top menu. This will open the Reference Console window, which you can dock anywhere within the Unity Editor interface.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Tools/ReferenceConsole/Reference Console - 06.jpg" alt=""/>
                </div>
            )}/>
            <Group title="Interface" content={(
                <div>
                    <p>
                        The window provides several buttons and options to help manage references:
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/ReferenceConsole/Reference Console - 021.jpg" alt=""/>
                    <ul className="property-list">
                        <li><b1>▼</b1>: Expands all reference entries to show detailed information.</li>
                        <li><b1>►</b1>: Collapses all reference entries to show only summary information.</li>
                        <li><b1>☆/★</b1>: Shows/Hides all found references.</li>
                        <li><b1 className="c-yellow">☆/★</b1>: Shows/Hides all found missing references.</li>
                        <li><b1>↺</b1>: Manually refreshes the list of references based on the current selection and mode.</li>
                        <li><b1>Mode Selection</b1>: Allows you to select the scope of the reference search, including options for the open scene, all scenes, assets, or a combination of these.</li>
                    </ul>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/ReferenceConsole/Reference Console - 01.gif" alt=""/>
                </div>
            )}/>
            <Group title="Display Modes" content={(
                <div>
                    <p>
                        You can choose which references to display by selecting one or more of the following modes:
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/ReferenceConsole/Reference Console - 04.jpg" alt=""/>
                    <ul className="property-list">
                        <li><b1>Open Scene</b1>: Displays references within the currently open scene.</li>
                        <li><b1>Assets</b1>: Displays references within all assets in the project.</li>
                        <li><b1>All Scenes</b1>: Displays references across all scenes in the project.</li>
                        <li><b1>All</b1>: Displays references across all scenes and assets.</li>
                    </ul>
                </div>
            )}/>
            <Group title="Viewing and Managing References" content={(
                <div>
                    <h5 className="c-light-1">Finding References</h5>
                    <p>
                        To find all references first select the target objects and then click on the ↺ button.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/ReferenceConsole/Reference Console - 02.gif" alt=""/>
                    <h5 className="c-light-1">Missing References</h5>
                    <p>
                        If any missing references are found, they will be listed at the top. Each entry shows the missing object's name, type and asset name and type.
                    </p>
                    <ul className="property-list">
                        <li>Clicking the object's name or type will select and ping the object in the Inspector.</li>
                        <li>Clicking the asset's name or type of the missing reference will ping the location of the reference in the project.</li>
                    </ul>                
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/ReferenceConsole/Reference Console - 05.gif" alt=""/>
                    <h5 className="c-light-1">Reference Holders</h5>
                    <p>
                        List of objects that have references to other objects or components. Each entry shows the object name, type and the amount of references.
                        If you open the tab, a list of references to that object will appear displaying the name and type of the reference, the type of asset and the component that is targeting.
                    </p>
                    <ul className="property-list">
                        <li>Each reference entry provides detailed information about the target object and allows for selecting and pinging the reference in the Inspector.</li>
                        <li>Clicking the asset's type of the missing reference will ping the location of the reference in the project.</li>
                        <li>Clicking the object's name will select and ping the object in the Inspector.</li>
                        <li>Clicking the target's name will select and ping the targeted object in the Inspector.</li>
                    </ul>                
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/ReferenceConsole/Reference Console - 03.gif" alt=""/>
                </div>
            )}/>
            <Group title="Handling References" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/ReferenceConsole/Reference Console - 04.gif" alt=""/>
                    <ul className="property-list">
                        <li>Clicking the “✖“ button removes the object from the selection.</li>
                        <li>Clicking the “✚“ button adds the object to the selection.</li>
                    </ul>
                </div>
            )}/>


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>If a reference is missing, it could be due to an object being deleted or moved. The console helps identify these issues so they can be resolved quickly.</li>
                <li>Scanning all scenes and assets can be time-consuming, especially in large projects. Use the specific modes (Open Scene, Assets) to limit the scope of the search and improve performance.</li>
            </ul>
       </div>
    );
}