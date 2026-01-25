import React from "react";
import Group from "Components/Group";

export default function Function() {

    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Audio System</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Modular Audio Control
            </h6>
            
            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Audio System provides a clean and extensible way to manage audio in Unity without relying directly on Unity’s built-in AudioMixer workflow. By separating libraries, managers, mixers and channels, it allows precise control over playback logic while remaining flexible and easy to configure in the Inspector.
                It is well-suited for:                    
            </p>
            <ul>
                <li>Music systems</li>
                <li>Ambient sound control</li>
                <li>Layered audio playback</li>                
                <li>Event-driven audio behaviors</li>
            </ul>
            <p className="pad-left-2 pad-bottom-2">
                When combined with other Magikus systems, it becomes a powerful, scalable foundation for audio management in both small and large projects.
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Audio/Audio - 01.jpg" alt=""/>            
            </div>

           <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The Audio System provides a modular, data-driven way to manage sound playback in Unity.
                It is built around the separation of what plays (sounds), how they are grouped (channels and mixers), and how they are controlled (managers and events).
                The system is designed to be Inspector-friendly, Event-driven and  Compatible with Magikus utilities (Labels, Events, Timescale, Flexor).
                At its core, the system consists of:
            </p>
            <ul>
                <li><b1>AudioManager</b1>: The main runtime controller used to play, pause, stop, fade, and sequence sounds.</li>
                <li><b1>AudioLibraryAsset</b1>: A ScriptableObject that defines and stores a collection of sounds.</li>
                <li><b1>AudioSound</b1>: A single sound entry with playback state and AudioSource handling.</li>
                <li><b1>AudioMixerAsset</b1>: A global mixer-like asset that controls volume and pitch per channel.</li>
                <li><b1>AudioChannel</b1>: A runtime channel that applies volume and pitch modifiers to sounds.</li>
            </ul>
            <Group title="Audio Manager" content={(
                <div>
                    <h5 className="c-light-1">Enums</h5> 
                    <ul className="property-list">
                        <li>
                            <b2>PLAYMODE</b2> <b1>[None - Loop - Random - Repeat]</b1>:
                            Defines the automatic playback behavior when a sound finishes.
                            <ul>
                                <li>None: No automatic playback, audio stops when finished.</li>
                                <li>Loop: Plays the next sound in the library sequentially.</li>
                                <li>Random: Plays a randomly selected sound from the library.</li>
                                <li>Repeat: Replays the currently active sound.</li>
                            </ul>
                        </li>
                    </ul> 

                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list"> 
                        <li><b2>AudioLibraryAsset</b2> <b1>Library</b1>: Audio library asset that defines the list of sounds managed by this AudioManager.</li>
                        <li><b2>AudioMixerAsset</b2> <b1>Mixer</b1>: Optional audio mixer asset used to apply global volume and pitch modifiers.</li>
                        <li><b2>Label</b2> <b1>ChannelLabel</b1>: Label used to retrieve an AudioChannel from the assigned AudioMixer.</li>
                        <li><b2>float</b2> <b1>Volume</b1>: Local volume multiplier applied to all sounds played by this AudioManager.</li>
                        <li><b2>bool</b2> <b1>Mute</b1>: Mutes all sounds managed by this AudioManager.</li>
                        <li><b2>PLAYMODE</b2> <b1>Mode</b1>: Playback mode that defines how sounds are selected when the current sound finishes.</li>
                        <li><b2>bool</b2> <b1>PlayOneTrackAtATime</b1>: If enabled, stops all currently playing sounds before starting a new one.</li>
                        <li><b2>Timescale</b2> <b1>Timescale</b1>: Timescale used for fade transitions and playback timing.</li>
                        <li><b2>Flexor2&lt;float, AnimationCurve&gt;</b2> <b1>FadeIn</b1>: Duration and easing curve used for fade-in effects.</li>
                        <li><b2>Flexor2&lt;float, AnimationCurve&gt;</b2> <b1>FadeOut</b1>: Duration and easing curve used for fade-out effects.</li>
                        <li><b2>bool</b2> <b1>FadeInOnPlay</b1>: If enabled, audio fades in automatically when playback starts.</li>
                        <li><b2>bool</b2> <b1>FadeOnPause</b1>: If enabled, audio fades out before pausing.</li>
                        <li><b2>bool</b2> <b1>FadeOutOnStop</b1>: If enabled, audio fades out before stopping.</li>
                    </ul>

                    <h5 className="c-light-1">Methods</h5> 
                    <ul className="property-list"> 
                        <li><b2>void</b2> <b1>Play</b1>(): Plays the currently selected sound.</li>
                        <li><b2>void</b2> <b1>Play</b1>(<b2>Label</b2> <b1>sound</b1>): Plays a sound identified by its label.</li>
                        <li><b2>void</b2> <b1>Play</b1>(<b2>int</b2> <b1>index</b1>): Plays a sound at the specified index in the audio library.</li>
                        <br/>
                        <li><b2>void</b2> <b1>Toggle</b1>(): Plays the currently selected sound if it is not playing, else it stops it.</li>
                        <li><b2>void</b2> <b1>Toggle</b1>(<b2>Label</b2> <b1>sound</b1>): Plays a sound identified by its label if it is not playing, else it stops it.</li>
                        <li><b2>void</b2> <b1>Toggle</b1>(<b2>int</b2> <b1>index</b1>): Plays a sound at the specified index in the audio library if it is not playing, else it stops it.</li>
                        <br/>
                        <li><b2>void</b2> <b1>Pause</b1>(): Pauses the currently selected sound.</li>
                        <li><b2>void</b2> <b1>Pause</b1>(<b2>Label</b2> <b1>sound</b1>): Pauses a sound identified by its label.</li>
                        <li><b2>void</b2> <b1>Pause</b1>(<b2>int</b2> <b1>index</b1>): Pauses the sound at the specified index.</li>
                        <br/>
                        <li><b2>void</b2> <b1>Unpause</b1>(): Unpauses the currently selected sound.</li>
                        <li><b2>void</b2> <b1>Unpause</b1>(<b2>Label</b2> <b1>sound</b1>): Unpauses a sound identified by its label.</li>
                        <li><b2>void</b2> <b1>Unpause</b1>(<b2>int</b2> <b1>index</b1>): Unpauses the sound at the specified index.</li>
                        <br/>
                        <li><b2>void</b2> <b1>Stop</b1>(): Stops the currently selected sound.</li>
                        <li><b2>void</b2> <b1>Stop</b1>(<b2>Label</b2> <b1>sound</b1>): Stops a sound identified by its label.</li>
                        <li><b2>void</b2> <b1>Stop</b1>(<b2>int</b2> <b1>index</b1>): Stops the sound at the specified index.</li>
                        <br/>
                        <li><b2>void</b2> <b1>Next</b1>(): Stops the current sound and plays the next sound in the library.</li>
                        <li><b2>void</b2> <b1>Previous</b1>(): Stops the current sound and plays the previous sound in the library.</li>
                        <li><b2>void</b2> <b1>Random</b1>(): Stops the current sound and plays a random sound from the library.</li>
                        <li><b2>void</b2> <b1>SetVolume</b1>(<b2>float</b2> <b1>volume</b1>): Sets the local volume multiplier for this AudioManager.</li>
                        <br/>
                        <li><b2>void</b2> <b1>PauseAllTracks</b1>(): Pauses all sounds managed by this AudioManager.</li>
                        <li><b2>void</b2> <b1>UnpauseAllTracks</b1>(): Unpauses all sounds managed by this AudioManager.</li>
                        <li><b2>void</b2> <b1>StopAllTracks</b1>(): Stops all sounds managed by this AudioManager.</li>
                        <br/>
                        <li><b2>void</b2> <b1>FadeIn</b1>(): Fades audio volume to full using the configured fade-in settings.</li>
                        <li><b2>void</b2> <b1>FadeOut</b1>(): Fades audio volume to zero using the configured fade-out settings.</li>
                        <li><b2>void</b2> <b1>FadeTo</b1>(<b2>float</b2> <b1>targetVolume</b1>, <b2>float</b2> <b1>duration</b1>, <b2>AnimationCurve</b2> <b1>easingCurve</b1>, <b2>Action</b2> <b1>onFinish</b1>): Smoothly fades volume to a target value over time, optionally using a custom curve and callback.</li>
                    </ul>

                    <h5 className="c-light-1">Events</h5>
                    <ul className="property-list">
                        <li><b2>Event&lt;string&gt;</b2> <b1>OnPlay</b1>: Triggered when a sound starts playing, sending the sound label.</li>
                        <li><b2>Event&lt;string&gt;</b2> <b1>OnPause</b1>: Triggered when a sound is paused, sending the sound label.</li>
                        <li><b2>Event&lt;string&gt;</b2> <b1>OnUnpause</b1>: Triggered when a sound is unpaused, sending the sound label.</li>
                        <li><b2>Event&lt;string&gt;</b2> <b1>OnStop</b1>: Triggered when a sound is stopped, sending the sound label.</li>
                        <li><b2>EventVoid</b2> <b1>OnFadeInEnd</b1>: Triggered when a fade-in operation finishes.</li>
                        <li><b2>EventVoid</b2> <b1>OnFadeOutEnd</b1>: Triggered when a fade-out operation finishes.</li>
                    </ul>
                </div>
            )}/>
            <Group title="Audio Library Asset" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>private Clist{"<AudioSound>"}</b2> <b1>SoundList</b1>: List of sounds in this audio library.</li>
                        <li><b2>int</b2> <b1>Count</b1>: Total number of sounds contained in this audio library.</li>
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>CreateSoundManagers</b1>(<b2>GameObject</b2> <b1>owner</b1>, <b2>Timescale</b2> <b1>timescale</b1>): Instantiates and initializes all AudioSound instances under the given GameObject.</li>
                        <li><b2>AudioSound</b2> <b1>GetSound</b1>(<b2>int</b2> <b1>index</b1>): Returns the AudioSound at the specified index.</li>
                        <li><b2>int</b2> <b1>GetIndex</b1>(<b2>Label</b2> <b1>label</b1>): Returns the index of the sound identified by the given label, or -1 if not found.</li>
                        <li><b2>void</b2> <b1>PauseAllSounds</b1>(): Pauses all sounds in the library.</li>
                        <li><b2>void</b2> <b1>UnpauseAllSounds</b1>(): Unpauses all paused sounds in the library.</li>
                        <li><b2>void</b2> <b1>StopAllSounds</b1>(): Stops all sounds immediately.</li>
                        <li><b2>void</b2> <b1>UpdateSoundsValues</b1>(<b2>float</b2> <b1>volume</b1>, <b2>float</b2> <b1>pitch</b1>): Updates volume and pitch values for all sounds in the library.</li>
                    </ul>
                </div>
            )}/>
            <Group title="Audio Sound" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>Label</b2> <b1>Label</b1>: Identifier used to reference and play this sound.</li>
                        <li><b2>AudioClip</b2> <b1>Clip</b1>: Audio clip used as the sound source for playback.</li>
                        <li><b2>float</b2> <b1>Volume</b1>: Base volume multiplier applied to this sound before manager, channel and mixer modifiers.</li>
                        <li><b2>float</b2> <b1>Pitch</b1>: Base pitch multiplier applied to this sound before global pitch modifiers.</li>
                        <li><b2>bool</b2> <b1>Loop</b1>: Determines whether this sound loops continuously when played.</li>
                        <li><b2>bool</b2> <b1>UsePool</b1>: Enables AudioSource pooling for this sound, allowing multiple instances to play simultaneously.</li>
                        <li><b2>int</b2> <b1>MinPoolSize</b1>: Minimum number of AudioSource instances kept alive in the pool when pooling is enabled.</li>
                        <li><b2>Toggle&lt;int&gt;</b2> <b1>MaxPoolSize</b1>: Optional maximum number of AudioSource instances allowed in the pool (no maximun pooling growth when unset).</li>
                        <li><b2>Toggle&lt;float&gt;</b2> <b1>PoolCleanupRate</b1>: Optional interval used to clean unused AudioSource instances from the pool (no cleanup when unset).</li>
                        <li><b2>float</b2> <b1>PoolUpdateRate</b1>: Update interval used to manage and refresh the AudioSource pool (Best set to 0.1f for optimization).</li>
                        <li><b2>bool</b2> <b1>IsFinished</b1>: Indicates whether the sound has finished playing.</li>
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>Play</b1>(): Starts audio playback.</li>
                        <li><b2>void</b2> <b1>Pause</b1>(): Pauses audio playback.</li>
                        <li><b2>void</b2> <b1>Unpause</b1>(): Resumes playback from a paused state.</li>
                        <li><b2>void</b2> <b1>Stop</b1>(): Stops playback and resets the sound.</li>
                        <li><b2>void</b2> <b1>SetValues</b1>(<b2>float</b2> <b1>volume</b1>, <b2>float</b2> <b1>pitch</b1>): Applies volume and pitch values to the underlying AudioSource.</li>
                    </ul>
                </div>
            )}/>
            <Group title="Audio Mixer Asset" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>Volume = 1f</b1>: Global volume multiplier applied to all audio channels.</li>
                        <li><b2>float</b2> <b1>Pitch = 1f</b1>: Global pitch multiplier applied to all audio channels.</li>
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>AudioChannel</b2> <b1>GetChannel</b1>(<b2>Label</b2> <b1>label</b1>): Retrieves the audio channel associated with the given label.</li>
                        <li><b2>void</b2> <b1>SetVolume</b1>(<b2>float</b2> <b1>volume</b1>): Sets the global mixer volume.</li>
                        <li><b2>void</b2> <b1>SetPitch</b1>(<b2>float</b2> <b1>pitch</b1>): Sets the global mixer pitch.</li>
                        <li><b2>void</b2> <b1>OnChangeSubscribe</b1>(<b2>Action</b2> <b1>callback</b1>): Subscribes to mixer value change notifications.</li>
                        <li><b2>void</b2> <b1>OnChangeUnsubscribe</b1>(<b2>Action</b2> <b1>callback</b1>): Unsubscribes from mixer value change notifications.</li>
                    </ul>
                </div>
            )}/>
            <Group title="Audio Channel" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>Volume = 1f</b1>: Volume multiplier applied to all sounds routed through this channel.</li>
                        <li><b2>float</b2> <b1>Pitch = 1f</b1>: Pitch multiplier applied to all sounds routed through this channel.</li>
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>SetVolume</b1>(<b2>float</b2> <b1>volume</b1>): Sets the channel volume.</li>
                        <li><b2>void</b2> <b1>SetPitch</b1>(<b2>float</b2> <b1>pitch</b1>): Sets the channel pitch.</li>
                        <li><b2>void</b2> <b1>OnChangeSubscribe</b1>(<b2>Action</b2> <b1>callback</b1>): Subscribes to channel value change notifications.</li>
                        <li><b2>void</b2> <b1>OnChangeUnsubscribe</b1>(<b2>Action</b2> <b1>callback</b1>): Unsubscribes from channel value change notifications.</li>
                    </ul>
                </div>
            )}/>


            <h3 className="p-2">Examples</h3>
            <p className="pad-left-2">
                This guide explains how to start using the Audio System from scratch:
            </p>

            <Group title="Step 01: Create an Audio Library Asset" content={(
                <div>
                    <p> 
                        The Audio Library is where all sounds are defined. Nothing can play without it.                        
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-40" src="images/Library/Systems/Audio/Audio - 02.jpg" alt=""/>            
                    <p> 
                        In the Unity menu go to <b1>Assets {">"} Create {">"} Magikus {">"} Audio System {">"} Audio Library Asset</b1> and name the asset (e.g. MusicLibrary). 
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-70" src="images/Library/Systems/Audio/Audio - 03.jpg" alt=""/>            
                    <p> 
                        This asset will store all your sounds and their playback configuration.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Audio/Audio - 04.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Step 02: Add Sounds to the Library" content={(
                <div>
                    <p> 
                        Select the AudioLibraryAsset, in the Inspector, locate the Sounds list and click "Add" to create a new sound entry.                       
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Audio/Audio - 05.jpg" alt=""/>            
                    <p> 
                        For each sound, assign an AudioClip, set a Label (used to identify and play the sound), configure volume, pitch and looping.
                        Repeat this step for every sound you want to use (music, SFX, ambient, etc.).
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Audio/Audio - 06.jpg" alt=""/>            
                    <p> 
                        Also, you can decide for each sound if you want to use a unique sound object or multiple ones with a pool for them.
                        If you decide to use a pool for the sound, you can configure the min pool size, the max pool size (optional), the pool cleanup rate (optional) and the update rate for the cleanup.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Audio/Audio - 07.jpg" alt=""/>            
                    <p> 
                        Think of the Audio Library as a catalog, not a player.                       
                    </p>
                </div>
            )}/>
            <Group title="Step 03: Create an Audio Mixer Asset (Optional but Recommended)" content={(
                <div>
                    <p> 
                        The Audio Mixer Asset controls global and grouped audio behavior.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Audio/Audio - 08.jpg" alt=""/>            
                    <p> 
                        In the Unity menu go to <b1>Assets {">"} Create {">"} Magikus {">"} Audio System {">"} Audio Mixer Asset</b1> and name it (e.g. GlobalAudioMixer).
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-70" src="images/Library/Systems/Audio/Audio - 09.jpg" alt=""/>            
                    <p> 
                        This asset allows you to, control master volume, create multiple channels (Music, SFX, UI, Ambient) and adjust pitch and volume per channel.
                    </p>
                </div>
            )}/>
            <Group title="Step 04: Define Audio Channels (Optional)" content={(
                <div>
                    <p> 
                        If you created a Mixer, select the AudioMixerAsset.
                        In the Inspector, find the Channels list and Add one or more channels.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Audio/Audio - 10.jpg" alt=""/>            
                    <p> 
                        For each channel, assign a Label (e.g. Music, SFX) and set the volume, the pitch and the mute state.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Audio/Audio - 11.jpg" alt=""/>            
                    <p> 
                        Channels act as group modifiers that affect all sounds routed through them.
                    </p>
                </div>
            )}/>
            <Group title="Step 05: Add an AudioManager to the Scene" content={(
                <div>
                    <p> 
                        The AudioManager is the runtime controller that plays sounds.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-40" src="images/Library/Systems/Audio/Audio - 12.jpg" alt=""/>            
                    <p> 
                        Create or select a GameObject in the scene (e.g. Audio Manager) then click "Add Component" and go to <b1>Magikus {">"} Audio System {">"} Audio Manager</b1>
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Audio/Audio - 01.gif" alt=""/>            
                    <p> 
                        This component is what you will interact with through events, hooks or scripts.
                    </p>
                </div>
            )}/>
            <Group title="Step 06: Assign the Audio Library" content={(
                <div>
                    <p>                     
                        Select the GameObject with the AudioManager.
                        In the Inspector, assign your AudioLibraryAsset to the property Library.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Audio/Audio - 13.jpg" alt=""/>            
                    <p> 
                        At this point, the AudioManager knows what sounds exist, but not how to group or modify them.
                    </p>
                </div>
            )}/>
            <Group title="Step 07: Assign the Audio Mixer and Channel (Optional)" content={(
                <div>
                    <p> 
                        If you are using a Mixer, assign your AudioMixerAsset to the Mixer property.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Audio/Audio - 14.jpg" alt=""/>            
                    <p> 
                        (Optional) Assign a Channel Label.
                        If no channel is assigned, the AudioManager uses a default local channel.
                        If a channel is assigned, all sounds played by this manager will be affected by that channel.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Audio/Audio - 15.jpg" alt=""/>            
                    <p> 
                        This is useful for a dedicated Music AudioManager and a dedicated SFX AudioManager.
                    </p>
                </div>
            )}/>
            <Group title="Step 08: Configure Playback Behavior" content={(
                <div>
                    <p> 
                        Still on the AudioManager, configure how sounds behave.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Audio/Audio - 16.jpg" alt=""/>            
                    <p> 
                        Play Mode:
                        <ul>
                            <li>None: plays once and stops</li>
                            <li>Loop: moves to the next sound automatically</li>
                            <li>Random: plays random sounds</li>
                            <li>Repeat: repeats the same sound</li>
                        </ul>
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Audio/Audio - 17.jpg" alt=""/>            
                    <p> 
                        Enable Play One Track At A Time to stop previous sounds when a new one starts.
                    </p>
                </div>
            )}/>
            <Group title="Step 09: Configure Fading (Optional)" content={(
                <div>
                    <p> 
                        Fading enables smooth audio transitions.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Audio/Audio - 18.jpg" alt=""/>            
                    <p> 
                        Assign a Timescale (optional but recommended).
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Audio/Audio - 19.jpg" alt=""/>            
                    <p> 
                        Configure Fade In duration and curve, Fade Out duration and curve and enable Fade In On Play, Fade Out On Stop and/or Fade On Pause (if needed)
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Audio/Audio - 20.jpg" alt=""/>            
                    <p> 
                        This allows smooth music starts, soft audio stops and non-abrupt transitions.
                    </p>
                </div>
            )}/>
            <Group title="Step 10: Hook Audio to Events (No Code Required)" content={(
                <div>
                    <p> 
                        The Audio System is designed to work with Events and Hooks.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Audio/Audio - 21.jpg" alt=""/>            
                    <p> 
                        Example workflows:
                        <ul>
                            <li>Button click → Play UI sound</li>
                            <li>Trigger enter → Play ambient sound</li>
                            <li>Game state change → Switch music</li>
                        </ul>
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Audio/Audio - 22.jpg" alt=""/>            
                    <p> 
                        In the Inspector, locate the On Play / On Stop / On Pause events and assign listeners.
                        Use Labels to target specific sounds.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Audio/Audio - 23.jpg" alt=""/>            
                    <p> 
                        You can also call AudioManager methods from other UnityEvents and custom controllers.
                    </p>
                </div>
            )}/>
            <Group title="Step 11: Test in Play Mode" content={(
                <div>
                    <p> 
                        Enter Play Mode and trigger playback via Inspector buttons, Events and/or Hooks.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Audio/Audio - 24.jpg" alt=""/>            
                    <p> 
                        Adjust mixer volumes, channel settings and fade curves.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Audio/Audio - 25.jpg" alt=""/>            
                    <p> 
                        Changes are reflected immediately at runtime.
                    </p>
                </div>
            )}/>


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>If no <b1>AudioMixerAsset</b1> is assigned, the <b1>AudioManager</b1> creates a local <b1>AudioChannel</b1></li>
                <li>All sounds are instantiated and managed by the <b1>AudioLibraryAsset</b1> at runtime</li>
                <li>The system supports multiple simultaneous sounds, unless <b2>PlayOneTrackAtATime</b2> is enabled</li>
                <li>Fade operations are protected against overlap</li>
                <li>Labels are used instead of string IDs to ensure safe, inspector-friendly references</li>
                <li>The <b1>AudioManager</b1> is compatible with Magikus Events, Hooks, and Timescale systems</li>
            </ul>
        </div>
    );
}