import React from "react";
import Group from "Components/Group";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center">Label Structure</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Label structure in the Magikus Library is a set of scriptable objects designed to function as tags, replacing string identifiers in Unity. 
                This structure offers an organized and flexible approach for tagging gameObjects and other assets. 
                By using labels and label groups, developers can easily check if a gameObject contains a specific label or a group of labels. 
                This method enhances performance and reduces the risk of errors associated with using string identifiers.
            </h6>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                Some use cases may be in sound library management where each sound in a library can be tagged with a label, making it easier to select and manage sounds, in collision detection where Labels can identify objects participating in collisions, providing more clarity and control and object identification. 
                In complex scenes, labels can identify specific objects or components, making it easier to reference and manipulate them programmatically.
            </p>


            <h3 className="p-2">How it Works</h3>
            <Group title="Label Asset Structure" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>List{"<LabelAssetStructure>"}</b2> <b1>Labels</b1>: List of label assets containing only this label asset</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>Label</b2> <b1>labels</b1>): Evaluates if the list of label assets of this label are equal to the list of label assets of the specified label</li>
                        <li><b2>bool</b2> <b1>Contains</b1>(<b2>Label</b2> <b1>labels</b1>): Evaluates if the list of label assets of this label contains the list of label assets of the specified label</li>
                        <li><b2>bool</b2> <b1>IsContained</b1>(<b2>Label</b2> <b1>labels</b1>): Evaluates if the list of label assets of this label are contained in the list of label assets of the specified label</li>
                    </ul>
                </div>
            )}/>
            <Group title="Label Group Asset Structure" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>List{"<LabelAssetStructure>"}</b2> <b1>Labels</b1>: List of label assets</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>Label</b2> <b1>labels</b1>): Evaluates if the list of label assets of this label are equal to the list of label assets of the specified label</li>
                        <li><b2>bool</b2> <b1>Contains</b1>(<b2>Label</b2> <b1>labels</b1>): Evaluates if the list of label assets of this label contains the list of label assets of the specified label</li>
                        <li><b2>bool</b2> <b1>IsContained</b1>(<b2>Label</b2> <b1>labels</b1>): Evaluates if the list of label assets of this label are contained in the list of label assets of the specified label</li>
                    </ul>
                </div>
            )}/>
            <Group title="Label Controller" content={(
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Properties</h5>
                    <ul className="property-list">
                        <li><b2>Label</b2> <b1>_label</b1>: Label asset</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>_Equals</b1>(<b2>Label</b2> <b1>labels</b1>): Evaluates if the list of label assets of this label are equal to the list of label assets of the specified label</li>
                        <li><b2>bool</b2> <b1>_Contains</b1>(<b2>Label</b2> <b1>labels</b1>): Evaluates if the list of label assets of this label contains the list of label assets of the specified label</li>
                        <li><b2>bool</b2> <b1>_IsContained</b1>(<b2>Label</b2> <b1>labels</b1>): Evaluates if the list of label assets of this label are contained in the list of label assets of the specified label</li>
                    </ul>
                </div>
            )}/>


            <h3 className="p-2">How to Use</h3>

            <h4 className="c-light-1 p-3">Step 1: Creating Label Assets</h4>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Labels/Labels - 01.jpg" alt=""/>            
            <p className="pad-left-3"> 
                <b1>Creating a Label</b1>: Go to the Unity menu, Assets {">"} Create {">"} Magikus {">"} Structures {">"} Label Structure {">"} Label Asset. 
                This creates a LabelAssetStructure instance that you can name and assign in the Inspector.
            </p>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Labels/Labels - 02.jpg" alt=""/>            
            <p className="pad-left-3"> 
                <b1>Creating a Label Group</b1>: Go to the Unity menu, Assets {">"} Create {">"} Magikus {">"} Structures {">"} Label Structure {">"} Label Group Asset. 
                This creates a LabelGroupAssetStructure instance, allowing you to include multiple LabelAssetStructure instances as a group.
            </p>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Labels/Labels - 03.jpg" alt=""/>            

            <h4 className="c-light-1 p-3">Step 2: Using Label Controller</h4>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Labels/Labels - 04.jpg" alt=""/>            
            <p className="pad-left-3"> 
                Attach the LabelController component to a game object in the scene. Assign a Label or Label Group to the _label field in the Inspector.
            </p>

            <h4 className="c-light-1 p-3">Step 3: Checking Labels in Code</h4>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Labels/Labels - 05.jpg" alt=""/>            
            <p className="pad-left-3"> 
                Use the provided methods in the LabelController or in the Label structures to check if a game object has a specific label or label group.
            </p>
            <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Labels/Labels - 06.jpg" alt=""/>            

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The label system provides flexibility in managing tags for various game objects and components.</li>
                <li>The custom property drawer allows easy manipulation of labels within the Unity Inspector, enhancing usability.</li>
            </ul>
            
            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The Label structure offers a robust solution for replacing string identifiers with a more efficient and organized system in Unity. 
                By using labels and label groups, developers can tag and identify game objects, sounds, or other assets with ease. 
                This structure reduces errors and enhances performance, making it an essential tool for complex Unity projects. 
                Whether for sound management, collision detection, or object identification, the Label structure provides a versatile and reliable solution.
            </p>
       </div>
    );
}