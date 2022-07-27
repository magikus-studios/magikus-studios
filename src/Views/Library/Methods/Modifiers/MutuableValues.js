import React from "react";
import CodeSnippet from "Components/CodeSnippet";
import DocBlock from "Components/DocBlock";

export default function Function() {

    return (
        <div className="c-light-2 pb-4">
            <DocBlock
                title="Mutable Values"
                description="You can modify the inner aspects of component based objects. As all of these types are mutable objects, whenever they are changed, the internal vectors of these instances are changed (just as in the ref mode). For example:"
                lines={[
                    { line: "Transform transform = gameObject.transform;" },
                    { line: "Transform.position = new Vector3(1, 1, 1);" },
                    { line: " " },
                    { line: "transform.SetPositionZX(0);" },
                    { line: "print(transform.position);", comment: "// this prints: (0, 1, 0)" },
                ]
                }
            />

            <h1>Aspect Specifier</h1>
            <p>
                To modify a mutable value it is required to specify which aspect of it to modify. To
                do that the name of the method should have an Aspect specifier between the operation
                name and the target component with pascal case. For example:
            </p>
            <p>To set the X and Y component of the Position of a certain Transform named transform with 1 and 2</p>
            <CodeSnippet
                lines={[
                    { line: "Transform transform = gameObject.transform;" },
                    { line: "Transform.position = new Vector3(1, 1, 1);" },
                    { line: " " },
                    { line: "transform.SetPositionXY(1, 2);" },
                    { line: "print(transform.position);", comment: "// this prints: (1, 2, 0)" },
                ]}
            />
            <p>Here is a list of the aspect specifiers that applies to each transform based value:</p>
            <h5><b>Transform and GameObject type:</b></h5>
            <ul>
                <li>{"Position => to modify the position vector"}</li>
                <li>{"Rotation => to modify the localEuler vector"}</li>
                <li>{"Scale => to modify the localScale vector"}</li>
            </ul>
            <h5><b>RectTransform type</b></h5>
            <ul>
                <li>{"Position => to modify the anchoredPosition vector"}</li>
                <li>{"Scale => to modify the deltaSize vector"}</li>
            </ul>
        </div>
    );
}