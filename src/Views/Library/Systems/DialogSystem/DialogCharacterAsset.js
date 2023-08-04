import React from "react";

export default function Function() {

    return (
        <div className="c-light-2 pb-4">           
            <div className="pb-4">
                <h1>Magikus Dialog System</h1>
                <h2>Sound Manager Component</h2>
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

                <h2>Properties</h2>
                <ul className="property-list">
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
        </div>
    );
}