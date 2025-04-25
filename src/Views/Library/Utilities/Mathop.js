import React from "react";
import Group from "Components/Group";

export default function Function() {

    
    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Mathop Utilities</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Methods that provide Operations for Basic Number and Mathematical Manipulations
            </h6>
                        
            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Mathop utilities provide a powerful set of static and extension methods for performing mathematical operations across a variety of data types. 
                These methods simplify common tasks like clamping, wrapping or applying arithmetic transformations, making them invaluable for game development and UI manipulation. 
                By offering consistent method signatures across different types, they ensure that developers can handle complex mathematical computations with minimal effort.
            </p>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The methods are designed to simplify complex mathematical operations while offering flexibility across multiple data types. 
                These methods are applicable to types like int, float, Vector2, Vector3, Vector2Int, Vector3Int, Color and Rect. 
                They include operations such as Add, Multiply, Complement, Modulo, Power, Root, Inverse, Abs, Sign, Min, Max, Clamp, ClampRange, Wrap and WrapRange.
            </p> 
            <Group title="Set" content={(
                <div>
                    <p>
                        Sets a given value to the base value or axis value of a vector, color or rect.                       
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector2</b2> <b1>Set</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>SetX</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>SetY</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <br/>
                        <li><b2>static Vector3</b2> <b1>Set</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>SetX</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>SetY</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>SetZ</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <br/>
                        <li><b2>static Vector2Int</b2> <b1>Set</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>SetX</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>SetY</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <br/>
                        <li><b2>static Vector3Int</b2> <b1>Set</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>SetX</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>SetY</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>SetZ</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <br/>
                        <li><b2>static Color</b2> <b1>Set</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Color</b2> <b1>Set</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>COLOR</b2> <b1>mode</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Color</b2> <b1>Set</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>r</b1>, <b2>float</b2> <b1>g</b1>, <b2>float</b2> <b1>b</b1>)</li>
                        <li><b2>static Color</b2> <b1>Set</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>Color</b2> <b1>value</b1>)</li>
                        <li><b2>static Color</b2> <b1>SetR</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Color</b2> <b1>SetG</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Color</b2> <b1>SetB</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Color</b2> <b1>SetA</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <br/>
                        <li><b2>static Rect</b2> <b1>Set</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>RECT</b2> <b1>mode</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>SetX</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>SetY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>SetW</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>SetH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <br/>
                        <li><b2>static Rect</b2> <b1>SetXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>SetXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>SetXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>)</li>
                        <br/>
                        <li><b2>static Rect</b2> <b1>SetWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>SetWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>SetWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>w</b1>, <b2>float</b2> <b1>h</b1>)</li>
                        <br/>
                        <li><b2>static Transform</b2> <b1>SetPosition</b1>(<b2>this Transform</b2> <b1>target</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Transform</b2> <b1>SetPosition</b1>(<b2>this Transform</b2> <b1>target</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Transform</b2> <b1>SetPosition</b1>(<b2>this Transform</b2> <b1>target</b1>, <b2>Vector3</b2> <b1>value</b1>)</li>
                        <li><b2>static Transform</b2> <b1>SetPosition</b1>(<b2>this Transform</b2> <b1>target</b1>, <b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>, <b2>float</b2> <b1>z</b1>)</li>
                        <li><b2>static Transform</b2> <b1>SetPositionX</b1>(<b2>this Transform</b2> <b1>target</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Transform</b2> <b1>SetPositionY</b1>(<b2>this Transform</b2> <b1>target</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Transform</b2> <b1>SetPositionZ</b1>(<b2>this Transform</b2> <b1>target</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <br/>
                        <li><b2>static Transform</b2> <b1>SetRotation</b1>(<b2>this Transform</b2> <b1>target</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Transform</b2> <b1>SetRotation</b1>(<b2>this Transform</b2> <b1>target</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Transform</b2> <b1>SetRotation</b1>(<b2>this Transform</b2> <b1>target</b1>, <b2>Vector3</b2> <b1>value</b1>)</li>
                        <li><b2>static Transform</b2> <b1>SetRotation</b1>(<b2>this Transform</b2> <b1>target</b1>, <b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>, <b2>float</b2> <b1>z</b1>)</li>
                        <li><b2>static Transform</b2> <b1>SetRotationX</b1>(<b2>this Transform</b2> <b1>target</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Transform</b2> <b1>SetRotationY</b1>(<b2>this Transform</b2> <b1>target</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Transform</b2> <b1>SetRotationZ</b1>(<b2>this Transform</b2> <b1>target</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <br/>
                        <li><b2>static Transform</b2> <b1>SetScale</b1>(<b2>this Transform</b2> <b1>target</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Transform</b2> <b1>SetScale</b1>(<b2>this Transform</b2> <b1>target</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Transform</b2> <b1>SetScale</b1>(<b2>this Transform</b2> <b1>target</b1>, <b2>Vector3</b2> <b1>value</b1>)</li>
                        <li><b2>static Transform</b2> <b1>SetScale</b1>(<b2>this Transform</b2> <b1>target</b1>, <b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>, <b2>float</b2> <b1>z</b1>)</li>
                        <li><b2>static Transform</b2> <b1>SetScaleX</b1>(<b2>this Transform</b2> <b1>target</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Transform</b2> <b1>SetScaleY</b1>(<b2>this Transform</b2> <b1>target</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Transform</b2> <b1>SetScaleZ</b1>(<b2>this Transform</b2> <b1>target</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <br/>
                        <li><b2>static SpriteRenderer</b2> <b1>SetR</b1>(<b2>this SpriteRenderer</b2> <b1>sprite</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static SpriteRenderer</b2> <b1>SetG</b1>(<b2>this SpriteRenderer</b2> <b1>sprite</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static SpriteRenderer</b2> <b1>SetB</b1>(<b2>this SpriteRenderer</b2> <b1>sprite</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static SpriteRenderer</b2> <b1>SetA</b1>(<b2>this SpriteRenderer</b2> <b1>sprite</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static SpriteRenderer</b2> <b1>SetRG</b1>(<b2>this SpriteRenderer</b2> <b1>sprite</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static SpriteRenderer</b2> <b1>SetGB</b1>(<b2>this SpriteRenderer</b2> <b1>sprite</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static SpriteRenderer</b2> <b1>SetBR</b1>(<b2>this SpriteRenderer</b2> <b1>sprite</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static SpriteRenderer</b2> <b1>SetRG</b1>(<b2>this SpriteRenderer</b2> <b1>sprite</b1>, <b2>float</b2> <b1>r</b1>, <b2>float</b2> <b1>g</b1>)</li>
                        <li><b2>static SpriteRenderer</b2> <b1>SetGB</b1>(<b2>this SpriteRenderer</b2> <b1>sprite</b1>, <b2>float</b2> <b1>g</b1>, <b2>float</b2> <b1>b</b1>)</li>
                        <li><b2>static SpriteRenderer</b2> <b1>SetBR</b1>(<b2>this SpriteRenderer</b2> <b1>sprite</b1>, <b2>float</b2> <b1>b</b1>, <b2>float</b2> <b1>r</b1>)</li>
                        <li><b2>static SpriteRenderer</b2> <b1>SetColor</b1>(<b2>this SpriteRenderer</b2> <b1>sprite</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static SpriteRenderer</b2> <b1>SetColor</b1>(<b2>this SpriteRenderer</b2> <b1>sprite</b1>, <b2>float</b2> <b1>value</b1>, <b2>float</b2> <b1>a</b1>)</li>
                        <li><b2>static SpriteRenderer</b2> <b1>SetColor</b1>(<b2>this SpriteRenderer</b2> <b1>sprite</b1>, <b2>float</b2> <b1>r</b1>, <b2>float</b2> <b1>g</b1>, <b2>float</b2> <b1>b</b1>)</li>
                        <li><b2>static SpriteRenderer</b2> <b1>SetColor</b1>(<b2>this SpriteRenderer</b2> <b1>sprite</b1>, <b2>float</b2> <b1>r</b1>, <b2>float</b2> <b1>g</b1>, <b2>float</b2> <b1>b</b1>, <b2>float</b2> <b1>a</b1>)</li>
                        <li><b2>static SpriteRenderer</b2> <b1>SetColor</b1>(<b2>this SpriteRenderer</b2> <b1>sprite</b1>, <b2>Color</b2> <b1>value</b1>, <b2>float</b2> <b1>a</b1>)</li>
                        <li><b2>static SpriteRenderer</b2> <b1>SetColor</b1>(<b2>this SpriteRenderer</b2> <b1>sprite</b1>, <b2>Color</b2> <b1>value</b1>, <b2>bool</b2> <b1>modifyAlpha = false</b1>)</li>
                        <br/>
                        <li><b2>static Image</b2> <b1>SetR</b1>(<b2>this Image</b2> <b1>sprite</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Image</b2> <b1>SetG</b1>(<b2>this Image</b2> <b1>sprite</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Image</b2> <b1>SetB</b1>(<b2>this Image</b2> <b1>sprite</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Image</b2> <b1>SetA</b1>(<b2>this Image</b2> <b1>sprite</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Image</b2> <b1>SetRG</b1>(<b2>this Image</b2> <b1>sprite</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Image</b2> <b1>SetGB</b1>(<b2>this Image</b2> <b1>sprite</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Image</b2> <b1>SetBR</b1>(<b2>this Image</b2> <b1>sprite</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Image</b2> <b1>SetRG</b1>(<b2>this Image</b2> <b1>sprite</b1>, <b2>float</b2> <b1>r</b1>, <b2>float</b2> <b1>g</b1>)</li>
                        <li><b2>static Image</b2> <b1>SetGB</b1>(<b2>this Image</b2> <b1>sprite</b1>, <b2>float</b2> <b1>g</b1>, <b2>float</b2> <b1>b</b1>)</li>
                        <li><b2>static Image</b2> <b1>SetBR</b1>(<b2>this Image</b2> <b1>sprite</b1>, <b2>float</b2> <b1>b</b1>, <b2>float</b2> <b1>r</b1>)</li>
                        <li><b2>static Image</b2> <b1>SetColor</b1>(<b2>this Image</b2> <b1>sprite</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Image</b2> <b1>SetColor</b1>(<b2>this Image</b2> <b1>sprite</b1>, <b2>float</b2> <b1>value</b1>, <b2>float</b2> <b1>a</b1>)</li>
                        <li><b2>static Image</b2> <b1>SetColor</b1>(<b2>this Image</b2> <b1>sprite</b1>, <b2>float</b2> <b1>r</b1>, <b2>float</b2> <b1>g</b1>, <b2>float</b2> <b1>b</b1>)</li>
                        <li><b2>static Image</b2> <b1>SetColor</b1>(<b2>this Image</b2> <b1>sprite</b1>, <b2>float</b2> <b1>r</b1>, <b2>float</b2> <b1>g</b1>, <b2>float</b2> <b1>b</b1>, <b2>float</b2> <b1>a</b1>)</li>
                        <li><b2>static Image</b2> <b1>SetColor</b1>(<b2>this Image</b2> <b1>sprite</b1>, <b2>Color</b2> <b1>value</b1>, <b2>float</b2> <b1>a</b1>)</li>
                        <li><b2>static Image</b2> <b1>SetColor</b1>(<b2>this Image</b2> <b1>sprite</b1>, <b2>Color</b2> <b1>value</b1>, <b2>bool</b2> <b1>modifyAlpha = false</b1>)</li>
                        <br/>
                        <li><b2>static RectTransform</b2> <b1>SetX</b1>(<b2>this RectTransform</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static RectTransform</b2> <b1>SetY</b1>(<b2>this RectTransform</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static RectTransform</b2> <b1>SetW</b1>(<b2>this RectTransform</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static RectTransform</b2> <b1>SetH</b1>(<b2>this RectTransform</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <br/>
                        <li><b2>static RectTransform</b2> <b1>SetXY</b1>(<b2>this RectTransform</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static RectTransform</b2> <b1>SetXY</b1>(<b2>this RectTransform</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>value</b1>)</li>
                        <li><b2>static RectTransform</b2> <b1>SetXY</b1>(<b2>this RectTransform</b2> <b1>rect</b1>, <b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>)</li>
                        <br/>
                        <li><b2>static RectTransform</b2> <b1>SetWH</b1>(<b2>this RectTransform</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static RectTransform</b2> <b1>SetWH</b1>(<b2>this RectTransform</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>value</b1>)</li>
                        <li><b2>static RectTransform</b2> <b1>SetWH</b1>(<b2>this RectTransform</b2> <b1>rect</b1>, <b2>float</b2> <b1>w</b1>, <b2>float</b2> <b1>h</b1>)</li>
                        <br/>
                        <li><b2>static RectTransform</b2> <b1>SetRect</b1>(<b2>this RectTransform</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static RectTransform</b2> <b1>SetRect</b1>(<b2>this RectTransform</b2> <b1>rect</b1>, <b2>Rect</b2> <b1>value</b1>)</li>
                        <li><b2>static RectTransform</b2> <b1>SetRect</b1>(<b2>this RectTransform</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>position</b1>, <b2>Vector2</b2> <b1>size</b1>)</li>
                        <li><b2>static RectTransform</b2> <b1>SetRect</b1>(<b2>this RectTransform</b2> <b1>rect</b1>, <b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>, <b2>Vector2</b2> <b1>size</b1>)</li>
                        <li><b2>static RectTransform</b2> <b1>SetRect</b1>(<b2>this RectTransform</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>position</b1>, <b2>float</b2> <b1>w</b1>, <b2>float</b2> <b1>h</b1>)</li>
                        <li><b2>static RectTransform</b2> <b1>SetRect</b1>(<b2>this RectTransform</b2> <b1>rect</b1>, <b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>, <b2>float</b2> <b1>w</b1>, <b2>float</b2> <b1>h</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Vector2</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector2Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Color</b2> <b1>color</b1>: Original color to modify</li>                    
                        <li><b2>Rect</b2> <b1>rect</b1>: Original rect to modify</li>                    
                        <li><b2>Transform</b2> <b1>target</b1>: Target Transform to modify</li>                    
                        <li><b2>SpriteRenderer</b2> <b1>sprite</b1>: Target SpriteRenderer to modify</li>                    
                        <li><b2>Image</b2> <b1>sprite</b1>: Target Image to modify</li>                    
                        <li><b2>RectTransform</b2> <b1>rect</b1>: Target RectTransform to modify</li>                    
                        <br/>
                        <li><b2>int</b2> <b1>value</b1>: Int value to set to all axis</li>                    
                        <li><b2>float</b2> <b1>value</b1>: Float value to set to all axis</li>                    
                        <li><b2>Color</b2> <b1>value</b1>: Color value to set</li>                    
                        <li><b2>Rect</b2> <b1>value</b1>: Rect value to set</li>  
                        <li><b2>Vector3</b2> <b1>value</b1>: Vector with the values to set to the Transform</li>                    
                        <li><b2>Vector2</b2> <b1>value</b1>: Pair of values to set either the position or the scale of a rect</li>                    
                        <br/>
                        <li><b2>float</b2> <b1>x</b1>: Value for the x axis</li>                    
                        <li><b2>float</b2> <b1>y</b1>: Value for the y axis</li>                    
                        <li><b2>float</b2> <b1>z</b1>: Value for the z axis</li>                    
                        <li><b2>float</b2> <b1>r</b1>: Value for the red axis</li>                    
                        <li><b2>float</b2> <b1>g</b1>: Value for the green axis</li>                    
                        <li><b2>float</b2> <b1>b</b1>: Value for the blue axis</li>                    
                        <li><b2>float</b2> <b1>a</b1>: Value for the alpha axis</li>                    
                        <li><b2>float</b2> <b1>w</b1>: Value for the width axis</li>                    
                        <li><b2>float</b2> <b1>h</b1>: Value for the height axis</li>                    
                        <li><b2>Vector2</b2> <b1>position</b1>: Pair of values to set to the position of a rect</li>                    
                        <li><b2>Vector2</b2> <b1>size</b1>: Pair of values to set to the scale of a rect</li>                    
                        <li><b2>bool</b2> <b1>setAlpha</b1>: If true, the color will override the alpha values. If false, it will maintain the original alpha value</li>                    
                        <br/>
                        <li><b2>VECTOR</b2> <b1>axis</b1>: Enum with the axis combination to modify a vector</li>                    
                        <li><b2>COLOR</b2> <b1>mode</b1>: Enum with the axis combination to modify a color</li>                    
                        <li><b2>RECT</b2> <b1>mode</b1>: Enum with the axis combination to modify a rect</li>
                    </ul>
                </div>
            )}/>
            <Group title="Add" content={(
                <div>
                    <p>
                        Adds a given value to the base value.<br/>
                        For vectors, colors and rects the operations applies independently on each axis.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>Add</b1>(<b2>this int</b2> <b1>number</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <li><b2>static float</b2> <b1>Add</b1>(<b2>this float</b2> <b1>number</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <br/>
                        <li><b2>static Vector2</b2> <b1>Add</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Add</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Add</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>Vector2</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Add</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>AddX</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>AddY</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <br/>
                        <li><b2>static Vector3</b2> <b1>Add</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Add</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Add</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>Vector3</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Add</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>, <b2>float</b2> <b1>z</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>AddX</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>AddY</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>AddZ</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <br/>
                        <li><b2>static Vector2Int</b2> <b1>Add</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Add</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Add</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>Vector2Int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Add</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>x</b1>, <b2>int</b2> <b1>y</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>AddX</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>AddY</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <br/>
                        <li><b2>static Vector3Int</b2> <b1>Add</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Add</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Add</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>Vector3Int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Add</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>x</b1>, <b2>int</b2> <b1>y</b1>, <b2>int</b2> <b1>z</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>AddX</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>AddY</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>AddZ</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <br/>
                        <li><b2>static Color</b2> <b1>Add</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>value</b1>, <b2>float</b2> <b1>a = 0f</b1>)</li>
                        <li><b2>static Color</b2> <b1>Add</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>COLOR</b2> <b1>mode</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Color</b2> <b1>Add</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>r</b1>, <b2>float</b2> <b1>g</b1>, <b2>float</b2> <b1>b</b1>, <b2>float</b2> <b1>a = 0f</b1>)</li>
                        <li><b2>static Color</b2> <b1>Add</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>Color</b2> <b1>value</b1>, <b2>float</b2> <b1>a = 0f</b1>)</li>
                        <li><b2>static Color</b2> <b1>Add</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>Color</b2> <b1>value</b1>, <b2>bool</b2> <b1>modifyAlpha = false</b1>)</li>
                        <li><b2>static Color</b2> <b1>AddR</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Color</b2> <b1>AddG</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Color</b2> <b1>AddB</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Color</b2> <b1>AddA</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <br/>
                        <li><b2>static Rect</b2> <b1>Add</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Add</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>RECT</b2> <b1>mode</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Add</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Rect</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Add</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>position</b1>, <b2>Vector2</b2> <b1>size</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Add</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>, <b2>Vector2</b2> <b1>size</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Add</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>position</b1>, <b2>float</b2> <b1>w</b1>, <b2>float</b2> <b1>h</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Add</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>, <b2>float</b2> <b1>w</b1>, <b2>float</b2> <b1>h</b1>)</li>
                        <li><b2>static Rect</b2> <b1>AddX</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>AddY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>AddW</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>AddH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <br/>
                        <li><b2>static Rect</b2> <b1>AddXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>AddXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>AddXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>)</li>
                        <br/>
                        <li><b2>static Rect</b2> <b1>AddWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>AddWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>AddWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>w</b1>, <b2>float</b2> <b1>h</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>float</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>Vector2</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector2Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Color</b2> <b1>color</b1>: Original color to modify</li>                    
                        <li><b2>Rect</b2> <b1>rect</b1>: Original rect to modify</li>                    
                        <br/>
                        <li><b2>int</b2> <b1>value</b1>: Int value to add to all axis</li>                    
                        <li><b2>float</b2> <b1>value</b1>: Float value to add to all axis</li>                    
                        <li><b2>Vector2</b2> <b1>value</b1>: Vector value to add</li>                    
                        <li><b2>Vector3</b2> <b1>value</b1>: Vector value to add</li>                    
                        <li><b2>Vector2Int</b2> <b1>value</b1>: Vector value to add</li>                    
                        <li><b2>Vector3Int</b2> <b1>value</b1>: Vector value to add</li>                    
                        <li><b2>Color</b2> <b1>value</b1>: Color value to add</li>                    
                        <li><b2>Rect</b2> <b1>value</b1>: Rect value to add</li>  
                        <br/>
                        <li><b2>float</b2> <b1>x</b1>: Value for the x axis</li>                    
                        <li><b2>float</b2> <b1>y</b1>: Value for the y axis</li>                    
                        <li><b2>float</b2> <b1>z</b1>: Value for the z axis</li>                    
                        <li><b2>float</b2> <b1>r</b1>: Value for the red axis</li>                    
                        <li><b2>float</b2> <b1>g</b1>: Value for the green axis</li>                    
                        <li><b2>float</b2> <b1>b</b1>: Value for the blue axis</li>                    
                        <li><b2>float</b2> <b1>a</b1>: Value for the alpha axis</li>                    
                        <li><b2>float</b2> <b1>w</b1>: Value for the width axis</li>                    
                        <li><b2>float</b2> <b1>h</b1>: Value for the height axis</li>                    
                        <li><b2>Vector2</b2> <b1>position</b1>: Pair of values to add to the position of a rect</li>                    
                        <li><b2>Vector2</b2> <b1>size</b1>: Pair of values to add to the scale of a rect</li>                    
                        <li><b2>bool</b2> <b1>setAlpha</b1>: If true, the color will override the alpha values. If false, it will maintain the original alpha value</li>                    
                        <br/>
                        <li><b2>VECTOR</b2> <b1>axis</b1>: Enum with the axis combination to modify a vector</li>                    
                        <li><b2>COLOR</b2> <b1>mode</b1>: Enum with the axis combination to modify a color</li>                    
                        <li><b2>RECT</b2> <b1>mode</b1>: Enum with the axis combination to modify a rect</li>
                    </ul>
                </div>
            )}/>
            <Group title="Multiply" content={(
                <div>
                    <p>
                        Multiplies the base value by a given value.<br/> 
                        For vectors, colors and rects the operations applies independently on each axis.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>Multiply</b1>(<b2>this int</b2> <b1>number</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <li><b2>static float</b2> <b1>Multiply</b1>(<b2>this float</b2> <b1>number</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <br/>
                        <li><b2>static Vector2</b2> <b1>Multiply</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Multiply</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Multiply</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>Vector2</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Multiply</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>MultiplyX</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>MultiplyY</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <br/>
                        <li><b2>static Vector3</b2> <b1>Multiply</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Multiply</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Multiply</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>Vector3</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Multiply</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>, <b2>float</b2> <b1>z</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>MultiplyX</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>MultiplyY</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>MultiplyZ</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <br/>
                        <li><b2>static Vector2Int</b2> <b1>Multiply</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Multiply</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Multiply</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>Vector2Int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Multiply</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>x</b1>, <b2>int</b2> <b1>y</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>MultiplyX</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>MultiplyY</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <br/>
                        <li><b2>static Vector3Int</b2> <b1>Multiply</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Multiply</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Multiply</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>Vector3Int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Multiply</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>x</b1>, <b2>int</b2> <b1>y</b1>, <b2>int</b2> <b1>z</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>MultiplyX</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>MultiplyY</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>MultiplyZ</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <br/>
                        <li><b2>static Color</b2> <b1>Multiply</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>value</b1>, <b2>float</b2> <b1>a = 1f</b1>)</li>
                        <li><b2>static Color</b2> <b1>Multiply</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>COLOR</b2> <b1>mode</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Color</b2> <b1>Multiply</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>r</b1>, <b2>float</b2> <b1>g</b1>, <b2>float</b2> <b1>b</b1>, <b2>float</b2> <b1>a = 1f</b1>)</li>
                        <li><b2>static Color</b2> <b1>Multiply</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>Color</b2> <b1>value</b1>, <b2>float</b2> <b1>a = 1f</b1>)</li>
                        <li><b2>static Color</b2> <b1>Multiply</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>Color</b2> <b1>value</b1>, <b2>bool</b2> <b1>modifyAlpha = false</b1>)</li>
                        <li><b2>static Color</b2> <b1>MultiplyR</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Color</b2> <b1>MultiplyG</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Color</b2> <b1>MultiplyB</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Color</b2> <b1>MultiplyA</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <br/>
                        <li><b2>static Rect</b2> <b1>Multiply</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Multiply</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>RECT</b2> <b1>mode</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Multiply</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Rect</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Multiply</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>position</b1>, <b2>Vector2</b2> <b1>size</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Multiply</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>, <b2>Vector2</b2> <b1>size</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Multiply</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>position</b1>, <b2>float</b2> <b1>w</b1>, <b2>float</b2> <b1>h</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Multiply</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>, <b2>float</b2> <b1>w</b1>, <b2>float</b2> <b1>h</b1>)</li>
                        <li><b2>static Rect</b2> <b1>MultiplyX</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>MultiplyY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>MultiplyW</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>MultiplyH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <br/>
                        <li><b2>static Rect</b2> <b1>MultiplyXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>MultiplyXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>MultiplyXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>)</li>
                        <br/>
                        <li><b2>static Rect</b2> <b1>MultiplyWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>MultiplyWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>MultiplyWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>w</b1>, <b2>float</b2> <b1>h</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>float</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>Vector2</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector2Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Color</b2> <b1>color</b1>: Original color to modify</li>                    
                        <li><b2>Rect</b2> <b1>rect</b1>: Original rect to modify</li>                    
                        <br/>
                        <li><b2>int</b2> <b1>value</b1>: Int value to multiply to all axis</li>                    
                        <li><b2>float</b2> <b1>value</b1>: Float value to multiply to all axis</li>                    
                        <li><b2>Vector2</b2> <b1>value</b1>: Vector value to multiply</li>                    
                        <li><b2>Vector3</b2> <b1>value</b1>: Vector value to multiply</li>                    
                        <li><b2>Vector2Int</b2> <b1>value</b1>: Vector value to multiply</li>                    
                        <li><b2>Vector3Int</b2> <b1>value</b1>: Vector value to multiply</li>                    
                        <li><b2>Color</b2> <b1>value</b1>: Color value to multiply</li>                    
                        <li><b2>Rect</b2> <b1>value</b1>: Rect value to multiply</li>  
                        <br/>
                        <li><b2>float</b2> <b1>x</b1>: Value for the x axis</li>                    
                        <li><b2>float</b2> <b1>y</b1>: Value for the y axis</li>                    
                        <li><b2>float</b2> <b1>z</b1>: Value for the z axis</li>                    
                        <li><b2>float</b2> <b1>r</b1>: Value for the red axis</li>                    
                        <li><b2>float</b2> <b1>g</b1>: Value for the green axis</li>                    
                        <li><b2>float</b2> <b1>b</b1>: Value for the blue axis</li>                    
                        <li><b2>float</b2> <b1>a</b1>: Value for the alpha axis</li>                    
                        <li><b2>float</b2> <b1>w</b1>: Value for the width axis</li>                    
                        <li><b2>float</b2> <b1>h</b1>: Value for the height axis</li>                    
                        <li><b2>Vector2</b2> <b1>position</b1>: Pair of values to multiply to the position of a rect</li>                    
                        <li><b2>Vector2</b2> <b1>size</b1>: Pair of values to multiply to the scale of a rect</li>                    
                        <li><b2>bool</b2> <b1>setAlpha</b1>: If true, the color will override the alpha values. If false, it will maintain the original alpha value</li>                    
                        <br/>
                        <li><b2>VECTOR</b2> <b1>axis</b1>: Enum with the axis combination to modify a vector</li>                    
                        <li><b2>COLOR</b2> <b1>mode</b1>: Enum with the axis combination to modify a color</li>                    
                        <li><b2>RECT</b2> <b1>mode</b1>: Enum with the axis combination to modify a rect</li> 
                    </ul>
                </div>
            )}/>
            <Group title="Comp" content={(
                <div>
                    <p>
                        Computes the complement of the base value with respect to another value.<br/>
                        Comp of a color only modifies the RGB values while CompA only modifies the alpha value of the color.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>Comp</b1>(<b2>this int</b2> <b1>number</b1>, <b2>int</b2> <b1>value</b1>)</li>
                        <li><b2>static float</b2> <b1>Comp</b1>(<b2>this float</b2> <b1>number</b1>, <b2>float</b2> <b1>value</b1>)</li>    
                        <li><b2>static Color</b2> <b1>Comp</b1>(<b2>this Color</b2> <b1>color</b1>)</li>
                        <li><b2>static Color</b2> <b1>Comp</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>COLOR</b2> <b1>mode</b1>)</li>
                        <li><b2>static Color</b2> <b1>CompA</b1>(<b2>this Color</b2> <b1>color</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>float</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>Color</b2> <b1>color</b1>: Original color to modify</li>                    
                        <li><b2>int</b2> <b1>value</b1>: Int value to calculate the complement of the number</li>                    
                        <li><b2>float</b2> <b1>value</b1>: Float value to calculate the complement of the number</li>                    
                        <li><b2>COLOR</b2> <b1>mode</b1>: Enum with the axis combination to modify a color</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Mod" content={(
                <div>
                    <p>
                        Performs the modulus operation.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>Mod</b1>(<b2>this int</b2> <b1>number</b1>, <b2>int</b2> <b1>divisor</b1>)</li>
                        <li><b2>static float</b2> <b1>Mod</b1>(<b2>this float</b2> <b1>number</b1>, <b2>float</b2> <b1>divisor</b1>)</li>    
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>float</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>int</b2> <b1>divisor</b1>: Int value to calculate the modulus</li>                    
                        <li><b2>float</b2> <b1>divisor</b1>: Float value to calculate the modulus</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Power" content={(
                <div>
                    <p>
                        Raises the base value to a specified power.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>Power</b1>(<b2>this int</b2> <b1>number</b1>, <b2>int</b2> <b1>power = 2</b1>)</li>
                        <li><b2>static float</b2> <b1>Power</b1>(<b2>this float</b2> <b1>number</b1>, <b2>float</b2> <b1>power = 2f</b1>)</li>    
                        <li><b2>static Vector2</b2> <b1>Power</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>float</b2> <b1>power = 2f</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Power</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>power = 2f</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Power</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>float</b2> <b1>power = 2f</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Power</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>power = 2f</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Power</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>power = 2</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Power</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>power = 2</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Power</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>power = 2</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Power</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>power = 2</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Power</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>power = 2f</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Power</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>RECT</b2> <b1>mode</b1>, <b2>float</b2> <b1>power = 2f</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>float</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>int</b2> <b1>power</b1>: Int value to calculate the power</li>                    
                        <li><b2>float</b2> <b1>power</b1>: Float value to calculate the power</li>                    
                        <li><b2>Vector2</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector2Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Color</b2> <b1>color</b1>: Original color to modify</li>                    
                        <li><b2>Rect</b2> <b1>rect</b1>: Original rect to modify</li>                    
                        <li><b2>VECTOR</b2> <b1>axis</b1>: Enum with the axis combination to modify a vector</li>                    
                        <li><b2>COLOR</b2> <b1>mode</b1>: Enum with the axis combination to modify a color</li>                    
                        <li><b2>RECT</b2> <b1>mode</b1>: Enum with the axis combination to modify a rect</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Root" content={(
                <div>
                    <p>
                        Computes the root of the base value.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>Root</b1>(<b2>this int</b2> <b1>number</b1>, <b2>int</b2> <b1>root = 2</b1>)</li>
                        <li><b2>static float</b2> <b1>Root</b1>(<b2>this float</b2> <b1>number</b1>, <b2>float</b2> <b1>root = 2f</b1>)</li>    
                        <li><b2>static Vector2</b2> <b1>Root</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>float</b2> <b1>root = 2f</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Root</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>root = 2f</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Root</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>float</b2> <b1>root = 2f</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Root</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>root = 2f</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Root</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>root = 2</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Root</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>root = 2</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Root</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>root = 2</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Root</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>root = 2</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Root</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>root = 2f</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Root</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>RECT</b2> <b1>mode</b1>, <b2>float</b2> <b1>root = 2f</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>float</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>int</b2> <b1>root</b1>: Int value to calculate the root</li>                    
                        <li><b2>float</b2> <b1>root</b1>: Float value to calculate the root</li>                    
                        <li><b2>Vector2</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector2Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Color</b2> <b1>color</b1>: Original color to modify</li>                    
                        <li><b2>Rect</b2> <b1>rect</b1>: Original rect to modify</li>                    
                        <li><b2>VECTOR</b2> <b1>axis</b1>: Enum with the axis combination to modify a vector</li>                    
                        <li><b2>COLOR</b2> <b1>mode</b1>: Enum with the axis combination to modify a color</li>                    
                        <li><b2>RECT</b2> <b1>mode</b1>: Enum with the axis combination to modify a rect</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Inverse" content={(
                <div>
                    <p>
                        Returns the inverse (1/x) of the base value.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>Inverse</b1>(<b2>this int</b2> <b1>number</b1>)</li>
                        <li><b2>static float</b2> <b1>Inverse</b1>(<b2>this float</b2> <b1>number</b1>)</li>    
                        <li><b2>static Vector2</b2> <b1>Inverse</b1>(<b2>this Vector2</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Inverse</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Inverse</b1>(<b2>this Vector3</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Inverse</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Inverse</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Inverse</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Inverse</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Inverse</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Inverse</b1>(<b2>this Rect</b2> <b1>rect</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Inverse</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>RECT</b2> <b1>mode</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>float</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>Vector2</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector2Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Color</b2> <b1>color</b1>: Original color to modify</li>                    
                        <li><b2>Rect</b2> <b1>rect</b1>: Original rect to modify</li>                    
                        <li><b2>VECTOR</b2> <b1>axis</b1>: Enum with the axis combination to modify a vector</li>                    
                        <li><b2>COLOR</b2> <b1>mode</b1>: Enum with the axis combination to modify a color</li>                    
                        <li><b2>RECT</b2> <b1>mode</b1>: Enum with the axis combination to modify a rect</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Abs" content={(
                <div>
                    <p>
                        Returns the absolute value.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>Abs</b1>(<b2>this int</b2> <b1>number</b1>)</li>
                        <li><b2>static float</b2> <b1>Abs</b1>(<b2>this float</b2> <b1>number</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Abs</b1>(<b2>this Vector2</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Abs</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Abs</b1>(<b2>this Vector3</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Abs</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Abs</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Abs</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Abs</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Abs</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Abs</b1>(<b2>this Rect</b2> <b1>rect</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Abs</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>RECT</b2> <b1>mode</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>float</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>Vector2</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector2Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Rect</b2> <b1>rect</b1>: Original rect to modify</li>                    
                        <li><b2>VECTOR</b2> <b1>axis</b1>: Enum with the axis combination to modify a vector</li>                    
                        <li><b2>RECT</b2> <b1>mode</b1>: Enum with the axis combination to modify a rect</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Sign" content={(
                <div>
                    <p>
                        Returns the sign of the base value (either -1 or 1).
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>Sign</b1>(<b2>this int</b2> <b1>number</b1>)</li>
                        <li><b2>static float</b2> <b1>Sign</b1>(<b2>this float</b2> <b1>number</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Sign</b1>(<b2>this Vector2</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Sign</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Sign</b1>(<b2>this Vector3</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Sign</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Sign</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Sign</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Sign</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Sign</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Sign</b1>(<b2>this Rect</b2> <b1>rect</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Sign</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>RECT</b2> <b1>mode</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>float</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>Vector2</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector2Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Rect</b2> <b1>rect</b1>: Original rect to modify</li>                    
                        <li><b2>VECTOR</b2> <b1>axis</b1>: Enum with the axis combination to modify a vector</li>                    
                        <li><b2>RECT</b2> <b1>mode</b1>: Enum with the axis combination to modify a rect</li>
                    </ul>
                </div>
            )}/>
            <Group title="Round" content={(
                <div>
                    <p>
                        Returns the base value rounded to its nearest integer.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static float</b2> <b1>Round</b1>(<b2>this float</b2> <b1>number</b1>)</li>    
                        <li><b2>static Vector2</b2> <b1>Round</b1>(<b2>this Vector2</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Round</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Round</b1>(<b2>this Vector3</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Round</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Round</b1>(<b2>this Rect</b2> <b1>rect</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Round</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>RECT</b2> <b1>mode</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>Vector2</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Rect</b2> <b1>rect</b1>: Original rect to modify</li>                    
                        <li><b2>VECTOR</b2> <b1>axis</b1>: Enum with the axis combination to modify a vector</li>                    
                        <li><b2>RECT</b2> <b1>mode</b1>: Enum with the axis combination to modify a rect</li>
                    </ul>
                </div>
            )}/>
            <Group title="Floor" content={(
                <div>
                    <p>
                        Returns the base value rounded down to its nearest integer.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static float</b2> <b1>Floor</b1>(<b2>this float</b2> <b1>number</b1>)</li>    
                        <li><b2>static Vector2</b2> <b1>Floor</b1>(<b2>this Vector2</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Floor</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Floor</b1>(<b2>this Vector3</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Floor</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Floor</b1>(<b2>this Rect</b2> <b1>rect</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Floor</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>RECT</b2> <b1>mode</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>Vector2</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Rect</b2> <b1>rect</b1>: Original rect to modify</li>                    
                        <li><b2>VECTOR</b2> <b1>axis</b1>: Enum with the axis combination to modify a vector</li>                    
                        <li><b2>RECT</b2> <b1>mode</b1>: Enum with the axis combination to modify a rect</li>
                    </ul>
                </div>
            )}/>
            <Group title="Ceil" content={(
                <div>
                    <p>
                        Returns the base value rounded up to its nearest integer.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static float</b2> <b1>Ceil</b1>(<b2>this float</b2> <b1>number</b1>)</li>    
                        <li><b2>static Vector2</b2> <b1>Ceil</b1>(<b2>this Vector2</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Ceil</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Ceil</b1>(<b2>this Vector3</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Ceil</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Ceil</b1>(<b2>this Rect</b2> <b1>rect</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Ceil</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>RECT</b2> <b1>mode</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>Vector2</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Rect</b2> <b1>rect</b1>: Original rect to modify</li>                    
                        <li><b2>VECTOR</b2> <b1>axis</b1>: Enum with the axis combination to modify a vector</li>                    
                        <li><b2>RECT</b2> <b1>mode</b1>: Enum with the axis combination to modify a rect</li>
                    </ul>
                </div>
            )}/>
            <Group title="Min" content={(
                <div>
                    <p>
                        Returns the minimum of the base value and a specified value.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>Min</b1>(<b2>this int</b2> <b1>number</b1>, <b2>params int[]</b2> <b1>values</b1>)</li>
                        <li><b2>static float</b2> <b1>Min</b1>(<b2>this float</b2> <b1>number</b1>, <b2>params float[]</b2> <b1>values</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>float</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>int[]</b2> <b1>values</b1>: Int values to compare</li>                    
                        <li><b2>float[]</b2> <b1>values</b1>: Float values to compare</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Max" content={(
                <div>
                    <p>
                        Returns the maximum of the base value and a specified value.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>Max</b1>(<b2>this int</b2> <b1>number</b1>, <b2>params int[]</b2> <b1>values</b1>)</li>
                        <li><b2>static float</b2> <b1>Max</b1>(<b2>this float</b2> <b1>number</b1>, <b2>params float[]</b2> <b1>values</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>float</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>int[]</b2> <b1>values</b1>: Int values to compare</li>                    
                        <li><b2>float[]</b2> <b1>values</b1>: Float values to compare</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Bottom" content={(
                <div>
                    <p>
                        Restricts the base value to a minimum value.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>Bottom</b1>(<b2>this int</b2> <b1>number</b1>, <b2>int</b2> <b1>min</b1>)</li>
                        <li><b2>static float</b2> <b1>Bottom</b1>(<b2>this float</b2> <b1>number</b1>, <b2>float</b2> <b1>min</b1>)</li>
                        <br/>
                        <li><b2>static Vector2</b2> <b1>Bottom</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>float</b2> <b1>min</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Bottom</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>min</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Bottom</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>Vector2</b2> <b1>min</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Bottom</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>)</li>
                        <br/>
                        <li><b2>static Vector3</b2> <b1>Bottom</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>float</b2> <b1>min</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Bottom</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>min</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Bottom</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>Vector3</b2> <b1>min</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Bottom</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>, <b2>float</b2> <b1>z</b1>)</li>
                        <br/>
                        <li><b2>static Vector2Int</b2> <b1>Bottom</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>min</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Bottom</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>min</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Bottom</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>Vector2Int</b2> <b1>min</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Bottom</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>x</b1>, <b2>int</b2> <b1>y</b1>)</li>
                        <br/>
                        <li><b2>static Vector3Int</b2> <b1>Bottom</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>min</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Bottom</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>min</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Bottom</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>Vector3Int</b2> <b1>min</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Bottom</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>x</b1>, <b2>int</b2> <b1>y</b1>, <b2>int</b2> <b1>z</b1>)</li>
                        <br/>
                        <li><b2>static Color</b2> <b1>Bottom</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>min</b1>)</li>
                        <li><b2>static Color</b2> <b1>Bottom</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>COLOR</b2> <b1>mode</b1>, <b2>float</b2> <b1>min</b1>)</li>
                        <li><b2>static Color</b2> <b1>Bottom</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>Color</b2> <b1>min</b1>)</li>
                        <li><b2>static Color</b2> <b1>Bottom</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>r</b1>, <b2>float</b2> <b1>g</b1>, <b2>float</b2> <b1>b</b1>)</li>
                        <li><b2>static Color</b2> <b1>BottomA</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>min</b1>)</li>
                        <br/>
                        <li><b2>static Rect</b2> <b1>Bottom</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>min</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Bottom</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>RECT</b2> <b1>mode</b1>, <b2>float</b2> <b1>min</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Bottom</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Rect</b2> <b1>min</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Bottom</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>position</b1>, <b2>Vector2</b2> <b1>size</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Bottom</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>, <b2>Vector2</b2> <b1>size</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Bottom</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>position</b1>, <b2>float</b2> <b1>w</b1>, <b2>float</b2> <b1>h</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Bottom</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>, <b2>float</b2> <b1>w</b1>, <b2>float</b2> <b1>h</b1>)</li>
                        <br/>
                        <li><b2>static Rect</b2> <b1>BottomXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>min</b1>)</li>
                        <li><b2>static Rect</b2> <b1>BottomXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>min</b1>)</li>
                        <li><b2>static Rect</b2> <b1>BottomXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>)</li>
                        <br/>
                        <li><b2>static Rect</b2> <b1>BottomWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>min</b1>)</li>
                        <li><b2>static Rect</b2> <b1>BottomWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>min</b1>)</li>
                        <li><b2>static Rect</b2> <b1>BottomWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>w</b1>, <b2>float</b2> <b1>h</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>float</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>Vector2</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector2Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Color</b2> <b1>color</b1>: Original color to modify</li>                    
                        <li><b2>Rect</b2> <b1>rect</b1>: Original rect to modify</li>                    
                        <br/>
                        <li><b2>int</b2> <b1>min</b1>: Int value to compare to</li>                    
                        <li><b2>float</b2> <b1>min</b1>: Float value to compare to</li>                    
                        <li><b2>Vector2</b2> <b1>min</b1>: Vector value to compare to</li>                    
                        <li><b2>Vector3</b2> <b1>min</b1>: Vector value to compare to</li>                    
                        <li><b2>Vector2Int</b2> <b1>min</b1>: Vector value to compare to</li>                    
                        <li><b2>Vector3Int</b2> <b1>min</b1>: Vector value to compare to</li>                    
                        <li><b2>Color</b2> <b1>min</b1>: Color value to compare to</li>                    
                        <li><b2>Rect</b2> <b1>min</b1>: Rect value to compare to</li>  
                        <br/>
                        <li><b2>float</b2> <b1>x</b1>: Value for the x axis</li>                    
                        <li><b2>float</b2> <b1>y</b1>: Value for the y axis</li>                    
                        <li><b2>float</b2> <b1>z</b1>: Value for the z axis</li>                    
                        <li><b2>float</b2> <b1>r</b1>: Value for the red axis</li>                    
                        <li><b2>float</b2> <b1>g</b1>: Value for the green axis</li>                    
                        <li><b2>float</b2> <b1>b</b1>: Value for the blue axis</li>                    
                        <li><b2>float</b2> <b1>w</b1>: Value for the width axis</li>                    
                        <li><b2>float</b2> <b1>h</b1>: Value for the height axis</li>                    
                        <li><b2>Vector2</b2> <b1>position</b1>: Pair of values to compare to the position of a rect</li>                    
                        <li><b2>Vector2</b2> <b1>size</b1>: Pair of values to compare to the scale of a rect</li>                    
                        <br/>
                        <li><b2>VECTOR</b2> <b1>axis</b1>: Enum with the axis combination to modify a vector</li>                    
                        <li><b2>COLOR</b2> <b1>mode</b1>: Enum with the axis combination to modify a color</li>                    
                        <li><b2>RECT</b2> <b1>mode</b1>: Enum with the axis combination to modify a rect</li> 
                    </ul>
                </div>
            )}/>
            <Group title="Top" content={(
                <div>
                    <p>
                        Restricts the base value to a maximum value.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>Top</b1>(<b2>this int</b2> <b1>number</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static float</b2> <b1>Top</b1>(<b2>this float</b2> <b1>number</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <br/>
                        <li><b2>static Vector2</b2> <b1>Top</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Top</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Top</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>Vector2</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Top</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>)</li>
                        <br/>
                        <li><b2>static Vector3</b2> <b1>Top</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Top</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Top</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>Vector3</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Top</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>, <b2>float</b2> <b1>z</b1>)</li>
                        <br/>
                        <li><b2>static Vector2Int</b2> <b1>Top</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Top</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Top</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>Vector2Int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Top</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>x</b1>, <b2>int</b2> <b1>y</b1>)</li>
                        <br/>
                        <li><b2>static Vector3Int</b2> <b1>Top</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Top</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Top</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>Vector3Int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Top</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>x</b1>, <b2>int</b2> <b1>y</b1>, <b2>int</b2> <b1>z</b1>)</li>
                        <br/>
                        <li><b2>static Color</b2> <b1>Top</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Color</b2> <b1>Top</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>COLOR</b2> <b1>mode</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Color</b2> <b1>Top</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>Color</b2> <b1>max</b1>)</li>
                        <li><b2>static Color</b2> <b1>Top</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>r</b1>, <b2>float</b2> <b1>g</b1>, <b2>float</b2> <b1>b</b1>)</li>
                        <li><b2>static Color</b2> <b1>TopA</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <br/>
                        <li><b2>static Rect</b2> <b1>Top</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Top</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>RECT</b2> <b1>mode</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Top</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Rect</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Top</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>position</b1>, <b2>Vector2</b2> <b1>size</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Top</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>, <b2>Vector2</b2> <b1>size</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Top</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>position</b1>, <b2>float</b2> <b1>w</b1>, <b2>float</b2> <b1>h</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Top</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>, <b2>float</b2> <b1>w</b1>, <b2>float</b2> <b1>h</b1>)</li>
                        <br/>
                        <li><b2>static Rect</b2> <b1>TopXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>TopXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>TopXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>)</li>
                        <br/>
                        <li><b2>static Rect</b2> <b1>TopWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>TopWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>TopWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>w</b1>, <b2>float</b2> <b1>h</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>float</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>Vector2</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector2Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Color</b2> <b1>color</b1>: Original color to modify</li>                    
                        <li><b2>Rect</b2> <b1>rect</b1>: Original rect to modify</li>                    
                        <br/>
                        <li><b2>int</b2> <b1>max</b1>: Int value to compare to</li>                    
                        <li><b2>float</b2> <b1>max</b1>: Float value to compare to</li>                    
                        <li><b2>Vector2</b2> <b1>max</b1>: Vector value to compare to</li>                    
                        <li><b2>Vector3</b2> <b1>max</b1>: Vector value to compare to</li>                    
                        <li><b2>Vector2Int</b2> <b1>max</b1>: Vector value to compare to</li>                    
                        <li><b2>Vector3Int</b2> <b1>max</b1>: Vector value to compare to</li>                    
                        <li><b2>Color</b2> <b1>max</b1>: Color value to compare to</li>                    
                        <li><b2>Rect</b2> <b1>max</b1>: Rect value to compare to</li>  
                        <br/>
                        <li><b2>float</b2> <b1>x</b1>: Value for the x axis</li>                    
                        <li><b2>float</b2> <b1>y</b1>: Value for the y axis</li>                    
                        <li><b2>float</b2> <b1>z</b1>: Value for the z axis</li>                    
                        <li><b2>float</b2> <b1>r</b1>: Value for the red axis</li>                    
                        <li><b2>float</b2> <b1>g</b1>: Value for the green axis</li>                    
                        <li><b2>float</b2> <b1>b</b1>: Value for the blue axis</li>                    
                        <li><b2>float</b2> <b1>w</b1>: Value for the width axis</li>                    
                        <li><b2>float</b2> <b1>h</b1>: Value for the height axis</li>                    
                        <li><b2>Vector2</b2> <b1>position</b1>: Pair of values to compare to the position of a rect</li>                    
                        <li><b2>Vector2</b2> <b1>size</b1>: Pair of values to compare to the scale of a rect</li>                    
                        <br/>
                        <li><b2>VECTOR</b2> <b1>axis</b1>: Enum with the axis combination to modify a vector</li>                    
                        <li><b2>COLOR</b2> <b1>mode</b1>: Enum with the axis combination to modify a color</li>                    
                        <li><b2>RECT</b2> <b1>mode</b1>: Enum with the axis combination to modify a rect</li> 
                    </ul>
                </div>
            )}/>
            <Group title="Clamp" content={(
                <div>
                    <p>
                        Restricts the base value between two limits. If min value is not specified, by default is 0.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>Clamp</b1>(<b2>this int</b2> <b1>number</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static int</b2> <b1>Clamp</b1>(<b2>this int</b2> <b1>number</b1>, <b2>int</b2> <b1>min</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static float</b2> <b1>Clamp</b1>(<b2>this float</b2> <b1>number</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static float</b2> <b1>Clamp</b1>(<b2>this float</b2> <b1>number</b1>, <b2>float</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <br/>
                        <li><b2>static Vector2</b2> <b1>Clamp</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Clamp</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>float</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Clamp</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Clamp</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Clamp</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>Vector2</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Clamp</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>Vector2</b2> <b1>min</b1>, <b2>Vector2</b2> <b1>max</b1>)</li>
                        <br/>
                        <li><b2>static Vector3</b2> <b1>Clamp</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Clamp</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>float</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Clamp</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Clamp</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Clamp</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>Vector3</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Clamp</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>Vector3</b2> <b1>min</b1>, <b2>Vector3</b2> <b1>max</b1>)</li>
                        <br/>
                        <li><b2>static Vector2Int</b2> <b1>Clamp</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Clamp</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>min</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Clamp</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Clamp</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>min</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Clamp</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>Vector2Int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Clamp</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>Vector2Int</b2> <b1>min</b1>, <b2>Vector2Int</b2> <b1>max</b1>)</li>
                        <br/>
                        <li><b2>static Vector3Int</b2> <b1>Clamp</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Clamp</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>min</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Clamp</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Clamp</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>min</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Clamp</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>Vector3Int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Clamp</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>Vector3Int</b2> <b1>min</b1>, <b2>Vector3Int</b2> <b1>max</b1>)</li>
                        <br/>
                        <li><b2>static Color</b2> <b1>Clamp</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Color</b2> <b1>Clamp</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Color</b2> <b1>Clamp</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>COLOR</b2> <b1>mode</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Color</b2> <b1>Clamp</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>COLOR</b2> <b1>mode</b1>, <b2>float</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Color</b2> <b1>Clamp</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>Color</b2> <b1>max</b1>)</li>
                        <li><b2>static Color</b2> <b1>Clamp</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>Color</b2> <b1>min</b1>, <b2>Color</b2> <b1>max</b1>)</li>
                        <li><b2>static Color</b2> <b1>ClampA</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Color</b2> <b1>ClampA</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <br/>
                        <li><b2>static Rect</b2> <b1>Clamp</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Clamp</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Clamp</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>RECT</b2> <b1>mode</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Clamp</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>RECT</b2> <b1>mode</b1>, <b2>float</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Clamp</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Rect</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Clamp</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Rect</b2> <b1>min</b1>, <b2>Rect</b2> <b1>max</b1>)</li>
                        <br/>
                        <li><b2>static Rect</b2> <b1>ClampXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>ClampXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>ClampXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>ClampXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>min</b1>, <b2>Vector2</b2> <b1>max</b1>)</li>
                        <br/>
                        <li><b2>static Rect</b2> <b1>ClampWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>ClampWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>ClampWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>ClampWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>min</b1>, <b2>Vector2</b2> <b1>max</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>float</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>Vector2</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector2Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Color</b2> <b1>color</b1>: Original color to modify</li>                    
                        <li><b2>Rect</b2> <b1>rect</b1>: Original rect to modify</li>                    
                        <br/>
                        <li><b2>int</b2> <b1>min</b1>: Int min value to clamp. Default is 0</li>                    
                        <li><b2>float</b2> <b1>min</b1>: Float min value to clamp. Default is 0f</li>                    
                        <li><b2>Vector2</b2> <b1>min</b1>: Vector min value to clamp. Default is 0f</li>                    
                        <li><b2>Vector3</b2> <b1>min</b1>: Vector min value to clamp. Default is 0f</li>                    
                        <li><b2>Vector2Int</b2> <b1>min</b1>: Vector min value to clamp. Default is 0</li>                    
                        <li><b2>Vector3Int</b2> <b1>min</b1>: Vector min value to clamp. Default is 0</li>                    
                        <li><b2>Color</b2> <b1>min</b1>: Color min value to clamp. Default is 0f</li>                    
                        <li><b2>Rect</b2> <b1>min</b1>: Rect min value to clamp. Default is 0f</li>                    
                        <br/>
                        <li><b2>int</b2> <b1>max</b1>: Int max value to clamp</li>                    
                        <li><b2>float</b2> <b1>max</b1>: Float max value to clamp</li>                    
                        <li><b2>Vector2</b2> <b1>max</b1>: Vector max value to clamp</li>                    
                        <li><b2>Vector3</b2> <b1>max</b1>: Vector max value to clamp</li>                    
                        <li><b2>Vector2Int</b2> <b1>max</b1>: Vector max value to clamp</li>                    
                        <li><b2>Vector3Int</b2> <b1>max</b1>: Vector max value to clamp</li>                    
                        <li><b2>Color</b2> <b1>max</b1>: Color max value to clamp</li>                    
                        <li><b2>Rect</b2> <b1>max</b1>: Rect max value to clamp</li>                    
                        <br/>
                        <li><b2>VECTOR</b2> <b1>axis</b1>: Enum with the axis combination to modify a vector</li>                    
                        <li><b2>COLOR</b2> <b1>mode</b1>: Enum with the axis combination to modify a color</li>                    
                        <li><b2>RECT</b2> <b1>mode</b1>: Enum with the axis combination to modify a rect</li> 
                    </ul>
                </div>
            )}/>
            <Group title="ClampRange" content={(
                <div>
                    <p>
                        Clamps the base value around a range defined by a center point.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>ClampRange</b1>(<b2>this int</b2> <b1>number</b1>, <b2>int</b2> <b1>range</b1>, <b2>int</b2> <b1>center = 0</b1>)</li>
                        <li><b2>static float</b2> <b1>ClampRange</b1>(<b2>this float</b2> <b1>number</b1>, <b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <br/>
                        <li><b2>static Vector2</b2> <b1>ClampRange</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>ClampRange</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>ClampRange</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>Vector2</b2> <b1>range</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>ClampRange</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>Vector2</b2> <b1>range</b1>, <b2>Vector2</b2> <b1>center = 0f</b1>)</li>
                        <br/>
                        <li><b2>static Vector3</b2> <b1>ClampRange</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>ClampRange</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>ClampRange</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>Vector3</b2> <b1>range</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>ClampRange</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>Vector3</b2> <b1>range</b1>, <b2>Vector3</b2> <b1>center = 0f</b1>)</li>
                        <br/>
                        <li><b2>static Vector2Int</b2> <b1>ClampRange</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>range</b1>, <b2>int</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>ClampRange</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>range</b1>, <b2>int</b2> <b1>center = 0</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>ClampRange</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>Vector2Int</b2> <b1>range</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>ClampRange</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>Vector2Int</b2> <b1>range</b1>, <b2>Vector2Int</b2> <b1>center = 0f</b1>)</li>
                        <br/>
                        <li><b2>static Vector3Int</b2> <b1>ClampRange</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>range</b1>, <b2>int</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>ClampRange</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>range</b1>, <b2>int</b2> <b1>center = 0</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>ClampRange</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>Vector3Int</b2> <b1>range</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>ClampRange</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>Vector3Int</b2> <b1>range</b1>, <b2>Vector3Int</b2> <b1>center = 0f</b1>)</li>
                        <br/>
                        <li><b2>static Color</b2> <b1>ClampRange</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Color</b2> <b1>ClampRange</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>COLOR</b2> <b1>mode</b1>, <b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Color</b2> <b1>ClampRange</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>Color</b2> <b1>range</b1>)</li>
                        <li><b2>static Color</b2> <b1>ClampRange</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>Color</b2> <b1>range</b1>, <b2>Color</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Color</b2> <b1>ClampRangeA</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <br/>
                        <li><b2>static Rect</b2> <b1>ClampRange</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Rect</b2> <b1>ClampRange</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>RECT</b2> <b1>mode</b1>, <b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Rect</b2> <b1>ClampRange</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Rect</b2> <b1>range</b1>)</li>
                        <li><b2>static Rect</b2> <b1>ClampRange</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Rect</b2> <b1>range</b1>, <b2>Rect</b2> <b1>center = 0f</b1>)</li>
                        <br/>
                        <li><b2>static Rect</b2> <b1>ClampRangeXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Rect</b2> <b1>ClampRangeXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>range</b1>)</li>
                        <li><b2>static Rect</b2> <b1>ClampRangeXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>range</b1>, <b2>Vector2</b2> <b1>center = 0f</b1>)</li>
                        <br/>
                        <li><b2>static Rect</b2> <b1>ClampRangeWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Rect</b2> <b1>ClampRangeWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>range</b1>)</li>
                        <li><b2>static Rect</b2> <b1>ClampRangeWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>range</b1>, <b2>Vector2</b2> <b1>center = 0f</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>float</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>Vector2</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector2Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Color</b2> <b1>color</b1>: Original color to modify</li>                    
                        <li><b2>Rect</b2> <b1>rect</b1>: Original rect to modify</li>                    
                        <br/>
                        <li><b2>int</b2> <b1>range</b1>: Int range value to clamp</li>                    
                        <li><b2>float</b2> <b1>range</b1>: Float range value to clamp</li>                    
                        <li><b2>Vector2</b2> <b1>range</b1>: Vector range value to clamp</li>                    
                        <li><b2>Vector3</b2> <b1>range</b1>: Vector range value to clamp</li>                    
                        <li><b2>Vector2Int</b2> <b1>range</b1>: Vector range value to clamp</li>                    
                        <li><b2>Vector3Int</b2> <b1>range</b1>: Vector range value to clamp</li>                    
                        <li><b2>Color</b2> <b1>range</b1>: Color range value to clamp</li>                    
                        <li><b2>Rect</b2> <b1>range</b1>: Rect range value to clamp</li>                    
                        <br/>
                        <li><b2>int</b2> <b1>center</b1>: Int center value to clamp</li>                    
                        <li><b2>float</b2> <b1>center</b1>: Float center value to clamp</li>                    
                        <li><b2>Vector2</b2> <b1>center</b1>: Vector center value to clamp</li>                    
                        <li><b2>Vector3</b2> <b1>center</b1>: Vector center value to clamp</li>                    
                        <li><b2>Vector2Int</b2> <b1>center</b1>: Vector center value to clamp</li>                    
                        <li><b2>Vector3Int</b2> <b1>center</b1>: Vector center value to clamp</li>                    
                        <li><b2>Color</b2> <b1>center</b1>: Color center value to clamp</li>                    
                        <li><b2>Rect</b2> <b1>center</b1>: Rect center value to clamp</li>                    
                        <br/>
                        <li><b2>VECTOR</b2> <b1>axis</b1>: Enum with the axis combination to modify a vector</li>                    
                        <li><b2>COLOR</b2> <b1>mode</b1>: Enum with the axis combination to modify a color</li>                    
                        <li><b2>RECT</b2> <b1>mode</b1>: Enum with the axis combination to modify a rect</li>  
                    </ul>
                </div>
            )}/>
            <Group title="Wrap" content={(
                <div>
                    <p>
                        Wraps the base value around two limits. If min value is not specified, by default is 0.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>Wrap</b1>(<b2>this int</b2> <b1>number</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static int</b2> <b1>Wrap</b1>(<b2>this int</b2> <b1>number</b1>, <b2>int</b2> <b1>min</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static float</b2> <b1>Wrap</b1>(<b2>this float</b2> <b1>number</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static float</b2> <b1>Wrap</b1>(<b2>this float</b2> <b1>number</b1>, <b2>float</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <br/>
                        <li><b2>static Vector2</b2> <b1>Wrap</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Wrap</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>float</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Wrap</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Wrap</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Wrap</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>Vector2</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Wrap</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>Vector2</b2> <b1>min</b1>, <b2>Vector2</b2> <b1>max</b1>)</li>
                        <br/>
                        <li><b2>static Vector3</b2> <b1>Wrap</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Wrap</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>float</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Wrap</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Wrap</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Wrap</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>Vector3</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Wrap</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>Vector3</b2> <b1>min</b1>, <b2>Vector3</b2> <b1>max</b1>)</li>
                        <br/>
                        <li><b2>static Vector2Int</b2> <b1>Wrap</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Wrap</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>min</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Wrap</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Wrap</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>min</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Wrap</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>Vector2Int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Wrap</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>Vector2Int</b2> <b1>min</b1>, <b2>Vector2Int</b2> <b1>max</b1>)</li>
                        <br/>
                        <li><b2>static Vector3Int</b2> <b1>Wrap</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Wrap</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>min</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Wrap</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Wrap</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>min</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Wrap</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>Vector3Int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Wrap</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>Vector3Int</b2> <b1>min</b1>, <b2>Vector3Int</b2> <b1>max</b1>)</li>
                        <br/>
                        <li><b2>static Color</b2> <b1>Wrap</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Color</b2> <b1>Wrap</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Color</b2> <b1>Wrap</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>COLOR</b2> <b1>mode</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Color</b2> <b1>Wrap</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>COLOR</b2> <b1>mode</b1>, <b2>float</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Color</b2> <b1>Wrap</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>Color</b2> <b1>max</b1>)</li>
                        <li><b2>static Color</b2> <b1>Wrap</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>Color</b2> <b1>min</b1>, <b2>Color</b2> <b1>max</b1>)</li>
                        <li><b2>static Color</b2> <b1>WrapA</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Color</b2> <b1>WrapA</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <br/>
                        <li><b2>static Rect</b2> <b1>Wrap</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Wrap</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Wrap</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>RECT</b2> <b1>mode</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Wrap</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>RECT</b2> <b1>mode</b1>, <b2>float</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Wrap</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Rect</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Wrap</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Rect</b2> <b1>min</b1>, <b2>Rect</b2> <b1>max</b1>)</li>
                        <br/>
                        <li><b2>static Rect</b2> <b1>WrapXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>WrapXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>WrapXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>WrapXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>min</b1>, <b2>Vector2</b2> <b1>max</b1>)</li>
                        <br/>
                        <li><b2>static Rect</b2> <b1>WrapWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>WrapWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>WrapWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>max</b1>)</li>
                        <li><b2>static Rect</b2> <b1>WrapWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>min</b1>, <b2>Vector2</b2> <b1>max</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>float</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>Vector2</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector2Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Color</b2> <b1>color</b1>: Original color to modify</li>                    
                        <li><b2>Rect</b2> <b1>rect</b1>: Original rect to modify</li>                    
                        <br/>
                        <li><b2>int</b2> <b1>min</b1>: Int min value to wrap. Default is 0</li>                    
                        <li><b2>float</b2> <b1>min</b1>: Float min value to wrap. Default is 0f</li>                    
                        <li><b2>Vector2</b2> <b1>min</b1>: Vector min value to wrap. Default is 0f</li>                    
                        <li><b2>Vector3</b2> <b1>min</b1>: Vector min value to wrap. Default is 0f</li>                    
                        <li><b2>Vector2Int</b2> <b1>min</b1>: Vector min value to wrap. Default is 0</li>                    
                        <li><b2>Vector3Int</b2> <b1>min</b1>: Vector min value to wrap. Default is 0</li>                    
                        <li><b2>Color</b2> <b1>min</b1>: Color min value to wrap. Default is 0f</li>                    
                        <li><b2>Rect</b2> <b1>min</b1>: Rect min value to wrap. Default is 0f</li>                    
                        <br/>
                        <li><b2>int</b2> <b1>max</b1>: Int max value to wrap</li>                    
                        <li><b2>float</b2> <b1>max</b1>: Float max value to wrap</li>                    
                        <li><b2>Vector2</b2> <b1>max</b1>: Vector max value to wrap</li>                    
                        <li><b2>Vector3</b2> <b1>max</b1>: Vector max value to wrap</li>                    
                        <li><b2>Vector2Int</b2> <b1>max</b1>: Vector max value to wrap</li>                    
                        <li><b2>Vector3Int</b2> <b1>max</b1>: Vector max value to wrap</li>                    
                        <li><b2>Color</b2> <b1>max</b1>: Color max value to wrap</li>                    
                        <li><b2>Rect</b2> <b1>max</b1>: Rect max value to wrap</li>                    
                        <br/>
                        <li><b2>VECTOR</b2> <b1>axis</b1>: Enum with the axis combination to modify a vector</li>                    
                        <li><b2>COLOR</b2> <b1>mode</b1>: Enum with the axis combination to modify a color</li>                    
                        <li><b2>RECT</b2> <b1>mode</b1>: Enum with the axis combination to modify a rect</li> 
                    </ul>
                </div>
            )}/>
            <Group title="WrapRange" content={(
                <div>
                    <p>
                        Wraps the base value around a range defined by a center point.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>WrapRange</b1>(<b2>this int</b2> <b1>number</b1>, <b2>int</b2> <b1>range</b1>, <b2>int</b2> <b1>center = 0</b1>)</li>
                        <li><b2>static float</b2> <b1>WrapRange</b1>(<b2>this float</b2> <b1>number</b1>, <b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <br/>
                        <li><b2>static Vector2</b2> <b1>WrapRange</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>WrapRange</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>WrapRange</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>Vector2</b2> <b1>range</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>WrapRange</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>Vector2</b2> <b1>range</b1>, <b2>Vector2</b2> <b1>center = 0f</b1>)</li>
                        <br/>
                        <li><b2>static Vector3</b2> <b1>WrapRange</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>WrapRange</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>WrapRange</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>Vector3</b2> <b1>range</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>WrapRange</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>Vector3</b2> <b1>range</b1>, <b2>Vector3</b2> <b1>center = 0f</b1>)</li>
                        <br/>
                        <li><b2>static Vector2Int</b2> <b1>WrapRange</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>range</b1>, <b2>int</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>WrapRange</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>range</b1>, <b2>int</b2> <b1>center = 0</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>WrapRange</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>Vector2Int</b2> <b1>range</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>WrapRange</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>Vector2Int</b2> <b1>range</b1>, <b2>Vector2Int</b2> <b1>center = 0f</b1>)</li>
                        <br/>
                        <li><b2>static Vector3Int</b2> <b1>WrapRange</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>int</b2> <b1>range</b1>, <b2>int</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>WrapRange</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>VECTOR</b2> <b1>axis</b1>, <b2>int</b2> <b1>range</b1>, <b2>int</b2> <b1>center = 0</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>WrapRange</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>Vector3Int</b2> <b1>range</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>WrapRange</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>Vector3Int</b2> <b1>range</b1>, <b2>Vector3Int</b2> <b1>center = 0f</b1>)</li>
                        <br/>
                        <li><b2>static Color</b2> <b1>WrapRange</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Color</b2> <b1>WrapRange</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>COLOR</b2> <b1>mode</b1>, <b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Color</b2> <b1>WrapRange</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>Color</b2> <b1>range</b1>)</li>
                        <li><b2>static Color</b2> <b1>WrapRange</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>Color</b2> <b1>range</b1>, <b2>Color</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Color</b2> <b1>WrapRangeA</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <br/>
                        <li><b2>static Rect</b2> <b1>WrapRange</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Rect</b2> <b1>WrapRange</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>RECT</b2> <b1>mode</b1>, <b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Rect</b2> <b1>WrapRange</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Rect</b2> <b1>range</b1>)</li>
                        <li><b2>static Rect</b2> <b1>WrapRange</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Rect</b2> <b1>range</b1>, <b2>Rect</b2> <b1>center = 0f</b1>)</li>
                        <br/>
                        <li><b2>static Rect</b2> <b1>WrapRangeXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Rect</b2> <b1>WrapRangeXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>range</b1>)</li>
                        <li><b2>static Rect</b2> <b1>WrapRangeXY</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>range</b1>, <b2>Vector2</b2> <b1>center = 0f</b1>)</li>
                        <br/>
                        <li><b2>static Rect</b2> <b1>WrapRangeWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Rect</b2> <b1>WrapRangeWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>range</b1>)</li>
                        <li><b2>static Rect</b2> <b1>WrapRangeWH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>Vector2</b2> <b1>range</b1>, <b2>Vector2</b2> <b1>center = 0f</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>float</b2> <b1>number</b1>: Original number to modify</li>                    
                        <li><b2>Vector2</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector2Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Color</b2> <b1>color</b1>: Original color to modify</li>                    
                        <li><b2>Rect</b2> <b1>rect</b1>: Original rect to modify</li>                    
                        <br/>
                        <li><b2>int</b2> <b1>range</b1>: Int range value to wrap</li>                    
                        <li><b2>float</b2> <b1>range</b1>: Float range value to wrap</li>                    
                        <li><b2>Vector2</b2> <b1>range</b1>: Vector range value to wrap</li>                    
                        <li><b2>Vector3</b2> <b1>range</b1>: Vector range value to wrap</li>                    
                        <li><b2>Vector2Int</b2> <b1>range</b1>: Vector range value to wrap</li>                    
                        <li><b2>Vector3Int</b2> <b1>range</b1>: Vector range value to wrap</li>                    
                        <li><b2>Color</b2> <b1>range</b1>: Color range value to wrap</li>                    
                        <li><b2>Rect</b2> <b1>range</b1>: Rect range value to wrap</li>                    
                        <br/>
                        <li><b2>int</b2> <b1>center</b1>: Int center value to wrap</li>                    
                        <li><b2>float</b2> <b1>center</b1>: Float center value to wrap</li>                    
                        <li><b2>Vector2</b2> <b1>center</b1>: Vector center value to wrap</li>                    
                        <li><b2>Vector3</b2> <b1>center</b1>: Vector center value to wrap</li>                    
                        <li><b2>Vector2Int</b2> <b1>center</b1>: Vector center value to wrap</li>                    
                        <li><b2>Vector3Int</b2> <b1>center</b1>: Vector center value to wrap</li>                    
                        <li><b2>Color</b2> <b1>center</b1>: Color center value to wrap</li>                    
                        <li><b2>Rect</b2> <b1>center</b1>: Rect center value to wrap</li>                    
                        <br/>
                        <li><b2>VECTOR</b2> <b1>axis</b1>: Enum with the axis combination to modify a vector</li>                    
                        <li><b2>COLOR</b2> <b1>mode</b1>: Enum with the axis combination to modify a color</li>                    
                        <li><b2>RECT</b2> <b1>mode</b1>: Enum with the axis combination to modify a rect</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Swap" content={(
                <div>
                    <p>
                        Returns a vector, color or rect with two axes swapped based on the specified plane or mode. This operation rearranges the values along two dimensions (or channels, in the case of color) to alter their spatial or color component configuration, depending on the data type. Ideal for adjusting orientation, reordering axes or altering color channels efficiently.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector2</b2> <b1>Swap</b1>(<b2>this Vector2</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Swap</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>PLANE</b2> <b1>plane = PLANE.XY</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Swap</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Swap</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>PLANE</b2> <b1>plane = PLANE.XY</b1>)</li>
                        <li><b2>static Color</b2> <b1>Swap</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>COLOR</b2> <b1>mode</b1>)</li>
                        <li><b2>static Rect</b2> <b1>SwapXY</b1>(<b2>this Rect</b2> <b1>rect</b1>)</li>
                        <li><b2>static Rect</b2> <b1>SwapWH</b1>(<b2>this Rect</b2> <b1>rect</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Vector2</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector2Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Color</b2> <b1>color</b1>: Original color to modify</li>                    
                        <li><b2>Rect</b2> <b1>rect</b1>: Original rect to modify</li>                    
                        <li><b2>VECTOR</b2> <b1>plane</b1>: Enum with the axis combination to modify a vector</li>                    
                        <li><b2>COLOR</b2> <b1>mode</b1>: Enum with the axis combination to modify a color</li>                    
                        <li><b2>RECT</b2> <b1>mode</b1>: Enum with the axis combination to modify a rect</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Shift" content={(
                <div>
                    <p>
                        Shifts the values of a vector, color, or rect either to the left or to the right, cyclically wrapping the values around. This means that each axis, component, or property is "moved" one step in the specified direction (left or right), with the shifted-out value reappearing on the opposite end.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector3</b2> <b1>ShiftLeft</b1>(<b2>this Vector3</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>ShiftRight</b1>(<b2>this Vector3</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>ShiftLeft</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>ShiftRight</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>)</li>
                        <li><b2>static Color</b2> <b1>ShiftLeft</b1>(<b2>this Color</b2> <b1>vector</b1>)</li>
                        <li><b2>static Color</b2> <b1>ShiftRight</b1>(<b2>this Color</b2> <b1>vector</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Vector3</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Vector3Int</b2> <b1>vector</b1>: Original vector to modify</li>                    
                        <li><b2>Color</b2> <b1>color</b1>: Original color to modify</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Offset" content={(
                <div>
                    <p>
                        The Offset method adjusts a Rect structure by applying a margin based on specified offset values. The offset can be applied both negatively and positively, either uniformly or separately for horizontal and vertical dimensions.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Rect</b2> <b1>Offset</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Offset</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>horizontal</b1>, <b2>float</b2> <b1>vertical</b1>)</li>
                        <li><b2>static Rect</b2> <b1>OffsetH</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>horizontal</b1>)</li>
                        <li><b2>static Rect</b2> <b1>OffsetV</b1>(<b2>this Rect</b2> <b1>rect</b1>, <b2>float</b2> <b1>vertical</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Rect</b2> <b1>rect</b1>: The original rectangle to modify</li>                    
                        <li><b2>float</b2> <b1>value</b1>: The uniform offset applied to both the horizontal and vertical dimensions</li>                    
                        <li><b2>float</b2> <b1>horizontal</b1>: The offset applied to the horizontal dimension</li>                    
                        <li><b2>float</b2> <b1>vertical</b1>: The offset applied to the vertical dimension</li>                    
                    </ul>
                </div>
            )}/>

            <h3 className="p-2">Examples</h3>
            <Group title="Example 01: Basic Mathematical Operations on Integers" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Mathop/Mathop - 01.jpg" alt=""/>            
                    <p>
                        This script demonstrates basic mathematical operations on integers using the Magikus library in Unity.
                        It covers addition, multiplication, complement, modulo, absolute value, sign determination, clamping and wrapping, showing how to manipulate integer values in various ways and logging the results to the console.
                        The operations include adding 10 to a value, multiplying by 2, finding the complement with 6, computing the modulo with 5, taking the absolute value, determining the sign, clamping between a range and wrapping a value around a specified range.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-55" src="images/Library/Utilities/Mathop/Mathop - 02.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 02: Using Mathop on Float Values" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Mathop/Mathop - 03.jpg" alt=""/>            
                    <p>
                        In this example, a script demonstrates various mathematical operations on float values in Unity using the Magikus library. 
                        The script calculates and logs the power, root, inverse, rounded, floor and ceiling values of a float variable. 
                        It also compares the value with a set of parameters to find the minimum and maximum values. 
                        Additionally, the Bottom operation sets a lower limit to the value, while the Top operation sets an upper limit to it. 
                        Each operation’s result is printed to the console for visualization.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-55" src="images/Library/Utilities/Mathop/Mathop - 04.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 03: Vector2 Manipulations" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Mathop/Mathop - 05.jpg" alt=""/>            
                    <p>
                        This script demonstrates various manipulations of a Vector3 object in Unity using the Magikus library. 
                        It first creates a vector (1, 2, 3) and then performs a series of operations: setting the X value to 5, adding 5 to both the X and Y values, swapping the X and Y components and shifting all values to the right. 
                        Each operation is followed by a Debug.Log statement to output the result of the manipulation.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-65" src="images/Library/Utilities/Mathop/Mathop - 06.jpg" alt=""/>            
                </div>
            )}/>

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>Each method adapts the operation for the specific data type. For instance, Add and Multiply functions behave differently when applied to vectors versus floats.</li>
                <li>The Wrap and Clamp functions are particularly useful for keeping values within limits, for example, to ensure that colors stay within valid ranges or positions remain bounded.</li>
                <li>Methods such as Inverse and Power are helpful for mathematical transformations on game objects, such as scaling or positioning.</li>
            </ul>
       </div>
    );
}