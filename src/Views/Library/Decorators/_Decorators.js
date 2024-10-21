import React from "react";

export default function Function() {

    return (
        <div className="c-light-2">
            <h1 className="text-center">Decorators</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Magikus Library provides a suite of custom decorators designed to enhance and streamline
                the Unity Inspector experience. These decorators offer a range of functionalities that improve the
                organization, readability and interactivity of serialized fields. By utilizing these decorators,
                developers can customize the Inspector to better suit their workflow and present data more
                effectively. 
            </h6>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                Decorators in the Magikus Library are custom Unity attributes that extend the capabilities of the
                Unity Inspector. They are designed to address common needs and challenges faced by developers,
                such as visual organization, interactive elements and conditional visibility. Each decorator provides
                specific enhancements, making it easier to manage and interact with component properties in
                Unity. 
            </p>

            <h3 className="p-2">Summary</h3>

            <h4 className="c-light-1 p-3">Button</h4>
            <p className="pad-left-3">
                The Button attribute allows developers to create button elements within the Unity Inspector.
                These buttons can be linked to methods, with options to customize labels, widths and heights. This
                feature simplifies invoking methods directly from the Inspector, making it more efficient to trigger
                actions during development. 
            </p>

            <h4 className="c-light-1 p-3">Line</h4>
            <p className="pad-left-3">
                The Line attribute adds visual line separators to the Unity Inspector. It provides options to
                customize the line's width, height, color and offsets for top and bottom margins. This helps in
                creating clear visual dividers between fields, which enhances the layout and readability of the
                Inspector. 
            </p>

            <h4 className="c-light-1 p-3">Text Box</h4>
            <p className="pad-left-3">
                The TextBox attribute enables the display of informative text boxes in the Unity Inspector. It
                supports various message types, including Info, Warning, Error or None. This decorator is useful 
                for adding contextual information or warnings to fields, improving the clarity and guidance
                provided in the Inspector. 
            </p>

            <h4 className="c-light-1 p-3">Title</h4>
            <p className="pad-left-3">
                The Title attribute allows developers to display a stylized title above fields in the Unity Inspector. It
                provides customization options for the title's text, font size, alignment, style, color and vertical
                offset. This attribute is ideal for grouping and labeling sections, thereby enhancing the
                organization and readability of component properties. 
            </p>

            <h4 className="c-light-1 p-3">Toggle</h4>
            <p className="pad-left-3">
                The Toggle attribute converts boolean (bool) fields in the Unity Inspector into toggle buttons. This
                decorator improves usability by providing a clear visual representation of boolean values, making
                it easier to interact with options or features directly from the Inspector. 
            </p>

            <h4 className="c-light-1 p-3">Show If</h4>
            <p className="pad-left-3">
                The ShowIf attribute provides conditional visibility for fields in the Unity Inspector. It allows fields
                to be displayed based on the value of another property, which helps in decluttering the Inspector
                and making it more intuitive by showing only relevant fields under specific conditions.
            </p>

            <h4 className="c-light-1 p-3">Collapsable</h4>
            <p className="pad-left-3">
                The Collapsable attribute makes classes and structs collapsible in the Unity Inspector. This
                functionality enhances the organization and readability of complex data structures by allowing
                developers to expand and collapse fields as needed, thus reducing clutter.
            </p>

            <h4 className="c-light-1 p-3">Non Editable</h4>
            <p className="pad-left-3">
                The NonEditable attribute makes fields read-only in the Unity Inspector. This is useful for
                displaying data without allowing modifications directly from the Inspector, ensuring data integrity
                and preventing accidental changes.
            </p>

            <h4 className="c-light-1 p-3">Progress Bar</h4>
            <p className="pad-left-3">
                The ProgressBar attribute displays a float field as a progress bar in the Unity Inspector. It is
                particularly useful for visualizing percentage-based values such as health, experience or progress
                metrics in a user-friendly and intuitive manner.
            </p>

            <h4 className="c-light-1 p-3">Reference Value</h4>
            <p className="pad-left-3">
                The ReferenceValue attribute provides a convenient interface for managing ObjectReference fields
                in the Unity Inspector. It allows for the creation or removal of object references directly from the
                Inspector using customizable buttons, streamlining the management of references to assets like
                prefabs, materials or scriptable objects.
            </p>

            <h4 className="c-light-1 p-3">Collapsable List</h4>
            <p className="pad-left-3">
                The ListC{"<"}T{">"} class is a custom collection that extends Unity's built-in List{"<"}T{">"}. It offers a serialized,
                editable list with a flexible interface for managing items directly within the Unity Editor. Users can
                expand and collapse the list, improving navigation and management of large data collections.
            </p>

            <h4 className="c-light-1 p-3">Key Binding</h4>
            <p className="pad-left-3">
                The KeyBinding Decorator is a custom property drawer that enhances the editing experience of
                KeyCode fields in inspector windows. This tool simplifies the process of setting KeyCode values,
                making it easier and more intuitive.
            </p>
       </div>
    );
}