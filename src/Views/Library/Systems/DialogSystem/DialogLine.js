import React from "react";

export default function Function() {

    return (
        <div className="c-light-2">           
            <h1>Magikus Dialog System</h1>
            <h2>Dialog Line Object</h2>
            <p>
                The DialogLine class is a fundamental component of the Magikus Dialog System,
                responsible for representing a single line of dialog. It encapsulates the necessary
                properties to define the characteristics and behavior of the dialog line during gameplay.
            </p>
            <p>
                Each instance of the DialogLine class represents a specific line of dialogue that
                can be spoken by a character in the game. It serves as a container for various properties
                that determine how the line is presented and interacted with by the dialog system.
            </p>

            <h2>Properties</h2>
            <ul className="property-list">
                <li>
                    <b>Character (DialogCharacterAsset): </b>This property represents the character associated with the dialog line. It
                    determines who speaks the line, allowing for dynamic conversations between
                    different characters.
                </li>
                <li>
                    <b>Speed (float): </b>The Speed property controls the rate at which the dialog line is written on
                    the screen. It influences the framerate of the text animation, with values greater
                    than 1 increasing the speed, and values less than 1 decreasing it. Adjusting the
                    writing speed allows developers to create desired pacing and effects in the dialog
                    presentation.
                </li>
                <li>
                    <b>PauseAfterLine (float): </b>This property defines the duration of a pause before writing the
                    next line of dialog. By specifying a value greater than 0, developers can introduce
                    pauses between dialog lines, adding natural breaks or emphasizing certain
                    moments in the conversation.
                </li>
                <li>
                    <b>AddToPrevious (bool): </b>The AddToPrevious property determines whether the current
                    dialog line is appended to the previously written text or if the text is cleared before
                    writing. This feature enables developers to create incremental and continuous text
                    display, where new lines are added to the existing dialogue, or a fresh line starts
                    with a blank canvas.
                </li>
                <li>
                    <b>AutoPlayNext (bool): </b>When AutoPlayNext is enabled, the dialog system automatically
                    proceeds to the next line once the current line is fully written. This functionality
                    eliminates the need for manual advancement, streamlining the dialog experience
                    and ensuring a smooth flow of conversation.
                </li>
                <li>
                    <b>TriggerOnFinishLineEvent (bool): </b>The TriggerOnFinishLineEvent property controls
                    whether the OnFinishLine event is invoked once the dialog line is fully written. By
                    enabling this option, developers can synchronize additional actions or events to
                    occur precisely when a line of dialog is completed.
                </li>
                <li>
                    <b>Text (string): </b>The Text property holds the actual content of the dialog line. Developers can
                    input the dialogue text as a string, allowing for flexibility in conveying character
                    speech, narrative, or any form of textual communication within the game.
                </li>
            </ul>
        </div>
    );
}