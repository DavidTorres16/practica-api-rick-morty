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
                    <p>{item.status}-{item.species}</p>
                </div>
                <div className="ultimaLocacion">
                    <h3>Ultima locación conocida</h3>
                    <p>(ultima locación)</p>
                </div>
                <div className="primeraVezVisto">
                    <h3>Visto por primera vez</h3>
                    <p>(primera vez)</p>
                </div>
            </div>
        </div>
    )
}
