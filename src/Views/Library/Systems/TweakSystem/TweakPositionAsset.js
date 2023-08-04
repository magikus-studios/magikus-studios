import React from "react";

export default function Function() {

    return (
        <div className="c-light-2 pb-4">           
            <div className="pb-4">
                <h1>Magikus Tweak System</h1>
                <h2>Tweak Position Asset Scriptable Object</h2>
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
        </div>
    );
}