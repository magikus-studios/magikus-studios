import React from "react";
import CardHolder from "Components/CardHolder";
import Products from "Data/Products.json";

export default function Function() {
    return (
        <div className="container c-light-2 bg-dark-4 pb-5">
            <CardHolder cards={Products} />
            <div className="bg-dark-4 pb-5"></div>
        </div>
        
    );
}