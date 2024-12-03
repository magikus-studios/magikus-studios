import React from "react";
import Group from "Components/Group";

export default function Function() {

    
    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Listop Utilities</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Methods designed to Enhance the Functionality of Arrays and Lists
            </h6>
                        
            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Listop utilities provide a powerful and flexible set of static and extension methods for manipulating arrays and lists, making them especially useful in game development where such manipulations are common. 
                These utilities allow developers to streamline their workflows by offering intuitive, easy-to-use functions for handling complex list and array operations.
            </p>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                These utilities make it easier to manipulate, access and modify elements within arrays and lists through a variety of convenient operations. 
                The supported methods include accessing elements from the last position, concatenating multiple lists, splitting, creating subsets, reversing order, swapping elements, shifting, shuffling and moving elements between positions.
            </p> 
            <Group title="Get" content={(
                <div>
                    <p>
                        GetIndex returns a certain index from an array or list based on an offset value that wraps between 0 and the last index of the array or list.<br/>
                        GetItem access the element from an array or list based on an offset value that wraps between 0 and the last index of the array or list.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>GetIndex{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>index = 0</b1>, <b2>bool</b2> <b1>allowLastIndex = false</b1>)</li>
                        <li><b2>static int</b2> <b1>GetIndex{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>index = 0</b1>, <b2>bool</b2> <b1>allowLastIndex = false</b1>)</li>
                        <li><b2>static int</b2> <b1>GetItem{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>index = 0</b1>)</li>
                        <li><b2>static int</b2> <b1>GetItem{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>index = 0</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>T[]</b2> <b1>array</b1>: The array to get the elements from</li>                    
                        <li><b2>List{"<T>"}</b2> <b1>list</b1>: The list to get the elements from</li>                    
                        <li><b2>int</b2> <b1>index</b1>: The value of the index to use. If negative, it wraps around the length of the array or list</li>                    
                        <li><b2>bool</b2> <b1>allowLastIndex</b1>: Enables wraping the index between 0 and the total length of the list or array instead of the total number of indexes</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Concat" content={(
                <div>
                    <p>
                        Concatenate two arrays, an array with a list, a list with an array or two lists.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static T[]</b2> <b1>Concat{"<T>"}</b1>(<b2>this T[]</b2> <b1>a</b1>, <b2>T[]</b2> <b1>b</b1>)</li>
                        <li><b2>static T[]</b2> <b1>Concat{"<T>"}</b1>(<b2>this T[]</b2> <b1>a</b1>, <b2>List{"<T>"}</b2> <b1>b</b1>)</li>
                        <li><b2>static List{"<T>"}</b2> <b1>Concat{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>a</b1>, <b2>T[]</b2> <b1>b</b1>)</li>
                        <li><b2>static List{"<T>"}</b2> <b1>Concat{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>a</b1>, <b2>List{"<T>"}</b2> <b1>b</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>T[]</b2> <b1>a</b1>: The first array to concatenate</li>                    
                        <li><b2>List{"<T>"}</b2> <b1>a</b1>: The first list to concatenate</li>                    
                        <li><b2>T[]</b2> <b1>b</b1>: The last array to concatenate</li>                    
                        <li><b2>List{"<T>"}</b2> <b1>b</b1>: The last list to concatenate</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Split" content={(
                <div>
                    <p>
                        Split a list or array into two parts based on an index or a condition.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static List{"<List<T>>"}</b2> <b1>Split{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>params int[]</b2> <b1>splitIndexes</b1>)</li>
                        <li><b2>static List{"<List<T>>"}</b2> <b1>Split{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static List{"<List<T>>"}</b2> <b1>Split{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>Func{"<T, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static List{"<List<T>>"}</b2> <b1>Split{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>Func{"<int, T, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static List{"<List<T>>"}</b2> <b1>Split{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>params int[]</b2> <b1>splitIndexes</b1>)</li>
                        <li><b2>static List{"<List<T>>"}</b2> <b1>Split{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static List{"<List<T>>"}</b2> <b1>Split{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>Func{"<T, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static List{"<List<T>>"}</b2> <b1>Split{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>Func{"<int, T, bool>"}</b2> <b1>condition</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>T[]</b2> <b1>array</b1>: The array to split</li>                    
                        <li><b2>List{"<T>"}</b2> <b1>list</b1>: The list to split</li>                    
                        <li><b2>int[]</b2> <b1>splitIndexes</b1>: A list of indexes to split the list or array</li>                    
                        <li><b2>Func{"<bool>"}</b2> <b1>condition</b1>: A Func that returns true on the element that should split the array or list</li>                    
                        <li><b2>Func{"<T, bool>"}</b2> <b1>condition</b1>: A Func that returns true on the element that should split the array or list. T represents the element of the array or list</li>                    
                        <li><b2>Func{"<int, T, bool>"}</b2> <b1>condition</b1>: A Func that returns true on the element that should split the array or list. T represents the element of the array or list and int is the index of each element</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Subset" content={(
                <div>
                    <p>
                        Extract a subset of elements from an array or list based on an index or a condition.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static T[]</b2> <b1>Subset{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>int</b2> <b1>amount = 0</b1>)</li>
                        <li><b2>static T[]</b2> <b1>Subset{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static T[]</b2> <b1>Subset{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>Func{"<T, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static T[]</b2> <b1>Subset{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>Func{"<int, T, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static List{"<T>"}</b2> <b1>Subset{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>int</b2> <b1>amount = 0</b1>)</li>
                        <li><b2>static List{"<T>"}</b2> <b1>Subset{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>Func{"<bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static List{"<T>"}</b2> <b1>Subset{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>Func{"<T, bool>"}</b2> <b1>condition</b1>)</li>
                        <li><b2>static List{"<T>"}</b2> <b1>Subset{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>Func{"<int, T, bool>"}</b2> <b1>condition</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>T[]</b2> <b1>array</b1>: The array to subset</li>                    
                        <li><b2>List{"<T>"}</b2> <b1>list</b1>: The list to subset</li>                    
                        <li><b2>int</b2> <b1>startIndex</b1>: The index to start the selection. This value wraps around 0 and the length of the array or list</li>                    
                        <li><b2>int</b2> <b1>amount</b1>: The amount of elements to select. If 0 or negative, this value wraps around the startIndex and the last index of the array or list</li>                    
                        <li><b2>Func{"<bool>"}</b2> <b1>condition</b1>: A Func that returns true on the element that should be selected from the array or list</li>                    
                        <li><b2>Func{"<T, bool>"}</b2> <b1>condition</b1>: A Func that returns true on the element that should be selected from the array or list. T represents the element of the array or list</li>                    
                        <li><b2>Func{"<int, T, bool>"}</b2> <b1>condition</b1>: A Func that returns true on the element that should be selected from the array or list. T represents the element of the array or list and int is the index of each element</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Reverse" content={(
                <div>
                    <p>
                        Reverse the order of elements in an array.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static T[]</b2> <b1>Reverse{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>)</li>
                        <li><b2>static T[]</b2> <b1>Reverse{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>startIndex</b1>)</li>
                        <li><b2>static T[]</b2> <b1>Reverse{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>startIndex</b1>, <b2>int</b2> <b1>amount</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>T[]</b2> <b1>array</b1>: The array to reverse</li>                    
                        <li><b2>int</b2> <b1>startIndex</b1>: The index to start the selection</li>                    
                        <li><b2>int</b2> <b1>amount</b1>: The amount of elements to select</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Remove" content={(
                <div>
                    <p>
                        Removes a certain amount of elements from an array.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static T[]</b2> <b1>Remove{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>index</b1>, <b2>int</b2> <b1>amount = 1</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>T[]</b2> <b1>array</b1>: The array to manipulate</li>                    
                        <li><b2>int</b2> <b1>index</b1>: The index of the first element to remove. This value wraps around 0 and the total amount last index of the array</li>                    
                        <li><b2>int</b2> <b1>amount</b1>: The amount of elements to remove. This value wraps around 1 and the length of the array</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Insert" content={(
                <div>
                    <p>
                        Inserts a certain amount of elements to an array.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static T[]</b2> <b1>Insert{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>index</b1>, <b2>param T[]</b2> <b1>items</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>T[]</b2> <b1>array</b1>: The array to manipulate</li>                    
                        <li><b2>int</b2> <b1>index</b1>: The index to insert the elements. This value wraps around 0 and the total amount last index of the array</li>                    
                        <li><b2>T[]</b2> <b1>items</b1>: The elements to insert</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Swap" content={(
                <div>
                    <p>
                        Swap the positions of two elements in an array or list.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static T[]</b2> <b1>Swap{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>indexA</b1>, <b2>int</b2> <b1>indexB</b1>)</li>
                        <li><b2>static List{"<T>"}</b2> <b1>Swap{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>indexA</b1>, <b2>int</b2> <b1>indexB</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>T[]</b2> <b1>array</b1>: The array to swap</li>                    
                        <li><b2>List{"<T>"}</b2> <b1>list</b1>: The list to swap</li>                    
                        <li><b2>int</b2> <b1>indexA</b1>: The index of the first element to swap</li>                    
                        <li><b2>int</b2> <b1>indexB</b1>: The index of the second element to swap</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Shift" content={(
                <div>
                    <p>
                        Shift one or more elements from an array or list by one or more positions to the left or right.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static T[]</b2> <b1>ShiftLeft{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>startIndex = 0</b1>, <b2>int</b2> <b1>amountOfItemsToShift = 0</b1>)</li>
                        <li><b2>static T[]</b2> <b1>ShiftRight{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>startIndex = 0</b1>, <b2>int</b2> <b1>amountOfItemsToShift = 0</b1>)</li>
                        <li><b2>static List{"<T>"}</b2> <b1>ShiftLeft{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>startIndex = 0</b1>, <b2>int</b2> <b1>amountOfItemsToShift = 0</b1>)</li>
                        <li><b2>static List{"<T>"}</b2> <b1>ShiftRight{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>startIndex = 0</b1>, <b2>int</b2> <b1>amountOfItemsToShift = 0</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>T[]</b2> <b1>array</b1>: The array to shift</li>                    
                        <li><b2>List{"<T>"}</b2> <b1>list</b1>: The list to shift</li>                    
                        <li><b2>int</b2> <b1>startIndex</b1>: The index to start shifting</li>                    
                        <li><b2>int</b2> <b1>amountOfItemsToShift</b1>: The amount of elements to shift. If is 0, it shifts the entire list or array</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Shuffle" content={(
                <div>
                    <p>
                        Randomly shuffle the elements of an array or list.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static T[]</b2> <b1>Shuffle{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>startIndex = 0</b1>, <b2>int</b2> <b1>amountOfItemsToShuffle = 0</b1>)</li>
                        <li><b2>static List{"<T>"}</b2> <b1>Shuffle{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>startIndex = 0</b1>, <b2>int</b2> <b1>amountOfItemsToShuffle = 0</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>T[]</b2> <b1>array</b1>: The array to shuffle</li>                    
                        <li><b2>List{"<T>"}</b2> <b1>list</b1>: The list to shuffle</li>                    
                        <li><b2>int</b2> <b1>startIndex</b1>: The index to start shuffling</li>                    
                        <li><b2>int</b2> <b1>amountOfItemsToShift</b1>: The amount of elements to shuffle. If is 0, it shuffles the entire list or array</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Move" content={(
                <div>
                    <p>
                        Move an element to the specified index position of the array or list.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static T[]</b2> <b1>Move{"<T>"}</b1>(<b2>this T[]</b2> <b1>array</b1>, <b2>int</b2> <b1>index</b1>, <b2>int</b2> <b1>elementAmount = 1</b1>, <b2>int</b2> <b1>movePosition = 0</b1>)</li>
                        <li><b2>static List{"<T>"}</b2> <b1>Move{"<T>"}</b1>(<b2>this List{"<T>"}</b2> <b1>list</b1>, <b2>int</b2> <b1>index</b1>, <b2>int</b2> <b1>elementAmount = 1</b1>, <b2>int</b2> <b1>movePosition = 0</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>T[]</b2> <b1>array</b1>: The array to manipulate</li>                    
                        <li><b2>List{"<T>"}</b2> <b1>list</b1>: The list to manipulate</li>                    
                        <li><b2>int</b2> <b1>index</b1>: The index of the element to move</li>                    
                        <li><b2>int</b2> <b1>elementAmount</b1>: The amount of elements to move starting from the index</li>                    
                        <li><b2>int</b2> <b1>movePosition</b1>: The index position to move the elements to. This value wraps between 0 and the last index</li>                    
                    </ul>
                </div>
            )}/>

            <h3 className="p-2">Examples</h3>            
            <Group title="Example 01: Basic Usage of Listop Utilities" content={(
                <div>
                    <p>
                        Here’s an example of how to use each method:
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-100" src="images/Library/Utilities/Listop/Listop - 01.jpg" alt=""/>            
                </div>
            )}/>

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The Shift method can shift elements to either the left or the right depending on whether the shift value is positive or negative.</li>
                <li>When using Swap, ensure that both indices are valid, otherwise an error may occur.</li>
                <li>The Shuffle method leverages randomness, so the output may differ each time the function is called.</li>
            </ul>
       </div>
    );
}