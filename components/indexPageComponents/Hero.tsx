import React from "react";

export default function Hero() {
    return (
        <div className="page-header header-filter">
            {/* <div className="squares square1"></div>
            <div className="squares square2"></div> */}
            <div className="squares square3"></div>
            <div className="squares square4"></div>
            <div className="squares square5"></div>
            <div className="squares square6"></div>
            <div className="squares square7"></div>
            <div className="container">
                {/* <div className="content-center brand">
                    <h1 className="h1-seo">BLK•</h1>
                    <h3>
                        A beautiful Design System for Bootstrap 4. It's Free and
                        Open Source.
                    </h3>
                </div> */}
                <div className={`content-center`}>
                    <div
                        className={`row justify-content-between align-items-center text-left`}
                    >
                        <div className={`col-md-6 col-lg-6`}>
                            <h1 className="text-whit my-4">
                                Vous pouvez maintenant réserver votre voyage en
                                ligne <br />
                            </h1>
                            <div className="btn-wrapper profile">
                                <a
                                    target="_blank"
                                    href="https://twitter.com/creativetim"
                                    className="btn-icon btn-round btn btn-twitter"
                                    data-toggle="tooltip"
                                    data-original-title="Follow us"
                                >
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.facebook.com/creativetim"
                                    className="btn-icon btn-round btn btn-facebook"
                                    data-toggle="tooltip"
                                    data-original-title="Like us"
                                >
                                    <i className="fab fa-facebook-square"></i>
                                </a>
                            </div>
                        </div>
                        <div className={`col-md-5 col-lg-4`}>
                            <img
                                alt="Image indication"
                                className="img-fluid"
                                src={
                                    "/images/header.svg"
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
