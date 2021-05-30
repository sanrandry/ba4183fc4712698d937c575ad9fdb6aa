import React from 'react'

export default function FrontEndLayoutFooter() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h1 className="title">KOOLI•</h1>
                    </div>
                    <div className="col-md-3">
                        <ul className="nav">
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Accueil
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    À propos de nous
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Nos Service
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="nav">
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Nous-contactez
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    À propos de nous
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    License
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3 className="title">Follow us:</h3>
                        <div className="btn-wrapper profile">
                            <a
                                target="_blank"
                                href="https://twitter.com/creativetim"
                                className="btn btn-icon btn-neutral btn-round btn-simple"
                                data-toggle="tooltip"
                                data-original-title="Follow us"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                target="_blank"
                                href="https://www.facebook.com/creativetim"
                                className="btn btn-icon btn-neutral btn-round btn-simple"
                                data-toggle="tooltip"
                                data-original-title="Like us"
                            >
                                <i className="fab fa-facebook-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
