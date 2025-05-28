import React from "react";
import Group from "Components/Group";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Conditional Attribute</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Collection of Attributes that Enable Conditional Behavior for PropertyDrawers 
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Conditional attributes is a powerful tool for dynamically modifying the Unity Inspector's behavior. 
                By applying these attributes, you can dynamically modify the appearance of fields in the Inspector based on the value of other fields. 
                This enhances data visualization and improves workflow by decluttering the Inspector while maintaining control over field visibility.                
            </p>

            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Decorators/Conditional/Conditional - 17.jpg" alt=""/>            
            </div>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-3">
                The Conditional attributes are designed to be combined with other decorators in this library such as the <b2>[message]</b2> decorator or the <b2>[show]</b2> decorator.
                These attributes are flexible and can be applied to fields of various types, including booleans, enums, numbers and object references. 
                You can also specify a reference property for comparison using the PropertyName parameter.
                The Conditional Decorator includes the following attributes:
            </p>
            <Group title="If Attribute" content={(
                <div>
                    <p>
                        Conditionally display or modify fields based on equality to a given value.
                    </p>
                    <h5 className="c-light-1">Constructors</h5>
                    <ul className="property-list">
                        <li><b1>If</b1>()</li>
                        <li><b1>If</b1>(<b2>object</b2> <b1>value</b1>, <b2>params object[]</b2> <b1>alternativeValues</b1>)</li>
                        <li><b1>If</b1>(<b2>string</b2> <b1>propertyName</b1>)</li>
                        <li><b1>If</b1>(<b2>string</b2> <b1>propertyName</b1>, <b2>object</b2> <b1>value</b1>, <b2>params object[]</b2> <b1>alternativeValues</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>PropertyName</b1>: Name of the property to compare against. Defaults to the same field the attribute is applied to if not set</li>
                        <li><b2>object</b2> <b1>Value</b1>: Target value for comparison</li>
                        <li><b2>object[]</b2> <b1>AlternativeValues</b1>: Additional values to include in the comparison</li>
                    </ul>
                </div>
            )}/>
            <Group title="If Not Attribute" content={(
                <div>
                    <p>
                        Conditionally display or modify fields based on inequality to a given value.
                    </p>
                    <h5 className="c-light-1">Constructors</h5>
                    <ul className="property-list">
                        <li><b1>IfNot</b1>()</li>
                        <li><b1>IfNot</b1>(<b2>object</b2> <b1>value</b1>, <b2>params object[]</b2> <b1>alternativeValues</b1>)</li>
                        <li><b1>IfNot</b1>(<b2>string</b2> <b1>propertyName</b1>)</li>
                        <li><b1>IfNot</b1>(<b2>string</b2> <b1>propertyName</b1>, <b2>object</b2> <b1>value</b1>, <b2>params object[]</b2> <b1>alternativeValues</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>PropertyName</b1>: Name of the property to compare against. Defaults to the same field the attribute is applied to if not set</li>
                        <li><b2>object</b2> <b1>Value</b1>: Target value for comparison</li>
                        <li><b2>object[]</b2> <b1>AlternativeValues</b1>: Additional values to include in the comparison</li>
                    </ul>
                </div>
            )}/>
            <Group title="If Range Attribute" content={(
                <div>
                    <p>
                        Applies conditional behavior when a number is inside or outside a defined range.
                    </p>
                    <h5 className="c-light-1">Constructors</h5>
                    <ul className="property-list">
                        <li><b1>IfRange</b1>(<b2>int</b2> <b1>min</b1>, <b2>int</b2> <b1>max</b1>, <b2>RANGE</b2> <b1>rangeMode = RANGE.InInc</b1>)</li>
                        <li><b1>IfRange</b1>(<b2>string</b2> <b1>propertyName</b1>, <b2>int</b2> <b1>min</b1>, <b2>int</b2> <b1>max</b1>, <b2>RANGE</b2> <b1>rangeMode = RANGE.InInc</b1>)</li>
                        <li><b1>IfRange</b1>(<b2>float</b2> <b1>min</b1>, <b2>int</b2> <b1>max</b1>, <b2>RANGE</b2> <b1>rangeMode = RANGE.InInc</b1>)</li>
                        <li><b1>IfRange</b1>(<b2>string</b2> <b1>propertyName</b1>, <b2>float</b2> <b1>min</b1>, <b2>int</b2> <b1>max</b1>, <b2>RANGE</b2> <b1>rangeMode = RANGE.InInc</b1>)</li>
                        <li><b1>IfRange</b1>(<b2>int</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>, <b2>RANGE</b2> <b1>rangeMode = RANGE.InInc</b1>)</li>
                        <li><b1>IfRange</b1>(<b2>string</b2> <b1>propertyName</b1>, <b2>int</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>, <b2>RANGE</b2> <b1>rangeMode = RANGE.InInc</b1>)</li>
                        <li><b1>IfRange</b1>(<b2>float</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>, <b2>RANGE</b2> <b1>rangeMode = RANGE.InInc</b1>)</li>
                        <li><b1>IfRange</b1>(<b2>string</b2> <b1>propertyName</b1>, <b2>float</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>, <b2>RANGE</b2> <b1>rangeMode = RANGE.InInc</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>PropertyName</b1>: Name of the property to compare against. Defaults to the same field the attribute is applied to if not set</li>
                        <li><b2>int</b2> <b1>min</b1>: Min value of the range</li>
                        <li><b2>float</b2> <b1>min</b1>: Min value of the range</li>
                        <li><b2>int</b2> <b1>max</b1>: Max value of the range</li>
                        <li><b2>float</b2> <b1>max</b1>: Max value of the range</li>
                        <li><b2>RANGE</b2> <b1>rangeMode</b1>: Specifies the range inclusion/exclusion behavior. Choose from Inside or Outside the range and may Include or Exlude the min, max or both values.</li>
                    </ul>
                </div>
            )}/>
            <Group title="Comparison Attributes" content={(
                <div>
                    <p>
                        Checks if a number is greater, greater than or equal to, smaller or smaller than or equal to a specified value.
                    </p>
                    <h5 className="c-light-1">Constructors</h5>
                    <ul className="property-list">
                        <li><b1>IfGreater</b1>(<b2>int</b2> <b1>comparer</b1>)</li>
                        <li><b1>IfGreater</b1>(<b2>float</b2> <b1>comparer</b1>)</li>
                        <li><b1>IfGreater</b1>(<b2>string</b2> <b1>propertyName</b1>, <b2>int</b2> <b1>comparer</b1>)</li>
                        <li><b1>IfGreater</b1>(<b2>string</b2> <b1>propertyName</b1>, <b2>float</b2> <b1>comparer</b1>)</li>
                        <br/>
                        <li><b1>IfSmaller</b1>(<b2>int</b2> <b1>comparer</b1>)</li>
                        <li><b1>IfSmaller</b1>(<b2>float</b2> <b1>comparer</b1>)</li>
                        <li><b1>IfSmaller</b1>(<b2>string</b2> <b1>propertyName</b1>, <b2>int</b2> <b1>comparer</b1>)</li>
                        <li><b1>IfSmaller</b1>(<b2>string</b2> <b1>propertyName</b1>, <b2>float</b2> <b1>comparer</b1>)</li>
                        <br/>
                        <li><b1>IfGreaterOrEqual</b1>(<b2>int</b2> <b1>comparer</b1>)</li>
                        <li><b1>IfGreaterOrEqual</b1>(<b2>float</b2> <b1>comparer</b1>)</li>
                        <li><b1>IfGreaterOrEqual</b1>(<b2>string</b2> <b1>propertyName</b1>, <b2>int</b2> <b1>comparer</b1>)</li>
                        <li><b1>IfGreaterOrEqual</b1>(<b2>string</b2> <b1>propertyName</b1>, <b2>float</b2> <b1>comparer</b1>)</li>
                        <br/>
                        <li><b1>IfSmallerOrEqual</b1>(<b2>int</b2> <b1>comparer</b1>)</li>
                        <li><b1>IfSmallerOrEqual</b1>(<b2>float</b2> <b1>comparer</b1>)</li>
                        <li><b1>IfSmallerOrEqual</b1>(<b2>string</b2> <b1>propertyName</b1>, <b2>int</b2> <b1>comparer</b1>)</li>
                        <li><b1>IfSmallerOrEqual</b1>(<b2>string</b2> <b1>propertyName</b1>, <b2>float</b2> <b1>comparer</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>PropertyName</b1>: Name of the property to compare against. Defaults to the same field the attribute is applied to if not set</li>
                        <li><b2>int</b2> <b1>comparer</b1>: Value to compare to</li>
                        <li><b2>float</b2> <b1>comparer</b1>: Value to compare to</li>
                    </ul>
                </div>
            )}/>


            <h3 className="p-2">Examples</h3>
            <Group title="Example 01: Using the If attribute to Block a Label" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Conditional/Conditional - 01.jpg" alt=""/>            
                    <p>
                        In this example, the Label will only be editable when the EditLabel field is enabled.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Conditional/Conditional - 01.gif" alt=""/>            
                </div>
            )}/>
            <Group title="Example 02: Using the Conditional attribute with Referenced Values" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Conditional/Conditional - 04.jpg" alt=""/>            
                    <p>
                        Here, the Target Position field is only editable if the Audio Target field contains a reference.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Conditional/Conditional - 02.gif" alt=""/>            
                </div>
            )}/>
            <Group title="Example 03: Using the Conditional attribute with Enums" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Conditional/Conditional - 07.jpg" alt=""/>            
                    <p>
                        With enums there are lots of posibilities. 
                        In this case, if Simple is selected, the Simple Settings field will be displayed. 
                        If the Simple settings is not selected, the Advance Settings field will be displayed.
                        And if the Extra settings is selected, the Extra Settings field will be displayed too, as well as the Advance Settings field.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Conditional/Conditional - 03.gif" alt=""/>            
                </div>
            )}/>
            <Group title="Example 04: Using the If Range attribute to show a Setting" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Conditional/Conditional - 11.jpg" alt=""/>            
                    <p>
                        In this case, the Minimize Samples field will only be displayed when the amountOfSamples value is between 3 and 5.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Conditional/Conditional - 04.gif" alt=""/>            
                </div>
            )}/>
            <Group title="Example 05: Using the If Greater attribute to display a Message" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Decorators/Conditional/Conditional - 14.jpg" alt=""/>            
                    <p>
                        In this example, a message of warning will be displayed whenever the Volume field value is greater than 3.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Decorators/Conditional/Conditional - 05.gif" alt=""/>            
                </div>
            )}/>


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>Always use the <b2>nameof()</b2> operator to reference property names. This ensures that your code remains robust and avoids typos when fields are renamed.</li>
                <li>If no property name is provided, the attribute will evaluate the field it is applied to.</li>
                <li>You can combine conditional attributes with other property attributes like <b2>[Message]</b2> or <b2>[Show]</b2> for enhanced Inspector control.</li>
            </ul>
       </div>
    );
}