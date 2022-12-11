import React from 'react'
import Footer from '../Components/Shared/Footer'
import { About } from './About'
import Contact from './Contact'
import Header from './Header'
import Projects from './Projects'
import Skills from './Skills'

const Home = () => {
    return (
        <>
            <Header />
            {/* <Hero /> */}
            <Skills />
            <Projects />
            <About />
            <Contact />
            <Footer />

        </>
    )
}

export default Home