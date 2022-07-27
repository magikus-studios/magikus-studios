import React from "react";
import CodeSnippet from "./CodeSnippet";

export default function Function(props) {

    var value = "Vector3 vector = new Vector3" + props.value;
    var line = "print(vector." + props.operation + props.parameter + ");";
    var comment = "// this prints: " + props.result;

    return (
        <CodeSnippet lines={[
            { line: value },
            { line: line, comment: comment },
        ]} />
    );
}