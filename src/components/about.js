import React from 'react'
import { ThemeProvider } from 'styled-components';
import SubHeader from './subheaders';
import SubText from './subtext';
import AboutPara from './About/aboutpara';
import WhoCan from './About/whocan';
import Benefit from './About/benefits';
import { Styledabout } from '../styles/aboutstyle';

const theme = {
  main: "#ffd54d"
};

const About = () => {

    return (
      <>
        <Styledabout hgt="100vh" >
          <SubHeader text={`networked`} smalltext={`About`} />
          <SubText
            text={`NetworkED is an initiative that introduces this new way of thinking to children, using real-world networks`}
          />
        </Styledabout>
        <Styledabout hgt="100vh">
          <AboutPara />
        </Styledabout>
        <ThemeProvider theme={theme}>
          <Styledabout>
            <Benefit />
          </Styledabout>
        </ThemeProvider>
        <Styledabout hgt="100vh">
          <WhoCan />
        </Styledabout>

      </>
    );
}

export default About;