import React from "react";
import VectorCode from "Components/VectorCode";

export default function Function() {

    return (
        <div className="c-light-2 pb-4">
            <h1>Target Components</h1>
            <p>
                To define which components to modify, all modifiers have to specify the
                component name after the operation name (in upper case). For example:
            </p>
            <p>To set the X and Y component of a certain Vector3 named vector with 1 and 2</p>
            <VectorCode 
                value="(0, 0, 0)"
                operation="SetXY"
                parameter="(1, 2)"
                result="(1, 2, 0)"
            />
            <p>The order in which the components name are placed matter. Here is a list of the order in which the components should be placed:</p>
            <div className="row">
                <div className="col-md-12 col-lg-6">
                    <h5><b>int or float type:</b></h5>
                    <ul>
                        <li>{"int and float types don’t require this."}</li>
                    </ul>
                    <h5><b>Vector2 or Vector2Int type:</b></h5>
                    <ul>
                        <li>{"X => for X component"}</li>
                        <li>{"Y => for Y component"}</li>
                        <li>{"XY => for X and Y component"}</li>
                    </ul>
                </div>
                <div className="col-md-12 col-lg-6">
                    <h5><b>Vector3 or Vector3Int type:</b></h5>
                    <ul>
                        <li>{"X => for X component"}</li>
                        <li>{"Y => for Y component"}</li>
                        <li>{"Z => for Z component"}</li>
                        <li>{"XY => for X and Y component"}</li>
                        <li>{"YZ => for Y and Z component"}</li>
                        <li>{"ZX => for Z and X component"}</li>
                        <li>{"XYZ => for X, Y and Z component"}</li>
                    </ul>
                </div>
                <div className="col-md-12 col-lg-6">
                    <h5>Color type:</h5>
                    <ul>
                        <li>{"R => for R component"}</li>
                        <li>{"G => for G component"}</li>
                        <li>{"B => for B component"}</li>
                        <li>{"A => for A component"}</li>
                        <li>{"RG => for R and G component"}</li>
                        <li>{"GB => for G and B component"}</li>
                        <li>{"BR => for B and R component"}</li>
                        <li>{"RA => for R and A component"}</li>
                        <li>{"GA => for G and A component"}</li>
                        <li>{"BA => for B and A component"}</li>
                        <li>{"RGB => for R, G and B component"}</li>
                        <li>{"RGA => for R, G and A component"}</li>
                        <li>{"GBA => for G, B and A component"}</li>
                        <li>{"BRA => for B, R and A component"}</li>
                        <li>{"RGBA => for R, G, B and A component"}</li>
                    </ul>
                </div>
                <div className="col-md-12 col-lg-6">
                    <h5>Rect type:</h5>
                    <ul>
                        <li>{"X => for X component"}</li>
                        <li>{"Y => for Y component"}</li>
                        <li>{"W => for W component"}</li>
                        <li>{"H => for H component"}</li>
                        <li>{"XY => for X and Y component"}</li>
                        <li>{"WH => for W and H component"}</li>
                        <li>{"XW => for X and W component"}</li>
                        <li>{"XH => for X and H component"}</li>
                        <li>{"YW => for Y and W component"}</li>
                        <li>{"YH => for Y and H component"}</li>
                        <li>{"XYW => for X, Y and W component"}</li>
                        <li>{"XYH => for X, Y and H component"}</li>
                        <li>{"XWH => for X, W and H component"}</li>
                        <li>{"YWH => for Y, W and H component"}</li>
                        <li>{"XYWH => for X, Y, W and H component"}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}