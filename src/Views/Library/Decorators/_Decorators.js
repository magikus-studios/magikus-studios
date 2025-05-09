import React from "react";

export default function Function() {

    let scrollUp = () => { window.scrollTo({ top: 0, behavior: "smooth" }); }

    return (
        <div className="c-light-2">
            <h1 className="text-center pad-top-4">Decorators</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Attributes that enhance Data Visualization
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2">
                The Decorators module provides a suite of custom attributes and property drawers designed to enhance data visualization in the Unity Inspector. 
                These decorators offer a range of functionalities that improve the organization, readability and interactivity of serialized fields. 
                By utilizing these decorators, developers can customize the Inspector to better suit their workflow and present data more effectively. 
            </p>

            <a href="/#/library/decorators/conditional" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Conditional</h4></a>
            <p className="pad-left-3">
                A set of attributes that dynamically control field appearance in the Unity Inspector, enhancing data visualization and streamlining workflow.
            </p>

            <a href="/#/library/decorators/line" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Line</h4></a>
            <p className="pad-left-3">
                The <b2>[Line]</b2> attribute enhances Unity Inspector layout by creating customizable dividers between fields, improving organization, readability and workflow flexibility.
            </p>

            <a href="/#/library/decorators/title" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Title</h4></a>
            <p className="pad-left-3">
                The <b2>[Title]</b2> attribute enhances the Unity Inspector by adding customizable, visually appealing headers above fields, improving readability, organization and user experience.
            </p>

            <a href="/#/library/decorators/message" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Message</h4></a>
            <p className="pad-left-3">
                The <b2>[Message]</b2> attribute enhances the Unity Inspector by allowing developers to add informative messages directly within the interface, improving readability, context and user guidance.
            </p>

            <a href="/#/library/decorators/showHide" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Show & Hide</h4></a>
            <p className="pad-left-3">
                Attributes that enable conditional visibility of fields in the Unity Inspector, helping developers create a cleaner, more intuitive interface by displaying only relevant fields based on specific conditions.
            </p>

            <a href="/#/library/decorators/block" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Block</h4></a>
            <p className="pad-left-3">
                The <b2>[Block]</b2> attribute is a Unity Inspector tool that keeps fields read-only, ensuring data integrity by preventing unintended modifications.
            </p>

            <a href="/#/library/decorators/toggle" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Toggle</h4></a>
            <p className="pad-left-3">
                The <b2>[Toggle]</b2> attribute transforms boolean fields into customizable toggle buttons in the Unity Inspector, enhancing usability and clarity.
            </p>

            <a href="/#/library/decorators/collapse" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Collapse</h4></a>
            <p className="pad-left-3">
                The Collapse decorator enhances Unity's Inspector by making complex data structures collapsible, improving usability, organization and overall data visualization.
            </p>

            <a href="/#/library/decorators/progressBar" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Progress Bar</h4></a>
            <p className="pad-left-3">
                The <b2>[ProgressBar]</b2> attribute allows for intuitive visualization of float values as progress bars in Unity's Inspector, ideal for displaying metrics like health or experience.
            </p>

            <a href="/#/library/decorators/button" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Button</h4></a>
            <p className="pad-left-3">
                An attribute that adds customizable buttons to the Unity Inspector, enabling developers to trigger methods directly within the editor.
            </p>

            <a href="/#/library/decorators/create" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Create</h4></a>
            <p className="pad-left-3">
                An attribute that simplifies the management of referenced objects in Unity's Inspector, enhancing productivity in scenarios requiring frequent creation or removal of referenced value objects such as GameObjecs or ScriptableObjects.
            </p>

            <a href="/#/library/decorators/keyBinding" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Key Binding</h4></a>
            <p className="pad-left-3">
                A property drawer that enhances editing KeyCode fields in Unity, offering intuitive key binding and reset functionality to enhance workflow and productivity.
            </p>
       </div>
    );
}