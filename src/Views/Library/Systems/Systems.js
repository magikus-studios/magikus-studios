import React from "react";

export default function Function() {

    return (
        <div className="c-light-2">
            <h1 className="text-center">Systems</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Systems module offers a suite of pre-built and robust systems that cater to a variety of 
                common game development tasks. These systems are designed to seamlessly integrate into Unity, 
                making it easy for developers to handle complex features such as animation, audio management, 
                dialog creation and more with minimal effort. Whether you're a seasoned developer or a newcomer 
                to Unity, these systems empower you to manage core game functionalities without needing to 
                write extensive custom scripts. The Systems module is designed to work out of the box, streamlining 
                the development process while still offering extensive flexibility and customization.
                A key feature of these systems is their low-to-no-code approach, allowing developers and designers 
                alike to create and manage game components through Unity's intuitive editor interface. Most systems 
                can be used without any scripting knowledge, making them accessible to teams with diverse skill sets. 
                Each system is also designed with modularity and extensibility in mind, ensuring that developers 
                can tailor each solution to the specific needs of their project.
            </h6>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The Systems module of the Magikus Library provides developers with ready-to-use solutions for handling 
                key game development tasks. With systems designed for animation, audio, tweaking, dialogs, event management 
                and object pooling, the module covers a wide array of core game functionalities. Each system is designed 
                to work seamlessly within Unity and requires minimal setup, making it easy to manage game components without 
                extensive scripting. Whether you're a programmer or designer, these systems offer the flexibility to implement 
                complex game features with ease, saving time and improving workflow efficiency. 
            </p>
            
            <h3 className="p-2">Summary</h3>
            <p className="pad-left-2">
                This section provides an overview of the different systems available in the Magikus Library. Each system 
                addresses a specific area of game development, allowing for quick integration and customization within the Unity environment.
            </p>

            <h4 className="c-light-1 p-3">Animation</h4>
            <p className="pad-left-3">
                The Animation system is designed to simplify the creation and management of sprite-based animations in Unity. 
                It consists of two core components: the Sprite Animator and the Sprite Animation Asset. Together, these tools 
                make it easy to create, edit and control animations for SpriteRenderer and UI Image components.
            </p>

            <h4 className="c-light-1 p-3">Tweak</h4>
            <p className="pad-left-3">
                The Tweak system provides a dynamic solution for adjusting the position, rotation, scale and color of GameObjects 
                with ease. It enables developers to create intricate, animated changes to objects without having to write 
                custom scripts. The Tweak system supports complex tweaks, including sequences and randomized effects, for both 2D and 3D objects.
            </p>

            <h4 className="c-light-1 p-3">Audio</h4>
            <p className="pad-left-3">
                The Audio system simplifies the process of managing background music, sound effects and audio events in your game. 
                Designed for ease of use, this system enables you to control audio playback without needing to write complex audio 
                management code. The Audio system allows developers to manage complex audio setups for their games without needing 
                extensive scripting knowledge, making it ideal for both designers and programmers.
            </p>

            <h4 className="c-light-1 p-3">Dialog</h4>
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