import React from "react";

export default function Function() {

    return (
        <div className="c-light-2">           
            <h1>Magikus Audio System</h1>
            <h2>Sound Manager Component</h2>
            <p>
                The Sound Manager component facilitates the playback of audio clips using a list
                of sounds stored in a Sound Library Asset. It offers various properties and methods to
                control playback, volume, and other sound settings. You can play sounds, pause and
                unpause them, and stop them entirely. The Sound Manager also keeps track of the
                currently playing sound and allows seamless looping through the library.
            </p>

            <h2>Properties</h2>
            <ul className="property-list">
                <li>
                    <b>Library (SoundLibraryAsset): </b>
                    Specifies the SoundLibraryAsset that contains the
                    sounds to be used by the SoundManager.
                </li>
                <li>
                    <b>Master (SoundMasterAsset): </b>
                    Allows control over the volume and pitch levels of
                    the sounds used by the SoundManager.
                </li>
                <li>
                    <b>Volume (float): </b>
                    Sets the volume level of the SoundManager. The volume range is
                    between 0 and 1, where 0 is silent and 1 is the maximum volume. This volume level
                    affects all sounds that use this SoundManager
                </li>
                <li>
                    <b>PlayOneTrackAtATime (bool): </b>
                    When enabled, stops all other sounds when a new
                    sound is played by the SoundManager. Only one sound can be played at a time.
                </li>
                <li>
                    <b>UseUnscaledTime (bool): </b>
                    When enabled, the SoundManager and all sounds are not
                    affected by the TimeScale property. Time is based on unscaled deltaTime.
                </li>
                <li>
                    <b>Mode (PLAYMODE enum): </b>
                    Controls the flow of the playlist and determines the
                    action to take when the current sound finishes playing. The available modes are:
                    <ul>
                        <li> <b>None: </b> No action is taken and playback stops. </li>
                        <li> <b>Loop: </b> Automatically plays the next sound in the library. </li>
                        <li> <b>Random: </b> Automatically plays a random sound from the library. </li>
                        <li> <b>Repeat: </b> Automatically repeats the same sound. </li>
                    </ul>
                </li>
                <li>
                    <b>FadeInDuration (float): </b>
                    Specifies the duration in seconds for the fade-in effect
                    when transitioning to a sound. The fade-in effect gradually increases the volume
                    from 0 to the specified volume level.
                </li>
                <li>
                    <b>FadeInCurve (AnimationCurve): </b>
                    Determines the volume values for the fade-in
                    effect over time. The curve should start at time 0 with a value of 0 and end at time
                    1 with a value of 1.
                </li>
                <li>
                    <b>FadeOutDuration (float): </b>
                    Specifies the duration in seconds for the fade-out effect
                    when transitioning between sounds. The fade-out effect gradually decreases the
                    volume from the current volume level to 0.
                </li>
                <li>
                    <b>FadeOutCurve (AnimationCurve): </b>
                    Determines the volume values for the fade-out
                    effect over time. The curve should start at time 0 with a value of 1 and end at time
                    1 with a value of 0.
                </li>
            </ul>

            <h2>Events</h2>
            <ul className="property-list">
                <li>
                    <b>OnPlay (UnityEvent{'<'}string{'>'}): </b>
                    Invoked every time a sound is played. The string
                    value represents the name of the sound.
                </li>
                <li>
                    <b>OnPause (UnityEvent{'<'}string{'>'}): </b>
                    Invoked every time a sound is paused. The string
                    value represents the name of the sound.
                </li>
                <li>
                    <b>OnUnpause (UnityEvent{'<'}string{'>'}): </b>
                    Invoked every time a sound is unpaused. The
                    string value represents the name of the sound.
                </li>
                <li>
                    <b>OnStop (UnityEvent{'<'}string{'>'}): </b>
                    Invoked every time a sound is stopped. The string
                    value represents the name of the sound.
                </li>
                <li>
                    <b>OnFadeInEnd (UnityEvent): </b>
                    Invoked when the SoundManager finishes fading in.
                </li>
                <li>
                    <b>OnFadeOutEnd (UnityEvent): </b>
                    Invoked when the SoundManager finishes fading out.
                </li>
            </ul>

            <h2>Methods</h2>
            <ul className="property-list">
                <li>
                    <b>Play(): </b>
                    Plays the sound at the current index in the SoundLibraryAsset. If
                    PlayOneTrackAtATime is enabled, it stops all other sounds before playing.
                </li>
                <li>
                    <b>Pause(): </b>
                    Pauses the currently playing sound at the current index.
                </li>
                <li>
                    <b>Unpause(): </b>
                    Unpauses the currently paused sound at the current index.
                </li>
                <li>
                    <b>Stop(): </b>
                    Stops the currently playing or paused sound at the current index.
                </li>
                <li>
                    <b>Next(): </b>
                    Stops the current sound and plays the next sound in the SoundLibraryAsset.
                    If the current sound is the last one, it loops back to the first sound.
                </li>
                <li>
                    <b>Previous(): </b>
                    Stops the current sound and plays the previous sound in the
                    SoundLibraryAsset. If the current sound is the first one, it loops back to the last
                    sound.
                </li>
                <li>
                    <b>Random(): </b>
                    Stops the current sound and plays a random sound from the
                    SoundLibraryAsset.
                </li>
                <li>
                    <b>SetVolume(float volume): </b>
                    Sets the volume level of the SoundManager. The volume
                    value should be between 0 and 1, where 0 is silent and 1 is the maximum volume.
                </li>
                <li>
                    <b>Play(string sound): </b>
                    Plays the sound with the specified name from the
                    SoundLibraryAsset. If PlayOneTrackAtATime is enabled, it stops all other sounds
                    before playing.
                </li>
                <li>
                    <b>Play(SoundLabelAsset sound): </b>
                    Plays the sound referenced by the specified
                    SoundLabelAsset from the SoundLibraryAsset. If PlayOneTrackAtATime is enabled,
                    it stops all other sounds before playing.
                </li>
                <li>
                    <b>Pause(string sound): </b>
                    Pauses the sound with the specified name from the
                    SoundLibraryAsset.
                </li>
                <li>
                    <b>Pause(SoundLabelAsset sound): </b>
                    Pauses the sound referenced by the specified
                    SoundLabelAsset from the SoundLibraryAsset.
                </li>
                <li>
                    <b>Unpause(string sound): </b>
                    Unpauses the sound with the specified name from the
                    SoundLibraryAsset.
                </li>
                <li>
                    <b>Unpause(SoundLabelAsset sound): </b>
                    Unpauses the sound referenced by the
                    specified SoundLabelAsset from the SoundLibraryAsset.
                </li>
                <li>
                    <b>Stop(string sound): </b>
                    Stops the sound with the specified name from the
                    SoundLibraryAsset.
                </li>
                <li>
                    <b>Stop(SoundLabelAsset sound): </b>
                    Stops the sound referenced by the specified
                    SoundLabelAsset from the SoundLibraryAsset.
                </li>
                <li>
                    <b>Play(int index): </b>
                    Plays the sound at the specified index in the SoundLibraryAsset. If
                    PlayOneTrackAtATime is enabled, it stops all other sounds before playing.
                </li>
                <li>
                    <b>Pause(int index): </b>
                    Pauses the sound at the specified index in the
                    SoundLibraryAsset.
                </li>
                <li>
                    <b>Unpause(int index): </b>
                    Unpauses the sound at the specified index in the
                    SoundLibraryAsset.
                </li>
                <li>
                    <b>Stop(int index): </b>
                    Stops the sound at the specified index in the SoundLibraryAsset.
                </li>
                <li>
                    <b>PauseAllTracks(): </b>
                    Pauses all sounds currently playing.
                </li>
                <li>
                    <b>UnpauseAllTracks(): </b>
                    Unpauses all paused sounds.
                </li>
                <li>
                    <b>StopAllTracks(): </b>
                    Stops all sounds currently playing or paused.
                </li>
                <li>
                    <b>FadeIn(): </b>
                    Initiates a fade-in effect, gradually increasing the volume from 0 to 1.
                </li>
                <li>
                    <b>FadeOut(): </b>
                    Initiates a fade-out effect, gradually decreasing the volume from the
                    current volume level to 0.
                </li>
                <li>
                    <b>FadeIn(float targetVolume): </b>
                    Initiates a fade-in effect with a specified target
                    volume, gradually increasing the volume from 0 to the target volume level.
                </li>
            </ul>
        </div>
    );
}