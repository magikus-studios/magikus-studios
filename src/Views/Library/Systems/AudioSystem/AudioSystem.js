import React from "react";

export default function Function() {

    return (
        <div className="c-light-2 pb-4">           
            <div className="pb-4">
                <h1>Magikus Audio System</h1>
                <p>
                    The Magikus Audio System is a robust collection of components and assets
                    designed to elevate audio manipulation in your projects. It offers extensive functionality
                    for managing background music and sound effects with flexibility and efficiency. With a
                    focus on ease of use, the system provides a visual interface that eliminates the need for
                    coding, while still offering high levels of customization through scripts.
                </p>

                <h2>Installation</h2>
                <p>
                    To use Magikus Audio System in your Unity project, follow these steps:
                </p>
                <ol>
                    <li>
                        Download the Magikus Audio System package from the official website or the
                        Unity Asset Store.
                    </li>
                    <li>
                        Import the package into your Unity project by going to <b>Assets {'->'} Import Package {'->'}
                            Custom Package</b> and selecting the downloaded package file.
                    </li>
                    <li>
                        Make sure the Magikus Audio System package is successfully imported and visible
                        in your project's assets.
                    </li>
                </ol>

                <h2>How it Works</h2>
                <p>
                    The Magikus Audio System consists of two primary components: the Sound
                    Manager and the Sound Library Asset. The Sound Asset, implemented as a scriptable
                    object, contains a playlist of sounds and all the essential information for each sound,
                    including volume levels, pitch levels, and various options. The Sound Manager, a
                    component attached to a game object, controls and manages the Sound Library Asset,
                    enabling sound playback and manipulation. It offers a wide range of settings to customize
                    sound management. Additionally, the system incorporates a Sound Master Asset for
                    controlling volume and pitch levels globally, along with a Label system to conveniently
                    reference sounds without relying on indices or string names.
                </p>

                <h2>How to Use</h2>
                <p>
                    To add the <b>Sound Manager Component</b> to a GameObject, follow these steps:
                </p>
                <ol>
                    <li>
                        Select the GameObject to which you want to add the Manager component.
                    </li>
                    <li>
                        Open the Components menu.
                    </li>
                    <li>
                        Navigate to Magikus {'->'} Sound Manager.
                    </li>
                    <li>
                        Click on the desired option to add the corresponding Manager component to the
                        selected GameObject.
                    </li>
                </ol>

                <p>
                    To create a new <b>Sound Library Asset</b>, follow these steps:
                </p>
                <ol>
                    <li>
                        Right-click on the desired folder in the Project window (where you want to create
                        the asset).
                    </li>
                    <li>
                        From the context menu, go to Create {'->'} Magikus {'->'} Audio System {'->'} Sound Library
                        Asset.
                    </li>
                    <li>
                        A new Sound Library Asset will be created in the selected folder, ready for
                        customization and configuration.
                    </li>
                </ol>

                <p>
                    To create a new <b>Sound Master Asset</b>, follow these steps:
                </p>
                <ol>
                    <li>
                        Right-click on the desired folder in the Project window (where you want to create
                        the asset).
                    </li>
                    <li>
                        From the context menu, go to Create {'->'} Magikus {'->'} Audio System {'->'} Sound Master
                        Asset.
                    </li>
                    <li>
                        A new Sound Master Asset will be created in the selected folder, ready for
                        customization and configuration.
                    </li>
                </ol>

                <p>
                    To create a new <b>Sound Label Asset</b>, follow these steps:
                </p>
                <ol>
                    <li>
                        Right-click on the desired folder in the Project window (where you want to create
                        the asset).
                    </li>
                    <li>
                        From the context menu, go to Create {'->'} Magikus {'->'} Audio System {'->'} Sound Label
                        Asset.
                    </li>
                    <li>
                        A new Sound Label Asset will be created in the selected folder, ready for
                        customization and configuration.
                    </li>
                </ol>

                <p>
                    These steps allow you to conveniently access the Sound Manager component and create
                    new Sound Library, Sound Master and Sound Label Assets within the Unity editor.
                </p>
            </div>
        </div>
    );
}