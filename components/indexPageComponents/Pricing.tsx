import React from "react";

export default function Pricing() {
    return (
        <div>
            <div className={`container`}>
                <div className={`row align-items-center`}>
                    <div className={`col-md-10 col-lg-5 mx-auto`}>
                        <h1 className={`title`}>Vous-êtes une coopérative</h1>
                        <p className={`description`}>
                            5,000 capacity venue, holding some of the latest
                            technology lighting with a 24 colour laser system
                            Amnesia is one of the islands most legendary clubs.
                        </p>
                        <div className={`row`}>
                            <div className={`mb-3 col-sm-8 col-md-12`}>
                                <div className={`form-group`}>
                                    <input
                                        type="text"
                                        className={`form-control`}
                                        value="Nom de votre coopérative"
                                    />
                                </div>
                                <div className={`form-group`}>
                                    <input
                                        type="email"
                                        className={`form-control`}
                                        value="Adresse email"
                                    />
                                </div>
                                <a
                                    href="#pablo"
                                    className={`btn-icon btn-round btn btn-info`}
                                >
                                    <i className={`tim-icons icon-send`}></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={`ml-auto col-md-12 col-lg-6`}>
                        <div className={`row`}>
                            <div className={`col-md-6`}>
                                <div className={`card-pricing card`}>
                                    <div className={`bg-info card-header`}>
                                        <span
                                            className={`badge-default badge badge-secondary`}
                                        >
                                            Starter
                                        </span>
                                        <h1 className={`card-title`}>
                                            <small>Ar </small>22
                                        </h1>
                                        <h5>par mois</h5>
                                    </div>
                                    <div className={`card-body`}>
                                        <ul>
                                            <li>
                                                <i
                                                    className={`tim-icons icon-check-2`}
                                                ></i>{" "}
                                                1000 MB
                                            </li>
                                            <li>
                                                <i
                                                    className={`tim-icons icon-email-85`}
                                                ></i>{" "}
                                                3 email
                                            </li>
                                            <li>
                                                <i
                                                    className={`tim-icons icon-chart-bar-32`}
                                                ></i>{" "}
                                                5 Databases
                                            </li>
                                            <li>
                                                <i
                                                    className={`tim-icons icon-alert-circle-exc`}
                                                ></i>{" "}
                                                No Support
                                            </li>
                                        </ul>
                                        <a
                                            href="#pablo"
                                            className={`mt-4 btn btn-info`}
                                        >
                                            Get started
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-md-6`}>
                                <div className={`card-pricing card`}>
                                    <div className={`bg-danger card-header`}>
                                        <span
                                            className={`badge-default badge badge-secondary`}
                                        >
                                            Pro
                                        </span>
                                        <h1 className={`card-title`}>
                                            <small>Ar </small>45
                                        </h1>
                                        <h5>par mois</h5>
                                    </div>
                                    <div className={`card-body`}>
                                        <ul>
                                            <li>
                                                <i
                                                    className={`tim-icons icon-check-2`}
                                                ></i>{" "}
                                                2000 MB
                                            </li>
                                            <li>
                                                <i
                                                    className={`tim-icons icon-email-85`}
                                                ></i>
                                                100 email
                                            </li>
                                            <li>
                                                <i
                                                    className={`tim-icons icon-chart-bar-32`}
                                                ></i>
                                                10 Databases
                                            </li>
                                            <li>
                                                <i
                                                    className={`tim-icons icon-alert-circle-exc`}
                                                ></i>
                                                Support
                                            </li>
                                        </ul>
                                        <a
                                            href="#pablo"
                                            className={`mt-4 btn btn-info`}
                                        >
                                            Get started
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}
