import React from "react";

export default function Function() {

    return (
        <div className="c-light-2">           
            <h1>Magikus Tweak System</h1>
            <p>
                The Magikus Tweak System introduces a dynamic and efficient approach to
                seamlessly integrate tweaks into your GameObjects. This powerful tool empowers
                developers to effortlessly create and customize position, rotation, and scale alterations
                without the need for extensive scripting. Furthermore, the system extends its support to
                Color Tweaks for SpriteRenderers and Images, along with the ability to implement Tweak
                Sequencing, creating a comprehensive solution for diverse tweaking requirements.
            </p>
            <p>
                Through this system, you gain the flexibility to define various tweak parameters,
                such as speed, intensity, flow settings, noise generation for randomized effects, and
                distinct modes. Additionally, the framework embraces the concept of transition curves,
                allowing you to shape custom easing effects and precisely control the timing of changes
                during tweaks. These comprehensive settings enable you to craft smooth and seamless
                transitions, tailoring the behavior of your GameObjects to match your specific creative
                vision.
            </p>
            <p>
                To enhance the precision and customization possibilities, every setting can be
                selectively overridden on a per-axis basis. This fine-grained control empowers developers
                to achieve highly intricate and nuanced axis-specific transitions, ensuring a seamless fit
                for various project requirements.
            </p>
            <p>
                Designed with a user-friendly and robust interface, the Magikus Tweak System
                significantly streamlines development workflows by eliminating the need for cumbersome
                custom implementations. Whether you're a seasoned developer or a newcomer, this
                system proves to be a time-saving asset, liberating you to focus on refining the artistic and
                functional aspects of your project. With the Magikus Tweak System at your disposal, you
                can effortlessly breathe life into your GameObjects with captivating and engaging dynamic
                behavior.
            </p>

            <h2>Installation</h2>
            <p>
                To use Magikus Tweak System in your Unity project, follow these steps:
            </p>
            <ol>
                <li>
                    Download the Magikus Tweak System package from the official website or the
                    Unity Asset Store.
                </li>
                <li>
                    Import the package into your Unity project by going to <b>Assets {'->'} Import Package {'->'}
                        Custom Package</b> and selecting the downloaded package file.
                </li>
                <li>
                    Make sure the Magikus Tweak System package is successfully imported and visible
                    in your project's assets.
                </li>
            </ol>

            <h2>How it Works</h2>
            <p>
                The Magikus Tweak System operates cohesively through two essential
                components: the Tweak Manager and the Tweak Asset. These components work in
                tandem to empower developers with comprehensive control over GameObject tweaking,
                all while maintaining an efficient and user-friendly workflow.
            </p>
            <p>
                <b>Tweak Asset: </b>At the core of the system, the Tweak Asset is implemented as a scriptable
                object, serving as the container for all the customizable settings required for a specific
                tweak. Every Tweak Asset encompasses essential parameters such as looping behavior,
                speed, and intensity. There are five distinct types of Tweak Assets, each catering to
                tweaking different aspects of GameObjects:
                <ul>
                    <li>
                        <b>Position Tweak Asset: </b>This asset focuses on altering the position of GameObjects.
                        It allows developers to define tweaks that gradually move GameObjects along
                        specified trajectories with customizable intensity and looping options.
                    </li>
                    <li>
                        <b>Rotation Tweak Asset: </b>As the name suggests, this asset enables precise rotation
                        tweaks. It grants the ability to smoothly modify the orientation of GameObjects,
                        creating dynamic animations or controlled rotations.
                    </li>
                    <li>
                        <b>Scale Tweak Asset: </b>This asset is dedicated to scaling tweaks. Developers can use
                        it to manipulate the size and proportions of GameObjects, providing flexibility in
                        animating objects of various scales.
                    </li>
                    <li>
                        <b>Color Tweak Asset: </b>The Color Tweak Asset is designed specifically for
                        SpriteRenderers and Images. It allows for captivating color alterations, breathing
                        life into visuals with smooth transitions.
                    </li>
                    <li>
                        <b>Sequence Tweak Asset: </b>The Sequence Tweak Asset offers a unique capability to
                        apply tweaks to groups of GameObjects simultaneously and in sequential steps. It
                        facilitates the creation of complex, multistep tweak sequences, perfect for crafting
                        intricate and synchronized animations.
                    </li>
                </ul>
            </p>
            <p>
                Each Tweak Asset type presents a range of settings tailored to its specific purpose,
                affording developer’s unparalleled control over the transformation of GameObjects.
            </p>
            <p>
                <b>Tweak Manager: </b>The Tweak Manager is attached to a GameObject within the scene,
                serving as the control center for all the Tweak Assets in play. It simplifies the management
                of tweaks by providing a centralized hub for playback and manipulation. The Tweak
                Manager comes with a plethora of customization options to tailor the behavior of tweaks
                according to project needs:
                <ul>
                    <li>
                        <b>Framerate Control: </b>The Tweak Manager allows developers to regulate the playback
                        framerate of tweaks, ensuring smooth and consistent animation.
                    </li>
                    <li>
                        <b>Intensity Levels: </b>Intensity levels can be adjusted to amplify or dampen the effect of
                        tweaks, providing a versatile range of dynamic possibilities.
                    </li>
                    <li>
                        <b>Timescale Manipulation: </b>By manipulating the timescale, developers can control
                        the overall speed of tweak animations, offering slow-motion or fast-motion effects.
                    </li>
                    <li>
                        <b>Events for Custom Actions: </b>The Tweak Manager supports events that trigger
                        custom actions at specific points during a tweak sequence. This feature grants
                        developers the freedom to synchronize external behaviors or events with the
                        progress of tweaks.
                    </li>
                </ul>
            </p>
            <p>
                Through the Tweak Manager's intuitive and extensive options,
                developers can finetune tweaks to align seamlessly with their creative vision,
                while also gaining the flexibility
                to adapt and enhance animations as their projects evolve.
            </p>
            <p>
                In essence, the Magikus Tweak System combines the power of Tweak Assets and
                the Tweak Manager to deliver an all-encompassing solution for achieving captivating and
                interactive GameObject animations. Whether it's smoothly moving GameObjects across
                the scene, altering their appearance with vibrant colors, or orchestrating intricate
                sequences of transformations, this system empowers developers with an efficient and
                user-friendly toolset, streamlining the process of crafting dynamic and visually engaging
                experiences.
            </p>

            <h2>How to Use</h2>
            <p>
                To add the <b>Tweak Manager Component</b> to a GameObject, follow these steps:
            </p>
            <ol>
                <li>
                    Select the GameObject to which you want to add the Manager component.
                </li>
                <li>
                    Open the Components menu.
                </li>
                <li>
                    Navigate to Magikus {'->'} Tweak Manager.
                </li>
                <li>
                    Click on the desired option to add the corresponding Manager component to the
                    selected GameObject.
                </li>
            </ol>

            <p>
                To create a new <b>Tweak Position Asset</b>, follow these steps:
            </p>
            <ol>
                <li>
                    Right-click on the desired folder in the Project window (where you want to create
                    the asset).
                </li>
                <li>
                    From the context menu, go to Create {'->'} Magikus {'->'} Tweak System {'->'} Tweak Position Asset.
                </li>
                <li>
                    A new Tweak Position Asset will be created in the selected folder, ready for
                    customization and configuration.
                </li>
            </ol>

            <p>
                To create a new <b>Tweak Rotation Asset</b>, follow these steps:
            </p>
            <ol>
                <li>
                    Right-click on the desired folder in the Project window (where you want to create
                    the asset).
                </li>
                <li>
                    From the context menu, go to Create {'->'} Magikus {'->'} Tweak System {'->'} Tweak Rotation Asset.
                </li>
                <li>
                    A new Tweak Rotation Asset will be created in the selected folder, ready for
                    customization and configuration.
                </li>
            </ol>

            <p>
                To create a new <b>Tweak Scale Asset</b>, follow these steps:
            </p>
            <ol>
                <li>
                    Right-click on the desired folder in the Project window (where you want to create
                    the asset).
                </li>
                <li>
                    From the context menu, go to Create {'->'} Magikus {'->'} Tweak System {'->'} Tweak Scale Asset.
                </li>
                <li>
                    A new Tweak Scale Asset will be created in the selected folder, ready for
                    customization and configuration.
                </li>
            </ol>

            <p>
                To create a new <b>Tweak Color Asset</b>, follow these steps:
            </p>
            <ol>
                <li>
                    Right-click on the desired folder in the Project window (where you want to create
                    the asset).
                </li>
                <li>
                    From the context menu, go to Create {'->'} Magikus {'->'} Tweak System {'->'} Tweak Color Asset.
                </li>
                <li>
                    A new Tweak Color Asset will be created in the selected folder, ready for
                    customization and configuration.
                </li>
            </ol>

            <p>
                To create a new <b>Tweak Sequence Asset</b>, follow these steps:
            </p>
            <ol>
                <li>
                    Right-click on the desired folder in the Project window (where you want to create
                    the asset).
                </li>
                <li>
                    From the context menu, go to Create {'->'} Magikus {'->'} Tweak System {'->'} Tweak Sequence Asset.
                </li>
                <li>
                    A new Tweak Sequence Asset will be created in the selected folder, ready for
                    customization and configuration.
                </li>
            </ol>

            <p>
                These steps allow you to conveniently access the Tweak Manager component and create
                new Position, Rotation, Scale, Color and Sequence Tweak Assets within the Unity editor.
            </p>
        </div>
    );
}