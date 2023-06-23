import React from "react";
import './Cards.css'

export default function Cards() {
    const  [cards] = React.useState([
        {
            title: "card 1",
            text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iure eius quod laborum! Quam dolore
            impedit, temporibus doloribus rem dolor voluptatibus quasi expedita officiis autem, vitae
            iste ut! Illo, facere.`

        },
        {
            title: "card 2",
            text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iure eius quod laborum! Quam dolore
            impedit, temporibus doloribus rem dolor voluptatibus quasi expedita officiis autem, vitae
            iste ut! Illo, facere.`

        },
        {
            title: "card 3",
            text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iure eius quod laborum! Quam dolore
            impedit, temporibus doloribus rem dolor voluptatibus quasi expedita officiis autem, vitae
            iste ut! Illo, facere.`

        },
        
    ])
    return (
        <div>
            <section>
                <div className="container">
                    <h3>Responsive Cards</h3>
                    <div className="cards">
                        {cards.map((card,index)=>(
                            <div key= {index} className="card">
                            <h1>{card.title}</h1>
                            <p>{card.text}</p>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </section>
        </div>
    )
}