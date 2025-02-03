import React from "react";
import Group from "Components/Group";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Label System</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Scriptable object designed to Function as Tags
            </h6>
            
            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Label system provides an efficient alternative to traditional string identifiers in Unity by offering a more organized approach for tagging gameObjects and other assets.
                As a scriptable object, it enables developers to tag and categorize gameObjects and other resources through labels and label groups, significantly reducing the risk of errors associated with using string identifiers. 
                Ideal for managing sound, collision detection and object identification, the Label structure enhances flexibility, reliability and organization within complex Unity projects.
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Systems/Labels/Labels - 02.jpg" alt=""/>            
            </div>

           <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                Some use cases may be in sound library management where each sound in a library can be tagged with a label, making it easier to select and manage sounds, in collision detection where Labels can identify objects participating in collisions, providing more clarity and control and object identification. 
                In complex scenes, labels can identify specific objects or components, making it easier to reference and manipulate them programmatically.
            </p>
            <Group title="Label Asset Structure" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>List{"<LabelAssetStructure>"}</b2> <b1>Labels</b1>: List of label assets containing only this label asset</li>
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>Label</b2> <b1>labels</b1>): Evaluates if the list of label assets of this label are equal to the list of label assets of the specified label</li>
                        <li><b2>bool</b2> <b1>Contains</b1>(<b2>Label</b2> <b1>labels</b1>): Evaluates if the list of label assets of this label contains the list of label assets of the specified label</li>
                        <li><b2>bool</b2> <b1>IsContained</b1>(<b2>Label</b2> <b1>labels</b1>): Evaluates if the list of label assets of this label are contained in the list of label assets of the specified label</li>
                    </ul>
                </div>
            )}/>
            <Group title="Label Group Asset Structure" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>List{"<LabelAssetStructure>"}</b2> <b1>Labels</b1>: List of label assets</li>
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>Label</b2> <b1>labels</b1>): Evaluates if the list of label assets of this label are equal to the list of label assets of the specified label</li>
                        <li><b2>bool</b2> <b1>Contains</b1>(<b2>Label</b2> <b1>labels</b1>): Evaluates if the list of label assets of this label contains the list of label assets of the specified label</li>
                        <li><b2>bool</b2> <b1>IsContained</b1>(<b2>Label</b2> <b1>labels</b1>): Evaluates if the list of label assets of this label are contained in the list of label assets of the specified label</li>
                    </ul>
                </div>
            )}/>
            <Group title="Label Controller" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>Label</b2> <b1>_label</b1>: Label asset</li>
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>_Equals</b1>(<b2>Label</b2> <b1>labels</b1>): Evaluates if the list of label assets of this label are equal to the list of label assets of the specified label</li>
                        <li><b2>bool</b2> <b1>_Contains</b1>(<b2>Label</b2> <b1>labels</b1>): Evaluates if the list of label assets of this label contains the list of label assets of the specified label</li>
                        <li><b2>bool</b2> <b1>_IsContained</b1>(<b2>Label</b2> <b1>labels</b1>): Evaluates if the list of label assets of this label are contained in the list of label assets of the specified label</li>
                    </ul>
                </div>
            )}/>

            <h3 className="p-2">Examples</h3>
            <Group title="Step 1: Creating Label Assets" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Systems/Labels/Labels - 01.jpg" alt=""/>            
                    <p> 
                        <b1>Creating a Label</b1>: Go to the Unity menu, <b1>Assets {">"} Create {">"} Magikus {">"} Label System {">"} Label Asset</b1>. 
                        This creates a LabelAssetStructure instance that you can name and assign in the Inspector.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Systems/Labels/Labels - 02.jpg" alt=""/>            
                    <p> 
                        <b1>Creating a Label Group</b1>: Go to the Unity menu, <b1>Assets {">"} Create {">"} Magikus {">"} Label System {">"} Label Group Asset</b1>. 
                        This creates a LabelGroupAssetStructure instance, allowing you to include multiple LabelAssetStructure instances as a group.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Systems/Labels/Labels - 03.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Step 2: Using Label Controller" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Systems/Labels/Labels - 04.jpg" alt=""/>            
                    <p> 
                        Attach the LabelController component to a game object in the scene. Assign a Label or Label Group to the _label field in the Inspector.
                    </p>
                </div>
            )}/>
            <Group title="Step 3: Checking Labels in Code" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Systems/Labels/Labels - 05.jpg" alt=""/>            
                    <p> 
                        Use the provided methods in the LabelController or in the Label structures to check if a game object has a specific label or label group.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Systems/Labels/Labels - 06.jpg" alt=""/>            
                </div>
            )}/>

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The label system provides flexibility in managing tags for various game objects and components.</li>
                <li>The custom property drawer allows easy manipulation of labels within the Unity Inspector, enhancing usability.</li>
            </ul>
        </div>
    );
}