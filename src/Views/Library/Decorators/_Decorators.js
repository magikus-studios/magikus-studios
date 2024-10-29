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

            <a href="/#/library/decorators/line" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Line</h4></a>
            <p className="pad-left-3">
                The Line attribute enhances Unity Inspector layout by creating customizable dividers between fields, improving organization, readability and workflow flexibility.
            </p>

            <a href="/#/library/decorators/textBox" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Text Box</h4></a>
            <p className="pad-left-3">
                The TextBox attribute enhances the Unity Inspector by allowing developers to add informative messages (Info, Warning, Error or None) directly within the interface, improving readability, context and user guidance.
            </p>

            <a href="/#/library/decorators/title" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Title</h4></a>
            <p className="pad-left-3">
                The Title attribute enhances the Unity Inspector by adding customizable, visually appealing headers above fields, improving readability, organization and user experience.
            </p>

            <a href="/#/library/decorators/toggle" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Toggle</h4></a>
            <p className="pad-left-3">
                The Toggle attribute transforms boolean fields into customizable toggle buttons in the Unity Inspector, enhancing usability and clarity with options for custom labels, colors and label visibility.
            </p>

            <a href="/#/library/decorators/collapse" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Collapse</h4></a>
            <p className="pad-left-3">
                The Collapse decorator enhances Unity's Inspector by making complex data structures collapsible, improving usability, organization and overall data visualization.
            </p>

            <a href="/#/library/decorators/nonEditable" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Non Editable</h4></a>
            <p className="pad-left-3">
                The NonEditable attribute is a Unity Inspector tool that keeps fields read-only, ensuring data integrity by preventing unintended modifications.
            </p>

            <a href="/#/library/decorators/progressBar" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Progress Bar</h4></a>
            <p className="pad-left-3">
                The ProgressBar attribute allows for intuitive visualization of float values as progress bars in Unity's Inspector, ideal for displaying metrics like health or experience, with options for custom labels for added clarity.
            </p>
       </div>
    );
}