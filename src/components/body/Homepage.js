'use client'
import Navbar from "../navbar/Navbar";
import React, { useState } from 'react'
import Poster from "../poster/Poster";
import RowSection from "../row/RowSection";
import Footer from "../footer/Footer";
const Homepage = () => {

    return (
        <div  >
            <Navbar />
            <Poster />
            <RowSection />
            <Footer />
        </div>
    )
}

export default Homepage
