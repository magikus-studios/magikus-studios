import React from "react";

export default function Function() {

    let scrollUp = () => { window.scrollTo({ top: 0, behavior: "smooth" }); }

    return (
        <div className="c-light-2">
            <h1 className="text-center pad-top-4">Utilities</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Static and Extension Methods that simplify Code Scripting
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2">
                The Utilities module provide an extensive range of static and extension methods that significantly streamline script development.
                The comprehensive nature of the utilities allows for flexibility and power, ensuring that developers can tackle various common tasks with minimal effort.
                These methods allow developers to write less code, resulting in a cleaner and more maintainable codebase.                
            </p>

            <a href="/#/library/utilities/create" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Create</h4></a>
            <p className="pad-left-3">
                The Create utility is a static class that simplifies the initialization of Unity data types, allowing for more concise and readable code in diverse development scenarios.
            </p>

            <a href="/#/library/utilities/adapt" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Adapt</h4></a>
            <p className="pad-left-3">
                The Adapt utilities class offers a versatile set of type transformation methods, streamlining common conversions in Unity game development to improve code readability and reduce boilerplate.
            </p>

            <a href="/#/library/utilities/controls" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Controls</h4></a>
            <p className="pad-left-3">
                The Controls utilities streamline input handling and debugging in Unity, allowing developers to focus on core game logic by simplifying common input operations and enhancing console output.
            </p>

            <a href="/#/library/utilities/easing" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Easing</h4></a>
            <p className="pad-left-3">
                The Easing utilities offer versatile methods for crafting smooth, customizable transitions, perfect for enhancing animations, UI elements and game effects.
            </p>

            <a href="/#/library/utilities/looping" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Looping</h4></a>
            <p className="pad-left-3">
                The Looping utilities simplify collection iteration in Unity, enabling forward and backward looping with improved code readability and maintainability.
            </p>

            <a href="/#/library/utilities/datafile" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Datafile</h4></a>
            <p className="pad-left-3">
                The Datafile utilities offer flexible methods for managing save files in Unity, making it easy to handle persistent data across multiple formats in game development.
            </p>

            <a href="/#/library/utilities/randop" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Randop</h4></a>
            <p className="pad-left-3">
                The Randop utilities offer developers a powerful toolkit for adding randomness to game interactions, enhancing realism and accelerating development with efficient, easy-to-implement methods for generating random points, selecting items and applying colors.
            </p>

            <a href="/#/library/utilities/math" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Math</h4></a>
            <p className="pad-left-3">
                The Math utilities offer a versatile set of methods for simplifying mathematical operations across various data types, making complex calculations effortless and ideal for game development.
            </p>

            <a href="/#/library/utilities/text" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Text</h4></a>
            <p className="pad-left-3">
                The Text utilities offer powerful methods for efficient and flexible string manipulation, simplifying tasks like counting, modifying and pattern-checking.
            </p>

            <a href="/#/library/utilities/list" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">List</h4></a>
            <p className="pad-left-3">
                The List utilities offer powerful and flexible methods for manipulating arrays and lists, simplifying complex operations and streamlining workflows in game development.
            </p>
       </div>
    );
}