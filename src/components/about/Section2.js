import styled from "styled-components";
import img from "../../images/man.png"
const Section = styled.div`
background: #F4F5F5;
`
const Top = styled.div`
display: flex;
@media (max-width: 768px) {
    flex-direction: column;
}
`
const TopSection = styled.div`
width: 50%;
@media (max-width: 768px) {
    width: 100%
}

`
const TopTitle = styled.div`

padding: 10%;

`

const SubT = styled.h6`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 28px;
@media (max-width: 768px) {
    display: none;
}
`

const Title = styled.h2`
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 38px;
line-height: 56px;
margin-bottom: 20px;
color: #282938;
@media (max-width: 768px) {
    line-height: 40px;
    margin-top: 20px;
}
`
const P = styled.p`
color: black;
width: 80%;
@media(max-width: 768px) {
    width: 100%;
}
`

const BottomSection = styled.div`
width: 100%;
`
const Img = styled.img`
width: 100%;

`
function Section2() {
    return (
        <Section>
            <TopTitle>
                <SubT>Who we are</SubT>
                <Top>
                    <TopSection>

                        <Title>Goal focussed</Title>
                        <P>Digital agency focused on creative and results-driven solutions. Whether it’s to increase profits, provide support, sell products or promote your brand, allow our web design services to bring your company front and center.</P>
                    </TopSection>
                    <TopSection>
                        <Title>Continuous improvement</Title>
                        <P>Every web and marketing professional here at TITI understands the importance of being a client-first digital agency that places unparalleled value on building long-term relationships, providing superb customer service and developing high-quality web-based solutions.</P>
                    </TopSection>
                </Top>
            </TopTitle>
            <BottomSection>
                <Img src={img} />
            </BottomSection>
        </Section>
    )
}

export default Section2;