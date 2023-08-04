import React from "react";
import SimpleDocBlock from "../../../../Components/SimpleDocBlock"

export default function Function() {

    return (
        <div className="c-light-2 pb-4">
            <h1>Clamp Operations</h1>
            <SimpleDocBlock
                title="Clamp:"
                description="This modifier clamps the value of the target component/s of the object between the min and max values provided so that if the value is greater than max then it will be set to max and if the value is lower than min then the value is set to min. For example:"
                value="(-1, 1, 3)" operation="Clamp_XYZ" parameter="(0, 2)" result="(0, 1, 2)" />
            <SimpleDocBlock
                title="ClampRange:"
                description="This modifier clamps the value of the target component/s of the object between a min and max value where min value is equal to the center value minus the range value (min = center - range) and the max value is equal to the center value plus the range value (max = center + range). For example:"
                value="(0, 2, 4)" operation="ClampRange_XYZ" parameter="(2, 1)" result="(1, 2, 3)" />
            <SimpleDocBlock
                title="ClampMin:"
                description="This modifiers clamps the value of the target component/s of the object only if it is lower than a min value provided so that if the value is lower than the min value then it will be set to min. For example:"
                value="(-1, 1, 3)" operation="ClampMin_ZX" parameter="(2)" result="(2, 1, 3)" />
            <SimpleDocBlock
                title="ClampMax:"
                description="This modifiers clamps the value of the target component/s of the object only if it is greater than a max value provided so that if the value is greater than the max value then it will be set to max. For example:"
                value="(-1, 1, 3)" operation="ClampMax_ZX" parameter="(2)" result="(-1, 1, 2)" />
            <SimpleDocBlock
                title="ClampPos:"
                description="This modifier clamps the value of the target component/s of the object between 0 and the max value provided so that if the value is greater than max then it will be set to max and if the value is lower than 0 then the value is set to 0. For example:"
                value="(-1, 1, 3)" operation="ClampPos_ZX" parameter="(2)" result="(0, 1, 2)" />
            <SimpleDocBlock
                title="ClampNeg:"
                description="This modifier clamps the value of the target component/s of the object between the min value provided and 0 so that if the value is greater than 0 then it will be set to 0 and if the value is lower than min then the value is set to min. For example:"
                value="(-1, 1, 3)" operation="ClampNeg_ZX" parameter="(-2)" result="(-1, 1, 0)" />
            <SimpleDocBlock
                title="ClampAbs:"
                description="This modifier clamps the value of the target component/s of the object between the -abs and abs value provided so that if the value is greater than abs then it will be set to abs and if the value is lower than -abs then the value is set to -abs. For example:"
                value="(-1, 1, 3)" operation="ClampAbs_ZX" parameter="(0.5)" result="(-0.5, 1, 0.5)" />
            <SimpleDocBlock
                title="ClampAbsOne:"
                description="This modifier clamps the value of the target component/s of the object between -1 and 1 so that if the value is greater than 1 then it will be set to 1 and if the value is lower than -1 then the value is set to -1. For example:"
                value="(-2, 1, 3)" operation="ClampAbsOne_ZX" parameter="()" result="(-1, 1, 1)" />
            <SimpleDocBlock
                title="ClampBin:"
                description="This modifier clamps the value of the target component/s of the object between 0 and 1 so that if the value is greater than 1 then it will be set to 1 and if the value is lower than 0 then the value is set to 0. For example:"
                value="(-1, 1, 3)" operation="ClampBin_ZX" parameter="()" result="(0, 1, 1)" />
        </div>
    );
}