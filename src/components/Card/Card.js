import React from 'react'

export default function Card({ item }) {
    
    return (
        <div>
            <div className="col1">
                <img src={item.image} alt=""></img>
            </div>
            <div className="col2">
                <div className="tituloNombre">
                    <h2>{item.name}</h2>
                    <p></p>
                </div>
                <div className="ultimaLocacion">
                    <h3></h3>
                    <p></p>
                </div>
                <div className="primeraVezVisto">
                    <h3></h3>
                    <p></p>
                </div>
            </div>
        </div>
    )
}
