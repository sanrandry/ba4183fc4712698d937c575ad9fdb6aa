import React from "react";

export default function SectionNavbar() {
    return (
        <div className="section section-navbars">
            <img src="assets/img/path3.png" className="path" />
            <div className="container" id="menu-dropdown">
                <div className="row">
                    <div className="col-md-6">
                        <h4>Menu</h4>
                        <nav className="navbar navbar-expand-lg bg-primary">
                            <div className="container">
                                <a className="navbar-brand" href="#">
                                    Menu
                                </a>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#example-navbar"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-bar bar1"></span>
                                    <span className="navbar-toggler-bar bar2"></span>
                                    <span className="navbar-toggler-bar bar3"></span>
                                </button>
                                <div
                                    className="collapse navbar-collapse"
                                    id="example-navbar"
                                >
                                    <ul className="navbar-nav">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="#">
                                                <p>Link</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <p>Link</p>
                                            </a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a
                                                className="nav-link dropdown-toggle"
                                                href="http://example.com"
                                                id="navbarDropdownMenuLink"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <p>Dropdown</p>
                                            </a>
                                            <div
                                                className="dropdown-menu"
                                                aria-labelledby="navbarDropdownMenuLink"
                                            >
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Action
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Another action
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Something else here
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="col-md-6">
                        <h4>Menu with Icons</h4>
                        <nav className="navbar navbar-expand-lg bg-info">
                            <div className="container">
                                <a className="navbar-brand" href="#">
                                    Icons
                                </a>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#example-navbar-icons"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-bar bar1"></span>
                                    <span className="navbar-toggler-bar bar2"></span>
                                    <span className="navbar-toggler-bar bar3"></span>
                                </button>
                                <div
                                    className="collapse navbar-collapse"
                                    id="example-navbar-icons"
                                >
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="#pablo"
                                            >
                                                <i
                                                    className="tim-icons icon-send"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="#pablo"
                                            >
                                                <i
                                                    className="tim-icons icon-single-02"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a
                                                href="#"
                                                className="nav-link dropdown-toggle"
                                                id="navbarDropdownMenuLink"
                                                data-toggle="dropdown"
                                            >
                                                <i
                                                    className="tim-icons icon-settings-gear-63"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
                                            <div
                                                className="dropdown-menu dropdown-menu-right"
                                                aria-labelledby="navbarDropdownMenuLink"
                                            >
                                                <a className="dropdown-header">
                                                    Dropdown header
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Action
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Another action
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Something else here
                                                </a>
                                                <div className="divider"></div>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Separated link
                                                </a>
                                                <div className="divider"></div>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    One more separated link
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <h3 className="title mb-3">Navigation</h3>
            </div>
            <div id="navbar">
                <div className="navigation-example">
                    {/* <!-- Navbar Primary  --> */}
                    <nav className="navbar navbar-expand-lg bg-primary">
                        <div className="container">
                            <div className="navbar-translate">
                                <a className="navbar-brand" href="#pablo">
                                    Primary color
                                </a>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#example-navbar-primary"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-bar bar1"></span>
                                    <span className="navbar-toggler-bar bar2"></span>
                                    <span className="navbar-toggler-bar bar3"></span>
                                </button>
                            </div>
                            <div
                                className="collapse navbar-collapse"
                                id="example-navbar-primary"
                            >
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#pablo">
                                            <i className="tim-icons icon-world"></i>{" "}
                                            Discover
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#pablo">
                                            <i className="tim-icons icon-single-02"></i>{" "}
                                            Profile
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#pablo">
                                            <i className="tim-icons icon-settings-gear-63"></i>{" "}
                                            Settings
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* <!-- End Navbar Primary --> */}
                    {/* <!-- Navbar Info --> */}
                    <nav className="navbar navbar-expand-lg bg-info">
                        <div className="container">
                            <div className="navbar-translate">
                                <a className="navbar-brand" href="#pablo">
                                    Info Color
                                </a>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#example-navbar-info"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-bar bar1"></span>
                                    <span className="navbar-toggler-bar bar2"></span>
                                    <span className="navbar-toggler-bar bar3"></span>
                                </button>
                            </div>
                            <div
                                className="collapse navbar-collapse"
                                id="example-navbar-info"
                            >
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#pablo">
                                            Discover
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#pablo">
                                            Profile
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#pablo">
                                            Settings
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* <!-- End Navbar Info --> */}
                    {/* <!-- Navbar Success --> */}
                    <nav className="navbar navbar-expand-lg bg-success">
                        <div className="container">
                            <div className="navbar-translate">
                                <a className="navbar-brand" href="#">
                                    Success Color
                                </a>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#example-navbar-success"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-bar bar1"></span>
                                    <span className="navbar-toggler-bar bar2"></span>
                                    <span className="navbar-toggler-bar bar3"></span>
                                </button>
                            </div>
                            <div
                                className="collapse navbar-collapse"
                                id="example-navbar-success"
                            >
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#pablo">
                                            <i className="tim-icons icon-world"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#pablo">
                                            <i className="tim-icons icon-single-02"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#pablo">
                                            <i className="tim-icons icon-settings-gear-63"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* <!-- End Navbar Success --> */}
                    {/* <!-- Navbar Warning --> */}
                    <nav className="navbar navbar-expand-lg bg-warning">
                        <div className="container">
                            <div className="navbar-translate">
                                <a className="navbar-brand" href="#pablo">
                                    Warning Color
                                </a>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#example-navbar-warning"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-bar bar1"></span>
                                    <span className="navbar-toggler-bar bar2"></span>
                                    <span className="navbar-toggler-bar bar3"></span>
                                </button>
                            </div>
                            <div
                                className="collapse navbar-collapse"
                                id="example-navbar-warning"
                            >
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#pablo">
                                            <i className="fab fa-facebook-square"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#pablo">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#pablo">
                                            <i className="fab fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#pablo">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* <!-- End Navbar Warning --> */}
                    {/* <!-- Navbar Danger --> */}
                    <nav className="navbar navbar-expand-lg bg-danger">
                        <div className="container">
                            <div className="navbar-translate">
                                <a className="navbar-brand" href="#pablo">
                                    Danger Color
                                </a>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#example-navbar-danger"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-bar bar1"></span>
                                    <span className="navbar-toggler-bar bar2"></span>
                                    <span className="navbar-toggler-bar bar3"></span>
                                </button>
                            </div>
                            <div
                                className="collapse navbar-collapse"
                                id="example-navbar-danger"
                            >
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#pablo">
                                            <i className="fab fa-facebook-square"></i>{" "}
                                            Share
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#pablo">
                                            <i className="fab fa-twitter"></i>{" "}
                                            Tweet
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#pablo">
                                            <i className="fab fa-pinterest"></i>{" "}
                                            Pin
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* <!-- End Navbar Danger --> */}
                    {/* <!-- Navbar Transparent --> */}
                    <nav className="navbar navbar-expand-lg navbar-transparent">
                        <div className="container">
                            <div className="navbar-translate">
                                <a className="navbar-brand" href="#pablo">
                                    Transparent
                                </a>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#example-navbar-transparent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-bar bar1"></span>
                                    <span className="navbar-toggler-bar bar2"></span>
                                    <span className="navbar-toggler-bar bar3"></span>
                                </button>
                            </div>
                            <div
                                className="collapse navbar-collapse"
                                id="example-navbar-transparent"
                            >
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#pablo">
                                            <i className="fab fa-facebook-square"></i>{" "}
                                            Facebook
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#pablo">
                                            <i className="fab fa-twitter"></i>{" "}
                                            Twitter
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#pablo">
                                            <i className="fab fa-instagram"></i>{" "}
                                            Instagram
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* <!-- End Navbar Transparent--> */}
                </div>
            </div>
        </div>
    );
}
