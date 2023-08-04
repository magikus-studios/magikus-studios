import React from "react";

export default function Function() {

    return (
        <div className="c-light-2 pb-4">           
            <div className="pb-4">
                <h1>Magikus Sprite Animation System</h1>
                <p>
                    The Magikus Sprite Animation System is a powerful system of components and
                    assets designed to facilitate the creation of sprite animations for SpriteRenderer and UI
                    Image components.
                </p>

                <h2>Installation</h2>
                <p>
                    To use Magikus Sprite Animation System in your Unity project, follow these steps:
                </p>
                <ol>
                    <li>
                        Download the Magikus Sprite Animation System package from the official website or the
                        Unity Asset Store.
                    </li>
                    <li>
                        Import the package into your Unity project by going to <b>Assets {'->'} Import Package {'->'}
                            Custom Package</b> and selecting the downloaded package file.
                    </li>
                    <li>
                        Make sure the Magikus Sprite Animation System package is successfully imported and visible
                        in your project's assets.
                    </li>
                </ol>

                <h2>How it Works</h2>
                <p>
                    The Magikus Sprite Animation System consists of two main parts: the Sprite
                    Animator and the Sprite Animation Asset. The Sprite Animation Asset is a scriptable object
                    that contains all the necessary information about an animation, including the frames,
                    order, frame rate, and other options. The Sprite Animator, on the other hand, is a
                    component attached to a game object that controls and manages the Sprite Animation
                    Asset, enabling the playback and manipulation of the animation. It provides a wide range
                    of settings to customize the animation behavior.
                </p>
                <p>
                    It's worth noting that if you want to create animations using a UI Image instead of a
                    Sprite Renderer, you can use the ImageSpriteAnimator component, which targets an Image
                    component instead of a SpriteRenderer.
                </p>

                <h2>How to Use</h2>
                <p>
                    To add the <b>Animator Component</b> to a GameObject, follow these steps:
                </p>
                <ol>
                    <li>
                        Select the GameObject to which you want to add the Animator component.
                    </li>
                    <li>
                        Open the Components menu.
                    </li>
                    <li>
                        Navigate to Magikus {'->'} Animation System {'->'} Sprite Animator or Image Sprite Animator.
                    </li>
                    <li>
                        Click on the desired option to add the corresponding Animator component to the
                        selected GameObject.
                    </li>
                </ol>

                <p>
                    To create a new <b>Sprite Animation Asset</b>, follow these steps:
                </p>
                <ol>
                    <li>
                        Right-click on the desired folder in the Project window (where you want to create
                        the asset).
                    </li>
                    <li>
                        From the context menu, go to Create {'->'} Magikus {'->'} Sprite Animation Asset
                    </li>
                    <li>
                        A new Sprite Animation Asset will be created in the selected folder, ready for
                        customization and configuration.
                    </li>
                </ol>

                <p>
                    These steps allow you to conveniently access the Animator components and create new
                    Sprite Animation Assets within the Unity editor.
                </p>
            </div>
        </div>
    );
}