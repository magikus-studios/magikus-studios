import React from "react";
import Group from "Components/Group";

export default function Function() {

    return (
        <div className="c-light-2">           
            <h1 className="text-center">Tweak System</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Tweak system introduces a dynamic and efficient approach to
                seamlessly integrate tweaks into your GameObjects. This powerful tool empowers
                developers to effortlessly create and customize position, rotation, and scale alterations
                without the need for extensive scripting. Furthermore, the system extends its support to
                Color Tweaks for SpriteRenderers and Images, along with the ability to implement Tweak
                Sequencing, creating a comprehensive solution for diverse tweaking requirements.
            </h6>

            <h2>Introduction</h2>
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

            <h2>How it Works</h2>
            <p>
                The Tweak system operates cohesively through two essential
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
                        <b>Position Tweak Asset</b>: This asset focuses on altering the position of GameObjects.
                        It allows developers to define tweaks that gradually move GameObjects along
                        specified trajectories with customizable intensity and looping options.
                    </li>
                    <li>
                        <b>Rotation Tweak Asset</b>: As the name suggests, this asset enables precise rotation
                        tweaks. It grants the ability to smoothly modify the orientation of GameObjects,
                        creating dynamic animations or controlled rotations.
                    </li>
                    <li>
                        <b>Scale Tweak Asset</b>: This asset is dedicated to scaling tweaks. Developers can use
                        it to manipulate the size and proportions of GameObjects, providing flexibility in
                        animating objects of various scales.
                    </li>
                    <li>
                        <b>Color Tweak Asset</b>: The Color Tweak Asset is designed specifically for
                        SpriteRenderers and Images. It allows for captivating color alterations, breathing
                        life into visuals with smooth transitions.
                    </li>
                    <li>
                        <b>Sequence Tweak Asset</b>: The Sequence Tweak Asset offers a unique capability to
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
                <b>Tweak Manager</b>: The Tweak Manager is attached to a GameObject within the scene,
                serving as the control center for all the Tweak Assets in play. It simplifies the management
                of tweaks by providing a centralized hub for playback and manipulation. The Tweak
                Manager comes with a plethora of customization options to tailor the behavior of tweaks
                according to project needs:
                <ul>
                    <li>
                        <b>Framerate Control</b>: The Tweak Manager allows developers to regulate the playback
                        framerate of tweaks, ensuring smooth and consistent animation.
                    </li>
                    <li>
                        <b>Intensity Levels</b>: Intensity levels can be adjusted to amplify or dampen the effect of
                        tweaks, providing a versatile range of dynamic possibilities.
                    </li>
                    <li>
                        <b>Timescale Manipulation</b>: By manipulating the timescale, developers can control
                        the overall speed of tweak animations, offering slow-motion or fast-motion effects.
                    </li>
                    <li>
                        <b>Events for Custom Actions</b>: The Tweak Manager supports events that trigger
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
                In essence, the Tweak system combines the power of Tweak Assets and
                the Tweak Manager to deliver an all-encompassing solution for achieving captivating and
                interactive GameObject animations. Whether it's smoothly moving GameObjects across
                the scene, altering their appearance with vibrant colors, or orchestrating intricate
                sequences of transformations, this system empowers developers with an efficient and
                user-friendly toolset, streamlining the process of crafting dynamic and visually engaging
                experiences.
            </p>

            <h2>Components</h2>

            <Group title="Tweak Manager Component" content={(
                <div className="p-3">
                    <p>
                        The TweakManager script is a fundamental component of the Magikus Tweak
                        System, empowering developers to effortlessly create and integrate smooth and dynamic
                        animations into their GameObjects. By centralizing the control and management of
                        tweaks, this versatile script eliminates the need for manual scripting, saving valuable
                        development time and effort.
                    </p>
                    <p>
                        The Tweak Manager operates in conjunction with two essential components: the
                        TweakAsset and the TweakTarget. The Tweak Asset, implemented as a scriptable object,
                        holds all the settings required for a specific set of tweaks. It defines the sequence,
                        behavior, and characteristics of the applied tweaks, such as position, rotation, scale, color,
                        and even tweak sequencing. The Tweak Manager applies these tweaks to a list of target
                        GameObjects, represented by the TweakTarget class.
                    </p>


                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list pad-left-3">                
                        <li>
                            <b>Play(): </b>Initiates the playback of the tweaks, continuing from the current progress.
                        </li>
                        <li>
                            <b>Pause(): </b>Pauses the tweaks, halting their progress.
                        </li>
                        <li>
                            <b>Unpause(): </b>Resumes the tweaks from the paused state.
                        </li>
                        <li>
                            <b>Stop(): </b>Stops the tweaks and resets the progress to the beginning.
                        </li>
                        <li>
                            <b>Restart(): </b>Restarts the tweaks from the beginning, resetting the progress to 0.
                        </li>
                        <li>
                            <b>SetAsset(TweakAsset asset): </b>Sets a new TweakAsset for the manager. If the
                            provided asset is null, the method does nothing. It restarts the tweaks, invokes the
                            "OnAssetSet" event, and, if "PlayOnSet" is true, starts playing the tweaks.
                        </li>
                        <li>
                            <b>SetTargets(): </b>Sets the targets for the manager. It creates a list of TweakTarget
                            objects from the "Targets" list of GameObjects.
                        </li>
                    </ul>

                    <h5 className="c-light-1 pad-left-3">Events</h5>
                    <ul className="property-list pad-left-3">
                        <li>
                            <b>OnAssetSet (UnityEvent): </b>Event invoked when a new TweakAsset is set using the
                            SetAsset method.
                        </li>
                        <li>
                            <b>OnFinish (UnityEvent): </b>Event invoked when a non-looped tweak is finished playing.
                        </li>
                        <li>
                            <b>OnCycleFinish (UnityEvent): </b>Event invoked when a tweak cycle is finished. A cycle
                            refers to the completion of all the tweaks in the TweakAsset sequence.
                        </li>
                    </ul>

                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list pad-left-3">
                        <li>
                            <b>Targets (List{'<'}GameObject{'>'}): </b>A list of GameObjects that the manager applies
                            tweaks to. Each TweakAsset's tweaks will be executed on these GameObjects. If
                            the list is empty, the manager makes this GameObject a target.
                        </li>
                        <li>
                            <b>Asset (TweakAsset): </b>The TweakAsset that contains the settings for the tweaks. It
                            defines the sequence and behavior of the applied tweaks.
                        </li>
                        <li>
                            <b>Framerate (float): </b>The rate of speed at which the tweaks will play. It influences the
                            overall framerate of the applied tweaks. Values greater than 1 increase the speed,
                            while values less than 1 decrease it.
                        </li>
                        <li>
                            <b>Intensity (float): </b>The intensity level that will be applied to the tweaks. It controls the
                            magnitude of the effect of each tweak.
                        </li>
                        <li>
                            <b>PlayOnStart (bool): </b>If true, the manager will start playing the tweaks when this
                            component starts. If the TweakAsset is null, the manager will not play any tweaks.
                        </li>
                        <li>
                            <b>PlayOnSet (bool): </b>If true, the manager will automatically start playing the tweaks
                            each time a new TweakAsset is set.
                        </li>
                        <li>
                            <b>UseUnscaledTime (bool): </b>Determines whether the time scale used by this
                            TweakManager is affected by Time.timeScale or not. If set to true, it will use
                            unscaled time and will not be affected by changes in Time.timeScale.
                        </li>
                        <li>
                            <b>TimeScale (float): </b>The time scale used by this TweakManager. It controls the
                            speed at which the tweaks are applied.
                        </li>                    
                    </ul>

                </div>
            )}/>
            <Group title="Tweak Position Asset Scriptable Object" content={(
                <div className="p-3">
                    <p>
                        The TweakPositionAsset script is a vital component of the Magikus Tweak
                        System, providing developers with a powerful tool for creating and managing position
                        tweaks within Unity. As a scriptable object, this asset serves as a container for defining
                        intricate position animations for GameObjects, offering fine-grained control over their
                        movement and enabling the creation of dynamic and visually appealing animations.
                    </p>
                    <p>
                        The primary goal of the TweakPositionAsset is to streamline the process of
                        implementing smooth and complex position animations, eliminating the need for extensive
                        custom scripting and reducing development time. By utilizing this asset in conjunction
                        with the TweakManager script, developers can effortlessly integrate position-based
                        animations into their projects, enhancing the overall visual experience and interactivity.
                    </p>

                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list pad-left-3">
                        <li>                    
                            <b>Loop (bool): </b>Determines whether this tweak should play on a loop whenever it is
                            not used in a sequence or not.
                        </li>
                        <li>                    
                            <b>Speed (float): </b>The rate of speed at which the tweaks will play. It influences the
                            overall framerate of the applied tweaks. Values greater than 1 increase the speed,
                            while values less than 1 decrease it. The minimum allowed value is 0.01.
                        </li>
                        <li>                    
                            <b>Intensity (float): </b>The intensity level that will be applied to the tweaks. It controls the
                            magnitude of the effect of each tweak. The minimum allowed value is 0.
                        </li>
                        <li>                    
                            <b>VectorMode (VECTOR_MODE): </b>Determines the type of vector used to calculate the
                            new positions during the tweak. When set to "World," the tweak operates on the
                            world X, Y, and Z positions of the GameObject. Conversely, when set to "Local," the
                            tweak uses the local Right, Up, and Forward vectors of the target GameObject
                            instead.
                        </li>
                        <li>                    
                            <b>TweakMode (TWEAK_MODE): </b>Specifies the type of tweak being applied. If set to
                            "Target," the tweak will gradually move the GameObject towards the specified
                            TargetValue. On the other hand, if set to "Distance," the tweak will gradually move
                            the GameObject by the offset specified in TargetValue from its original position.
                        </li>
                        <li>                    
                            <b>IgnoreAxis (TweakVector3Bool): </b>Allows developers to selectively ignore certain
                            axes during the tweak process. When an axis is set to true in IgnoreAxis, the
                            position tweak will not modify that particular axis. For example, if the X-axis is
                            ignored, the GameObject will not move along the X-axis during the tweak.
                        </li>
                        <li>                    
                            <b>TargetValue (Vector3): </b>Determines the target position towards which the
                            GameObject will move during the "Target" mode. For "Distance" mode, it represents
                            the offset that will be added to the original position of the GameObject.
                        </li>
                        <li>                    
                            <b>UseLocalPosition (bool): </b>When set to true, the tweak will apply changes to the
                            localPosition property of the transform. Otherwise, it will modify the Position
                            property.
                        </li>
                        <li>                    
                            <b>CycleMode (CYCLE_MODE): </b>Specifies how the tweak behaves at the end of each
                            cycle. If set to "ResetValuesOnCycleEnd," the GameObject's position will revert to
                            its original state at the end of each cycle. Conversely, if set to
                            "KeepValuesAtCycleEnd," the GameObject will retain its position at the end of each
                            cycle, effectively making the tweak cumulative.
                        </li>
                        <li>                    
                            <b>Curve (AnimationCurve): </b>Represents the transition between the original state of
                            the GameObject at (0, 0) and its end state at (1, 1) during the tweak. The curve can
                            be customized to create various easing effects and control the timing of the
                            position changes.
                        </li>
                        <li>                    
                            <b>Flow (TweakFlow): </b>Determines the flow of the tweak, including the number of
                            cycles, loopback behavior, and reverse playback option. The "CyclesPerLoop"
                            property specifies how many times the tweak will repeat in a cycle. The "LoopBack"
                            property controls whether the GameObject returns to its original position at the end
                            of each cycle. Lastly, the "Reverse" property determines whether the tweak plays in
                            reverse.
                        </li>
                        <li>                    
                            <b>NoiseSpread (TweakSpread): </b>Adds random noise to the position tweak, creating a
                            more organic and dynamic effect. The "Spread" value determines the range of
                            noise to apply around the target position. The "Mode" property controls whether the
                            spread should be centered before, after, or around the target position.
                        </li>
                        <li>                    
                            <b>AxisCurveOverride (TweakVector3Bool): </b>Allows developers to specify which
                            individual axes should use separate curve settings instead of the global Curve. By
                            enabling specific axes, custom AxisCurves can be defined for fine-tuning the
                            position changes along each axis.
                        </li>
                        <li>                    
                            <b>AxisCurves (TweakVector3Curve): </b>Contains individual curves that represent the
                            transition along each axis. These curves, if specified, will override the global Curve
                            for the corresponding axes.
                        </li>
                        <li>                    
                            <b>AxisFlowOverride (TweakVector3Bool): </b>Enables developers to set different flow
                            settings for individual axes, overriding the global Flow settings.
                        </li>
                        <li>                    
                            <b>AxisCyclesPerLoop (Vector3Int): </b>Allows setting individual repeat amounts for each
                            axis during a cycle. This grants precise control over how many times each axis's
                            tweak will repeat before proceeding to the next cycle.
                        </li>
                        <li>                    
                            <b>AxisLoopBack (TweakVector3Bool): </b>Controls the loopback behavior for individual
                            axes. When enabled, an axis will return to its original position at the end of each
                            cycle.
                        </li>
                        <li>                    
                            <b>AxisReverse (TweakVector3Bool): </b>Allows developers to specify individual axes to
                            play in reverse during the tweak.
                        </li>
                        <li>                    
                            <b>AxisNoiseOverride (TweakVector3Bool): </b>Enables developers to apply separate
                            noise settings to individual axes, overriding the global NoiseSpread settings.
                        </li>
                        <li>                    
                            <b>AxisNoiseMode (TweakVector3Spread): </b>Allows setting different noise modes for
                            individual axes, providing further control over the random noise applied to each
                            axis.
                        </li>
                        <li>                    
                            <b>AxisNoiseSpread (Vector3): </b>Specifies the spread range of noise for each axis,
                            allowing independent control over the noise applied to each axis.
                        </li>
                    </ul>
                </div>
            )}/>
            <Group title="Tweak Rotation Asset Scriptable Object" content={(
                <div className="p-3">
                    <p>
                        The TweakRotationAsset script is a crucial component of the Magikus Tweak
                        System, designed to provide developers with precise control over smooth and dynamic
                        rotation animations for GameObjects. This scriptable object empowers developers to
                        create and manage rotation tweaks, enabling gradual rotations of GameObjects over time.
                    </p>
                    <p>
                        By utilizing the TweakRotationAsset in conjunction with the TweakManager,
                        developers can effortlessly implement complex and visually captivating rotation-based
                        animations without the need for extensive custom scripting, ultimately saving valuable
                        development time and effort. This script supports two distinct modes of rotation tweaks:
                        "Target" mode and "Distance" mode, each providing unique methods of rotating
                        GameObjects to achieve a wide array of visual effects.
                    </p>

                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list pad-left-3">
                        <li>
                            <b>Loop (bool): </b>Determines whether this tweak should play on a loop whenever it is
                            not used in a sequence or not.
                        </li>
                        <li>
                            <b>Speed (float): </b>The rate of speed at which the tweaks will play. It influences the
                            overall framerate of the applied tweaks. Values greater than 1 increase the speed,
                            while values less than 1 decrease it. The minimum allowed value is 0.01.
                        </li>
                        <li>
                            <b>Intensity (float): </b>The intensity level that will be applied to the tweaks. It controls the
                            magnitude of the effect of each tweak. The minimum allowed value is 0.
                        </li>
                        <li>
                            <b>TweakMode (TWEAK_MODE): </b>Specifies the type of tweak being applied. If set to
                            "Target," the tweak will gradually move the GameObject towards the specified
                            TargetValue. On the other hand, if set to "Distance," the tweak will gradually move
                            the GameObject by the offset specified in TargetValue from its original rotation.
                        </li>
                        <li>
                            <b>IgnoreAxis (TweakVector3Bool): </b>Allows developers to selectively ignore certain
                            axes during the tweak process. When an axis is set to true in IgnoreAxis, the
                            rotation tweak will not modify that particular axis. For example, if the X-axis is
                            ignored, the GameObject will not rotate along the X-axis during the tweak.
                        </li>
                        <li>
                            <b>TargetValue (Vector3): </b>Determines the target rotation towards which the
                            GameObject will rotate during the "Target" mode. For "Distance" mode, it
                            represents the offset that will be added to the original rotation of the GameObject.
                        </li>
                        <li>
                            <b>CycleMode (CYCLE_MODE): </b>Specifies how the tweak behaves at the end of each
                            cycle. If set to "ResetValuesOnCycleEnd," the GameObject's rotation will revert to
                            its original state at the end of each cycle. Conversely, if set to
                            "KeepValuesAtCycleEnd," the GameObject will retain its rotation at the end of each
                            cycle, effectively making the tweak cumulative.
                        </li>
                        <li>
                            <b>Curve (AnimationCurve): </b>Represents the transition between the original state of
                            the GameObject at (0, 0) and its end state at (1, 1) during the tweak. The curve can
                            be customized to create various easing effects and control the timing of the
                            rotation changes.
                        </li>
                        <li>
                            <b>Flow (TweakFlow): </b>Determines the flow of the tweak, including the number of
                            cycles, loopback behavior, and reverse playback option. The "CyclesPerLoop"
                            property specifies how many times the tweak will repeat in a cycle. The "LoopBack"
                            property controls whether the GameObject returns to its original rotation at the end
                            of each cycle. Lastly, the "Reverse" property determines whether the tweak plays in
                            reverse.
                        </li>
                        <li>
                            <b>NoiseSpread (TweakSpread): </b>Adds random noise to the rotation tweak, creating a
                            more organic and dynamic effect. The "Spread" value determines the range of
                            noise to apply around the target rotation. The "Mode" property controls whether the
                            spread should be centered before, after, or around the target rotation.
                        </li>
                        <li>
                            <b>AxisCurveOverride (TweakVector3Bool): </b>Allows developers to specify which
                            individual axes should use separate curve settings instead of the global Curve. By
                            enabling specific axes, custom AxisCurves can be defined for fine-tuning the
                            rotation changes along each axis.
                        </li>
                        <li>
                            <b>AxisCurves (TweakVector3Curve): </b>Contains individual curves that represent the
                            transition along each axis. These curves, if specified, will override the global Curve
                            for the corresponding axes.
                        </li>
                        <li>
                            <b>AxisFlowOverride (TweakVector3Bool): </b>Enables developers to set different flow
                            settings for individual axes, overriding the global Flow settings.
                        </li>
                        <li>
                            <b>AxisCyclesPerLoop (Vector3Int): </b>Allows setting individual repeat amounts for each
                            axis during a cycle. This grants precise control over how many times each axis's
                            tweak will repeat before proceeding to the next cycle.
                        </li>
                        <li>
                            <b>AxisLoopBack (TweakVector3Bool): </b>Controls the loopback behavior for individual
                            axes. When enabled, an axis will return to its original position at the end of each
                            cycle.
                        </li>
                        <li>
                            <b>AxisReverse (TweakVector3Bool): </b>Allows developers to specify individual axes to
                            play in reverse during the tweak.
                        </li>
                        <li>
                            <b>AxisNoiseOverride (TweakVector3Bool): </b>Enables developers to apply separate
                            noise settings to individual axes, overriding the global NoiseSpread settings.
                        </li>
                        <li>
                            <b>AxisNoiseMode (TweakVector3Spread): </b>Allows setting different noise modes for
                            individual axes, providing further control over the random noise applied to each
                            axis.
                        </li>
                        <li>
                            <b>AxisNoiseSpread (Vector3): </b>Specifies the spread range of noise for each axis,
                            allowing independent control over the noise applied to each axis.
                        </li>
                    </ul>
                </div>
            )}/>
            <Group title="Tweak Scale Asset Scriptable Object" content={(
                <div className="p-3">
                    <p>
                        The TweakScaleAsset script serves as a cornerstone of the Magikus Tweak
                        System, equipping developers with a versatile and powerful toolset to achieve exquisite
                        control over smooth and dynamic scale animations for GameObjects. As a scriptable
                        object, this asset embodies flexibility and ease of use, empowering developers to
                        effortlessly create and manage scale tweaks, allowing GameObjects to undergo gradual
                        resizing transformations over time.
                    </p>
                    <p>
                        By seamlessly integrating the TweakScaleAsset with the TweakManager,
                        developers can unlock an array of possibilities, enabling the implementation of intricate
                        and visually captivating scale-based animations without the need for extensive custom
                        scripting. This streamlined workflow translates to substantial time and effort savings,
                        allowing developers to focus on enhancing the core aspects of their game while elevating
                        the visual experience through captivating scale animations.
                    </p>

                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list pad-left-3">
                        <li>
                            <b>Loop (bool): </b>Determines whether this tweak should play on a loop whenever it is
                            not used in a sequence or not.
                        </li>
                        <li>
                            <b>Speed (float): </b>The rate of speed at which the tweaks will play. It influences the
                            overall framerate of the applied tweaks. Values greater than 1 increase the speed,
                            while values less than 1 decrease it. The minimum allowed value is 0.01.
                        </li>
                        <li>
                            <b>Intensity (float): </b>The intensity level that will be applied to the tweaks. It controls the
                            magnitude of the effect of each tweak. The minimum allowed value is 0.
                        </li>
                        <li>
                            <b>TweakMode (TWEAK_MODE): </b>The TweakMode property specifies the type of
                            tweak being applied. If set to 'Target' the tweak will gradually scale the GameObject
                            towards the specified TargetValue. On the other hand, if set to 'Proportion' the
                            tweak will gradually scale the GameObject by a rate specified in TargetValue from
                            its original scale.
                        </li>
                        <li>
                            <b>IgnoreAxis (TweakVector3Bool): </b>Allows developers to selectively ignore certain
                            axes during the tweak process. When an axis is set to true in IgnoreAxis, the scale
                            tweak will not modify that particular axis. For example, if the X-axis is ignored, the
                            GameObject will not scale along the X-axis during the tweak.
                        </li>
                        <li>
                            <b>TargetValue (Vector3): </b>The TargetValue property determines the target scale
                            towards which the GameObject will turn to during the 'Target' mode. For
                            'Proportion' mode, it represents the proportion that will be multiplied to the original
                            scale of the GameObject.
                        </li>
                        <li>
                            <b>CycleMode (CYCLE_MODE): </b>Specifies how the tweak behaves at the end of each
                            cycle. If set to "ResetValuesOnCycleEnd," the GameObject's scale will revert to its
                            original state at the end of each cycle. Conversely, if set to "KeepValuesAtCycleEnd,"
                            the GameObject will retain its scale at the end of each cycle, effectively making the tweak cumulative.
                        </li>
                        <li>
                            <b>Curve (AnimationCurve): </b>Represents the transition between the original state of
                            the GameObject at (0, 0) and its end state at (1, 1) during the tweak. The curve can
                            be customized to create various easing effects and control the timing of the scale
                            changes.
                        </li>
                        <li>
                            <b>Flow (TweakFlow): </b>Determines the flow of the tweak, including the number of
                            cycles, loopback behavior, and reverse playback option. The "CyclesPerLoop"
                            property specifies how many times the tweak will repeat in a cycle. The "LoopBack"
                            property controls whether the GameObject returns to its original scale at the end of
                            each cycle. Lastly, the "Reverse" property determines whether the tweak plays in
                            reverse.
                        </li>
                        <li>
                            <b>NoiseSpread (TweakSpread): </b>Adds random noise to the scale tweak, creating a
                            more organic and dynamic effect. The "Spread" value determines the range of
                            noise to apply around the target scale. The "Mode" property controls whether the
                            spread should be centered before, after, or around the target scale.
                        </li>
                        <li>
                            <b>AxisCurveOverride (TweakVector3Bool): </b>Allows developers to specify which
                            individual axes should use separate curve settings instead of the global Curve. By
                            enabling specific axes, custom AxisCurves can be defined for fine-tuning the scale
                            changes along each axis.
                        </li>
                        <li>
                            <b>AxisCurves (TweakVector3Curve): </b>Contains individual curves that represent the
                            transition along each axis. These curves, if specified, will override the global Curve
                            for the corresponding axes.
                        </li>
                        <li>
                            <b>AxisFlowOverride (TweakVector3Bool): </b>Enables developers to set different flow
                            settings for individual axes, overriding the global Flow settings.
                        </li>
                        <li>
                            <b>AxisCyclesPerLoop (Vector3Int): </b>Allows setting individual repeat amounts for each
                            axis during a cycle. This grants precise control over how many times each axis's
                            tweak will repeat before proceeding to the next cycle.
                        </li>
                        <li>
                            <b>AxisLoopBack (TweakVector3Bool): </b>Controls the loopback behavior for individual
                            axes. When enabled, an axis will return to its original position at the end of each
                            cycle.
                        </li>
                        <li>
                            <b>AxisReverse (TweakVector3Bool): </b>Allows developers to specify individual axes to
                            play in reverse during the tweak.
                        </li>
                        <li>
                            <b>AxisNoiseOverride (TweakVector3Bool): </b>Enables developers to apply separate
                            noise settings to individual axes, overriding the global NoiseSpread settings.
                        </li>
                        <li>
                            <b>AxisNoiseMode (TweakVector3Spread): </b>Allows setting different noise modes for
                            individual axes, providing further control over the random noise applied to each
                            axis.
                        </li>
                        <li>
                            <b>AxisNoiseSpread (Vector3): </b>Specifies the spread range of noise for each axis,
                            allowing independent control over the noise applied to each axis.
                        </li>
                    </ul>
                </div>
            )}/>
            <Group title="Tweak Color Asset Scriptable Object" content={(
                <div className="p-3">
                    <p>
                        The TweakColorAsset script is a pivotal component of the Magikus Tweak System,
                        designed to grant developers meticulous control over smooth and dynamic color
                        animations for GameObjects. This scriptable object empowers developers to create and
                        manage color tweaks, facilitating seamless blending of GameObject colors over time.
                    </p>
                    <p>
                        By utilizing the TweakColorAsset in conjunction with the TweakManager,
                        developers can effortlessly implement sophisticated and visually captivating color-based
                        animations without the need for extensive custom scripting. This streamlined workflow
                        translates to substantial time and effort savings, allowing developers to focus on
                        enhancing the core aspects of their game while delivering captivating and immersive
                        visual experiences through vibrant and expressive color animations.
                    </p>

                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list pad-left-3">
                        <li>
                            <b>Loop (bool): </b>Determines whether this tweak should play on a loop whenever it is
                            not used in a sequence or not.
                        </li>
                        <li>
                            <b>Speed (float): </b>The rate of speed at which the tweaks will play. It influences the
                            overall framerate of the applied tweaks. Values greater than 1 increase the speed,
                            while values less than 1 decrease it. The minimum allowed value is 0.01.
                        </li>
                        <li>
                            <b>Intensity (float): </b>The intensity level that will be applied to the tweaks. It controls the
                            magnitude of the effect of each tweak. The minimum allowed value is 0.
                        </li>
                        <li>
                            <b>IgnoreAxis (TweakVector3Bool): </b>Allows developers to selectively ignore certain
                            axes during the tweak process. When an axis is set to true in IgnoreAxis, the color
                            tweak will not modify that particular axis. For example, if the R-axis is ignored, the
                            Tweak Manager will not tweak the color along the R-axis.
                        </li>
                        <li>
                            <b>TargetValue (Vector3): </b>Determines the target color towards which the GameObject
                            will blend to.
                        </li>
                        <li>
                            <b>CycleMode (CYCLE_MODE): </b>Specifies how the tweak behaves at the end of each
                            cycle. If set to "ResetValuesOnCycleEnd," the GameObject's color will revert to its
                            original state at the end of each cycle. Conversely, if set to
                            "KeepValuesAtCycleEnd," the GameObject will retain its color at the end of each
                            cycle, effectively making the tweak cumulative.
                        </li>
                        <li>
                            <b>Curve (AnimationCurve): </b>Represents the transition between the original state of
                            the GameObject at (0, 0) and its end state at (1, 1) during the tweak. The curve can
                            be customized to create various easing effects and control the timing of the color
                            changes.
                        </li>
                        <li>
                            <b>Flow (TweakFlow): </b>Determines the flow of the tweak, including the number of
                            cycles, loopback behavior, and reverse playback option. The "CyclesPerLoop"
                            property specifies how many times the tweak will repeat in a cycle. The "LoopBack"
                            property controls whether the GameObject returns to its original color at the end of
                            each cycle. Lastly, the "Reverse" property determines whether the tweak plays in
                            reverse.
                        </li>
                        <li>
                            <b>NoiseSpread (TweakSpread): </b>Adds random noise to the position tweak, creating a
                            more organic and dynamic effect. The "Spread" value determines the range of
                            noise to apply around the target color. The "Mode" property controls whether the
                            spread should be centered before, after, or around the target color.
                        </li>
                        <li>
                            <b>AxisCurveOverride (TweakVector3Bool): </b>Allows developers to specify which
                            individual axes should use separate curve settings instead of the global Curve. By
                            enabling specific axes, custom AxisCurves can be defined for fine-tuning the color
                            changes along each axis.
                        </li>
                        <li>
                            <b>AxisCurves (TweakVector3Curve): </b>Contains individual curves that represent the
                            transition along each axis. These curves, if specified, will override the global Curve
                            for the corresponding axes.
                        </li>
                        <li>
                            <b>AxisFlowOverride (TweakVector3Bool): </b>Enables developers to set different flow
                            settings for individual axes, overriding the global Flow settings.
                        </li>
                        <li>
                            <b>AxisCyclesPerLoop (Vector3Int): </b>Allows setting individual repeat amounts for each
                            axis during a cycle. This grants precise control over how many times each axis's
                            tweak will repeat before proceeding to the next cycle.
                        </li>
                        <li>
                            <b>AxisLoopBack (TweakVector3Bool): </b>Controls the loopback behavior for individual
                            axes. When enabled, an axis will return to its original position at the end of each
                            cycle.
                        </li>
                        <li>
                            <b>AxisReverse (TweakVector3Bool): </b>Allows developers to specify individual axes to
                            play in reverse during the tweak.
                        </li>
                        <li>
                            <b>AxisNoiseOverride (TweakVector3Bool): </b>Enables developers to apply separate
                            noise settings to individual axes, overriding the global NoiseSpread settings.
                        </li>
                        <li>
                            <b>AxisNoiseMode (TweakVector3Spread): </b>Allows setting different noise modes for
                            individual axes, providing further control over the random noise applied to each
                            axis.
                        </li>
                        <li>
                            <b>AxisNoiseSpread (Vector3): </b>Specifies the spread range of noise for each axis,
                            allowing independent control over the noise applied to each axis.
                        </li>
                    </ul>
                </div>
            )}/>
            <Group title="Tweak Sequence Asset Scriptable Object" content={(
                <div className="p-3">
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

                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list pad-left-3">
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
            )}/>

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