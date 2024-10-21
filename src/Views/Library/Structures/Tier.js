import React from "react";
import Group from "Components/Group";

export default function Function() {
    
    
    return (
        <div className="c-light-2">           
            <h1 className="text-center">Tier</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Tier structures are specialized data structures designed to enhance the functionality of the Range structures by adding event-driven logic that automatically triggers when a value is evaluated against a defined range. 
                This event-driven mechanism is particularly useful when working with both int (IntTier) and float (FloatTier) ranges, where certain actions need to be performed when a value enters, exits, remains inside or remains outside the specified range.
            </h6>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The primary purpose of the Tier structures is to simplify and streamline the process of evaluating whether a value falls within a particular range or set of ranges, and to automatically trigger associated events based on this evaluation.
                The events can take as input either the actual value being evaluated or the ratio of that value within the defined range.
            </p>
            <p className="pad-left-2">
                In game development, Tier structures can be used to monitor player health, triggering different effects when health falls below certain thresholds. 
                They can be used to track experience points, triggering level-up events or other progress-related actions when specific experience thresholds are met. 
                Also, they can handle environmental interactions, such as triggering weather effects when a player enters certain zones.
            </p>

            <h3 className="p-2">How it Works</h3>

            <Group title="IntTier" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>Component</b2> <b1>Sender</b1>: Gameobject that owns this tier. The sender component is used for the Event structure</li>
                        <li><b2>Range{"<int>"}</b2> <b1>Range</b1>: The range of the tier</li>
                        <li><b2>TierEventsContainer</b2> <b1>TierEvents</b1></li>
                        <ul className="property-list">
                            <li><b2>Event{"<int>"}</b2> <b1>OnEnter</b1>: An event that is triggered when a value enters the range</li>
                            <li><b2>Event{"<int>"}</b2> <b1>OnInside</b1>: An event that is triggered when a value is inside the range</li>
                            <li><b2>Event{"<int>"}</b2> <b1>OnExit</b1>: An event that is triggered when a value exits the range</li>
                            <li><b2>Event{"<int>"}</b2> <b1>OnOutside</b1>: An event that is triggered when a value is outside the range</li>
                        </ul>
                        <li><b2>RatioEventsContainer</b2> <b1>RatioEvents</b1></li>
                        <ul className="property-list">
                            <li><b2>Event{"<float>"}</b2> <b1>OnEnter</b1>: An event that is triggered when a value enters the range. This event passes a float parameter representing the proportional position of the evaluated value within the range</li>
                            <li><b2>Event{"<float>"}</b2> <b1>OnInside</b1>: An event that is triggered when a value is inside the range. This event passes a float parameter representing the proportional position of the evaluated value within the range</li>
                            <li><b2>Event{"<float>"}</b2> <b1>OnExit</b1>: An event that is triggered when a value exits the range. This event passes a float parameter representing the proportional position of the evaluated value within the range</li>
                            <li><b2>Event{"<float>"}</b2> <b1>OnOutside</b1>: An event that is triggered when a value is outside the range. This event passes a float parameter representing the proportional position of the evaluated value within the range</li>
                        </ul>
                        <li><b2>bool</b2> <b1>IsInside</b1>: Checks if the last value evaluated was inside the range or not</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>Evaluate</b1>(<b2>int</b2> <b1>value</b1>): Evaluates the provided value's position within the defined range and triggers any relevant events based on the value's placement within that range</li>
                        <li><b2>void</b2> <b1>Evaluate</b1>(<b2>float</b2> <b1>value</b1>): Evaluates the provided value's position within the defined range and triggers any relevant events based on the value's placement within that range</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Static</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>SubscribeTiersToOnChange</b1>(<b2>IList{"<IntTier>"}</b2> <b1>tiers</b1>, <b2>Event{"<int>"}</b2> <b1>onChangeEvent</b1>, <b2>Component</b2> <b1>sender</b1>): Subscribes the Evaluate method of a list of Tiers to the onChangeEvent</li>
                        <li><b2>void</b2> <b1>UnsubscribeTiersToOnChange</b1>(<b2>IList{"<IntTier>"}</b2> <b1>tiers</b1>, <b2>Event{"<int>"}</b2> <b1>onChangeEvent</b1>): Unsubscribes the Evaluate method of a list of Tiers from the onChangeEvent</li>
                    </ul>
                </div>
            )}/>
            <Group title="FloatTier" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>Component</b2> <b1>Sender</b1>: Gameobject that owns this tier. The sender component is used for the Event structure</li>
                        <li><b2>Range{"<float>"}</b2> <b1>Range</b1>: The range of the tier</li>
                        <li><b2>TierEventsContainer</b2> <b1>TierEvents</b1></li>
                        <ul className="property-list">
                            <li><b2>Event{"<float>"}</b2> <b1>OnEnter</b1>: An event that is triggered when a value enters the range</li>
                            <li><b2>Event{"<float>"}</b2> <b1>OnInside</b1>: An event that is triggered when a value is inside the range</li>
                            <li><b2>Event{"<float>"}</b2> <b1>OnExit</b1>: An event that is triggered when a value exits the range</li>
                            <li><b2>Event{"<float>"}</b2> <b1>OnOutside</b1>: An event that is triggered when a value is outside the range</li>
                        </ul>
                        <li><b2>RatioEventsContainer</b2> <b1>RatioEvents</b1></li>
                        <ul className="property-list">
                            <li><b2>Event{"<float>"}</b2> <b1>OnEnter</b1>: An event that is triggered when a value enters the range. This event passes a float parameter representing the proportional position of the evaluated value within the range</li>
                            <li><b2>Event{"<float>"}</b2> <b1>OnInside</b1>: An event that is triggered when a value is inside the range. This event passes a float parameter representing the proportional position of the evaluated value within the range</li>
                            <li><b2>Event{"<float>"}</b2> <b1>OnExit</b1>: An event that is triggered when a value exits the range. This event passes a float parameter representing the proportional position of the evaluated value within the range</li>
                            <li><b2>Event{"<float>"}</b2> <b1>OnOutside</b1>: An event that is triggered when a value is outside the range. This event passes a float parameter representing the proportional position of the evaluated value within the range</li>
                        </ul>
                        <li><b2>bool</b2> <b1>IsInside</b1>: Checks if the last value evaluated was inside the range or not</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>Evaluate</b1>(<b2>int</b2> <b1>value</b1>): Evaluates the provided value's position within the defined range and triggers any relevant events based on the value's placement within that range</li>
                        <li><b2>void</b2> <b1>Evaluate</b1>(<b2>float</b2> <b1>value</b1>): Evaluates the provided value's position within the defined range and triggers any relevant events based on the value's placement within that range</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Static</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>SubscribeTiersToOnChange</b1>(<b2>IList{"<FloatTier>"}</b2> <b1>tiers</b1>, <b2>Event{"<float>"}</b2> <b1>onChangeEvent</b1>, <b2>Component</b2> <b1>sender</b1>): Subscribes the Evaluate method of a list of Tiers to the onChangeEvent</li>
                        <li><b2>void</b2> <b1>UnsubscribeTiersToOnChange</b1>(<b2>IList{"<FloatTier>"}</b2> <b1>tiers</b1>, <b2>Event{"<float>"}</b2> <b1>onChangeEvent</b1>): Unsubscribes the Evaluate method of a list of Tiers from the onChangeEvent</li>
                    </ul>
                </div>
            )}/>


            <h3 className="p-2">How to Use</h3>
            <p className="pad-left-2">
                The Tier structures are composed of two main classes. IntTier for integer ranges and FloatTier for floating-point ranges. 
                Each of these classes contains two nested classes. 
                TierEventsContainer that handles events based on the raw value and RatioEventsContainer that handles events based on the ratio of the value within the range. 
                Both IntTier and FloatTier offer the Evaluate(int value) and Evaluate(float value) methods that evaluates whether the input value is inside the range and triggers the appropriate events.
            </p>

            <h4 className="c-light-1 p-3">Example 01: Basic Usage of IntTier</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Tier/Tier - 01.jpg" alt=""/>            
            <p className="pad-left-3"> 
                In this example, the healthTier is used to check on health values. 
                The Range for health values is set between 0 and 100 in the inspector. 
                Then the Evaluate method is called with various health values, triggering the appropriate events based on whether the health is inside, outside or crossing the defined range.
            </p>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Tier/Tier - 02.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 02: Advanced Usage with FloatTier</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Tier/Tier - 03.jpg" alt=""/>            
            <p className="pad-left-3"> 
                In this example, the Range for experience values is set between 0.0f and 1000.0f in the inspector. 
                Then the Evaluate method is called with various experience values, triggering events based on their position within the range.
            </p>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Tier/Tier - 04.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Example 03: Handling Multiple Tiers with SubscribeList</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Tier/Tier - 05.jpg" alt=""/>            
            <p className="pad-left-3"> 
                In this example, multiple IntTier objects representing danger zones are initialized with different ranges. 
                Then, all tiers are subscribed to the onChangeEvent using the SuscribeTiersToOnChange method, in order to call the Evaluate method of each tier whenever the onChangeEvent is invoked. 
                Finally, the onChangeEvent is invoked with various values, checking whether they fall within any of the danger zones.
            </p>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Tier/Tier - 06.jpg" alt=""/>            


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The EventMode(EVENT_MODE.Sender) attribute in events ensures that events of Tier structures are always senders of events and not listeners. For further information, see documentation on Event structures.</li>
                <li>The Tier structures are fully compatible with Unity's inspector, allowing developers to visualize and configure ranges and events directly in the editor.</li>
            </ul>
            
            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The Tier structures offer a powerful and flexible way to integrate event-driven logic into your game or application, specifically tailored for handling ranges of values in a systematic and efficient manner. 
                Whether you’re working with health systems, experience tracking or environmental effects, Tier structures provide a robust framework to react to changes within defined ranges, ensuring your game logic remains responsive and dynamic. 
                Proper use of these structures can significantly reduce the complexity of range-based evaluations and enhance the overall performance and maintainability of your codebase.
            </p>
       </div>
    );
}