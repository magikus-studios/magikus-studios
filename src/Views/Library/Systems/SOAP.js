import React from "react";
import Group from "Components/Group";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">SOAP System</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Centralized Event Handling and Data Sharing with Scriptable Objects
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The SOAP (Scriptable Object Architecture Pattern) system in Unity enhances project modularity and efficiency by utilizing scriptable objects to facilitate communication and data management.
                The Event structure improves project architecture by reimagining the UnityEvent drawer, allowing events to be neatly collapsed in the Inspector with an item count display.
                It centralizes event handling through Event assets, enabling seamless, decoupled communication between components.
                This makes it particularly effective for managing both simple event triggers and complex asynchronous scene transitions.
                Similarly, the Value Asset structure streamlines data sharing across components and scenes by providing a centralized, scriptable object-based approach.
                Together, these structures promote a highly maintainable, extendable and modular Unity project architecture.
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border" src="images/Library/Systems/SOAP/SOAP - Events - 02.jpg" alt=""/>            

                <img className="block-center mar-bottom-3 img-border" src="images/Library/Systems/SOAP/SOAP - Value Assets - 03.jpg" alt=""/>            
            </div>

            <h3 className="p-2">Introduction</h3>
            <h4 className="p-2">Events</h4>
            <p className="pad-left-2">
                The Event structure is very useful in scenarios where multiple scenes require synchronization or communication, such as a player receiving damage in one scene triggering UI updates in another. 
                It also enables a cleaner separation of concerns by decoupling event handlers from the scripts that invoke them allowing code decoupling and modularization. 
                This structure is ideal for managing global events like game pausing, level completion or player actions that affect multiple game objects.
                Some of the key features are:
            </p>
            <ul>
                <li><b>Single Line Collapse</b>: Events can be collapsed into a single line in the inspector for cleaner and more organized views.</li>
                <li><b>List Item Count</b>: Displays the number of actions currently subscribed to the event.</li>
                <li><b>Null-Safe Invocation</b>: The Try method allows invoking actions without the need for null checking.</li>
                <li><b>Scriptable Object Framework</b>: Event assets provide a framework for implementing the Observer pattern, enabling communication across different scenes without tight coupling</li>
                <li><b>Sender/Listener Modes</b>: Events can be configured as senders, listeners or both, to manage how they interact with event assets</li>
            </ul>
            <Group title="EventVoid" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>IsLinkedToAsset</b1>: Returns true if event is linked to an event asset</li>                    
                        <li><b2>int</b2> <b1>SubscribersCount</b1>: Returns the amount of subscribers to this event</li>                    
                        <li><b2>bool</b2> <b1>IsEmpty</b1>: Returns if the amount of subscribers is 0</li>                    
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>EventVoid</b2> <b1>Try</b1>(<b2>Component</b2> <b1>sender</b1> = <b2>null</b2>): Invokes the event if it is not null or empty</li>
                        <li><b2>EventVoid</b2> <b1>Subscribe</b1>(<b2>UnityEvent</b2> <b1>action</b1>): Subscribes the action to the event</li>
                        <li><b2>EventVoid</b2> <b1>Subscribe</b1>(<b2>Action</b2> <b1>action</b1>): Subscribes the action to the event</li>
                        <li><b2>EventVoid</b2> <b1>Unsubscribe</b1>(<b2>UnityEvent</b2> <b1>action</b1>): Unsubscribes the action from the event</li>
                        <li><b2>EventVoid</b2> <b1>Unsubscribe</b1>(<b2>Action</b2> <b1>action</b1>): Unsubscribes the action from the event</li>
                        <li><b2>void</b2> <b1>LinkToAsset</b1>(): Links the event to the event asset if it is not null</li>
                    </ul>
                </div>
            )}/>
            <Group title="Event<T>" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>IsLinkedToAsset</b1>: Returns true if event is linked to an event asset</li>                    
                        <li><b2>int</b2> <b1>SubscribersCount</b1>: Returns the amount of subscribers to this event</li>                    
                        <li><b2>bool</b2> <b1>IsEmpty</b1>: Returns if the amount of subscribers is 0</li>                    
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>Event{"<T>"}</b2> <b1>Try</b1>(<b2>Component</b2> <b1>sender</b1> = <b2>null</b2>): Invokes the event if it is not null or empty</li>
                        <li><b2>Event{"<T>"}</b2> <b1>Subscribe</b1>(<b2>UnityEvent{"<T>"}</b2> <b1>action</b1>): Subscribes the action to the event</li>
                        <li><b2>Event{"<T>"}</b2> <b1>Subscribe</b1>(<b2>Action{"<T>"}</b2> <b1>action</b1>): Subscribes the action to the event</li>
                        <li><b2>Event{"<T>"}</b2> <b1>Unsubscribe</b1>(<b2>UnityEvent{"<T>"}</b2> <b1>action</b1>): Unsubscribes the action from the event</li>
                        <li><b2>Event{"<T>"}</b2> <b1>Unsubscribe</b1>(<b2>Action{"<T>"}</b2> <b1>action</b1>): Unsubscribes the action from the event</li>
                        <li><b2>void</b2> <b1>LinkToAsset</b1>(): Links the event to the event asset if it is not null</li>
                    </ul>
                </div>
            )}/>                    
            <Group title="EventAsset" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>SubscribersCount</b1>: Returns the amount of subscribers to this event asset</li>                    
                        <li><b2>bool</b2> <b1>IsEmpty</b1>: Returns if the amount of subscribers is 0</li>                    
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>Try</b1>(<b2>object</b2> <b1>obj</b1>, <b2>Component</b2> <b1>sender</b1> = <b2>null</b2>): Invokes the event if it is not null or empty</li>
                        <li><b2>void</b2> <b1>Subscribe</b1>(<b2>UnityEvent{"<object, Component>"}</b2> <b1>action</b1>): Subscribes the action to the event</li>
                        <li><b2>void</b2> <b1>Subscribe</b1>(<b2>Action{"<object, Component>"}</b2> <b1>action</b1>): Subscribes the action to the event</li>
                        <li><b2>void</b2> <b1>Unsubscribe</b1>(<b2>UnityEvent{"<object, Component>"}</b2> <b1>action</b1>): Unsubscribes the action from the event</li>
                        <li><b2>void</b2> <b1>Unsubscribe</b1>(<b2>Action{"<object, Component>"}</b2> <b1>action</b1>): Unsubscribes the action from the event</li>
                    </ul>
                </div>
            )}/>
            <Group title="EventMode Attribute" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>EVENT_MODE</b2> <b1>Mode</b1>: Enum to that determines the mode of the Event in relation to Event Assets (Sender, Listener or Both)</li>                    
                    </ul>
                    <h5 className="c-light-1">Constructors</h5>
                    <ul className="property-list">
                        <li><b1>EventModeAttribute</b1>(<b2>EVENT_MODE</b2> <b1>mode</b1>): Determines the default mode of the event in the inspector</li>
                    </ul>
                </div>
            )}/>
            <h4 className="p-2">Value Assets</h4>
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
            <Group title="ValueAsset<T>" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>T</b2> <b1>Value</b1>: Returns the current value of the asset</li>                    
                        <li><b2>bool</b2> <b1>HasFilter</b1>: Returns if the event has a filter setted</li>                    
                        <li><b2>int</b2> <b1>SubscribersCount</b1>: Returns the amount of subscribers to this event</li>                    
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
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
                <div>
                    <h5 className="c-light-1">Methods</h5>
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
                <div>
                    <h5 className="c-light-1">Methods</h5>
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
                <div>
                    <h5 className="c-light-1">Methods</h5>
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
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>Length</b1>: Returns the length of the string</li>
                    </ul>
                    <h5 className="c-light-1">Indexers</h5>
                    <ul className="property-list">
                        <li><b2>char this[int index]</b2>: Returns the character at the given index</li>
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>StringAsset</b2> <b1>value</b1>): Checks if the two assets have equal values</li>
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>string</b2> <b1>value</b1>): Checks if the two values are equal</li>
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>object</b2> <b1>value</b1>): Checks if the two object values are equal</li>
                        <li><b2>int</b2> <b1>GetHashCode</b1>(): Returns the hashcode</li>
                    </ul>
                </div>
            )}/>
            <Group title="Vector2Asset : ValueAsset<Vector2>" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>x</b1>: Returns the value of the x axis</li>
                        <li><b2>float</b2> <b1>y</b1>: Returns the value of the y axis</li>
                    </ul>
                    <h5 className="c-light-1">Indexers</h5>
                    <ul className="property-list">
                        <li><b2>float this[int index]</b2>: Returns the value at the given index</li>
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>Vector2Asset</b2> <b1>value</b1>): Checks if the two assets have equal values</li>
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>Vector2</b2> <b1>value</b1>): Checks if the two values are equal</li>
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>object</b2> <b1>value</b1>): Checks if the two object values are equal</li>
                        <li><b2>int</b2> <b1>GetHashCode</b1>(): Returns the hashcode</li>
                    </ul>
                </div>
            )}/>
            <Group title="Vector3Asset : ValueAsset<Vector3>" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>float</b2> <b1>x</b1>: Returns the value of the x axis</li>
                        <li><b2>float</b2> <b1>y</b1>: Returns the value of the y axis</li>
                        <li><b2>float</b2> <b1>z</b1>: Returns the value of the z axis</li>
                    </ul>
                    <h5 className="c-light-1">Indexers</h5>
                    <ul className="property-list">
                        <li><b2>float this[int index]</b2>: Returns the value at the given index</li>
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>Vector3Asset</b2> <b1>value</b1>): Checks if the two assets have equal values</li>
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>Vector3</b2> <b1>value</b1>): Checks if the two values are equal</li>
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>object</b2> <b1>value</b1>): Checks if the two object values are equal</li>
                        <li><b2>int</b2> <b1>GetHashCode</b1>(): Returns the hashcode</li>
                    </ul>
                </div>
            )}/>

            <h3 className="p-2">Examples</h3>
            <p className="pad-left-2">
                To use the Event structure, you must first define the event in your script using the EventVoid or Event{"<T>"} structure depending on whether you need to pass parameters (make sure that the Event is publicly available to visualize it in the inspector).
                <br/>
                After that, use the Try method to invoke the event. 
                This method checks for null references and calls the actions safely. 
                <br/>
                You can assign an EventAsset in the Unity Inspector and set the event to be a sender, listener or both. 
                This can be done via the inspector or using the EventMode attribute. 
                <br/>
                Remember that if the Event is going to be listening to an Event asset, you need to make sure it is linked to it by calling the LinkToAsset method first (This is usually done on awake). 
                <br/>
                The Try method allows to pass a Component as a parameter. 
                This is used to give a certain context to an Event asset invocation.
                <br/>
                You can create an Event asset by going to the Unity menu, <b1>Assets {">"} Create {">"} Magikus {">"} SOAP System {">"} Event Asset</b1>.
            </p>
            <Group title="Example 01: Basic Event Setup" content={(
                <div>
                    <p> 
                        This example demonstrates how to use a basic EventVoid.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-65" src="images/Library/Systems/SOAP/SOAP - Events - 01.jpg" alt=""/>            
                    <p> 
                        The DefeatEnemy method is subscribed to the event through the Inspector. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Systems/SOAP/SOAP - Events - 02.jpg" alt=""/>            
                    <p> 
                        When the script runs, it will call the event invoking all the methods subscribed to it.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-40" src="images/Library/Systems/SOAP/SOAP - Events - 09.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 02: Event with Parameters" content={(
                <div>
                    <p> 
                        In this example, an Event with a parameter is used instead. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-65" src="images/Library/Systems/SOAP/SOAP - Events - 03.jpg" alt=""/>            
                    <p> 
                        There is a score int and an UpdateScore method that takes an int and logs a message with it. 
                        When the script runs the Event is called sending the score value as a parameter.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Systems/SOAP/SOAP - Events - 04.jpg" alt=""/>            
                    <p> 
                        In the Inspector, the UpdateScore is subscribed dynamically to the event. 
                        This will use the value sent through the event call to the method invoked when the Event is called.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/SOAP/SOAP - Events - 10.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 03: Setting Event Mode" content={(
                <div>
                    <p> 
                        Finally, this example shows how to use an Event asset and the EventMode attribute. 
                        For this example, two scripts are created. 
                        The first one is the sender script and will contain a void Event that will get called on the Run method. 
                        It also has a PauseGame method that logs a message. 
                        In this case, the void Event will be set as EVENT_MODE.Sender (using the EventMode attribute) because it will only be sending calls.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-65" src="images/Library/Systems/SOAP/SOAP - Events - 05.jpg" alt=""/>            
                    <p> 
                        The second script will be the listener script. 
                        This script will contain another void Event but this time it will be set to EVENT_MODE.Listener because we only want this event to be listening to an Event asset. 
                        To do this, we have to make sure that the Event is linked to the asset. 
                        This is done in the awake function. It also contains a function that prints another message.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Systems/SOAP/SOAP - Events - 06.jpg" alt=""/>            
                    <p> 
                        Back in the Editor, there is an Event asset created called Event Asset Example. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Systems/SOAP/SOAP - Events - 07.jpg" alt=""/>            
                    <p> 
                        In the inspector, the PauseGame method is subscribed to the onGamePaused Event, the PrintMessageWithAsset is subscribed to the onAssetCall Event and the Event asset is set to both Events.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Systems/SOAP/SOAP - Events - 08.jpg" alt=""/>            
                    <p> 
                        When the Run() method is called, both events will trigger.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Systems/SOAP/SOAP - Events - 11.jpg" alt=""/>            
                </div>
            )}/>

            <p className="pad-left-2 pad-top-2">
                You can create a Value Asset by going to the Unity menu, <b1>Assets {">"} Create {">"} Magikus {">"} SOAP System {">"} [Type] Asset</b1>, (replacing [type] with the specific Value Asset type required). 
                <br/>
                To implement them, add the Value Asset field in your scripts and drag and drop the asset onto the desired component's field in the Inspector or assign it through code. 
                <br/>
                Use the asset value in your code as needed and use the onValueChange action to listen for and respond to changes in the asset's value.
            </p>
            <Group title="Example 04: Creating and Using a FloatAsset" content={(
                <div>
                    <p> 
                        In this example, a FloatAsset Scriptable Object is created and linked to a script. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Systems/SOAP/SOAP - Value Assets - 01.jpg" alt=""/>            
                    <p> 
                        The onValueChange action is subscribed to a method (OnHealthChanged) that logs the new health value. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Systems/SOAP/SOAP - Value Assets - 02.jpg" alt=""/>            
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Systems/SOAP/SOAP - Value Assets - 03.jpg" alt=""/>            
                    <p> 
                        The TakeDamage method modifies the FloatAsset value, triggering the onValueChange event.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Systems/SOAP/SOAP - Value Assets - 01.gif" alt=""/>            
                </div>
            )}/>
            <Group title="Example 05: Using an IntAsset for Score Tracking" content={(
                <div>
                    <p> 
                        In this example, an IntAsset Scriptable Object is created for score tracking. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Systems/SOAP/SOAP - Value Assets - 04.jpg" alt=""/>            
                    <p> 
                        The onValueChange action updates the score display or triggers other score-related effects. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Systems/SOAP/SOAP - Value Assets - 05.jpg" alt=""/>            
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Systems/SOAP/SOAP - Value Assets - 06.jpg" alt=""/>            
                    <p> 
                        The AddScore method adjusts the IntAsset value and triggers the event.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Systems/SOAP/SOAP - Value Assets - 02.gif" alt=""/>            
                </div>
            )}/>

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The Event structure is designed to minimize overhead by checking for null references and managing subscriptions effectively.</li>
                <li>The Event drawer allows easy management of event settings and assignments directly from the Unity Inspector.</li>
                <li>Ensure that the event assets are properly configured in the inspector to prevent runtime errors.</li>

                <li>By using Value Assets, scripts can remain decoupled, which simplifies code maintenance and enhances modularity.</li>
                <li>Ensure that all event handlers are properly unsubscribed when the script is destroyed or no longer needed to prevent memory leaks.</li>
                <li>Value Assets can be expanded or customized to support additional types or behaviors, enhancing their utility.</li>
            </ul>
       </div>
    );
}