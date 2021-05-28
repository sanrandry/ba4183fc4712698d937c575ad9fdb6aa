import React from "react";

export default function TestModal() {
    return (
        <>
            {/* <!-- Sart Modal --> */}
            <div
                className="modal fade"
                id="myModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header justify-content-center">
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-hidden="true"
                            >
                                <i className="tim-icons icon-simple-remove"></i>
                            </button>
                            <h4 className="title title-up">Modal title</h4>
                        </div>
                        <div className="modal-body">
                            <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live
                                in Bookmarksgrove right at the coast of the
                                Semantics, a large language ocean. A small river
                                named Duden flows by their place and supplies it
                                with the necessary regelialia. It is a
                                paradisematic country, in which roasted parts of
                                sentences fly into your mouth.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default">
                                Nice Button
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--  End Modal --> */}
            {/* <!-- Mini Modal --> */}
            <div
                className="modal fade modal-mini modal-primary modal-mini"
                id="myModal1"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header justify-content-center">
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-hidden="true"
                            >
                                <i className="tim-icons icon-simple-remove text-white"></i>
                            </button>
                            <div className="modal-profile">
                                <i className="tim-icons icon-single-02"></i>
                            </div>
                        </div>
                        <div className="modal-body">
                            <p>Always have an access to your profile</p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-link btn-neutral"
                            >
                                Back
                            </button>
                            <button
                                type="button"
                                className="btn btn-link btn-neutral"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end Mini Modal --> */}
            {/* <!-- Form Modal --> */}
            <div
                className="modal fade modal-black"
                id="myModal2"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header justify-content-center">
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-hidden="true"
                            >
                                <i className="tim-icons icon-simple-remove text-white"></i>
                            </button>
                            <div className="text-muted text-center ml-auto mr-auto">
                                <h3 className="mb-0">Sign in with</h3>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="btn-wrapper text-center">
                                <a
                                    href="#"
                                    className="btn btn-neutral btn-icon"
                                >
                                    <img src="/assets/img/github.svg" />
                                </a>
                                <a
                                    href="#"
                                    className="btn btn-neutral btn-icon"
                                >
                                    <img src="/assets/img/google.svg" />
                                </a>
                            </div>
                            <div className="text-center text-muted mb-4 mt-3">
                                <small>Or sign in with credentials</small>
                            </div>
                            <form role="form">
                                <div className="form-group mb-3">
                                    <div className="input-group input-group-alternative">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="tim-icons icon-email-85"></i>
                                            </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            placeholder="Email"
                                            type="email"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group input-group-alternative">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="tim-icons icon-key-25"></i>
                                            </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            placeholder="Password"
                                            type="password"
                                        />
                                    </div>
                                </div>
                                <div className="form-check mt-3">
                                    <label className="form-check-label">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            checked
                                        />
                                        <span className="form-check-sign"></span>
                                        Remember me!
                                    </label>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="button"
                                        className="btn btn-primary my-4"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Form Modal --> */}
        </>
    );
}
