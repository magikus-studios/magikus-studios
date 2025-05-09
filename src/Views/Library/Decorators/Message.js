import React from "react";
import Group from "Components/Group";

export default function Function() {

    let scrollUp = () => { window.scrollTo({ top: 0, behavior: "smooth" }); }

    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Message Attribute</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Attribute used to Display Informative Text Boxes in the Unity Inspector
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The <b2>[Message]</b2> attribute is a powerful tool for enhancing the Unity Inspector by providing additional context and information directly within the interface. 
                It allows developers to add messages to enhance the readability and context of their fields. 
                This attribute is particularly useful for providing additional information or warnings directly within the Inspector interface.
                By using this attribute, developers can create a more user-friendly and informative Inspector, leading to improved workflows and a better understanding of the underlying code and data.
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Message/Message - 04.jpg" alt=""/>              
            </div>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2 pad-bottom-2">
                The <b2>[Message]</b2> attribute supports different message types (Info, Warning, Error, or None), allowing for flexible and informative text boxes that can guide and inform users.
                Aditionally, it is fully integrated with the Conditional attributes for conditional behaviour (<a href="/#/library/decorators/conditional" className="t-dec-none c-light-0 c-light-4-h" onClick={scrollUp}>See Conditional Decorator</a>).
            </p>
            <Group title="Message Attribute" content={(
                <div>
                    <p>
                        The Message attribute class offers several constructors to provide flexibility in specifying the message type and text content. 
                        This class will display a message under the current field.
                    </p>
                    <h5 className="c-light-1">Constructors</h5>
                    <ul className="property-list">
                        <li><b1>Message</b1>(<b2>string</b2> <b1>text</b1>, <b2>bool</b2> <b1>ignoreCondition = false</b1>)</li>                        
                        <li><b1>Message</b1>(<b2>string</b2> <b1>type</b1>, <b2>string</b2> <b1>text</b1>, <b2>bool</b2> <b1>ignoreCondition = false</b1>)</li>
                        <li><b1>Message</b1>(<b2>MessageType</b2> <b1>type</b1>, <b2>string</b2> <b1>text</b1>, <b2>bool</b2> <b1>ignoreCondition = false</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>text</b1>: The text message to display in the text box.</li>
                        <li><b2>string</b2> <b1>type</b1>: A string representing the type of message ("Info", "Warning", "Error"). Default type is none.</li>            
                        <li><b2>MessageType</b2> <b1>type</b1>: A MessageType enum value (MessageType.Info, MessageType.Warning, MessageType.Error). Default type is none.</li>
                        <li><b2>bool</b2> <b1>ignoreCondition</b1>: If true, this attribute will ignore any conditional attribute that this field could have.</li>
                    </ul>
                </div>
            )}/>
            <Group title="Message Over Attribute" content={(
                <div>
                    <p>
                        The MessageOver attribute class offers several constructors to provide flexibility in specifying the message type and text content.
                        This class will display a message over the current field.
                    </p>
                    <h5 className="c-light-1">Constructors</h5>
                    <ul className="property-list">
                        <li><b1>MessageOver</b1>(<b2>string</b2> <b1>text</b1>, <b2>bool</b2> <b1>ignoreCondition = false</b1>)</li>                        
                        <li><b1>MessageOver</b1>(<b2>string</b2> <b1>type</b1>, <b2>string</b2> <b1>text</b1>, <b2>bool</b2> <b1>ignoreCondition = false</b1>)</li>
                        <li><b1>MessageOver</b1>(<b2>MessageType</b2> <b1>type</b1>, <b2>string</b2> <b1>text</b1>, <b2>bool</b2> <b1>ignoreCondition = false</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>text</b1>: The text message to display in the text box.</li>
                        <li><b2>string</b2> <b1>type</b1>: A string representing the type of message ("Info", "Warning", "Error"). Default type is none.</li>            
                        <li><b2>MessageType</b2> <b1>type</b1>: A MessageType enum value (MessageType.Info, MessageType.Warning, MessageType.Error). Default type is none.</li>
                        <li><b2>bool</b2> <b1>ignoreCondition</b1>: If true, this attribute will ignore any conditional attribute that this field could have.</li>
                    </ul>
                </div>
            )}/>
            

            <h3 className="p-2">Examples</h3>
            <p className="pad-left-2">
                The <b2>[Message]</b2> attribute can be applied to any field within a MonoBehaviour or ScriptableObject class. 
                It displays a styled text box in the Unity Inspector, making it an effective way to provide context or guidance to developers and users of the Inspector.
            </p>
            <Group title="Example 01: Basic Message" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Message/Message - 01.jpg" alt=""/>
                    <p>
                        In this example, the Message attribute is used to add an informational text box under exampleField. 
                        The text box will display the message "This is a basic informational text box." without any specific message type styling.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Message/Message - 02.jpg" alt=""/>             
                </div>
            )}/>
            <Group title="Example 02: MessageOver with Info Type" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Message/Message - 03.jpg" alt=""/>
                    <p>
                        Here, the <b2>[MessageOver]</b2> attribute displays a text box with an informational message style. 
                        The message "This is an informational message." will appear above exampleField with an information icon, indicating that it is an informational note.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Message/Message - 04.jpg" alt=""/>              
                </div>
            )}/>
            <Group title="Example 03: Warning Message with Condition" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Message/Message - 05.jpg" alt=""/>
                    <p>
                        In this example, the text box is styled as a warning. 
                        The message "This is a warning message." will appear under exampleField with a warning icon, signaling a warning to the user, whenever the value is equal to 0.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Message/Message - 01.gif" alt=""/>              
                </div>
            )}/>
            <Group title="Example 04: Message with Error Type" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Message/Message - 07.jpg" alt=""/>
                    <p>
                        This example demonstrates the use of an error message. 
                        The text box will display "This is an error message." under exampleField with an error icon, indicating a critical error or important issue that needs attention.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Message/Message - 08.jpg" alt=""/>              
                </div>
            )}/>
            <Group title="Example 05: Message with MessageType Enum" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Message/Message - 09.jpg" alt=""/>
                    <p>
                        This example shows how to use the MessageType enum to specify the type of message. 
                        The text box will display "This is an informational message using MessageType enum." under exampleField with an informational style.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Message/Message - 10.jpg" alt=""/>              
                </div>
            )}/>


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The <b2>[Message]</b2> attribute is versatile and can be used to display various types of messages, from simple notes to critical error warnings.</li>
                <li>Ensure that the text provided to the <b2>[Message]</b2> attribute is concise and relevant to the field it accompanies to maintain clarity and readability in the Inspector.</li>
                <li>The <b2>[Message]</b2> attribute supports Conditional decorators for conditional behaviours.</li>
                <li>Make sure to use the <b2>[Message]</b2> attribute to display a message under the field and the <b2>[MessageOver]</b2> attribute to display a message over the field.</li>
            </ul>
       </div>
    );
}