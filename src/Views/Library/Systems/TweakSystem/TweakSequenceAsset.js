import React from "react";

export default function Function() {

    return (
        <div className="c-light-2 pb-4">           
            <div className="pb-4">
                <h1>Magikus Tweak System</h1>
                <h2>Tweak Sequence Asset Scriptable Object</h2>
                <p>
                    The TweakSequenceAsset class is a fundamental scriptable object that plays a
                    pivotal role within the Magikus Tweak System. It serves as a powerful tool for developers
                    to create and orchestrate sequences of tweaks, enabling the application of specific and
                    intricate effects to GameObjects over a predefined period. This class empowers
                    developers with a high degree of control over the temporal evolution of GameObject
                    properties, fostering captivating and dynamic experiences within Unity projects.
                </p>
                <p>
                    At its core, the TweakSequenceAsset acts as a container for an ordered series of
                    tweaks, defining the sequence and behavior of each applied effect. Developers can
                    meticulously design sequences that include a variety of tweaks, such as position
                    modifications, rotation alterations, scale adjustments, or even color transitions. These
                    sequences are then executed by the TweakManager script, facilitating smooth and
                    continuous animations or visual changes across multiple GameObjects simultaneously.
                </p>

                <h2>Properties</h2>
                <ul className="property-list">
                    <li>
                        <b>Loop (bool): </b>Determines whether this tweak sequence should play on a loop or not.
                        When set to true, the sequence will repeat continuously, creating a looping effect.
                    </li>
                    <li>
                        <b>Speed (float): </b>The rate of speed at which the tweaks sequence will play. It
                        influences the overall framerate of the applied tweaks. Values greater than 1
                        increase the speed, while values less than 1 decrease it. The minimum allowed
                        value is 0.01.
                    </li>
                    <li>
                        <b>Intensity (float): </b>The intensity level that will be applied to the tweaks in the
                        sequence. It controls the magnitude of the effect of each tweak. The minimum
                        allowed value is 0.
                    </li>
                    <li>
                        <b>Sequence (TweakGroup[]): </b>The sequence of tweaks to play in order. Each step of
                        the sequence can have more than one tweak and can have different speed rates.
                    </li>
                </ul>
           </div>
        </div>
    );
}