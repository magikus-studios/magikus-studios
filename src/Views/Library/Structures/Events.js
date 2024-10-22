import React from "react";
import Group from "Components/Group";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center">Event Structure</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Event structure is an advanced implementation of the UnityEvent system, designed to enhance usability and modularity in Unity projects. 
                It reimagines the UnityEvent drawer and functionalities, allowing developers to collapse events into a single line within the Unity Inspector and display a count of list items. 
                The Event structure's key feature is its integration with a scriptable object architecture framework, using Event assets to facilitate communication between components through a centralized event system.
            </h6>

            <h3 className="p-2">Introduction</h3>
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


            <h3 className="p-2">How it Works</h3>

            <Group title="EventVoid" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>IsLinkedToAsset</b1>: Returns true if event is linked to an event asset</li>                    
                        <li><b2>int</b2> <b1>SubscribersCount</b1>: Returns the amount of subscribers to this event</li>                    
                        <li><b2>bool</b2> <b1>IsEmpty</b1>: Returns if the amount of subscribers is 0</li>                    
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
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
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>IsLinkedToAsset</b1>: Returns true if event is linked to an event asset</li>                    
                        <li><b2>int</b2> <b1>SubscribersCount</b1>: Returns the amount of subscribers to this event</li>                    
                        <li><b2>bool</b2> <b1>IsEmpty</b1>: Returns if the amount of subscribers is 0</li>                    
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
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
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>SubscribersCount</b1>: Returns the amount of subscribers to this event asset</li>                    
                        <li><b2>bool</b2> <b1>IsEmpty</b1>: Returns if the amount of subscribers is 0</li>                    
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
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
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>EVENT_MODE</b2> <b1>Mode</b1>: Enum to that determines the mode of the Event in relation to Event Assets (Sender, Listener or Both)</li>                    
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Constructors</h5>
                    <ul className="property-list">
                        <li><b1>EventModeAttribute</b1>(<b2>EVENT_MODE</b2> <b1>mode</b1>): Determines the default mode of the event in the inspector</li>
                    </ul>
                </div>
            )}/>



 




            <h3 className="p-2">How to Use</h3>
            <p className="pad-left-2">
                To use the Event structure, you must first define the event in your script using the EventVoid or Event{"<T>"} structure depending on whether you need to pass parameters (make sure that the Event is publicly available to visualize it in the inspector).
                After that, use the Try method to invoke the event. 
                This method checks for null references and calls the actions safely. 
                You can assign an EventAsset in the Unity Inspector and set the event to be a sender, listener or both. 
                This can be done via the inspector or using the EventMode attribute. 
                Remember that if the Event is going to be listening to an Event asset, you need to make sure it is linked to it by calling the LinkToAsset method first (This is usually done on awake). 
                The Try method allows to pass a Component as a parameter. This is used to give a certain context to an Event asset invocation.
                You can create an Event asset by going to the Unity menu, Assets {">"} Create {">"} Magikus {">"} Structures {">"} Event Structure {">"} Event Asset.
            </p>

            <h4 className="c-light-1 p-3">Example 01: Basic Event Setup</h4>
            <p className="pad-left-3"> 
                This example demonstrates how to use a basic EventVoid.
            </p>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Events/Events - 01.jpg" alt=""/>            
            <p className="pad-left-3"> 
                The DefeatEnemy method is subscribed to the event through the Inspector. 
                When the script starts, it will call the event invoking all the methods subscribed to it.
            </p>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Events/Events - 02.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 02: Event with Parameters</h4>
            <p className="pad-left-3"> 
                In this example, an Event with a parameter is used instead. 
                There is a score int and an UpdateScore method that takes an int and logs a message with it. 
                When the script starts the Event is called sending the score value as a parameter.
            </p>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Events/Events - 03.jpg" alt=""/>            
            <p className="pad-left-3"> 
                In the Inspector, the UpdateScore is subscribed dynamically to the event. 
                This will use the value sent through the event call to the method invoked when the Event is called.
            </p>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Events/Events - 04.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 03: Setting Event Mode</h4>
            <p className="pad-left-3"> 
                Finally, this example shows how to use an Event asset and the EventMode attribute. 
                For this example, two scripts are created. 
                The first one is the sender script and will contain a void Event that will get called on start. 
                It also has a PauseGame method that logs a message. 
                In this case, the void Event will be set as EVENT_MODE.Sender (using the EventMode attribute) because it will only be sending calls.
            </p>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Events/Events - 05.jpg" alt=""/>            
            <p className="pad-left-3"> 
                The second script will be the listener script. 
                This script will contain another void Event but this time it will be set to EVENT_MODE.Listener because we only want this event to be listening to an Event asset. 
                To do this, we have to make sure that the Event is linked to the asset. 
                This is done in the awake function. It also contains a function that prints another message.
            </p>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Events/Events - 06.jpg" alt=""/>            
            <p className="pad-left-3"> 
                Back in the Editor, there is an Event asset created called Event Asset Example. 
            </p>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Events/Events - 07.jpg" alt=""/>            
            <p className="pad-left-3"> 
                In the inspector, the PauseGame method is subscribed to the onGamePaused Event, the PrintMessageWithAsset is subscribed to the onAssetCall Event and the Event asset is set to both Events.
            </p>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Events/Events - 08.jpg" alt=""/>            


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The Event structure is designed to minimize overhead by checking for null references and managing subscriptions effectively.</li>
                <li>The Event drawer allows easy management of event settings and assignments directly from the Unity Inspector.</li>
                <li>Ensure that the event assets are properly configured in the inspector to prevent runtime errors.</li>
            </ul>

            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The Event structure is a powerful tool for developers looking to improve their project's architecture and efficiency. 
                By leveraging the scriptable object framework, developers can create decoupled and modular systems that are easy to maintain and extend. 
                The Event structure's versatility makes it suitable for a wide range of use cases, from simple event handling to complex asynchronous scene management.
            </p>
       </div>
    );
}