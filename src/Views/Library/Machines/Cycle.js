import React from "react";
import Group from "Components/Group";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Cycle Machine</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Structure for Managing Repetitive Actions in Unity 
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Cycle machine is a versatile structure built to streamline the creation and management of cycling behaviors in Unity game development. 
                It enables developers to define and control various types of cycles, whether based on time intervals or frames, and offers event handling for start, finish and cycle events. 
                With its flexible configuration options and robust control features, the Cycle machine simplifies the implementation of looping behaviors, making game development more efficient and enhancing the gameplay experience.                
            </p>


            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The primary purpose of the Cycle Machine is to provide a flexible and robust mechanism for executing repeated actions in a game. 
                It can be used to manage animations, periodic updates or any repetitive tasks that need to be executed at regular intervals.
                <br/>
                Some of the use cases are:
            </p>
            <ul>
                <li>Trigger animations at specified intervals.</li>
                <li>Execute periodic checks or updates within the game.</li>
                <li>Manage timed events such as power-ups, buffs or debuffs.</li>
                <li>Control the timing of AI actions and reactions.</li>
            </ul>
            <p className="pad-left-2">
                The Cycles class provides a set of static methods that facilitate the creation and management of various 
                looping mechanisms in the Magikus framework. These methods allow users to create periodic, burst, 
                delay and curve cycles with ease. The primary purpose of these cycles is to execute actions repetitively 
                with specific timing constraints and patterns, making them highly useful in game development, simulations 
                and other applications requiring timed or repeated actions.
            </p>
            <Group title="ICycle" content={(                
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>ITimescale</b2> <b1>Timescale</b1>(): The Timescale used for the cycle.</li>
                        <li><b2>bool</b2> <b1>IsFinished</b1>(): .</li>
                        <li><b2>int</b2> <b1>SkipCycleCount</b1>(): .</li>
                        <li><b2>int</b2> <b1>SkipFrameCount</b1>(): .</li>
                        <li><b2>float</b2> <b1>Period</b1>(): .</li>
                        <li><b2>float</b2> <b1>Progress</b1>(): .</li>
                        <li><b2>float</b2> <b1>OnProgress</b1>(): .</li>
                        <li><b2>float</b2> <b1>OffProgress</b1>(): .</li>
                        <li><b2>float</b2> <b1>Timer</b1>(): .</li>
                        <li><b2>int</b2> <b1>CycleCount</b1>(): .</li> 
                        <li><b2>int</b2> <b1>CycleAmount</b1>(): .</li> 
                        <li><b2>float</b2> <b1>CycleOffset</b1>(): .</li> 
                        <li><b2>bool</b2> <b1>IsSkippingNextCycle</b1>(): .</li> 
                        <li><b2>bool</b2> <b1>IsSkippingNextFrame</b1>(): .</li> 
                        <li><b2>bool</b2> <b1>IsActive</b1>(): .</li> 
                        <li><b2>bool</b2> <b1>IsLoop</b1>(): .</li> 
                        <li><b2>CYCLE_MODE</b2> <b1>CycleMode</b1>(): .</li> 
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>ICycle</b2> <b1>Play</b1>(): Starts the cycle.</li>
                        <li><b2>ICycle</b2> <b1>Pause</b1>(): Pauses the cycle.</li>
                        <li><b2>ICycle</b2> <b1>Unpause</b1>(): Resumes the paused cycle.</li>
                        <li><b2>ICycle</b2> <b1>Finish</b1>(): Finishes the cycle immediately and triggers the finish event.</li>
                        <li><b2>ICycle</b2> <b1>Break</b1>(): Stops the cycle without triggering the finish event.</li>
                        <li><b2>ICycle</b2> <b1>SkipCycle</b1>(): Skips the next cycle.</li>
                        <li><b2>ICycle</b2> <b1>SkipFrame</b1>(): Skips the next frame.</li>
                        <li><b2>ICycle</b2> <b1>AddCycleSkip</b1>(): Adds an additional cycle skip.</li>
                        <li><b2>ICycle</b2> <b1>AddFrameSkip</b1>(): Adds an additional frame skip.</li>
                        <li><b2>ICycle</b2> <b1>Then</b1>(<b2>ICycle</b2> <b1>cycle</b1>): Chains another cycle to start after the current cycle finishes.</li>
                        <li><b2>ICycle</b2> <b1>WaitFor</b1>(<b2>params ICycle[]</b2> <b1>cycles</b1>): Waits for the specified cycles to finish before starting.</li>
                        <li><b2>ICycle</b2> <b1>While</b1>(<b2>ICycle</b2> <b1>cycle</b1>): Runs the current cycle while another cycle is active.</li>
                        <li><b2>ICycle</b2> <b1>SetPeriod</b1>(<b2>float</b2> <b1>period</b1>): Sets the cycle period.</li>
                        <li><b2>ICycle</b2> <b1>SetCycleAmount</b1>(<b2>int</b2> <b1>amount</b1>): Sets the number of cycles.</li>
                        <li><b2>ICycle</b2> <b1>SetCycleOffset</b1>(<b2>float</b2> <b1>amount</b1>): Sets the cycle offset.</li>
                        <li><b2>ICycle</b2> <b1>SetLooping</b1>(<b2>bool</b2> <b1>isLooping</b1>): Enables or disables looping.</li>
                        <li><b2>ICycle</b2> <b1>SetLoopMode</b1>(<b2>LOOP_MODE</b2> <b1>mode</b1>): Sets the cycle mode (Time or Frame).</li>                    
                    </ul>
                    <h5 className="c-light-1">Events</h5>
                    <ul className="property-list">                        
                        <li><b2>ICycle</b2> <b1>OnStart</b1>(<b2>Action</b2> <b1>action</b1>): Sets an action to be called when the cycle starts.</li>
                        <li><b2>ICycle</b2> <b1>OnFinish</b1>(<b2>Action</b2> <b1>action</b1>): Sets an action to be called when the cycle finishes.</li>
                        <li><b2>ICycle</b2> <b1>OnStart</b1>(<b2>Action{'<ICycle>'}</b2> <b1>action</b1>): Sets an action to be called when the cycle starts.</li>
                        <li><b2>ICycle</b2> <b1>OnFinish</b1>(<b2>Action{'<ICycle>'}</b2> <b1>action</b1>): Sets an action to be called when the cycle finishes.</li>

                        <li><b2>ICycle</b2> <b1>OnCycleStart</b1>(<b2>Action</b2> <b1>action</b1>): Sets an action to be called at the start of each cycle.</li>
                        <li><b2>ICycle</b2> <b1>OnCycle</b1>(<b2>Action</b2> <b1>action</b1>): Sets an action to be called during each cycle.</li>
                        <li><b2>ICycle</b2> <b1>OnOffset</b1>(<b2>Action</b2> <b1>action</b1>): Sets an action to be called at each offset.</li>
                        <li><b2>ICycle</b2> <b1>OnCycleEnd</b1>(<b2>Action</b2> <b1>action</b1>): Sets an action to be called at the end of each cycle.</li>

                        <li><b2>ICycle</b2> <b1>OnCycleStart</b1>(<b2>Action{'<ICycle>'}</b2> <b1>action</b1>): Sets an action to be called at the start of each cycle.</li>
                        <li><b2>ICycle</b2> <b1>OnCycle</b1>(<b2>Action{'<ICycle>'}</b2> <b1>action</b1>): Sets an action to be called during each cycle.</li>
                        <li><b2>ICycle</b2> <b1>OnOffset</b1>(<b2>Action{'<ICycle>'}</b2> <b1>action</b1>): Sets an action to be called at each offset.</li>
                        <li><b2>ICycle</b2> <b1>OnCycleEnd</b1>(<b2>Action{'<ICycle>'}</b2> <b1>action</b1>): Sets an action to be called at the end of each cycle.</li>

                        <li><b2>ICycle</b2> <b1>OnCycleStart</b1>(<b2>Func{'<Bool>'}</b2> <b1>action</b1>): Sets an action to be called at the start of each cycle and stops when the action returns true.</li>
                        <li><b2>ICycle</b2> <b1>OnCycle</b1>(<b2>Func{'<Bool>'}</b2> <b1>action</b1>): Sets an action to be called during each cycle and stops when the action returns true.</li>
                        <li><b2>ICycle</b2> <b1>OnOffset</b1>(<b2>Func{'<Bool>'}</b2> <b1>action</b1>): Sets an action to be called at each offset and stops when the action returns true.</li>
                        <li><b2>ICycle</b2> <b1>OnCycleEnd</b1>(<b2>Func{'<Bool>'}</b2> <b1>action</b1>): Sets an action to be called at the end of each cycle and stops when the action returns true.</li>

                        <li><b2>ICycle</b2> <b1>OnCycleStart</b1>(<b2>Func{'<ICycle, Bool>'}</b2> <b1>action</b1>): Sets an action to be called at the start of each cycle and stops when the action returns true.</li>
                        <li><b2>ICycle</b2> <b1>OnCycle</b1>(<b2>Func{'<ICycle, Bool>'}</b2> <b1>action</b1>): Sets an action to be called during each cycle and stops when the action returns true.</li>
                        <li><b2>ICycle</b2> <b1>OnOffset</b1>(<b2>Func{'<ICycle, Bool>'}</b2> <b1>action</b1>): Sets an action to be called at each offset and stops when the action returns true.</li>
                        <li><b2>ICycle</b2> <b1>OnCycleEnd</b1>(<b2>Func{'<ICycle, Bool>'}</b2> <b1>action</b1>): Sets an action to be called at the end of each cycle and stops when the action returns true.</li>
                    </ul>
                </div>
            )}/>
            <Group title="Pulse Cycle" content={(
                <div>
                    <p>
                        Use the Pulse method to perform an action at regular intervals.
                    </p>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>ICycle</b2> <b1>Pulse</b1>(<b2>Action</b2> <b1>cycleAction</b1>): Creates a simple periodic cycle.</li>
                        <li><b2>ICycle</b2> <b1>Pulse</b1>(<b2>Action{"<ICycle>"}</b2> <b1>cycleAction</b1>): Creates a periodic cycle with the cycle as a parameter.</li>
                        <li><b2>ICycle</b2> <b1>Pulse</b1>(<b2>Func{"<bool>"}</b2> <b1>cycleAction</b1>): Creates a periodic cycle that plays until cycleAction returns true.</li>
                        <li><b2>ICycle</b2> <b1>Pulse</b1>(<b2>Func{"<ICycle, bool>"}</b2> <b1>cycleAction</b1>): Creates a periodic cycle that plays until cycleAction returns true with the cycle as a parameter.</li>
                        <li><b2>ICycle</b2> <b1>PulseFrame</b1>(<b2>Action</b2> <b1>cycleAction</b1>): Creates a periodic cycle that runs on frames.</li>
                        <li><b2>ICycle</b2> <b1>PulseFrame</b1>(<b2>Action{"<ICycle>"}</b2> <b1>cycleAction</b1>): Creates a periodic cycle that runs on frames with the cycle as a parameter.</li>
                        <li><b2>ICycle</b2> <b1>PulseFrame</b1>(<b2>Func{"<bool>"}</b2> <b1>cycleAction</b1>): Creates a periodic cycle that runs on frames and plays until cycleAction returns true.</li>
                        <li><b2>ICycle</b2> <b1>PulseFrame</b1>(<b2>Func{"<ICycle, bool>"}</b2> <b1>cycleAction</b1>): Creates a periodic cycle that runs on frames and plays until cycleAction returns true with the cycle as a parameter.</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Action</b2> <b1>cycleAction</b1>: The action to be performed periodically.</li>
                        <li><b2>Action{"<ICycle>"}</b2> <b1>cycleAction</b1>: The action to be performed periodically with the cycle as a parameter.</li>
                        <li><b2>Func{"<bool>"}</b2> <b1>cycleAction</b1>: The action to be performed periodically until it returns true.</li>
                        <li><b2>Func{"<ICycle, bool>"}</b2> <b1>cycleAction</b1>: The action to be performed periodically until it returns true with the cycle as a parameter.</li>                    
                        <li><b2>float</b2> <b1>playEveryXSeconds</b1> (optional): The interval between each execution in seconds.</li>
                        <li><b2>int</b2> <b1>playEveryXFrames</b1> (optional): The interval between each execution in frames.</li>
                        <li><b2>UPDATER_TYPE</b2> <b1>type</b1> (optional): The type of updater to use (Regular, Fixed, Late, Async).</li> 
                        <li><b2>ITimescale</b2> <b1>timescale</b1> (optional): The timescale to apply to the cycle.</li>
                    </ul>
                </div>
            )}/>
            <Group title="Burst Cycle" content={(
                <div>
                    <p>
                        Use the Burst method to perform an action multiple times in quick succession with intervals between bursts.
                    </p>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>ICycle</b2> <b1>Burst</b1>(<b2>Action</b2> <b1>cycleAction</b1>): Creates a simple burst cycle.</li>
                        <li><b2>ICycle</b2> <b1>Burst</b1>(<b2>Action{"<ICycle>"}</b2> <b1>cycleAction</b1>): Creates a burst cycle with the cycle as a parameter.</li>
                        <li><b2>ICycle</b2> <b1>Burst</b1>(<b2>Func{"<bool>"}</b2> <b1>cycleAction</b1>): Creates a burst cycle that plays until it returns true.</li>
                        <li><b2>ICycle</b2> <b1>Burst</b1>(<b2>Func{"<ICycle, bool>"}</b2> <b1>cycleAction</b1>): Creates a burst cycle that plays until it returns true with the cycle as a parameter.</li>
                        <li><b2>ICycle</b2> <b1>BurstFrame</b1>(<b2>Action</b2> <b1>cycleAction</b1>): Creates a burst cycle that runs on frames.</li>
                        <li><b2>ICycle</b2> <b1>BurstFrame</b1>(<b2>Action{"<ICycle>"}</b2> <b1>cycleAction</b1>): Creates a burst cycle that runs on frames with the cycle as a parameter.</li>
                        <li><b2>ICycle</b2> <b1>BurstFrame</b1>(<b2>Func{"<bool>"}</b2> <b1>cycleAction</b1>): Creates a burst cycle that runs on frames that plays until it returns true.</li>
                        <li><b2>ICycle</b2> <b1>BurstFrame</b1>(<b2>Func{"<ICycle, bool>"}</b2> <b1>cycleAction</b1>): Creates a burst cycle that runs on frames that plays until it returns true with the cycle as a parameter.</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Action</b2> <b1>cycleAction</b1>: The action to be performed in a burst.</li> 
                        <li><b2>Action{"<ICycle>"}</b2> <b1>cycleAction</b1>: The action to be performed in a burst with the cycle as a parameter.</li>
                        <li><b2>Func{"<bool>"}</b2> <b1>cycleAction</b1>: The action to be performed in a burst until it returns true.</li>
                        <li><b2>Func{"<ICycle, bool>"}</b2> <b1>cycleAction</b1>: The action to be performed in a burst until it returns true with the cycle as a parameter.</li>
                        <li><b2>float</b2> <b1>playForXSeconds</b1> (optional): The interval between each execution in seconds.</li>
                        <li><b2>int</b2> <b1>playForXFrames</b1> (optional): The interval between each execution in frames.</li>
                        <li><b2>UPDATER_TYPE</b2> <b1>type</b1> (optional): The type of updater to use.</li>
                        <li><b2>ITimescale</b2> <b1>timescale</b1> (optional): The timescale to apply to the cycle.</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Delay Cycle" content={(
                <div>
                    <p>
                        Use the Delay method to perform an action after a specified delay.
                    </p>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>ICycle</b2> <b1>Delay</b1>(<b2>Action</b2> <b1>cycleAction</b1>): Creates a simple delay cycle.</li>
                        <li><b2>ICycle</b2> <b1>Delay</b1>(<b2>Action{"<ICycle>"}</b2> <b1>cycleAction</b1>): Creates a delay cycle with the cycle as a parameter.</li>
                        <li><b2>ICycle</b2> <b1>Delay</b1>(<b2>Func{"<bool>"}</b2> <b1>cycleAction</b1>): Creates a delay cycle that plays until cycleAction returns true.</li>
                        <li><b2>ICycle</b2> <b1>Delay</b1>(<b2>Func{"<ICycle, bool>"}</b2> <b1>cycleAction</b1>): Creates a delay cycle that plays until cycleAction returns true with the cycle as a parameter.</li>
                        <li><b2>ICycle</b2> <b1>DelayFrame</b1>(<b2>Action</b2> <b1>cycleAction</b1>): Creates a delay cycle that runs on frames.</li>
                        <li><b2>ICycle</b2> <b1>DelayFrame</b1>(<b2>Action{"<ICycle>"}</b2> <b1>cycleAction</b1>): Creates a delay cycle that runs on frames with the cycle as a parameter.</li>
                        <li><b2>ICycle</b2> <b1>DelayFrame</b1>(<b2>Func{"<bool>"}</b2> <b1>cycleAction</b1>): Creates a delay cycle that runs on frames and plays until cycleAction returns true.</li>
                        <li><b2>ICycle</b2> <b1>DelayFrame</b1>(<b2>Func{"<ICycle, bool>"}</b2> <b1>cycleAction</b1>): Creates a delay cycle that runs on frames and plays until cycleAction returns true with the cycle as a parameter.</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Action</b2> <b1>cycleAction</b1>: The action to be performed after a delay.</li> 
                        <li><b2>Action{"<ICycle>"}</b2> <b1>cycleAction</b1>: The action to be performed after a delay with the cycle as a parameter.</li> 
                        <li><b2>Func{"<bool>"}</b2> <b1>cycleAction</b1>: The action to be performed after a delay until it returns true.</li> 
                        <li><b2>Func{"<ICycle, bool>"}</b2> <b1>cycleAction</b1>: The action to be performed after a delay until it returns true with the cycle as a parameter.</li> 
                        <li><b2>float</b2> <b1>playAfterXSeconds</b1>: The delay duration in seconds.</li> 
                        <li><b2>int</b2> <b1>playAfterXFrames</b1>: The delay duration in frames.</li> 
                        <li><b2>UPDATER_TYPE</b2> <b1>type</b1> (optional): The type of updater to use.</li>
                        <li><b2>ITimescale</b2> <b1>timescale</b1> (optional): The timescale to apply to the cycle.</li> 
                    </ul>
                </div>
            )}/>
            <Group title="Curve Cycle" content={(
                <div>
                    <p>
                        Use the Curve method to perform an action that follows an animation curve over a specified duration.
                    </p>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>ICycle</b2> <b1>Curve</b1>(<b2>Action{"<float>"}</b2> <b1>cycleAction</b1>, <b2>AnimationCurve</b2> <b1>curve</b1>): Creates a simple curve cycle.</li>
                        <li><b2>ICycle</b2> <b1>Curve</b1>(<b2>Action{"<ICycle, float>"}</b2> <b1>cycleAction</b1>, <b2>AnimationCurve</b2> <b1>curve</b1>): Creates a simple curve cycle.</li>
                        <li><b2>ICycle</b2> <b1>Cycle</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>Action{"<float>"}</b2> <b1>cycleAction</b1>): Extension method for AnimationCurve objects that creates a curve cycle.</li>
                        <li><b2>ICycle</b2> <b1>Cycle</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>Action{"<ICycle, float>"}</b2> <b1>cycleAction</b1>): Extension method for AnimationCurve objects that creates a curve cycle.</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Action{"<float>"}</b2> <b1>cycleAction</b1>: The action to be performed, taking a float parameter that represents the curve progress value.</li> 
                        <li><b2>Action{"<ICycle, float>"}</b2> <b1>cycleAction</b1>: The action to be performed, taking the cycle and a float parameter that represents the curve progress value.</li> 
                        <li><b2>AnimationCurve</b2> <b1>curve</b1>: The animation curve to follow.</li>
                        <li><b2>float</b2> <b1>secondsToTravel</b1>: The duration of the curve in seconds.</li>                      
                        <li><b2>UPDATER_TYPE</b2> <b1>type</b1> (optional): The type of updater to use.</li>
                        <li><b2>ITimescale</b2> <b1>timescale</b1> (optional): The timescale to apply to the cycle.</li>
                    </ul>
                </div>
            )}/>

            <h3 className="p-2">Examples</h3>
            <Group title="Example 01: Basic Usage" content={(
                <div>
                    <ul>
                        <li><b>Create a Cycle Instance</b>: Instantiate a new cycle with the desired parameters.</li>
                        <li><b>Configure the Cycle</b>: Set the period, cycle amount and other properties.</li>
                        <li><b>Attach Event Handlers</b>: Define actions to be executed at various stages of the cycle.</li>
                        <li><b>Start the Cycle</b>: Call the Play() method to start the cycle.</li>
                        <li><b>Control the Cycle</b>: Use methods like Pause(), Unpause(), Finish(), etc., to control the cycle's execution.</li>
                    </ul>
                </div>
            )}/>
            <Group title="Example 02: Simple Cycle Creation" content={(
                <div>
                    <p>
                        This is a Unity script that demonstrates the use of a cycle machine. It is intended to be attached to a GameObject in a Unity scene.
                        In the Start method, the script initializes a cycle with a duration of 2 seconds per cycle. 
                        This cycle is set to repeat continuously. 
                        The script configures the cycle to log messages at different stages: when a cycle starts, during the cycle and when the cycle ends. 
                        Once configured, the cycle is started with the Play method.
                        The Update method allows for real-time control of the cycle. 
                        It listens for specific key inputs: pressing the "P" key pauses the cycle, the "U" key resumes it if paused and the "F" key ends the cycle.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Machines/Cycle/Cycle - 01.jpg" alt=""/>
                    <p>
                        This setup demonstrates how to use the Magikus Library to create and manage a cycle, with built-in logging for different 
                        cycle events and keyboard controls for dynamic interaction during runtime.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-55" src="images/Library/Machines/Cycle/Cycle - 01.gif" alt=""/>
                </div>
            )}/>
            <Group title="Example 03: Creating Cycles with Cycles Class" content={(
                <div>
                    <p>
                        This example demonstrates how to create and control different types of timed cycles using the Cycles class. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Machines/Cycle/Cycle - 02.jpg" alt=""/>
                    <p>
                        The script initializes four types of cycles (Pulse, Burst, Delay and Curve) and allows the user to start or stop them using keyboard input (P, B, D, C keys respectively). 
                        Each cycle triggers specific actions with defined timing behavior: 
                    </p>
                    <p>
                        Pulse repeats an action. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-55" src="images/Library/Machines/Cycle/Cycle - 02.gif" alt=""/>
                    <p>
                        Burst performs rapid repetitions. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-55" src="images/Library/Machines/Cycle/Cycle - 03.gif" alt=""/>
                    <p>
                        Delay schedules an action after a wait. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-55" src="images/Library/Machines/Cycle/Cycle - 04.gif" alt=""/>
                    <p>
                        Curve smoothly interpolates values over time. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-55" src="images/Library/Machines/Cycle/Cycle - 05.gif" alt=""/>
                    <p>
                        The system ensures cycles can be started, stopped and cleaned up efficiently.
                    </p>
                </div>
            )}/>


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The cycle can be set to operate in two modes: Time-based and Frame-based. Choose the mode based on your specific needs.</li>
                <li>Ensure that any actions attached to the cycle do not cause significant delays to avoid impacting the cycle's timing accuracy.</li>
                <li>Use WaitFor to synchronize multiple cycles and ensure they start in the correct order.</li>
                <li>Ensure that the cycleAction provided is not null to avoid runtime exceptions.</li>
                <li>The timeScale parameter allows you to control the timing behavior of the cycles, making them dependent or independent of the game's time scale.</li>                
            </ul>
       </div>
    );
}