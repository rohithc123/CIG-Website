import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Loader from "./component/Loader"
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
        <Loader/>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout