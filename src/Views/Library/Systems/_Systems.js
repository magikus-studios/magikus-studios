import React from "react";

export default function Function() {

    let scrollUp = () => { window.scrollTo({ top: 0, behavior: "smooth" }); }

    return (
        <div className="c-light-2">
            <h1 className="text-center pad-top-4">Systems</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Pre-built Solutions for Game Development
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2">
                The Systems module provides a suite of robust, pre-built solutions that address a wide range of essential game development tasks. 
                Seamlessly integrating into Unity, these systems simplify the process of managing complex features, allowing developers to focus on gameplay rather than building everything from scratch. 
                Designed to work out of the box, the Systems module streamlines development while offering flexibility and customization to adapt to specific project needs. 
                A standout feature is its low-to-no-code approach, which enables both developers and designers to create and manage game components directly through Unity's editor, making it accessible to teams with varied skill sets. 
                Each system is crafted with modularity and extensibility, ensuring easy adaptation and customization for any game project.
            </p>

            <a href="/#/library/systems/animationSystem" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Animation System</h4></a>
            <p className="pad-left-3">
                The Animation system is designed to simplify the creation and management of sprite-based animations in Unity. 
                It consists of two core components: the Sprite Animator and the Sprite Animation Asset. Together, these tools 
                make it easy to create, edit and control animations for SpriteRenderer and UI Image components.
            </p>

            <a href="/#/library/systems/tweakSystem" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Tweak System</h4></a>
            <p className="pad-left-3">
                The Tweak system provides a dynamic solution for adjusting the position, rotation, scale and color of GameObjects 
                with ease. It enables developers to create intricate, animated changes to objects without having to write 
                custom scripts. The Tweak system supports complex tweaks, including sequences and randomized effects, for both 2D and 3D objects.
            </p>

            <a href="/#/library/systems/audioSystem" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Audio System</h4></a>
            <p className="pad-left-3">
                The Audio system simplifies the process of managing background music, sound effects and audio events in your game. 
                Designed for ease of use, this system enables you to control audio playback without needing to write complex audio 
                management code. The Audio system allows developers to manage complex audio setups for their games without needing 
                extensive scripting knowledge, making it ideal for both designers and programmers.
            </p>

            <a href="/#/library/systems/dialogSystem" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Dialog System</h4></a>
            <p className="pad-left-3">
                The Dialog system provides an easy-to-use tool for creating and managing in-game dialogues. It allows developers to 
                write lines of dialogue, customize character settings (such as text color, font and speed) and integrate dynamic 
                behaviors such as pauses and blinking pointers. The system can be easily configured within the Unity editor, 
                eliminating the need for custom dialog scripting. This system is perfect for creating dynamic conversations or 
                tutorials in games, and it provides enough customization options to cater to various dialogue needs without the 
                need for custom implementations.
            </p>
        </div>
    );
}