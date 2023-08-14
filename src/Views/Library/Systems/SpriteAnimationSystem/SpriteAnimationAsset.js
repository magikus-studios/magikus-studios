import React from "react";

export default function Function() {

    return (
        <div className="c-light-2">           
            <h1>Magikus Sprite Animation System</h1>
            <h2>Sprite Animator Asset Scriptable Object</h2>
            <p>
                The SpriteAnimatorAsset is a scriptable object that allows you to define and
                configure sprite animations for your game. It provides various properties to control the
                playback, frame order, randomization, and color variations of the animation.
            </p>

            <h2>Properties</h2>
            <ul className="property-list">
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
    );
}