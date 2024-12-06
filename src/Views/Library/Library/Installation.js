import React from "react";

export default function Function() {

    let scrollUp = () => { window.scrollTo({ top: 0, behavior: "smooth" }); }

    return (
        <div className="c-light-2">
            <h1 className="text-center pad-top-4">Magikus Library</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Installation
            </h6>
            
            <h2 className="p-2">Overview</h2>
            <p className="pad-left-2">
                Getting started with the Magikus Library is straightforward and quick. Follow the steps below to
                integrate it into your Unity project:
            </p>
            <h3 className="c-light-1 pad-left-3">Get the Package</h3>
            <p className="pad-left-3">
                Download the <b1>Magikus Library</b1> package for free from the Unity Asset Store and start using the powerful tools it offers.
                <br/>
                For even more advanced features, explore our premium package, <b1>Magikus Library Pro</b1>, which includes a suite of additional tools to enhance your workflow.                    
                <br/>
                You can get both packages at this <a className="t-dec-none c-light-0 c-light-4-h" href="https://assetstore.unity.com/publishers/72471" target="_blank"> link </a>.
            </p>
            <h3 className="c-light-1 pad-left-3">Import the Package into your Unity Project</h3>
            <p className="pad-left-3">
                In the Unity Editor, navigate to <b1>Assets -{">"} Import Package -{">"} Custom Package</b1> and select the Magikus Library package file you downloaded.
            </p>
            <img className="block-center mar-bottom-3 img-border w-40" src="images/Library/Library/Library - 01.jpg" alt=""/>            
            <p className="pad-left-3">
                After successful import, you should see the Magikus Library components available in your project's assets.
            </p>
            <h3 className="c-light-1 pad-left-3">Use the Namespace</h3>
            <p className="pad-left-3">
                    To begin using the library in your scripts, make sure to include the "<b2>using</b2> <b1>Magikus</b1>" statement at the top of each script. 
            </p>
            <img className="block-center mar-bottom-3 img-border w-40" src="images/Library/Library/Library - 02.jpg" alt=""/>            
            <p className="pad-left-3">
                    This will allow you to access all the features and tools provided by the Magikus Library. 
                    Keep in mind that all the classes, methods and utilities of the library are organized within the Magikus namespace. 
            </p>
        </div>
    );
}