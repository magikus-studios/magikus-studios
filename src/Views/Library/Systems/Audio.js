import React from "react";
import Group from "Components/Group";

export default function Function() {

    return (
        <div className="c-light-2">           
            <h1 className="text-center">Audio System</h1>
            <p>
                The Magikus Audio System is a robust collection of components and assets
                designed to elevate audio manipulation in your projects. It offers extensive functionality
                for managing background music and sound effects with flexibility and efficiency. With a
                focus on ease of use, the system provides a visual interface that eliminates the need for
                coding, while still offering high levels of customization through scripts.
            </p>

            <h2>How it Works</h2>
            <p>
                The Magikus Audio System consists of two primary components: the Sound
                Manager and the Sound Library Asset. The Sound Asset, implemented as a scriptable
                object, contains a playlist of sounds and all the essential information for each sound,
                including volume levels, pitch levels, and various options. The Sound Manager, a
                component attached to a game object, controls and manages the Sound Library Asset,
                enabling sound playback and manipulation. It offers a wide range of settings to customize
                sound management. Additionally, the system incorporates a Sound Master Asset for
                controlling volume and pitch levels globally, along with a Label system to conveniently
                reference sounds without relying on indices or string names.
            </p>

            <h2>Components</h2>

            <Group title="Sound Manager Component" content={(
                <div className="p-3">
                    <p>
                        The Sound Manager component facilitates the playback of audio clips using a list
                        of sounds stored in a Sound Library Asset. It offers various properties and methods to
                        control playback, volume, and other sound settings. You can play sounds, pause and
                        unpause them, and stop them entirely. The Sound Manager also keeps track of the
                        currently playing sound and allows seamless looping through the library.
                    </p>


                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list pad-left-3">
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

                    <h5 className="c-light-1 pad-left-3">Events</h5>
                    <ul className="property-list pad-left-3">
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

                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list pad-left-3">
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
                </div>
            )}/>
            <Group title="Sprite Library Asset Scriptable Object" content={(
                <div className="p-3">
                    <p>
                        The Sound Library Asset is a scriptable object that empowers you to define and
                        configure sound playlists for your game. It consists of a list of Sound Assets and provides
                        convenient properties to modify multiple sounds simultaneously, such as volume and pitch
                        levels.
                    </p>

                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list pad-left-3">
                        <li>
                            <b>Volume (float): </b>
                            Sets the volume level of the entire library. The volume range is
                            between 0 and 2. This volume level will affect all sounds within the library.
                        </li>
                        <li>
                            <b>Pitch (float): </b>
                            Sets the pitch level of the entire library. The pitch range is between 0.1
                            and 3. This pitch level will affect all sounds within the library.
                        </li>
                        <li>
                            <b>List (List{'<'}SoundAsset{'>'}): </b>
                            A list of SoundAsset objects that make up the sound
                            library. Each SoundAsset represents a sound clip along with its associated settings
                            and options. You can add, remove, and modify SoundAssets in the list to customize
                            your sound library.
                        </li>
                    </ul>
                </div>
            )}/>
            <Group title="Sound Asset Object" content={(
                <div className="p-3">
                    <p>
                        The Sound Asset represents an individual sound within the Sound Library Asset. It
                        allows you to customize various properties for each sound, including the audio clip, name,
                        and Sound Label Asset for referencing. You can set unique settings for volume, pitch,
                        looping, and pool usage, making it ideal for sounds that require repeated usage.
                    </p>

                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list pad-left-3">
                        <li>
                            <b>Clip (AudioClip): </b>The AudioClip that contains the sound to be used.
                        </li>
                        <li>
                            <b>Name (string): </b>The name used to reference this sound (optional).
                        </li>
                        <li>
                            <b>Label (SoundLabelAsset): </b>The SoundLabelAsset to use as a reference for this
                            sound (optional).
                        </li>
                        <li>
                            <b>Volume (float): </b>Sets the volume level for every instance of this sound. The volume
                            range is between 0 and 2. This volume level will affect all instances of the sound.
                        </li>
                        <li>
                            <b>Pitch(float): </b> Sets the pitch level for every instance of this sound. The pitch range is
                            between 0.1 and 3. This pitch level will affect all instances of the sound.
                        </li>
                        <li>
                            <b>Loop(bool): </b> Determines whether this sound should loop or not.
                        </li>
                        <li>
                            <b>UsePool(bool): </b> Determines whether this sound should create new instances every
                            time it plays or reuse a single instance. Enabling this option improves sound quality
                            but may impact performance. When set to true, all instances will be stored in a pool
                            when not in use and made available for later usage.
                        </li>
                        <li>
                            <b>MinPoolSize(int): </b> Specifies the minimum number of instances available for use.
                        </li>
                        <li>
                            <b>LimitedPoolSize(bool): </b> Determines whether there should be a maximum limit on
                            the number of instances created.
                        </li>
                        <li>
                            <b>MaxPoolSize(int): </b>
                            Specifies the maximum number of instances available for use.
                            If no instances are available in the pool, a playing instance will be restarted. This
                            feature is only used when Limited pool size is set to true.
                        </li>
                        <li>
                            <b>UpdateRate(float): </b> The rate in seconds at which the AudioManager checks the
                            state of each playing sound.
                        </li>
                        <li>
                            <b>PoolCleanup(bool): </b> Determines whether this sound should clean up unused
                            instances after a certain amount of time.
                        </li>
                        <li>
                            <b>CleanupRate(float): </b> The rate in seconds at which the AudioManager cleans up
                            unused instances. This determines how often one unused instance is cleaned.
                        </li>
                    </ul>
                </div>
            )}/>
            <Group title="Sound Master Asset Scriptable Object" content={(
                <div className="p-3">
                    <p>
                        The SoundMasterAsset is a scriptable object that allows you have a global control
                        of the volume and pitch levels. You can set this levels via code but it is perfect for using
                        unity events through the inspector without having to use any code. The fact that this is a
                        scriptable object allows you to configure audio settings in different scenes without having
                        to worry about any problems.
                    </p>

                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list pad-left-3">
                        <li>
                            <b>OnChangeSubscribe(Action action): </b>Subscribes to the event triggered when the
                            volume or pitch of the master asset changes. This feature is used for internal
                            purposes.
                        </li>
                        <li>
                            <b>OnChangeUnsubscribe(Action action): </b>Unsubscribes from the event triggered
                            when the volume or pitch of the master asset changes. This feature is used for
                            internal purposes.
                        </li>
                        <li> 
                            <b>Mute(): </b>Mutes all the sounds affected by this master asset.
                        </li>
                        <li> 
                            <b>Unmute(): </b>Unmutes all the sounds affected by this master asset.
                        </li>
                        <li> 
                            <b>ToggleMute(): </b>Toggles the mute state of the sounds affected by this master asset.
                        </li>
                        <li> 
                            <b>SetVolume(float amount): </b>Sets the volume level of the master asset.
                        </li>
                        <li> 
                            <b>RaiseVolume(float amount): </b>Increases the volume level of the master asset.
                        </li>
                        <li> 
                            <b>LowerVolume(float amount): </b>Decreases the volume level of the master asset.
                        </li>
                        <li> 
                            <b>SetVolume(int amount): </b>Sets the volume level of the master asset based on a
                            percentage.
                        </li>
                        <li> 
                            <b>RaiseVolume(int amount): </b>Increases the volume level of the master asset based
                            on a percentage.
                        </li>
                        <li> 
                            <b>LowerVolume(int amount): </b>Decreases the volume level of the master asset based
                            on a percentage.
                        </li>
                        <li> 
                            <b>SetPitch(float amount): </b>Sets the pitch level of the master asset.
                        </li>
                        <li> 
                            <b>RaisePitch(float amount): </b>Increases the pitch level of the master asset.
                        </li>
                        <li> 
                            <b>LowerPitch(float amount): </b>Decreases the pitch level of the master asset.
                        </li>
                        <li> 
                            <b>SetPitch(int amount): </b>Sets the pitch level of the master asset based on a
                            percentage.
                        </li>
                        <li> 
                            <b>RaisePitch(int amount): </b>Increases the pitch level of the master asset based on a
                            percentage.
                        </li>
                        <li> 
                            <b>LowerPitch(int amount): </b>Decreases the pitch level of the master asset based on a
                            percentage.
                        </li>
                        <li> 
                            <b>SetVolumeValueToSlider(Slider slider): </b>Sets the value of a slider component to
                            match the current volume level of the master asset. This feature facilitates
                            simplified UI creation.
                        </li>
                        <li> 
                            <b>SetPitchValueToSlider(Slider slider): </b>Sets the value of a slider component to
                            match the current pitch level of the master asset. This feature facilitates simplified
                            UI creation.
                        </li>
                        <li> 
                            <b>SetMuteValueToGameObject(GameObject gameObject): </b>Sets the active state of a
                            GameObject based on the mute state of the master asset. This feature facilitates
                            simplified UI creation.
                        </li>
                    </ul>

                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list pad-left-3">
                        <li> 
                            <b>Volume (float): </b>Sets the volume level of the master asset. The volume range is
                            between 0 and 2. This volume level will affect all sounds that use this master
                            asset.
                        </li>
                        <li>                        
                            <b>Pitch (float): </b>Sets the pitch level of the master asset. The pitch range is between
                            0.1 and 3. This pitch level will affect all sounds that use this master asset.
                        </li>
                        <li>                        
                            <b>IsMute (bool): </b>When enabled, all the sounds affected by this master asset will be
                            muted.
                        </li>
                    </ul>
                </div>
            )}/>
            <Group title="Sprite Label Asset Scriptable Object" content={(
                <div className="p-3">
                    <p>
                        The Sound Label Asset offers a simple and intuitive label system for referencing
                        sounds. It eliminates the need for string or index-based references, reducing the risk of
                        misspelled names. With the Sound Label Asset, you can easily modify and set variable
                        names without worrying about errors.
                    </p>
                </div>
            )}/>

            <h2>How to Use</h2>
            <p>
                To add the <b>Sound Manager Component</b> to a GameObject, follow these steps:
            </p>
            <ol>
                <li>
                    Select the GameObject to which you want to add the Manager component.
                </li>
                <li>
                    Open the Components menu.
                </li>
                <li>
                    Navigate to Magikus {'->'} Sound Manager.
                </li>
                <li>
                    Click on the desired option to add the corresponding Manager component to the
                    selected GameObject.
                </li>
            </ol>

            <p>
                To create a new <b>Sound Library Asset</b>, follow these steps:
            </p>
            <ol>
                <li>
                    Right-click on the desired folder in the Project window (where you want to create
                    the asset).
                </li>
                <li>
                    From the context menu, go to Create {'->'} Magikus {'->'} Audio System {'->'} Sound Library
                    Asset.
                </li>
                <li>
                    A new Sound Library Asset will be created in the selected folder, ready for
                    customization and configuration.
                </li>
            </ol>

            <p>
                To create a new <b>Sound Master Asset</b>, follow these steps:
            </p>
            <ol>
                <li>
                    Right-click on the desired folder in the Project window (where you want to create
                    the asset).
                </li>
                <li>
                    From the context menu, go to Create {'->'} Magikus {'->'} Audio System {'->'} Sound Master
                    Asset.
                </li>
                <li>
                    A new Sound Master Asset will be created in the selected folder, ready for
                    customization and configuration.
                </li>
            </ol>

            <p>
                To create a new <b>Sound Label Asset</b>, follow these steps:
            </p>
            <ol>
                <li>
                    Right-click on the desired folder in the Project window (where you want to create
                    the asset).
                </li>
                <li>
                    From the context menu, go to Create {'->'} Magikus {'->'} Audio System {'->'} Sound Label
                    Asset.
                </li>
                <li>
                    A new Sound Label Asset will be created in the selected folder, ready for
                    customization and configuration.
                </li>
            </ol>

            <p>
                These steps allow you to conveniently access the Sound Manager component and create
                new Sound Library, Sound Master and Sound Label Assets within the Unity editor.
            </p>
        </div>
    );
}