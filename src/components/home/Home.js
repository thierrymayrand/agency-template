import Hero from "./Hero";
import Section1 from "./Section1";
import Section2 from "./Section2";
import styled from "styled-components";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";

import Footer from "../Footer";


const MainContainer = styled.div`
display: flex;
flex-direction: column;
`

function Home() {


    return (
        <MainContainer>
            <Hero />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />



        </MainContainer>
    )
}

export default Home;