import React from "react";
import DocBlock from "../../../../Components/DocBlock";

export default function Function() {
    return (
        <div>
            <DocBlock
                title="Value Mode"
                description="You can modify int, float, Vector2, Vector2Int, Vector3, Vector3Int, Color, Rect types as values. This means that if you use the method “targetVector2.Set_X(1)” this will return a new vector2 with the same value of Y but with the new value of X. However, the value of “targetVector2” is not changed. For example:"
                lines={[
                    { line: "Vector3 vector = new Vector3(1, 1, 1)" },
                    { line: "print(vector.Set_ZX(0));", comment: "// this prints: (0, 1, 0)" },
                    { line: "print(vector);", comment: "// this prints: (1, 1, 1)" },
                ]}
            />
            <DocBlock
                title="Ref Mode"
                description="You can modify int, float, Vector2, Vector2Int, Vector3, Vector3Int, Color, Rect types as reference values. This means that if you use the method “targetVector2.Set_X_Ref(1)” this will return the same vector2 with the same value of Y but with the new value of X, changing the original value of “targetVector2”. To use the ref mode you have to add the “_Ref” modifier to the method name. For example:"
                lines={[
                    { line: "Vector3 vector = new Vector3(1, 1, 1)" },
                    { line: "print(vector.Set_ZX_Ref(0));", comment: "// this prints: (0, 1, 0)" },
                    { line: "print(vector);", comment: "// this prints: (0, 1, 0)" },
                ]}
            />
        </div>
    );
}