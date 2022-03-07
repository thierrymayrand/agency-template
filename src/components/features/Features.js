import styled from "styled-components"
import Section5 from "../about/Section5";
import Section5H from "../home/Section5";
import Hero from "./Hero";
import { ImageRight, ImageLeft } from "../about/FlexComponents";


const MainContainer = styled.div`

`

const Margin = styled.div`
margin: 0 10%;
`
function Features() {
    return (
        <MainContainer>
            <Hero />
            <Margin>
                <Section5 />
                <ImageRight title="Top agencies and freelancers around the world use 
Client-first " subtitle="24/7 Support" />
                <ImageLeft title="Get free Revisions and one week of free maintenance" subtitle="Free Revision Rounds" />
                <ImageRight title="Working with us, you will be getting 24/7 priority support " subtitle="Use Client-first" />
                <ImageLeft title="Guranteed 1 week delivery for standard five pager website" subtitle="Quick Delivery" />

            </Margin>
            <Section5H />

        </MainContainer>

    )
}

export default Features;