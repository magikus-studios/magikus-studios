import React from "react";
import SimpleDocBlock from "../../../../Components/SimpleDocBlock"

export default function Function() {

    return (
        <div className="c-light-2 pb-4">
            <h1>Math Operations</h1>
            <SimpleDocBlock 
                title="Set:"
                description="This modifier sets the target component/s of the object with the value/s provided. For example:"
                value="(1, 1, 1)" operation="Set_ZX" parameter="(0)" result="(0, 1, 0)" />
            <SimpleDocBlock
                title="Add:"
                description="This modifier adds the target component/s of the object with the value/s provided. For example:"
                value="(1, 1, 1)" operation="Add_ZX" parameter="(1)" result="(2, 1, 2)" />
            <SimpleDocBlock
                title="Sub:"
                description="This modifier subtracts the target component/s of the object with the value/s provided. For example:"
                value="(1, 1, 1)" operation="Sub_ZX" parameter="(2)" result="(-1, 1, -1)" />
            <SimpleDocBlock
                title="Comp:"
                description="This modifier subtracts the value/s provided with the target component/s of the object. For example:"
                value="(1, 1, 1)" operation="Comp_ZX" parameter="(3)" result="(2, 1, 2)" />
            <SimpleDocBlock
                title="Prod:"
                description="This modifier multiplies the target component/s of the object with the value/s provided. For example:"
                value="(1, 1, 1)" operation="Prod_ZX" parameter="(3)" result="(3, 1, 3)" />
            <SimpleDocBlock
                title="Div:"
                description="This modifier divides the target component/s of the object with the value/s provided. For example:"
                value="(2, 2, 2)" operation="Div_ZX" parameter="(2)" result="(1, 1, 1)" />
            <SimpleDocBlock
                title="Mod:"
                description="This modifier applies the modulo operation (returns the remainder of the division) to the target component/s of the object with the value/s provided. For example:"
                value="(1, 2, 3)" operation="Mod_ZX" parameter="(2)" result="(1, 2, 1)" />
            <SimpleDocBlock
                title="Power:"
                description="This modifier elevates the target component/s of the object to the power of the value/s provided. For example:"
                value="(2, 2, 2)" operation="Power_ZX" parameter="(2)" result="(4, 2, 4)" />
            <SimpleDocBlock
                title="Root:"
                description="This modifier elevates the target component/s of the object to the root power of the value/s provided. For example:"
                value="(4, 4, 4)" operation="Root_ZX" parameter="(2)" result="(2, 4, 2)" />
            <SimpleDocBlock
                title="Square:"
                description="This modifier elevates the target component/s of the object to the power of 2. For example:"
                value="(2, 2, 2)" operation="Square_ZX" parameter="()" result="(4, 2, 4)" />
            <SimpleDocBlock
                title="Cube:"
                description="This modifier elevates the target component/s of the object to the power of 3. For example:"
                value="(2, 2, 2)" operation="Cube_ZX" parameter="()" result="(8, 2, 8)" />
            <SimpleDocBlock
                title="SquareRoot:"
                description="This modifier elevates the target component/s of the object to the root power of 2. For example:"
                value="(4, 4, 4)" operation="SquareRoot_ZX" parameter="()" result="(2, 4, 2)" />
            <SimpleDocBlock
                title="CubeRoot:"
                description="This modifier elevates the target component/s of the object to the root power of 3. For example:"
                value="(8, 8, 8)" operation="CubeRoot_ZX" parameter="()" result="(2, 8, 2)" />
            <SimpleDocBlock
                title="Log:"
                description="This modifier applies the log operation to the target component/s of the object with a base of the value/s provided. For example:"
                value="(2, 2, 2)" operation="Log_ZX" parameter="(2)" result="(1, 2, 1)" />
            <SimpleDocBlock
                title="LogTen:"
                description="This modifier applies the log operation to the target component/s of the object with a base of 10. For example:"
                value="(10, 10, 10)" operation="LogTen_ZX" parameter="()" result="(1, 10, 1)" />
            <SimpleDocBlock
                title="LogN:"
                description="This modifier applies the natural log operation to the target component/s of the object. For example:"
                value="(1, 1, 1)" operation="LogN_ZX" parameter="()" result="(0, 1, 0)" />
            <SimpleDocBlock
                title="Exp:"
                description="This modifier elevates e to power of the target component/s of the object. For example:"
                value="(1, 2, 2)" operation="Exp_ZX" parameter="()" result="(2.71828, 2, 7.38905)" />
        </div>
    );
}