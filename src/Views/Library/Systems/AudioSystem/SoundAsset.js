import React from "react";

export default function Function() {

    return (
        <div className="c-light-2 pb-4">           
            <div className="pb-4">
                <h1>Magikus Audio System</h1>
                <h2>Sound Asset Object</h2>
                <p>
                    The Sound Asset represents an individual sound within the Sound Library Asset. It
                    allows you to customize various properties for each sound, including the audio clip, name,
                    and Sound Label Asset for referencing. You can set unique settings for volume, pitch,
                    looping, and pool usage, making it ideal for sounds that require repeated usage.
                </p>

                <h2>Properties</h2>
                <ul>
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
        </div>
    );
}