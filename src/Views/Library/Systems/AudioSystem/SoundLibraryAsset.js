import React from "react";

export default function Function() {

    return (
        <div className="c-light-2">           
            <h1>Magikus Audio System</h1>
            <h2>Sprite Library Asset Scriptable Object</h2>
            <p>
                The Sound Library Asset is a scriptable object that empowers you to define and
                configure sound playlists for your game. It consists of a list of Sound Assets and provides
                convenient properties to modify multiple sounds simultaneously, such as volume and pitch
                levels.
            </p>

            <h2>Properties</h2>
            <ul className="property-list">
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
    );
}