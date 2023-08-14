import React from "react";
import SimpleDocBlock from "../../../../Components/SimpleDocBlock"

export default function Function() {

    return (
        <div className="c-light-2">
            <h1>Intrinsic Operations</h1>
            <SimpleDocBlock
                title="Inverse:"
                description="This modifier inverts the target component/s of the object. For example:"
                value="(2, 2, 2)" operation="Inverse_ZX" parameter="()" result="(0.5, 2, 0.5)" />
            <SimpleDocBlock
                title="Swap:"
                description="This modifier swaps the target components of the object to the right. For example:"
                value="(1, 2, 3)" operation="Swap_ZX" parameter="()" result="(3, 2, 1)" />
            <SimpleDocBlock
                title="Flat:"
                description="This modifier sets the target component/s of the object to 0. For example:"
                value="(1, 1, 1)" operation="Flat_ZX" parameter="()" result="(0, 1, 0)" />
            <SimpleDocBlock
                title="One:"
                description="This modifier sets the target component/s of the object to 1. For example:"
                value="(0, 0, 0)" operation="One_ZX" parameter="()" result="(1, 0, 1)" />
            <SimpleDocBlock
                title="Neg:"
                description="This modifier swaps the sign (‘+’ to ‘-‘ and ‘-‘ to ‘+’) of the target component/s of the object. For example:"
                value="(-1, 1, 1)" operation="Neg_ZX" parameter="()" result="(1, 1, -1)" />
            <SimpleDocBlock
                title="Round:"
                description="This modifier rounds down the target component/s of the object. For example:"
                value="(1.4, 1.5, 1.6)" operation="Round_ZX" parameter="()" result="(1, 1.5, 2)" />
            <SimpleDocBlock
                title="Floor:"
                description="This modifier rounds down the target component/s of the object. For example:"
                value="(1.4, 1.5, 1.6)" operation="Floor_ZX" parameter="()" result="(1, 1.5, 1)" />
            <SimpleDocBlock
                title="Ceil:"
                description="This modifier rounds up the target component/s of the object. For example:"
                value="(1.4, 1.5, 1.6)" operation="Ceil_ZX" parameter="()" result="(2, 1.5, 2)" />
            <SimpleDocBlock
                title="Abs:"
                description="This modifier applies the modulus function (absolute value) to the target component/s of the object. For example:"
                value="(-1, -1, 1)" operation="Abs_ZX" parameter="()" result="(1, -1, 1)" />
            <SimpleDocBlock
                title="AbsNeg:"
                description="This modifier applies the modulus function (absolute value) to the target component/s of the object and returns the negative value. For example:"
                value="(-1, 1, 1)" operation="AbsNeg_ZX" parameter="()" result="(-1, 1, -1)" />
            <SimpleDocBlock
                title="Sign:"
                description="This modifier applies the sign function to the target component/s of the object and returns the value of its sign (1, -1 or 0). For example:"
                value="(-2, 3, 0)" operation="Sign_ZX" parameter="()" result="(-1, 1, 0)" />
        </div>
    );
}