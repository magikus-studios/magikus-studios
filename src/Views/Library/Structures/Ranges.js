import React from "react";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Range Structure</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Data Structure designed to hold a Minimum and Maximum Value of a Specified Type.                
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Range structure is a highly versatile tool for defining and manipulating ranges of values. 
                It is designed to work with any type that implements the IComparable interface, offering broad applicability. 
                With its comprehensive set of methods, the Range structure simplifies range checks and comparisons, making it indispensable for projects that require range-based logic. 
                By supporting generic types, it provides developers the flexibility to use it in diverse scenarios, whether dealing with basic numeric values, complex objects or custom data types.
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Ranges/Ranges - 05.jpg" alt=""/>            
            </div>


            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                This structure is particularly useful in scenarios where you need to validate, compare or operate on values that fall within a specific range. 
                The primary use case for Range{"<T>"} is to define a range or interval between two values, such as minimum and maximum thresholds for numerical values, ranges for colors or even ranges for more complex types like dates or strings.
                For instance, it can be used to check if a value lies within the defined range (InRange), if it is exactly at one of the limits (InLimit) or if it falls outside the range (IsOutside). 
                The generic nature of Range{"<T>"} allows it to be adapted to various types and contexts, making it a powerful tool for handling ranges in a type-safe and consistent manner.
            </p>


            <h3 className="p-2">How it Works</h3>

            <div className="p-3">
                <h4 className="c-light-1 pad-left-2">Range</h4>
                <h5 className="c-light-1 pad-left-3">Properties</h5>
                <ul>
                    <li><b2>T</b2> <b1>Min</b1>: Min value of the range</li>
                    <li><b2>T</b2> <b1>Max</b1>: Max value of the range</li>
                </ul>
                <h5 className="c-light-1 pad-left-3">Methods</h5>
                <ul>
                    <li><b2>bool</b2> <b1>IsRange</b1>(<b2>T</b2> <b1>value</b1>): Returns true if the value is in range (including the min and max values).</li>
                    <li><b2>bool</b2> <b1>IsInside</b1>(<b2>T</b2> <b1>value</b1>): Returns true if the value is inside the range.</li>
                    <li><b2>bool</b2> <b1>IsOutside</b1>(<b2>T</b2> <b1>value</b1>): Returns true if the value is outside range.</li>
                    <li><b2>bool</b2> <b1>InLimit</b1>(<b2>T</b2> <b1>value</b1>): Returns true if the value is equal to the min or max values of the range.</li>
                    <li><b2>bool</b2> <b1>IsMin</b1>(<b2>T</b2> <b1>value</b1>): Returns true if the value is equal to the min value of the range.</li>
                    <li><b2>bool</b2> <b1>IsMax</b1>(<b2>T</b2> <b1>value</b1>): Returns true if the value is equal to the max value of the range.</li>
                    <li><b2>bool</b2> <b1>IsLower</b1>(<b2>T</b2> <b1>value</b1>): Returns true if the value is lower than the min value of the range.</li>
                    <li><b2>bool</b2> <b1>IsHigher</b1>(<b2>T</b2> <b1>value</b1>): Returns true if the value is higher than the min value of the range.</li>
                </ul>
                <h5 className="c-light-1 pad-left-3">Virtual</h5>
                <ul>
                    <li><b2>virtual int</b2> <b1>CompareTo</b1>(<b2>T</b2> <b1>value</b1>, <b2>T</b2> <b1>other</b1>): Compares the two values.</li>
                    <li><b2>virtual bool</b2> <b1>Equals</b1>(<b2>T</b2> <b1>value</b1>, <b2>T</b2> <b1>other</b1>): Returns true if the two values are equal.</li>
                </ul>
            </div>


            <h3 className="p-2">How to Use</h3>
            <p className="pad-left-2">
                To use the Range{"<T>"} structure, you can create an instance by specifying the type for which you want to define a range (e.g., int, float, DateTime, etc.).
                The structure provides various methods to operate on and validate the values against the defined range. 
                Below are some steps and examples to illustrate how to work with the Range{"<T>"} structure:
            </p>
            <ul>
                <li>Declare a range with a specific type.</li>
                <li>Set the minimum and maximum values.</li>
                <li>Use InRange to check if a value falls within the range (inclusive).</li>
                <li>Use IsInside to check if a value is strictly within the range (exclusive).</li>
                <li>Use IsOutside to check if a value is outside the range.</li>
                <li>Use InLimit to check if a value matches the minimum or maximum.</li>
                <li>Use IsMin or IsMax to check if a value is the minimum or maximum.</li>
                <li>Use IsLower or IsHigher to check if a value is below or above the range.</li>
            </ul>
            <p className="pad-left-2">
                Here are three examples demonstrating how to use the Range{"<T>"} structure with different types, using the methods provided by the structure.
            </p>

            <h4 className="c-light-1 p-3">Example 01: Working with Integers</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Ranges/Ranges - 01.jpg" alt=""/>            
            <p className="pad-left-3"> 
                In this example, an integer range is created with a minimum value of 5 and a maximum value of 15. 
                The InRange method is used to check if the value 10 is within the range. 
                The IsInside method checks if 5 is strictly within the range (it’s not, because 5 is the minimum). 
                The IsOutside method checks if 20 is outside the defined range. 
                The InLimit method confirms if 15 is one of the limits. 
                The IsMin method checks if 5 is the minimum value. 
                The IsLower method verifies if 2 is lower than the minimum value.
            </p>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Ranges/Ranges - 02.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Ranges/Ranges - 03.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 02: Working with Floats</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Ranges/Ranges - 04.jpg" alt=""/>            
            <p className="pad-left-3"> 
                Here, a float range is created with a minimum of 0.5f and a maximum of 5.5f. 
                The InRange method checks if 3.3f lies within the range. 
                The IsInside method checks if 0.5f is strictly within the range. 
                The IsHigher method determines if 6.0f is higher than the maximum value. 
                The IsMax method checks if 5.5f is the maximum value.
            </p>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Ranges/Ranges - 05.jpg" alt=""/>            
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Ranges/Ranges - 06.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 03: Working with Dates</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Ranges/Ranges - 07.jpg" alt=""/>            
            <p className="pad-left-3">
                A Range{"<DateTime>"} is created to represent the year 2023. 
                The InRange method is used to check if a specific date in June 2023 falls within the range. 
                The IsInside method checks if a date outside the range (end of 2022) is within the range. 
                The IsOutside method confirms that a date in 2024 is outside the range.
            </p>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Ranges/Ranges - 08.jpg" alt=""/>            


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The Range{"<T>"} structure can be used with any type that implements IComparable. This makes it versatile for various data types, including custom classes.</li>
                <li>The fields Min and Max are serialized, allowing them to be used in Unity’s inspector for easy editing during development.</li>
                <li>The setter methods for Min and Max ensure that Min is always less than or equal to Max and vice versa. If an invalid assignment is made, the values are automatically corrected.</li>
            </ul>
       </div>
    );
}