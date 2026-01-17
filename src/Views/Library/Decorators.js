import React from "react";

export default function Function() {

    let scrollUp = () => { window.scrollTo({ top: 0, behavior: "smooth" }); }

    return (
        <div className="c-light-2">
            <h1 className="text-center pad-top-4">Decorators</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Attributes that enhance Data Visualization
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2">
                The Decorators module provides a suite of custom attributes and property drawers designed to enhance data visualization in the Unity Inspector. 
                These decorators offer a range of functionalities that improve the organization, readability and interactivity of serialized fields. 
                By utilizing these decorators, developers can customize the Inspector to better suit their workflow and present data more effectively. 
            </p>

            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-60" src="images/Library/Library/03 - [1950x1300] Decorators V2.png" alt=""/>            
            </div>

            <div className="container mar-bottom-3">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <a href="/#/magikus/decorators/debutton" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Debutton</h4></a>
                        <p className="pad-left-3">
                            An attribute that adds customizable buttons to the Unity Inspector, enabling developers to trigger methods directly within the editor.
                        </p>
                    </div>
                    <div className="p-2 col-lg-5 col-md-12">
                        <a href="/#/magikus/decorators/debutton" className="t-dec-none vertical-center" onClick={scrollUp}>
                            <img className="block-center img-border w-80" src="images/Library/Decorators/Debutton/Debutton - 07.jpg" alt=""/>            
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mar-bottom-3">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <a href="/#/magikus/decorators/toggle" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Toggle</h4></a>
                        <p className="pad-left-3">
                            The <b2>[Toggle]</b2> attribute transforms boolean fields into customizable toggle buttons in the Unity Inspector, enhancing usability and clarity.
                        </p>
                    </div>
                    <div className="p-2 col-lg-5 col-md-12">
                        <a href="/#/magikus/decorators/toggle" className="t-dec-none vertical-center" onClick={scrollUp}>
                            <img className="block-center img-border w-80" src="images/Library/Decorators/Toggle/Toggle - 02.jpg" alt=""/>            
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mar-bottom-3">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <a href="/#/magikus/decorators/conditional" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Conditional</h4></a>
                        <p className="pad-left-3">
                            A set of attributes that dynamically control field appearance in the Unity Inspector, enhancing data visualization and streamlining workflow.
                        </p>
                    </div>
                    <div className="p-2 col-lg-5 col-md-12">
                        <a href="/#/magikus/decorators/conditional" className="t-dec-none vertical-center" onClick={scrollUp}>
                            <img className="block-center img-border w-80" src="images/Library/Decorators/Conditional/Conditional - 17.jpg" alt=""/>            
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mar-bottom-3">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <a href="/#/magikus/decorators/showHide" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Show & Hide</h4></a>
                        <p className="pad-left-3">
                            Attributes that enable conditional visibility of fields in the Unity Inspector, helping developers create a cleaner, more intuitive interface by displaying only relevant fields based on specific conditions.
                        </p>
                    </div>
                    <div className="p-2 col-lg-5 col-md-12">
                        <a href="/#/magikus/decorators/showHide" className="t-dec-none vertical-center" onClick={scrollUp}>
                            <img className="block-center img-border w-80" src="images/Library/Decorators/ShowHide/ShowHide - 01.gif" alt=""/>            
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mar-bottom-3">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <a href="/#/magikus/decorators/block" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Block</h4></a>
                        <p className="pad-left-3">
                            The <b2>[Block]</b2> attribute is a Unity Inspector tool that keeps fields read-only, ensuring data integrity by preventing unintended modifications.
                        </p>
                    </div>
                    <div className="p-2 col-lg-5 col-md-12">
                        <a href="/#/magikus/decorators/block" className="t-dec-none vertical-center" onClick={scrollUp}>
                            <img className="block-center img-border w-80" src="images/Library/Decorators/Block/Block - 02.jpg" alt=""/>            
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mar-bottom-3">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <a href="/#/magikus/decorators/create" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Create</h4></a>
                        <p className="pad-left-3">
                            An attribute that simplifies the management of referenced objects in Unity's Inspector, enhancing productivity in scenarios requiring frequent creation or removal of referenced value objects such as GameObjecs or ScriptableObjects.
                        </p>
                    </div>
                    <div className="p-2 col-lg-5 col-md-12">
                        <a href="/#/magikus/decorators/create" className="t-dec-none vertical-center" onClick={scrollUp}>
                            <img className="block-center img-border w-80" src="images/Library/Decorators/Create/Create - 10.jpg" alt=""/>            
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mar-bottom-3">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <a href="/#/magikus/decorators/keycode" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Keycode</h4></a>
                        <p className="pad-left-3">
                            A property drawer that enhances editing KeyCode fields in Unity, offering intuitive key binding and reset functionality to enhance workflow and productivity.
                        </p>
                    </div>
                    <div className="p-2 col-lg-5 col-md-12">
                        <a href="/#/magikus/decorators/keycode" className="t-dec-none vertical-center" onClick={scrollUp}>
                            <img className="block-center img-border w-80" src="images/Library/Decorators/Keycode/Keycode - 03.jpg" alt=""/>            
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mar-bottom-3">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <a href="/#/magikus/decorators/collapse" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Collapse</h4></a>
                        <p className="pad-left-3">
                            The Collapse decorator enhances Unity's Inspector by making complex data structures collapsible, improving usability, organization and overall data visualization.
                        </p>
                    </div>
                    <div className="p-2 col-lg-5 col-md-12">
                        <a href="/#/magikus/decorators/collapse" className="t-dec-none vertical-center" onClick={scrollUp}>
                            <img className="block-center img-border w-80" src="images/Library/Decorators/Collapse/Collapse - 03.gif" alt=""/>            
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mar-bottom-3">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <a href="/#/magikus/decorators/line" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Line</h4></a>
                        <p className="pad-left-3">
                            The <b2>[Line]</b2> attribute enhances Unity Inspector layout by creating customizable dividers between fields, improving organization, readability and workflow flexibility.
                        </p>
                    </div>
                    <div className="p-2 col-lg-5 col-md-12">
                        <a href="/#/magikus/decorators/line" className="t-dec-none vertical-center" onClick={scrollUp}>
                            <img className="block-center img-border w-80" src="images/Library/Decorators/Line/Line - 02.jpg" alt=""/>            
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mar-bottom-3">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <a href="/#/magikus/decorators/title" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Title</h4></a>
                        <p className="pad-left-3">
                            The <b2>[Title]</b2> attribute enhances the Unity Inspector by adding customizable, visually appealing headers above fields, improving readability, organization and user experience.
                        </p>
                    </div>
                    <div className="p-2 col-lg-5 col-md-12">
                        <a href="/#/magikus/decorators/title" className="t-dec-none vertical-center" onClick={scrollUp}>
                            <img className="block-center img-border w-80" src="images/Library/Decorators/Title/Title - 06.jpg" alt=""/>            
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mar-bottom-3">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <a href="/#/magikus/decorators/message" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Message</h4></a>
                        <p className="pad-left-3">
                            The <b2>[Message]</b2> attribute enhances the Unity Inspector by allowing developers to add informative messages directly within the interface, improving readability, context and user guidance.
                        </p>
                    </div>
                    <div className="p-2 col-lg-5 col-md-12">
                        <a href="/#/magikus/decorators/message" className="t-dec-none vertical-center" onClick={scrollUp}>
                            <img className="block-center img-border w-80" src="images/Library/Decorators/Message/Message - 04.jpg" alt=""/>            
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mar-bottom-3">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <a href="/#/magikus/decorators/bar" className="t-dec-none" onClick={scrollUp}><h4 className="c-light-1 c-light-3-h p-3">Bar</h4></a>
                        <p className="pad-left-3">
                            The <b2>[Bar]</b2> attribute allows for intuitive visualization of float values as progress bars in Unity's Inspector, ideal for displaying metrics like health or experience.
                        </p>
                    </div>
                    <div className="p-2 col-lg-5 col-md-12">
                        <a href="/#/magikus/decorators/bar" className="t-dec-none vertical-center" onClick={scrollUp}>
                            <img className="block-center img-border w-80" src="images/Library/Decorators/Bar/Bar - 04.jpg" alt=""/>            
                        </a>
                    </div>
                </div>
            </div>

{/* 
*/}
       </div>
    );
}