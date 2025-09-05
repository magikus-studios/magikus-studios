import React from "react";
import Group from "Components/Group";

export default function Function() {
    
    
    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Tier Structure</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Event-driven range monitoring for values
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Tier structure provides a way to define numeric ranges (tiers) and monitor values against those ranges.
                By centralizing range checks and transitions, it removes repetitive conditionals and makes your Unity projects easier to maintain.
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Tier/Tier - 01.gif" alt=""/>            
            </div>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                Each tier can trigger events when a value enters, stays inside, exits or remains outside its range.                
                <br/>
                <br/>
                This is useful for mechanics such as:
                <ul>
                    <li>Health thresholds (e.g., “low health” warnings).</li>
                    <li>XP or level milestones.</li>
                    <li>Environmental ranges (e.g., temperature, pressure zones).</li>
                </ul>
                Any system where values crossing boundaries trigger state changes.
                The system supports both floating-point ranges (Tier) and integer ranges (TierInt).
                Additionally, the TierStructureDrawer provides a custom Unity Inspector UI for configuring tiers.                
            </p>
            <Group title="Tier" content={(
                <div>
                    <h5 className="c-light-1">Constructors</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>Tier</b1>(<b2>float</b2> <b1>min</b1>, <b2>float</b2> <b1>max</b1>, <b2>float</b2> <b1>initialValue = 0f</b1>, <b2>Component</b2> <b1>sender = null</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>Component</b2> <b1>Sender</b1>: Gameobject that owns this tier. The sender component is used for the Event structure</li>
                        <li><b2>float</b2> <b1>Min</b1>: Lower bound of the range. Automatically clamped if set higher than Max</li>
                        <li><b2>float</b2> <b1>Max</b1>: Upper bound of the range. Automatically clamped if set lower than Min</li>
                        <li><b2>readonly float</b2> <b1>Value</b1>: Last evaluated value</li>
                        <li><b2>readonly STATE</b2> <b1>State</b1>: Indicates whether the current value is inside or outside the range (Inside | Outside)</li>
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>Evaluate</b1>(<b2>int</b2> <b1>value</b1>): Casts to float and forwards to Evaluate(float value). Handy if your source is integer</li>
                        <li><b2>void</b2> <b1>Evaluate</b1>(<b2>float</b2> <b1>value</b1>): Evaluates the provided value's position within the defined range and triggers any relevant events based on the value's placement within that range</li>
                        <li><b2>bool</b2> <b1>IsInRange</b1>(<b2>float</b2> <b1>value</b1>): Returns true if value is within [Min, Max] (inclusive of both ends). Useful for “in threshold at all”</li>
                        <li><b2>bool</b2> <b1>IsInside</b1>(<b2>float</b2> <b1>value</b1>): Returns true if value is strictly between Min and Max (exclusive of both ends). Use this to ignore exact limits</li>
                        <li><b2>bool</b2> <b1>IsOutside</b1>(<b2>float</b2> <b1>value</b1>): Returns true if value is below Min or above Max</li>
                        <li><b2>bool</b2> <b1>IsLimit</b1>(<b2>float</b2> <b1>value</b1>): Returns true if value equals Min or Max</li>
                        <li><b2>bool</b2> <b1>IsMin</b1>(<b2>float</b2> <b1>value</b1>): Returns true if value equals Min</li>
                        <li><b2>bool</b2> <b1>IsMax</b1>(<b2>float</b2> <b1>value</b1>): Returns true if value equals Max</li>
                        <li><b2>bool</b2> <b1>IsLower</b1>(<b2>float</b2> <b1>value</b1>): Returns true if value {"<"} Min</li>
                        <li><b2>float</b2> <b1>GetRatio</b1>(<b2>float</b2> <b1>value</b1>): Maps value to a normalized [0,1] ratio using (value - Min) / (Max - Min) and clamps to [0,1]. Returns 0 when value {"<="} Min; 1 when value {">="} Max</li>
                        <li><b2>string</b2> <b1>ToString</b1>(): Returns a human-readable "[Min:Max]", e.g., "[10:25]". Useful for logs and debugging.</li>
                    </ul>
                    <h5 className="c-light-1">Events</h5>
                    <ul className="property-list">
                        <li><b2>Event{"<Tier>"}</b2> <b1>OnEnter</b1>: Triggered when a value crosses from Outside → Inside</li>
                        <li><b2>Event{"<Tier>"}</b2> <b1>OnInside</b1>: Triggered when a value remains inside</li>
                        <li><b2>Event{"<Tier>"}</b2> <b1>OnExit</b1>: Triggered when a value crosses from Inside → Outside</li>
                        <li><b2>Event{"<Tier>"}</b2> <b1>OnOutside</b1>: Triggered when a value remains outside</li>
                    </ul>
                    <h5 className="c-light-1">Static</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>SubscribeTiersToOnChange</b1>(<b2>IList{"<Tier>"}</b2> <b1>tiers</b1>, <b2>Event{"<float>"}</b2> <b1>onChangeEvent</b1>, <b2>Component</b2> <b1>sender</b1>): Sets each tier.Sender = sender and subscribes each tier’s Evaluate to onChangeEvent. Call this once to wire multiple tiers to a single value stream (e.g., health updates)</li>
                        <li><b2>void</b2> <b1>UnsubscribeTiersToOnChange</b1>(<b2>IList{"<Tier>"}</b2> <b1>tiers</b1>, <b2>Event{"<float>"}</b2> <b1>onChangeEvent</b1>): Unsubscribes each Evaluate from the event. Always pair with the subscribe call to avoid leaks</li>
                    </ul>
                </div>
            )}/>
            <Group title="TierInt" content={(
                <div>
                    <h5 className="c-light-1">Constructors</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>Tier</b1>(<b2>int</b2> <b1>min</b1>, <b2>int</b2> <b1>max</b1>, <b2>int</b2> <b1>initialValue = 0f</b1>, <b2>Component</b2> <b1>sender = null</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>Component</b2> <b1>Sender</b1>: Gameobject that owns this tier. The sender component is used for the Event structure</li>
                        <li><b2>int</b2> <b1>Min</b1>: Lower bound of the range. Automatically clamped if set higher than Max</li>
                        <li><b2>int</b2> <b1>Max</b1>: Upper bound of the range. Automatically clamped if set lower than Min</li>
                        <li><b2>readonly int</b2> <b1>Value</b1>: Last evaluated value</li>
                        <li><b2>readonly STATE</b2> <b1>State</b1>: Indicates whether the current value is inside or outside the range (Inside | Outside)</li>
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>Evaluate</b1>(<b2>float</b2> <b1>value</b1>): Casts to int and forwards to Evaluate(int value). Handy if your source is float</li>
                        <li><b2>void</b2> <b1>Evaluate</b1>(<b2>int</b2> <b1>value</b1>): Evaluates the provided value's position within the defined range and triggers any relevant events based on the value's placement within that range</li>
                        <li><b2>bool</b2> <b1>IsInRange</b1>(<b2>int</b2> <b1>value</b1>): Returns true if value is within [Min, Max] (inclusive of both ends). Useful for “in threshold at all”</li>
                        <li><b2>bool</b2> <b1>IsInside</b1>(<b2>int</b2> <b1>value</b1>): Returns true if value is strictly between Min and Max (exclusive of both ends). Use this to ignore exact limits</li>
                        <li><b2>bool</b2> <b1>IsOutside</b1>(<b2>int</b2> <b1>value</b1>): Returns true if value is below Min or above Max</li>
                        <li><b2>bool</b2> <b1>IsLimit</b1>(<b2>int</b2> <b1>value</b1>): Returns true if value equals Min or Max</li>
                        <li><b2>bool</b2> <b1>IsMin</b1>(<b2>int</b2> <b1>value</b1>): Returns true if value equals Min</li>
                        <li><b2>bool</b2> <b1>IsMax</b1>(<b2>int</b2> <b1>value</b1>): Returns true if value equals Max</li>
                        <li><b2>bool</b2> <b1>IsLower</b1>(<b2>int</b2> <b1>value</b1>): Returns true if value {"<"} Min</li>
                        <li><b2>float</b2> <b1>GetRatio</b1>(<b2>int</b2> <b1>value</b1>): Maps value to a normalized [0,1] ratio using (value - Min) / (Max - Min) and clamps to [0,1]. Returns 0 when value {"<="} Min; 1 when value {">="} Max</li>
                        <li><b2>string</b2> <b1>ToString</b1>(): Returns a human-readable "[Min:Max]", e.g., "[10:25]". Useful for logs and debugging.</li>
                    </ul>
                    <h5 className="c-light-1">Events</h5>
                    <ul className="property-list">
                        <li><b2>Event{"<Tier>"}</b2> <b1>OnEnter</b1>: Triggered when a value crosses from Outside → Inside</li>
                        <li><b2>Event{"<Tier>"}</b2> <b1>OnInside</b1>: Triggered when a value remains inside</li>
                        <li><b2>Event{"<Tier>"}</b2> <b1>OnExit</b1>: Triggered when a value crosses from Inside → Outside</li>
                        <li><b2>Event{"<Tier>"}</b2> <b1>OnOutside</b1>: Triggered when a value remains outside</li>
                    </ul>
                    <h5 className="c-light-1">Static</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>SubscribeTiersToOnChange</b1>(<b2>IList{"<TierInt>"}</b2> <b1>tiers</b1>, <b2>Event{"<int>"}</b2> <b1>onChangeEvent</b1>, <b2>Component</b2> <b1>sender</b1>): Sets each tier.Sender = sender and subscribes each tier’s Evaluate to onChangeEvent. Call this once to wire multiple tiers to a single value stream (e.g., health updates)</li>
                        <li><b2>void</b2> <b1>UnsubscribeTiersToOnChange</b1>(<b2>IList{"<TierInt>"}</b2> <b1>tiers</b1>, <b2>Event{"<int>"}</b2> <b1>onChangeEvent</b1>): Unsubscribes each Evaluate from the event. Always pair with the subscribe call to avoid leaks</li>
                    </ul>
                </div>
            )}/>

            <h3 className="p-2">Examples</h3>
            <Group title="Example 01: Basic Float Tier" content={(
                <div>
                    <p> 
                        In this example, we create a Tier that represents a health “critical zone” between 0 and 50.
                        The initial value is set to 75, so the tier starts in the Outside state.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Tier/Tier - 01.jpg" alt=""/>            
                    <p> 
                        When we evaluate the value 45, the tier transitions from Outside to Inside, firing the OnEnter event and logging that health has entered the critical zone.
                        Later, when we evaluate 60, the tier transitions back from Inside to Outside, firing the OnExit` event to indicate that health has recovered above the threshold.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Tier/Tier - 02.jpg" alt=""/>            
                    <p> 
                        This setup is useful for simple low-health warnings or other threshold-based triggers.
                    </p>
                </div>
            )}/>
            <Group title="Example 02: Integer Tier with Events" content={(
                <div>
                    <p>
                        Here, a TierInt is used to represent a milestone range between levels 10 and 20.
                        Because the default initial value is 0, the tier begins in the Outside state.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Tier/Tier - 03.jpg" alt=""/>            
                    <p>
                        When the value 15 is evaluated, the tier enters the range, firing both the OnEnter and OnInside events.
                        Evaluating another value inside the range, like 18, triggers only the OnInside event since the state did not change.
                        Finally, when the value increases to 25, the tier transitions from Inside to Outside, triggering the OnExit event.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Tier/Tier - 04.jpg" alt=""/>            
                    <p>
                        This pattern is useful for detecting level ranges or milestone achievements where both entering and remaining inside a range are significant.
                    </p>
                </div>
            )}/>
            <Group title="Example 03: Subscribing Multiple Tiers to a Shared Event" content={(
                <div>
                    <p> 
                        In this example, multiple tiers are defined to split health into distinct zones: [0–25], [26–50], and [51–75].
                        Instead of manually checking each tier, all of them are subscribed to a single healthChange event.
                        Whenever the event is invoked, every tier evaluates the new value.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Tier/Tier - 05.jpg" alt=""/>            
                    <p> 
                        For instance, when healthChange.Try(30f) is called, the second tier detects that the value is inside its range and fires the appropriate event, while the other tiers remain outside.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Tier/Tier - 06.jpg" alt=""/>            
                    <p> 
                        This approach is highly efficient for systems that require partitioning values into multiple ranges and keeping them all updated with a single event source.
                    </p>
                </div>
            )}/>
            <Group title="Example 04: Using Predicates and Ratio" content={(
                <div>
                    <p>
                        This example demonstrates the use of predicate checks and ratio normalization for gameplay and UI logic.
                        The IsInside method is used to determine whether the current health value is strictly within the tier’s range, excluding exact limits.
                        If true, it logs that the player is in the danger zone.
                        Meanwhile, GetRatio converts the current health into a normalized value between 0 and 1, making it easy to represent as a progress bar fill amount.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Tier/Tier - 07.jpg" alt=""/>            
                    <p>
                        For example, if health is 75 with a range of 0–100, the ratio would be 0.75, filling the health bar to 75%.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Tier/Tier - 08.jpg" alt=""/>            
                    <p>
                        This combination allows developers to use tiers not only for triggering events, but also for continuous UI feedback.
                    </p>
                </div>
            )}/>

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The Evaluate() method must be called with a value to update the tier state and trigger events.</li>
                <li>Evaluate only triggers transition events when state changes; repeated values fire “stay” events (OnInside / OnOutside).</li>
                <li>Min/Max setters automatically adjust values to maintain Min {"<="} Max.</li>
                <li>Use IsInside for exclusive checks and IsInRange for inclusive.</li>
                <li>Ensure Max {">"} Min before using GetRatio; equality creates a degenerate interval.</li>
                <li>The EventMode(EVENT_MODE.Sender) attribute in events ensures that events of Tier structures are always senders of events and not listeners. For further information, see documentation on Event structures from the SOAP system.</li>
            </ul>
       </div>
    );
}