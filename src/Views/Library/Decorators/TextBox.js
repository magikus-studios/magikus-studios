import React from "react";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Text Box Decorator</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Custom Unity attribute used to Display Informative Text Boxes in the Unity Inspector. 
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The TextBox attribute is a powerful tool for enhancing the Unity Inspector by providing additional context and information directly within the interface. 
                It allows developers to add messages to enhance the readability and context of their fields. 
                It supports different message types (Info, Warning, Error, or None), allowing for flexible and informative text boxes that can guide and inform users. 
                This attribute is particularly useful for providing additional information or warnings directly within the Inspector interface.
                By using this attribute, developers can create a more user-friendly and informative Inspector, leading to improved workflows and a better understanding of the underlying code and data.
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/TextBox/Text Box - 04.jpg" alt=""/>              
            </div>

            <h3 className="p-2">How it Works</h3>

            <div className="p-3">
                <h4 className="c-light-1 pad-left-2">TextBox Attribute</h4>
                <p className="pad-left-3">
                    The TextBox attribute class offers several constructors to provide flexibility in specifying the message type and text content:
                </p>
                <h5 className="c-light-1 pad-left-3">Constructors</h5>
                <ul className="property-list">
                    <li><b1>TextBoxAttribute</b1>(<b2>string</b2> <b1>text</b1>)</li>                        
                    <li><b1>TextBoxAttribute</b1>(<b2>string</b2> <b1>type</b1>, <b2>string</b2> <b1>text</b1>)</li>
                    <li><b1>TextBoxAttribute</b1>(<b2>MessageType</b2> <b1>type</b1>, <b2>string</b2> <b1>text</b1>)</li>
                </ul>
                <h5 className="c-light-1 pad-left-3">Parameters</h5>
                <ul className="property-list">
                    <li><b2>string</b2> <b1>text</b1>: The text message to display in the text box.</li>
                    <li><b2>string</b2> <b1>type</b1>: A string representing the type of message ("Info", "Warning", "Error"). Default type is none.</li>            
                    <li><b2>MessageType</b2> <b1>type</b1>: A MessageType enum value (MessageType.Info, MessageType.Warning, MessageType.Error). Default type is none.</li>
                </ul>
            </div>
            
            <h3 className="p-2">How to Use</h3>

            <p className="pad-left-2">
                The TextBox attribute can be applied to any field within a MonoBehaviour or ScriptableObject class. 
                It displays a styled text box in the Unity Inspector, making it an effective way to provide context or 
                guidance to developers and users of the Inspector.
            </p>

            <h4 className="c-light-1 p-3">Example 01: Basic Text Box</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/TextBox/Text Box - 01.jpg" alt=""/>
            <p className="pad-left-3">
                In this example, the TextBox attribute is used to add an informational text box above exampleField. 
                The text box will display the message "This is a basic informational text box." without any specific message type styling.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/TextBox/Text Box - 02.jpg" alt=""/>             

            <h4 className="c-light-1 p-3">Example 02: Text Box with Info Type</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/TextBox/Text Box - 03.jpg" alt=""/>
            <p className="pad-left-3">
                Here, the TextBox attribute displays a text box with an informational message style. 
                The message "This is an informational message." will appear above exampleField with an information icon, indicating that it is an informational note.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/TextBox/Text Box - 04.jpg" alt=""/>              

            <h4 className="c-light-1 p-3">Example 03: Text Box with Warning Type</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/TextBox/Text Box - 05.jpg" alt=""/>
            <p className="pad-left-3">
                In this example, the text box is styled as a warning. 
                The message "This is a warning message." will appear above exampleField with a warning icon, signaling a warning to the user.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/TextBox/Text Box - 06.jpg" alt=""/>              
 
            <h4 className="c-light-1 p-3">Example 04: Text Box with Error Type</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/TextBox/Text Box - 07.jpg" alt=""/>
            <p className="pad-left-3">
                This example demonstrates the use of an error message. 
                The text box will display "This is an error message." above exampleField with an error icon, indicating a critical error or important issue that needs attention.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/TextBox/Text Box - 08.jpg" alt=""/>              

            <h4 className="c-light-1 p-3">Example 05: Text Box with MessageType Enum</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/TextBox/Text Box - 09.jpg" alt=""/>
            <p className="pad-left-3">
                This example shows how to use the MessageType enum to specify the type of message. 
                The text box will display "This is an informational message using MessageType enum." above exampleField with an informational style.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/TextBox/Text Box - 10.jpg" alt=""/>              

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The TextBox attribute is versatile and can be used to display various types of messages, from simple notes to critical error warnings.</li>
                <li>Ensure that the text provided to the TextBox attribute is concise and relevant to the field it accompanies to maintain clarity and readability in the Inspector.</li>
            </ul>
       </div>
    );
}