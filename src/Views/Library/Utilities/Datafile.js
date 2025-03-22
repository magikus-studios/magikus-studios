import React from "react";
import Group from "Components/Group";

export default function Function() {

    
    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Datafile Utilities</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Methods designed to Simplify File Management for Game Development 
            </h6>
                        
            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Datafile utilities provide a powerful and flexible set of tools for managing save files in game development. 
                By supporting multiple formats and ensuring that the data is saved and loaded correctly, these utilities simplify the process of handling persistent data in Unity. 
                Whether you're saving high scores, player progress or any other type of data, these methods will help you manage it efficiently.
            </p>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                These methods allow developers to easily save and load data in various formats, including Text, Json, Binary, XML and CSV. 
                The utilities are particularly useful for handling serialized objects or basic text values.
            </p>
            <Group title="DataPath" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>static string</b2> <b1>DataPath</b1>: Retrieves the appropriate file path for storing data based on the environment (Unity Editor or Runtime).</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="CreatePath" content={(
                <div>
                    <p>
                        Ensures that the directory structure for the specified file path exists, creating any necessary directories.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static void</b2> <b1>CreatePath</b1>(<b2>string</b2> <b1>filePath</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>filePath</b1>: The file path for which the directory structure needs to be created</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="GetUniqueName" content={(
                <div>
                    <p>
                        Generates a unique file name by appending a number if the file already exists.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static string</b2> <b1>GetUniqueName</b1>(<b2>string</b2> <b1>filePath</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>filePath</b1>: The original file path for which a unique name is required</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="IsSaved" content={(
                <div>
                    <p>
                        Checks if a file already exists at the specified path.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static bool</b2> <b1>IsSaved</b1>(<b2>string</b2> <b1>filePath</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>filePath</b1>: The file path to check</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="IsSerializable<T>" content={(
                <div>
                    <p>
                        Validates whether the provided generic type T is serializable.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static bool</b2> <b1>IsSerializable{"<T>"}</b1>()</li>
                    </ul>
                </div>
            )}/>
            <Group title="Encrypt" content={(
                <div>
                    <p>
                        Returns an encrypted string of the data using AES encryption.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static string</b2> <b1>Encrypt</b1>(<b2>string</b2> <b1>data</b1>, <b2>string</b2> <b1>password</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>data</b1>: The string data to encrypt</li>                    
                        <li><b2>string</b2> <b1>password</b1>: The string to use as a key to encrypt</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Dencrypt" content={(
                <div>
                    <p>
                        Returns a dencrypted string of the data using AES encryption.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static string</b2> <b1>Dencrypt</b1>(<b2>string</b2> <b1>data</b1>, <b2>string</b2> <b1>password</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>data</b1>: The string data to dencrypt</li>                    
                        <li><b2>string</b2> <b1>password</b1>: The string to use as a key to dencrypt</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Txt" content={(
                <div>
                    <p>
                        Saving and loading a text file.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static void</b2> <b1>Txt.Save</b1>(<b2>string</b2> <b1>data</b1>, <b2>string</b2> <b1>filePath</b1>, <b2>string</b2> <b1>password = null</b1>)</li>
                        <li><b2>static void</b2> <b1>Txt.Save</b1>(<b2>string</b2> <b1>data</b1>, <b2>string</b2> <b1>filePath</b1>, <b2>bool</b2> <b1>overwrite = false</b1>, <b2>string</b2> <b1>password = null</b1>)</li>
                        <li><b2>static string</b2> <b1>Txt.Load</b1>(<b2>string</b2> <b1>filePath</b1>, <b2>string</b2> <b1>password = null</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>data</b1>: The string data to save</li>                    
                        <li><b2>string</b2> <b1>filePath</b1>: The file path to use for saving or loading</li>                    
                        <li><b2>bool</b2> <b1>overwrite</b1>: When set to true, this option allows the new file to replace an existing file with the same name. If set to false, a unique file name will be generated to prevent overwriting the existing file</li>                    
                        <li><b2>string</b2> <b1>password</b1>: If not null, the data will be encrypted with the password before being saved (if this is the case, rememeber to load it using the same password)</li>                                            
                    </ul>
                </div>
            )}/>
            <Group title="Json" content={(
                <div>
                    <p>
                        Serializes an object of type T into JSON format and saves it or Loads a JSON file and deserializes it into an object of type T.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static void</b2> <b1>Json.Save{"<T>"}</b1>(<b2>T</b2> <b1>data</b1>, <b2>string</b2> <b1>filePath</b1>, <b2>bool</b2> <b1>overwrite = false</b1>)</li>
                        <li><b2>static T</b2> <b1>Json.Load{"<T>"}</b1>(<b2>string</b2> <b1>filePath</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>T</b2> <b1>data</b1>: The serialized object data to save</li>                    
                        <li><b2>string</b2> <b1>filePath</b1>: The file path to use for saving or loading</li>                    
                        <li><b2>bool</b2> <b1>overwrite</b1>: When set to true, this option allows the new file to replace an existing file with the same name. If set to false, a unique file name will be generated to prevent overwriting the existing file</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Bin" content={(
                <div>
                    <p>
                        Serializes an object of type T into JSON, converts it to binary, and saves it or Loads a binary file, converts it back to JSON, and deserializes it into an object of type T.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static void</b2> <b1>Bin.Save{"<T>"}</b1>(<b2>T</b2> <b1>data</b1>, <b2>string</b2> <b1>filePath</b1>, <b2>string</b2> <b1>password = null</b1>)</li>
                        <li><b2>static void</b2> <b1>Bin.Save{"<T>"}</b1>(<b2>T</b2> <b1>data</b1>, <b2>string</b2> <b1>filePath</b1>, <b2>bool</b2> <b1>overwrite = false</b1>, <b2>string</b2> <b1>password = null</b1>)</li>
                        <li><b2>static T</b2> <b1>Bin.Load{"<T>"}</b1>(<b2>string</b2> <b1>filePath</b1>, <b2>string</b2> <b1>password = null</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>T</b2> <b1>data</b1>: The serialized object data to save</li>                    
                        <li><b2>string</b2> <b1>filePath</b1>: The file path to use for saving or loading</li>                    
                        <li><b2>bool</b2> <b1>overwrite</b1>: When set to true, this option allows the new file to replace an existing file with the same name. If set to false, a unique file name will be generated to prevent overwriting the existing file</li>                    
                        <li><b2>string</b2> <b1>password</b1>: If not null, the data will be encrypted with the password before being saved (if this is the case, rememeber to load it using the same password)</li>                                            
                    </ul>
                </div>
            )}/>
            <Group title="Xml" content={(
                <div>
                    <p>
                        Serializes an object of type T into XML format and saves it or Loads an XML file and deserializes it into an object of type T.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static void</b2> <b1>Xml.Save{"<T>"}</b1>(<b2>T</b2> <b1>data</b1>, <b2>string</b2> <b1>filePath</b1>, <b2>bool</b2> <b1>overwrite = false</b1>)</li>
                        <li><b2>static T</b2> <b1>Xml.Load{"<T>"}</b1>(<b2>string</b2> <b1>filePath</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>T</b2> <b1>data</b1>: The serialized object data to save</li>                    
                        <li><b2>string</b2> <b1>filePath</b1>: The file path to use for saving or loading</li>                    
                        <li><b2>bool</b2> <b1>overwrite</b1>: When set to true, this option allows the new file to replace an existing file with the same name. If set to false, a unique file name will be generated to prevent overwriting the existing file</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Csv" content={(
                <div>
                    <p>
                        Methods for converting a DataTable or a 2D string array to CSV format and saving it or loading a CSV file and converting it to a 2D string array or DataTable.
                        Also, converts a DataTable or a 2D string array into a CSV string or a CSV string into a 2D string array or DataTable.
                        The PrintTable method logs the contents of a 2D string array or DataTable in a readable format.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static void</b2> <b1>Csv.Save</b1>(<b2>string[][]</b2> <b1>data</b1>, <b2>string</b2> <b1>filePath</b1>, <b2>bool</b2> <b1>overwrite = false</b1>, <b2>char</b2> <b1>columnSeparator = ','</b1>, <b2>char</b2> <b1>rowSeparator = '\n'</b1>)</li>
                        <li><b2>static void</b2> <b1>Csv.Save</b1>(<b2>DataTable</b2> <b1>data</b1>, <b2>string</b2> <b1>filePath</b1>, <b2>bool</b2> <b1>overwrite = false</b1>, <b2>char</b2> <b1>columnSeparator = ','</b1>, <b2>char</b2> <b1>rowSeparator = '\n'</b1>)</li>
                        <li><b2>static string[][]</b2> <b1>Csv.LoadArray</b1>(<b2>string</b2> <b1>filePath</b1>, <b2>char</b2> <b1>columnSeparator = ','</b1>, <b2>char</b2> <b1>rowSeparator = '\n'</b1>)</li>
                        <li><b2>static DataTable</b2> <b1>Csv.LoadDataTable</b1>(<b2>string</b2> <b1>filePath</b1>, <b2>char</b2> <b1>columnSeparator = ','</b1>, <b2>char</b2> <b1>rowSeparator = '\n'</b1>)</li>                        
                        <li><b2>static string</b2> <b1>Csv.ToCsv</b1>(<b2>string[][]</b2> <b1>data</b1>, <b2>char</b2> <b1>columnSeparator = ','</b1>, <b2>char</b2> <b1>rowSeparator = '\n'</b1>)</li>
                        <li><b2>static string</b2> <b1>Csv.ToCsv</b1>(<b2>DataTable</b2> <b1>data</b1>, <b2>char</b2> <b1>columnSeparator = ','</b1>, <b2>char</b2> <b1>rowSeparator = '\n'</b1>)</li>
                        <li><b2>static string[][]</b2> <b1>Csv.ToArray</b1>(<b2>string</b2> <b1>csv</b1>, <b2>char</b2> <b1>columnSeparator = ','</b1>, <b2>char</b2> <b1>rowSeparator = '\n'</b1>)</li>
                        <li><b2>static DataTable</b2> <b1>Csv.ToDataTable</b1>(<b2>string</b2> <b1>csv</b1>, <b2>char</b2> <b1>columnSeparator = ','</b1>, <b2>char</b2> <b1>rowSeparator = '\n'</b1>)</li>
                        <li><b2>static void</b2> <b1>Csv.PrintTable</b1>(<b2>string[][]</b2> <b1>table</b1>)</li>
                        <li><b2>static void</b2> <b1>Csv.PrintTable</b1>(<b2>DataTable</b2> <b1>table</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>DataTable</b2> <b1>data</b1>: The data to save to a CSV file</li>                    
                        <li><b2>string[][]</b2> <b1>data</b1>: The data to save to a CSV file</li>                    
                        <li><b2>string</b2> <b1>filePath</b1>: The file path to use for saving or loading</li>                    
                        <li><b2>bool</b2> <b1>overwrite</b1>: When set to true, this option allows the new file to replace an existing file with the same name. If set to false, a unique file name will be generated to prevent overwriting the existing file</li>                    
                        <li><b2>char</b2> <b1>columnSeparator</b1>: The character used as a separator between columns</li>              
                        <li><b2>char</b2> <b1>rowSeparator</b1>: The character used as a separator between rows</li>                  
                        <li><b2>string</b2> <b1>csv</b1>: The CSV string to convert into a DataTable or string[][] array</li>                    
                        <li><b2>string[][]</b2> <b1>table</b1>: The array to print as a table</li>                    
                    </ul>
                </div>
            )}/>

            <h3 className="p-2">Examples</h3>
            <p className="pad-left-3">
                The following examples demonstrate how to use the Datafile Utilities to save and load files in different formats.
            </p>
            <Group title="Example 01: Saving and Loading a Text File" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border w-90" src="images/Library/Utilities/Datafile/Datafile - 01.jpg" alt=""/>            
                    <p>
                        This script demonstrates how to save and load a text file using the Magikus library in Unity. 
                        It sets a file path, saves the string "Hello, World!" to a text file and then loads and prints the content of that file using the Datafile.Txt.Save and Datafile.Txt.Load methods.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-65" src="images/Library/Utilities/Datafile/Datafile - 02.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 02: Saving and Loading a JSON File" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border w-90" src="images/Library/Utilities/Datafile/Datafile - 03.jpg" alt=""/>            
                    <p>
                        This example demonstrates how to save and load player data using JSON format in Unity.
                        The script creates a PlayerData object with a player's name and score, saves it as a JSON file at a specified data path and then loads the data back into a new PlayerData object.
                        The loaded data is displayed in the Unity console using Debug.Log.
                        The class PlayerData is marked as [System.Serializable] to ensure it can be serialized into JSON format.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-65" src="images/Library/Utilities/Datafile/Datafile - 04.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 03: Saving and Loading a Encrypted Bin File" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border w-90" src="images/Library/Utilities/Datafile/Datafile - 05.jpg" alt=""/>            
                    <p>
                        This example demonstrates how to save and load game state data using encryption. 
                        A GameState class, which holds information like player position, score and difficulty, is created. 
                        The Save method encrypts and stores the data in a specified binary file using a password. 
                        The Load method decrypts and retrieves the data, allowing the game to resume with the saved state.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-65" src="images/Library/Utilities/Datafile/Datafile - 06.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 04: Saving and Loading a CSV File" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border w-90" src="images/Library/Utilities/Datafile/Datafile - 07.jpg" alt=""/>            
                    <p>
                        This example demonstrates how to save and load CSV data using the Magikus library. 
                        A 2D string array is created to represent a table of names and scores, which is then saved as a CSV file. 
                        The CSV file is loaded back into both a 2D string array and a DataTable, and the data is printed to the console in both formats.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-65" src="images/Library/Utilities/Datafile/Datafile - 08.jpg" alt=""/>            
                </div>
            )}/>

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>Ensure that classes used with JSON, Binary and XML saving methods are marked with [System.Serializable].</li>
                <li>The GetUniqueName method automatically appends a number to the file name if the file already exists, ensuring that no data is overwritten unintentionally.</li>
                <li>The directory structure for the specified file path is automatically created if it doesn't exist when saving files.</li>
                <li>When using encryption with Text and Binary files, make sure to use the same password when saving and loading files.</li>
                <li>The Csv methods assume that the data does not contain the separator characters. If your data may contain these characters, consider a different format.</li>
            </ul>
       </div>
    );
}