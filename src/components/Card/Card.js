import axios from 'axios'
import React from 'react'

export default function Card({ item }) {
    
    
    return (
        
        <div className="d-flex mx-2 flex-row border border-light bg-dark shadow p-3 mb-5 rounded">
            <div className="d-flex">
                <img className="" src={item.image} alt=""></img>
            </div>
            <div className="d-flex flex-column ms-2 me-1 bg-secondary p-3 rounded">
                <div className="d-flex flex-column">
                    <h2 className="text-light">{item.name}</h2>
                    <p className="text-light">{item.status}-{item.species}</p>
                </div>
                <div className="d-flex flex-column">
                    <h3 className="text-light"> Ultima Locacion </h3>
                    <p className="text-light">{item.location.name}</p>
                </div>
                <div className="d-flex flex-column">
                    <h3 className="text-light">Origen </h3>
                    <p className="text-light">{item.origin.name}</p>
                </div>
                <div className="d-flex flex-column justify-content-start">
                    <h3 className="text-light">Fecha de Creación</h3>
                    <p className="text-light">{item.created}</p>
                </div>
            </div>
        </div>
    )
}
