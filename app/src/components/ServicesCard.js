import React from 'react'

export default function ServicesCard({ title, img, description }) {
    return (

        <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card p-4">
                <img src={img} className="card-img-top" alt="Frontend" />
                <div className="card-body text-center">
                    <h3>{title}</h3>
                    <p className="card-text text-center">{description}</p>
                </div>
            </div>
        </div>

    )
}




































