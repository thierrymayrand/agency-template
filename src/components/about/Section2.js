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
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</P>
                    </TopSection>
                    <TopSection>
                        <Title>Continuous improvement</Title>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</P>
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