import React from "react";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center">Line Decorator</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Line attribute is a custom Unity attribute designed to add visual line separators in the Unity Inspector. 
                It allows developers to create clear and customizable dividers between fields, making the inspector layout more organized and easier to navigate. 
                The attribute provides various customization options, including width, height, color, and offsets for top and bottom margins.
            </h6>

            <h3 className="p-2">How it Works</h3>

            <div className="p-3">
                <h4 className="c-light-1 pad-left-2">Line Attribute</h4>
                <p className="pad-left-3">
                    The Line attribute class provides several constructors to offer flexibility in line customization:
                </p>
                <h5 className="c-light-1 pad-left-3">Constructors</h5>
                <ul className="property-list">
                    <li><b1>LineAttribute</b1>(): Creates a default line with standard width, height, and color.</li>
                    <li><b1>LineAttribute</b1>(<b2>float</b2> <b1>width</b1>): Sets the width of the line.</li>
                    <li><b1>LineAttribute</b1>(<b2>float</b2> <b1>width</b1>, <b2>string</b2> <b1>colorHex</b1>): Sets the width and color of the line using a hex color code.</li>
                    <li><b1>LineAttribute</b1>(<b2>float</b2> <b1>width</b1>, <b2>float</b2> <b1>height</b1>): Sets the width and height of the line.</li>
                    <li><b1>LineAttribute</b1>(<b2>float</b2> <b1>width</b1>, <b2>float</b2> <b1>height</b1>, <b2>string</b2> <b1>colorHex</b1>): Sets the width, height, and color of the line using a hex color code.</li>
                    <li><b1>LineAttribute</b1>(<b2>float</b2> <b1>width</b1>, <b2>float</b2> <b1>height</b1>, <b2>float</b2> <b1>offset</b1>): Sets the width, height, and both top and bottom offsets.</li>
                    <li><b1>LineAttribute</b1>(<b2>float</b2> <b1>width</b1>, <b2>float</b2> <b1>height</b1>, <b2>float</b2> <b1>offset</b1>, <b2>string</b2> <b1>colorHex</b1>): Sets the width, height, both offsets, and the color using a hex color code.</li>
                    <li><b1>LineAttribute</b1>(<b2>float</b2> <b1>width</b1>, <b2>float</b2> <b1>height</b1>, <b2>float</b2> <b1>topOffset</b1>, <b2>float</b2> <b1>bottomOffset</b1>): Sets the width, height, and separate top and bottom offsets.</li>
                    <li><b1>LineAttribute</b1>(<b2>float</b2> <b1>width</b1>, <b2>float</b2> <b1>height</b1>, <b2>float</b2> <b1>topOffset</b1>, <b2>float</b2> <b1>bottomOffset</b1>, <b2>string</b2> <b1>colorHex</b1>): Sets the width, height, separate offsets, and color using a hex color code.</li>
                </ul>
                <h5 className="c-light-1 pad-left-3">Parameters</h5>
                <ul className="property-list">
                    <li><b2>float</b2> <b1>width</b1> (optional): The width of the line relative to the Inspector's total width. Default is 1f (100%).</li>
                    <li><b2>float</b2> <b1>height</b1> (optional): The height of the line in pixels. Default is 2f.</li>
                    <li><b2>float</b2> <b1>offset</b1> (optional): The space above and below the line in pixels. Default is 8f.</li>
                    <li><b2>float</b2> <b1>topOffset</b1> (optional): The space above the line in pixels. Default is 8f.</li> 
                    <li><b2>float</b2> <b1>bottomOffset</b1> (optional): The space below the line in pixels. Default is 8f.</li>
                    <li><b2>string</b2> <b1>colorHex</b1> (optional): The color of the line as a hexadecimal string. Default is a dark gray (#2A2A2A).</li>                         
                </ul>
            </div>

            <h3 className="p-2">How to Use</h3>
            <p className="pad-left-3">
                The Line attribute can be applied to any field within a MonoBehaviour or ScriptableObject class. It creates a horizontal line in the Unity Inspector that separates different sections or fields, enhancing readability and organization.
                To use the Line attribute, simply apply it above the fields you want to separate in the Unity Inspector. You can customize the line's width, height, offsets, and color.
            </p>

            <h4 className="c-light-1 p-3">Example 01: Basic Line</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Line/Line - 01.jpg" alt=""/>            
            <p className="pad-left-3">
                This example demonstrates the simplest use of the Line attribute. 
                The attribute is applied to field2, which results in a horizontal line being drawn in the Unity Inspector just below field1. 
                This line serves as a visual separator between field1 and field2, making it easier to distinguish different sections of the fields.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Line/Line - 02.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 02: Line with Custom Width, Height and Color</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Line/Line - 03.jpg" alt=""/>            
            <p className="pad-left-3">
                In this example, the Line attribute is configured to have a width of 50% of the available space in the Unity Inspector and a height of 5 units. 
                This means the line will be thick, centered and take up only half the width of the Inspector window, providing a subtle visual break between field1 and field2. 
                It also shows how to customize the color of the line by specifying the color with "F96E42", which is a hexadecimal color code for red.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Line/Line - 04.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 03: Line with Custom Offsets</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Line/Line - 05.jpg" alt=""/>            
            <p className="pad-left-3">
                In this example, the Line attribute draws a line with a height of 2 units and adds a vertical space (offset) of 10 units both above and below the line. This extra spacing helps to create a more distinct separation between field1 and field2, making it clear that the fields are part of different sections. The added space around the line can help prevent visual clutter in the Inspector.
                Also, between field2 and field3, this example demonstrates the use of different top and bottom offsets for the line. The Line attribute is set to draw a line with a height of 2 units, a top offset of 10 units, and a bottom offset of 20 units. This configuration creates a more asymmetric spacing around the line, with less space above and more space below. Such customization can be used to visually group fields in a way that makes sense for the particular layout or logic of your component's settings.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Line/Line - 06.jpg" alt=""/>            
            
            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The Line attribute is particularly useful for organizing the Unity Inspector by visually separating different sections or groups of fields.</li>
                <li>The hex color code must be 6 or 8 characters long (e.g., #RRGGBB or #RRGGBBAA).</li>
                <li>The Width parameter scales the line relative to the Inspector's width, while Height specifies the line's pixel height.</li>
                <li>Offsets allow for additional spacing above and below the line, ensuring that it doesn't crowd the surrounding fields.</li>
            </ul>

            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The Line attribute is a simple yet effective tool for enhancing the layout of the Unity Inspector. 
                By providing customizable line separators, it helps developers create clean and organized interfaces, making it easier to manage and navigate complex scripts. 
                With options for width, height, color, and offsets, the Line attribute offers flexibility to suit various design preferences and organizational needs. 
                Use it to create visually distinct sections in your Inspector and improve your workflow in Unity.
            </p>
       </div>
    );
}