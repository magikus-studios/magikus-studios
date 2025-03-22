import React from "react";
import Group from "Components/Group";

export default function Function() {

    let scrollUp = () => { window.scrollTo({ top: 0, behavior: "smooth" }); }

    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Block Decorator</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Attribute designed to Make Fields in Unity's Inspector Read-Only
            </h6>
      
            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The <b2>[Block]</b2> attribute is a simple yet powerful tool for ensuring certain fields remain read-only in the Unity Inspector, helping maintain data integrity by preventing accidental modifications. 
                This is useful for fields that should display data without allowing the user to modify them directly in the Inspector.
                Whether you are working with simple variables or complex data structures, the NonEditable attribute provides a straightforward way to safeguard your data presentation in Unity's editing environment.
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Block/Block - 02.jpg" alt=""/>            
            </div>


            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2 pad-bottom-2">
                The <b2>[Block]</b2> attribute is a very straight forward tool to use. 
                Just add the <b2>[Block]</b2> attribute to the property you want to make non-editable.
                Aditionally, it is fully integrated with the Conditional attributes for conditional behaviour (<a href="/#/library/decorators/conditional" className="t-dec-none c-light-0 c-light-4-h" onClick={scrollUp}>See Conditional Decorator</a>).
            </p>
            <Group title="Block Attribute" content={(
                <div>
                    <p>
                        The Block attribute class offers constructors to initialize the attribute with the necessary properties to control field editability:
                    </p>
                    <h5 className="c-light-1">Constructors</h5>
                    <ul className="property-list">
                        <li><b1>Block</b1>(<b2>bool</b2> <b1>ignoreCondition</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>ignoreCondition</b1>: If true, this attribute will ignore any conditional attribute that this field could have.</li>
                    </ul>
                </div>
            )}/>


            <h3 className="p-2">Examples</h3>
            <p className="pad-left-2">
                To use the <b2>[Block]</b2> attribute, simply apply it to any field in your script that you want to make read-only in the Unity Inspector. 
                Below are examples demonstrating how to use this attribute:
            </p>
            <Group title="Example 01: Making a Single Field Non-Editable" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Block/Block - 01.jpg" alt=""/>            
                    <p>
                        In this example, the readOnlyString field is displayed as read-only in the Unity Inspector. Users can see the value but cannot change it.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Block/Block - 02.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 02: Block Field in a Struct" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Block/Block - 03.jpg" alt=""/>            
                    <p>
                        Here, the playerID field within the PlayerData struct is made non-editable. Users can modify playerName but not playerID in the Inspector.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Block/Block - 04.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 03: Combining Block with Conditonal Attributes" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Block/Block - 05.jpg" alt=""/>            
                    <p>
                        In this example, editableField is editable in the Inspector, while readOnlyField is read-only, showing how you can mix editable and non-editable fields in the same class.
                        By combining the <b2>[Block]</b2> attribute with the <b2>[IfSmaller]</b2> attribute, the readOnlyField will only stay read-only as long as the editableField value is smaller than 10.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-65" src="images/Library/Decorators/Block/Block - 01.gif" alt=""/>            
                </div>
            )}/>

            
            <h3 className="p-2">Notes</h3>
            <ul>
                <li>Applying <b2>[Block]</b2> attribute to a field ensures that it is displayed in the Inspector but cannot be modified. This is useful for fields that should reflect data without user interference.</li>                
                <li>This attribute does not affect the runtime behavior of the fields. It is solely for the purpose of restricting editability in the Unity Editor.</li>
                <li>The <b2>[Block]</b2> attribute can be used with any field type, including primitive types, structs, and complex objects, as long as they are serialized and displayed in the Inspector.</li>
                <li>Ensure that your fields are properly serialized for them to appear in the Inspector.</li>
                <li>The <b2>[Block]</b2> attribute supports Conditional decorators for conditional behaviours.</li>
            </ul>
       </div>
    );
}