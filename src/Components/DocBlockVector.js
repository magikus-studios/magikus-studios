import React from "react";
import VectorCode from "./VectorCode";

export default function Function(props) {

    return (
        <div className="c-light-2 pb-4">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <VectorCode value={props.value} operation={props.operation} parameter={props.parameter} result={props.result} />
        </div>
    );
}