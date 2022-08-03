import React from "react";
import CardHolder from "Components/CardHolder";
import Products from "Data/Products.json";

export default function Function() {
    return (
        <div>
            <CardHolder cards={Products} />
        </div>
    );
}