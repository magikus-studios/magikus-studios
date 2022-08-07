import React from "react";
import CodeSnippet from "Components/CodeSnippet";

export default function Function() {

    return (
        <div className="c-light-2 pb-4">
            <div className="pb-4">
                <h1>Magikus Library</h1>
                <p>
                    The Magikus Library is a C# framework developed for the Unity3D game engine.
                    It will speed up your development proces and will help your team by to write more readable code.
                    The library is composed of three main pillars that are the Methods, the Structures and the Tools. 
                </p>

                <h3 className="c-light-1">Utilities</h3>
                <p>This is a set of static and extension methods.</p>
                <h3 className="c-light-1">Structures</h3>
                <p>This is a set of data structures and systems.</p>
                <h3 className="c-light-1">Tools</h3>
                <p>This is a set of components and serialized objects.</p>

                <h1>How to Use</h1>
                <p>
                    To start using the Magikus Library first you need to download the package from the
                    <a className="t-dec-none c-light-0 c-light-4-h" href="https://assetstore.unity.com/" target="_blank" rel="noopener noreferrer"> Asset Store</a> and
                    <a className="t-dec-none c-light-0 c-light-4-h" href="https://docs.unity3d.com/Manual/upm-ui-import.html" target="_blank" rel="noopener noreferrer"> import</a> it into your project.
                </p>
                <p>
                    After that, just remember to import the library to any of your scripts by adding the <i className="c-light-3">"using Magikus;"</i> line at the top.
                </p>
                <CodeSnippet 
                    lines={[
                        { line: "using UnityEngine;" },
                        { line: "using Magikus;" },
                        { line: " " },
                        { line: "public class MyComponent : MonoBehaviour {" },
                        { line: " " },
                        { line: "}" }
                    ] }
                />
            </div>
        </div>
    );
}