import React from "react";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center">Title Decorator</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Title attribute is a custom Unity attribute used to display a stylized title above fields in the Unity Inspector. 
                This attribute allows developers to group and label sections of the Inspector, enhancing the readability and organization of component properties. 
                By customizing the title's text, font size, alignment, style, color and vertical offset, developers can create visually appealing and informative headers that improve the user experience in the Unity Inspector.
            </h6>

            <h3 className="p-2">How it Works</h3>

            <div className="p-3">
                <h4 className="c-light-1 pad-left-2">Title Attribute</h4>
                <p className="pad-left-3">
                    The Title attribute class provides several constructors to customize the title's appearance:
                </p>
                <h5 className="c-light-1 pad-left-3">Constructors</h5>
                <ul className="property-list">
                    <li><b1>TitleAttribute</b1>(<b2>string</b2> <b1>title</b1>): Creates a title with the specified text.</li>
                    <li><b1>TitleAttribute</b1>(<b2>string</b2> <b1>title</b1>, <b2>int</b2> <b1>fontSize</b1>): Creates a title with the specified text and font size.</li>
                    <li><b1>TitleAttribute</b1>(<b2>string</b2> <b1>title</b1>, <b2>TextAnchor</b2> <b1>alignment</b1>): Creates a title with the specified text and alignment.</li>
                    <li><b1>TitleAttribute</b1>(<b2>string</b2> <b1>title</b1>, <b2>FontStyle</b2> <b1>fontStyle</b1>): Creates a title with the specified text and font style.</li>
                    <li><b1>TitleAttribute</b1>(<b2>string</b2> <b1>title</b1>, <b2>string</b2> <b1>textColorHex</b1>): Creates a title with the specified text and text color (in hexadecimal format).</li>
                    <li><b1>TitleAttribute</b1>(<b2>string</b2> <b1>title</b1>, <b2>float</b2> <b1>offset</b1>): Initializes with a title and a uniform vertical offset.</li>
                    <li><b1>TitleAttribute</b1>(<b2>string</b2> <b1>title</b1>, <b2>float</b2> <b1>topOffset</b1>, <b2>float</b2> <b1>bottomOffset</b1>): Initializes with a title and separate top and bottom offsets.</li>
                </ul>
                <p className="pad-left-3">
                    Additional constructors combine these parameters to provide further customization, allowing for a flexible and tailored presentation.
                </p>
                <h5 className="c-light-1 pad-left-3">Parameters</h5>
                <ul className="property-list">
                    <li><b2>string</b2> <b1>title</b1>: The text content of the title.</li>
                    <li><b2>int</b2> <b1>fontSize</b1> (optional): The size of the font used for the title text. Default is 12.</li>                        
                    <li><b2>TextAnchor</b2> <b1>alignment</b1> (optional): The alignment of the title text, which can be set using the TextAnchor enum (e.g., MiddleLeft, MiddleCenter, MiddleRight). Default is MiddleLeft.</li>                        
                    <li><b2>FontStyle</b2> <b1>fontStyle</b1> (optional): The style of the font, specified using the FontStyle enum (e.g., Normal, Bold, Italic, BoldAndItalic). Default is Normal.</li>                        
                    <li><b2>string</b2> <b1>textColorHex</b1> (optional): The color of the title text, represented as a Color object. Default is grey “C4C4C4”.</li>
                    <li><b2>float</b2> <b1>offset</b1>: The vertical space above and below the title. Default is 2f.</li>
                    <li><b2>float</b2> <b1>topOffset</b1>: The vertical space above the title. Default is 2f.</li>
                    <li><b2>float</b2> <b1>bottomOffset</b1>: The vertical space below the title. Default is 2f.</li>
                </ul>
            </div>

            <h3 className="p-2">How to Use</h3>
            <p className="pad-left-2">
                The Title attribute can be applied to fields within a MonoBehaviour or ScriptableObject class. 
                It provides a title header in the Inspector that can be customized to fit various design requirements. 
                Here are some examples of how to use the Title attribute:
            </p>

            <h4 className="c-light-1 p-3">Example 01: Basic Title</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Title/Title - 01.jpg" alt=""/>            
            <p className="pad-left-3">
                This example adds a simple title "General Settings" above the field1 property, creating a clear and readable section header in the Inspector.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Title/Title - 02.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 02: Title with Customized Font Size and Color</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Title/Title - 03.jpg" alt=""/>            
            <p className="pad-left-3">
                This example adds a title "Advanced Settings" with a larger font size (16) and a red color (hex code #F96E42). 
                The customized appearance makes the title stand out, highlighting the section more prominently.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Title/Title - 04.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 03: Title Aligned and Styled with Custom Offset</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Title/Title - 05.jpg" alt=""/>            
            <p className="pad-left-3">
                This example creates a title "Network Settings" with centered alignment, bold font style, and a light blue color (hex code #81B4FF). 
                It also specifies a top offset of 5 and a bottom offset of 10, adding spacing around the title for better visual separation.
            </p>
            <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Title/Title - 06.jpg" alt=""/>            


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The TextAnchor enum provides various alignment options, such as MiddleLeft, MiddleCenter, and MiddleRight, allowing for flexible text placement.</li>                
                <li>The FontStyle enum includes styles like Normal, Bold, Italic, and BoldAndItalic, offering different levels of emphasis.</li>                
                <li>The TextColorHex can be set using a hexadecimal color code, enabling precise color customization for the title text.</li>                
                <li>The TopOffset and BottomOffset parameters control the vertical spacing above and below the title, helping to separate it from adjacent fields.</li>                
            </ul>


            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The Title attribute is a powerful tool for enhancing the Unity Inspector by adding customizable titles above fields. 
                It helps organize and label sections of the Inspector, making it easier to navigate and understand the properties of a component or scriptable object. 
                With options for text, font size, alignment, style, color and vertical offset, the Title attribute offers a versatile way to improve the user experience and readability of your Unity projects.
            </p>
       </div>
    );
}