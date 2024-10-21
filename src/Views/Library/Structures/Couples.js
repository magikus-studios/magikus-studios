import React from "react";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center">Couples</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Couple{"<A, B>"} and Couple{"<A, B, C>"} structures are specialized data containers designed to hold two or three values of different types. 
                These structures are particularly useful when there is a need to group together multiple values of different types, such as a pair of coordinates (e.g., int and float) or a combination of various properties (e.g., string, int, and bool).
                Unlike vectors, where all components are of the same type, the Couple structures allow for flexibility by allowing different types for each value.
            </h6>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                One of the primary benefits of using these structures is their seamless integration with Unity's Inspector, providing a clear and compact way to visualize and manipulate these coupled values. 
                By using custom attributes, developers can also control the relative sizes of the fields in the Inspector, optimizing their layout for specific use cases.
            </p>


            <h3 className="p-2">How it Works</h3>

            <div className="p-3">
                <h4 className="c-light-1 pad-left-2">Couple{"<A, B>"}</h4>
                <h5 className="c-light-1 pad-left-3">Properties</h5>
                <ul className="property-list">
                    <li><b2>A</b2> <b1>ValueA</b1>: First value of the couple</li>
                    <li><b2>B</b2> <b1>ValueB</b1>: Second value of the couple</li>
                </ul>
                <h5 className="c-light-1 pad-left-3">Methods</h5>
                <ul className="property-list">
                    <li><b2>void</b2> <b1>Set</b1>(<b2>Couple{"<A, B>"}</b2> <b1>newValue</b1>): Set the couple with another couple</li>
                </ul>

                <h4 className="c-light-1 pad-left-2">Couple{"<A, B, C>"}</h4>
                <h5 className="c-light-1 pad-left-3">Properties</h5>
                <ul className="property-list">
                    <li><b2>A</b2> <b1>ValueA</b1>: First value of the couple</li>
                    <li><b2>B</b2> <b1>ValueB</b1>: Second value of the couple</li>
                    <li><b2>C</b2> <b1>ValueC</b1>: Third value of the couple</li>
                </ul>
                <h5 className="c-light-1 pad-left-3">Methods</h5>
                <ul className="property-list">
                    <li><b2>void</b2> <b1>Set</b1>(<b2>Couple{"<A, B>"}</b2> <b1>newValue</b1>): Set the couple with another couple.</li>
                    <li><b2>void</b2> <b1>Set</b1>(<b2>Couple{"<A, B, C>"}</b2> <b1>newValue</b1>): Set the couple with another couple.</li>
                </ul>
            </div>


            <h3 className="p-2">How to Use</h3>
            <p className="pad-left-2">
                To use the Couple{"<A, B>"} or Couple{"<A, B, C>"} structure, follow these steps:
            </p>
            <ul>
                <li>Decide whether you need two or three coupled values and declare the appropriate Couple structure.</li>
                <li>Specify the types for each of the values when defining the structure.</li>
                <li>Assign values to ValueA, ValueB, and ValueC (if applicable).</li>
                <li>Use the Set method to update the values with another Couple instance.</li>
                <li>Apply the CoupleAttribute (Optional) to control the display ratios of the fields in the Inspector.</li>
            </ul>

            <h4 className="c-light-1 p-3">Example 01: Working with a Pair of Values</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Couples/Couples - 01.jpg" alt=""/>            
            <p className="pad-left-3"> 
                A Couple{"<int, float>"} is created to hold an int (ValueA) and a float (ValueB). 
                The Set method is used to update the values with those from another Couple{"<int, float>"}. 
                This example demonstrates the basic use of the Couple{"<A, B>"} structure for pairing values of different types.
            </p>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Couples/Couples - 02.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 02: Working with a Trio of Values</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Couples/Couples - 03.jpg" alt=""/>            
            <p className="pad-left-3"> 
                A Couple{"<string, int, bool>"} is used to couple a string (ValueA), an int (ValueB) and a bool (ValueC). 
                The Set method is used to update ValueA and ValueB using another Couple{"<string, int>"}. 
                This example illustrates the usage of Couple{"<A, B, C>"} for a more complex combination of types.
            </p>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Couples/Couples - 04.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 03: Customizing Inspector Layout with CoupleAttribute</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Couples/Couples - 05.jpg" alt=""/>            
            <p className="pad-left-3"> 
                Here, the Couple attribute is applied to customize the display ratio in the Inspector, setting ValueA to occupy 70% of the space and ValueB 30%. 
                The example shows how to use the attribute to control the visual layout in the Inspector, making it more intuitive and tailored to the specific use case.
            </p>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Couples/Couples - 06.jpg" alt=""/>            


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The Couple{"<A, B>"} and Couple{"<A, B, C>"} structures provide a flexible way to couple values of different types, enabling easy grouping and management of related data.</li>
                <li>The Couple attribute allows developers to fine-tune the display of coupled values in the Unity Inspector, ensuring a clean and efficient layout.</li>
            </ul>            

            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The Couple{"<A, B>"} and Couple{"<A, B, C>"} structures are powerful tools for managing pairs or trios of related values of different types. 
                They are particularly useful in Unity projects where data needs to be coupled and easily visualized in the Inspector. 
                The ability to customize the Inspector layout using the Couple attribute further enhances their usability, making them a valuable addition to any developer's toolkit. 
                Whether you're working with simple pairs of values or more complex combinations, these structures provide a robust and flexible solution.
            </p>
       </div>
    );
}