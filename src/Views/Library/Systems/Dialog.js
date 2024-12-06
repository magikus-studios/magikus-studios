import React from "react";
import Group from "Components/Group";

export default function Function() {

    return (
        <div className="c-light-2">           
            <h1 className="text-center">Dialog System</h1>
            <p>
                The Magikus Dialog System is a powerful tool that enables you to easily create and
                integrate dialogues into your game. With this system, you can craft dialogues line by line,
                add pauses, customize settings for different characters (such as font style, text color,
                images, and writing speed), and utilize prefix and suffix text. The system also supports a
                blinking pointer at the end of each line. Designed to be user-friendly and robust, it saves
                you valuable time by eliminating the need for custom implementation. Moreover, you can
                conveniently create your own dialogs directly through the Unity editor without requiring any
                coding.
            </p>

            <h2>How it Works</h2>
            <p>
                The Magikus Dialog System comprises three primary components: the Dialog
                Manager, the Dialog Asset, and the Character Asset. The Dialog Asset, implemented as a
                scriptable object, contains a list of dialog lines in sequential order. It also encompasses
                various dialog settings, including speed, default fonts, pauses, prefixes, and suffixes. Each
                line in the dialog asset contains specific information and settings, such as the character
                delivering the line, writing speed, pauses between lines, and more. The Character Asset
                holds information about each character involved in the dialog, such as their name,
                preferred text colors, fonts, portrait images, and overall writing speed. These character
                assets can be reused across different dialogs. The Dialog Manager, attached to a game
                object, provides control and management of the Dialog Asset, facilitating playback and
                manipulation of dialog text. It offers extensive customization options for dialog
                management, such as framerate control, the use of pointers, timescale manipulation, and
                events for custom actions. Additionally, the system incorporates a Dialog Settings Asset
                that allows global control over settings such as speed, prefixes, suffixes, pointer usage,
                speed and duration, text color, and font settings.
            </p>

            <h2>Components</h2>

            <Group title="Sound Manager Component" content={(
                <div className="p-3">
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

                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list pad-left-3">
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

                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list pad-left-3">
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

                    <h5 className="c-light-1 pad-left-3">Events</h5>
                    <ul className="property-list pad-left-3">
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

                </div>
            )}/>
            <Group title="Dialog Asset Scriptable Object" content={(
                <div className="p-3">
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

                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list pad-left-3">
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
            )}/>
            <Group title="Dialog Line Object" content={(
                <div className="p-3">
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

                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list pad-left-3">
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
            )}/>
            <Group title="Dialog Character Object" content={(
                <div className="p-3">
                    <p>
                        The DialogCharacterAsset class is a scriptable object that represents a character
                        in the Magikus Dialog System. It provides a centralized and customizable container for
                        defining the properties and attributes of a character within the dialog system.
                    </p>
                    <p>
                        By utilizing the DialogCharacterAsset class, developers can easily create and
                        manage character assets within the Magikus Dialog System. These assets enable
                        customization of various properties such as writing speed, name, portrait, colors, and
                        fonts, providing a comprehensive and flexible framework for defining unique characters
                        and their dialogues in the game.
                    </p>

                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list pad-left-3">
                        <li>
                            <b>Speed (float): </b>The Speed property determines the rate at which this character's text
                            is written, influencing the overall framerate of the dialog system. Adjusting this
                            value allows developers to control the speed at which the character's dialogue is
                            displayed, with values greater than 1 increasing the speed and values less than 1
                            decreasing it.
                        </li>
                        <li>
                            <b>Name (string): </b>The Name property represents the name of the character. If
                            provided, the name will be displayed on the character label, allowing for easy
                            identification of the speaking character during dialogues.
                        </li>
                        <li>
                            <b>Portrait (Sprite): </b>The Portrait property stores the portrait image of the character.
                            This optional image can be associated with the character to provide visual
                            representation or visual cues during dialogues.
                        </li>
                        <li>
                            <b>CharacterColor (Color): </b>The CharacterColor property defines the text color of the
                            character label. By customizing this property, developers can assign a specific
                            color to the character's name or label, adding visual distinction or personalization
                            to the character's dialogues.
                        </li>
                        <li>
                            <b>DialogColor (Color): </b>The DialogColor property determines the text color of the
                            dialog label associated with the character. Customizing this property allows
                            developers to differentiate the character's dialogue text from other elements in the
                            dialog system, enhancing readability and visual coherence.
                        </li>
                        <li>
                            <b>CharacterFont (Font): </b>The CharacterFont property specifies the text font used for
                            the character label. By assigning a font to this property, developers can tailor the
                            visual style of the character's name or label to match the desired aesthetic or
                            character traits.
                        </li>
                        <li>
                            <b>DialogFont (Font): </b>The DialogFont property defines the text font used for the dialog
                            label associated with the character. Customizing this property allows developers to
                            establish a specific visual style for the character's dialogue text, ensuring
                            consistency and thematic cohesion.
                        </li>
                        <li>
                            <b>TMP_CharacterFont (TMP_FontAsset): </b>The TMP_CharacterFont property
                            represents the TextMeshPro font asset used for the character label. If
                            TextMeshPro is utilized in the project, assigning a font asset to this property
                            ensures that the character's name or label is displayed using the designated
                            TextMeshPro font.
                        </li>
                        <li>
                            <b>TMP_DialogFont (TMP_FontAsset): </b>The TMP_DialogFont property represents the
                            TextMeshPro font asset used for the dialog label associated with the character. If
                            TextMeshPro is employed in the project, assigning a font asset to this property
                            ensures that the character's dialogue text is displayed using the designated
                            TextMeshPro font.
                        </li>
                    </ul>
                </div>
            )}/>
            <Group title="Dialog Settings Asset Scriptable Object" content={(
                <div className="p-3">
                    <p>
                        The DialogSettingsAsset class is a scriptable object that represents the settings
                        for the Magikus Dialog System. It provides a centralized configuration for controlling
                        various aspects of the dialog system, such as writing speed, prefixes and suffixes, pointer
                        settings, text colors, and font settings. By adjusting these properties, developers can
                        customize the dialog system to meet the specific requirements and visual style of their
                        game's dialogues.
                    </p>

                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list pad-left-3">
                        <li>
                            <b>Speed (float): </b>The Speed property determines the overall writing speed of the
                            dialog system. It influences the framerate at which the text is displayed. Values
                            greater than 1 increase the speed, while values less than 1 decrease it.
                        </li>
                        <li>
                            <b>LettersPerStep (int): </b>The LettersPerStep property specifies the number of letters
                            written by the system in each step. It controls the granularity of the writing process.
                            This value cannot be less than 1.
                        </li>
                        <li>
                            <b>FramerateCurve (AnimationCurve): </b>The FramerateCurve property represents a
                            curve that determines the framerate based on the progression of each line. It can
                            be used to create smoothing effects or customize the pacing of the dialog. By
                            default, it is set to a constant curve.
                        </li>
                        <li>
                            <b>CharacterPrefix (string): </b>The CharacterPrefix property adds a prefix string before
                            each character label. This optional string can be used to introduce additional
                            information or formatting to the character's name.
                        </li>
                        <li>
                            <b>CharacterSuffix (string): </b>The CharacterSuffix property adds a suffix string after
                            each character label. This optional string can be used to append additional
                            information or formatting to the character's name.
                        </li>
                        <li>
                            <b>DialogPrefix (string): </b>The DialogPrefix property adds a prefix string before each
                            written line of dialog. This optional string can be used to introduce additional
                            information or formatting to the dialog text.
                        </li>
                        <li>
                            <b>DialogSuffix (string): </b>The DialogSuffix property adds a suffix string after each
                            written line of dialog. This optional string can be used to append additional
                            information or formatting to the dialog text.
                        </li>
                        <li>
                            <b>SetDialogSuffixOnFinishLine (bool): </b>The SetDialogSuffixOnFinishLine property
                            determines whether the dialog suffix should be added only when the system has
                            finished writing the line. If enabled, the dialog suffix will be displayed after the
                            entire line is written.
                        </li>
                        <li>
                            <b>UsePointer (bool): </b>The UsePointer property determines whether a blinking pointer
                            should be added at the end of each line. When enabled, a visual cue in the form of a
                            blinking pointer will be displayed after each line of dialog.
                        </li>
                        <li>
                            <b>PointerBlinkSpeed (float): </b>The PointerBlinkSpeed property controls the rate at
                            which the pointer blinks. It specifies the speed of the blinking animation.
                        </li>
                        <li>
                            <b>PointerOnDuration (float): </b>The PointerOnDuration property determines the amount
                            of time the pointer remains visible during each blink cycle.
                        </li>
                        <li>
                            <b>PointerOffDuration (float): </b>The PointerOffDuration property determines the amount
                            of time the pointer remains hidden during each blink cycle.
                        </li>
                        <li>
                            <b>SetColorToCharacterLabel (bool): </b>The SetColorToCharacterLabel property
                            determines whether the color of the character labels should be set to the color of
                            each character. If enabled, the character labels will inherit the respective
                            character's color.
                        </li>
                        <li>
                            <b>SetColorToDialogLabel (bool): </b>The SetColorToDialogLabel property determines
                            whether the color of the dialog labels should be set to the color of each character.
                            If enabled, the dialog labels will inherit the respective character's color.
                        </li>
                        <li>
                            <b>OverrideCharacterLabelFont (bool): </b>The OverrideCharacterLabelFont property
                            determines whether the font of the character labels should be overridden with the
                            font set in this settings asset. If enabled, the default font specified in this asset will
                            be used for character labels, overriding any individual character's font settings.
                        </li>
                        <li>
                            <b>OverrideDialogLabelFont (bool): </b>The OverrideDialogLabelFont property determines
                            whether the font of the dialog labels should be overridden with the font set in this
                            settings asset. If enabled, the default font specified in this asset will be used for
                            dialog labels, overriding any individual character's font settings.
                        </li>
                        <li>
                            <b>DefaultCharacterFont (Font): </b>The DefaultCharacterFont property represents the
                            default text font used for character labels. If a character or the dialog has its own
                            character font, it will override this default font.
                        </li>
                        <li>
                            <b>DefaultDialogFont (Font): </b>The DefaultDialogFont property represents the default
                            text font used for dialog labels. If a character or the dialog has its own dialog font,
                            it will override this default font.
                        </li>
                        <li>
                            <b>TMP_DefaultCharacterFont (TMP_FontAsset): </b>The TMP_DefaultCharacterFont
                            property represents the TextMeshPro font asset used for character labels. If
                            TextMeshPro is used in the project and a character or the dialog has its own
                            character font, it will override this default TextMeshPro font.
                        </li>
                        <li>
                            <b>TMP_DefaultDialogFont (TMP_FontAsset): </b>The TMP_DefaultDialogFont property
                            represents the TextMeshPro font asset used for dialog labels. If TextMeshPro is
                            used in the project and a character or the dialog has its own dialog font, it will
                            override this default TextMeshPro font.
                        </li>
                    </ul>

                </div>
            )}/>

            <h2>How to Use</h2>
            <p>
                To add the <b>Dialog Manager Component</b> to a GameObject, follow these steps:
            </p>
            <ol>
                <li>
                    Select the GameObject to which you want to add the Manager component.
                </li>
                <li>
                    Open the Components menu.
                </li>
                <li>
                    Navigate to Magikus {'->'} Dialog Manager.
                </li>
                <li>
                    Click on the desired option to add the corresponding Manager component to the
                    selected GameObject.
                </li>
            </ol>

            <p>
                To create a new <b>Dialog Asset</b>, follow these steps:
            </p>
            <ol>
                <li>
                    Right-click on the desired folder in the Project window (where you want to create
                    the asset).
                </li>
                <li>
                    From the context menu, go to Create {'->'} Magikus {'->'} Dialog System {'->'} Dialog Asset.
                </li>
                <li>
                    A new Dialog Asset will be created in the selected folder, ready for
                    customization and configuration.
                </li>
            </ol>

            <p>
                To create a new <b>Dialog Character Asset</b>, follow these steps:
            </p>
            <ol>
                <li>
                    Right-click on the desired folder in the Project window (where you want to create
                    the asset).
                </li>
                <li>
                    From the context menu, go to Create {'->'} Magikus {'->'} Dialog System {'->'} Character Asset
                    Asset.
                </li>
                <li>
                    A new Dialog Character Asset will be created in the selected folder, ready for
                    customization and configuration.
                </li>
            </ol>

            <p>
                To create a new <b>Dialog Settings Asset</b>, follow these steps:
            </p>
            <ol>
                <li>
                    Right-click on the desired folder in the Project window (where you want to create
                    the asset).
                </li>
                <li>
                    From the context menu, go to Create {'->'} Magikus {'->'} Dialog System {'->'} Dialog Settings Asset.
                </li>
                <li>
                    A new Dialog Settings Asset will be created in the selected folder, ready for
                    customization and configuration.
                </li>
            </ol>

            <p>
                These steps allow you to conveniently access the Dialog Manager component and create
                new Dialogs, Characters and Dialog Settings Assets within the Unity editor.
            </p>
        </div>
    );
}