import axios from 'axios'
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
                    <h3> Ultima Locacion </h3>
                    <p>{item.location.name}</p>
                </div>
                <div className="origen">
                    <h3>Origen </h3>
                    <p>{item.origin.name}</p>
                </div>
                <div className="primeraVezVisto">
                    <h3>Fecha de Creación</h3>
                    <p>{item.created}</p>
                </div>
            </div>
        </div>
    )
}
