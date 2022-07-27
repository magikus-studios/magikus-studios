import React from "react";
import VectorCode from "./VectorCode";

export default function Function(props) {

    return (
        <div>
            <p><b>{props.title}</b> {props.description}</p>
            <VectorCode value={props.value} operation={props.operation} parameter={props.parameter} result={props.result} />
        </div>
    );
}