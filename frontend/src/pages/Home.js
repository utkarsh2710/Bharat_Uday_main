import React, { useState } from 'react'
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import Info from '../components/infoSection/Info';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/infoSection/Data';
import Footer from '../components/footer/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <Info  {...homeObjOne} />
            <Info  {...homeObjTwo} />
            <Info  {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home
