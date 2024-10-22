import React from "react";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center">Button Tool</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Button attribute class is a custom attribute used in Unity to define button-related properties that can be used in the Unity Inspector.
                This attribute allows you to specify methods that can be invoked via buttons, along with optional labels, widths, and heights for these buttons.
            </h6>

            <h3 className="p-2">How it Works</h3>

            <div className="p-3">
                <h4 className="c-light-1 pad-left-2">Button Attribute</h4>
                <h5 className="c-light-1 pad-left-3">Constructors</h5>
                <ul className="property-list">
                    <li><b1>ButtonAttribute</b1>(<b2>params string[]</b2> <b1>methods</b1>): Creates a button that triggers the specified methods.</li>
                    <li><b1>ButtonAttribute</b1>(<b2>float</b2> <b1>width</b1>, <b2>params string[]</b2> <b1>methods</b1>): Creates a button with a specified width that triggers the specified methods.</li>
                    <li><b1>ButtonAttribute</b1>(<b2>float</b2> <b1>width</b1>, <b2>float</b2> <b1>height</b1>, <b2>params string[]</b2> <b1>methods</b1>): Creates a button with a specified width and height that triggers the specified methods.</li>
                </ul>
                <h5 className="c-light-1 pad-left-3">Parameters</h5>
                <ul className="property-list">
                    <li><b2>string[]</b2> <b1>methods</b1>: An array of method names that will be invoked when the button is clicked. Each string references the name of a method in the script. If the first string contains the text “label:” then what follows will display as the label of the field. If the method name is followed by a slash (/) then what follows will display as the button title instead of the method name.</li>
                    <li><b2>float</b2> <b1>width</b1>: A float value to set the width of the button as a proportion of the default width (1.0 being 100%).</li>
                    <li><b2>float</b2> <b1>height</b1>: A float value to set the height of the button.</li>
                </ul>
            </div>

            <h3 className="p-2">How to Use</h3>
            
            <h4 className="c-light-1 p-3">Example 01: Simple Button to Invoke a Method</h4>
            <ul className="property-list pad-left-4">
                <li>Create a new MonoBehaviour script named SimpleButtonExampleScript.cs</li>
                <li>Apply the Button attribute to a public field in your script</li>
                <li>Define the method that the button will invoke</li>
            </ul>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/Button/Button - 01.jpg" alt=""/>            
            <p className="pad-left-3">
                In this example, a button labeled SayHello will appear in the Unity Inspector. 
                Clicking this button will invoke the SayHello method, which logs a message to the console.
            </p>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/Button/Button - 02.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 02: Button with Custom Label and Multiple Methods</h4>
            <p className="pad-left-3">
                You can also specify multiple methods and a custom label for your button by setting the first parameter to “label:” followed by the label. 
                After that, you can add as many method names as you need. They will show next to each other.
            </p>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/Button/Button - 03.jpg" alt=""/>            
            <p className="pad-left-3">
                In this case, two buttons next to each other labeled Actions will be displayed. 
                Notice that Method Two is referenced with nameof() method. 
                This allows to avoid using string as references and prevents from possible errors.
            </p>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/Button/Button - 04.jpg" alt=""/>            
                               
            <h4 className="c-light-1 p-3">Example 03: Button with Custom Size</h4>
            <p className="pad-left-3">
                You can also adjust the width, height and title of the button by setting the first and second parameters of the 
                attribute to a width and height float value respectively and adding the title to the method name separated by a dash.
            </p>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/Button/Button - 05.jpg" alt=""/>            
            <p className="pad-left-3">
                Here, the button will be 0.5 times the default width and 2 times the default height. 
                It will also display the Click Me title in the button instead of the method name.
            </p>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/Button/Button - 06.jpg" alt=""/>            
            
            <h3 className="p-2">Notes</h3>
            <ul>
                <li>Methods can be public, private, or protected, as long as they are accessible within the context where the button is placed.</li>
                <li>If you specify a label, it will be displayed to the left of the button.</li>                
                <li>If you specify a title, it will be displayed instead of the method name.</li>
                <li>You can control the size of the buttons using the width and height parameters, making the buttons more visually distinct in the Inspector.</li>
            </ul>

            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The Button attribute class is a powerful tool to enhance the Unity Editor, making it easier to create custom buttons in the 
                Inspector that trigger various methods. This can significantly speed up your workflow by allowing you to test functionality 
                directly from the Inspector.
            </p>
       </div>
    );
}