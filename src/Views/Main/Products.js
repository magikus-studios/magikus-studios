import React from "react";
import CardHolder from "Components/CardHolder";
import Products from "Data/Products.json";

export default function Function() {
    return (
        <div>
            <h1 className="c-light-2">Magikus Library</h1>
            <p>The Magikus Library is a C# framework for game development in Unity3D. It provides static methods, data structures and component tools that speeds up development times.</p>
            <CardHolder cards={Products} />
        </div>
    );
}