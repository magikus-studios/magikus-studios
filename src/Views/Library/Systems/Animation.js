import React from "react";
import Group from "Components/Group";

export default function Function() {

    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Animation System</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Sprite-based Animation System
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2">
                The Animation System is a lightweight solution for animating sprites using frame sequences in Unity.
                Instead of relying on animator controllers, states or blend trees, this system builds animations directly from Sprite lists and plays them through a dedicated Animation Manager.
                It focuses on what to animate, how to animate it and when to animate it, without introducing unnecessary abstraction.
                The system is designed to be simple, explicit and easy to configure from the Inspector.
                It is ideal for 2D games and sprite-based visuals.
            </p>
            <p className="pad-left-2">
                Typical use cases include:
            </p>
            <ul>
                <li>2D character animations (idle, walk, attack, death)</li>
                <li>UI or HUD sprite animations</li>
                <li>Animated props or environment elements</li>
                <li>VFX-style sprite sequences</li>
                <li>Any project that needs frame-based animation without Mecanim</li>
            </ul>
            <p className="pad-left-2">
                Some of it's key benefits are no Animator Controllers, animation clips or state machines are required, animations are defined directly from sprite frames, clear playback logic controlled by a manager, fast iteration and easy debugging.
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Systems/Animation/Animation - 01.gif" alt=""/>            
            </div>


            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The Animation System is composed of a small set of focused elements that work together to animate sprites in a clear and predictable way.
                At a high level, the system consists of:
            </p>
            <ul>
                <li>
                    <b1>Framelist Asset</b1>:
                    An asset that defines a set of frames for the animation. Each animation is created by providing a list of sprites (frames).
                    This asset answers the question: “What to animate?”
                </li>
                <li>
                    <b1>Animation Asset</b1>:
                    An asset that defines the settings of an animation. Each animation is created by providing playback settings such as speed, looping or order.
                    This asset answers the question: “What does this animation look like?”
                </li>
                <li>
                    <b1>Animation Manager</b1>:
                    A runtime component that plays animations defined in an Animation Asset. It is responsible for advancing frames over time and applying them to a SpriteRenderer.
                    Timing, looping behavior, frame progression and animation switching are handled explicitly by the manager.
                    This component answers the question: “When and how should this animation play?”
                </li>
            </ul>
            <p className="pad-left-2">
                Together, these parts form a frame-based animation pipeline that is easy to understand, inspect and control.
            </p>

            <Group title="Animation Manager" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>FramelistAsset</b2> <b1>Framelist</b1>: The framelist asset currently being played.</li>
                        <li><b2>AnimationAsset</b2> <b1>Animation</b1>: The animation asset currently being played.</li>
                        <li><b2>SpriteSwitch</b2> <b1>Renderer</b1>: Sprite renderer abstraction used to display animation frames (SpriteRenderer or Image component).</li>
                        <li><b2>float</b2> <b1>PlaybackSpeed</b1>: Multiplier applied to the animation playback speed.</li>
                        <li><b2>bool</b2> <b1>PlayOnAwake</b1>: Automatically starts playing the animation on Awake.</li>
                        <li><b2>bool</b2> <b1>PlayOneFrame</b1>: Plays a single frame and then pauses.</li>
                        <li><b2>bool</b2> <b1>PlayAfterSettingFramelistAsset</b1>: Determines whether playback starts immediately after assigning a new framelist.</li>
                        <li><b2>bool</b2> <b1>PlayAfterSettingAnimationAsset</b1>: Determines whether playback starts immediately after assigning a new animation.</li>
                        <li><b2>Timescale</b2> <b1>Timescale</b1>: Controls time scaling and unscaled time behavior for playback.</li>
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>Play</b1>(): Starts or resumes animation playback.</li>
                        <li><b2>void</b2> <b1>Pause</b1>(): Pauses the animation without resetting its state.</li>
                        <li><b2>void</b2> <b1>Restart</b1>(): Resets the animation and starts playback from the beginning.</li>
                        <li><b2>void</b2> <b1>Stop</b1>(): Stops the animation playback and resets it to its initial state.</li>
                        <li><b2>void</b2> <b1>Toggle</b1>(): Toggles animation playback between playing and paused states.</li>
                        <li><b2>void</b2> <b1>SetFrame</b1>(<b2>int</b2> <b1>frame</b1>): Immediately sets the current animation frame.</li>
                        <li><b2>void</b2> <b1>SetRandomFrame</b1>(): Sets the current frame to a random frame based on animation settings.</li>
                        <li><b2>void</b2> <b1>SetRandomNewFrame</b1>(): Sets the current frame to a random frame different from the current one.</li>
                        <li><b2>void</b2> <b1>SetFramelist</b1>(<b2>FramelistAsset</b2> <b1>framelist</b1>): Assigns a new framelist asset and optionally restarts playback.</li>
                        <li><b2>void</b2> <b1>SetAnimation</b1>(<b2>AnimationAsset</b2> <b1>spriteAnimation</b1>): Assigns a new animation asset and optionally restarts playback.</li>
                        <li><b2>void</b2> <b1>SetPlaybackSpeed</b1>(<b2>float</b2> <b1>playbackSpeed</b1>): Sets the playback speed multiplier.</li>
                        <li><b2>void</b2> <b1>AddPlaybackSpeed</b1>(<b2>float</b2> <b1>playbackSpeed</b1>): Adds to the current playback speed.</li>
                        <li><b2>void</b2> <b1>SetPlayOnAwake</b1>(<b2>bool</b2> <b1>playOnAwake</b1>): Enables or disables automatic playback on Awake.</li>
                        <li><b2>void</b2> <b1>SetPlayOneFrame</b1>(<b2>bool</b2> <b1>playOneFrame</b1>): Enables or disables single-frame playback mode.</li>
                        <li><b2>void</b2> <b1>SetRestartAfterSettingAsset</b1>(<b2>bool</b2> <b1>restartAfterSettingAsset</b1>): Controls whether animations restart when a new asset is assigned.</li>
                    </ul>
                    <h5 className="c-light-1">Events</h5>
                    <ul className="property-list">
                        <li><b2>EventVoid</b2> <b1>OnCycleEnd</b1>: Fired when an animation cycle finishes. Sends the AnimationManager instance as the event sender.</li>
                        <li><b2>EventVoid</b2> <b1>OnAnimationEnd</b1>: Fired when the animation fully completes all cycles. Sends the AnimationManager instance as the event sender.</li>
                    </ul>
                </div>
            )}/>
            <Group title="Framelist Asset" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5> 
                    <ul className="property-list"> 
                        <li><b2>Clist&lt;Sprite&gt;</b2> <b1>Frames</b1>: Collection of sprites used as animation frames, evaluated in order unless modified by playback settings.</li>
                    </ul> 
                </div>
            )}/>
            <Group title="Animation Asset" content={(
                <div>
                    <h5 className="c-light-1">Enums</h5> 
                    <ul className="property-list">
                        <li>
                            <b2>RANDOM_RANGE</b2> <b1>[Forward - Backward - Both]</b1>: Controls how random values are applied relative to the current frame or framerate.
                            <ul>
                                <li>Forward: Adds a positive offset.</li>
                                <li>Backward: Subtracts it.</li>
                                <li>Both: Allows positive or negative variation.</li>
                            </ul>
                        </li>
                        <li>
                            <b2>COLOR_MODE</b2> <b1>[None - Target - Curves]</b1>: Controls the variation of color of the renderer.
                            <ul>
                                <li>None: Applies only alpha changes.</li>
                                <li>Target: Interpolates toward a single color.</li>
                                <li>Curves: Applies independent RGB curves.</li>
                            </ul>
                        </li>
                    </ul> 
                    <h5 className="c-light-1">Properties</h5> 
                    <ul className="property-list"> 
                        <li><b2>float</b2> <b1>Framerate</b1>: Base playback framerate used to advance frames.</li>
                        <li><b2>AnimationCurve</b2> <b1>FramerateCurve</b1>: Curve used to modulate the framerate over the animation progress.</li>
                        <li><b2>bool</b2> <b1>ReverseFrames</b1>: Reverses the order of the animation frames before playback.</li>
                        <li><b2>bool</b2> <b1>BounceBack</b1>: Plays the animation forward and then backward in a ping-pong fashion.</li>
                        <li><b2>bool</b2> <b1>EndInFirstFrame</b1>: Forces the animation to end on the first frame instead of the last.</li>
                        <li><b2>bool</b2> <b1>SkipFirstFrameOnCycle</b1>: Skips the first frame when starting a new animation cycle.</li>
                        <li><b2>bool</b2> <b1>InfiniteLoop</b1>: Determines whether the animation loops indefinitely.</li>
                        <li><b2>int</b2> <b1>CycleAmount</b1>: Number of animation cycles to play when infinite looping is disabled.</li>
                        <li><b2>Toggle&lt;int&gt;</b2> <b1>FramesPerCycle</b1>: Overrides the number of frames played per cycle when enabled.</li>
                        <li><b2>Toggle&lt;Flexor2&lt;float, RANDOM_RANGE&gt;&gt;</b2> <b1>RandomFramerate</b1>: Enables randomized framerate variation within a specified range.</li> 
                        <li><b2>bool</b2> <b1>RandomOrder</b1>: Enables random frame order instead of sequential playback.</li>
                        <li><b2>bool</b2> <b1>AvoidRepeatingLastFrame</b1>: Prevents the same frame from being selected twice in a row when using random order.</li>
                        <li><b2>Toggle&lt;Flexor2&lt;int, RANDOM_RANGE&gt;&gt;</b2> <b1>RandomFrame</b1>: Controls how random frame indices are selected and spread.</li>
                        <li><b2>AnimationCurve</b2> <b1>AlphaCurve</b1>: Controls sprite alpha over animation progress.</li>
                        <li><b2>COLOR_MODE</b2> <b1>ColorMode</b1>: Determines how color is applied (None, Target, Curves).</li>
                        <li><b2>Color</b2> <b1>TargetColor</b1>: Target color used when ColorMode is set to Target.</li>
                        <li><b2>AnimationCurve</b2> <b1>TargetCurve</b1>: Curve controlling interpolation toward the target color.</li>
                        <li><b2>AnimationCurve</b2> <b1>RedCurve</b1>: Red channel curve used when ColorMode is Curves.</li>
                        <li><b2>AnimationCurve</b2> <b1>GreenCurve</b1>: Green channel curve used when ColorMode is Curves.</li>
                        <li><b2>AnimationCurve</b2> <b1>BlueCurve</b1>: Blue channel curve used when ColorMode is Curves.</li>
                        <li><b2>Sprite[]</b2> <b1>Animation</b1>: Generated animation frame array after processing all playback rules.</li>
                    </ul> 
                </div>
            )}/>
   
            <h3 className="p-2">Examples</h3>
            <p className="pad-left-2">
                This guide walks through setting up and playing sprite animations entirely from the Unity Editor, with minimal or no code.
            </p>
            <Group title="Step 01: Prepare Your Sprite Frames" content={(
                <div>
                    <p> 
                        Before using the system, make sure you have a sprite sheet imported into Unity or Individual sprite files.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Animation/Animation - 01.jpg" alt=""/>            
                    <p> 
                        If using a sprite sheet, set the texture’s Sprite Mode to Multiple, slice the sheet in the Sprite Editor and apply changes.
                        Each frame must be a valid Sprite.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Animation/Animation - 02.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Step 02: Create an Framelist Asset" content={(
                <div>
                    <p> 
                        In the Unity menu go to <b1>Assets {">"} Create {">"} Magikus {">"} Animation System {">"} Framelist Asset</b1> and name the asset (e.g. PlayerAnimations, ExplosionAnimations).
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-70" src="images/Library/Systems/Animation/Animation - 03.jpg" alt=""/>            
                    <p> 
                        Select the Framelist Asset in the Inspector and assign a list of frames (Sprites).
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Animation/Animation - 04.jpg" alt=""/>            
                    <p> 
                        This asset will store all sprite frames for a given animation.
                    </p>
                </div>
            )}/>
            <Group title="Step 03: Create an Animation Asset" content={(
                <div>
                    <p> 
                        In the Unity menu go to <b1>Assets {">"} Create {">"} Magikus {">"} Animation System {">"} Animation Asset</b1> and name the asset (e.g. LoopAnimations, BlinkAnimations).
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-70" src="images/Library/Systems/Animation/Animation - 05.jpg" alt=""/>            
                    <p> 
                        This asset will store all settings for a given animation.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Animation/Animation - 06.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Step 04: Define the Animation Inside the Asset" content={(
                <div>
                    <p> 
                        Select the Animation Asset in the Inspector and configure playback settings such as frame rate, speed, looping behavior, optional start or end behavior.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Animation/Animation - 07.jpg" alt=""/>            
                    <p> 
                        Each animation is essentially a sequence of sprites played over time.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Animation/Animation - 08.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Step 05: Add an Animation Manager to a GameObject" content={(
                <div>
                    <p> 
                        Select the GameObject you want to animate and ensure it has a SpriteRenderer or an Image component (optional).
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Animation/Animation - 09.jpg" alt=""/>            
                    <p> 
                        Click "Add Component" and go to <b1>Magikus {">"} Animation System {">"} Animation Manager</b1>
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Animation/Animation - 02.gif" alt=""/>            
                    <p> 
                        The Animation Manager is responsible for updating the SpriteRenderer, advancing animation frames and switching animations.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Animation/Animation - 10.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Step 06: Assign the Asset to the Manager" content={(
                <div>
                    <p> 
                        Select the GameObject with the Animation Manager and assign the previously created Filelist Asset.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Animation/Animation - 11.jpg" alt=""/>            
                    <p> 
                        Then assign the previously created Animation Asset.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Animation/Animation - 12.jpg" alt=""/>            
                    <p> 
                        Make sure that the target Renderer reference is correctly assigned. 
                        You can choose betwen an UI Image renderer or a Sprite renderer.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Animation/Animation - 13.jpg" alt=""/>            
                    <p> 
                        At this point, the manager knows which animations exist and where to render them.
                    </p>
                </div>
            )}/>
            <Group title="Step 07: Configure Default Playback" content={(
                <div>
                    <p> 
                        From the Animation Manager Inspector, configure the default or starting animation, the playback mode (loop, single play, etc.) and the timing or speed overrides (if available).
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Animation/Animation - 14.jpg" alt=""/>            
                    <p> 
                        This defines the animation behavior when the object becomes active.
                    </p>
                </div>
            )}/>
            <Group title="Step 08: Trigger Animations Without Code" content={(
                <div>
                    <p> 
                        Animations can be triggered using UnityEvents, Hooks and/or Buttons.
                        Common workflows include:
                        <ul>
                            <li>Playing a walk animation on movement</li>
                            <li>Switching to an attack animation on input</li>
                            <li>Playing a death animation once and stopping</li>
                        </ul>
                        All of this can be wired directly from the Inspector.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Systems/Animation/Animation - 15.jpg" alt=""/>            
                    <p> 
                        Also, you can use Animation hooks to trigger other events.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Animation/Animation - 16.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Step 09: Test and Iterate" content={(
                <div>
                    <p> 
                        Enter Play Mode and trigger animations.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Systems/Animation/Animation - 17.jpg" alt=""/>            
                    <p> 
                        You can adjust the frame order, the speed, the looping behaviour and the default animation at runtime.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-90" src="images/Library/Systems/Animation/Animation - 03.gif" alt=""/>            
                    <p> 
                        Because animations are data-driven, iteration is fast and safe.
                    </p>
                </div>
            )}/>
            

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>It is intentionally simpler than Animator Controllers</li>
                <li>Multiple Animation Managers can exist independently</li>
                <li>Ideal for 2D projects and systems-driven animation logic</li>
                <li>Avoid embedding gameplay logic into animation timing; keep logic external</li>
            </ul>
        </div>
    );
}