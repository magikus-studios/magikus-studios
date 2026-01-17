import React from "react";
import Group from "Components/Group";

export default function Function() {
    
    
    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Interef Wrapper</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">    
                 Unity wrapper that serialize interface-based references
            </h6>
            
            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                Interef provides a clean, robust solution to one of Unity’s long-standing limitations: interface serialization. 
                By combining a lightweight runtime wrapper with a powerful custom Inspector experience, it enables interface-driven architecture, cleaner dependencies, safer and more expressive Inspector workflows.
                This makes Interef especially valuable in modular systems, libraries (such as Magikus), and any project that prioritizes flexibility and maintainability over tight coupling.
                In short, use interfaces freely without fighting the Inspector.
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Interef/Interef - 05.jpg" alt=""/>            
            </div>


            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                <b1>{"Interef<T>"}</b1> is a generic, serializable reference wrapper class designed for Unity that allows you to store and assign references to objects by interface or base class, while still being fully compatible with the Unity Inspector.
                Unity does not natively support serializing interface-typed fields.
                Interef solves this limitation by internally storing a UnityEngine.Object reference and exposing it as a strongly typed interface or class at runtime.
                Interef comes with a custom property drawer and an optional InterefAttribute filter that Rrstricts assignable types in the Inspector, ensures only objects implementing the desired interface can be assigned and provides a dropdown picker for quick selection of valid scene objects and assets.
                This makes Interef ideal for decoupled architectures, dependency injection patterns, and interface-driven design in Unity.
            </p>
            <Group title="Interef<T> Class" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul>
                        <li><b2>T</b2> <b1>Value</b1>: Object reference stored</li>
                    </ul>
                </div>
            )}/>
            <Group title="Interef Attribute" content={(
                <div>
                    <h5 className="c-light-1">Constructors</h5>
                    <ul className="property-list">
                        <li><b1>Interef</b1>(<b2>Type</b2> <b1>filterType</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Type</b2> <b1>filterType</b1>: UnityEngine.Object reference type</li>
                    </ul>
                </div>
            )}/>


            <h3 className="p-2">Examples</h3>
            <Group title="Example 01: Referencing a MonoBehaviour by Interface" content={(
                <div>
                    <p>  
                        This example will explain how to allow a field to reference any component that implements an interface, instead of a concrete type. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-40" src="images/Library/Structures/Interef/Interef - 01.jpg" alt=""/>            
                    <p>  
                        This interface defines behavior, not implementation.
                        Anything that can “take damage” agrees to implement this contract.
                        Unity cannot serialize this interface directly, this is the core problem {"Interef<T>"} solves.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Interef/Interef - 02.jpg" alt=""/>
                    <p>  
                        Enemy is a normal Unity component.
                        It implements IDamageable, so it can take damage.
                        Unity can serialize Enemy, but not IDamageable.
                    </p>            
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Interef/Interef - 03.jpg" alt=""/>
                    <p>  
                        Unity serializes the internal field
                        The Inspector shows an ObjectField with a dropdown picker.
                        The drawer filters assignments so only objects implementing IDamageable are accepted.
                    </p>   
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Interef/Interef - 05.jpg" alt=""/>
                    <p>  
                        Assign the reference in the Inspector by dragging an Enemy component into the field
                    </p>           
                </div>
            )}/>
            <Group title="Example 02: Using Interef attribute to Restrict the Object Picker" content={(
                <div>
                    <p>  
                        This example shows how to use the Interef attribute to limit the ObjectField picker to Enemy objects but still enforcing that the object implements IDamageable.
                        This improves Inspector usability when many valid implementations exist.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Interef/Interef - 04.jpg" alt=""/>            
                    <p>  
                        Add the attribute using <b2>typeof</b2> to get the Enemy type.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Interef/Interef - 06.jpg" alt=""/>
                    <p>  
                        Now, in the inspector, the ObjectField only accepts Enemy and the dropdown menu only lists scene Enemy components and Enemy-derived assets (if any).
                        You still program against IDamageable, but the Inspector UX is cleaner and safer.
                    </p>            
                </div>
            )}/>

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>T must be a reference type (where T : class)</li>
                <li>Only UnityEngine.Object-derived types can be assigned</li>
                <li>Runtime safety is ensured by IsAssignableFrom checks in the drawer</li>
                <li>The custom picker menu lists valid scene MonoBehaviour instances and valid ScriptableObject assets only</li>
                <li>If an invalid object is assigned manually, the drawer will revert to the last valid selection</li>
                <li>The drawer is Editor-only and has no runtime overhead</li>
            </ul>
       </div>
    );
}