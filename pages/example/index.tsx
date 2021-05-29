import React from "react";
import ExampleLayout from "../../components/layouts/example/ExampleLayout";
import Hero from "../../components/example/indexPageComponents/Hero";
import BasicElement from "../../components/example/indexPageComponents/BasicElement";
import SectionNavBar from "../../components/example/indexPageComponents/SectionNavbar";
import SectionTab from "../../components/example/indexPageComponents/SectionTab";
import SectionPagination from "../../components/example/indexPageComponents/SectionPagination";
import SectionNotification from "../../components/example/indexPageComponents/SectionNotification";
import SectionTypography from "../../components/example/indexPageComponents/SectionTypography";
import SectionJavascriptComponent from "../../components/example/indexPageComponents/SectionJavascriptComponent";
import SectionNucleoIcon from "../../components/example/indexPageComponents/SectionNucleoIcon";
import SectionSignup from "../../components/example/indexPageComponents/SectionSignup";
import SectionExample from "../../components/example/indexPageComponents/SectionExample";
import SectionDownload from "../../components/example/indexPageComponents/SectionDownload";
export default function index() {
    return (
        <ExampleLayout>
            <div className="wrapper example-index-page">
                <Hero></Hero>
                <div className="main">
                    <BasicElement></BasicElement>
                    <SectionNavBar></SectionNavBar>
                    <SectionTab></SectionTab>
                    <SectionPagination></SectionPagination>
                    <SectionNotification></SectionNotification>
                    <SectionTypography></SectionTypography>
                    <SectionJavascriptComponent></SectionJavascriptComponent>
                    <SectionNucleoIcon></SectionNucleoIcon>
                    <SectionSignup></SectionSignup>
                    <SectionExample></SectionExample>
                    <SectionDownload></SectionDownload>
                </div>
            </div>
        </ExampleLayout>
    );
}
