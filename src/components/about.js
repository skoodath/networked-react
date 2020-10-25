import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import SubHeader from './subheaders';
import SubText from './subtext';
import LearnMore from './learnmore';
import AboutPara from './About/aboutpara';
import WhoCan from './About/whocan';
import JoinUs from './About/joinform';
import Benefit from './About/benefits';

const Styledabout = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  background-color: ${ props => props.theme.main };
`;

Styledabout.defaultProps = {
  theme: {
    main: "#fff"
  }
}

const theme = {
  main: "#ffd54d"
};

const About = () => {
    return (
      <>
        <Styledabout>
          <SubHeader text={`networked`} smalltext={`About`} />
          <SubText
            text={`NetworkED is an initiative that introduces this new way of thinking to children, using real-world networks`}
          />
          <LearnMore />
        </Styledabout>
        <Styledabout>
          <AboutPara />
        </Styledabout>
        <ThemeProvider theme={theme}>
          <Styledabout >
            <Benefit />
          </Styledabout>
        </ThemeProvider>
        <Styledabout>
          <WhoCan />
        </Styledabout>
        <Styledabout>
          <JoinUs />
        </Styledabout>
      </>
    );
}

export default About;