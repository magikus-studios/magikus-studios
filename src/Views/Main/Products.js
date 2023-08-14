import React from "react";
import CardHolder from "Components/CardHolder";
import Products from "Views/Main/Products.json";

export default function Function() {
    return (
        <div className="container c-light-2 min-vh-100">
            <CardHolder cards={Products} />
        </div>
    );
}