import React from "react";

export default function SectionNotification() {
    return (
        <div className="section section-notifications" id="notifications">
            <div className="container">
                <div className="space"></div>
                <h3>Notifications</h3>
                <div className="alert alert-primary alert-with-icon">
                    <button
                        type="button"
                        aria-hidden="true"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                    >
                        <i className="tim-icons icon-simple-remove"></i>
                    </button>
                    <span
                        data-notify="icon"
                        className="tim-icons icon-coins"
                    ></span>
                    <span>
                        <b> Congrats! - </b> This is a regular notification made
                        with ".alert-primary"
                    </span>
                </div>
                <div className="alert alert-info alert-with-icon">
                    <button
                        type="button"
                        aria-hidden="true"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                    >
                        <i className="tim-icons icon-simple-remove"></i>
                    </button>
                    <span
                        data-notify="icon"
                        className="tim-icons icon-trophy"
                    ></span>
                    <span>
                        <b> Heads up! - </b> This is a regular notification made
                        with ".alert-info"
                    </span>
                </div>
                <div className="alert alert-success alert-with-icon">
                    <button
                        type="button"
                        aria-hidden="true"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                    >
                        <i className="tim-icons icon-simple-remove"></i>
                    </button>
                    <span
                        data-notify="icon"
                        className="tim-icons icon-bell-55"
                    ></span>
                    <span>
                        <b> Well done! - </b> This is a regular notification
                        made with ".alert-success"
                    </span>
                </div>
                <div className="alert alert-warning alert-with-icon">
                    <button
                        type="button"
                        aria-hidden="true"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                    >
                        <i className="tim-icons icon-simple-remove"></i>
                    </button>
                    <span
                        data-notify="icon"
                        className="tim-icons icon-bulb-63"
                    ></span>
                    <span>
                        <b> Warning! - </b> This is a regular notification made
                        with ".alert-warning"
                    </span>
                </div>
                <div className="alert alert-danger alert-with-icon">
                    <button
                        type="button"
                        aria-hidden="true"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                    >
                        <i className="tim-icons icon-simple-remove"></i>
                    </button>
                    <span
                        data-notify="icon"
                        className="tim-icons icon-support-17"
                    ></span>
                    <span>
                        <b> Oh snap! - </b> This is a regular notification made
                        with ".alert-danger"
                    </span>
                </div>
            </div>
        </div>
    );
}
