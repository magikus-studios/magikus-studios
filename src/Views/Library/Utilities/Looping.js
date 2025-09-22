import React from "react";
import Group from "Components/Group";

export default function Function() {

    
    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Looping Utilities</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Methods designed to Simplify Looping through Different Types of Collections
            </h6>
                        
            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Looping utilities offer an easy and intuitive way to work with collections in Unity, providing methods for forward and backward looping. 
                By abstracting the complexity of iteration, developers can focus on logic and functionality without worrying about the mathematical intricacies of looping. 
                This suite of utilities significantly enhances code readability and maintainability, making them a valuable tool in any Unity developer's toolkit.
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-40" src="images/Library/Utilities/Looping/Looping - 09.jpg" alt=""/>            
            </div>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                These methods allow looping to occur either from the start to the end or in reverse (backward), offering significant flexibility when iterating over items. 
                The utilities can be used with both simple data types like integers and floats, as well as more complex structures like vectors, colors, AnimationCurves, Texture2Ds, Sprites and character arrays (strings).            
            </p> 
            <Group title="Numbers" content={(
                <div>
                    <p>
                        Loops a specified number of times (amount), executing the provided action on each iteration or Loops backward, starting from amount and decreasing, executing the action on each iteration.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this int</b2> <b1>amount</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this float</b2> <b1>amount</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this int</b2> <b1>amount</b1>, <b2>Action{"<int>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this float</b2> <b1>amount</b1>, <b2>Action{"<int>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this int</b2> <b1>amount</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this float</b2> <b1>amount</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this int</b2> <b1>amount</b1>, <b2>Func{"<int, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this float</b2> <b1>amount</b1>, <b2>Func{"<int, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this int</b2> <b1>amount</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this float</b2> <b1>amount</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this int</b2> <b1>amount</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<int>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this float</b2> <b1>amount</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<int>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this int</b2> <b1>amount</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this float</b2> <b1>amount</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this int</b2> <b1>amount</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<int, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this float</b2> <b1>amount</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<int, bool>"}</b2> <b1>condition</b1>)</li>
                        <br/>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this int</b2> <b1>amount</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this float</b2> <b1>amount</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this int</b2> <b1>amount</b1>, <b2>Action{"<int>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this float</b2> <b1>amount</b1>, <b2>Action{"<int>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this int</b2> <b1>amount</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this float</b2> <b1>amount</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this int</b2> <b1>amount</b1>, <b2>Func{"<int, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this float</b2> <b1>amount</b1>, <b2>Func{"<int, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this int</b2> <b1>amount</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this float</b2> <b1>amount</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this int</b2> <b1>amount</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<int>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this float</b2> <b1>amount</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<int>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this int</b2> <b1>amount</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this float</b2> <b1>amount</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this int</b2> <b1>amount</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<int, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this float</b2> <b1>amount</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<int, bool>"}</b2> <b1>condition</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>amount</b1>: The number of iterations for the loop. Defines how many times the loop should run. In LoopBack, it represents the starting index for reverse looping.</li>                    
                        <li><b2>float</b2> <b1>amount</b1>: A floating-point alternative for the amount parameter. It functions similarly to the integer version, but provides flexibility for floating-point calculations.</li>                    
                        <li><b2>int</b2> <b1>startIndex</b1>: The index at which to start the loop. Useful for cases where looping does not need to start at 0 or where looping in reverse starts from a specific index.</li>                    
                        <li><b2>Action</b2> <b1>action</b1>: A delegate (or lambda function) representing the code to be executed during each iteration of the loop. No parameters are passed to the action.</li>                    
                        <li><b2>Action{"<int>"}</b2> <b1>action</b1>: Similar to the Action delegate, but the current loop index is passed as an argument to the action.</li>                    
                        <li><b2>Func{"<bool>"}</b2> <b1>condition</b1>: A function that returns a boolean value and is evaluated on each iteration. The loop continues as long as the condition evaluates to false.</li>                    
                        <li><b2>Func{"<int, bool>"}</b2> <b1>condition</b1>: Similar to Func{"<bool>"}, but the current loop index is passed as a parameter to the condition. The loop will continue as long as the condition returns false for each index.</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Vectors" content={(
                <div>
                    <p>
                        Loops through the components of a Vector and executes an action using each component as the argument or Loops backward through the components of a Vector, executing the action with each component.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>Action{"<float>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>Action{"<float>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>Action{"<int>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>Action{"<int>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>Action{"<int, float>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>Action{"<int, float>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>Action{"<int, int>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>Action{"<int, int>"}</b2> <b1>action</b1>)</li>
                        <br/>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>Action{"<float>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>Action{"<float>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>Action{"<int>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>Action{"<int>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Vector2</b2> <b1>vector</b1>, <b2>Action{"<int, float>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Vector3</b2> <b1>vector</b1>, <b2>Action{"<int, float>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Vector2Int</b2> <b1>vector</b1>, <b2>Action{"<int, int>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Vector3Int</b2> <b1>vector</b1>, <b2>Action{"<int, int>"}</b2> <b1>action</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Vector2</b2> <b1>vector</b1>: Represents a 2D vector with x and y float components. The method loops through each component and performs actions based on the current float value or index-value pair.</li>                    
                        <li><b2>Vector3</b2> <b1>vector</b1>: Represents a 3D vector with x, y, and z float components. The method loops through each component, performing actions based on the float value or index-value pair.</li>                    
                        <li><b2>Vector2Int</b2> <b1>vector</b1>: Represents a 2D vector with integer components (x and y). The method loops through each integer component, executing actions based on the current integer value or index-value pair.</li>                    
                        <li><b2>Vector3Int</b2> <b1>vector</b1>: Represents a 3D vector with integer components (x, y, and z). The method loops through each integer component, performing actions based on the current integer value or index-value pair.</li>                    
                        <li><b2>Action{"<float>"}</b2> <b1>action</b1>: A delegate or lambda function that accepts a float parameter. It is executed for each vector component during the loop, passing the float value (e.g., x, y, or z for Vector3).</li>                    
                        <li><b2>Action{"<int>"}</b2> <b1>action</b1>: A delegate or lambda function that accepts an integer parameter. It is executed for each component of an integer vector (e.g., x, y for Vector2Int, x, y, z for Vector3Int).</li>                    
                        <li><b2>Action{"<int, float>"}</b2> <b1>action</b1>: A delegate or lambda function that accepts two parameters, an index and the corresponding float value of the vector component. It is executed for each component of a Vector2 or Vector3 during the loop.</li>                    
                        <li><b2>Action{"<int, int>"}</b2> <b1>action</b1>: A delegate or lambda function that accepts two parameters, an index (0 for x, 1 for y, etc.) and the corresponding integer value of the vector component. It is executed for each component during the loop.</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Color" content={(
                <div>
                    <p>
                        Loops through the color components (Red, Green, Blue and optionally Alpha), passing each component's float value to the provided action or Loops backwards through the color components.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>Action{"<float>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>Action{"<int, float>"}</b2> <b1>action</b1>)</li>                    
                        <li><b2>static void</b2> <b1>LoopA</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>Action{"<float>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopA</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>Action{"<int, float>"}</b2> <b1>action</b1>)</li>                    
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>Action{"<float>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>Action{"<int, float>"}</b2> <b1>action</b1>)</li>                                        
                        <li><b2>static void</b2> <b1>LoopBackA</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>Action{"<float>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBackA</b1>(<b2>this Color</b2> <b1>color</b1>, <b2>Action{"<int, float>"}</b2> <b1>action</b1>)</li>                    
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Color</b2> <b1>color</b1>: Represents a Unity color with Red, Green, Blue, and optionally Alpha (transparency) components. The methods loop through these components, allowing actions to be performed on each.</li>                    
                        <li><b2>Action{"<float>"}</b2> <b1>action</b1>: A delegate or lambda function that accepts a float parameter. It is executed for each color component during the loop, passing the component value (e.g., Red, Green, Blue, or Alpha) to the action.</li>                    
                        <li><b2>Action{"<int, float>"}</b2> <b1>action</b1>: A delegate or lambda function that accepts two parameters, an integer index (representing the component's position, e.g., 0 for Red, 1 for Green, etc.) and the corresponding float value of the color component. It is executed for each component of the Color during the loop.</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Color Array" content={(
                <div>
                    <p>
                        The Color Array looping methods provide a flexible set of static extension methods that allow you to loop through the pixel colors of a Texture2D or Sprite image. 
                        These methods support both forward and backward looping, starting from the first or a specified pixel index. 
                        The loop can perform actions on each pixel or execute based on conditions. 
                        The methods allow developers to work with either simple actions or more complex lambda functions involving pixel indices and color values. 
                        You can apply various operations on each pixel's color, making them ideal for tasks such as image manipulation, pixel-based effects or color mapping.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Texture2D</b2> <b1>image</b1>, <b2>Action{"<Color>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Sprite</b2> <b1>image</b1>, <b2>Action{"<Color>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Texture2D</b2> <b1>image</b1>, <b2>Action{"<int, Color>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Sprite</b2> <b1>image</b1>, <b2>Action{"<int, Color>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Texture2D</b2> <b1>image</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Sprite</b2> <b1>image</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Texture2D</b2> <b1>image</b1>, <b2>Func{"<Color, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Sprite</b2> <b1>image</b1>, <b2>Func{"<Color, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Texture2D</b2> <b1>image</b1>, <b2>Func{"<int, Color, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Sprite</b2> <b1>image</b1>, <b2>Func{"<int, Color, bool>"}</b2> <b1>condition</b1>)</li>
                        <br/>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Texture2D</b2> <b1>image</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<Color>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Sprite</b2> <b1>image</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<Color>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Texture2D</b2> <b1>image</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<int, Color>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Sprite</b2> <b1>image</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<int, Color>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Texture2D</b2> <b1>image</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Sprite</b2> <b1>image</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Texture2D</b2> <b1>image</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<Color, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Sprite</b2> <b1>image</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<Color, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Texture2D</b2> <b1>image</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<int, Color, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this Sprite</b2> <b1>image</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<int, Color, bool>"}</b2> <b1>condition</b1>)</li>
                        <br/>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Texture2D</b2> <b1>image</b1>, <b2>Action{"<Color>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Sprite</b2> <b1>image</b1>, <b2>Action{"<Color>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Texture2D</b2> <b1>image</b1>, <b2>Action{"<int, Color>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Sprite</b2> <b1>image</b1>, <b2>Action{"<int, Color>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Texture2D</b2> <b1>image</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Sprite</b2> <b1>image</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Texture2D</b2> <b1>image</b1>, <b2>Func{"<Color, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Sprite</b2> <b1>image</b1>, <b2>Func{"<Color, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Texture2D</b2> <b1>image</b1>, <b2>Func{"<int, Color, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Sprite</b2> <b1>image</b1>, <b2>Func{"<int, Color, bool>"}</b2> <b1>condition</b1>)</li>
                        <br/>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Texture2D</b2> <b1>image</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<Color>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Sprite</b2> <b1>image</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<Color>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Texture2D</b2> <b1>image</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<int, Color>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Sprite</b2> <b1>image</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<int, Color>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Texture2D</b2> <b1>image</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Sprite</b2> <b1>image</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Texture2D</b2> <b1>image</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<Color, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Sprite</b2> <b1>image</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<Color, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Texture2D</b2> <b1>image</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<int, Color, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this Sprite</b2> <b1>image</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<int, Color, bool>"}</b2> <b1>condition</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Texture2D</b2> <b1>image</b1>: This parameter refers to the Texture2D object from Unity that represents a 2D texture. The methods loop through all the pixels in the texture, allowing you to perform actions or evaluations based on the pixel color.</li>                    
                        <li><b2>Sprite</b2> <b1>image</b1>: Refers to the Sprite object in Unity, which is a 2D image that can be rendered in the scene. The methods loop through each pixel in the sprite and perform the actions or conditions on the color values of these pixels.</li>                    
                        <li><b2>int</b2> <b1>startIndex</b1>: This parameter defines the index of the pixel where the loop will begin. The index follows the internal pixel structure of the Texture2D or Sprite. Starting from this index, the loop continues forward or backward based on the specific method.</li>                    
                        <li><b2>Action{"<Color>"}</b2> <b1>action</b1>: Represents a delegate or lambda function that accepts a Color parameter. This action is executed for each pixel's color as the loop iterates through the image.</li>                    
                        <li><b2>Action{"<int, Color>"}</b2> <b1>action</b1>: A delegate or lambda function that accepts two parameters, an integer representing the pixel's index and a Color representing the pixel's color. This allows you to perform actions based on both the pixel's position and its color.</li>                    
                        <li><b2>Func{"<bool>"}</b2> <b1>condition</b1>: A delegate or lambda function that returns a boolean value. The loop continues while this condition is false. This allows for conditional looping based on custom logic.</li>                    
                        <li><b2>Func{"<Color, bool>"}</b2> <b1>condition</b1>: A function that accepts a Color as input and returns a boolean. The loop continues while the function returns false. This enables conditional looping based on the color value of each pixel.</li>                    
                        <li><b2>Func{"<int, Color, bool>"}</b2> <b1>condition</b1>: A function that takes two parameters, an integer representing the pixel index and a Color representing the pixel's color. The loop proceeds while this function returns false, allowing for conditional looping based on both the pixel's index and color.</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Lists and Arrays" content={(
                <div>
                    <p>
                        The Lists and Arrays looping methods provide a versatile and generic set of static extension methods that enable developers to iterate through elements of both arrays and lists (T[] and List{"<T>"}, respectively). 
                        These methods offer the flexibility to loop through the elements either from the first to the last element or in reverse order using LoopBack. 
                        Furthermore, you can specify the starting index of the loop and provide custom actions or conditions that will be evaluated during each iteration.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static void</b2> <b1>Loop{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>Action{"<T>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>Action{"<T>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>Action{"<int, T>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>Action{"<int, T>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>Func{"<T, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>Func{"<T, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>Func{"<int, T, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>Func{"<int, T, bool>"}</b2> <b1>condition</b1>)</li>
                        <br/>
                        <li><b2>static void</b2> <b1>Loop{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<T>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<T>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<int, T>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<int, T>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<T, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<T, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<int, T, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<int, T, bool>"}</b2> <b1>condition</b1>)</li>
                        <br/>
                        <li><b2>static void</b2> <b1>LoopBack{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>Action{"<T>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>Action{"<T>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>Action{"<int, T>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>Action{"<int, T>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>Func{"<T, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>Func{"<T, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>Func{"<int, T, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>Func{"<int, T, bool>"}</b2> <b1>condition</b1>)</li>
                        <br/>
                        <li><b2>static void</b2> <b1>LoopBack{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<T>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<T>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<int, T>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<int, T>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<T, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<T, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<int, T, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<int, T, bool>"}</b2> <b1>condition</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>T[]</b2> <b1>array</b1>: Represents a one-dimensional array of type T. The looping methods iterate over the array elements, performing actions or checking conditions for each element. T can be any data type, including primitive types (like int, float) or complex objects (like Color, Vector3).</li>                    
                        <li><b2>List{"<T>"}</b2> <b1>list</b1>: Represents a generic list of elements of type T. Similar to the array, the looping methods iterate through the elements of the list, allowing operations on each element.</li>                    
                        <li><b2>int</b2> <b1>startIndex</b1>: The index in the array or list from where the loop starts. This allows the developer to begin looping from any specific element instead of always starting from the first element.</li>                    
                        <li><b2>Action</b2> <b1>action</b1>: A delegate or lambda function that performs an action during each iteration of the loop, but it doesn't take any parameters. This is used when the loop needs to perform a global action without processing individual elements.</li>                    
                        <li><b2>Action{"<T>"}</b2> <b1>action</b1>: A delegate or lambda function that accepts a parameter of type T (the element in the array or list). This action is executed for each element of the array or list as the loop iterates through them.</li>                    
                        <li><b2>Action{"<int, T>"}</b2> <b1>action</b1>: Action{"<int, T>"} action: A delegate or lambda function that accepts two parameters, an integer representing the element's index and a parameter of type T representing the element itself. This allows actions to be based on both the element's value and its position in the array or list.</li>                    
                        <li><b2>Func{"<bool>"}</b2> <b1>condition</b1>: A delegate or lambda function that returns a boolean value (true or false). The loop will continue as long as this condition is false. This allows for conditional looping based on external factors, rather than iterating over every element.</li>                    
                        <li><b2>Func{"<T, bool>"}</b2> <b1>condition</b1>: A function that accepts a parameter of type T (the element in the array or list) and returns a boolean. The loop will continue as long as the function returns false, allowing for conditional looping based on the value of each element.</li>                    
                        <li><b2>Func{"<int, T, bool>"}</b2> <b1>condition</b1>: A function that accepts two parameters, an integer representing the element's index and a parameter of type T representing the element itself. The loop will proceed as long as this function returns false, enabling conditional looping based on both the element's value and its index in the array or list.</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Dictonary" content={(
                <div>
                    <p>
                        The Dictionary looping methods provide a series of static extension methods that allow developers to iterate over dictionaries (Dictionary{"<K, V>"}). 
                        These methods support various looping patterns that can iterate over the dictionary's key-value pairs, the values alone or execute actions based on conditions for each element. 
                        LoopBack methods allow for iteration in reverse order, starting from the last key-value pair in the dictionary.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static void</b2> <b1>Loop{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>Action{"<V>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>Action{"<K, V>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>Action{"<int, K, V>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>Func{"<V, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>Func{"<K, V, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>Func{"<int, K, V, bool>"}</b2> <b1>condition</b1>)</li>
                        <br/>
                        <li><b2>static void</b2> <b1>Loop{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<V>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<K, V>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<int, K, V>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<V, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<K, V, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<int, K, V, bool>"}</b2> <b1>condition</b1>)</li>
                        <br/>
                        <li><b2>static void</b2> <b1>LoopBack{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>Action{"<V>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>Action{"<K, V>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>Action{"<int, K, V>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>Func{"<V, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>Func{"<K, V, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>Func{"<int, K, V, bool>"}</b2> <b1>condition</b1>)</li>
                        <br/>
                        <li><b2>static void</b2> <b1>LoopBack{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<V>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<K, V>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<int, K, V>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<V, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<K, V, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack{"<K, V>"}</b1>(<b2>this Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<int, K, V, bool>"}</b2> <b1>condition</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Dictionary{"<K, V>"}</b2> <b1>dictionary</b1>: Represents a dictionary where each element is a key-value pair, with K being the type of the key and V being the type of the value. The looping methods allow iterating over both the keys and values or just the values. The dictionary can store any type for K and V.</li>                    
                        <li><b2>int</b2> <b1>startIndex</b1>: Specifies the starting index in the dictionary from which the loop should begin. This allows you to skip over earlier entries and start processing elements from a specific position in the dictionary.</li>                    
                        <li><b2>Action</b2> <b1>action</b1>: A delegate or lambda function that performs an action during each iteration of the loop but does not take any parameters. This is useful when the action being performed doesn't need to interact with the dictionary's keys or values directly.</li>                    
                        <li><b2>Action{"<V>"}</b2> <b1>action</b1>: A delegate or lambda function that takes a single parameter of type V (the value in the dictionary). This action is performed on each value in the dictionary.</li>                    
                        <li><b2>Action{"<K, V>"}</b2> <b1>action</b1>: A delegate or lambda function that takes two parameters, K, representing the key, and V, representing the value. This allows actions to be performed based on both the key and value of each dictionary entry.</li>                    
                        <li><b2>Action{"<int, K, V>"}</b2> <b1>action</b1>: A delegate or lambda function that takes three parameters, an integer representing the index of the current element, K representing the key, and V representing the value. This provides the added benefit of knowing the index of each key-value pair during the iteration, allowing for more complex actions based on the order of elements in the dictionary.</li>                    
                        <li><b2>Func{"<bool>"}</b2> <b1>condition</b1>: A delegate or lambda function that returns a boolean value (true or false). The loop continues as long as this condition is false. This enables conditional looping based on external criteria.</li>                    
                        <li><b2>Func{"<V, bool>"}</b2> <b1>condition</b1>: A delegate or lambda function that takes a parameter of type V (the value in the dictionary) and returns a boolean. The loop will continue as long as this function returns false for each value, allowing conditional iteration based on the values.</li>                    
                        <li><b2>Func{"<K, V, bool>"}</b2> <b1>condition</b1>: A delegate or lambda function that takes two parameters, K representing the key and V representing the value. It returns a boolean value, and the loop will proceed as long as the function returns false for each key-value pair. This enables conditional looping based on both the key and value.</li>                    
                        <li><b2>Func{"<int, K, V, bool>"}</b2> <b1>condition</b1>: A delegate or lambda function that takes three parameters, an integer representing the index, K representing the key, and V representing the value. It returns a boolean value, and the loop will continue as long as this function returns false for each key-value pair. This allows for more granular control over the loop by considering the index as well as the key and value.</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="AnimationCurve" content={(
                <div>
                    <p>
                        The AnimationCurve looping methods provide a set of extension methods that allow developers to iterate through keyframes in an AnimationCurve. 
                        These methods enable the developer to execute a specified action on each keyframe, index or properties of the keyframe. 
                        They also allow for iteration based on conditions, providing flexibility to loop through the keyframes based on custom logic. 
                        The primary use of these methods is to simplify the process of interacting with and modifying keyframes in an animation curve, either in forward or reverse (LoopBack) order, with the option to start from a specific index or conditionally stop the iteration.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>Action{"<Keyframe>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>Action{"<int, Keyframe>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>Action{"<int, float, float>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>Func{"<Keyframe, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>Func{"<int, Keyframe, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>Func{"<int, float, float, bool>"}</b2> <b1>condition</b1>)</li>
                        <br/>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<Keyframe>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<int, Keyframe>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<int, float, float>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<Keyframe, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<int, Keyframe, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<int, float, float, bool>"}</b2> <b1>condition</b1>)</li>
                        <br/>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>Action{"<Keyframe>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>Action{"<int, Keyframe>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>Action{"<int, float, float>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>Func{"<Keyframe, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>Func{"<int, Keyframe, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>Func{"<int, float, float, bool>"}</b2> <b1>condition</b1>)</li>
                        <br/>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<Keyframe>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<int, Keyframe>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<int, float, float>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<Keyframe, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<int, Keyframe, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<int, float, float, bool>"}</b2> <b1>condition</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>AnimationCurve</b2> <b1>curve</b1>: Represents the curve that stores keyframes used in an animation. This curve is defined by a series of Keyframe objects, which include information about the time and value of a curve at certain points. These methods iterate through the keyframes in this curve.</li>                    
                        <li><b2>int</b2> <b1>startIndex</b1>: Specifies the starting index from which the loop should begin. It allows the developer to begin processing keyframes at a specific position in the curve rather than starting from the first keyframe.</li>                                            
                        <li><b2>Action</b2> <b1>action</b1>: A delegate or lambda function that performs an action during each iteration without any parameters. Useful when the operation does not require direct access to the keyframe or other data.</li>                    
                        <li><b2>Action{"<Keyframe>"}</b2> <b1>action</b1>: A delegate or lambda function that takes a Keyframe object as a parameter. This allows the loop to execute an action based on the specific keyframe being iterated.</li>                    
                        <li><b2>Action{"<int, Keyframe>"}</b2> <b1>action</b1>: A delegate or lambda function that takes two parameters, an integer representing the index of the current keyframe and the Keyframe itself. This provides additional context, such as the position of the keyframe within the curve, and allows for more complex actions.</li>                    
                        <li><b2>Action{"<int, float, float>"}</b2> <b1>action</b1>: A delegate or lambda function that takes three parameters, the index of the keyframe, the time of the keyframe (float) and the value of the keyframe (float). This method is helpful for operations that need to work with the keyframe’s time and value directly, rather than the whole Keyframe object.</li>                                            
                        <li><b2>Func{"<bool>"}</b2> <b1>condition</b1>: A delegate or lambda function that returns a boolean value (true or false). The loop continues while this condition remains false. This allows for the loop to be controlled by an external or custom condition.</li>                    
                        <li><b2>Func{"<Keyframe, bool>"}</b2> <b1>condition</b1>: A delegate or lambda function that takes a Keyframe object and returns a boolean. The loop proceeds as long as the condition returns false for each keyframe, enabling selective processing of keyframes based on their data.</li>                    
                        <li><b2>Func{"<int, Keyframe, bool>"}</b2> <b1>condition</b1>: A delegate or lambda function that takes two parameters, the index of the keyframe and the Keyframe object. It returns a boolean and controls whether the loop continues based on both the index and keyframe data.</li>                    
                        <li><b2>Func{"<int, float, float, bool>"}</b2> <b1>condition</b1>: A delegate or lambda function that takes three parameters, the index of the keyframe, the keyframe’s time (float) and the keyframe’s value (float). It returns a boolean value, allowing the loop to proceed while this condition remains false. This enables iteration control based on keyframe properties.</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Text" content={(
                <div>
                    <p>
                        The Text looping methods provide a series of simple loops for common character and string-based tasks, allowing developers to interact with ASCII characters, weekdays and months through various actions. 
                        These methods aim to reduce repetitive code by handling basic looping structures around ASCII characters, weekdays and months, applying an Action delegate for each element within these sets.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static void</b2> <b1>ASCI</b1>(<b2>Action{"<char>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>ASCI</b1>(<b2>Action{"<string>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Weekdays</b1>(<b2>Action{"<int>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Weekdays</b1>(<b2>Action{"<string>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Weekdays</b1>(<b2>Action{"<int, string>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Months</b1>(<b2>Action{"<int>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Months</b1>(<b2>Action{"<string>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Months</b1>(<b2>Action{"<int, string>"}</b2> <b1>action</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Action{"<char>"}</b2> <b1>action</b1>: A delegate or lambda function that takes a single char parameter and performs an action on it. This is used when working with individual characters (e.g., looping through ASCII characters).</li>                    
                        <li><b2>Action{"<string>"}</b2> <b1>action</b1>: A delegate or lambda function that takes a single string parameter and performs an action on it. This is useful for string-based data, such as weekday or month names.</li>                    
                        <li><b2>Action{"<int>"}</b2> <b1>action</b1>: A delegate or lambda function that takes a single integer parameter. This action is executed on an integer, typically representing the index or position of an element, such as a day of the week or month of the year.</li>                    
                        <li><b2>Action{"<int, string>"}</b2> <b1>action</b1>: A delegate or lambda function that takes two parameters, an integer representing the index (e.g., day number or month number) and a string representing the value (e.g., weekday name or month name). This enables developers to perform operations that require both index and string-based values.</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="String" content={(
                <div>
                    <p>
                        The String looping methods provide a comprehensive set of looping mechanisms to interact with the individual characters or substrings of a string, allowing developers to apply different actions and conditions during these iterations. 
                        These methods offer flexibility in looping through the content of a string, with variations allowing for additive looping, backward looping and indexed looping, among others. 
                        They allow for a wide range of operations, including performing actions on specific characters or substrings, evaluating conditions and controlling the starting point for the loop.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Action{"<string>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Action{"<int, string>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Func{"<string, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Func{"<int, string, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<string>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<int, string>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<string, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>Loop</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<int, string, bool>"}</b2> <b1>condition</b1>)</li>
                        <br/>
                        <li><b2>static void</b2> <b1>LoopChar</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Action{"<char>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopChar</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Action{"<int, char>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopChar</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Func{"<char, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopChar</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Func{"<int, char, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopChar</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<char>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopChar</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<int, char>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopChar</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<char, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopChar</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<int, char, bool>"}</b2> <b1>condition</b1>)</li>
                        <br/>
                        <li><b2>static void</b2> <b1>LoopAditive</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Action{"<string>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopAditive</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Action{"<int, string>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopAditive</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Func{"<string, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopAditive</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Func{"<int, string, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopAditive</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<string>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopAditive</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<int, string>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopAditive</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<string, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopAditive</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<int, string, bool>"}</b2> <b1>condition</b1>)</li>
                        <br/>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Action{"<string>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Action{"<int, string>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Func{"<string, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Func{"<int, string, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<string>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<int, string>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<string, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBack</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<int, string, bool>"}</b2> <b1>condition</b1>)</li>
                        <br/>
                        <li><b2>static void</b2> <b1>LoopBackChar</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Action{"<char>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBackChar</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Action{"<int, char>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBackChar</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Func{"<char, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBackChar</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Func{"<int, char, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBackChar</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<char>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBackChar</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<int, char>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBackChar</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<char, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBackChar</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<int, char, bool>"}</b2> <b1>condition</b1>)</li>
                        <br/>
                        <li><b2>static void</b2> <b1>LoopBackAditive</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Action{"<string>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBackAditive</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Action{"<int, string>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBackAditive</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Func{"<string, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBackAditive</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Func{"<int, string, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBackAditive</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<string>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBackAditive</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Action{"<int, string>"}</b2> <b1>action</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBackAditive</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<string, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static void</b2> <b1>LoopBackAditive</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>Func{"<int, string, bool>"}</b2> <b1>condition</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>text</b1>: This parameter represents the input string on which the looping operations are performed. It is the base text whose characters or substrings will be iterated.</li>                    
                        <li><b2>int</b2> <b1>startIndex</b1>: Specifies the index in the string where the loop should begin. This allows for partial looping starting from any given position in the string.</li>                    
                        <li><b2>Action</b2> <b1>action</b1>: A delegate or lambda function that takes no parameters and performs a specified action within each iteration of the loop. This is commonly used for loops that execute a constant action on each iteration without interacting with the specific characters or substrings.</li>                    
                        <li><b2>Action{"<char>"}</b2> <b1>action</b1>: A delegate or lambda function that accepts a char (character) parameter. It performs the specified action on each individual character of the string.</li>                    
                        <li><b2>Action{"<int, char>"}</b2> <b1>action</b1>: A delegate or lambda function that accepts both an integer (the character index) and a char (character). This action is executed on both the index and the character, useful when you need to know the character's position in the string.</li>                    
                        <li><b2>Action{"<string>"}</b2> <b1>action</b1>: A delegate or lambda function that takes a string parameter and performs an action on each substring during the loop. This is often used when breaking down strings into substrings for processing.</li>                    
                        <li><b2>Action{"<int, string>"}</b2> <b1>action</b1>: A delegate or lambda function that takes two parameters, an integer representing the index and a string representing the substring. This action is applied to both the index and the substring in each loop iteration.</li>                    
                        <li><b2>Func{"<bool>"}</b2> <b1>condition</b1>: A delegate that represents a function returning a bool (boolean) value. The loop continues as long as this condition evaluates to false. It controls the flow of the loop based on a boolean condition.</li>                    
                        <li><b2>Func{"<char, bool>"}</b2> <b1>condition</b1>: A delegate that takes a char parameter and returns a bool value. The loop continues or halts based on this evaluation for each character in the string.</li>                    
                        <li><b2>Func{"<int, char, bool>"}</b2> <b1>condition</b1>: A delegate that takes two parameters, an integer representing the character index and a char representing the character. The loop continues or halts based on this boolean evaluation for each index-character pair.</li>                    
                        <li><b2>Func{"<string, bool>"}</b2> <b1>condition</b1>: A delegate that takes a string parameter and returns a bool value. The loop continues as long as this condition evaluates to true for each substring.</li>                    
                        <li><b2>Func{"<int, string, bool>"}</b2> <b1>condition</b1>: A delegate that takes two parameters, an integer representing the index and a string representing the substring. The loop continues as long as this condition evaluates to true for each index-substring pair.</li>                    
                    </ul>
                </div>
            )}/>

            <h3 className="p-2">Examples</h3>
            <p className="pad-left-3">
                The Looping Utilities simplify looping by abstracting the mathematical complexity behind iterating through collections. 
                Below are three practical examples showing how each of the main looping methods can be applied.
            </p>
            <Group title="Example 01: Looping Forward" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Looping/Looping - 01.jpg" alt=""/>            
                    <p>
                        This example demonstrates the use of the Magikus library to loop through a simple integer and an array in Unity. 
                        The Loop() method is called on both an integer and an integer array, and for each iteration, a Debug.Log statement prints the current value of the number in the loop to the Unity console.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Utilities/Looping/Looping - 02.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 02: Looping Backward" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Looping/Looping - 03.jpg" alt=""/>            
                    <p>
                        This example demonstrates how to loop through a string in reverse order using the Magikus library in Unity. 
                        It defines a Run() method that takes a string, "Hello," and uses the LoopBack method to iterate through each character backward, logging each character to the console with a prefix "Char:".
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Utilities/Looping/Looping - 04.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 03: Looping Through AnimationCurves" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Looping/Looping - 05.jpg" alt=""/>            
                    <p>
                        This example demonstrates how to loop through an AnimationCurve in Unity using the Loop() method. 
                        The Run() method iterates over each keyframe of the curve, logging the keyframe's time and value to the console.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Utilities/Looping/Looping - 06.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 04: Looping Through Texture2D Colors" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Looping/Looping - 07.jpg" alt=""/>            
                    <p>
                        This script loops through all the colors of a Texture2D in Unity, using the Loop method. 
                        It iterates over each color of the texture, logging each color to the console. 
                        The script requires the texture to have its Read/Write setting enabled to allow access to its pixel data.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Utilities/Looping/Looping - 08.jpg" alt=""/>            
                </div>
            )}/>

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The methods optimize for performance by abstracting unnecessary calculations when looping through large collections like textures or large data arrays.</li>
                <li>These utilities are compatible with a variety of Unity data types, making them highly flexible for different use cases like animations, texture manipulations and complex data structures.</li>
                <li>The utilities can be extended to accommodate other Unity objects or custom classes if needed, by defining additional extension methods.</li>
                <li>For extremely large collections, it is recommended to manage memory carefully when looping through textures or arrays to avoid performance hits.</li>
            </ul>
       </div>
    );
}