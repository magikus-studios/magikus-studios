import React from "react";

export default function Function() {

    return (
        <div className="c-light-2 pb-4">           
            <div className="pb-4">
                <h1>Magikus Tweak System</h1>
                <h2>Tweak Scale Asset Scriptable Object</h2>
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

                <h2>Properties</h2>
                <ul className="property-list">
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
        </div>
    );
}