import React, { useEffect } from 'react';
import Header from './Home/header';
import Landing from './Home/landing';
import Intro from './Home/intro';

const Home = () => {

   
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);

    
    return (
        <>
            <Header />
            <Landing />
            <Intro />
        </>
    )
}

export default Home;