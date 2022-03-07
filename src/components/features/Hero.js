import styled from "styled-components";
import arrow from "../../images/arrow.png"
import illustration from "../../images/features.svg"


const HeroContainer = styled.div`

background-color: rgb(28,30,83);
height: 760px;


@media (max-width: 768px) {
    height: auto;
}
`

const FlexContainer = styled.div`
display: flex;
justify-content: center;

@media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
}
`

const LeftComponent = styled.div`
width: 542px;
margin-top: 170px;
margin-left: 50px;
color: white;
@media (max-width: 768px) {
    width: 100vw;
    margin: 5%;
    margin-left: 0;
    
}
`
const RightComponent = styled.div`
margin-top: 170px;
margin-left: 50px;
@media (max-width: 768px){
    margin: 0;
}
`
const H1 = styled.h1`
text-align: center;
`

const P = styled.p`
margin-top: 20px;
margin-left: 20px;
margin-right: 20px;
`
const ButtonsContainer = styled.div`
display: flex;
justify-content: center;
gap: 40px;
margin-top: 30px;
`

const Button = styled.button`
padding: 18px 40px;
border-radius: 41px;
border: none;
background: #FCD980;
color: black;
font-family: 'Poppins', sans-serif;
font-weight: 500;
font-size: 16px;
`
const ViewPricingContainer = styled.div`
display: flex;
gap: 20px;
`

const ViewPrice = styled.p`
margin-top: 10px;
opacity: 0.7;
`

const Illustration = styled.img`
@media (max-width: 768px) {
    width: 80%;
    align-self: center;
   margin-bottom: 20px;
   margin-left: 40px;
}

`

function Hero() {
    return (
        <HeroContainer>
            <FlexContainer>
                <LeftComponent>
                    <H1>All the features you need</H1>
                    <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</P>
                </LeftComponent>
                <RightComponent>
                    <Illustration src={illustration} />
                </RightComponent>
            </FlexContainer>
        </HeroContainer>
    )
}

export default Hero;