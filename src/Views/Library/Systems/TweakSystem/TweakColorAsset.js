import React from "react";

export default function Function() {

    return (
        <div className="c-light-2 pb-4">           
            <div className="pb-4">
                <h1>Magikus Tweak System</h1>
                <h2>Tweak Color Asset Scriptable Object</h2>
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
        </div>
    );
}