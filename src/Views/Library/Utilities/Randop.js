import React from "react";
import Group from "Components/Group";

export default function Function() {

    
    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Randop Utilities</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Methods for generating Random Values 
            </h6>
                        
            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Randop utilities provide a robust set of tools for developers, especially in game development, where randomness can add complexity and unpredictability to interactions. 
                These utilities not only speed up development but also enhance the natural feel of in-game dynamics, making them invaluable for any game development project requiring randomness.
                Whether you’re generating random points in a 3D space, selecting random items from an array or applying random colors to visual elements, the Randop methods are efficient and easy to implement. 
            </p>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                These utilities are tailored for game development to add unpredictability and variation in values such as booleans, numbers, vectors, colors and even randomly selected elements from lists or arrays.
                They are especially beneficial in enhancing the realism of interactions and randomization in games.            
            </p> 
            <Group title="Bool" content={(
                <div>
                    <p>
                        Return random true/false values.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static bool</b2> <b1>Bool</b1>(<b2>float</b2> <b1>trueChance = 0.5f</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>trueChance</b1>: The chances (from 0f to 1f) of getting a true value</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Value" content={(
                <div>
                    <p>
                        Generates a random values between the specified min and max range. 
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>Int</b1>(<b2>int</b2> <b1>min = int.MinValue</b1>, <b2>int</b2> <b1>max = int.MaxValue – 1</b1>)</li>
                        <li><b2>static float</b2> <b1>Float</b1>(<b2>float</b2> <b1>min = float.MinValue</b1>, <b2>float</b2> <b1>max = float.MaxValue</b1>)</li>
                        <br/>
                        <li><b2>static Vector2</b2> <b1>Vector2</b1>(<b2>float</b2> <b1>min = float.MinValue</b1>, <b2>float</b2> <b1>max = float.MaxValue</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Vector2</b1>(<b2>float</b2> <b1>min</b1>, <b2>Vector2</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Vector2</b1>(<b2>Vector2</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Vector2</b1>(<b2>Vector2</b2> <b1>min</b1>, <b2>Vector2</b2> <b1>max</b1>)</li>
                        <br/>
                        <li><b2>static Vector2Int</b2> <b1>Vector2Int</b1>(<b2>int</b2> <b1>min = int.MinValue</b1>, <b2>int</b2> <b1>max = int.MaxValue – 1</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Vector2Int</b1>(<b2>int</b2> <b1>min</b1>, <b2>Vector2Int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Vector2Int</b1>(<b2>Vector2Int</b2> <b1>min</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Vector2Int</b1>(<b2>Vector2Int</b2> <b1>min</b1>, <b2>Vector2Int</b2> <b1>max</b1>)</li>
                        <br/>
                        <li><b2>static Vector3</b2> <b1>Vector3</b1>(<b2>float</b2> <b1>min = float.MinValue</b1>, <b2>float</b2> <b1>max = float.MaxValue</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Vector3</b1>(<b2>float</b2> <b1>min</b1>, <b2>Vector3</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Vector3</b1>(<b2>Vector3</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Vector3</b1>(<b2>Vector3</b2> <b1>min</b1>, <b2>Vector3</b2> <b1>max</b1>)</li>
                        <br/>
                        <li><b2>static Vector3Int</b2> <b1>Vector3Int</b1>(<b2>int</b2> <b1>min = int.MinValue</b1>, <b2>int</b2> <b1>max = int.MaxValue – 1</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Vector3Int</b1>(<b2>int</b2> <b1>min</b1>, <b2>Vector3Int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Vector3Int</b1>(<b2>Vector3Int</b2> <b1>min</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Vector3Int</b1>(<b2>Vector3Int</b2> <b1>min</b1>, <b2>Vector3Int</b2> <b1>max</b1>)</li>
                        <br/>
                        <li><b2>static Color</b2> <b1>Color</b1>(<b2>int</b2> <b1>min = 0</b1>, <b2>int</b2> <b1>max = 255</b1>)</li>
                        <li><b2>static Color</b2> <b1>Color</b1>(<b2>int</b2> <b1>min</b1>, <b2>Color</b2> <b1>max</b1>)</li>
                        <li><b2>static Color</b2> <b1>Color</b1>(<b2>Color</b2> <b1>min</b1>, <b2>int</b2> <b1>max</b1>)</li>
                        <li><b2>static Color</b2> <b1>Color</b1>(<b2>float</b2> <b1>min = 0f</b1>, <b2>float</b2> <b1>max = 1f</b1>)</li>
                        <li><b2>static Color</b2> <b1>Color</b1>(<b2>float</b2> <b1>min</b1>, <b2>Color</b2> <b1>max</b1>)</li>
                        <li><b2>static Color</b2> <b1>Color</b1>(<b2>Color</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>)</li>
                        <li><b2>static Color</b2> <b1>Color</b1>(<b2>Color</b2> <b1>min</b1>, <b2>Color</b2> <b1>max</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>min</b1>: The minimum value of the range</li>                    
                        <li><b2>float</b2> <b1>min</b1>: The minimum value of the range</li>                    
                        <li><b2>Vector2</b2> <b1>min</b1>: Minimum range value for each axis</li>                    
                        <li><b2>Vector3</b2> <b1>min</b1>: Minimum range value for each axis</li>                    
                        <li><b2>Vector2Int</b2> <b1>min</b1>: Minimum range value for each axis</li>                    
                        <li><b2>Vector3Int</b2> <b1>min</b1>: Minimum range value for each axis</li>                    
                        <li><b2>Color</b2> <b1>min</b1>: Minimum range value for each axis</li>                    
                        <li><b2>int</b2> <b1>max</b1>: The maximum value of the range</li>                    
                        <li><b2>float</b2> <b1>max</b1>: The maximum value of the range</li>                    
                        <li><b2>Vector2</b2> <b1>max</b1>: Maximum range value for each axis</li>                    
                        <li><b2>Vector3</b2> <b1>max</b1>: Maximum range value for each axis</li>                    
                        <li><b2>Vector2Int</b2> <b1>max</b1>: Maximum range value for each axis</li>                    
                        <li><b2>Vector3Int</b2> <b1>max</b1>: Maximum range value for each axis</li>                    
                        <li><b2>Color</b2> <b1>max</b1>: Maximum range value for each axis</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Range" content={(
                <div>
                    <p>
                        Generates a random value within a specified range, centered around the center value.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>Int_Range</b1>(<b2>int</b2> <b1>range</b1>, <b2>int</b2> <b1>center = 0</b1>)</li>
                        <li><b2>static float</b2> <b1>Float_Range</b1>(<b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <br/>
                        <li><b2>static Vector2</b2> <b1>Vector2_Range</b1>(<b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Vector2_Range</b1>(<b2>float</b2> <b1>range</b1>, <b2>Vector2</b2> <b1>center</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Vector2_Range</b1>(<b2>Vector2</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Vector2_Range</b1>(<b2>Vector2</b2> <b1>range</b1>, <b2>Vector2</b2> <b1>center</b1>)</li>
                        <br/>
                        <li><b2>static Vector2Int</b2> <b1>Vector2Int_Range</b1>(<b2>int</b2> <b1>range</b1>, <b2>int</b2> <b1>center = 0</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Vector2Int_Range</b1>(<b2>int</b2> <b1>range</b1>, <b2>Vector2Int</b2> <b1>center</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Vector2Int_Range</b1>(<b2>Vector2Int</b2> <b1>range</b1>, <b2>int</b2> <b1>center = 0</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Vector2Int_Range</b1>(<b2>Vector2Int</b2> <b1>range</b1>, <b2>Vector2Int</b2> <b1>center</b1>)</li>
                        <br/>
                        <li><b2>static Vector3</b2> <b1>Vector3_Range</b1>(<b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Vector3_Range</b1>(<b2>float</b2> <b1>range</b1>, <b2>Vector3</b2> <b1>center</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Vector3_Range</b1>(<b2>Vector3</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0f</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Vector3_Range</b1>(<b2>Vector3</b2> <b1>range</b1>, <b2>Vector3</b2> <b1>center</b1>)</li>
                        <br/>
                        <li><b2>static Vector3Int</b2> <b1>Vector3Int_Range</b1>(<b2>int</b2> <b1>range</b1>, <b2>int</b2> <b1>center = 0</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Vector3Int_Range</b1>(<b2>int</b2> <b1>range</b1>, <b2>Vector3Int</b2> <b1>center</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Vector3Int_Range</b1>(<b2>Vector3Int</b2> <b1>range</b1>, <b2>int</b2> <b1>center = 0</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Vector3Int_Range</b1>(<b2>Vector3Int</b2> <b1>range</b1>, <b2>Vector3Int</b2> <b1>center</b1>)</li>
                        <br/>
                        <li><b2>static Color</b2> <b1>Color_Range</b1>(<b2>int</b2> <b1>range</b1>, <b2>int</b2> <b1>center = 127</b1>)</li>
                        <li><b2>static Color</b2> <b1>Color_Range</b1>(<b2>Color</b2> <b1>range</b1>, <b2>int</b2> <b1>center = 127</b1>)</li>
                        <li><b2>static Color</b2> <b1>Color_Range</b1>(<b2>int</b2> <b1>range</b1>, <b2>Color</b2> <b1>center</b1>)</li>
                        <li><b2>static Color</b2> <b1>Color_Range</b1>(<b2>float</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0.5f</b1>)</li>
                        <li><b2>static Color</b2> <b1>Color_Range</b1>(<b2>Color</b2> <b1>range</b1>, <b2>float</b2> <b1>center = 0.5f</b1>)</li>
                        <li><b2>static Color</b2> <b1>Color_Range</b1>(<b2>float</b2> <b1>range</b1>, <b2>Color</b2> <b1>center</b1>)</li>
                        <li><b2>static Color</b2> <b1>Color_Range</b1>(<b2>Color</b2> <b1>range</b1>, <b2>Color</b2> <b1>center</b1>)</li>                       
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>range</b1>: Defines the range for generating random values</li>                    
                        <li><b2>float</b2> <b1>range</b1>: Defines the range for generating random values</li>                                            
                        <li><b2>Vector2</b2> <b1>range</b1>: Defines the range for generating random values for each axis</li>                    
                        <li><b2>Vector3</b2> <b1>range</b1>: Defines the range for generating random values for each axis</li>                    
                        <li><b2>Vector2Int</b2> <b1>range</b1>: Defines the range for generating random values for each axis</li>                    
                        <li><b2>Vector3Int</b2> <b1>range</b1>: Defines the range for generating random values for each axis</li>                    
                        <li><b2>Color</b2> <b1>range</b1>: Defines the range for generating random values for each axis</li>                                            
                        <li><b2>int</b2> <b1>center</b1>: The center value of the range</li>                    
                        <li><b2>float</b2> <b1>center</b1>: The center value of the range</li>                                            
                        <li><b2>Vector2</b2> <b1>center</b1>: The center value of the range for each axis</li>                    
                        <li><b2>Vector3</b2> <b1>center</b1>: The center value of the range for each axis</li>                    
                        <li><b2>Vector2Int</b2> <b1>center</b1>: The center value of the range for each axis</li>                    
                        <li><b2>Vector3Int</b2> <b1>center</b1>: The center value of the range for each axis</li>                    
                        <li><b2>Color</b2> <b1>center</b1>: The center value of the range for each axis</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Abs" content={(
                <div>
                    <p>
                        Generates a random positive value between 0 and the specified max value.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>Int_Abs</b1>(<b2>int</b2> <b1>max = int.MaxValue – 1</b1>)</li>
                        <li><b2>static float</b2> <b1>Float_Abs</b1>(<b2>float</b2> <b1>max = float.MaxValue</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Vector2_Abs</b1>(<b2>float</b2> <b1>max = float.MaxValue</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Vector2_Abs</b1>(<b2>Vector2</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Vector2Int_Abs</b1>(<b2>int</b2> <b1>max = int.MaxValue – 1</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Vector2Int_Abs</b1>(<b2>Vector2Int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Vector3_Abs</b1>(<b2>float</b2> <b1>max = float.MaxValue</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Vector3_Abs</b1>(<b2>Vector3</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Vector3Int_Abs</b1>(<b2>int</b2> <b1>max = int.MaxValue – 1</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Vector3Int_Abs</b1>(<b2>Vector3Int</b2> <b1>max</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>max</b1>: The maximum value of the range</li>                    
                        <li><b2>float</b2> <b1>max</b1>: The maximum value of the range</li>                    
                        <li><b2>Vector2</b2> <b1>max</b1>: The maximum range value for each axis</li>                    
                        <li><b2>Vector3</b2> <b1>max</b1>: The maximum range value for each axis</li>                    
                        <li><b2>Vector2Int</b2> <b1>max</b1>: The maximum range value for each axis</li>                    
                        <li><b2>Vector3Int</b2> <b1>max</b1>: The maximum range value for each axis</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Even" content={(
                <div>
                    <p>
                        Retrieves a random even value within the specified range.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>Int_Even</b1>(<b2>int</b2> <b1>max = (int.MaxValue - 1) / 2</b1>)</li>
                        <li><b2>static float</b2> <b1>Float_Even</b1>(<b2>float</b2> <b1>max = (float.MaxValue - 1) / 2</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Vector2_Even</b1>(<b2>float</b2> <b1>max = (float.MaxValue - 1) / 2</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Vector2_Even</b1>(<b2>Vector2</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Vector2Int_Even</b1>(<b2>int</b2> <b1>max = (int.MaxValue - 1) / 2</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Vector2Int_Even</b1>(<b2>Vector2Int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Vector3_Even</b1>(<b2>float</b2> <b1>max = (float.MaxValue - 1) / 2</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Vector3_Even</b1>(<b2>Vector3</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Vector3Int_Even</b1>(<b2>int</b2> <b1>max = (int.MaxValue - 1) / 2</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Vector3Int_Even</b1>(<b2>Vector3Int</b2> <b1>max</b1>)</li>                        
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                    <li><b2>int</b2> <b1>max</b1>: The maximum value of the range</li>                    
                        <li><b2>float</b2> <b1>max</b1>: The maximum value of the range</li>                    
                        <li><b2>Vector2</b2> <b1>max</b1>: The maximum range value for each axis</li>                    
                        <li><b2>Vector3</b2> <b1>max</b1>: The maximum range value for each axis</li>                    
                        <li><b2>Vector2Int</b2> <b1>max</b1>: The maximum range value for each axis</li>                    
                        <li><b2>Vector3Int</b2> <b1>max</b1>: The maximum range value for each axis</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Odd" content={(
                <div>
                    <p>
                        Retrieves a random odd value within the specified range.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>Int_Odd</b1>(<b2>int</b2> <b1>max = (int.MaxValue - 1) / 2</b1>)</li>
                        <li><b2>static float</b2> <b1>Float_Odd</b1>(<b2>float</b2> <b1>max = (float.MaxValue - 1) / 2</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Vector2_Odd</b1>(<b2>float</b2> <b1>max = (float.MaxValue - 1) / 2</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Vector2_Odd</b1>(<b2>Vector2</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Vector2Int_Odd</b1>(<b2>int</b2> <b1>max = (int.MaxValue - 1) / 2</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Vector2Int_Odd</b1>(<b2>Vector2Int</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Vector3_Odd</b1>(<b2>float</b2> <b1>max = (float.MaxValue - 1) / 2</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Vector3_Odd</b1>(<b2>Vector3</b2> <b1>max</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Vector3Int_Odd</b1>(<b2>int</b2> <b1>max = (int.MaxValue - 1) / 2</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Vector3Int_Odd</b1>(<b2>Vector3Int</b2> <b1>max</b1>)</li>                        
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>max</b1>: The maximum value of the range</li>                    
                        <li><b2>float</b2> <b1>max</b1>: The maximum value of the range</li>                    
                        <li><b2>Vector2</b2> <b1>max</b1>: The maximum range value for each axis</li>                    
                        <li><b2>Vector3</b2> <b1>max</b1>: The maximum range value for each axis</li>                    
                        <li><b2>Vector2Int</b2> <b1>max</b1>: The maximum range value for each axis</li>                    
                        <li><b2>Vector3Int</b2> <b1>max</b1>: The maximum range value for each axis</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Bin" content={(
                <div>
                    <p>
                        Generates a random value that is either 0 or 1, based on the specified probability of getting a 1.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>Int_Bin</b1>(<b2>float</b2> <b1>chanceOfOne = 0.5f</b1>)</li>
                        <li><b2>static float</b2> <b1>Float_Bin</b1>(<b2>float</b2> <b1>chanceOfOne = 0.5f</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Vector2_Bin</b1>(<b2>float</b2> <b1>chanceOfOne = 0.5f</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Vector2_Bin</b1>(<b2>Vector2</b2> <b1>chanceOfOne</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Vector2Int_Bin</b1>(<b2>float</b2> <b1>chanceOfOne = 0.5f</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Vector2Int_Bin</b1>(<b2>Vector2</b2> <b1>chanceOfOne</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Vector3_Bin</b1>(<b2>float</b2> <b1>chanceOfOne = 0.5f</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Vector3_Bin</b1>(<b2>Vector3</b2> <b1>chanceOfOne</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Vector3Int_Bin</b1>(<b2>float</b2> <b1>chanceOfOne = 0.5f</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Vector3Int_Bin</b1>(<b2>Vector3</b2> <b1>chanceOfOne</b1>)</li>                        
                        <li><b2>static Color</b2> <b1>Color_Bin</b1>(<b2>float</b2> <b1>chanceOfOne = 0.5f</b1>)</li>
                        <li><b2>static Color</b2> <b1>Color_Bin</b1>(<b2>Color</b2> <b1>chanceOfOne</b1>)</li>                        
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>chanceOfOne</b1>: The probability (between 0f and 1f) of generating a value of 1</li>                    
                        <li><b2>Vector2</b2> <b1>chanceOfOne</b1>: The probability (between 0f and 1f) of generating a value of 1 for each axis</li>                    
                        <li><b2>Vector3</b2> <b1>chanceOfOne</b1>: The probability (between 0f and 1f) of generating a value of 1 for each axis</li>                    
                        <li><b2>Color</b2> <b1>chanceOfOne</b1>: The probability (between 0f and 1f) of generating a value of 1 for each axis</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Sign" content={(
                <div>
                    <p>
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>Int_Sign</b1>(<b2>float</b2> <b1>chanceOfOne = 0.5f</b1>)</li>
                        <li><b2>static float</b2> <b1>Float_Sign</b1>(<b2>float</b2> <b1>chanceOfOne = 0.5f</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Vector2_Sign</b1>(<b2>float</b2> <b1>chanceOfOne = 0.5f</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Vector2_Sign</b1>(<b2>Vector2</b2> <b1>chanceOfOne</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Vector2Int_Sign</b1>(<b2>float</b2> <b1>chanceOfOne = 0.5f</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Vector2Int_Sign</b1>(<b2>Vector2</b2> <b1>chanceOfOne</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Vector3_Sign</b1>(<b2>float</b2> <b1>chanceOfOne = 0.5f</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Vector3_Sign</b1>(<b2>Vector3</b2> <b1>chanceOfOne</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Vector3Int_Sign</b1>(<b2>float</b2> <b1>chanceOfOne = 0.5f</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Vector3Int_Sign</b1>(<b2>Vector3</b2> <b1>chanceOfOne</b1>)</li>                        
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>chanceOfPositive</b1>: The probability (between 0f and 1f) of generating a positive value (either 1 or -1)</li>                    
                        <li><b2>Vector2</b2> <b1>chanceOfPositive</b1>: The probability (between 0f and 1f) of generating a positive value (either 1 or -1) for each axis</li>                    
                        <li><b2>Vector3</b2> <b1>chanceOfPositive</b1>: The probability (between 0f and 1f) of generating a positive value (either 1 or -1) for each axis</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Angle" content={(
                <div>
                    <p>
                        Generates a random angle value between 0 and the specified maximum angle, rounded to the nearest multiple of the steps value if it was specified.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>Int_Angle</b1>(<b2>int</b2> <b1>maxAngle = 360</b1>)</li>
                        <li><b2>static int</b2> <b1>Int_Angle</b1>(<b2>int</b2> <b1>steps</b1>, <b2>int</b2> <b1>maxAngle = 360</b1>)</li>
                        <li><b2>static float</b2> <b1>Float_Angle</b1>(<b2>float</b2> <b1>maxAngle = 360f</b1>)</li>
                        <li><b2>static float</b2> <b1>Float_Angle</b1>(<b2>float</b2> <b1>steps</b1>, <b2>float</b2> <b1>maxAngle = 360f</b1>)</li>
                        <br/>
                        <li><b2>static Vector2</b2> <b1>Vector2_Angle</b1>(<b2>float</b2> <b1>maxAngle = 360f</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Vector2_Angle</b1>(<b2>int</b2> <b1>steps</b1>, <b2>int</b2> <b1>maxAngle = 360</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Vector2_Angle</b1>(<b2>float</b2> <b1>steps</b1>, <b2>float</b2> <b1>maxAngle = 360f</b1>)</li>
                        <li><b2>static Vector2</b2> <b1>Vector2_Angle</b1>(<b2>Vector2</b2> <b1>maxAngle</b1>)</li>
                        <br/>
                        <li><b2>static Vector2Int</b2> <b1>Vector2Int_Angle</b1>(<b2>int</b2> <b1>maxAngle = 360</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Vector2Int_Angle</b1>(<b2>int</b2> <b1>steps</b1>, <b2>int</b2> <b1>maxAngle = 360</b1>)</li>
                        <li><b2>static Vector2Int</b2> <b1>Vector2Int_Angle</b1>(<b2>Vector2Int</b2> <b1>maxAngle</b1>)</li>
                        <br/>
                        <li><b2>static Vector3</b2> <b1>Vector3_Angle</b1>(<b2>float</b2> <b1>maxAngle = 360f</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Vector3_Angle</b1>(<b2>int</b2> <b1>steps</b1>, <b2>int</b2> <b1>maxAngle = 360</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Vector3_Angle</b1>(<b2>float</b2> <b1>steps</b1>, <b2>float</b2> <b1>maxAngle = 360f</b1>)</li>
                        <li><b2>static Vector3</b2> <b1>Vector3_Angle</b1>(<b2>Vector3</b2> <b1>maxAngle</b1>)</li>
                        <br/>
                        <li><b2>static Vector3Int</b2> <b1>Vector3Int_Angle</b1>(<b2>int</b2> <b1>maxAngle = 360</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Vector3Int_Angle</b1>(<b2>int</b2> <b1>steps</b1>, <b2>int</b2> <b1>maxAngle = 360</b1>)</li>
                        <li><b2>static Vector3Int</b2> <b1>Vector3Int_Angle</b1>(<b2>Vector3Int</b2> <b1>maxAngle</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>maxAngle</b1>: The maximum angle in degrees</li>                    
                        <li><b2>float</b2> <b1>maxAngle</b1>: The maximum angle in degrees</li>                    
                        <li><b2>Vector2</b2> <b1>maxAngle</b1>: The maximum angle in degrees for each axis</li>                    
                        <li><b2>Vector3</b2> <b1>maxAngle</b1>: The maximum angle in degrees for each axis</li>                    
                        <li><b2>Vector2Int</b2> <b1>maxAngle</b1>: The maximum angle in degrees for each axis</li>                    
                        <li><b2>Vector3Int</b2> <b1>maxAngle</b1>: The maximum angle in degrees for each axis</li>                    
                        <li><b2>int</b2> <b1>steps</b1>: The multiple value by which the angle is rounded</li>                    
                        <li><b2>float</b2> <b1>steps</b1>: The multiple value by which the angle is rounded</li>                    
                        <li><b2>Vector2</b2> <b1>steps</b1>: The multiple value by which the angle is rounded for each axis</li>                    
                        <li><b2>Vector3</b2> <b1>steps</b1>: The multiple value by which the angle is rounded for each axis</li>                    
                        <li><b2>Vector2Int</b2> <b1>steps</b1>: The multiple value by which the angle is rounded for each axis</li>                    
                        <li><b2>Vector3Int</b2> <b1>steps</b1>: The multiple value by which the angle is rounded for each axis</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Screen" content={(
                <div>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static Vector2</b2> <b1>ScreenPoint</b1>(): Returns a random point on the screen</li>
                        <li><b2>static Vector3</b2> <b1>WorldPoint</b1>(): Returns a random point within the game world</li>
                    </ul>
                </div>
            )}/>
            <Group title="Lists and Arrays" content={(
                <div>
                    <p>
                        Retrieves a random index, item, list of indexes or list of items from an array or list. If specified, the list can contain unique indexes or items (without duplicates). 
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>RandomIndex{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>params int[]</b2> <b1>indexesToIgnore</b1>)</li>
                        <li><b2>static int</b2> <b1>RandomIndex{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>array</b1>, <b2>params int[]</b2> <b1>indexesToIgnore</b1>)</li>
                        <li><b2>static List{"<int>"}</b2> <b1>RandomIndexList{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>amountOfItems</b1>, <b2>params int[]</b2> <b1>indexesToIgnore</b1>)</li>
                        <li><b2>static List{"<int>"}</b2> <b1>RandomIndexList{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>array</b1>, <b2>int</b2> <b1>amountOfItems</b1>, <b2>params int[]</b2> <b1>indexesToIgnore</b1>)</li>
                        <li><b2>static List{"<int>"}</b2> <b1>RandomIndexListUnique{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>amountOfItems</b1>, <b2>params int[]</b2> <b1>indexesToIgnore</b1>)</li>
                        <li><b2>static List{"<int>"}</b2> <b1>RandomIndexListUnique{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>array</b1>, <b2>int</b2> <b1>amountOfItems</b1>, <b2>params int[]</b2> <b1>indexesToIgnore</b1>)</li>
                        <br/>
                        <li><b2>static T</b2> <b1>RandomItem{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>params int[]</b2> <b1>indexesToIgnore</b1>)</li>
                        <li><b2>static T</b2> <b1>RandomItem{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>array</b1>, <b2>params int[]</b2> <b1>indexesToIgnore</b1>)</li>
                        <li><b2>static List{"<int>"}</b2> <b1>RandomItemList{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>amountOfItems</b1>, <b2>params int[]</b2> <b1>indexesToIgnore</b1>)</li>
                        <li><b2>static List{"<int>"}</b2> <b1>RandomItemList{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>array</b1>, <b2>int</b2> <b1>amountOfItems</b1>, <b2>params int[]</b2> <b1>indexesToIgnore</b1>)</li>
                        <li><b2>static List{"<int>"}</b2> <b1>RandomItemListUnique{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>amountOfItems</b1>, <b2>params int[]</b2> <b1>indexesToIgnore</b1>)</li>
                        <li><b2>static List{"<int>"}</b2> <b1>RandomItemListUnique{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>array</b1>, <b2>int</b2> <b1>amountOfItems</b1>, <b2>params int[]</b2> <b1>indexesToIgnore</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>T[]</b2> <b1>array</b1>: Array to search</li>                    
                        <li><b2>List{"<T>"}</b2> <b1>list</b1>: List to search</li>                    
                        <li><b2>int</b2> <b1>amountOfItems</b1>: Amount of indexes to retrieve</li>                    
                        <li><b2>int[]</b2> <b1>indexesToIgnore</b1>: Array of indexes to ignore when retrieving items or indexes</li>                    
                    </ul>
                </div>
            )}/>

            <h3 className="p-2">Examples</h3>
            <p className="pad-left-3">
                Let’s go through a few examples to demonstrate how these methods work in practice.
            </p>
            <Group title="Example 01: Basic Usage of Randop Utilities" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Randop/Randop - 01.jpg" alt=""/>            
                    <p>
                        This script showcases the use of the Randop utility in Unity to generate random values of various types, including bool, int, floats, 2D and 3D vectors, colors and points in both screen and world space. 
                        It starts by generating and logging random values for each type, such as a random boolean, an integer between 0 and 100, a float between 1.0 and 10.0 and vectors with specified ranges. 
                        Additionally, it generates a random color and retrieves random points on the screen and in the world space, making it particularly useful for adding randomness to game mechanics.
                    </p>
                </div>
            )}/>

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The random number methods allow flexibility in specifying ranges, making them ideal for scenarios where you want controlled randomness.</li>
                <li>The vector and point getters are excellent for game physics, pathfinding and character movements where randomization helps simulate more natural actions.</li>
                <li>Using the color getters can make procedural generation of visual effects simple, while array and list methods are ideal for selecting random objects, assets or game states.</li>
            </ul>
       </div>
    );
}