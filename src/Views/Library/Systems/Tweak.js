import React from "react";
import Group from "Components/Group";

export default function Function() {

    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Tweak System</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Reusable Tweaks using ScriptableObjects
            </h6>


            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2">
                The Tweak System is a modular animation and transformation system designed to let you author, reuse and play small, focused adjustments ("tweaks") on GameObjects without writing custom animation code.
                Instead of hard‑coding behaviour or relying on Animator Controllers, tweaks are defined as ScriptableObject assets and executed at runtime by a single TweakManager component.
            </p>
            <p className="pad-left-2">
                It provides a clean, flexible alternative to traditional animation workflows for small‑to‑medium effects.
                By separating what happens (assets) from when it happens (manager), it encourages reuse, experimentation and fast iteration.
                Used well, it becomes a powerful tool for adding life, feedback and motion to your projects without increasing script complexity or coupling behaviour to specific GameObjects.
            </p>
            <p className="pad-left-2">
                This system is ideal for:
            </p>
            <ul>
                <li>Subtle UI or world animations (pulses, shakes, color shifts)</li>
                <li>Environmental or prop motion</li>
                <li>Procedural or event‑driven effects</li>
                <li>Rapid iteration and designer‑friendly workflows</li>
            </ul>
            <p className="pad-left-2">
                Some of it's key benefits are that it is asset‑based and reusable, it has inspector‑driven setup, supports sequences, looping and intensity scaling, works on multiple targets at once and decouples animation logic from GameObjects.
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Systems/Tweak/Tweak - 0.jpg" alt=""/>            
            </div>


            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The Tweak System is composed of three essential components:
            </p>
            <ul>
                <li>
                    <b1>Tweak Assets</b1>:
                    ScriptableObjects that define what should change over time (position, rotation, scale, color).
                    These assets contain one or more tweak definitions and optional sequencing or looping behaviour.
                </li>
                <li>
                    <b1>Tweak Sequence Asset</b1>:
                    Sequence-based Tweak Asset that groups multiple Tweak sets into ordered steps, allowing complex, multi-phase animations to be driven as a single Tweak.
                </li>
                <li>
                    <b1>Tweak Manager</b1>:
                    A MonoBehaviour that plays, pauses and updates tweak assets over time.
                    It controls timing, intensity, looping and dispatches events when cycles or sequences end.
                </li>
            </ul>
            <p className="pad-left-2">
                Together, these parts form a frame-based animation pipeline that is easy to understand, inspect and control.
            </p>

            <Group title="Tweak Manager" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>Clist&lt;GameObject&gt;</b2> <b1>Targets</b1>: Collection of GameObjects that will receive the applied tweaks. If empty, the manager defaults to its own GameObject.</li>
                        <li><b2>TweakAsset</b2> <b1>Asset</b1>: Tweak asset defining the sequence of tweaks executed by this manager.</li>
                        <li><b2>float</b2> <b1>Framerate</b1>: Global speed multiplier applied to tweak progression.</li>
                        <li><b2>float</b2> <b1>Intensity</b1>: Scales the strength of all applied tweaks.</li>
                        <li><b2>bool</b2> <b1>PlayOnStart</b1>: If enabled, the tweak automatically starts playing when the scene begins.</li>
                        <li><b2>bool</b2> <b1>PlayOnSet</b1>: If enabled, the tweak starts playing immediately when a new asset is assigned.</li>
                        <li><b2>Timescale</b2> <b1>Timescale</b1>: Determines whether the tweak uses scaled or unscaled time.</li>
                        <li><b2>bool</b2> <b1>IsActive</b1>: Indicates whether the tweak manager is currently playing.</li>
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>Play</b1>(): Starts playing the assigned TweakAsset from the beginning.</li>
                        <li><b2>void</b2> <b1>Pause</b1>(): Temporarily pauses tweak execution without resetting its state.</li>
                        <li><b2>void</b2> <b1>Unpause</b1>(): Resumes playback after being paused.</li>
                        <li><b2>void</b2> <b1>Toggle</b1>(): Toggles playback between paused and unpaused states.</li>
                        <li><b2>void</b2> <b1>Stop</b1>(): Stops playback and resets the current tweak state.</li>
                        <li><b2>void</b2> <b1>Restart</b1>(): Resets the current tweak without stopping playback.</li>
                        <li><b2>void</b2> <b1>SetAsset</b1>(<b2>TweakAsset</b2> <b1>asset</b1>): Assigns a new TweakAsset to the manager and optionally plays it depending on settings.</li>
                        <li><b2>void</b2> <b1>SetTargets</b1>(): Rebuilds the internal target list from the assigned GameObjects.</li>
                    </ul>
                    <h5 className="c-light-1">Events</h5>
                    <ul className="property-list">
                        <li><b2>EventVoid</b2> <b1>OnAssetSet</b1>: Invoked when a new TweakAsset is assigned to the manager.</li>
                        <li><b2>EventVoid</b2> <b1>OnCycleEnd</b1>: Invoked when a single tweak cycle finishes.</li>
                        <li><b2>EventVoid</b2> <b1>OnFinish</b1>: Invoked when the full tweak sequence completes and looping is disabled.</li>
                    </ul>
                </div>
            )}/>
            <Group title="Tweak Position Asset" content={(
                <div>
                    <h5 className="c-light-1">Enums</h5> 
                    <ul className="property-list">
                        <li>
                            <b2>SPREAD_MODE</b2> <b1>[Both - Add - Sub]</b1>: Defines how random noise is applied to the positional value.
                            <ul>
                                <li>Both: Adds a random value in the range <b2>[-spread, +spread]</b2>.</li>
                                <li>Add: Adds a random positive value in the range <b2>[0, spread]</b2>.</li>
                                <li>Sub: Subtracts a random value in the range <b2>[0, spread]</b2>.</li>
                            </ul>
                        </li>
                        <li>
                            <b2>VECTOR_MODE</b2> <b1>[World - Local]</b1>: Defines the directional space used when applying positional movement.
                            <ul>
                                <li>World: Uses global world directions (X, Y, Z).</li>
                                <li>Local: Uses the target’s local orientation vectors.</li>
                            </ul>
                        </li>
                        <li>
                            <b2>TARGET_MODE</b2> <b1>[Target - Distance]</b1>: Determines how the target position value is interpreted.
                            <ul>
                                <li>Target: The value represents an absolute target position.</li>
                                <li>Distance: The value represents a distance offset from the original position.</li>
                            </ul>
                        </li>
                    </ul>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>Loop</b1>: Determines whether the tweak repeats after completion.</li>
                        <li><b2>float</b2> <b1>Intensity</b1>: Scales the overall strength of the position change.</li>
                        <li><b2>float</b2> <b1>Duration</b1>: Amount in seconds that the tweak will last before any speed multipliers apply.</li>
                        <li><b2>Flexor3&lt;bool&gt;</b2> <b1>Ignore Axis</b1>: Defines which axes (X, Y, Z) should be ignored when applying the tweak.</li>
                        <li><b2>Vector3Switch</b2> <b1>Target Value</b1>: The target position or distance value applied by the tweak.</li>
                        <li><b2>TARGET_MODE</b2> <b1>Target Mode</b1>: Determines whether the target value is treated as an absolute position or a distance offset.</li>
                        <li><b2>VECTOR_MODE</b2> <b1>Vector Mode</b1>: Determines whether the tweak uses world or local directional vectors.</li>
                        <li><b2>bool</b2> <b1>Use Local Position</b1>: If enabled, applies the tweak using localPosition instead of world position.</li>
                        <li><b2>bool</b2> <b1>Keep Values On Cycle End</b1>: If enabled, the current position becomes the new origin after each cycle.</li>
                        <li><b2>AnimationCurve</b2> <b1>Curve</b1>: Base easing curve used to interpolate the position over time.</li>
                        <li><b2>AxisEasingSettings</b2> <b1>Axis Easing Settings</b1>: Optional per-axis overrides for easing curves.</li>
                        <li><b2>int</b2> <b1>Cycle Amount</b1>: Number of cycles executed per loop.</li>
                        <li><b2>bool</b2> <b1>Bounce Back</b1>: If enabled, the tween reverses direction after reaching the end.</li>
                        <li><b2>bool</b2> <b1>Reverse Tweak</b1>: If enabled, the tween plays in reverse order.</li>
                        <li><b2>AxisPlaybackSettings</b2> <b1>Axis Playback Settings</b1>: Optional per-axis overrides for playback behavior.</li>
                        <li><b2>Toggle&lt;Flexor2&lt;float, SPREAD_MODE&gt;&gt;</b2> <b1>Noise Spread</b1>: Enables random positional noise with configurable spread and mode.</li>
                        <li><b2>AxisNoiseSettings</b2> <b1>Axis Noise Settings</b1>: Optional per-axis overrides for noise behavior.</li>
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>IsLoop</b1>(): Returns whether this tweak asset is configured to loop.</li>
                        <li><b2>float</b2> <b1>GetSpeed</b1>(<b2>int</b2> <b1>index</b1>): Returns the playback speed for this tweak.</li>
                        <li><b2>float</b2> <b1>GetLength</b1>(): Returns the logical length of the tweak.</li>
                        <li><b2>void</b2> <b1>Restart</b1>(<b2>TweakTarget</b2> <b1>target</b1>): Resets the target’s position state when a cycle restarts.</li>
                        <li><b2>void</b2> <b1>Tweak</b1>(<b2>float</b2> <b1>time</b1>, <b2>float</b2> <b1>intensity</b1>, <b2>TweakTarget</b2> <b1>target</b1>): Applies the position tweak to the target at the given normalized time.</li>
                        <li><b2>void</b2> <b1>RestartAllTweaks</b1>(<b2>TweakTarget</b2> <b1>target</b1>, <b2>int</b2> <b1>tweakGroupIndex</b1>): Restarts all tweak logic for the given target.</li>
                        <li><b2>void</b2> <b1>ApplyAllTweaks</b1>(<b2>float</b2> <b1>time</b1>, <b2>float</b2> <b1>intensity</b1>, <b2>TweakTarget</b2> <b1>target</b1>, <b2>int</b2> <b1>tweakGroupIndex</b1>): Applies all tweak logic for the given target at the specified time.</li>
                    </ul>
                </div>
            )}/>
            <Group title="Tweak Rotation Asset" content={(
                <div>
                    <h5 className="c-light-1">Enums</h5> 
                    <ul className="property-list">
                        <li>
                            <b2>SPREAD_MODE</b2> <b1>[Both - Add - Sub]</b1>: Defines how random noise is applied to the rotation value.
                            <ul>
                                <li>Both: Adds a random value in the range <b2>[-spread, +spread]</b2>.</li>
                                <li>Add: Adds a random positive value in the range <b2>[0, spread]</b2>.</li>
                                <li>Sub: Subtracts a random value in the range <b2>[0, spread]</b2>.</li>
                            </ul>
                        </li>
                        <li>
                            <b2>VECTOR_MODE</b2> <b1>[World - Local]</b1>: Defines the space in which the rotation is applied.
                            <ul>
                                <li>World: Applies rotation in world space.</li>
                                <li>Local: Applies rotation relative to the target’s local orientation.</li>
                            </ul>
                        </li>
                        <li>
                            <b2>ROTATION_MODE</b2> <b1>[Target - Distance]</b1>: Determines how the rotation value is interpreted.
                            <ul>
                                <li>Target: The value represents an absolute target rotation.</li>
                                <li>Distance: The value represents a rotational offset from the original rotation.</li>
                            </ul>
                        </li>
                    </ul>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>Loop</b1>: Determines whether the tweak repeats after completion.</li>
                        <li><b2>float</b2> <b1>Intensity</b1>: Scales the overall strength of the rotation.</li>
                        <li><b2>float</b2> <b1>Duration</b1>: Amount in seconds that the tweak will last before any speed multipliers apply.</li>
                        <li><b2>Flexor3&lt;bool&gt;</b2> <b1>Ignore Axis</b1>: Defines which rotation axes (X, Y, Z) should be ignored.</li>
                        <li><b2>Vector3Switch</b2> <b1>Target Value</b1>: The target rotation or rotation offset applied by the tweak, expressed in Euler angles.</li>
                        <li><b2>ROTATION_MODE</b2> <b1>Rotation Mode</b1>: Determines whether the target value is treated as an absolute rotation or a distance offset.</li>
                        <li><b2>VECTOR_MODE</b2> <b1>Vector Mode</b1>: Determines whether the rotation is applied in world or local space.</li>
                        <li><b2>bool</b2> <b1>Use Local Rotation</b1>: If enabled, applies the tweak using localRotation instead of world rotation.</li>
                        <li><b2>bool</b2> <b1>Keep Values On Cycle End</b1>: If enabled, the current rotation becomes the new origin after each cycle.</li>
                        <li><b2>AnimationCurve</b2> <b1>Curve</b1>: Base easing curve used to interpolate rotation over time.</li>
                        <li><b2>AxisEasingSettings</b2> <b1>Axis Easing Settings</b1>: Optional per-axis overrides for easing curves.</li>
                        <li><b2>int</b2> <b1>Cycle Amount</b1>: Number of cycles executed per loop.</li>
                        <li><b2>bool</b2> <b1>Bounce Back</b1>: If enabled, the tween reverses direction after reaching the end.</li>
                        <li><b2>bool</b2> <b1>Reverse Tweak</b1>: If enabled, the tween plays in reverse order.</li>
                        <li><b2>AxisPlaybackSettings</b2> <b1>Axis Playback Settings</b1>: Optional per-axis overrides for playback behavior.</li>
                        <li><b2>Toggle&lt;Flexor2&lt;float, SPREAD_MODE&gt;&gt;</b2> <b1>Noise Spread</b1>: Enables random rotational noise with configurable spread and mode.</li>
                        <li><b2>AxisNoiseSettings</b2> <b1>Axis Noise Settings</b1>: Optional per-axis overrides for noise behavior.</li>
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>IsLoop</b1>(): Returns whether this tweak asset is configured to loop.</li>
                        <li><b2>float</b2> <b1>GetSpeed</b1>(<b2>int</b2> <b1>index</b1>): Returns the playback speed for this tweak.</li>
                        <li><b2>float</b2> <b1>GetLength</b1>(): Returns the logical length of the tweak.</li>
                        <li><b2>void</b2> <b1>Restart</b1>(<b2>TweakTarget</b2> <b1>target</b1>): Resets the target’s rotation state when a cycle restarts.</li>
                        <li><b2>void</b2> <b1>Tweak</b1>(<b2>float</b2> <b1>time</b1>, <b2>float</b2> <b1>intensity</b1>, <b2>TweakTarget</b2> <b1>target</b1>): Applies the rotation tweak to the target at the given normalized time.</li>
                        <li><b2>void</b2> <b1>RestartAllTweaks</b1>(<b2>TweakTarget</b2> <b1>target</b1>, <b2>int</b2> <b1>tweakGroupIndex</b1>): Restarts all tweak logic for the given target.</li>
                        <li><b2>void</b2> <b1>ApplyAllTweaks</b1>(<b2>float</b2> <b1>time</b1>, <b2>float</b2> <b1>intensity</b1>, <b2>TweakTarget</b2> <b1>target</b1>, <b2>int</b2> <b1>tweakGroupIndex</b1>): Applies all tweak logic for the given target at the specified time.</li>
                    </ul>
                </div>
            )}/>
            <Group title="Tweak Scale Asset" content={(
                <div>
                    <h5 className="c-light-1">Enums</h5> 
                    <ul className="property-list">
                        <li>
                            <b2>SPREAD_MODE</b2> <b1>[Both - Add - Sub]</b1>: Defines how random noise is applied to the scale value.
                            <ul>
                                <li>Both: Adds a random value in the range <b2>[-spread, +spread]</b2>.</li>
                                <li>Add: Adds a random positive value in the range <b2>[0, spread]</b2>.</li>
                                <li>Sub: Subtracts a random value in the range <b2>[0, spread]</b2>.</li>
                            </ul>
                        </li>
                        <li>
                            <b2>SCALE_MODE</b2> <b1>[Target - Distance]</b1>: Determines how the scale value is interpreted.
                            <ul>
                                <li>Target: The value represents an absolute target scale.</li>
                                <li>Distance: The value represents a scale offset relative to the original scale.</li>
                            </ul>
                        </li>
                    </ul>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>Loop</b1>: Determines whether the tweak repeats after completion.</li>
                        <li><b2>float</b2> <b1>Intensity</b1>: Scales the overall strength of the scale change.</li>
                        <li><b2>float</b2> <b1>Duration</b1>: Amount in seconds that the tweak will last before any speed multipliers apply.</li>
                        <li><b2>Flexor3&lt;bool&gt;</b2> <b1>Ignore Axis</b1>: Defines which scale axes (X, Y, Z) should be ignored.</li>
                        <li><b2>Vector3Switch</b2> <b1>Target Value</b1>: The target scale or scale offset applied by the tweak.</li>
                        <li><b2>SCALE_MODE</b2> <b1>Scale Mode</b1>: Determines whether the target value is treated as an absolute scale or a distance offset.</li>
                        <li><b2>bool</b2> <b1>Keep Values On Cycle End</b1>: If enabled, the current scale becomes the new origin after each cycle.</li>
                        <li><b2>AnimationCurve</b2> <b1>Curve</b1>: Base easing curve used to interpolate scale over time.</li>
                        <li><b2>AxisEasingSettings</b2> <b1>Axis Easing Settings</b1>: Optional per-axis overrides for easing curves.</li>
                        <li><b2>int</b2> <b1>Cycle Amount</b1>: Number of cycles executed per loop.</li>
                        <li><b2>bool</b2> <b1>Bounce Back</b1>: If enabled, the tween reverses direction after reaching the end.</li>
                        <li><b2>bool</b2> <b1>Reverse Tweak</b1>: If enabled, the tween plays in reverse order.</li>
                        <li><b2>AxisPlaybackSettings</b2> <b1>Axis Playback Settings</b1>: Optional per-axis overrides for playback behavior.</li>
                        <li><b2>Toggle&lt;Flexor2&lt;float, SPREAD_MODE&gt;&gt;</b2> <b1>Noise Spread</b1>: Enables random scale noise with configurable spread and mode.</li>
                        <li><b2>AxisNoiseSettings</b2> <b1>Axis Noise Settings</b1>: Optional per-axis overrides for noise behavior.</li>
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>IsLoop</b1>(): Returns whether this tweak asset is configured to loop.</li>
                        <li><b2>float</b2> <b1>GetSpeed</b1>(<b2>int</b2> <b1>index</b1>): Returns the playback speed for this tweak.</li>
                        <li><b2>float</b2> <b1>GetLength</b1>(): Returns the logical length of the tweak.</li>
                        <li><b2>void</b2> <b1>Restart</b1>(<b2>TweakTarget</b2> <b1>target</b1>): Resets the target’s scale state when a cycle restarts.</li>
                        <li><b2>void</b2> <b1>Tweak</b1>(<b2>float</b2> <b1>time</b1>, <b2>float</b2> <b1>intensity</b1>, <b2>TweakTarget</b2> <b1>target</b1>): Applies the scale tweak to the target at the given normalized time.</li>
                        <li><b2>void</b2> <b1>RestartAllTweaks</b1>(<b2>TweakTarget</b2> <b1>target</b1>, <b2>int</b2> <b1>tweakGroupIndex</b1>): Restarts all tweak logic for the given target.</li>
                        <li><b2>void</b2> <b1>ApplyAllTweaks</b1>(<b2>float</b2> <b1>time</b1>, <b2>float</b2> <b1>intensity</b1>, <b2>TweakTarget</b2> <b1>target</b1>, <b2>int</b2> <b1>tweakGroupIndex</b1>): Applies all tweak logic for the given target at the specified time.</li>
                    </ul>
                </div>
            )}/>
            <Group title="Tweak Color Asset" content={(
                <div>
                    <h5 className="c-light-1">Enums</h5> 
                    <ul className="property-list">
                        <li>
                            <b2>SPREAD_MODE</b2> <b1>[Both - Add - Sub]</b1>: Defines how random noise is applied to the color value.
                            <ul>
                                <li>Both: Adds random variation in the range <b2>[-spread, +spread]</b2> per channel.</li>
                                <li>Add: Adds random positive variation in the range <b2>[0, spread]</b2> per channel.</li>
                                <li>Sub: Subtracts random variation in the range <b2>[0, spread]</b2> per channel.</li>
                            </ul>
                        </li>
                        <li>
                            <b2>COLOR_MODE</b2> <b1>[Target - Multiply - Add]</b1>: Determines how the color value is applied to the target.
                            <ul>
                                <li>Target: The value replaces the target’s color over time.</li>
                                <li>Multiply: The value multiplies the target’s original color.</li>
                                <li>Add: The value is added to the target’s original color.</li>
                            </ul>
                        </li>
                    </ul>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>Loop</b1>: Determines whether the tweak repeats after completion.</li>
                        <li><b2>float</b2> <b1>Intensity</b1>: Scales the overall strength of the color change.</li>
                        <li><b2>float</b2> <b1>Duration</b1>: Amount in seconds that the tweak will last before any speed multipliers apply.</li>
                        <li><b2>Color</b2> <b1>Target Value</b1>: The target color or color modifier applied by the tweak.</li>
                        <li><b2>COLOR_MODE</b2> <b1>Color Mode</b1>: Determines how the target color is applied.</li>
                        <li><b2>bool</b2> <b1>Keep Values On Cycle End</b1>: If enabled, the current color becomes the new origin after each cycle.</li>
                        <li><b2>AnimationCurve</b2> <b1>Curve</b1>: Base easing curve used to interpolate color over time.</li>
                        <li><b2>AxisEasingSettings</b2> <b1>Axis Easing Settings</b1>: Optional per-axis overrides for easing curves.</li>
                        <li><b2>int</b2> <b1>Cycle Amount</b1>: Number of cycles executed per loop.</li>
                        <li><b2>bool</b2> <b1>Bounce Back</b1>: If enabled, the tween reverses direction after reaching the end.</li>
                        <li><b2>bool</b2> <b1>Reverse Tweak</b1>: If enabled, the tween plays in reverse order.</li>
                        <li><b2>AxisPlaybackSettings</b2> <b1>Axis Playback Settings</b1>: Optional per-axis overrides for playback behavior.</li>
                        <li><b2>Toggle&lt;Flexor2&lt;float, SPREAD_MODE&gt;&gt;</b2> <b1>Noise Spread</b1>: Enables random color noise with configurable spread and mode.</li>
                        <li><b2>AxisNoiseSettings</b2> <b1>Axis Noise Settings</b1>: Optional per-axis overrides for noise behavior.</li>
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>IsLoop</b1>(): Returns whether this tweak asset is configured to loop.</li>
                        <li><b2>float</b2> <b1>GetSpeed</b1>(<b2>int</b2> <b1>index</b1>): Returns the playback speed for this tweak.</li>
                        <li><b2>float</b2> <b1>GetLength</b1>(): Returns the logical length of the tweak.</li>
                        <li><b2>void</b2> <b1>Restart</b1>(<b2>TweakTarget</b2> <b1>target</b1>): Resets the target’s color state when a cycle restarts.</li>
                        <li><b2>void</b2> <b1>Tweak</b1>(<b2>float</b2> <b1>time</b1>, <b2>float</b2> <b1>intensity</b1>, <b2>TweakTarget</b2> <b1>target</b1>): Applies the color tweak to the target at the given normalized time.</li>
                        <li><b2>void</b2> <b1>RestartAllTweaks</b1>(<b2>TweakTarget</b2> <b1>target</b1>, <b2>int</b2> <b1>tweakGroupIndex</b1>): Restarts all tweak logic for the given target.</li>
                        <li><b2>void</b2> <b1>ApplyAllTweaks</b1>(<b2>float</b2> <b1>time</b1>, <b2>float</b2> <b1>intensity</b1>, <b2>TweakTarget</b2> <b1>target</b1>, <b2>int</b2> <b1>tweakGroupIndex</b1>): Applies all tweak logic for the given target at the specified time.</li>
                    </ul>
                </div>
            )}/>
            <Group title="Tweak Sequence Asset" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>Loop</b1>: Determines whether the tweak sequence repeats after completion.</li>
                        <li><b2>float</b2> <b1>Speed</b1>: Speed multiplier applied to time progression.</li>
                        <li><b2>float</b2> <b1>Intensity</b1>: Scales the overall strength of the sequence teaks.</li>
                        <li><b2>Clist&lt;TweakGroup&gt;</b2> <b1>Sequence</b1>: Serialized list of Tweak Groups executed sequentially. Each group represents a step in the sequence and contains its own speed, intensity and list of Tweaks.</li>
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>GetSpeed</b1>(<b2>int</b2> <b1>index</b1>): Returns the effective speed for the given sequence step by multiplying the base asset Speed by the Speed value of the selected Tweak Group.</li>
                        <li><b2>float</b2> <b1>GetIntensity</b1>(<b2>int</b2> <b1>index</b1>): Returns the effective intensity for the given sequence step by multiplying the base asset Intensity by the Intensity value of the selected Tweak Group.</li>
                        <li><b2>float</b2> <b1>GetLength</b1>(): Returns the total number of Tweak Groups in the sequence, defining the overall length of the sequence.</li>
                        <li><b2>void</b2> <b1>RestartAllTweaks</b1>(<b2>TweakTarget</b2> <b1>target</b1>, <b2>int</b2> <b1>tweakGroupIndex</b1>): Restarts all Tweaks contained in the specified Tweak Group, resetting their internal state for the given target.</li>
                        <li><b2>void</b2> <b1>ApplyAllTweaks</b1>(<b2>float</b2> <b1>time</b1>, <b2>float</b2> <b1>intensity</b1>, <b2>TweakTarget</b2> <b1>target</b1>, <b2>int</b2> <b1>tweakGroupIndex</b1>): Applies all Tweaks in the specified Tweak Group at the given time, combining the provided intensity with the group’s own intensity multiplier.</li>
                    </ul>
                </div>
            )}/>


            <h3 className="p-2">Examples</h3>
            <p className="pad-left-2">
                This guide walks through setting up and playing tweaks entirely from the Unity Editor.
            </p>
            <Group title="Step 01: Create a Tweak Asset" content={(
                <div>
                    <p> 
                        In the Unity menu go to <b1>Assets {">"} Create {">"} Magikus {">"} Tweak System {">"} (Position, Scale, Rotation, Color or Sequence) Tweak Asset</b1> and name the asset (e.g. UI_Pulse, Pickup_Bounce).
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-40" src="images/Library/Systems/Tweak/Tweak - 0.jpg" alt=""/>            
                    <p> 
                        Configure each tweak’s parameters (curves, durations, directions or values).
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-90" src="images/Library/Systems/Tweak/Tweak - 0.jpg" alt=""/>            
                    <p> 
                        You can enable looping if the effect should repeat or adjust per‑step speed or ordering if using a sequence.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-90" src="images/Library/Systems/Tweak/Tweak - 0.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Step 02: Add a TweakManager to a GameObject" content={(
                <div>
                    <p> 
                        Select the GameObject that will control the tweak and click "Add Component" and go to <b1>Magikus {">"} Tweak System {">"} Tweak Manager</b1>
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-40" src="images/Library/Systems/Tweak/Tweak - 0.jpg" alt=""/>            
                    <p> 
                        Assign your previously created Tweak Asset.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-90" src="images/Library/Systems/Tweak/Tweak - 0.jpg" alt=""/>            
                    <p> 
                        The TweakManager acts as the playback controller for the system.
                    </p>
                </div>
            )}/>
            <Group title="Step 03: Assign Target GameObjects" content={(
                <div>
                    <p> 
                        In the Targets list, add one or more GameObjects.
                        If no targets are assigned, the manager will default to its own GameObject.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-40" src="images/Library/Systems/Tweak/Tweak - 0.jpg" alt=""/>            
                    <p> 
                        All targets will receive the same tweak simultaneously.
                        This makes it easy to synchronize effects across multiple objects.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-90" src="images/Library/Systems/Tweak/Tweak - 0.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Step 04: Configure Playback Settings" content={(
                <div>
                    <p> 
                        From the TweakManager inspector you can configure the framerate to control how fast the tweak progresses
                        , the intensity that scales the overall strength of the effect
                        , whether the tweak should automatically play when the scene starts or when a new asset is assigned at runtime
                         or even set the timescale to determine whether the tweak uses scaled or unscaled time.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-40" src="images/Library/Systems/Tweak/Tweak - 0.jpg" alt=""/>            
                    <p> 
                        These settings allow a single asset to be reused in multiple contexts with different behaviours.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-90" src="images/Library/Systems/Tweak/Tweak - 0.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Step 05: Control the Tweak" content={(
                <div>
                    <p> 
                        You can control playback in several ways: with inspector buttons (Play, Pause, Stop, Restart), using Unity Events or with direct method calls from other scripts.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-40" src="images/Library/Systems/Tweak/Tweak - 0.jpg" alt=""/>            
                    <p> 
                        Common use cases are triggering a tweak on interaction, or looping ambient motion or chaining effects using events.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-90" src="images/Library/Systems/Tweak/Tweak - 0.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Step 06: React to Events (Optional)" content={(
                <div>
                    <p> 
                        The TweakManager exposes events such as OnAssetSet, OnCycleEnd and OnFinish.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-40" src="images/Library/Systems/Tweak/Tweak - 0.jpg" alt=""/>            
                    <p> 
                        These can be hooked into UnityEvents to trigger sounds, gameplay logic or additional tweaks.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-90" src="images/Library/Systems/Tweak/Tweak - 0.jpg" alt=""/>            
                </div>
            )}/>


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>Tweaks are evaluated over a normalized time range (0 → 1).</li>
                <li>Multiple targets share the same timeline but apply values independently.</li>
                <li>The system is not intended to replace complex skeletal animation.</li>
                <li>Best suited for short, expressive or procedural effects.</li>
                <li>Tweak assets are safe to reuse across scenes and prefabs.</li>
            </ul>
       </div>
    );
}