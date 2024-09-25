import React from "react";

export default function Function() {

    return (
        <div className="c-light-2">           
            <h1 className="text-center">Tween Machine</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
            </h6>

            <h3 className="p-2">How to Use</h3>

            <h4 className="c-light-1 p-3">Accessing the Curve Tool</h4>
            <p className="pad-left-3">
                To use the Curve Tool, in the Unity Editor, select a property of type AnimationCurve in the Inspector. 
                Click the "+" button next to the curve field to open the Curve Tool window.
            </p>
            <img className="block-center pad-bottom-3" src="images/Library/Tools/CurveEditor/Curve Editor - 02.jpg" alt=""/>

            <h4 className="c-light-1 p-3">Using the Curve Tool</h4>

            <h5 className="c-light-0 pad-left-3">Basic Operations</h5>
            <ul className="property-list">
                <li><b>Undo and Redo</b>: Use the "Undo" and "Redo" buttons to revert or reapply changes to the curve.</li>
                <li><b>Print Curve to Code</b>: Outputs the curve as C# code in the console.</li>
                <li><b>Copy Code to Buffer</b>: Copies the curve code to the clipboard for easy pasting.</li>
            </ul>
            <img className="block-center pad-bottom-4" src="images/Library/Tools/CurveEditor/Curve Editor - 03.jpg" alt=""/>

            <h5 className="c-light-0 pad-left-3">Curve Operations</h5>
            <ul className="property-list">
                <li><b>Setting Tangents</b>: Select the desired tangent mode from the "Tangent Mode" dropdown. Click "Set Tangents" to apply the selected tangent mode to all keyframes.</li>
                <li><b>Flip Horizontal</b>: Flips the curve horizontally.</li>
                <li><b>Inverse</b>: Inverts the curve values.</li>
                <li><b>Flip Vertical</b>: Flips the curve vertically.</li>
                <li><b>Duplicate</b>: Duplicates the curve.</li>
                <li><b>Mirror</b>: Mirrors the curve by adding its horizontal flip to itself.</li>
                <li><b>Shift Left and Shift Right</b>: Shifts the curve keys left or right.</li>
                <li><b>Adjusting Period and Amplitude</b>: Set the desired period and amplitude values. Click “Adjust Period" or "Adjust Amplitude" to apply the changes.</li>
                <li><b>Vertical Offset</b>: Enter the offset amount. Click "Up" or "Down" to adjust the curve's vertical position.</li>
            </ul>
            <img className="block-center pad-bottom-4" src="images/Library/Tools/CurveEditor/Curve Editor - 04.jpg" alt=""/>

            <h5 className="c-light-0 pad-left-3">Curve Generation</h5>
            <ul className="property-list">
                <li><b>Curve Generator</b>: Set parameters for period, amplitude, and vertical offset. Choose the curve type and edges type from the dropdown menus. Click "Set Curve" to generate a new curve. Use "Add at Start" or "Add at End" to prepend or append the generated curve to the current one.</li>
                <li><b>SetCurve</b>: Applies a new curve and stores the previous one for undo operations.</li>
                <li><b>Undo and Redo</b>: Manage the history of curve changes.</li>
                <li><b>CreateCurve</b>: Generates a new curve based on the specified parameters.</li>
                <li><b>AddCurveAtTheBegining and AddCurveAtTheEnd</b>: Add new curves at the start or end of the current curve.</li>
                <li><b>SetPeriod and SetAmplitude</b>: Adjust the period and amplitude of the curve.</li>
                <li><b>Offset</b>: Applies a vertical offset to the curve.</li>
                <li><b>HorizontalFlip, VerticalFlip, Inverse, Mirror and Duplicate</b>: Perform various transformations on the curve.</li>
                <li><b>ShiftRight and ShiftLeft</b>: Shift the curve keys.</li>
                <li><b>SetTangents</b>: Set the tangents of the curve keys.</li>
                <li><b>PrintCurve, PrintPreview, CopyCurveToBuffer, and CopyPreviewToBuffer</b>: Print and copy curve code.</li>
                <li><b>Preview Mode</b>: Toggle "Preview" to view a preview of the generated curve. Use "Print Preview" and "Copy Code" to output or copy the preview curve code.</li>
            </ul>
            <img className="block-center pad-bottom-4" src="images/Library/Tools/CurveEditor/Curve Editor - 05.jpg" alt=""/>

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