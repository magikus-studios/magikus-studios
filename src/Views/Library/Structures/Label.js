import React from "react";
import Group from "Components/Group";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Label Asset</h1>
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
                <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Labels/Labels - 02.jpg" alt=""/>            
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
            <Group title="Label Gate" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>private Label</b2> <b1>_label</b1>: Label asset</li>
                        <li><b2>private {"Clist<LabeledEvent>"}</b2> <b1>_events</b1>: List of events to emit</li>
                        <li><b2>string</b2> <b1>LabelName</b1>: Returns the name of the label asset</li>
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>Label</b2> <b1>labels</b1>): Evaluates if the list of label assets of this label are equal to the list of label assets of the specified label</li>
                        <li><b2>bool</b2> <b1>Contains</b1>(<b2>Label</b2> <b1>labels</b1>): Evaluates if the list of label assets of this label contains the list of label assets of the specified label</li>
                        <li><b2>bool</b2> <b1>IsContained</b1>(<b2>Label</b2> <b1>labels</b1>): Evaluates if the list of label assets of this label are contained in the list of label assets of the specified label</li>
                        <li><b2>bool</b2> <b1>Equals</b1>(<b2>Label</b2> <b1>labels</b1>, <b2>Label</b2> <b1>eventLabel</b1>): Evaluates if the list of label assets of this label are equal to the list of label assets of the specified label. If true, it will try to trigger an event specified with the eventLabel from the _events list</li>
                        <li><b2>bool</b2> <b1>Contains</b1>(<b2>Label</b2> <b1>labels</b1>, <b2>Label</b2> <b1>eventLabel</b1>): Evaluates if the list of label assets of this label contains the list of label assets of the specified label. If true, it will try to trigger an event specified with the eventLabel from the _events list</li>
                        <li><b2>bool</b2> <b1>IsContained</b1>(<b2>Label</b2> <b1>labels</b1>, <b2>Label</b2> <b1>eventLabel</b1>): Evaluates if the list of label assets of this label are contained in the list of label assets of the specified label. If true, it will try to trigger an event specified with the eventLabel from the _events list</li>
                        <li><b2>void</b2> <b1>Emit</b1>(<b2>Label</b2> <b1>eventLabel</b1>): Tries to trigger an event specified with the eventLabel from the _events list</li>
                        <li><b2>void</b2> <b1>EmitIfContains</b1>(<b2>Label</b2> <b1>eventLabel</b1>): Tries to trigger an event specified with the eventLabel from the _events list if the list of events contains eventLabel</li>
                        <li><b2>void</b2> <b1>EmitIfIsContained</b1>(<b2>Label</b2> <b1>eventLabel</b1>): Tries to trigger an event specified with the eventLabel from the _events list if the list of events is containded by eventLabel</li>
                    </ul>
                </div>
            )}/>

            <h3 className="p-2">How to Use</h3>
            <Group title="Step 1: Creating Label Assets" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border w-90" src="images/Library/Structures/Labels/Labels - 01.gif" alt=""/>            
                    <p> 
                        <b1>Creating a Label</b1>: Go to the Unity menu, <b1>Assets {">"} Create {">"} Magikus {">"} Label Assets {">"} Label Asset</b1>. 
                        This creates a LabelAssetStructure instance that you can name and assign in the Inspector.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Labels/Labels - 02.jpg" alt=""/>            
                    <p> 
                        <b1>Creating a Label Group</b1>: Go to the Unity menu, <b1>Assets {">"} Create {">"} Magikus {">"} Label Assets {">"} Label Group Asset</b1>. 
                        This creates a LabelGroupAssetStructure instance, allowing you to include multiple LabelAssetStructure instances as a group.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Labels/Labels - 03.jpg" alt=""/>            
                    <p> 
                        Here are the two new labels created:
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Labels/Labels - 01.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Step 2: Using Label Gate" content={(
                <div>
                    <p> 
                        Attach the LabelGate component to a game object in the scene.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-40" src="images/Library/Structures/Labels/Labels - 02.gif" alt=""/>            
                    <p> 
                        Assign a Label or Label Group to the _label field in the Inspector.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Labels/Labels - 04.jpg" alt=""/>            
                    <p> 
                        Add an event to the emiter and select a label for it.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Structures/Labels/Labels - 18.jpg" alt=""/>            
                    <p> 
                        Now, you can trigger the event by using the methods from the Label Gate Component that requires the eventLabel.
                        Send the Run Label as the eventLabel to trigger the Run event.
                    </p>
                </div>
            )}/>

            <h3 className="p-2">Examples</h3>
            <Group title="Preparation" content={(
                <div>
                    <p> 
                        In this examples we will use the provided methods in the LabelGate or in the Label structures to check if a gameobject has a specific label or label group.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-90" src="images/Library/Structures/Labels/Labels - 05.jpg" alt=""/>            
                    <p> 
                        First we will create 2 Label assets and 2 Label Group assets.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-40" src="images/Library/Structures/Labels/Labels - 07.jpg" alt=""/>            
                    <p> 
                        The 2 Label assets will be called Label A and Label B.
                    </p>
                    <div className="center-content">
                        <img className="block-center mar-bottom-3 img-border w-45" src="images/Library/Structures/Labels/Labels - 081.jpg" alt=""/>            
                        <img className="block-center mar-bottom-3 img-border w-45" src="images/Library/Structures/Labels/Labels - 082.jpg" alt=""/>            
                    </div>
                    <p> 
                        The group assets will be called Label A Group and Label AB Group. 
                        The first will only contain the Label A, and the second one will contain the Label A and the Label B.
                    </p>
                    <div className="center-content">                        
                        <img className="block-center mar-bottom-3 img-border w-45" src="images/Library/Structures/Labels/Labels - 091.jpg" alt=""/>                                
                        <img className="block-center mar-bottom-3 img-border w-45" src="images/Library/Structures/Labels/Labels - 092.jpg" alt=""/>                                
                    </div>
                </div>
            )}/>
            <Group title="Example 01: Comparing Label A with Label A" content={(
                <div>
                    <p> 
                        The first example will compare the Label A asset with the same Label A asset.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Labels/Labels - 10.jpg" alt=""/>            
                    <p> 
                        It's important to notice that they are equal and so they contain each other.                    
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Labels/Labels - 11.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 02: Comparing Label A with Label B" content={(
                <div>
                    <p> 
                        Here, the script will compare the Label A asset with the Label B asset.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Labels/Labels - 12.jpg" alt=""/>            
                    <p> 
                        Since they are unequal and none of them are group assets they do not contain each other.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Labels/Labels - 13.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 03: Comparing Label A with Label A Group" content={(
                <div>
                    <p> 
                        This script will compare the Label A asset with the Label A Group asset.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Labels/Labels - 14.jpg" alt=""/>            
                    <p> 
                        They are equal and they contain each other just as if Label A Group would not be a group.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Labels/Labels - 15.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 04: Comparing Label A with Label AB Group" content={(
                <div>
                    <p> 
                        Finally, this example will compare the Label A asset with the Label AB Group asset.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Labels/Labels - 16.jpg" alt=""/>            
                    <p> 
                        Now this is different, they are not equal but the AB Group asset does contain the A asset.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Structures/Labels/Labels - 17.jpg" alt=""/>            
                </div>
            )}/>


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The label structure provides flexibility in managing tags for various game objects and components.</li>
                <li>The custom property drawer allows easy manipulation of labels within the Unity Inspector, enhancing usability.</li>
            </ul>
        </div>
    );
}