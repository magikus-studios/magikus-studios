import React from "react";
import Group from "Components/Group";

export default function Function() {

    
    return (
        <div className="c-light-2">           
            <h1 className="text-center">Text Utilities</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Text utilities provide a comprehensive set of static and extension methods for string and character manipulation. 
            </h6>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                These methods allow users to perform various operations on strings and characters, such as checking for conditions, counting occurrences or modifying content. 
                The utilities are flexible, offering several ways to manipulate string data based on an index, character types or even enum-based conditions.
            </p>

            <h3 className="p-2">How it Works</h3>
 
            <Group title="Vector2" content={(
                <div className="p-3">
                    <p className="pad-left-3">
                        Creates a Vector2 instance with both components set to the same value, by copying the values from another Vector2 or with specified x and y components.
                    </p>
                    <h5 className="c-light-1 pad-left-3">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector2</b2> <b1>Vector2</b1>(<b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Vector2</b1>(<b2>Vector2</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Vector2</b1>(<b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>)</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>value</b1>: The value to set for both the x and y components</li>                    
                        <li><b2>Vector2</b2> <b1>vector</b1>: The source Vector2 from which to copy values</li>                    
                        <li><b2>float</b2> <b1>x</b1>: The value for the x component</li>                    
                        <li><b2>float</b2> <b1>y</b1>: The value for the y component</li>                    
                    </ul>
                </div>
            )}/>



            <h3 className="p-2">How to Use</h3>
            <p className="pad-left-3">
                This section provides detailed examples on how to use the Text utilities methods effectively.
            </p>
            <h4 className="c-light-1 p-3">Example 01: String Inspection</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Text/Text - 01.jpg" alt=""/>            
            <h4 className="c-light-1 p-3">Example 02: String Modification</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Text/Text - 02.jpg" alt=""/>            
            <h4 className="c-light-1 p-3">Example 03: Complex String Manipulation</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Text/Text - 03.jpg" alt=""/>            

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>When using the methods that wrap indexes, such as GetIndex and GetChar, remember that the offset is circular, meaning an offset of -1 will wrap around to the last character in the string.</li>
                <li>Many methods accept enums such as SPECIAL_CHAR and COMPARISON to allow for highly customizable conditions and operations.</li>
                <li>Methods that involve shifting or moving characters like ShiftLeft or MoveToEnd modify the order but do not change the original string. Instead, they return a new string.</li>
            </ul>
                        
            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The Text utilities provide a rich set of tools to manipulate and analyze strings in an efficient and flexible manner. 
                Whether you're counting occurrences, modifying content or checking for specific patterns, these utilities are designed to make string manipulation easy and intuitive. 
                By using the powerful methods available, developers can streamline complex string-related tasks and ensure that their applications handle text data effectively.
            </p>
       </div>
    );
}