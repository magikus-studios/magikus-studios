import React from "react";
import Card from "./Card";

export default function Function(props) {
            
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row justify-content-center">
                {
                    props.cards.map((card, index) => {
                        return (
                            <div className="col-12 p-3" key={ index }>
                                <Card
                                    image={ card.image }
                                    title={ card.title }
                                    description={ card.description }
                                    link={ card.link } 
                                    newTab={ card.newTab }
                                    />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}