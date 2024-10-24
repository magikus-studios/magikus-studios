import React from "react";

export default function Function() {

    return (
        <div className="c-light-2">           
            <h1 className="text-center">Curve Editor</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Curve Tool is a powerful utility designed to facilitate the creation and manipulation of 
                animation curves within the Unity Editor. It provides an intuitive interface for generating, 
                editing, and applying various types of animation curves, making it a valuable asset for 
                developers working with animations in Unity.
                This tool includes features such as setting tangents, flipping curves, mirroring, inverting, 
                adjusting period and amplitude and previewing changes. The Curve Tool also supports undo and 
                redo operations, ensuring a flexible and non-destructive workflow.
            </h6>

            <img className="block-center mar-bottom-4 img-border w-45" src="images/Library/Tools/CurveEditor/Curve Editor - 01.jpg" alt=""/>

            <h3 className="p-2">How to Use</h3>

            <h4 className="c-light-1 p-3">Accessing the Curve Tool</h4>
            <p className="pad-left-3">
                To use the Curve Tool, in the Unity Editor, select a property of type AnimationCurve in the Inspector. 
                Click the "+" button next to the curve field to open the Curve Tool window.
            </p>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/CurveEditor/Curve Editor - 02.jpg" alt=""/>

            <h4 className="c-light-1 p-3">Using the Curve Tool</h4>

            <h5 className="c-light-0 pad-left-3">Basic Operations</h5>
            <ul className="property-list">
                <li><b1>Undo and Redo</b1>: Use the "Undo" and "Redo" buttons to revert or reapply changes to the curve.</li>
                <li><b1>Print Curve to Code</b1>: Outputs the curve as C# code in the console.</li>
                <li><b1>Copy Code to Buffer</b1>: Copies the curve code to the clipboard for easy pasting.</li>
            </ul>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/CurveEditor/Curve Editor - 03.jpg" alt=""/>

            <h5 className="c-light-0 pad-left-3">Curve Operations</h5>
            <ul className="property-list">
                <li><b1>Setting Tangents</b1>: Select the desired tangent mode from the "Tangent Mode" dropdown. Click "Set Tangents" to apply the selected tangent mode to all keyframes.</li>
                <li><b1>Flip Horizontal</b1>: Flips the curve horizontally.</li>
                <li><b1>Inverse</b1>: Inverts the curve values.</li>
                <li><b1>Flip Vertical</b1>: Flips the curve vertically.</li>
                <li><b1>Duplicate</b1>: Duplicates the curve.</li>
                <li><b1>Mirror</b1>: Mirrors the curve by adding its horizontal flip to itself.</li>
                <li><b1>Shift Left and Shift Right</b1>: Shifts the curve keys left or right.</li>
                <li><b1>Adjusting Period and Amplitude</b1>: Set the desired period and amplitude values. Click “Adjust Period" or "Adjust Amplitude" to apply the changes.</li>
                <li><b1>Vertical Offset</b1>: Enter the offset amount. Click "Up" or "Down" to adjust the curve's vertical position.</li>
            </ul>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/CurveEditor/Curve Editor - 04.jpg" alt=""/>

            <h5 className="c-light-0 pad-left-3">Curve Generation</h5>
            <ul className="property-list">
                <li><b1>Curve Generator</b1>: Set parameters for period, amplitude, and vertical offset. Choose the curve type and edges type from the dropdown menus. Click "Set Curve" to generate a new curve. Use "Add at Start" or "Add at End" to prepend or append the generated curve to the current one.</li>
                <li><b1>SetCurve</b1>: Applies a new curve and stores the previous one for undo operations.</li>
                <li><b1>Undo and Redo</b1>: Manage the history of curve changes.</li>
                <li><b1>CreateCurve</b1>: Generates a new curve based on the specified parameters.</li>
                <li><b1>AddCurveAtTheBegining and AddCurveAtTheEnd</b1>: Add new curves at the start or end of the current curve.</li>
                <li><b1>SetPeriod and SetAmplitude</b1>: Adjust the period and amplitude of the curve.</li>
                <li><b1>Offset</b1>: Applies a vertical offset to the curve.</li>
                <li><b1>HorizontalFlip, VerticalFlip, Inverse, Mirror and Duplicate</b1>: Perform various transformations on the curve.</li>
                <li><b1>ShiftRight and ShiftLeft</b1>: Shift the curve keys.</li>
                <li><b1>SetTangents</b1>: Set the tangents of the curve keys.</li>
                <li><b1>PrintCurve, PrintPreview, CopyCurveToBuffer, and CopyPreviewToBuffer</b1>: Print and copy curve code.</li>
                <li><b1>Preview Mode</b1>: Toggle "Preview" to view a preview of the generated curve. Use "Print Preview" and "Copy Code" to output or copy the preview curve code.</li>
            </ul>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/CurveEditor/Curve Editor - 05.jpg" alt=""/>

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>If the curve is reset or a new one is selected, the tool will initialize with the new curve and clear the history.</li>
                <li>The period must be greater than 0.1 and the amplitude must be non-negative to ensure valid curve transformations.</li>
            </ul>

            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The Curve Tool provides an extensive set of features for creating and manipulating animation curves in Unity. 
                With its user-friendly interface and robust functionality, developers can easily generate complex animation curves, 
                apply various transformations and preview changes in real-time. Whether you are working on simple animations or 
                intricate motion graphics, the Curve Tool is an essential asset for achieving precise and dynamic animations in Unity.
            </p>
       </div>
    );
}