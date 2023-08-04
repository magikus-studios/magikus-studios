import React from "react";

export default function Function() {

    return (
        <div className="c-light-2 pb-4">           
            <div className="pb-4">
                <h1>Magikus Sprite Animation System</h1>
                <h2>Sprite Animator Component</h2>
                <p>
                    The SpriteAnimator component allows for animating sprites using a set of
                    animation frames. It provides various properties and methods to control the playback,
                    speed, and other settings of the animation.
                </p>

                <h2>Properties</h2>
                <ul className="property-list">
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

                <h2>Events</h2>
                <ul className="property-list">
                    <li>
                        <b>OnCycleEnd (UnityEvent): </b>Action to invoke at the end of each cycle.
                    </li>
                    <li>
                        <b>OnAnimationEnd (UnityEvent): </b>Action to invoke at the end of the whole animation.
                    </li>
                </ul>

                <h2>Methods</h2>
                <ul className="property-list">                                   
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
           </div>
        </div>
    );
}