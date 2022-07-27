import React from "react";
import CodeSnippet from "./CodeSnippet";

export default function Function(props) {

    return (
        <div className="c-light-2 pb-4">
            <h1>{ props.title }</h1>
            <p>{ props.description }</p>
            <CodeSnippet lines={props.lines} />
        </div>
    );
}