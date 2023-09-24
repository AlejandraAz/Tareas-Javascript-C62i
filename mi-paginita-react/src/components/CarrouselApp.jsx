import React from 'react';
import montaña from "../assets/hermoso-paisaje-montana.jpg"
import atardecer from "../assets/reflejo.jpg"
import paisaje from "../assets/paisaje.jpg"
import playa from "../assets/playa.jpg"
import "../css/carrousel.css";

const CarrouselApp = () => {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade " data-bs-ride="carousel">
            <div className="carousel-inner el-container-carousel">
                <div className="elCarousel carousel-item active">
                    <img src={atardecer} className="opacity-75  d-block w-100 " alt="atardecer" />
                    <div className="carousel-caption d-none d-md-block">
                        <h2 className="img-title fw-bold text-primary-emphasis">Turismo de Cordoba</h2>
                        <p className="text-light bg-dark img-subtitle"><strong>Casco Histórico: Plaza Central San
                            Martín.</strong></p>
                    </div>
                </div>
                <div className="elCarousel carousel-item">
                    <img src={montaña} className="opacity-75 d-block w-100" alt="montaña" />
                    <div className="carousel-caption d-none d-md-block">
                        <h2 className="img-title fw-bold text-danger-emphasis">Turismo de Cordoba</h2>
                        <p className="text-light bg-dark img-subtitle"><strong>Casco Histórico: Plaza Central San
                            Martín.</strong></p>
                    </div>
                </div>
                <div className="elCarousel carousel-item">
                    <img src={paisaje} className="opacity-75 d-block w-100" alt="paisaje" />
                    <div className="carousel-caption d-none d-md-block">
                        <h2 className="img-title fw-bold text-danger-emphasis">Turismo de Cordoba</h2>
                        <p className="text-light bg-dark img-subtitle"><strong>Casco Histórico: Plaza Central San
                            Martín.</strong></p>
                    </div>
                </div>
                <div className="elCarousel carousel-item">
                    <img src={playa} className="opacity-75 d-block w-100 " alt="playa" />
                    <div className="carousel-caption d-none d-md-block">
                        <h2 className="img-title fw-bold  text-danger-emphasis">Turismo de Cordoba</h2>
                        <p className="text-light bg-dark img-subtitle"><strong>Casco Histórico: Plaza Central San
                            Martín.</strong></p>
                    </div>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

        </div>
    )
}

export default CarrouselApp