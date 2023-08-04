import React from "react";

export default function Function() {

    return (
        <div className="c-light-2 pb-4">           
            <div className="pb-4">
                <h1>Magikus Dialog System</h1>
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

                <h2>Installation</h2>
                <p>
                    To use Magikus Dialog System in your Unity project, follow these steps:
                </p>
                <ol>
                    <li>
                        Download the Magikus Dialog System package from the official website or the
                        Unity Asset Store.
                    </li>
                    <li>
                        Import the package into your Unity project by going to <b>Assets {'->'} Import Package {'->'}
                            Custom Package</b> and selecting the downloaded package file.
                    </li>
                    <li>
                        Make sure the Magikus Dialog System package is successfully imported and visible
                        in your project's assets.
                    </li>
                </ol>

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
        </div>
    );
}