import React from "react";
import Group from "Components/Group";

export default function Function() {
    
    
    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Flexor Structure</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">    
                Generic Structures to manage Multi-Dimensional Data for Independent Axes Settings 
            </h6>
            
            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Flexor structure offers a flexible and serialized solution for managing grouped values across multiple axes, providing a clean and compact layout within the Unity Inspector.
                Ideal for handling game settings or conditional states, it allows developers to easily couple, assign and copy values through intuitive methods.
                Designed for versatility, each variation adapts to different project needs while maintaining a clear and reusable structure.
                Seamlessly integrated with the Unity Editor, Flexor structures improve both functionality and maintainability, making them a powerful tool for organizing and streamlining development workflows.
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Flexors/Flexors - 06.jpg" alt=""/>            
            </div>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                These structures are designed to offer a flexible and reusable system for storing and manipulating multi-axis data across a wide range of use cases.
                They are particularly well-suited for managing independent axis settings for various data types, such as using a Flexor3{"<AnimationCurve>"} to control interpolation curves for the X, Y and Z axes individually.
                One of their key advantages is seamless integration with Unity's Inspector, allowing developers to visualize and edit grouped values in a clear, compact layout.
                Additionally, custom attributes provide control over field proportions and label visibility, enabling optimized Inspector configurations tailored to specific workflows.
            </p>
            <Group title="Flexor Attribute" content={(
                <div>
                    <h5 className="c-light-1">Constructors</h5>
                    <ul className="property-list">
                        <li><b1>Flexor</b1>(<b2>bool</b2> <b1>axisLabesl = true</b1>)</li>
                        <li><b1>Flexor</b1>(<b2>float</b2> <b1>axisRatio1</b1>, <b2>float</b2> <b1>axisRatio2</b1>, <b2>bool</b2> <b1>axisLabesl = true</b1>)</li>
                        <li><b1>Flexor</b1>(<b2>float</b2> <b1>axisRatio1</b1>, <b2>float</b2> <b1>axisRatio2</b1>, <b2>float</b2> <b1>axisRatio3</b1>, <b2>bool</b2> <b1>axisLabesl = true</b1>)</li>
                        <li><b1>Flexor</b1>(<b2>float</b2> <b1>axisRatio1</b1>, <b2>float</b2> <b1>axisRatio2</b1>, <b2>float</b2> <b1>axisRatio3</b1>, <b2>float</b2> <b1>axisRatio4</b1>, <b2>bool</b2> <b1>axisLabesl = true</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>axisLabesl</b1>: Show axis labels in the inspector. Default is false.</li>
                        <li><b2>float</b2> <b1>axisRatio1</b1>: Relative ratio of first axis with.</li>
                        <li><b2>float</b2> <b1>axisRatio2</b1>: Relative ratio of second axis with.</li>
                        <li><b2>float</b2> <b1>axisRatio3</b1>: Relative ratio of third axis with (Only for Flexor3 and Flexor4).</li>
                        <li><b2>float</b2> <b1>axisRatio4</b1>: Relative ratio of fourth axis with (Only for Flexor4).</li>
                    </ul>
                </div>
            )}/>
            <Group title="Flexor2<T>" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul>
                        <li><b2>T</b2> <b1>x</b1>: X value of the flexor</li>
                        <li><b2>T</b2> <b1>y</b1>: Y value of the flexor</li>
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul>
                        <li><b2>void</b2> <b1>Set</b1>(<b2>T</b2> <b1>value</b1>): Set the x and y values of the flexor with the same value</li>
                        <li><b2>void</b2> <b1>Set</b1>(<b2>T</b2> <b1>x</b1>, <b2>T</b2> <b1>y</b1>): Set the x and y values of the flexor</li>
                        <li><b2>void</b2> <b1>Set</b1>(<b2>Flexor2{"<T>"}</b2> <b1>newValue</b1>): Copies values from another Flexor of the same type</li>
                    </ul>
                </div>
            )}/>
            <Group title="Flexor2<T0, T1>" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul>
                        <li><b2>T0</b2> <b1>x</b1>: X value of the flexor</li>
                        <li><b2>T1</b2> <b1>y</b1>: Y value of the flexor</li>
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul>
                        <li><b2>void</b2> <b1>Set</b1>(<b2>T0</b2> <b1>x</b1>, <b2>T1</b2> <b1>y</b1>): Set the x and y values of the flexor</li>
                        <li><b2>void</b2> <b1>Set</b1>(<b2>Flexor2{"<T0, T1>"}</b2> <b1>newValue</b1>): Copies values from another Flexor of the same type</li>
                    </ul>
                </div>
            )}/>
            <Group title="Flexor3<T>" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul>
                        <li><b2>T</b2> <b1>x</b1>: X value of the flexor</li>
                        <li><b2>T</b2> <b1>y</b1>: Y value of the flexor</li>
                        <li><b2>T</b2> <b1>z</b1>: Z value of the flexor</li>
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul>
                        <li><b2>void</b2> <b1>Set</b1>(<b2>T</b2> <b1>value</b1>): Set the x, y and z values of the flexor with the same value</li>
                        <li><b2>void</b2> <b1>Set</b1>(<b2>T</b2> <b1>x</b1>, <b2>T</b2> <b1>y</b1>, <b2>T</b2> <b1>z</b1>): Set the x, y, z values of the flexor</li>
                        <li><b2>void</b2> <b1>Set</b1>(<b2>Flexor3{"<T>"}</b2> <b1>newValue</b1>): Copies values from another Flexor of the same type</li>
                    </ul>
                </div>
            )}/>
            <Group title="Flexor3<T0, T1, T2>" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul>
                        <li><b2>T0</b2> <b1>x</b1>: X value of the flexor</li>
                        <li><b2>T1</b2> <b1>y</b1>: Y value of the flexor</li>
                        <li><b2>T2</b2> <b1>z</b1>: Z value of the flexor</li>
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul>
                        <li><b2>void</b2> <b1>Set</b1>(<b2>T0</b2> <b1>x</b1>, <b2>T1</b2> <b1>y</b1>, <b2>T1</b2> <b1>z</b1>): Set the x, y and z values of the flexor</li>
                        <li><b2>void</b2> <b1>Set</b1>(<b2>Flexor3{"<T0, T1, T2>"}</b2> <b1>newValue</b1>): Copies values from another Flexor of the same type.</li>
                    </ul>
                </div>
            )}/>
            <Group title="Flexor4<T>" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul>
                        <li><b2>T</b2> <b1>r</b1>: Red value of the flexor</li>
                        <li><b2>T</b2> <b1>g</b1>: Green value of the flexor</li>
                        <li><b2>T</b2> <b1>b</b1>: Blue value of the flexor</li>
                        <li><b2>T</b2> <b1>a</b1>: Alpha value of the flexor</li>        
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul>
                        <li><b2>void</b2> <b1>Set</b1>(<b2>T</b2> <b1>value</b1>): Set the r, g, b and a values of the flexor with the same value</li>
                        <li><b2>void</b2> <b1>Set</b1>(<b2>T</b2> <b1>r</b1>, <b2>T</b2> <b1>g</b1>, <b2>T</b2> <b1>b</b1>, <b2>T</b2> <b1>a</b1>): Set the r, g, b and a values of the flexor</li>
                        <li><b2>void</b2> <b1>Set</b1>(<b2>Flexor4{"<T>"}</b2> <b1>newValue</b1>): Copies values from another Flexor of the same type</li>
                    </ul>
                </div>
            )}/>
            <Group title="Flexor4<T0, T1, T2, T3>" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul>
                        <li><b2>T0</b2> <b1>r</b1>: Red value of the flexor</li>
                        <li><b2>T1</b2> <b1>g</b1>: Green value of the flexor</li>
                        <li><b2>T2</b2> <b1>b</b1>: Blue value of the flexor</li>
                        <li><b2>T3</b2> <b1>a</b1>: Alpha value of the flexor</li>        
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul>
                        <li><b2>void</b2> <b1>Set</b1>(<b2>T0</b2> <b1>r</b1>, <b2>T1</b2> <b1>g</b1>, <b2>T2</b2> <b1>b</b1>, <b2>T3</b2> <b1>a</b1>): Set the r, g, b and a values of the flexor</li>
                        <li><b2>void</b2> <b1>Set</b1>(<b2>Flexor4{"<T0, T1, T2, T3>"}</b2> <b1>newValue</b1>): Copies values from another Flexor of the same type</li>
                    </ul>
                </div>
            )}/> 


            <h3 className="p-2">Examples</h3>
            <p className="pad-left-2">
                The Flexor structures are easy to integrate and use within the Unity environment. 
            </p>
            <ul>
                <li>Decide whether you need two, three or four coupled values and declare the appropriate Flexor structure (Flexor2, Flexor3 or Flexor4).</li>
                <li>Specify the types for each of the values when defining the structure or just use one type T for each of the axes.</li>
                <li>You can assign values to each axis (e.g., x, y, z for Flexor2 and Flexor3 or r, g, b, a for Flexor4) and access them as needed.</li>
                <li>Use the Set method to update the values with another Flexor instance.</li>
                <li>Apply the FlexorAttribute (Optional) to control the display ratios and labels of the fields in the Inspector.</li>
            </ul>
            <Group title="Example 01: Managing Animation Curves with Flexor2" content={(
                <div>
                    <p>  
                        In this example, a Flexor2{"<AnimationCurve>"} is used to store and manage animation curves for the X and Y axes. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Flexors/Flexors - 01.jpg" alt=""/>            
                    <p>  
                        Each curve is independently evaluated based on the time, allowing for complex animations.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Flexors/Flexors - 01.gif" alt=""/>            
                </div>
            )}/>
            <Group title="Example 02: Custom Boolean Settings with Flexor3" content={(
                <div>
                    <p>
                        This example demonstrates using a Flexor3{"<bool>"} structure to manage toggles for three different features. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Flexors/Flexors - 03.jpg" alt=""/>            
                    <p>
                        Each axis represents a bool value indicating whether a particular feature is enabled.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Flexors/Flexors - 02.gif" alt=""/>            
                </div>
            )}/>
            <Group title="Example 03: Configuring Game Settings with Enum" content={(
                <div>
                    <p> 
                        This example utilizes Flexor2{"<Quality>"} and Flexor2{"<Resolution>"} to store game settings for quality and resolution. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Flexors/Flexors - 05.jpg" alt=""/>            
                    <p> 
                        The settings are then applied at the start of the game, allowing easy configuration and adjustment.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Flexors/Flexors - 06.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 04: Working with a Pair of Values" content={(
                <div>
                    <p> 
                        A Flexor2{"<int, float>"} is created to hold an int (x) and a float (y). 
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Flexors/Flexors - 07.jpg" alt=""/>            
                    <p> 
                        The Set method is used to update the values with those from another Flexor2{"<int, float>"}. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Flexors/Flexors - 03.gif" alt=""/>            
                    <p> 
                        This example demonstrates the basic use of the Flexor2{"<T0, T1>"} structure for pairing values of different types.
                    </p>
                </div>
            )}/>
            <Group title="Example 05: Working with a Trio of Values" content={(
                <div>
                    <p> 
                        A Flexor3{"<string, int, bool>"} is used to couple a string (x), an int (y) and a bool (z). 
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Flexors/Flexors - 09.jpg" alt=""/>            
                    <p> 
                        The x and y axis are updated and the new flexor is displayed on the console.
                        The string value depends on the bool value.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Flexors/Flexors - 04.gif" alt=""/>            
                    <p> 
                        This example illustrates the usage of Flexor3{"<T0, T1, T2>"} for a more complex combination of types.
                    </p>
                </div>
            )}/>
            <Group title="Example 06: Customizing Inspector Layout with Flexor Attribute" content={(
                <div>
                    <p> 
                        Here, the Flexor attribute is applied to customize the display ratio in the Inspector, setting 'x' to occupy 70% of the space and 'y' 30%.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Flexors/Flexors - 11.jpg" alt=""/>            
                    <p> 
                        Also, the axis labels are set to be shown.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Flexors/Flexors - 12.jpg" alt=""/>            
                    <p> 
                        The example shows how to use the attribute to control the visual layout in the Inspector, making it more intuitive and tailored to the specific use case.
                    </p>
                </div>
            )}/>


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>Mixed-type versions (e.g. {"Flexor2<T0, T1>"}) allow for heterogeneous data grouping, enabling combinations like a string with a float, or an enum with an int.</li>
                <li>The structures are fully integrated into Unity's Inspector through custom property drawers, making it easy to visualize and modify the values during development.</li>
                <li>Use the [Flexor] attribute to customize axis ratios and enable axis labels in the Inspector.</li>
            </ul>
       </div>
    );
}