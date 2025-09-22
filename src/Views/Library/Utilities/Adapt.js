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
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-40" src="images/Library/Utilities/Adapt/Adapt - 09.jpg" alt=""/>            
            </div>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                These methods facilitate transforming bool, int, floats, vectors, arrays, lists, colors and actions values into different representations, making data manipulation in Unity projects easier and more efficient.
            </p> 
            <Group title="ToBin" content={(
                <div>
                    <p>
                        Converts a bool value to its binary integer representation (0 or 1).
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>ToBin</b1>(<b2>this bool</b2> <b1>value</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>value</b1>: The boolean value to convert</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="ToSign" content={(
                <div>
                    <p>
                        Converts a bool value to a signed integer (1 for true, -1 for false).
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>ToSign</b1>(<b2>this bool</b2> <b1>value</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>value</b1>: The boolean value to convert</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="ToLabel" content={(
                <div>
                    <p>
                        Converts a bool value to a string label based on the specified label mode.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static string</b2> <b1>ToLabel</b1>(<b2>this bool</b2> <b1>value</b1>, <b2>BOOL_LABEL_MODE</b2> <b1>mode = BOOL_LABEL_MODE.TrueFalse</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>value</b1>: The boolean value to convert</li>
                        <li><b2>BOOL_LABEL_MODE</b2> <b1>mode</b1>: An optional label mode specifying the format of the label (TrueFalse, YesNo, HitMiss, OnOff, OkError or AcceptDecline)</li>
                    </ul>   
                </div>
            )}/>
            <Group title="ToVector2" content={(
                <div>
                    <p>
                        Converts an int, float, Vector3, Vector2Int, Vector3Int values and array and lists of int and floats to a Vector2.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector2</b2> <b1>ToVector2</b1>(<b2>this int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>ToVector2</b1>(<b2>this float</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>ToVector2</b1>(<b2>this Vector3</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>ToVector2</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>ToVector2</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>ToVector2</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>ToVector2</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>ToVector2</b1>(<b2>this int[]</b2> <b1>array</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>ToVector2</b1>(<b2>this float[]</b2> <b1>array</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>ToVector2</b1>(<b2>this List{"<int>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>ToVector2</b1>(<b2>this List{"<float>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
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
                <div>
                    <p>
                        Converts an int, float, Vector2, Vector2Int, Vector3Int values and array and lists of int and floats to a Vector3.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector3</b2> <b1>ToVector3</b1>(<b2>this int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>ToVector3</b1>(<b2>this float</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>ToVector3</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>float</b2> <b1>extraValue = 0</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>ToVector3</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>extraValue = 0</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>ToVector3</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>ToVector3</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>ToVector3</b1>(<b2>this int[]</b2> <b1>array</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>ToVector3</b1>(<b2>this float[]</b2> <b1>array</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>ToVector3</b1>(<b2>this List{"<int>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>ToVector3</b1>(<b2>this List{"<float>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
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
                <div>
                    <p>
                        Converts an int, float, Vector2, Vector3, Vector3Int values and array and lists of int and floats to a Vector2Int.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector2Int</b2> <b1>ToVector2Int</b1>(<b2>this int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>ToVector2Int</b1>(<b2>this float</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>ToVector2Int</b1>(<b2>this Vector2</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>ToVector2Int</b1>(<b2>this Vector3</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>ToVector2Int</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>ToVector2Int</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>ToVector2Int</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>ToVector2Int</b1>(<b2>this int[]</b2> <b1>array</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>ToVector2Int</b1>(<b2>this float[]</b2> <b1>array</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>ToVector2Int</b1>(<b2>this List{"<int>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>ToVector2Int</b1>(<b2>this List{"<float>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
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
                <div>
                    <p>
                        Converts an int, float, Vector2, Vector3, Vector2Int values and array and lists of int and floats to a Vector3Int.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector3Int</b2> <b1>ToVector3Int</b1>(<b2>this int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>ToVector3Int</b1>(<b2>this float</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>ToVector3Int</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>int</b2> <b1>extraValue = 0</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>ToVector3Int</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>extraValue = 0</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>ToVector3Int</b1>(<b2>this Vector3</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>ToVector3Int</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>ToVector3Int</b1>(<b2>this int[]</b2> <b1>array</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>ToVector3Int</b1>(<b2>this float[]</b2> <b1>array</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>ToVector3Int</b1>(<b2>this List{"<int>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>ToVector3Int</b1>(<b2>this List{"<float>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
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
                <div>
                    <p>
                        These methods convert Unity's Vector2, Vector3, Vector2Int and Vector3Int structures to arrays of float or int.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static float[]</b2> <b1>ToArray</b1>(<b2>this Vector2</b2> <b1>vector</b1>)</li>
                        <li><b2>static float[]</b2> <b1>ToArray</b1>(<b2>this Vector3</b2> <b1>vector</b1>)</li>
                        <li><b2>static int[]</b2> <b1>ToArray</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>)</li>
                        <li><b2>static int[]</b2> <b1>ToArray</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Vector2</b2> <b1>vector</b1>: The vector to convert</li>                    
                        <li><b2>Vector3</b2> <b1>vector</b1>: The vector to convert</li>                    
                        <li><b2>Vector2Int</b2> <b1>vector</b1>: The vector to convert</li>                    
                        <li><b2>Vector3Int</b2> <b1>vector</b1>: The vector to convert</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="ToList" content={(
                <div>
                    <p>
                        These methods convert Unity's Vector2, Vector3, Vector2Int and Vector3Int structures to lists of float or int.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static List{"<float>"}</b2> <b1>ToList</b1>(<b2>this Vector2</b2> <b1>vector</b1>)</li>
                        <li><b2>static List{"<float>"}</b2> <b1>ToList</b1>(<b2>this Vector3</b2> <b1>vector</b1>)</li>
                        <li><b2>static List{"<int>"}</b2> <b1>ToList</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>)</li>
                        <li><b2>static List{"<int>"}</b2> <b1>ToList</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Vector2</b2> <b1>vector</b1>: The vector to convert</li>                    
                        <li><b2>Vector3</b2> <b1>vector</b1>: The vector to convert</li>                    
                        <li><b2>Vector2Int</b2> <b1>vector</b1>: The vector to convert</li>                    
                        <li><b2>Vector3Int</b2> <b1>vector</b1>: The vector to convert</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="ToHex" content={(
                <div>
                    <p>
                        These methods convert various data types to their hexadecimal string representations.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static string</b2> <b1>ToHex</b1>(<b2>this int</b2> <b1>value</b1>)</li>
                        <li><b2>static string</b2> <b1>ToHex</b1>(<b2>this int</b2> <b1>value</b1>, <b2>int</b2> <b1>a</b1>)</li>
                        <li><b2>static string</b2> <b1>ToHex</b1>(<b2>this float</b2> <b1>value</b1>)</li>
                        <li><b2>static string</b2> <b1>ToHex</b1>(<b2>this float</b2> <b1>value</b1>, <b2>float</b2> <b1>a</b1>)</li>
                        <li><b2>static string</b2> <b1>ToHex</b1>(<b2>this Color</b2> <b1>color</b1>)</li>
                        <li><b2>static string</b2> <b1>ToHex</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>a</b1>)</li>
                        <li><b2>static string</b2> <b1>ToHex</b1>(<b2>int</b2> <b1>r</b1>, <b2>int</b2> <b1>g</b1>, <b2>int</b2> <b1>b</b1>)</li>
                        <li><b2>static string</b2> <b1>ToHex</b1>(<b2>int</b2> <b1>r</b1>, <b2>int</b2> <b1>g</b1>, <b2>int</b2> <b1>b</b1>, <b2>int</b2> <b1>a</b1>)</li>
                        <li><b2>static string</b2> <b1>ToHex</b1>(<b2>float</b2> <b1>r</b1>, <b2>float</b2> <b1>g</b1>, <b2>float</b2> <b1>b</b1>)</li>
                        <li><b2>static string</b2> <b1>ToHex</b1>(<b2>float</b2> <b1>r</b1>, <b2>float</b2> <b1>g</b1>, <b2>float</b2> <b1>b</b1>, <b2>float</b2> <b1>a</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
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
            <Group title="ToColorTag" content={(
                <div>
                    <p>
                        Converts a named color string (e.g., "red", "blue") into a corresponding Color value. 
                        Supports a predefined set of friendly color names. 
                        If the string doesn't match a known name, it falls back to parsing the string as a hexadecimal color using ToColor().
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Color</b2> <b1>ToColorTag</b1>(<b2>this string</b2> <b1>colorTag</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>colorTag</b1>: The name of the color or a hexadecimal color string</li>                    
                        <em>Options:</em> <b1>red</b1> | <b1>blue</b1> | <b1>yellow</b1> | <b1>green</b1> | <b1>white</b1> | <b1>grey</b1> | <b1>darkgrey</b1> | <b1>black</b1> | <b1>hex</b1>
                    </ul>
                </div>
            )}/>
            <Group title="ToColor" content={(
                <div>
                    <p>
                        Converts a hexadecimal string, a denormalized int or a normalized float representation of a color to a Color object.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Color</b2> <b1>ToColor</b1>(<b2>this string</b2> <b1>hex</b1>)</li>
                        <li><b2>static Color</b2> <b1>ToColor</b1>(<b2>this int</b2> <b1>value</b1>)</li>
                        <li><b2>static Color</b2> <b1>ToColor</b1>(<b2>this float</b2> <b1>value</b1>)</li>
                        <li><b2>static Color</b2> <b1>ToColor</b1>(<b2>this int</b2> <b1>value</b1>, <b2>int</b2> <b1>a</b1>)</li>
                        <li><b2>static Color</b2> <b1>ToColor</b1>(<b2>this float</b2> <b1>value</b1>, <b2>float</b2> <b1>a</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
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
                <div>
                    <p>
                        Converts either an int or string value into a float value between 0f and 1f or a float or string value into an int value between 0 and 255.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>ToColorInt</b1>(<b2>this float</b2> <b1>value</b1>)</li>
                        <li><b2>static int</b2> <b1>ToColorInt</b1>(<b2>this string</b2> <b1>hex</b1>)</li>
                        <li><b2>static float</b2> <b1>ToColorFloat</b1>(<b2>this int</b2> <b1>value</b1>)</li>
                        <li><b2>static float</b2> <b1>ToColorFloat</b1>(<b2>this string</b2> <b1>hex</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>value</b1>: The value to normalize</li>                    
                        <li><b2>float</b2> <b1>value</b1>: The value to denormalize</li>                    
                        <li><b2>string</b2> <b1>hex</b1>: The hexadecimal string to convert</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="ToAction" content={(
                <div>
                    <p>
                        Converts a standard Action delegate to a UnityAction or a UnityEvent into a standard Action delegate.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static UnityAction</b2> <b1>ToAction</b1>(<b2>this Action</b2> <b1>action</b1>)</li>
                        <li><b2>static UnityAction{"<T0>"}</b2> <b1>ToAction{"<T0>"}</b1>(<b2>this Action{"<T0>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static UnityAction{"<T0, T1>"}</b2> <b1>ToAction{"<T0, T1>"}</b1>(<b2>this Action{"<T0, T1>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static UnityAction{"<T0, T1, T2>"}</b2> <b1>ToAction{"<T0, T1, T2>"}</b1>(<b2>this Action{"<T0, T1, T2>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static UnityAction{"<T0, T1, T2, T3>"}</b2> <b1>ToAction{"<T0, T1, T2, T3>"}</b1>(<b2>this Action{"<T0, T1, T2, T3>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static Action</b2> <b1>ToAction</b1>(<b2>this UnityEvent</b2> <b1>action</b1>)</li>
                        <li><b2>static Action{"<T0>"}</b2> <b1>ToAction{"<T0>"}</b1>(<b2>this UnityEvent{"<T0>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static Action{"<T0, T1>"}</b2> <b1>ToAction{"<T0, T1>"}</b1>(<b2>this UnityEvent{"<T0, T1>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static Action{"<T0, T1, T2>"}</b2> <b1>ToAction{"<T0, T1, T2>"}</b1>(<b2>this UnityEvent{"<T0, T1, T2>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static Action{"<T0, T1, T2, T3>"}</b2> <b1>ToAction{"<T0, T1, T2, T3>"}</b1>(<b2>this UnityEvent{"<T0, T1, T2, T3>"}</b2> <b1>action</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
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
            <Group title="ToEven" content={(
                <div>
                    <p>
                        Converts an int index value to its even integer representation [i x 2].
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>ToEven</b1>(<b2>this int</b2> <b1>value</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>value</b1>: The integer value to convert</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="ToOdd" content={(
                <div>
                    <p>
                        Converts an int index value to its odd integer representation [(i x 2) + 1].
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>ToOdd</b1>(<b2>this int</b2> <b1>value</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>value</b1>: The integer value to convert</li>                    
                    </ul>
                </div>
            )}/>

            <h3 className="p-2">Examples</h3>
            <Group title="Example 01: Boolean Adaptation" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Adapt/Adapt - 01.jpg" alt=""/>            
                    <p>
                        This example demonstrates how to convert a boolean value into different representations using the Adapt utility. 
                        It converts a boolean (true or false) into a binary value (1 or 0), a signed integer (1 or -1) and a labeled string ("Yes" or "No") based on a specified label mode. 
                        The results are then logged to the console.                        
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Adapt/Adapt - 02.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 02: Converting Numbers to Vectors" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Adapt/Adapt - 03.jpg" alt=""/>            
                    <p>
                        This example demonstrates how to use the Adapt utilities to convert integer and float values into Vector2, Vector3, Vector2Int and Vector3Int. 
                        It shows how a single number can be transformed into a vector where all components share the same value, making it easier to work with numerical data in a vectorized format within Unity.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Adapt/Adapt - 04.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 03: Converting Colors to Hex and Back" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Adapt/Adapt - 05.jpg" alt=""/>            
                    <p>
                        This example demonstrates how to convert a Color to a hexadecimal string using the ToHex() method and then back to a Color using Adapt.ToColor().
                        The script logs both conversions, showing how colors can be stored and retrieved in hex format for flexible color management in Unity.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Adapt/Adapt - 06.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 04: Converting System.Action to UnityAction" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Adapt/Adapt - 07.jpg" alt=""/>            
                    <p>
                        This example demonstrates how to convert a System.Action delegate to a UnityAction in Unity. 
                        An Action is created that logs a message to the console, and then it's converted into a UnityAction using the ToAction() method. 
                        A UnityEvent is instantiated, and the UnityAction is added as a listener. 
                        Finally, the UnityEvent.Invoke() method is called to trigger the action and output the message.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Adapt/Adapt - 08.jpg" alt=""/>            
                </div>
            )}/>

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>Ensure that the Magikus namespace is included at the beginning of your script to access the Adapt utility methods.</li>
                <li>The methods are implemented as extension methods, so they can be called directly on the instances of the types they extend.</li>
                <li>Since these are extension methods, they add an additional layer of abstraction which may have minor performance implications in performance-critical applications.</li>
            </ul>
       </div>
    );
}
