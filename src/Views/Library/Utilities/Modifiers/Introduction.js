import React from "react";
import DocBlockVector from "../../../../Components/DocBlockVector";

export default function Function() {

    return (
        <div className="c-light-2 pb-4">
            <DocBlockVector
                title="Definition"
                description="Modifiers are a set of helper methods that modify the inner value of the target object. All modifiers are designed as extended methods, this means that you can access them through the targeted object. For example:"
                value="(1, 1, 1)"
                operation="SetZX"
                parameter="(0)"
                result="(0, 1, 0)"
            />
            
            <div className="pb-4">
                <h1>Nomenclature</h1>
                <h4>(Naming Convention)</h4>
                <p>
                    All modifier methods follow a specific nomenclature to invoke them. Here is the
                    general naming convention for all modifiers:
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

            <DocBlockVector
                title="Bool Values as Int Values"
                description="With modifiers you can always use bool values as an integer value. This will just transform a “true“ value into a “1” and a “false” value into a “0”. So, whenever you need to use a boolean value as an integer, using the binary logic, you can use it without going through a variable change. This operation “targetVector2.SetX(false)” is the same as doing this “targetVector2 = new Vector2(x?1:0 ,targetVector2.y)” operation. For example:"
                value="(1, 1, 1)"
                operation="SetZX"
                parameter="(false)"
                result="(0, 1, 0)"
            />
        </div>
    );
}