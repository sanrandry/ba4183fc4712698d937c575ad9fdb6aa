import React from "react";

export default function FrontEndLayoutNavbar() {
    return (
        <nav
            className="navbar navbar-expand-lg fixed-top navbar-transparent p-0"
            color-on-scroll="100"
        >
            <div className="container">
                <div className="navbar-translate">
                    <a
                        className="navbar-brand"
                        href="#"
                        rel="tooltip"
                        title="Kooli"
                        data-placement="bottom"
                        target="_blank"
                    >
                        <img
                            alt="Our logo"
                            className="img-fluid"
                            src={"/images/logo.png"}
                            width="65"
                        />
                    </a>
                    <button
                        className="navbar-toggler navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navigation"
                        aria-controls="navigation-index"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-bar bar1"></span>
                        <span className="navbar-toggler-bar bar2"></span>
                        <span className="navbar-toggler-bar bar3"></span>
                    </button>
                </div>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navigation"
                >
                    <div className="navbar-collapse-header">
                        <div className="row">
                            <div className="col-6 collapse-brand">
                                <a>Kooli•</a>
                            </div>
                            <div className="col-6 collapse-close text-right">
                                <button
                                    type="button"
                                    className="navbar-toggler"
                                    data-toggle="collapse"
                                    data-target="#navigation"
                                    aria-controls="navigation-index"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <i className="tim-icons icon-simple-remove"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item p-0">
                            <a className="nav-link" href="#">
                                <p className="">Accueil</p>
                            </a>
                        </li>
                        <li className="dropdown nav-item">
                            <a
                                href="#"
                                className="dropdown-toggle nav-link"
                                data-toggle="dropdown"
                            >
                                <i className="fa fa-cogs d-lg-none d-xl-none"></i>
                                Services
                            </a>
                            <div className="dropdown-menu dropdown-with-icons">
                                <a href="#" className="dropdown-item">
                                    <img
                                        alt="Our logo"
                                        className="img-fluid mr-2"
                                        src={"/images/koolico.png"}
                                        width="50"
                                    />
                                    KooliCo
                                </a>
                                <a
                                    href="examples/register-page.html"
                                    className="dropdown-item"
                                >
                                    <img
                                        alt="Our logo"
                                        className="img-fluid mr-2"
                                        src={"/images/koolivo.png"}
                                        width="50"
                                    />
                                    KooliVo
                                </a>
                            </div>
                        </li>
                        <li className="nav-item p-0">
                            <a className="nav-link" href="#">
                                <p className="">Réservation de voyage</p>
                            </a>
                        </li>
                        <li className="nav-item p-0">
                            <a className="nav-link" href="#">
                                <p className="">À propos de nous</p>
                            </a>
                        </li>
                        <li className="nav-item p-0">
                            <a className="nav-link" href="#">
                                <p className="">Contact</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link btn btn-default d-none d-lg-block btn-warning">
                                S'inscrire / Se connecter
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
