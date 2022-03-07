import styled from "styled-components";

import Navbar from "../navbar/Navbar";
import Section1 from "./Section1";
import Section2 from "./Section2";

import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";


const MainContainer = styled.div`
margin: 0 10%;
`

const Section = styled.div`
display: flex
`
function About() {


    return (
        <MainContainer>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4>
            </Section4>
            <Section5 />


        </MainContainer>
    )
}

export default About;