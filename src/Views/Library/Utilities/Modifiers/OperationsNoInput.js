import React from "react";
import SimpleDocBlock from "../../../../Components/SimpleDocBlock"

export default function Function() {

    return (
        <div className="c-light-2 pb-4">
            <h1>No Input Operations</h1>
            <SimpleDocBlock
                title="Inverse:"
                description="This modifier inverts the target component/s of the object. For example:"
                value="(2, 2, 2)" operation="InverseZX" parameter="()" result="(0.5, 2, 0.5)" />
            <SimpleDocBlock
                title="Swap:"
                description="This modifier swaps the target components of the object to the right. For example:"
                value="(1, 2, 3)" operation="SwapZX" parameter="()" result="(3, 2, 1)" />
            <SimpleDocBlock
                title="Flat:"
                description="This modifier sets the target component/s of the object to 0. For example:"
                value="(1, 1, 1)" operation="FlatZX" parameter="()" result="(0, 1, 0)" />
            <SimpleDocBlock
                title="SetOne:"
                description="This modifier sets the target component/s of the object to 1. For example:"
                value="(0, 0, 0)" operation="SetOneZX" parameter="()" result="(1, 0, 1)" />
            <SimpleDocBlock
                title="Neg:"
                description="This modifier swaps the sign (‘+’ to ‘-‘ and ‘-‘ to ‘+’) of the target component/s of the object. For example:"
                value="(-1, 1, 1)" operation="NegZX" parameter="()" result="(1, 1, -1)" />
            <SimpleDocBlock
                title="Inverse:"
                description="This modifier inverts the target component/s of the object. For example:"
                value="(2, 2, 2)" operation="InverseZX" parameter="()" result="(0.5, 2, 0.5)" />
            <SimpleDocBlock
                title="Round:"
                description="This modifier rounds down the target component/s of the object. For example:"
                value="(1.4, 1.5, 1.6)" operation="RoundZX" parameter="()" result="(1, 1.5, 2)" />
            <SimpleDocBlock
                title="Floor:"
                description="This modifier rounds down the target component/s of the object. For example:"
                value="(1.4, 1.5, 1.6)" operation="FloorZX" parameter="()" result="(1, 1.5, 1)" />
            <SimpleDocBlock
                title="Ceil:"
                description="This modifier rounds up the target component/s of the object. For example:"
                value="(1.4, 1.5, 1.6)" operation="CeilZX" parameter="()" result="(2, 1.5, 2)" />
            <SimpleDocBlock
                title="Abs:"
                description="This modifier applies the modulus function (absolute value) to the target component/s of the object. For example:"
                value="(-1, -1, 1)" operation="AbsZX" parameter="()" result="(1, -1, 1)" />
            <SimpleDocBlock
                title="AbsNeg:"
                description="This modifier applies the modulus function (absolute value) to the target component/s of the object and returns the negative value. For example:"
                value="(-1, 1, 1)" operation="AbsNegZX" parameter="()" result="(-1, 1, -1)" />
            <SimpleDocBlock
                title="Sign:"
                description="This modifier applies the sign function to the target component/s of the object and returns the value of its sign (1, -1 or 0). For example:"
                value="(-2, 3, 0)" operation="SignZX" parameter="()" result="(-1, 1, 0)" />
        </div>
    );
}