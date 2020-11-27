import React, { useEffect } from 'react';
import Header from './Home/header';
import Landing from './Home/landing';
import Intro from './Home/intro';
import Fellowship from './Home/fellowship';
import Seasons from '../components/Home/seasons';

const Home = () => {

   
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);

    
    return (
        <>
            <Header />
            <Landing />
            <Intro />
            <Fellowship />
            <Seasons />
        </>
    )
}

export default Home;