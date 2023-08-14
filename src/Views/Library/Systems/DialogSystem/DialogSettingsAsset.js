import React from "react";

export default function Function() {

    return (
        <div className="c-light-2">           
            <h1>Magikus Dialog System</h1>
            <h2>Dialog Settings Asset Scriptable Object</h2>
            <p>
                The DialogSettingsAsset class is a scriptable object that represents the settings
                for the Magikus Dialog System. It provides a centralized configuration for controlling
                various aspects of the dialog system, such as writing speed, prefixes and suffixes, pointer
                settings, text colors, and font settings. By adjusting these properties, developers can
                customize the dialog system to meet the specific requirements and visual style of their
                game's dialogues.
            </p>

            <h2>Properties</h2>
            <ul className="property-list">
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
    );
}