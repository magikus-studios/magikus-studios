import React from "react";

export default function Function() {

    return (
        <div className="c-light-2 pb-4">           
            <div className="pb-4">
                <h1>Magikus Tweak System</h1>
                <h2>Tweak Manager Component</h2>
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

                <h2>Properties</h2>
                <ul className="property-list">
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

                <h2>Events</h2>
                <ul className="property-list">
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

                <h2>Methods</h2>
                <ul className="property-list">                
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
           </div>
        </div>
    );
}