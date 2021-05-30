import React from 'react'

export default function About() {
    return (
        <div>
            <div className={`container`}>
                <div className={`row mb-5`}>
                    <div className={`ml-auto mr-auto text-center col-md-8`}>
                        <h2 className={`title`}>À propos de nous</h2>
                        <h4 className={`description`}>
                            Le service KOOLI permet aux coopératives à
                            Madagascar de digitaliser les informations
                            concernant les acteurs (Voyageurs, Coopératives,
                            Propriétaires des voitures) des transports
                            terrestresNous vous donnons les matériels et
                            infrastructures informatiques dont vous avez besoin
                        </h4>
                    </div>
                </div>
            </div>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`ml-auto mr-auto col-md-8`}>
                        <span className={`badge badge-warning`}>Insight</span>
                        <h1 className={`title`}>
                            Impact socio-environnemental
                        </h1>
                    </div>
                </div>
                <div className={`row text-center`}>
                    <div className={`col-md-3`}>
                        <div className={`info info-hover`}>
                            <div className={`icon icon-primary`}>
                                <i className={`tim-icons icon-user-run`}></i>
                            </div>
                            <h4 className={`info-title`}>Digitalisation</h4>
                            <p className={`description`}>
                                Gain access to the demographics, psychographics,
                                and location of unique people.
                            </p>
                        </div>
                    </div>
                    <div className={`col-md-3`}>
                        <div className={`info info-hover`}>
                            <div className={`icon icon-primary`}>
                                <i className={`tim-icons icon-user-run`}></i>
                            </div>
                            <h4 className={`info-title`}>
                                Traçage des voyageurs
                            </h4>
                            <p className={`description`}>
                                Gain access to the demographics, psychographics,
                                and location of unique people.
                            </p>
                        </div>
                    </div>
                    <div className={`col-md-3`}>
                        <div className={`info info-hover`}>
                            <div className={`icon icon-primary`}>
                                <i className={`tim-icons icon-user-run`}></i>
                            </div>
                            <h4 className={`info-title`}>
                                Outils de décision pour les dirigeants
                            </h4>
                            <p className={`description`}>
                                Gain access to the demographics, psychographics,
                                and location of unique people.
                            </p>
                        </div>
                    </div>
                    <div className={`col-md-3`}>
                        <div className={`info info-hover`}>
                            <div className={`icon icon-primary`}>
                                <i className={`tim-icons icon-user-run`}></i>
                            </div>
                            <h4 className={`info-title`}>
                                Dématérialisation et impression
                            </h4>
                            <p className={`description`}>
                                Gain access to the demographics, psychographics,
                                and location of unique people.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
