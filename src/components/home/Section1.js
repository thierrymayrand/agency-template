import styled from "styled-components";
import pointer from "../../images/pointer.png"

const SectionContainer = styled.div`

background: #F8F6FC;
margin-top: 0;

`
const FlexContainer = styled.div`
display: flex;
margin: 10% 20%;
@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 10% 10%;
}
`
const LeftContainer = styled.div`
width: 50%;
@media (max-width: 768px) {
    width: auto;
}
`
const Title = styled.h1`
`
const Subtitle = styled.p`
opacity: 0.8;
color: black;
margin-top: 10px;
`
const GetInTouchContainer = styled.div`
display: flex;
gap: 10px;
`

const GetInTouchText = styled.p`
font-size: 18px;
color: rgb(36,5,242);
margin-top: 10px;
`

const RightContainer = styled.div`

@media (max-width: 768px) {
    margin-top: 30px;
}
`
const CardContainer = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
@media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
}
`
const Card = styled.div`



`

const Pointer = styled.img`
width: 50px;
height: 50px;
`

const CardTitle = styled.h3`
color: rgb(40, 41, 56);
font-size: 32px;
margin-top: 10px;
`
const CardText = styled.p`
color: rgb(40, 41, 56);
font-size: 14px;
font-weight: 400;
margin-top: 10px;
`

function Section1() {
    return (
        <SectionContainer>
            <FlexContainer>
                <LeftContainer>
                    <Title>How we work</Title>
                    <Subtitle>
                        We make digital the starting point around which gravitate creativity and technology.</Subtitle>
                    <GetInTouchContainer>
                        <GetInTouchText>Get in touch with us</GetInTouchText>
                    </GetInTouchContainer>
                </LeftContainer>
                <RightContainer>

                    <CardContainer>
                        <Card>
                            <Pointer src={pointer} />
                            <CardTitle>Template</CardTitle>
                            <CardText>Chose from over 500 pre made templates. The starting point for our ecosystem.</CardText>
                        </Card>
                        <Card>
                            <Pointer src={pointer} />
                            <CardTitle>Customize</CardTitle>
                            <CardText>Get access to our collection, mix and match your components until you get the look you're going for.</CardText>
                        </Card>
                    </CardContainer><br></br>
                    <CardContainer>
                        <Card>
                            <Pointer src={pointer} />
                            <CardTitle>Test</CardTitle>
                            <CardText>Send traffic to your new website, let us track and optimize your website for you.</CardText>
                        </Card>
                        <Card>
                            <Pointer src={pointer} />
                            <CardTitle>Optimize</CardTitle>
                            <CardText>Based on the testing results we optimize your website following your design guidelines.</CardText>
                        </Card>
                    </CardContainer>
                </RightContainer>
            </FlexContainer>
        </SectionContainer>
    )
}

export default Section1;