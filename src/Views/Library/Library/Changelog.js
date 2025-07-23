import React from "react";
import Log from "Components/VersionLog";
import ChangeLog from "Views/Library/Library/Changelog.json";

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
        <div className="c-light-2">
            <h1 className="text-center pad-top-4">Magikus</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                ChangeLog
            </h6>
            <p>
                All notable changes to this project will be documented in this file.
                <br/>
                The format is based on
                <a className="t-dec-none c-light-0 c-light-4-h" href="https://keepachangelog.com/en/1.0.0/" target="_blank" rel="noopener noreferrer"> Keep a Changelog </a>
                and and this project adheres to
                <a className="t-dec-none c-light-0 c-light-4-h" href="https://semver.org/spec/v2.0.0.html" target="_blank" rel="noopener noreferrer"> Semantic Versioning</a>
                .
                <br/>
                Here is the full log of each of the versions ordered from most recent to older version.
            </p>
            { versions }

            <div className="mar-bottom-1"></div>
        </div>
    );
}