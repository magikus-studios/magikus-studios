import React from "react";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Progress Bar Decorator</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Custom attribute designed to Display a Float Field as a Progress Bar in Unity's Inspector 
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The ProgressBar attribute offers a straightforward yet powerful way to visualize float values as progress bars in Unity's Inspector. 
                It's especially useful for displaying percentage-based metrics like health, experience or progress in a clear and intuitive manner. 
                Additionally, you can add a custom label to make the Inspector more informative and visually appealing.
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ProgressBar/Progress Bar - 04.jpg" alt=""/>            
            </div>

            <h3 className="p-2">How it Works</h3>

            <div className="p-3">
                <h4 className="c-light-1 pad-left-2">ProgressBar Attribute</h4>
                <h5 className="c-light-1 pad-left-3">Constructors</h5>
                <ul className="property-list">
                    <li><b1>ProgressBarAttribute</b1>()</li>
                    <li><b1>ProgressBarAttribute</b1>(<b2>string</b2> <b1>label</b1>)</li>
                </ul>
                <h5 className="c-light-1 pad-left-3">Parameters</h5>
                <ul className="property-list">
                    <li><b2>string</b2> <b1>label</b1> (optional): The label to display next to the progress bar. Default is "" (an empty string), which shows only the percentage value.</li>                    
                </ul>
            </div>


            <h3 className="p-2">How to Use</h3>
            <p className="pad-left-2">
                To use the ProgressBar attribute, apply it to any float field in your script that you want to display as a progress bar in the Unity Inspector. 
                Below are examples demonstrating different ways to use this attribute:
            </p>
            <h4 className="c-light-1 p-3">Example 01: Simple Progress Bar</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/ProgressBar/Progress Bar - 01.jpg" alt=""/>            
            <p className="pad-left-3">
                This example shows a simple progress bar for the progress field. The bar will display the percentage value of the float, which in this case is 75%.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ProgressBar/Progress Bar - 02.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 02: Progress Bar with Custom Label</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/ProgressBar/Progress Bar - 03.jpg" alt=""/>            
            <p className="pad-left-3">
                Here, the progress bar for the health field is labeled "Health" and displays 50% Health. The label helps to identify what the progress bar represents.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ProgressBar/Progress Bar - 04.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 03: Multiple Progress Bars with Different Labels</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/ProgressBar/Progress Bar - 05.jpg" alt=""/>            
            <p className="pad-left-3">
                This example illustrates the use of multiple progress bars with different labels, "Mana" and "Stamina", representing different attributes of a game character. 
                The progress bars display 80% Mana and 40% Stamina, respectively.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/ProgressBar/Progress Bar - 06.jpg" alt=""/>            

            
            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The ProgressBar attribute is intended for float fields only. Applying it to other field types will not work and may produce errors.</li>
                <li>The progress bar is designed to handle values between 0 and 1. Values outside this range may not render as expected in the Inspector.</li>
                <li>Adding a custom label can provide better context for what the progress bar represents, making the Inspector more informative.</li>
            </ul>
       </div>
    );
}