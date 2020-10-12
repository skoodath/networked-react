import React from 'react';
import Header from './Home/header';
import Landing from './Home/landing';
import Intro from './Home/intro';
import Fellowship from './Home/fellowship';
import Hero from '../components/Home/hero';
import Seasons from '../components/Home/seasons';

const Home = () => {
    return (
        <>
            <Header />
            <Landing />
            <Intro />
            <Hero />
            <Fellowship />
            <Seasons />
        </>
    )
}

export default Home;