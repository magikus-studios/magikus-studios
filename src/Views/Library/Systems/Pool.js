import React from "react";
import Group from "Components/Group";

export default function Function() {

    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Pool System</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Efficient Object Management
            </h6>
            
            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Pool System optimizes performance by reducing unnecessary object instantiations and destructions. 
                It is highly configurable and helps manage resources effectively in Unity projects. 
                By leveraging this system, developers can ensure smoother gameplay experiences with reduced performance overhead.
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Systems/Pool/Pool - 02.gif" alt=""/>            
            </div>

           <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The Pool System is composed of three main components:
            </p>
            <ul>
                <li><b1>PoolManager</b1>: The central controller responsible for managing object pooling, instantiating objects and handling pool constraints.</li>
                <li><b1>PoolObject</b1>: Attached to individual objects, allowing them to be returned to the pool and properly managed.</li>
                <li><b1>PoolSettingsAsset</b1>: A configurable asset that defines pooling parameters such as the initial object count, batch size and min/max limits.</li>
            </ul>
            <p className="pad-left-2">
                The PoolManager initializes the pool using the settings defined in PoolSettingsAsset.
                When an object is needed, by using the <b2>SpawnObject()</b2> method, the PoolManager retrieves an available object from the pool (or instantiates a new one if necessary) and spawns it.
                The PoolObject attached to the object ensures that it can be properly returned to the pool when no longer needed by calling the <b2>Kill()</b2> method.
                When an object is no longer in use, it is sent back to the PoolManager, where it may be deactivated (if DeactivateObjectsInPool is enabled) and stored for future use.
                Automatic cleanup and autofill mechanisms keep the pool optimized based on the defined constraints.
            </p>
            <Group title="Pool Manager" content={(
                <div>
                    <p>
                        The PoolManager is responsible for managing object pooling. 
                        Instead of destroying and re-instantiating objects, this system reuses inactive objects, reducing memory allocation overhead and garbage collection performance costs.
                    </p>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>Count</b1>: Total number of pooled and spawned objects</li>
                        <li><b2>int</b2> <b1>PoolCount</b1>: Number of objects available in the pool</li>
                        <li><b2>int</b2> <b1>SpawnedCount</b1>: Number of active (spawned) objects</li>
                        <li><b2>private bool</b2> <b1>DeactivateObjectsInPool</b1>: When true, all pooled objects are automatically deactivated when added to the pool and reactivated when spawned</li>
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>Spawn</b1>(): Retrieves an object from the pool, activating it for use</li>
                        <li><b2>PoolObjectController</b2> <b1>SpawnObject</b1>(): Retrieves an object from the pool, activating it for use and returns it</li>
                        <li><b2>void</b2> <b1>PoolObject</b1>(<b2>PoolObjectController</b2> <b1>poolObject</b1>): Returns an object to the pool</li>
                        <li><b2>bool</b2> <b1>IsObjectSpawned</b1>(<b2>PoolObjectController</b2> <b1>poolObject</b1>): Checks if an object is currently spawned</li>
                    </ul>
                    <h5 className="c-light-1">Events</h5>
                    <ul className="property-list">
                        <li><b2>EventVoid</b2> <b1>OnObjectSpawned</b1>: Triggered when an object is spawned</li>
                        <li><b2>EventVoid</b2> <b1>OnObjectPooled</b1>: Triggered when an object is returned to the pool</li>
                        <li><b2>EventVoid</b2> <b1>OnObjectCreated</b1>: Triggered when a new object is instantiated</li>
                    </ul>
                </div>
            )}/>
            <Group title="Pool Object" content={(
                <div>
                    <p>
                        The PoolObject is attached to objects that should be pooled. 
                        It enables objects to be returned to the pool when no longer in use.
                    </p>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>Kill</b1>(<b2>PoolObjectController</b2> <b1>poolObject</b1>): Returns the object to the pool</li>
                        <li><b2>bool</b2> <b1>SetPoolManager</b1>(<b2>PoolManager</b2> <b1>poolManager</b1>): Assigns the object's pool manager</li>
                    </ul>
                    <h5 className="c-light-1">Events</h5>
                    <ul className="property-list">
                        <li><b2>EventVoid</b2> <b1>OnSpawn</b1>: Triggered when the object is spawned</li>
                        <li><b2>EventVoid</b2> <b1>OnKill</b1>: Triggered when the object is returned to the pool</li>
                        <li><b2>EventVoid</b2> <b1>OnCreate</b1>: Triggered when the object is instantiated</li>
                    </ul>
                </div>
            )}/>
            <Group title="Pool Settings Asset" content={(
                <div>
                    <p>
                        The PoolSettingsAsset defines pool settings such as initial object count, batch size and min/max pool sizes.
                    </p>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>InitialAmount</b1>: Number of objects created at the start</li>
                        <li><b2>int</b2> <b1>BatchSize</b1>: Number of objects instantiated when more are needed</li>
                        <li><b2>int</b2> <b1>MinPoolSize</b1>: Minimum number of objects in the pool</li>
                        <li><b2>Toggle{"<"}int{">"}</b2> <b1>MaxPoolSize</b1>: Maximum number of objects allowed in the pool</li>
                        <li><b2>{"Toggle<Flexor<int,SIZE_MODE>>"}</b2> <b1>MaxSize</b1>: Maximum number of objects allowed either spawned or in total based on the size mode selected</li>
                        <li><b2>Toggle{"<"}float{">"}</b2> <b1>PoolCleanupRate</b1>: Rate at which excess objects are removed</li>
                        <li><b2>Toggle{"<"}float{">"}</b2> <b1>PoolAutofillRate</b1>: Rate at which missing objects are replenished</li>
                    </ul>
                </div>
            )}/>


            <h3 className="p-2">Examples</h3>
            <p className="pad-left-2">
                To use the Pool system in Unity without writing additional scripts follow the next steps:
            </p>
            <Group title="Step 01: Add the PoolManager Component" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Systems/Pool/Pool - 01.jpg" alt=""/>            
                    <p> 
                        In Unity, create an empty GameObject.
                        Attach the PoolManager script to the GameObject.
                        You can find the PoolManager script in the Components menu, <b1>Magikus {">"} Pool System {">"} Pool Manager</b1>. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-40" src="images/Library/Systems/Pool/Pool - 03.gif" alt=""/>            
                    <p> 
                        Assign a PoolSettingsAsset to configure the pooling parameters.
                        To create a new PoolSettingsAsset go to the Unity menu, <b1>Assets {">"} Create {">"} Magikus {">"} Pool System {">"} Pool Settings Asset</b1>. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-90" src="images/Library/Systems/Pool/Pool - 05.gif" alt=""/>            
                    <p> 
                        Set DeactivateObjectsInPool to true if objects should be deactivated when pooled.
                        Subscribe to OnObjectSpawned, OnObjectPooled, and OnObjectCreated events in the Unity Inspector if needed.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Pool/Pool - 02.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Step 02: Configure the PoolObject" content={(
                <div>
                    <p> 
                        Attach the PoolObject script to the objects that need pooling.
                        You can find the PoolObject script in the Components menu, <b1>Magikus {">"} Pool System {">"} Pool Object</b1>. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-40" src="images/Library/Systems/Pool/Pool - 04.gif" alt=""/>            
                    <p> 
                        Assign a this object to the Pool Object reference of the Pool Manager in the Inspector.
                        Subscribe to OnSpawn, OnKill, and OnCreate events in the Unity Inspector if needed.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Systems/Pool/Pool - 03.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Step 03: Spawning Objects from the Inspector" content={(
                <div>
                    <p> 
                        Select the GameObject with the PoolManager.
                        Click on the Spawn Object button in the Inspector or call the <b2>Spawn()</b2> method.
                        The OnObjectSpawned event will trigger.
                        If DeactivateObjectsInPool is enabled, the object will be activated when spawned.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Systems/Pool/Pool - 04.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Step 04: Returning Objects to the Pool" content={(
                <div>
                    <p> 
                        When an object is no longer needed, call Kill() from an event or animation to return it to the pool.
                        The OnKill and OnObjectPooled events will trigger.
                        If DeactivateObjectsInPool is enabled, the object will be deactivated when pooled.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Systems/Pool/Pool - 05.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Step 05: Automatic Pool Management" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border w-50" src="images/Library/Systems/Pool/Pool - 06.jpg" alt=""/>            
                    <p> 
                        Adjust the PoolSettingsAsset to control automatic cleanup and auto-fill behaviors to maintain optimal performance.
                        The OnObjectCreated event will trigger when new objects are instantiated.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-90" src="images/Library/Systems/Pool/Pool - 01.gif" alt=""/>            
                </div>
            )}/>


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The system ensures that the pool does not shrink below the defined minimum pool size.</li>
                <li>Objects are automatically cleaned up when the maximum pool size is exceeded.</li>
                <li>Autofill can replenish objects when the pool count falls below the minimum threshold.</li>
                <li>If <b2>DeactivateObjectsInPool</b2> is enabled, objects will be deactivated when pooled and activated when spawned.</li>
                <li>Events provide additional flexibility by allowing users to hook into object spawning, pooling, and creation logic.</li>
            </ul>
        </div>
    );
}