import React from "react";
import CodeSnippet from "Components/CodeSnippet";

export default function Function() {

    return (
        <div className="c-light-2 pb-4">           
            <div className="pb-4">
                <h1>Magikus Button Tool</h1>
                <p>
                    Magikus Button Tool is a powerful tool designed to enhance the Unity inspector
                    editor by allowing developers to easily introduce buttons directly into the inspector
                    interface. These buttons can trigger specific actions or function calls, providing a
                    convenient way to interact with scripts and components. This documentation will guide
                    you through the usage and features of the Magikus Button tool.
                </p>

                <h2>Installation</h2>
                <p>
                    To use the Magikus Button Tool in your Unity project, follow these steps:
                </p>
                <ol>
                    <li>
                        Download the Magikus Button Tool package from the official website or the Unity
                        Asset Store.
                    </li>
                    <li>
                        Import the package into your Unity project by going to <b>Assets {'->'} Import Package {'->'}
                            Custom Package</b> and selecting the downloaded package file.
                    </li>
                    <li>
                        Make sure the Magikus Button Tool package is successfully imported and visible in
                        your project's assets.
                    </li>
                </ol>

                <h2>Usage</h2>
                <p>
                    To use Magikus Button Tool in your scripts, follow these guidelines:
                </p>
                <ol>
                    <li>
                        Make sure you have the <b>using Magikus;</b> statement at the top of your script to
                        access the Magikus namespace.
                    </li>
                    <li>
                        Place the <b>[Button]</b> attribute before any property in your script that you want to turn
                        into a button.
                    </li>
                    <li>
                        Provide the name of the method to be called when the button is pressed as a
                        parameter within the <b>[Button]</b> attribute.
                    </li>
                </ol>
                <p>
                    Example:
                </p>
                <CodeSnippet lines={[
                    { line: "using Magikus;" },
                    { line: "" },
                    { line: "public class MyScript : MonoBehaviour" },
                    { line: "{" },
                    { line: "" },
                    { line: '[Button("MethodName")]' },
                    { line: "public bool myButton;" },
                    { line: "" },
                    { line: "private void MethodName()" },
                    { line: "{" },
                    { line: "// Code to execute when the button is pressed" },
                    { line: "}" },
                    { line: "" },
                    { line: "}" },
                ]} />

                <h2>Customization</h2>
                <p>
                    Magikus Button Tool offers various customization options to tailor the appearance
                    and behavior of the buttons. Here are some additional attributes that can be used in
                    combination with the <b>[Button]</b> attribute:
                </p>
                <ul>
                    <li>
                        <b>Title:</b>
                        Specify a custom title for the button by appending it to the method name
                        separated by a slash (/).
                        <CodeSnippet lines={[
                            { line: '[Button("MethodName/Custom Title")]' },
                            { line: "public bool myButton;" },
                        ]} />
                    </li>
                    <li>
                        <b>Label:</b>
                        Add a label before the button by setting the first string parameter of the
                        <b>[Button]</b> attribute to <b>"label:LabelName"</b>, replacing <b>LabelName</b> with the desired label
                        text.
                        <CodeSnippet lines={[
                            { line: '[Button("label:MyLabel","MethodName")]' },
                            { line: "public bool myButton;" },
                        ]} />
                    </li>
                    <li>
                        <b>Size:</b>
                        Adjust the size of the button by providing width and height parameters as
                        floats, representing the relative size compared to the inspector.
                        <CodeSnippet lines={[
                            { line: '[Button(0.5f, 1.25f,"MethodName")]' },
                            { line: "public bool myButton;" },
                        ]} />
                    </li>
                    <li>
                        <b>Multiple Buttons:</b>
                        Add multiple buttons or a single label within a single line by separating them with commas.
                        <CodeSnippet lines={[
                            { line: '[Button("label:MyLabel","MethodName1","MethodName2")]' },
                            { line: "public bool myButton;" },
                        ]} />
                    </li>
                </ul>

                <h2>Notes</h2>
                <ul>
                    <li>
                        Magikus Button Tool is designed to work seamlessly with any properties within
                        your scripts. While the button functionality is typically associated with bool types, it
                        is important to note that the Magikus Button Tool can be used with properties of
                        any type.
                    </li>
                    <li>
                        Please note that only one label is allowed, and it must be specified as the first
                        string parameter. Additional parameters should correspond to separate method
                        names, each representing a distinct button.
                    </li>
                    <li>
                        Make sure to adjust the method names, labels, and property names according to
                        your specific implementation needs.
                    </li>
                    <li>
                        Magikus Button Tool seamlessly functions in both Edit Mode and Play Mode. This
                        ensures that your buttons remain active and responsive throughout your game
                        development process.
                    </li>
                </ul>

                <p>
                    That concludes the documentation for the Magikus Button Tool. Feel free to
                    experiment with the customization options and integrate buttons into your Unity project for
                    enhanced interactivity and workflow efficiency.
                </p>
            </div>
        </div>
    );
}