import React from "react";

export default function Function() {

    return (
        <div className="c-light-2">
            <h1 className="text-center">Utilities</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Utilities provide an extensive range of tools that significantly streamline game
                development tasks. Whether you're handling data conversions, looping through collections,
                generating random values, or performing mathematical operations, these utilities make it easier to
                work efficiently in Unity. The comprehensive nature of the utilities allows for flexibility and power,
                ensuring that developers can tackle various common tasks with minimal effort. 
            </h6>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The Utilities section contains an extensive suite of utility classes designed to simplify
                common tasks in Unity development, ranging from creating and manipulating data types, looping
                through collections, generating random values, to easing animations and managing files. These
                utilities offer a robust toolset to developers, enhancing the efficiency and flexibility of operations
                related to input handling, data manipulation, mathematical operations, file management and
                more. Each utility class is crafted to be easy to integrate into Unity projects, making everyday
                development tasks faster and more efficient. 
            </p>

            <h3 className="p-2">Summary</h3>

            <h4 className="c-light-1 p-3">Create</h4>
            <p className="pad-left-3">
                Create is a utility class that simplifies the process of generating instances of Unity data types like
                Vector2, Vector3, Vector2Int, Vector3Int, Color and Rect. It offers flexible initialization methods
                with various starting parameters, making it easier to generate values commonly used in game
                development. 
            </p>

            <h4 className="c-light-1 p-3">Adapt</h4>
            <p className="pad-left-3">
                Adapt offers a comprehensive set of methods for data type conversion and formatting. These
                methods allow for transforming bool, int, float, vectors, arrays, lists, colors and actions into
                different forms, enabling seamless data manipulation within Unity. 
            </p>

            <h4 className="c-light-1 p-3">Randget</h4>
            <p className="pad-left-3">
                The Randget utilities are designed to generate random values such as booleans, integers, floats,
                vectors, colors and even random selections from lists or arrays. These methods are particularly
                useful for adding randomness to game mechanics, enhancing realism, and introducing variation in
                gameplay.
            </p>

            <h4 className="c-light-1 p-3">Looping</h4>
            <p className="pad-left-3">
                The Looping utilities offer methods for iterating over collections like arrays, lists and dictionaries,
                as well as complex structures such as vectors, colors and AnimationCurves. It supports both
                forward and backward looping, giving developers the flexibility to work with collections in
                different orders. This utility is essential when processing large amounts of data, creating
                algorithms, or animating objects.
            </p>

            <h4 className="c-light-1 p-3">Easing</h4>
            <p className="pad-left-3">
                Easing provides a set of easing functions to enable smooth animations, transitions and effects
                within Unity. It includes 13 types of easing functions, each with three variations: In, Out and Both.
                These variations allow developers to customize how an animation eases in (starts slowly), eases
                out (ends slowly) or eases both in and out. The easing functions are ideal for fine-tuning
                animations and transitions for UI elements or game objects. 
            </p>

            <h4 className="c-light-1 p-3">Files</h4>
            <p className="pad-left-3">
                The Files utilities simplify file management by allowing developers to save and load data in
                formats like Text, Json, Binary, XML and CSV. These utilities are invaluable for managing game
                saves, player preferences or any persistent data required for game functionality.
            </p>

            <h4 className="c-light-1 p-3">Control</h4>
            <p className="pad-left-3">
                Control enhances input handling by providing methods for directional input, mouse input, touch
                input and extending console debugging. It allows for capturing the direction of arrow keys,
                tracking the mouse or touch positions and extending console output with formatted messages. 
            </p>

            <h4 className="c-light-1 p-3">Math</h4>
            <p className="pad-left-3">
                The Math utilities provide operations for various mathematical calculations such as addition,
                multiplication, complement, modulo, power, root, inverse and more. These utilities support data
                types like int, float, vectors (Vector2, Vector3), colors and Rect. It simplifies complex mathematical
                computations often needed in game development.
            </p>

            <h4 className="c-light-1 p-3">Text</h4>
            <p className="pad-left-3">
                Text utilities provide flexible methods for manipulating strings and characters. The utilities allow
                developers to check, count and modify strings in various ways. This includes operations like
                reversing strings, checking string lengths or replacing specific characters. They can also be used for
                enum-based operations on strings, such as working with ASCII tables or specific characters.
            </p>

            <h4 className="c-light-1 p-3">List</h4>
            <p className="pad-left-3">
                The List utilities enhance the functionality of lists and arrays, making it easier to manipulate and
                access elements. Developers can perform operations such as accessing the last element, reversing
                lists, shuffling, swapping elements or splitting lists. These utilities make array and list handling
                more efficient, particularly in dynamic game environments.
            </p>
       </div>
    );
}