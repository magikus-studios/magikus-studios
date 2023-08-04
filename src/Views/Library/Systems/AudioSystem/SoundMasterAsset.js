import React from "react";

export default function Function() {

    return (
        <div className="c-light-2 pb-4">           
            <div className="pb-4">
                <h1>Magikus Audio System</h1>
                <h2>Sound Master Asset Scriptable Object</h2>
                <p>
                    The SoundMasterAsset is a scriptable object that allows you have a global control
                    of the volume and pitch levels. You can set this levels via code but it is perfect for using
                    unity events through the inspector without having to use any code. The fact that this is a
                    scriptable object allows you to configure audio settings in different scenes without having
                    to worry about any problems.
                </p>

                <h2>Properties</h2>
                <ul className="property-list">
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

                <h2>Methods</h2>
                <ul className="property-list">
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
           </div>
        </div>
    );
}