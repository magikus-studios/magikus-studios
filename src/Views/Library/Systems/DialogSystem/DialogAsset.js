import React from "react";

export default function Function() {

    return (
        <div className="c-light-2 pb-4">           
            <div className="pb-4">
                <h1>Magikus Dialog System</h1>
                <h2>Dialog Asset Scriptable Object</h2>
                <p>
                    The DialogAsset script is a custom scriptable object designed to store and manage
                    settings and lines for a dialog system. It provides a convenient way to define and organize
                    dialog content that can be used within a game or interactive application.
                    In a dialog system, dialog assets serve as containers for dialog lines, which are the
                    individual units of conversation or text that are displayed to the user. The DialogAsset
                    script allows developers to define various settings and properties that govern the behavior
                    and appearance of the dialog, such as the speed of text display, pauses between lines,
                    prefixes and suffixes for character labels and dialog lines, and font settings for the dialog
                    text.
                </p>
                <p>
                    By utilizing the DialogAsset script, developers can create and configure dialog
                    assets within the Unity Editor, allowing for easy management and customization of dialog
                    content. These assets can then be accessed and used by other components or systems
                    within the application to present dialog sequences, conversations, or narrative elements to
                    the user.
                </p>
                <p>
                    The DialogAsset script, being a scriptable object, can be easily serialized and saved
                    as an asset file in the project, making it accessible and modifiable without the need for
                    direct code changes. This allows designers, writers, or content creators to work with dialog
                    content independently, facilitating collaboration and iteration during the development
                    process.
                </p>
                <p>
                    Overall, the DialogAsset script enhances the flexibility and reusability of dialog
                    content within a game or interactive application, enabling developers to create engaging
                    and dynamic conversational experiences for players or users.
                </p>

                <h2>Properties</h2>
                <ul className="property-list">
                    <li>
                        <b>Speed (float): </b>The speed at which the entire dialog is written, affecting the overall
                        framerate. Values greater than 1 increase the framerate, while values less than 1
                        decrease it.
                    </li>
                    <li>
                        <b>PauseBetweenLines (float): </b>The duration of pauses between each line in the dialog
                        (optional). Set to 0 for no pauses.
                    </li>
                    <li>
                        <b>CharacterPrefix (string): </b>A prefix string added before each character label
                        (optional).
                    </li>
                    <li>
                        <b>CharacterSuffix (string): </b>A suffix string added after each character label (optional).
                    </li>
                    <li>
                        <b>DialogPrefix (string): </b>A prefix string added before each line of the dialog (optional).
                    </li>
                    <li>
                        <b>DialogSuffix (string): </b>A suffix string added after each line of the dialog (optional).
                    </li>
                    <li>
                        <b>OverrideCharacterLabelFont (bool): </b>If true, overrides the character asset font of
                        the character labels with the font set in this settings asset.
                    </li>
                    <li>
                        <b>OverrideDialogLabelFont (bool): </b>If true, overrides the character asset font of the
                        dialog labels with the font set in this settings asset.
                    </li>
                    <li>
                        <b>DefaultCharacterFont (Font): </b>The default text font for character labels in this
                        dialog (optional). It can be overridden by individual character fonts.
                    </li>
                    <li>
                        <b>DefaultDialogFont (Font): </b>The default text font for dialog labels in this dialog
                        (optional). It can be overridden by individual character fonts.
                    </li>
                    <li>
                        <b>TMP_DefaultCharacterFont (TMP_FontAsset): </b>The TextMeshPro font asset for
                        character labels in this dialog (optional). It can be overridden by individual
                        character fonts. This font is used if you are using TextMeshPro.
                    </li>
                    <li>
                        <b>TMP_DefaultDialogFont (TMP_FontAsset): </b>The TextMeshPro font asset for dialog
                        labels in this dialog (optional). It can be overridden by individual character fonts.
                        This font is used if you are using TextMeshPro.
                    </li>
                    <li>
                        <b>Lines (List{'<'}DialogLine{'>'}): </b>A list of lines to be written in this dialog. The lines must
                        be in the correct order for display.
                    </li>
                </ul>
           </div>
        </div>
    );
}