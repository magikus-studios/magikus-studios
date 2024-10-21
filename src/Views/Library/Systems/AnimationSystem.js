import React from "react";
import Group from "Components/Group";

export default function Function() {

    return (
        <div className="c-light-2">           
            <h1 className="text-center">Animation System</h1>
            <p>
                The Magikus Sprite Animation System is a powerful system of components and
                assets designed to facilitate the creation of sprite animations for SpriteRenderer and UI
                Image components.
            </p>

            <h2>Installation</h2>
            <p>
                To use Magikus Sprite Animation System in your Unity project, follow these steps:
            </p>
            <ol>
                <li>
                    Download the Magikus Sprite Animation System package from the official website or the
                    Unity Asset Store.
                </li>
                <li>
                    Import the package into your Unity project by going to <b>Assets {'->'} Import Package {'->'}
                        Custom Package</b> and selecting the downloaded package file.
                </li>
                <li>
                    Make sure the Magikus Sprite Animation System package is successfully imported and visible
                    in your project's assets.
                </li>
            </ol>

            <h2>How it Works</h2>
            <p>
                The Magikus Sprite Animation System consists of two main parts: the Sprite
                Animator and the Sprite Animation Asset. The Sprite Animation Asset is a scriptable object
                that contains all the necessary information about an animation, including the frames,
                order, frame rate, and other options. The Sprite Animator, on the other hand, is a
                component attached to a game object that controls and manages the Sprite Animation
                Asset, enabling the playback and manipulation of the animation. It provides a wide range
                of settings to customize the animation behavior.
            </p>
            <p>
                It's worth noting that if you want to create animations using a UI Image instead of a
                Sprite Renderer, you can use the ImageSpriteAnimator component, which targets an Image
                component instead of a SpriteRenderer.
            </p>

            <h2>Components</h2>

            <Group title="Sprite Animator Component" content={(
                <div className="p-3">
                    <p>
                        The SpriteAnimator component allows for animating sprites using a set of
                        animation frames. It provides various properties and methods to control the playback,
                        speed, and other settings of the animation.
                    </p>

                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list pad-left-3">                                   
                        <li>
                            <b>Play(): </b>Starts playing the animation.
                        </li>
                        <li>
                            <b>Pause(): </b>Pauses the animation.
                        </li>
                        <li>
                            <b>Restart(): </b>Restarts the animation from the beginning.
                        </li>
                        <li>
                            <b>SetFrame(int frame): </b>Sets the current frame to the specified index of the frames in
                            the Sprite Animation Asset.
                        </li>
                        <li>
                            <b>SetRandomFrame(): </b>Sets the current frame to a random frame within the
                            animation.
                        </li>
                        <li>
                            <b>SetAnimation(SpriteAnimatorAsset spriteAnimation): </b>Sets a new animation asset
                            for the sprite animator.
                        </li>
                        <li>
                            <b>SetPlaybackSpeed(float playbackSpeed): </b>Sets the playback speed of the
                            animation.
                        </li>
                        <li>
                            <b>AddPlaybackSpeed(float playbackSpeed): </b>Adds the specified value to the current
                            playback speed.
                        </li>
                        <li>
                            <b>SetTimeScale(float timeScale): </b>Sets the time scale of the sprite animator.
                        </li>
                        <li>
                            <b>AddTimeScale(float timeScale): </b>Adds the specified value to the current time scale.
                        </li>
                        <li>
                            <b>SetUnscaledTime(bool useUnscaledTime): </b>Sets whether the sprite animator uses
                            unscaled time or not.
                        </li>
                        <li>
                            <b>SetPlayOnAwake(bool playOnAwake): </b>Sets whether the sprite animator should
                            play the animation automatically when it becomes active.
                        </li>
                        <li>
                            <b>SetPlayOneFrame(bool playOneFrame): </b>Sets whether the sprite animator should
                            play one frame and then pause.
                        </li>
                        <li>
                            <b>SetRestartAfterSettingAsset(bool restartAfterSettingAsset): </b>Sets whether the
                            sprite animator should restart the animation after setting a new animation asset.
                        </li>
                    </ul>

                    <h5 className="c-light-1 pad-left-3">Events</h5>
                    <ul className="property-list pad-left-3">                                   
                        <li>
                            <b>OnCycleEnd (UnityEvent): </b>Action to invoke at the end of each cycle.
                        </li>
                        <li>
                            <b>OnAnimationEnd (UnityEvent): </b>Action to invoke at the end of the whole animation.
                        </li>
                    </ul>

                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list pad-left-3">                                   
                        <li>                   
                            <b>Renderer (SpriteRenderer/Image): </b>The SpriteRenderer component that the
                            animator will modify. If set to null, it will try to find a SpriteRenderer component in
                            the same GameObject. For the ImageSpriteAnimator, the Renderer property refers
                            to an Image component instead of a SpriteRenderer.
                        </li>
                        <li>
                            <b>CurrentAnimation (SpriteAnimatorAsset): </b>The currently set animation asset.
                        </li>
                        <li>
                            <b>PlaybackSpeed (float): </b>The speed at which the animations are played by this sprite
                            animator. Must be a non-negative value.
                        </li>
                        <li>
                            <b>PlayOnAwake (bool): </b>Determines whether the animator will start playing the
                            assigned animation automatically when it becomes active (awake). In contrast, the
                            Animator component defaults to pause and requires manual activation by calling
                            its Play method.
                        </li>
                        <li>
                            <b>PlayOneFrame (bool): </b>Plays the animation for one frame and then pauses.
                        </li>
                        <li>
                            <b>RestartAfterSettingAsset (bool): </b>Restarts the animation after setting a new
                            animation asset. If set to false, the frame count and cycle count will remain the
                            same, as well as the finish state.
                        </li>
                        <li>
                            <b>UseUnscaledTime (bool): </b>Determines whether the time scale used by this sprite
                            animator is affected by Time.timeScale or not. If set to true, it will use unscaled
                            time and will not be affected by changes in Time.timeScale.
                        </li>
                        <li>
                            <b>TimeScale (float): </b>The time scale used by this sprite animator. Must be a nonnegative value.
                        </li>
                    </ul>
                </div>
            )}/>
            <Group title="Sprite Animator Asset Scriptable Object" content={(
                <div className="p-3">
                    <p>
                        The SpriteAnimatorAsset is a scriptable object that allows you to define and
                        configure sprite animations for your game. It provides various properties to control the
                        playback, frame order, randomization, and color variations of the animation.
                    </p>

                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list pad-left-3">
                        <li>                    
                            <b>Frames (Sprite[]): </b>An array of sprites arranged in a specific order to define the
                            animation sequence. The order of the sprites determines the flow of the animation.
                        </li>
                        <li>
                            <b>Framerate (float): </b>Specifies the number of frames displayed per second.
                        </li>
                        <li>
                            <b>FramerateCurve (AnimationCurve): </b>A curve that defines the variation of the
                            framerate value over time during each cycle. The curve ranges from 0 to 1,
                            indicating the relative value of the framerate at different points in time.
                        </li>
                        <li>
                            <b>RandomFramerateRange (float): </b>Controls the random distortion applied to the
                            base framerate. Set the value to determine the maximum range of distortion
                            (between 0 and the set value). Set the value to 0 to disable this feature. The higher
                            the value, the greater the distortion.
                        </li>
                        <li>
                            <b>FramerateRange (FramerateRangeType): </b>Specifies the range of random distortion
                            applied to the framerate. It can be one of the following values:
                            <ul className="property-list">
                                <li>
                                    <b>Positive: </b>Distortion is always greater than the framerate.
                                </li>
                                <li>
                                    <b>Negative: </b>Distortion is always smaller than the framerate.
                                </li>
                                <li>
                                    <b>Symmetric: </b>Distortion can be either greater or smaller than the framerate.    
                                </li>
                            </ul>
                        </li>                    
                        <li>
                            <b>EndInFirstFrame (bool): </b>Specifies whether the animation ends on the first frame. If
                            set to true, the animation will reset to the first frame after playing all frames.
                        </li>
                        <li>
                            <b>Loop Back (bool): </b>Specifies whether the animation plays in reverse after playing in
                            the default order. If set to true, the animation will play in the default order and then
                            play in reverse order until it reaches the first frame.
                        </li>
                        <li>
                            <b>ReverseFrames (bool): </b>Specifies whether the order of frames in the animation is
                            reversed. If set to true, the frames will be played in reverse order.
                        </li>
                        <li>
                            <b>SkipFirstFrameOnCycle (bool): </b>Specifies whether the first frame is skipped after
                            every new cycle of the animation. If set to true, the first frame will be skipped.
                        </li>
                        <li>
                            <b>InfiniteLoop (bool): </b>Enables the animation to play again automatically after each
                            cycle indefinitely. If set to true, the animation will loop indefinitely.
                        </li>
                        <li>
                            <b>FramesPerCycle (int): </b>Specifies the number of frames in a cycle. If set to 0, the
                            length of the cycle is determined by the total number of frames in the animation.
                        </li>
                        <li>
                            <b>CycleAmount (int): </b>Specifies the number of cycles to play if the animation is not
                            set to loop indefinitely. This value is only considered if InfiniteLoop is set to false.
                        </li>
                        <li>
                            <b>RandomOrder (bool): </b>Specifies whether each frame of the cycle is played in a
                            random order. If set to true, the frames will be played in a random order.
                        </li>
                        <li>
                            <b>AvoidRepeatingLastFrame (bool): </b>Specifies whether the current frame is avoided
                            when selecting the next random frame. If set to true, the current frame will not be
                            repeated when calculating the next random frame.
                        </li>
                        <li>
                            <b>RandomFrameRange (int): </b>Determines the range of frames from which the new
                            random frame will be selected, relative to the current frame. If set to 0, the range
                            includes all frames of the animation.
                        </li>
                        <li>
                            <b>FrameRange (FrameRangeType): </b>Specifies the range of frames used when
                            selecting the next random frame. It can be one of the following values:
                            <ul className="property-list">       
                                <li>
                                    <b>Positive: </b>Select from the range next to the current frame.
                                </li>
                                <li>
                                    <b>Negative: </b>Select from the range previous to the current frame.
                                </li>
                                <li>
                                    <b>Symmetric: </b>Select from the range both previous and next to the current
                                    frame.
                                </li>
                            </ul>                        
                        </li>
                        <li>
                            <b>AlphaCurve (AnimationCurve): </b>A curve that defines the variation of the alpha value
                            over time during each cycle. The curve ranges from 0 to 1, indicating the relative
                            value of alpha at different points in time.
                        </li>
                        <li>
                            <b>RedCurve (AnimationCurve): </b>A curve that defines the variation of the red value
                            over time during each cycle. The curve ranges from 0 to 1, indicating the relative
                            value of red at different points in time.
                        </li>
                        <li>
                            <b>GreenCurve (AnimationCurve): </b>A curve that defines the variation of the green value
                            over time during each cycle. The curve ranges from 0 to 1, indicating the relative
                            value of green at different points in time.
                        </li>
                        <li>
                            <b>BlueCurve (AnimationCurve): </b>A curve that defines the variation of the blue value
                            over time during each cycle. The curve ranges from 0 to 1, indicating the relative
                            value of blue at different points in time.
                        </li>
                    </ul>
                </div>
            )}/>

            <h2>How to Use</h2>
            <p>
                To add the <b>Animator Component</b> to a GameObject, follow these steps:
            </p>
            <ol>
                <li>
                    Select the GameObject to which you want to add the Animator component.
                </li>
                <li>
                    Open the Components menu.
                </li>
                <li>
                    Navigate to Magikus {'->'} Animation System {'->'} Sprite Animator or Image Sprite Animator.
                </li>
                <li>
                    Click on the desired option to add the corresponding Animator component to the
                    selected GameObject.
                </li>
            </ol>

            <p>
                To create a new <b>Sprite Animation Asset</b>, follow these steps:
            </p>
            <ol>
                <li>
                    Right-click on the desired folder in the Project window (where you want to create
                    the asset).
                </li>
                <li>
                    From the context menu, go to Create {'->'} Magikus {'->'} Sprite Animation Asset
                </li>
                <li>
                    A new Sprite Animation Asset will be created in the selected folder, ready for
                    customization and configuration.
                </li>
            </ol>

            <p>
                These steps allow you to conveniently access the Animator components and create new
                Sprite Animation Assets within the Unity editor.
            </p>
        </div>
    );
}