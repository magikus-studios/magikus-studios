import React from "react";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Key Binding Drawer</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Property Drawer that enhance the Editing Experience of KeyCode Fields
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The KeyBinding tool simplifies the process of setting KeyCode values in the Unity Editor, offering an intuitive and user-friendly interface. 
                By providing direct key binding and reset functionality, this tool enhances productivity and improves the workflow for developers working with key bindings in Unity.
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border" src="images/Library/Tools/KeyBindingDrawer/Key Binding Drawer - 03.jpg" alt=""/>            
            </div>
        

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2 pad-bottom-2">
                This tool allows developers to bind keyboard keys directly by pressing them, making it easier to set KeyCode values. 
                Additionally, it provides a reset button to quickly revert to the default key binding.
            </p>
            
            <h3 className="p-2">How to Use</h3>

            <h4 className="c-light-1 p-3">Implementation</h4>
            <p className="pad-left-3">
                To use the KeyBinding drawer, ensure your script includes the KeyCode property you want to modify. 
                The custom property drawer will automatically apply to all KeyCode fields in your scripts.
            </p>

            <h4 className="c-light-1 p-3">Interface</h4>
            <p className="pad-left-3">
                The KeyBinding tool provides an enhanced UI for KeyCode fields, including:
            </p>
            <ul>
                <li><b1>KeyCode Field</b1>: Displays the currently bound key code.</li>
                <li><b1>Bind Button</b1>: When clicked, the tool enters listening mode, allowing the next key press to be bound to the property.</li>
                <li><b1>Listening Mode</b1>: Indicates the tool is ready to bind a key from the keyboard.</li>
                <li><b1>Reset Button</b1>: Resets the key code to its default value (None).</li>
            </ul>

            <h4 className="c-light-1 p-3">Example</h4>
            <p className="pad-left-3">
                Add a KeyCode property to your script 
            </p>
            <ol className="oList pad-left-5">
                <li>Attach the next script to a GameObject in your scene.</li>
                <img className="block-center mar-vertical-3 img-border" src="images/Library/Tools/KeyBindingDrawer/Key Binding Drawer - 01.jpg" alt=""/>            
                <li>Select the GameObject and view the KeyCode property in the Inspector.</li>
                <li>Locate the KeyCode property in the Inspector. You will see the enhanced UI with the Key Code Field, Bind Button, and Reset Button.</li>
                <img className="block-center mar-vertical-3 img-border" src="images/Library/Tools/KeyBindingDrawer/Key Binding Drawer - 02.jpg" alt=""/>            
                <li>Click the Bind Button to enter listening mode. The button will change to Listening. Press the desired key on your keyboard. The key code will update to the pressed key.</li>
                <li>If you click the Listening Button again or press a mouse button, listening mode will cancel without binding a key.</li>
                <li>Click the Reset Button to revert the key code to its default value (None).</li>
            </ol>
             
            <h3 className="p-2">Notes</h3>
            <ul>
                <li>While in listening mode, any key press will be captured and bound to the KeyCode property. Be mindful of unintended key presses.</li>                
                <li>The KeyBinding tool automatically applies to all KeyCode properties in the project. Ensure the custom drawer is compatible with your Unity version.</li>                
                <li>The Reset button sets the key code to None, representing no key bound.</li>                
            </ul>
       </div>
    );
}