import React from "react";
import Group from "Components/Group";

export default function Function() {

    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Curve Editor</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Tool for Editing Animation Curves within the Unity Editor 
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Curve editor provides an extensive set of features for creating and manipulating animation curves in Unity. 
                It provides an intuitive interface for generating, editing and applying various types of animation curves, making it a valuable asset for developers working with animations in Unity.
                With its user-friendly interface and robust functionality, developers can easily generate complex animation curves, apply various transformations and preview changes in real-time. 
                Whether you are working on simple animations or intricate motion graphics, the Curve Tool is an essential asset for achieving precise and dynamic animations in Unity.
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-4 img-border w-45" src="images/Library/Tools/CurveEditor/Curve Editor - 01.jpg" alt=""/>
            </div>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2 pad-bottom-2">
                This tool includes features such as setting tangents, flipping curves, mirroring, inverting, adjusting period and amplitude and previewing changes. 
                It also supports undo and redo operations, ensuring a flexible and non-destructive workflow and it supports the creation of easing curves.
            </p>
            <Group title="Access" content={(
                <div>
                    <p>
                        To use the Curve Editor, in the Unity Editor, select a property of type AnimationCurve in the Inspector. 
                        Click the "+" button next to the curve field to open the Curve Editor window.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/CurveEditor/Curve Editor - 02.jpg" alt=""/>
                </div>
            )}/>
            <Group title="Basic Operations" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Tools/CurveEditor/Curve Editor - 03.jpg" alt=""/>
                    <ul>
                        <li><b1>Undo</b1>: Use the "Undo" button to revert changes to the curve.</li>
                        <li><b1>Redo</b1>: Use the "Redo" button to reapply changes to the curve.</li>
                        <li><b1>Print Curve to Code</b1>: Outputs the curve as C# code in the console.</li>
                        <li><b1>Copy Code to Buffer</b1>: Copies the curve code to the clipboard for easy pasting.</li>
                    </ul>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Tools/CurveEditor/Curve Editor - 03.gif" alt=""/>
                </div>
            )}/>
            <Group title="Setting Tagents" content={(
                <div>
                    <ul>
                        <li><b1>Setting Tangents</b1>: Select the desired tangent mode from the "Tangent Mode" dropdown. Click "Set Tangents" to apply the selected tangent mode to all keyframes.</li>
                        <b1 className="pad-left-3 fs-sm">[Free | Auto | Linear | Constant | Clamped Auto]</b1>
                    </ul>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Tools/CurveEditor/Curve Editor - 02.gif" alt=""/>
                </div>
            )}/>
            <Group title="Curve Operations" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Tools/CurveEditor/Curve Editor - 04.jpg" alt=""/>
                    <ul>
                        <li><b1>Flip Horizontal</b1>: Flips the curve horizontally.</li>
                        <li><b1>Inverse</b1>: Inverts the curve values.</li>
                        <li><b1>Flip Vertical</b1>: Flips the curve vertically.</li>
                        <li><b1>Duplicate</b1>: Duplicates the curve.</li>
                        <li><b1>Mirror</b1>: Mirrors the curve by adding its horizontal flip to itself.</li>
                        <li><b1>Shift Left</b1>: Shifts the curve keys left.</li>
                        <li><b1>Shift Right</b1>: Shifts the curve keys right.</li>
                        <li><b1>Adjusting Period</b1>: Set the desired period value. Click “Adjust Period" to apply the changes.</li>
                        <li><b1>Adjusting Amplitude</b1>: Set the desired amplitude value. Click "Adjust Amplitude" to apply the changes.</li>
                        <li><b1>Vertical Offset</b1>: Enter the offset amount. Click "Up" or "Down" to adjust the curve's vertical position.</li>
                    </ul>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Tools/CurveEditor/Curve Editor - 01.gif" alt=""/>
                </div>
            )}/>
            <Group title="Curve Generation" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Tools/CurveEditor/Curve Editor - 05.jpg" alt=""/>
                    <ul>
                        <li><b1>Curve Type</b1>: Select the type of easing curve to generate.</li>
                        <b1 className="pad-left-3 fs-sm">[Linear | Sin | Cos | Trig | Quad | Cubic | Quart | Quint | Exponetial | Circular | Back | Elastic | Bounce ]</b1>
                        <li><b1>Edges Type</b1>: Select the type of eadges for the curve to generate.</li>
                        <b1 className="pad-left-3 fs-sm">[In | Out | Both]</b1>
                        <li><b1>Period</b1>: Adjust the period of the curve.</li>
                        <li><b1>Amplitude</b1>: Adjust amplitude of the curve.</li>
                        <li><b1>V Offset</b1>: Applies a vertical offset to the curve.</li>
                        <li><b1>Flip V</b1>: Flips the preview curve vertically.</li>
                        <li><b1>Flip H</b1>: Flips the preview curve horizontally.</li>
                        <li><b1>Inverse</b1>: Inverts the preview curve values.</li>
                        <li><b1>Mirror</b1>: Mirrors the preview curve by adding its horizontal flip to itself.</li>
                        <li><b1>Key Amount</b1>: Sets the amount of keays of the generated curve.</li>
                        <li><b1>Key Shift</b1>: Shift the curve keys to the left or right.</li>
                        <li><b1>Preview Mode</b1>: Toggle "Preview" to view a preview of the generated curve.</li>
                        <li><b1>Print Preview</b1>: Print the preview curve code to the console.</li>
                        <li><b1>Copy Code</b1>: Copy the preview curve code to the clipboard for easy pasting.</li>
                    </ul>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Tools/CurveEditor/Curve Editor - 04.gif" alt=""/>
                </div>
            )}/>
            <Group title="Setting Generated Curves" content={(
                <div>
                    <ul>
                        <li><b1>Set Curve</b1>: Sets the preview curve as the current curve.</li>
                        <li><b1>Add at Start</b1>: Add the preview curve at the start of the current curve.</li>
                        <li><b1>Add at End</b1>: Add the preview curve at the end of the current curve.</li>
                    </ul>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Tools/CurveEditor/Curve Editor - 05.gif" alt=""/>
                </div>
            )}/>


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>If the curve is reset or a new one is selected, the tool will initialize with the new curve and clear the history.</li>
                <li>The period must be greater than 0.1 and the amplitude must be non-negative to ensure valid curve transformations.</li>
            </ul>
       </div>
    );
}