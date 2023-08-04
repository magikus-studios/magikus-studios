import React from "react";

export default function Function() {

    return (
        <div className="c-light-2 pb-4">           
            <div className="pb-4">
                <h1>Magikus Dialog System</h1>
                <h2>Sound Manager Component</h2>
                <p>
                    The Dialog Manager script is a component of the Magikus Dialog System that
                    facilitates the management and display of dialogues in a game. It provides functionalities
                    for displaying dialog lines, controlling the writing speed, handling character information,
                    and invoking events during different stages of the dialog process. The Dialog Manager can
                    be added to any GameObject and customized through public and serialized properties.
                </p>
                <p>
                    The Dialog Manager component provides the capability to showcase dialog lines to
                    the user. These lines can be displayed through various UI elements, such as text labels or
                    TextMeshPro components, allowing for a visually appealing and immersive dialog
                    experience.
                </p>
                <p>
                    It also allows developers to control the speed at which the dialog text is written on
                    the screen. The writing speed can be adjusted to create desired pacing and effects,
                    ensuring dialogues are delivered at the intended rate.
                </p>
                <p>
                    With the Dialog Manager, character information can be easily managed and
                    displayed alongside dialog lines. This includes features such as character names,
                    portraits, and customized UI elements, providing a comprehensive and immersive dialog
                    experience for the user.
                </p>
                <p>
                    Throughout the dialog process, the Dialog Manager triggers events at various
                    stages, enabling developers to integrate custom logic or behaviors. Events are available
                    for when a new dialog is set, dialog writing begins, writing finishes, a line is completed, a
                    new character is introduced, a new line is started, or when the dialog is paused or
                    unpaused.
                </p>

                <h2>Properties</h2>
                <ul className="property-list">
                    <li>
                        <b>Dialog (DialogAsset): </b>Asset containing the dialog settings and lines for the dialog
                        system. It is used to define the sequence of dialogues and their properties.
                    </li>
                    <li>
                        <b>Settings (DialogSettingsAsset): </b>Asset containing the manager settings. It stores
                        various configuration options for the dialog system, such as framerate, flow
                        settings, pointer settings, and time scale. If no asset is assigned, the manager will
                        create a default settings asset at start.
                    </li>
                    <li>
                        <b>TargetPortraitLabel (Image): </b>UI Image component used to display character
                        portraits (optional).
                    </li>
                    <li>
                        <b>TargetCharacterLabel (Text): </b>UI Text component used to display the character
                        names (optional).
                    </li>
                    <li>
                        <b>TargetDialogLabel (Text): </b>UI Text component used to display the dialog lines.
                    </li>
                    <li>
                        <b>TMP_TargetCharacterLabel (TMP_Text): </b>UI TextMeshPro component used to
                        display the character names (optional).
                    </li>
                    <li>
                        <b>TMP_TargetDialogLabel (TMP_Text): </b>UI TextMeshPro component used to display
                        the dialog lines.
                    </li>
                    <li>
                        <b>Framerate (float): </b>Rate at which each step of the dialog is written. It represents the
                        number of frames per second.
                    </li>
                    <li>
                        <b>PlayOnStart (bool): </b>If true, the system will start writing the dialog when this
                        component starts.
                    </li>
                    <li>
                        <b>PlayOnDialogSet (bool): </b>If true, the system will start writing the dialog each time a
                        new dialog is set.
                    </li>
                    <li>
                        <b>RestartAfterFinish (bool): </b>If true, the dialog will reset and restart after it is finished,
                        looping back to the first line.
                    </li>
                    <li>
                     <b>Pointer (string): </b>Blinking pointer to add at the end of each line.
                    </li>
                    <li>
                        <b>UseUnscaledTime (bool): </b>Determines whether the time scale used by this dialog
                        system is affected by Time.timeScale or not. If set to true, it will use unscaled time
                        and will not be affected by changes in Time.timeScale.
                    </li>
                    <li>
                        <b>TimeScale (float): </b>The time scale used by this dialog system. It controls the speed
                        at which the dialog is written.
                    </li>
                </ul>

                <h2>Events</h2>
                <ul className="property-list">
                    <li>
                        <b>OnDialogSet (UnityEvent): </b>Event invoked when a new dialog is set on the system.
                    </li>
                    <li>
                        <b>OnDialogStart (UnityEvent): </b>Event invoked when the system starts writing a dialog.
                    </li>
                    <li>
                        <b>OnDialogFinish (UnityEvent): </b>Event invoked when the system finishes writing a dialog.
                    </li>
                    <li>
                        <b>OnLineFinish (UnityEvent): </b>Event invoked when the system finishes writing a line.
                    </li>
                    <li>
                        <b>OnCharacterSet (UnityEvent): </b>Event invoked when the system writes with a new
                        character.
                    </li>
                    <li>
                       <b>OnNewLine (UnityEvent): </b>Event invoked when the system writes a new line.
                    </li>
                    <li>
                        <b>OnPause (UnityEvent): </b>Event invoked when the system is paused.
                    </li>
                    <li>
                        <b>OnUnpause (UnityEvent): </b>Event invoked when the system is unpaused.
                    </li>
                </ul>

                <h2>Methods</h2>
                <ul className="property-list">                
                    <li>
                        <b>SetDialog (DialogAsset dialog): </b>Sets a new dialog on the system. The dialog asset
                        contains the dialog lines and settings to be applied.
                    </li>
                    <li>
                        <b>SetDialogSettings (DialogSettingsAsset settings): </b>Sets new dialog settings on the
                        system. The settings asset contains various configuration options for the dialog
                        system.
                    </li>
                    <li>
                        <b>Restart (): </b>Restarts the current dialog from the beginning.
                    </li>
                    <li>
                        <b>NextLine (): </b>Moves to the next line of the dialog, displaying it immediately if the
                        writing process is not in progress. If the writing process is ongoing, it completes
                        the current line instantly.
                    </li>
                    <li>
                        <b>Pause (): </b>Pauses the dialog system, halting the writing process.
                    </li>
                    <li>
                        <b>Unpause (): </b>Unpauses the dialog system, resuming the writing process from the
                        paused state.
                    </li>
                </ul>
           </div>
        </div>
    );
}