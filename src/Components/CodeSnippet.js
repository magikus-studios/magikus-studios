import React from "react";
import 'CSS/CodeSpinnet.css';

export default function Function(props) {

    return (
        <p className="code ft-mono">
            {
                props.lines.map((line, index) => {
                    return (
                        <span key={index}>
                            {index === 0 ? "" : <br />} {line.line} <i> {line.comment} </i>
                        </span>
                    )
                })
            } 
        </p>
    );
}