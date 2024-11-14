import React from "react";
import Group from "Components/Group";

export default function Function() {

    
    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Adapt Utilities</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Methods for various Data Type Conversions and Formatting 
            </h6>
                        
            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Adapt utilities class provides a comprehensive suite of methods to transform various types, especially useful in game development using Unity. 
                They are particularly valuable for developers who need to adapt types frequently in their applications, providing a flexible and efficient solution to common programming tasks.
                By offering a range of conversions, from booleans to vectors, colors and actions, these utilities enhance code readability, reduce boilerplate and improve the overall developer experience. 
            </p>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                These methods facilitate transforming bool, int, floats, vectors, arrays, lists, colors and actions values into different representations, making data manipulation in Unity projects easier and more efficient.
            </p>

            <h3 className="p-2">How it Works</h3>
 
            <Group title="ToBin" content={(
                <div className="p-3">
                    <p className="pad-left-3">
                        Converts a bool value to its binary integer representation (0 or 1).
                    </p>
                    <h5 className="c-light-1 pad-left-3">Signature</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>ToBin</b1>(<b2>this bool</b2> <b1>value</b1>)</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>value</b1>: The boolean value to convert</li>                    
                    </ul>
                </div>
            )}/>

            <Group title="ToSign" content={(
                <div className="p-3">
                    <p className="pad-left-3">
                        Converts a bool value to a signed integer (1 for true, -1 for false).
                    </p>
                    <h5 className="c-light-1 pad-left-3">Signature</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>ToSign</b1>(<b2>this bool</b2> <b1>value</b1>)</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>value</b1>: The boolean value to convert</li>                    
                    </ul>
                </div>
            )}/>

            <Group title="ToLabel" content={(
                <div className="p-3">
                    <p className="pad-left-3">
                        Converts a bool value to a string label based on the specified label mode.
                    </p>
                    <h5 className="c-light-1 pad-left-3">Signature</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>ToLabel</b1>(<b2>this bool</b2> <b1>value</b1>, <b2>BOOL_LABEL_MODE</b2> <b1>mode = BOOL_LABEL_MODE.TrueFalse</b1>)</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>value</b1>: The boolean value to convert</li>
                        <li><b2>BOOL_LABEL_MODE</b2> <b1>mode</b1>: An optional label mode specifying the format of the label (TrueFalse, YesNo, HitMiss, OnOff, OkError or AcceptDecline)</li>
                    </ul>   
                </div>
            )}/>

            <Group title="ToVector2" content={(
                <div className="p-3">
                    <p className="pad-left-3">
                        Converts an int, float, Vector3, Vector2Int, Vector3Int values and array and lists of int and floats to a Vector2.
                    </p>
                    <h5 className="c-light-1 pad-left-3">Signature</h5>
                    <ul className="property-list">
                        <li><b2>Vector2</b2> <b1>ToVector2</b1>(<b2>this int</b2> <b1>value</b1>)</li>
                        <li><b2>Vector2</b2> <b1>ToVector2</b1>(<b2>this float</b2> <b1>value</b1>)</li>
                        <li><b2>Vector2</b2> <b1>ToVector2</b1>(<b2>this Vector3</b2> <b1>vector</b1>)</li>
                        <li><b2>Vector2</b2> <b1>ToVector2</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>)</li>
                        <li><b2>Vector2</b2> <b1>ToVector2</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>)</li>
                        <li><b2>Vector2</b2> <b1>ToVector2</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>)</li>
                        <li><b2>Vector2</b2> <b1>ToVector2</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>)</li>
                        <li><b2>Vector2</b2> <b1>ToVector2</b1>(<b2>this int[]</b2> <b1>array</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>Vector2</b2> <b1>ToVector2</b1>(<b2>this float[]</b2> <b1>array</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>Vector2</b2> <b1>ToVector2</b1>(<b2>this List{"<int>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>Vector2</b2> <b1>ToVector2</b1>(<b2>this List{"<float>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>value</b1>: The integer value to convert</li>                    
                        <li><b2>float</b2> <b1>value</b1>: The float value to convert</li>                    
                        <li><b2>Vector3</b2> <b1>vector</b1>: The vector to convert</li>                    
                        <li><b2>Vector2Int</b2> <b1>vector</b1>: The vector to convert</li>                    
                        <li><b2>Vector3Int</b2> <b1>vector</b1>: The vector to convert</li>                    
                        <li><b2>VECTOR</b2> <b1>axis</b1>: The axis values to use for the conversion</li>                    
                        <li><b2>int[]</b2> <b1>array</b1>: The array to convert</li>                    
                        <li><b2>float[]</b2> <b1>array</b1>: The array to convert</li>                    
                        <li><b2>List{"<int>"}</b2> <b1>list</b1>: The list to convert</li>                    
                        <li><b2>List{"<float>"}</b2> <b1>list</b1>: The list to convert</li>                    
                        <li><b2>int</b2> <b1>indexOffset</b1>: The index offset for array and list conversions</li>                    
                    </ul>
                </div>
            )}/>

            <Group title="ToVector3" content={(
                <div className="p-3">
                    <p className="pad-left-3">
                        Converts an int, float, Vector2, Vector2Int, Vector3Int values and array and lists of int and floats to a Vector3.
                    </p>
                    <h5 className="c-light-1 pad-left-3">Signature</h5>
                    <ul className="property-list">
                        <li><b2>Vector3</b2> <b1>ToVector3</b1>(<b2>this int</b2> <b1>value</b1>)</li>
                        <li><b2>Vector3</b2> <b1>ToVector3</b1>(<b2>this float</b2> <b1>value</b1>)</li>
                        <li><b2>Vector3</b2> <b1>ToVector3</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>float</b2> <b1>extraValue = 0</b1>)</li>
                        <li><b2>Vector3</b2> <b1>ToVector3</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>extraValue = 0</b1>)</li>
                        <li><b2>Vector3</b2> <b1>ToVector3</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>)</li>
                        <li><b2>Vector3</b2> <b1>ToVector3</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>)</li>
                        <li><b2>Vector3</b2> <b1>ToVector3</b1>(<b2>this int[]</b2> <b1>array</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>Vector3</b2> <b1>ToVector3</b1>(<b2>this float[]</b2> <b1>array</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>Vector3</b2> <b1>ToVector3</b1>(<b2>this List{"<int>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>Vector3</b2> <b1>ToVector3</b1>(<b2>this List{"<float>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>value</b1>: The integer value to convert</li>                    
                        <li><b2>float</b2> <b1>value</b1>: The float value to convert</li>                    
                        <li><b2>Vector2</b2> <b1>vector</b1>: The vector to convert</li>                    
                        <li><b2>Vector2Int</b2> <b1>vector</b1>: The vector to convert</li>                    
                        <li><b2>Vector3Int</b2> <b1>vector</b1>: The vector to convert</li>                    
                        <li><b2>float</b2> <b1>extraValue</b1>: The value of the third axis</li>                    
                        <li><b2>VECTOR</b2> <b1>axis</b1>: The axis values to use for the conversion</li>                    
                        <li><b2>int[]</b2> <b1>array</b1>: The array to convert</li>                    
                        <li><b2>float[]</b2> <b1>array</b1>: The array to convert</li>                    
                        <li><b2>List{"<int>"}</b2> <b1>list</b1>: The list to convert</li>                    
                        <li><b2>List{"<float>"}</b2> <b1>list</b1>: The list to convert</li>                    
                        <li><b2>int</b2> <b1>indexOffset</b1>: The index offset for array and list conversions</li>                    
                    </ul>
                </div>
            )}/>
         
            <Group title="ToVector2Int" content={(
                <div className="p-3">
                    <p className="pad-left-3">
                        Converts an int, float, Vector2, Vector3, Vector3Int values and array and lists of int and floats to a Vector2Int.
                    </p>
                    <h5 className="c-light-1 pad-left-3">Signature</h5>
                    <ul className="property-list">
                        <li><b2>Vector2Int</b2> <b1>ToVector2Int</b1>(<b2>this int</b2> <b1>value</b1>)</li>
                        <li><b2>Vector2Int</b2> <b1>ToVector2Int</b1>(<b2>this float</b2> <b1>value</b1>)</li>
                        <li><b2>Vector2Int</b2> <b1>ToVector2Int</b1>(<b2>this Vector2</b2> <b1>vector</b1>)</li>
                        <li><b2>Vector2Int</b2> <b1>ToVector2Int</b1>(<b2>this Vector3</b2> <b1>vector</b1>)</li>
                        <li><b2>Vector2Int</b2> <b1>ToVector2Int</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>)</li>
                        <li><b2>Vector2Int</b2> <b1>ToVector2Int</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>)</li>
                        <li><b2>Vector2Int</b2> <b1>ToVector2Int</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>)</li>
                        <li><b2>Vector2Int</b2> <b1>ToVector2Int</b1>(<b2>this int[]</b2> <b1>array</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>Vector2Int</b2> <b1>ToVector2Int</b1>(<b2>this float[]</b2> <b1>array</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>Vector2Int</b2> <b1>ToVector2Int</b1>(<b2>this List{"<int>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>Vector2Int</b2> <b1>ToVector2Int</b1>(<b2>this List{"<float>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>value</b1>: The integer value to convert</li>                    
                        <li><b2>float</b2> <b1>value</b1>: The float value to convert</li>                    
                        <li><b2>Vector2</b2> <b1>vector</b1>: The vector to convert</li>                    
                        <li><b2>Vector3</b2> <b1>vector</b1>: The vector to convert</li>                    
                        <li><b2>Vector3Int</b2> <b1>vector</b1>: The vector to convert</li>                    
                        <li><b2>VECTOR</b2> <b1>axis</b1>: The axis values to use for the conversion</li>                    
                        <li><b2>int[]</b2> <b1>array</b1>: The array to convert</li>                    
                        <li><b2>float[]</b2> <b1>array</b1>: The array to convert</li>                    
                        <li><b2>List{"<int>"}</b2> <b1>list</b1>: The list to convert</li>                    
                        <li><b2>List{"<float>"}</b2> <b1>list</b1>: The list to convert</li>                    
                        <li><b2>int</b2> <b1>indexOffset</b1>: The index offset for array and list conversions</li>                    
                    </ul>
                </div>
            )}/>

            <Group title="ToVector3Int" content={(
                <div className="p-3">
                    <p className="pad-left-3">
                        Converts an int, float, Vector2, Vector3, Vector2Int values and array and lists of int and floats to a Vector3Int.
                    </p>
                    <h5 className="c-light-1 pad-left-3">Signature</h5>
                    <ul className="property-list">
                        <li><b2>Vector3Int</b2> <b1>ToVector3Int</b1>(<b2>this int</b2> <b1>value</b1>)</li>
                        <li><b2>Vector3Int</b2> <b1>ToVector3Int</b1>(<b2>this float</b2> <b1>value</b1>)</li>
                        <li><b2>Vector3Int</b2> <b1>ToVector3Int</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>int</b2> <b1>extraValue = 0</b1>)</li>
                        <li><b2>Vector3Int</b2> <b1>ToVector3Int</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>extraValue = 0</b1>)</li>
                        <li><b2>Vector3Int</b2> <b1>ToVector3Int</b1>(<b2>this Vector3</b2> <b1>vector</b1>)</li>
                        <li><b2>Vector3Int</b2> <b1>ToVector3Int</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>)</li>
                        <li><b2>Vector3Int</b2> <b1>ToVector3Int</b1>(<b2>this int[]</b2> <b1>array</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>Vector3Int</b2> <b1>ToVector3Int</b1>(<b2>this float[]</b2> <b1>array</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>Vector3Int</b2> <b1>ToVector3Int</b1>(<b2>this List{"<int>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>Vector3Int</b2> <b1>ToVector3Int</b1>(<b2>this List{"<float>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>value</b1>: The integer value to convert</li>                    
                        <li><b2>float</b2> <b1>value</b1>: The float value to convert</li>                    
                        <li><b2>Vector2</b2> <b1>vector</b1>: The vector to convert</li>                    
                        <li><b2>Vector3</b2> <b1>vector</b1>: The vector to convert</li>                    
                        <li><b2>Vector2Int</b2> <b1>vector</b1>: The vector to convert</li>                    
                        <li><b2>int</b2> <b1>extraValue</b1>: The value of the third axis</li>                    
                        <li><b2>VECTOR</b2> <b1>axis</b1>: The axis values to use for the conversion</li>                    
                        <li><b2>int[]</b2> <b1>array</b1>: The array to convert</li>                    
                        <li><b2>float[]</b2> <b1>array</b1>: The array to convert</li>                    
                        <li><b2>List{"<int>"}</b2> <b1>list</b1>: The list to convert</li>                    
                        <li><b2>List{"<float>"}</b2> <b1>list</b1>: The list to convert</li>                    
                        <li><b2>int</b2> <b1>indexOffset</b1>: The index offset for array and list conversions</li>                    
                    </ul>
                </div>
            )}/>

            <Group title="ToArray" content={(
                <div className="p-3">
                    <p className="pad-left-3">
                        These methods convert Unity's Vector2, Vector3, Vector2Int and Vector3Int structures to arrays of float or int.
                    </p>
                    <h5 className="c-light-1 pad-left-3">Signature</h5>
                    <ul className="property-list">
                        <li><b2>float[]</b2> <b1>ToArray</b1>(<b2>this Vector2</b2> <b1>vector</b1>)</li>
                        <li><b2>float[]</b2> <b1>ToArray</b1>(<b2>this Vector3</b2> <b1>vector</b1>)</li>
                        <li><b2>int[]</b2> <b1>ToArray</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>)</li>
                        <li><b2>int[]</b2> <b1>ToArray</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>)</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Vector2</b2> <b1>vector</b1>: The vector to convert</li>                    
                        <li><b2>Vector3</b2> <b1>vector</b1>: The vector to convert</li>                    
                        <li><b2>Vector2Int</b2> <b1>vector</b1>: The vector to convert</li>                    
                        <li><b2>Vector3Int</b2> <b1>vector</b1>: The vector to convert</li>                    
                    </ul>
                </div>
            )}/>

            <Group title="ToList" content={(
                <div className="p-3">
                    <p className="pad-left-3">
                        These methods convert Unity's Vector2, Vector3, Vector2Int and Vector3Int structures to lists of float or int.
                    </p>
                    <h5 className="c-light-1 pad-left-3">Signature</h5>
                    <ul className="property-list">
                        <li><b2>List{"<float>"}</b2> <b1>ToList</b1>(<b2>this Vector2</b2> <b1>vector</b1>)</li>
                        <li><b2>List{"<float>"}</b2> <b1>ToList</b1>(<b2>this Vector3</b2> <b1>vector</b1>)</li>
                        <li><b2>List{"<int>"}</b2> <b1>ToList</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>)</li>
                        <li><b2>List{"<int>"}</b2> <b1>ToList</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>)</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Vector2</b2> <b1>vector</b1>: The vector to convert</li>                    
                        <li><b2>Vector3</b2> <b1>vector</b1>: The vector to convert</li>                    
                        <li><b2>Vector2Int</b2> <b1>vector</b1>: The vector to convert</li>                    
                        <li><b2>Vector3Int</b2> <b1>vector</b1>: The vector to convert</li>                    
                    </ul>
                </div>
            )}/>

            <Group title="ToHex" content={(
                <div className="p-3">
                    <p className="pad-left-3">
                        These methods convert various data types to their hexadecimal string representations.
                    </p>
                    <h5 className="c-light-1 pad-left-3">Signature</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>ToHex</b1>(<b2>this int</b2> <b1>value</b1>)</li>
                        <li><b2>string</b2> <b1>ToHex</b1>(<b2>this int</b2> <b1>value</b1>, <b2>int</b2> <b1>a</b1>)</li>
                        <li><b2>string</b2> <b1>ToHex</b1>(<b2>this float</b2> <b1>value</b1>)</li>
                        <li><b2>string</b2> <b1>ToHex</b1>(<b2>this float</b2> <b1>value</b1>, <b2>float</b2> <b1>a</b1>)</li>
                        <li><b2>string</b2> <b1>ToHex</b1>(<b2>this Color</b2> <b1>color</b1>)</li>
                        <li><b2>string</b2> <b1>ToHex</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>a</b1>)</li>
                        <li><b2>static string</b2> <b1>ToHex</b1>(<b2>int</b2> <b1>r</b1>, <b2>int</b2> <b1>g</b1>, <b2>int</b2> <b1>b</b1>)</li>
                        <li><b2>static string</b2> <b1>ToHex</b1>(<b2>int</b2> <b1>r</b1>, <b2>int</b2> <b1>g</b1>, <b2>int</b2> <b1>b</b1>, <b2>int</b2> <b1>a</b1>)</li>
                        <li><b2>static string</b2> <b1>ToHex</b1>(<b2>float</b2> <b1>r</b1>, <b2>float</b2> <b1>g</b1>, <b2>float</b2> <b1>b</b1>)</li>
                        <li><b2>static string</b2> <b1>ToHex</b1>(<b2>float</b2> <b1>r</b1>, <b2>float</b2> <b1>g</b1>, <b2>float</b2> <b1>b</b1>, <b2>float</b2> <b1>a</b1>)</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>value</b1>: The 0 to 255 value to convert</li>                    
                        <li><b2>float</b2> <b1>value</b1>: The 0f to 1f value to convert</li>                    
                        <li><b2>int</b2> <b1>r</b1>: The 0 to 255 red value to convert</li>                    
                        <li><b2>int</b2> <b1>g</b1>: The 0 to 255 green value to convert</li>                    
                        <li><b2>int</b2> <b1>b</b1>: The 0 to 255 blue value to convert</li>                    
                        <li><b2>int</b2> <b1>a</b1>: The 0 to 255 alpha value to convert</li>                    
                        <li><b2>float</b2> <b1>r</b1>: The 0f to 1f red value to convert</li>                    
                        <li><b2>float</b2> <b1>g</b1>: The 0f to 1f green value to convert</li>                    
                        <li><b2>float</b2> <b1>b</b1>: The 0f to 1f blue value to convert</li>                    
                        <li><b2>float</b2> <b1>a</b1>: The 0f to 1f alpha value to convert</li>                    
                        <li><b2>Color</b2> <b1>color</b1>: The Color object to convert</li>                    
                    </ul>
                </div>
            )}/>

            <Group title="ToColor" content={(
                <div className="p-3">
                    <p className="pad-left-3">
                        Converts a hexadecimal string, a denormalized int or a normalized float representation of a color to a Color object.
                    </p>
                    <h5 className="c-light-1 pad-left-3">Signature</h5>
                    <ul className="property-list">
                        <li><b2>Color</b2> <b1>ToColor</b1>(<b2>this string</b2> <b1>hex</b1>)</li>
                        <li><b2>Color</b2> <b1>ToColor</b1>(<b2>this int</b2> <b1>value</b1>)</li>
                        <li><b2>Color</b2> <b1>ToColor</b1>(<b2>this float</b2> <b1>value</b1>)</li>
                        <li><b2>Color</b2> <b1>ToColor</b1>(<b2>this int</b2> <b1>value</b1>, <b2>int</b2> <b1>a</b1>)</li>
                        <li><b2>Color</b2> <b1>ToColor</b1>(<b2>this float</b2> <b1>value</b1>, <b2>float</b2> <b1>a</b1>)</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>hex</b1>: The hexadecimal string to convert</li>                    
                        <li><b2>int</b2> <b1>value</b1>: The 0 to 255 value to convert</li>                    
                        <li><b2>float</b2> <b1>value</b1>: The 0f to 1f value to convert</li>                    
                        <li><b2>int</b2> <b1>a</b1>: The 0 to 255 alpha value to convert</li>                    
                        <li><b2>float</b2> <b1>a</b1>: The 0f to 1f alpha value to convert</li>                    
                    </ul>
                </div>
            )}/>

            <Group title="ToColorValue" content={(
                <div className="p-3">
                    <p className="pad-left-3">
                        Converts either an int or string value into a float value between 0f and 1f or a float or string value into an int value between 0 and 255.
                    </p>
                    <h5 className="c-light-1 pad-left-3">Signature</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>ToColorInt</b1>(<b2>this float</b2> <b1>value</b1>)</li>
                        <li><b2>int</b2> <b1>ToColorInt</b1>(<b2>this string</b2> <b1>hex</b1>)</li>
                        <li><b2>float</b2> <b1>ToColorFloat</b1>(<b2>this int</b2> <b1>value</b1>)</li>
                        <li><b2>float</b2> <b1>ToColorFloat</b1>(<b2>this string</b2> <b1>hex</b1>)</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>value</b1>: The value to normalize</li>                    
                        <li><b2>float</b2> <b1>value</b1>: The value to denormalize</li>                    
                        <li><b2>string</b2> <b1>hex</b1>: The hexadecimal string to convert</li>                    
                    </ul>
                </div>
            )}/>


            <Group title="ToAction" content={(
                <div className="p-3">
                    <p className="pad-left-3">
                        Converts a standard Action delegate to a UnityAction or a UnityEvent into a standard Action delegate.
                    </p>
                    <h5 className="c-light-1 pad-left-3">Signature</h5>
                    <ul className="property-list">
                        <li><b2>UnityAction</b2> <b1>ToAction</b1>(<b2>this Action</b2> <b1>action</b1>)</li>
                        <li><b2>UnityAction{"<T0>"}</b2> <b1>ToAction{"<T0>"}</b1>(<b2>this Action{"<T0>"}</b2> <b1>action</b1>)</li>
                        <li><b2>UnityAction{"<T0, T1>"}</b2> <b1>ToAction{"<T0, T1>"}</b1>(<b2>this Action{"<T0, T1>"}</b2> <b1>action</b1>)</li>
                        <li><b2>UnityAction{"<T0, T1, T2>"}</b2> <b1>ToAction{"<T0, T1, T2>"}</b1>(<b2>this Action{"<T0, T1, T2>"}</b2> <b1>action</b1>)</li>
                        <li><b2>UnityAction{"<T0, T1, T2, T3>"}</b2> <b1>ToAction{"<T0, T1, T2, T3>"}</b1>(<b2>this Action{"<T0, T1, T2, T3>"}</b2> <b1>action</b1>)</li>
                        <li><b2>Action</b2> <b1>ToAction</b1>(<b2>this UnityEvent</b2> <b1>action</b1>)</li>
                        <li><b2>Action{"<T0>"}</b2> <b1>ToAction{"<T0>"}</b1>(<b2>this UnityEvent{"<T0>"}</b2> <b1>action</b1>)</li>
                        <li><b2>Action{"<T0, T1>"}</b2> <b1>ToAction{"<T0, T1>"}</b1>(<b2>this UnityEvent{"<T0, T1>"}</b2> <b1>action</b1>)</li>
                        <li><b2>Action{"<T0, T1, T2>"}</b2> <b1>ToAction{"<T0, T1, T2>"}</b1>(<b2>this UnityEvent{"<T0, T1, T2>"}</b2> <b1>action</b1>)</li>
                        <li><b2>Action{"<T0, T1, T2, T3>"}</b2> <b1>ToAction{"<T0, T1, T2, T3>"}</b1>(<b2>this UnityEvent{"<T0, T1, T2, T3>"}</b2> <b1>action</b1>)</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Action</b2> <b1>action</b1>: The Action delegate with no parameters to convert</li>                    
                        <li><b2>Action{"<T0>"}</b2> <b1>action</b1>: The Action delegate with one parameter to convert</li>                    
                        <li><b2>Action{"<T0, T1>"}</b2> <b1>action</b1>: The Action delegate with two parameters to convert</li>                    
                        <li><b2>Action{"<T0, T1, T2>"}</b2> <b1>action</b1>: The Action delegate with three parameters to convert</li>                    
                        <li><b2>Action{"<T0, T1, T2, T3>"}</b2> <b1>action</b1>: The Action delegate with four parameters to convert</li>                    
                        <li><b2>UnityEvent</b2> <b1>action</b1>: The UnityEvent with no parameters to convert</li>                    
                        <li><b2>UnityEvent{"<T0>"}</b2> <b1>action</b1>: The UnityEvent with one parameter to convert</li>                    
                        <li><b2>UnityEvent{"<T0, T1>"}</b2> <b1>action</b1>: The UnityEvent with two parameters to convert</li>                    
                        <li><b2>UnityEvent{"<T0, T1, T2>"}</b2> <b1>action</b1>: The UnityEvent with three parameters to convert</li>                    
                        <li><b2>UnityEvent{"<T0, T1, T2, T3>"}</b2> <b1>action</b1>: The UnityEvent with four parameters to convert</li>                    
                    </ul>
                </div>
            )}/>


            <h3 className="p-2">How to Use</h3>
            <p className="pad-left-3">
                Below are examples demonstrating the usage of the Adapt utilities methods across various scenarios.
            </p>
            <img className="block-center mar-bottom-3 img-border w-100" src="images/Library/Utilities/Adapt/Adapt - 01.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-100" src="images/Library/Utilities/Adapt/Adapt - 02.jpg" alt=""/>            

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>Ensure that the Magikus namespace is included at the beginning of your script to access the Adapt utility methods.</li>
                <li>The methods are implemented as extension methods, so they can be called directly on the instances of the types they extend.</li>
                <li>Since these are extension methods, they add an additional layer of abstraction which may have minor performance implications in performance-critical applications.</li>
            </ul>
       </div>
    );
}