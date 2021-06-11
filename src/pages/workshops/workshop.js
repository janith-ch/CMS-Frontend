import React from "react";
import "../../app/App.css";
import Footer from "../../components/home/Footer";
import Navbar from "../../components/home/Navbar";
import WorkshopModel from '../../components/workshop/Workshop';
function Workshop(){
    return (
        <>
            <Navbar/>
            <WorkshopModel/>
            <Footer />
        </>
    );
}

export default Workshop;