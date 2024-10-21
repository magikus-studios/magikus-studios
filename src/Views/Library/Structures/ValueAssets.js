import React from "react";
import Group from "Components/Group";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center">Value Assets</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Value Asset structure represents different value types (bool, int, float, string, Vector2 and Vector3) as Scriptable Objects, implementing a framework for scriptable object architecture. 
                This structure provides a modular and decoupled way to share and manage data across different components and scenes in Unity projects. 
            </h6>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The primary purpose of the Value Asset structure is to allow different parts of a Unity project to share and respond to data changes without being directly linked or dependent on each other. 
                This design enhances code flexibility and maintenance by reducing the tight coupling between components.
            </p>
            <p className="pad-left-2">
                Value Assets can hold data that persists across different scenes, allowing for seamless data flow and consistency without needing to pass objects or data explicitly. 
                Also, with the onValueChange action, Value Assets can trigger updates in multiple scripts whenever the value changes. 
                For example, a health value asset can notify both the player health UI and a score tracker whenever the player's health changes. 
                Value Assets can act as a centralized repository for critical game data, such as player stats, game settings or environmental parameters, enabling a more organized and manageable approach to data handling.
            </p>


            <h3 className="p-2">How it Works</h3>

            <Group title="ValueAsset<T>" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>T</b2> <b1>Value</b1>: Returns the current value of the asset</li>                    
                        <li><b2>bool</b2> <b1>HasFilter</b1>: Returns if the event has a filter setted</li>                    
                        <li><b2>int</b2> <b1>SubscribersCount</b1>: Returns the amount of subscribers to this event</li>                    
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>SetFilter</b1>(<b2>Func{"<T, T>"}</b2> <b1>filter</b1>): Sets the filter to the asset</li>
                        <li><b2>void</b2> <b1>RemoveFilter</b1>(): Removes the filter from the asset</li>
                        <li><b2>void</b2> <b1>SkipNextChange</b1>(): Skips the next value change</li>
                        <li><b2>void</b2> <b1>Subscribe</b1>(<b2>Action{"<T>"}</b2> <b1>action</b1>): Subscribes the action to the onChange event</li>
                        <li><b2>void</b2> <b1>Subscribe</b1>(<b2>UnityEvent{"<T>"}</b2> <b1>action</b1>): Subscribes the action to the onChange event</li>
                        <li><b2>void</b2> <b1>Unsubscribe</b1>(<b2>Action{"<T>"}</b2> <b1>action</b1>): Unsubscribes the action from the onChange event</li>
                        <li><b2>void</b2> <b1>Unsubscribe</b1>(<b2>UnityEvent{"<T>"}</b2> <b1>action</b1>): Unsubscribes the action from the onChange event</li>
                        <li><b2>void</b2> <b1>ResetAssetValue</b1>(): Reset the asset value</li>
                        <li><b2>void</b2> <b1>SetDefaultValue</b1>(): Set the asset with default values</li>
                        <li><b2>void</b2> <b1>PrintValue</b1>(): Print the asset to the console</li>
                    </ul>
                </div>
            )}/>

            <Group title="BoolAsset : ValueAsset<bool>" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>CompareTo</b1>(<b2>BoolAsset</b2> <b1>value</b1>): Compares the two assets</li>
                        <li><b2>int</b2> <b1>CompareTo</b1>(<b2>bool</b2> <b1>value</b1>): Compares the two values</li>
                        <li><b2>int</b2> <b1>CompareTo</b1>(<b2>object</b2> <b1>value</b1>): Compares the two objects</li>
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>BoolAsset</b2> <b1>value</b1>): Checks if the two assets have equal values</li>
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>bool</b2> <b1>value</b1>): Checks if the two values are equal</li>
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>object</b2> <b1>value</b1>): Checks if the two object values are equal</li>
                        <li><b2>int</b2> <b1>GetHashCode</b1>(): Returns the hashcode</li>
                    </ul>
                </div>
            )}/>

            <Group title="IntAsset : ValueAsset<int>" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>CompareTo</b1>(<b2>IntAsset</b2> <b1>value</b1>): Compares the two assets</li>
                        <li><b2>int</b2> <b1>CompareTo</b1>(<b2>int</b2> <b1>value</b1>): Compares the two values</li>
                        <li><b2>int</b2> <b1>CompareTo</b1>(<b2>object</b2> <b1>value</b1>): Compares the two objects</li>
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>IntAsset</b2> <b1>value</b1>): Checks if the two assets have equal values</li>
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>int</b2> <b1>value</b1>): Checks if the two values are equal</li>
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>object</b2> <b1>value</b1>): Checks if the two object values are equal</li>
                        <li><b2>int</b2> <b1>GetHashCode</b1>(): Returns the hashcode</li>
                    </ul>
                </div>
            )}/>

            <Group title="FloatAsset : ValueAsset<float>" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>CompareTo</b1>(<b2>FloatAsset</b2> <b1>value</b1>): Compares the two assets</li>
                        <li><b2>int</b2> <b1>CompareTo</b1>(<b2>float</b2> <b1>value</b1>): Compares the two values</li>
                        <li><b2>int</b2> <b1>CompareTo</b1>(<b2>object</b2> <b1>value</b1>): Compares the two objects</li>
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>FloatAsset</b2> <b1>value</b1>): Checks if the two assets have equal values</li>
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>float</b2> <b1>value</b1>): Checks if the two values are equal</li>
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>object</b2> <b1>value</b1>): Checks if the two object values are equal</li>
                        <li><b2>int</b2> <b1>GetHashCode</b1>(): Returns the hashcode</li>
                    </ul>
                </div>
            )}/>

            <Group title="StringAsset : ValueAsset<string>" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>Length</b1>: Returns the length of the string</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Indexers</h5>
                    <ul className="property-list">
                        <li><b2>char this[int index]</b2>: Returns the character at the given index</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>StringAsset</b2> <b1>value</b1>): Checks if the two assets have equal values</li>
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>string</b2> <b1>value</b1>): Checks if the two values are equal</li>
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>object</b2> <b1>value</b1>): Checks if the two object values are equal</li>
                        <li><b2>int</b2> <b1>GetHashCode</b1>(): Returns the hashcode</li>
                    </ul>
                </div>
            )}/>

            <Group title="Vector2Asset : ValueAsset<Vector2>" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>x</b1>: Returns the value of the x axis</li>
                        <li><b2>float</b2> <b1>y</b1>: Returns the value of the y axis</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Indexers</h5>
                    <ul className="property-list">
                        <li><b2>float this[int index]</b2>: Returns the value at the given index</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>Vector2Asset</b2> <b1>value</b1>): Checks if the two assets have equal values</li>
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>Vector2</b2> <b1>value</b1>): Checks if the two values are equal</li>
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>object</b2> <b1>value</b1>): Checks if the two object values are equal</li>
                        <li><b2>int</b2> <b1>GetHashCode</b1>(): Returns the hashcode</li>
                    </ul>
                </div>
            )}/>

            <Group title="Vector3Asset : ValueAsset<Vector3>" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>x</b1>: Returns the value of the x axis</li>
                        <li><b2>float</b2> <b1>y</b1>: Returns the value of the y axis</li>
                        <li><b2>float</b2> <b1>z</b1>: Returns the value of the z axis</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Indexers</h5>
                    <ul className="property-list">
                        <li><b2>float this[int index]</b2>: Returns the value at the given index</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>Vector3Asset</b2> <b1>value</b1>): Checks if the two assets have equal values</li>
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>Vector3</b2> <b1>value</b1>): Checks if the two values are equal</li>
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>object</b2> <b1>value</b1>): Checks if the two object values are equal</li>
                        <li><b2>int</b2> <b1>GetHashCode</b1>(): Returns the hashcode</li>
                    </ul>
                </div>
            )}/>


            <h3 className="p-2">How to Use</h3>
            <p className="pad-left-2">
                You can create a Value Asset by going to the Unity menu, Assets {">"} Create {">"} Magikus {">"} Structures {">"} Value Assets Structure {">"} [Type] Asset, (replacing [type] with the specific Value Asset type required). 
                To implement them, add the Value Asset field in your scripts and drag and drop the asset onto the desired component's field in the Inspector or assign it through code. 
                Use the asset value in your code as needed and use the onValueChange action to listen for and respond to changes in the asset's value.
            </p>

            <h4 className="c-light-1 p-3">Example 01: Creating and Using a FloatAsset</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/ValueAssets/Value Assets - 01.jpg" alt=""/>            
            <p className="pad-left-3"> 
                In this example, a FloatAsset Scriptable Object is created and linked to a script. 
                The onValueChange action is subscribed to a method (OnHealthChanged) that logs the new health value. 
                The TakeDamage method modifies the FloatAsset value, triggering the onValueChange event.
            </p>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/ValueAssets/Value Assets - 02.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 02: Using an IntAsset for Score Tracking</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/ValueAssets/Value Assets - 03.jpg" alt=""/>            
            <p className="pad-left-3"> 
                In this example, an IntAsset Scriptable Object is created for score tracking. 
                The onValueChange action updates the score display or triggers other score-related effects. 
                The AddScore method adjusts the IntAsset value and triggers the event.
            </p>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/ValueAssets/Value Assets - 04.jpg" alt=""/>            


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>By using Value Assets, scripts can remain decoupled, which simplifies code maintenance and enhances modularity.</li>
                <li>Ensure that all event handlers are properly unsubscribed when the script is destroyed or no longer needed to prevent memory leaks.</li>
                <li>Value Assets can be expanded or customized to support additional types or behaviors, enhancing their utility.</li>
            </ul>

            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The Value Asset structure is a powerful tool in Unity for creating a robust, modular and decoupled code architecture. 
                By leveraging Scriptable Objects and event-driven updates, developers can manage data more efficiently and maintain cleaner codebases, ultimately leading to more flexible and scalable projects.
            </p>
       </div>
    );
}