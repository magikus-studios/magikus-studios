import React from "react";
import Group from "Components/Group";

export default function Function() {

    
    return (
        <div className="c-light-2">           
            <h1 className="text-center">Files Utilities</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The File utilities provide a set of static methods designed to simplify file management for game development. 
            </h6>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                These methods allow developers to easily save and load data in various formats, including Text, Json, Binary, XML and CSV. 
                The utilities are particularly useful for handling serialized objects or basic text values.
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
                The following examples demonstrate how to use the File Utilities to save and load files in different formats.
            </p>
            <h4 className="c-light-1 p-3">Example 01: Saving and Loading a Text File</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Files/Files - 01.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-65" src="images/Library/Utilities/Files/Files - 02.jpg" alt=""/>            
            <h4 className="c-light-1 p-3">Example 02: Saving and Loading a JSON File</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Files/Files - 03.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-65" src="images/Library/Utilities/Files/Files - 04.jpg" alt=""/>            
            <h4 className="c-light-1 p-3">Example 03: Saving and Loading a Encrypted Bin File</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Files/Files - 05.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-65" src="images/Library/Utilities/Files/Files - 06.jpg" alt=""/>            
            <h4 className="c-light-1 p-3">Example 04: Saving and Loading a CSV File</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Files/Files - 07.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-65" src="images/Library/Utilities/Files/Files - 08.jpg" alt=""/>            

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>Ensure that classes used with JSON, Binary and XML saving methods are marked with [System.Serializable].</li>
                <li>The GetUniqueName method automatically appends a number to the file name if the file already exists, ensuring that no data is overwritten unintentionally.</li>
                <li>The directory structure for the specified file path is automatically created if it doesn't exist when saving files.</li>
                <li>When using encryption with Text and Binary files, make sure to use the same password when saving and loading files.</li>
                <li>The Csv methods assume that the data does not contain the separator characters. If your data may contain these characters, consider a different format.</li>
            </ul>
                        
            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The File utilities provide a powerful and flexible set of tools for managing save files in game development. 
                By supporting multiple formats and ensuring that the data is saved and loaded correctly, these utilities simplify the process of handling persistent data in Unity. 
                Whether you're saving high scores, player progress or any other type of data, these methods will help you manage it efficiently.
            </p>
       </div>
    );
}