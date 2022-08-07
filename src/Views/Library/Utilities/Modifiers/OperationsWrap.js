import React from "react";
import SimpleDocBlock from "../../../../Components/SimpleDocBlock"

export default function Function() {

    return (
        <div className="c-light-2 pb-4">
            <h1>Wrap Operations</h1>
            <SimpleDocBlock
                title="Wrap:"
                description="This modifier wraps the value of the target component/s of the object around the min and max values provided so that if the value is always in the interval between min and max and if it is outside of the interval then it will subtract (or add, if it is lower than the interval) the interval length to the value and start the process again until the resulting value fits between the min and max interval. This way the value is trapped inside the interval and whenever it moves to either end of the interval it will start off the other end. For example:"
                value="(-1, 1, 3)" operation="Wrap_XYZ" parameter="(0, 2)" result="(1, 1, 1)" />
            <SimpleDocBlock
                title="WrapRange:"
                description="This modifier wraps the value of the target component/s of the object around the min and max values, where min value is equal to the center value minus the range value (min = center - range) and the max value is equal to the center value plus the range value (max = center + range), so that if the value is always in the interval between min and max and if it is outside of the interval then it will subtract (or add, if it is lower than the interval) the interval length to the value and start the process again until the resulting value fits between the min and max interval. This way the value is trapped inside the interval and whenever it moves to either end of the interval it will start off the other end. For example:"
                value="(-2, 1, 3)" operation="WrapRange_XYZ" parameter="(0, 1)" result="(1, 1, 0)" />
            <SimpleDocBlock
                title="WrapPos:"
                description="This modifier wraps the value of the target component/s of the object around 0 and the max value provided so that if the value is always in the interval between 0 and max and if it is outside of the interval then it will subtract (or add, if it is lower than the interval) the interval length to the value and start the process again until the resulting value fits between the 0 and max interval. This way the value is trapped inside the interval and whenever it moves to either end of the interval it will start off the other end. For example:"
                value="(-1, 1, 3)" operation="WrapPos_ZX" parameter="(2)" result="(2, 1, 0)" />
            <SimpleDocBlock
                title="WrapNeg:"
                description="This modifier wrap the value of the target component/s of the object around the min value provided and 0 so that if the value is always in the interval between min and 0 and if it is outside of the interval then it will subtract (or add, if it is lower than the interval) the interval length to the value and start the process again until the resulting value fits between the min and 0 interval. This way the value is trapped inside the interval and whenever it moves to either end of the interval it will start off the other end. For example:"
                value="(-3, 1, 1)" operation="WrapNeg_ZX" parameter="(-2)" result="(0, 1, -2)" />
            <SimpleDocBlock
                title="WrapAbs:"
                description="This modifier wraps the value of the target component/s of the object around the -abs and abs value provided so that if the value is always in the interval between -abs and abs and if it is outside of the interval then it will subtract (or add, if it is lower than the interval) the interval length to the value and start the process again until the resulting value fits between the -abs and abs interval. This way the value is trapped inside the interval and whenever it moves to either end of the interval it will start off the other end. For example:"
                value="(-3, 1, 3)" operation="WrapAbs_ZX" parameter="(2)" result="(2, 1, -2)" />
            <SimpleDocBlock
                title="WrapAbsOne:"
                description="This modifier wraps the value of the target component/s of the object around -1 and 1 so that if the value is always in the interval between -1 and 1 and if it is outside of the interval then it will subtract (or add, if it is lower than the interval) the interval length to the value and start the process again until the resulting value fits between -1 and 1 interval. This way the value is trapped inside the interval and whenever it moves to either end of the interval it will start off the other end. For example:"
                value="(-2, 1, 3)" operation="WrapAbsOne_ZX" parameter="()" result="(1, 1, 0)" />
            <SimpleDocBlock
                title="WrapBin:"
                description="This modifier wraps the value of the target component/s of the object around 0 and 1 so that if the value is always in the interval between 0 and 1 and if it is outside of the interval then it will subtract (or add, if it is lower than the interval) the interval length to the value and start the process again until the resulting value fits between 0 and 1 interval. This way the value is trapped inside the interval and whenever it moves to either end of the interval it will start off the other end. For example:"
                value="(-1, 1, 3)" operation="WrapBin_ZX" parameter="()" result="(1, 1, 1)" />
        </div>
    );
}