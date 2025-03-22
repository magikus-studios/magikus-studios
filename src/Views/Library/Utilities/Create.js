import React from "react";
import Group from "Components/Group";

export default function Function() {

    
    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Create Utilities</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Methods for Creating various Unity Data Types                
            </h6>
                        
            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Create class is a static utility class that contains a set of static methods to create various Unity data types.
                Its methods support various ways of initializing these types, making it easier to handle different scenarios in Unity development. 
                By using the Create class, you can write more concise and readable code, enhancing your workflow in Unity projects.
            </p>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The Create class provides a versatile and straightforward way to create common Unity types such as Vector2, Vector2Int, Vector3, Vector3Int, Color and Rect. 
                This class simplifies the process of creating instances of these types with various initialization options, making it easier to handle common values in Unity projects.
            </p> 
            <Group title="Vector2" content={(
                <div>
                    <p>
                        Creates a Vector2 instance with both components set to the same value, by copying the values from another Vector2 or with specified x and y components.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector2</b2> <b1>Vector2</b1>(<b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Vector2</b1>(<b2>Vector2</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Vector2</b1>(<b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>value</b1>: The value to set for both the x and y components</li>                    
                        <li><b2>Vector2</b2> <b1>vector</b1>: The source Vector2 from which to copy values</li>                    
                        <li><b2>float</b2> <b1>x</b1>: The value for the x component</li>                    
                        <li><b2>float</b2> <b1>y</b1>: The value for the y component</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Vector3" content={(
                <div>
                    <p>
                        Creates a Vector3 instance with all components set to the same value, by copying the values from another Vector3, with the x and y components set to the same value and a specified z component or with specified x, y, and z components.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector3</b2> <b1>Vector3</b1>(<b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Vector3</b1>(<b2>Vector3</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Vector3</b1>(<b2>float</b2> <b1>xy</b1>, <b2>float</b2> <b1>z</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Vector3</b1>(<b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>, <b2>float</b2> <b1>z</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>value</b1>: The value to set for the x, y, and z components</li>                    
                        <li><b2>Vector3</b2> <b1>vector</b1>: The source Vector3 from which to copy values</li>                    
                        <li><b2>float</b2> <b1>x</b1>: The value for the x component</li>                    
                        <li><b2>float</b2> <b1>y</b1>: The value for the y component</li>                    
                        <li><b2>float</b2> <b1>z</b1>: The value for the y component</li>                    
                        <li><b2>float</b2> <b1>xy</b1>: The value for the x and y components</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Vector2Int" content={(
                <div>
                    <p>
                        Creates a Vector2Int instance with both components set to the same value, by copying the values from another Vector2Int or with specified x and y components.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector2Int</b2> <b1>Vector2Int</b1>(<b2>int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Vector2Int</b1>(<b2>Vector2Int</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Vector2Int</b1>(<b2>int</b2> <b1>x</b1>, <b2>int</b2> <b1>y</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>value</b1>: The value to set for both the x and y components</li>                    
                        <li><b2>Vector2Int</b2> <b1>vector</b1>: The source Vector2Int from which to copy values</li>                    
                        <li><b2>int</b2> <b1>x</b1>: The value for the x component</li>                    
                        <li><b2>int</b2> <b1>y</b1>: The value for the y component</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Vector3Int" content={(
                <div>
                    <p>
                        Creates a Vector3Int instance with all components set to the same value, by copying the values from another Vector3Int, with the x and y components set to the same value and a specified z component or with specified x, y, and z components.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector3Int</b2> <b1>Vector3Int</b1>(<b2>int</b2> <b1>value</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Vector3Int</b1>(<b2>Vector3Int</b2> <b1>vector</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Vector3Int</b1>(<b2>int</b2> <b1>xy</b1>, <b2>int</b2> <b1>z</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Vector3Int</b1>(<b2>int</b2> <b1>x</b1>, <b2>int</b2> <b1>y</b1>, <b2>int</b2> <b1>z</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>value</b1>: The value to set for the x, y, and z components</li>                    
                        <li><b2>Vector3Int</b2> <b1>vector</b1>: The source Vector3Int from which to copy values</li>                    
                        <li><b2>int</b2> <b1>x</b1>: The value for the x component</li>                    
                        <li><b2>int</b2> <b1>y</b1>: The value for the y component</li>                    
                        <li><b2>int</b2> <b1>z</b1>: The value for the y component</li>                    
                        <li><b2>int</b2> <b1>xy</b1>: The value for the x and y components</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Color" content={(
                <div>
                    <p>
                        Creates a Color instance from a hex string, with all components set to a normalized value from an integer, with the RGB components set to a normalized value from an integer and a specified alpha component, with all components set to the same float value, by copying the values from another Color, with the RGB components set to the same value and a specified alpha component or with specified red, green, blue, and alpha components.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Color</b2> <b1>Color</b1>(<b2>string</b2> <b1>hex</b1>)</li>
                        <li><b2>static Color</b2> <b1>Color</b1>(<b2>int</b2> <b1>rgb</b1>, <b2>int</b2> <b1>a = 255</b1>)</li>
                        <li><b2>static Color</b2> <b1>Color</b1>(<b2>int</b2> <b1>r</b1>, <b2>int</b2> <b1>g</b1>, <b2>int</b2> <b1>b</b1>, <b2>int</b2> <b1>a</b1>)</li>
                        <li><b2>static Color</b2> <b1>Color</b1>(<b2>float</b2> <b1>rgb</b1>, <b2>float</b2> <b1>a = 1</b1>)</li>
                        <li><b2>static Color</b2> <b1>Color</b1>(<b2>float</b2> <b1>r</b1>, <b2>float</b2> <b1>g</b1>, <b2>float</b2> <b1>b</b1>, <b2>float</b2> <b1>a</b1>)</li>
                        <li><b2>static Color</b2> <b1>Color</b1>(<b2>Color</b2> <b1>vector</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>hex</b1>: The hex string representing the color</li>                    
                        <li><b2>int</b2> <b1>rgb</b1>: The integer value to normalize and use for the RGB components</li>                    
                        <li><b2>int</b2> <b1>r</b1>: The integer value to normalize and use for the red component</li>                    
                        <li><b2>int</b2> <b1>g</b1>: The integer value to normalize and use for the green component</li>                    
                        <li><b2>int</b2> <b1>b</b1>: The integer value to normalize and use for the blue component</li>                    
                        <li><b2>int</b2> <b1>a</b1>: The integer value to normalize and use for the alpha component</li>                    
                        <li><b2>float</b2> <b1>rgb</b1>: The value for the RGB components</li>                    
                        <li><b2>float</b2> <b1>r</b1>: The value for the red component</li>                    
                        <li><b2>float</b2> <b1>g</b1>: The value for the green component</li>                    
                        <li><b2>float</b2> <b1>b</b1>: The value for the blue component</li>                    
                        <li><b2>float</b2> <b1>a</b1>: The value for the alpha component</li>                    
                        <li><b2>Color</b2> <b1>color</b1>: The source Color from which to copy values</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Rect" content={(
                <div>
                    <p>
                        Creates a Rect instance with all dimensions set to the same value, by copying the values from another Rect, with specified position and size, with a specified position and dimensions, with specified x and y positions and a size or with specified x and y positions and dimensions.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Rect</b2> <b1>Rect</b1>(<b2>float</b2> <b1>value</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Rect</b1>(<b2>float</b2> <b1>position</b1>, <b2>float</b2> <b1>size</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Rect</b1>(<b2>float</b2> <b1>position</b1>, <b2>Vector2</b2> <b1>size</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Rect</b1>(<b2>Vector2</b2> <b1>position</b1>, <b2>Vector2</b2> <b1>size</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Rect</b1>(<b2>Vector2</b2> <b1>position</b1>, <b2>float</b2> <b1>w</b1>, <b2>float</b2> <b1>h</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Rect</b1>(<b2>Vector2</b2> <b1>position</b1>, <b2>float</b2> <b1>size</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Rect</b1>(<b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>, <b2>Vector2</b2> <b1>size</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Rect</b1>(<b2>float</b2> <b1>x</b1>, <b2>float</b2> <b1>y</b1>, <b2>float</b2> <b1>w</b1>, <b2>float</b2> <b1>h</b1>)</li>
                        <li><b2>static Rect</b2> <b1>Rect</b1>(<b2>Rect</b2> <b1>vector</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>value</b1>: The value to set for the x, y, width, and height components</li>                    
                        <li><b2>Rect</b2> <b1>rect</b1>: The source Rect from which to copy values</li>                    
                        <li><b2>Vector2</b2> <b1>position</b1>: The position of the Rect</li>                    
                        <li><b2>Vector2</b2> <b1>size</b1>: The size of the Rect</li>                    
                        <li><b2>float</b2> <b1>position</b1>: The x and y position of the Rect</li>                    
                        <li><b2>float</b2> <b1>size</b1>: Thew and h size of the Rect</li>                    
                        <li><b2>float</b2> <b1>x</b1>: The x position of the Rect</li>                    
                        <li><b2>float</b2> <b1>y</b1>: The y position of the Rect</li>                    
                        <li><b2>float</b2> <b1>w</b1>: The w position of the Rect</li>                    
                        <li><b2>float</b2> <b1>h</b1>: The h position of the Rect</li>                    
                    </ul>
                </div>
            )}/>

            <h3 className="p-2">Examples</h3>
            <Group title="Example 01: Creating Vector2 and Vector2Int Instances" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Create/Create - 01.jpg" alt=""/>            
                    <p>
                        This example demonstrates the use of the Create utility to generate Vector2 and Vector2Int instances. 
                        It showcases different ways to create these vectors, including using a single value for both axes, copying an existing vector and defining explicit x and y values. 
                        The results are logged to the Console for verification.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-90" src="images/Library/Utilities/Create/Create - 02.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 02: Creating Vector3 and Vector3Int Instances" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Create/Create - 03.jpg" alt=""/>            
                    <p>
                        This example demonstrates the creation of Vector3 and Vector3Int instances using the Create utility. 
                        It showcases different ways to initialize these vectors, including single-value assignments (where all components are set to the same value), copying from an existing vector, two-value assignments (defining x and y while z is explicitly set) and full three-component initialization. 
                        The script logs each created vector to the Console, providing a clear understanding of how the Create utility simplifies vector instantiation in Unity.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-90" src="images/Library/Utilities/Create/Create - 04.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 03: Creating Colors with Magikus" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Create/Create - 05.jpg" alt=""/>            
                    <p>
                        This example demonstrates various ways to create Color instances using the Create.Color method. 
                        It showcases different input formats, including hexadecimal values, single RGB or RGBA values, normalized color values and existing Color instances. 
                        Each method is logged in the Console to illustrate the resulting color representation.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-90" src="images/Library/Utilities/Create/Create - 06.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 04: Creating Rect Instances with Different Parameters" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Create/Create - 07.jpg" alt=""/>            
                    <p>
                        This example demonstrates various ways to create Rect instances using the Create.Rect method. 
                        It showcases different parameter combinations, including single values, multiple values, Vector2 and existing Rect instances, providing flexibility in defining rectangle dimensions and positions.
                        Each created Rect is logged to the console, illustrating how different inputs generate specific rectangle configurations.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-90" src="images/Library/Utilities/Create/Create - 08.jpg" alt=""/>            
                </div>
            )}/>

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The Create class is static, so its methods can be used without creating an instance of the class.</li>
                <li>The hex color values should be valid HTML color codes.</li>
                <li>The methods involving Vector2, Vector2Int, Vector3, Vector3Int, and Rect facilitate creating instances with default or specified values, simplifying the initialization process in Unity.</li>
            </ul>
       </div>
    );
}