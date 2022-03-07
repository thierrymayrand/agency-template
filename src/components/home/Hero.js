import styled from "styled-components";
import arrow from "../../images/arrow.png"
import illustration from "../../images/Illustration.png"


const HeroContainer = styled.div`

background-color: rgb(28,30,83);


`

const FlexContainer = styled.div`
display: flex;
justify-content: center;
@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
}
`

const LeftComponent = styled.div`
width: 542px;
margin-top: 170px;
margin-left: 50px;
color: white;

@media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
    margin-left: 0;
    margin-right: 0;
}
`
const RightComponent = styled.div`
margin-top: 170px;
margin-left: 50px;
@media (max-width: 768px) {
    margin-top: 10px;
    margin-left: 0;
}
`
const H1 = styled.h1`
@media (max-width: 768px) {
    text-align: center;
    
}

`

const P = styled.p`

text-align: center;
margin: 50px 10px;
margin-bottom: 0;
`
const ButtonsContainer = styled.div`
display: flex;
margin-top: 30px;
justify-content: center;


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
width: 90%;
margin: 10px 10px;
`

function Hero() {
    return (
        <HeroContainer>
            <FlexContainer>
                <LeftComponent>
                    <H1>Building Stellar websites for early startups</H1>
                    <P>Our roots come from the best experts in web development, software development, SaaS development, application development, programming, UX/UI design and architects.</P>
                    <ButtonsContainer>
                        <Button>View our work</Button>


                    </ButtonsContainer>
                </LeftComponent>
                <RightComponent>
                    <Illustration src={illustration} />
                </RightComponent>
            </FlexContainer>
        </HeroContainer>
    )
}

export default Hero;