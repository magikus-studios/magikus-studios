import React from "react";
import CodeSnippet from "Components/CodeSnippet";
import VectorCode from "Components/VectorCode";

export default function Function() {

    return (
        <div className="c-light-2 pb-4">
            <h1>Input Types</h1>
            <p>
                Another aspect of modifiers is their ability to take multiple input types in any
                combination possible for each operation. For example:
            </p>
            <p>
                To set the X and Y component of the Position of a certain Transform named transform
                with a Vector2 named X_Vector for the X component and another Vector2 named Y_Vector
                for the Y component
            </p>
            <CodeSnippet
                lines={[
                    { line: "Transform transform = gameObject.transform;" },
                    { line: "Transform.position = new Vector3(1, 1, 1);" },
                    { line: " " },
                    { line: "Vector2 X_Vector = new Vector2(1, 0);" },
                    { line: "Vector2 Y_Vector = new Vector2(0, 2);" },
                    { line: " " },
                    { line: "transform.Set_Position_XY(X_Vector, Y_Vector);" },
                    { line: "print(transform.position);", comment: "// this prints: (1, 2, 0)" },
                ]}
            />
            <p>
                So the modifier will take the X component of X_Vector and set it to the X
                component of the position vector of the transform and the Y component of Y_Vector and
                set it to the Y component of the position vector of the transform. This behavior will be
                replicated in all modifiers so if the input is a vector type (vectors, colors, rects and
                mutables) the modifier will take the component of the input that corresponds to the
                component it is modifying.
            </p>
            
            <p>
                Also, except for Clamp and Bound operations, all operations can take either one
                input for one or more components or one input per component to modify. For Example:
            </p>
            <p>To set the X and Y component of a certain Vector3 named vector with 1</p>
            <VectorCode
                value="(0, 0, 0)"
                operation="Set_XY"
                parameter="(1)"
                result="(1, 1, 0)" 
            />

            <p>
                At the same time, when value to modify has more than one component, all
                operations, except for Clamp and Wrap operations, can take different types as inputs for
                each component. To do this, it is needed first to import the “Magikus.Crosstypes”
                namespace. To use a crosstype modifier just add the next line at the top of the script
            </p>
            <CodeSnippet lines={[ { line: "Using Magikus.Crosstypes;" } ]} />
            <p>
                For example:
            </p>
            <p>
                To set the X and Y component of a certain Vector3 named vector with 1 to the X
                component and false (equal to 0) to the Y component
            </p>
            <VectorCode
                value="(0, 1, 0)"
                operation="Set_XY"
                parameter="(1, false)"
                result="(1, 0, 0)"
            />

            <h1>Output Types</h1>
            <p>
                All modifiers return the same type parameter that it modifies. If it modifies a
                Vector3 then it will return a Vector3 value.
            </p>
        </div>
    );
}