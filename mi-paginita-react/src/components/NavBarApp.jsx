import React from 'react';
import "../css/navBar.css";


const NavBarApp = () => {
    return (
        <header>
            <nav className="elnavbar navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand text-primary fw-bold" href="#">El informativo <i class="bi bi-info-circle"></i></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item me-5">
                                <a className="nav-link fw-bold" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item me-5">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    SECCIONES
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"> Ultimas noticias <i className="bi bi-caret-right-fill"></i></a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item d-flex justify-content-between" href="#">Deportes<i className="bi bi-caret-right-fill"></i></a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item d-flex justify-content-between" href="#">Economía<i className="bi bi-caret-right-fill"></i></a></li>
                                    <li><a className="dropdown-item d-flex justify-content-between" href="#">Espectaculos<i className="bi bi-caret-right-fill"></i></a></li>
                                    <li><a className="dropdown-item d-flex justify-content-between" href="#">Internacionales<i className="bi bi-caret-right-fill"></i></a></li>
                                    <li><a className="dropdown-item d-flex justify-content-between" href="#">Politica<i className="bi bi-caret-right-fill"></i></a></li>
                                    <li><a className="dropdown-item d-flex justify-content-between" href="#">Sociedad<i className="bi bi-caret-right-fill"></i></a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item d-flex justify-content-between text-muted" href="#">Nosotros<i className="bi bi-caret-right-fill"></i></a></li>
                                </ul>
                            </li>
                            <li className="nav-item ms-5">
                                <button className="btn btn-info rounded-5" href="#"><i class="bi bi-person-fill"></i></button>
                            </li>
                        </ul>
                        
                        
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"  />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBarApp;