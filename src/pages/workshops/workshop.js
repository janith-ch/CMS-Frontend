import React from "react";
import "../../app/App.css";
import Footer from "../../components/home/Footer";
import Navbar from "../../components/home/Navbar";
import MainContent from "../../components/workshop/Workshop";
import Banner from "../../components/workshop/banner";
function Workshop(){
    return (
        <>
            <Navbar/>
            <Banner/>
            <MainContent/>
            <Footer />
        </>
    );
}

export default Workshop;