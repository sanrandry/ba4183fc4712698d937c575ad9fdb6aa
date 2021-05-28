import "../styles/globals.scss";
import "../styles/scss/blk-design-system.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                {/* <!--     Fonts and icons     --> */}
                <link
                    href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800"
                    rel="stylesheet"
                />
                <link
                    href="https://use.fontawesome.com/releases/v5.0.6/css/all.css"
                    rel="stylesheet"
                />
                {/* <!-- Nucleo Icons --> */}
                <link href="./assets/css/nucleo-icons.css" rel="stylesheet" />
                {/* <!--   Core JS Files   --> */}
                <script
                    src="/assets/js/core/jquery.min.js"
                    type="text/javascript"
                ></script>
                <script
                    src="/assets/js/core/popper.min.js"
                    type="text/javascript"
                ></script>
                <script
                    src="/assets/js/core/bootstrap.min.js"
                    type="text/javascript"
                ></script>
                <script src="/assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>
                {/* <!--  Plugin for Switches, full documentation here: http://www.jque.re/plugins/version3/bootstrap.switch/ --> */}
                <script src="/assets/js/plugins/bootstrap-switch.js"></script>
                {/* <!--  Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/ --> */}
                <script
                    src="/assets/js/plugins/nouislider.min.js"
                    type="text/javascript"
                ></script>
                {/* <!-- Chart JS --> */}
                <script src="/assets/js/plugins/chartjs.min.js"></script>
                {/* <!--  Plugin for the DatePicker, full documentation here: https://github.com/uxsolutions/bootstrap-datepicker --> */}
                <script src="/assets/js/plugins/moment.min.js"></script>
                <script
                    src="/assets/js/plugins/bootstrap-datetimepicker.js"
                    type="text/javascript"
                ></script>
                {/* <!-- Black Dashboard DEMO methods, don't include it in your project! --> */}
                <script src="/assets/demo/demo.js"></script>
                {/* <!-- Control Center for Black UI Kit: parallax effects, scripts for the example pages etc --> */}
                <script
                    src="/assets/js/blk-design-system.min.js?v=1.0.0"
                    type="text/javascript"
                ></script>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
export default MyApp;
