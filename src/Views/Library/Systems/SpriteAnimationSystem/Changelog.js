import React from "react";
import Log from "Components/VersionLog";
import ChangeLog from "Views/Library/Systems/SpriteAnimationSystem/Changelog.json";

export default function Function() {

    let versions;
    if (ChangeLog != null) { 
        versions =
            <div>
                {
                    ChangeLog.map((version, index) =>
                    {
                        return <Log
                            key={index}
                            version={version.version}
                            date={version.date}
                            added={version.added}
                            changed={version.changed}
                            depricated={version.depricated}
                            removed={version.removed}
                            fixed={version.fixed}
                            security={version.security}
                        />;
                    })
                }
            </div>
    }

    return (
        <div className="c-light-2 pb-4">
            <div className="pb-4">
                <h1>Magikus Sprite Animation System</h1>
                <h2>Changelog</h2>
                <p>All notable changes to this project will be documented in this file.</p>
                <p>
                    The format is based on
                    <a className="t-dec-none c-light-0 c-light-4-h" href="https://keepachangelog.com/en/1.0.0/" target="_blank" rel="noopener noreferrer"> Keep a Changelog </a>
                    and and this project adheres to
                    <a className="t-dec-none c-light-0 c-light-4-h" href="https://semver.org/spec/v2.0.0.html" target="_blank" rel="noopener noreferrer"> Semantic Versioning</a>
                    .
                </p>
                <p>Here is the full log of each of the versions ordered from most recent to older version.</p>
                { versions }
            </div>
        </div>
    );
}