import React from "react";

export default function Function() {

    return (
        <div className="c-light-2 pb-4">
            <div className="pb-4">
                <h1>Structures</h1>
                <p>
                    Set of C# objects and data structures usefull for game developing.
                </p>
                <h5 className="text-center p-3"><b>Operation + Aspect Specifier + Target Components + Mode</b></h5>
                <ul>
                    <li><b>Operation:</b> This refers to the type of operation to apply (e.g.: Set, Add, Abs, etc.).</li>
                    <li>
                        <b>Aspect Specifier:</b> This only applies to mutable values (e.g.: Transforms,
                        GameObjects, etc.) and refers to the specific aspect (e.g.: position, rotation, scale,
                        etc.) of the mutable value that the modifier is going to be applied to.
                    </li>
                    <li>
                        <b>Target Components:</b> This refers to the components (e.g.: x component of a vector, a
                        component of a color, etc.) that the modifier should modify. It doesn’t apply to int
                        and float types.
                    </li>
                    <li><b>Mode:</b> This applies only to reference values.</li>
                </ul>
            </div>
        </div>
    );
}