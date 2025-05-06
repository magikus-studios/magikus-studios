import React from "react";
import Group from "Components/Group";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Button Attribute</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Attribute that defines Buttons for the Unity Inspector
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The <b2>[Button]</b2> attribute is a powerful tool to enhance the Unity Editor, making it posible to create custom buttons in the Inspector that trigger various methods. 
                This can significantly speed up your workflow by allowing you to test functionality directly from the Inspector.
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Tools/ButtonAttribute/Button Attribute - 07.jpg" alt=""/>            
            </div>


            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2 pad-bottom-2">
                This attribute allows you to specify methods that can be invoked via buttons, along with optional labels, widths and heights for these buttons.
            </p>
            <Group title="Button Attribute" content={(
                <div>
                    <p>
                        Creates a button with a specified width and height that triggers the specified methods
                    </p>
                    <h5 className="c-light-1">Constructors</h5>
                    <ul className="property-list">
                        <li><b1>Button</b1>(<b2>params string[]</b2> <b1>methods</b1>)</li>
                        <li><b1>Button</b1>(<b2>float</b2> <b1>width</b1>, <b2>params string[]</b2> <b1>methods</b1>)</li>
                        <li><b1>Button</b1>(<b2>float</b2> <b1>width</b1>, <b2>float</b2> <b1>height</b1>, <b2>params string[]</b2> <b1>methods</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li>
                            <b2>string[]</b2> <b1>methods</b1>: An array of method names that will be invoked when the button is clicked. 
                            Each string references the name of a method in the script. 
                            If the first string contains the text “label:” then what follows will display as the label of the field. 
                            If the method name is followed by a slash (/) then what follows will display as the button title instead of the method name.
                            If the string contains "(play)" either on the method name or on the title then that button will be enabled only in play mode.
                            If the string contains "(editor)" either on the method name or on the title then that button will be enabled only in editor mode.
                        </li>
                        <li><b2>float</b2> <b1>width</b1>: A float value to set the width of the button as a proportion of the default width (1.0 being 100%).</li>
                        <li><b2>float</b2> <b1>height</b1>: A float value to set the height of the button.</li>
                    </ul>
                </div>
            )}/>


            <h3 className="p-2">Examples</h3>
            <Group title="Example 01: Simple Button to Invoke a Method" content={(
                <div>
                    <ul>
                        <li>Create a new MonoBehaviour script named SimpleButtonExampleScript.cs</li>
                        <li>Apply the <b2>[Button]</b2> attribute to a public field in your script</li>
                        <li>Define the method that the button will invoke</li>
                    </ul>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/ButtonAttribute/Button Attribute - 01.jpg" alt=""/>            
                    <p>
                        In this example, a button labeled SayHello will appear in the Unity Inspector. 
                        Clicking this button will invoke the SayHello method, which logs a message to the console.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-40" src="images/Library/Tools/ButtonAttribute/Button Attribute - 01.gif" alt=""/>            
                </div>
            )}/>
            <Group title="Example 02: Button with Custom Label and Multiple Methods" content={(
                <div>
                    <p>
                    You can also specify multiple methods and a custom label for your button by setting the first parameter to “label:” followed by the label. 
                        After that, you can add as many method names as you need. They will show next to each other.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/ButtonAttribute/Button Attribute - 03.jpg" alt=""/>            
                    <p>
                        In this case, two buttons next to each other labeled Actions will be displayed. 
                        Notice that Method Two is referenced with nameof() method. 
                        This allows to avoid using string as references and prevents from possible errors.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-40" src="images/Library/Tools/ButtonAttribute/Button Attribute - 02.gif" alt=""/>            
                </div>
            )}/>
            <Group title="Example 03: Button with Custom Size" content={(
                <div>
                    <p>
                        You can also adjust the width, height and title of the button by setting the first and second parameters of the 
                        attribute to a width and height float value respectively and adding the title to the method name separated by a dash.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/ButtonAttribute/Button Attribute - 05.jpg" alt=""/>            
                    <p>
                        Here, the button will be 0.5 times the default width and 2 times the default height. 
                        It will also display the Click Me title in the button instead of the method name.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-40" src="images/Library/Tools/ButtonAttribute/Button Attribute - 03.gif" alt=""/>            
                </div>
            )}/>
            <Group title="Example 04: Enabling and Disabling Buttons in Play Mode" content={(
                <div>
                    <p>
                        This example demonstrates how to configure a single Inspector button to trigger different methods based on Unity's current mode. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/ButtonAttribute/Button Attribute - 08.jpg" alt=""/>            
                    <p>
                        It defines actions for both Play Mode and Editor Mode, allowing SimpleButton, PlayModeAction or EditorModeAction to be called depending on the context.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-40" src="images/Library/Tools/ButtonAttribute/Button Attribute - 04.gif" alt=""/>            
                </div>
            )}/>           
            
            <h3 className="p-2">Notes</h3>
            <ul>
                <li>Methods can be public, private or protected, as long as they are accessible within the context where the button is placed.</li>
                <li>If you specify a label, it will be displayed to the left of the button.</li>                
                <li>If you specify a title, it will be displayed instead of the method name.</li>
                <li>You can control the size of the buttons using the width and height parameters, making the buttons more visually distinct in the Inspector.</li>
            </ul>
       </div>
    );
}