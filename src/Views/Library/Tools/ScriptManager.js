import React from "react";
import Group from "Components/Group";

export default function Function() {

    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Script Manager</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Unity Editor designed to enhance Script Management within Unity Projects 
            </h6>
            {/*
            <div className="text-center pad-bottom-2"><prolabel>Only in Pro version</prolabel></div>
            */}
            
            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Script Manager is a versatile and efficient tool for Unity developers, providing essential insights into script data while offering customization options for script organization.                 
                Whether you are managing a small or large project, this tool simplifies script handling and reduces manual. 
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Tools/ScriptManager/Script Manager - 01.jpg" alt=""/>            
            </div>


            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                This utility provides developers with the ability to analyze scripts in their project, calculate the total number of scripts and determine the total line count of selected scripts or the entire project. 
                Additionally, it allows users to set icons for multiple scripts at once, enhancing project organization and visibility.
                <br/>
                The Script Manager can be accessed from the Unity Editor menu and provides an intuitive interface for managing scripts.
            </p>
            <ul className="pad-bottom-2">
                <li><b1>Analyze Project Scripts</b1>: The Script Manager will automatically display the total number of scripts and lines in your project.</li>
                <li><b1>Select Scripts</b1>: Select one or multiple scripts in the Unity Project window to see their individual line counts and details.</li>
                <li><b1>Assign a custom icon to the selected scripts</b1>: Drag and drop an icon texture into the Script Manager's icon field. Click Set Icon to Selected Scripts to apply the icon.</li>
                <li><b1>Refresh Data</b1>: Use the Refresh button to manually refresh the script data if needed.</li>
                <li><b1>Toggle Auto-Refresh</b1>: Use the Auto Refresh button to enable or disable automatic project refreshes.</li>
            </ul>
            <Group title="Access the Script Manager" content={(
                <div>
                    <p>
                        Go to <b1>Magikus {">"} Script Manager</b1> in the Unity menu bar to open the tool.
                    </p>
                    <img className="block-center mar-vertical-3 img-border w-50" src="images/Library/Tools/ScriptManager/Script Manager - 07.jpg" alt=""/>            
                </div>
            )}/>


            <h3 className="p-2">Examples</h3>
            <Group title="Example 01: Viewing Script Details" content={(
                <div>
                    <ol className="oList">
                        <li>Select multiple scripts in the Project window.</li>
                        <img className="block-center mar-vertical-3 img-border w-50" src="images/Library/Tools/ScriptManager/Script Manager - 02.jpg" alt=""/>            
                        <li>The Script Manager displays their names and line counts in a scrollable list.</li>
                        <img className="block-center mar-vertical-3 img-border w-50" src="images/Library/Tools/ScriptManager/Script Manager - 03.jpg" alt=""/>            
                    </ol>
                </div>
            )}/>
            <Group title="Example 02: Setting an Icon" content={(
                <div>
                    <ol className="oList">
                        <li>Import a .png or .jpg texture into Unity.</li>
                        <li>Drag the texture into the Icon Field in the Script Manager.</li>
                        <img className="block-center mar-vertical-3 img-border w-50" src="images/Library/Tools/ScriptManager/Script Manager - 04.jpg" alt=""/>            
                        <li>Select the scripts to which the icon should be applied.</li>
                        <img className="block-center mar-vertical-3 img-border w-50" src="images/Library/Tools/ScriptManager/Script Manager - 05.jpg" alt=""/>            
                        <li>Click Set Icon to Selected Scripts.</li>
                    </ol>
                </div>
            )}/>
            <Group title="Example 03: Analyzing Total Scripts and Lines" content={(
                <div>
                    <ol className="oList">
                        <li>Open the Script Manager.</li>
                        <img className="block-center mar-vertical-3 img-border w-50" src="images/Library/Tools/ScriptManager/Script Manager - 06.jpg" alt=""/>            
                        <li>View the bottom panel to see the total number of scripts and lines in your project.</li>
                    </ol>
                </div>
            )}/>


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>Ensure that the icon texture is a valid .png or .jpg file imported into Unity.</li>
                <li>Only .cs scripts are included in the analysis. Other file types (e.g., .js, .shader) are ignored.</li>
                <li>Auto-refresh settings may impact Unity Editor performance in large projects.</li>
                <li>Assigning icons requires Unity's internal methods and might not work for every Unity version due to internal API changes.</li>
            </ul>
       </div>
    );
}