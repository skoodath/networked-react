import React, { useEffect, useRef } from 'react';
import Header from './Home/header';
import Landing from './Home/landing';
import Intro from './Home/intro';
import Fellowship from './Home/fellowship';
import Seasons from '../components/Home/seasons';

const Home = () => {

    const homeRef = useRef(null);

    useEffect(() => {
        homeRef.current.scrollIntoView({
        alignToTop: true
        });
    }, [])
    
    return (
        <div ref={homeRef}>
            <Header />
            <Landing/>
            <Intro />
            <Fellowship />
            <Seasons />
        </div>
    )
}

export default Home;