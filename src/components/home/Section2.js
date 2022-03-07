import styled from "styled-components"
import Card from "../../images/Card.png"
import TopImg from "../../images/imgtop.png"
import BottomImg from "../../images/bottom.png"

const Section = styled.div`

`
const Container = styled.div`

margin: 10% 20%;
@media (max-width: 768px) {
    margin: 10% 10%;
}

`
const Menu = styled.div`
display: flex;
justify-content: space-between;
@media (max-width: 768px) {
    justify-content: center;
}
`
const MenuTitle = styled.h2`
@media (max-width: 768px) {
    text-align: center;
}
`
const ViewMoreText = styled.p`
color: black;
align-self: center;
@media (max-width: 768px) {
    display: none;
}
`
const Body = styled.div`
display: flex;
justify-content: space-between;
margin-top: 30px;

@media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
}
`
const Left = styled.div`
width: 100%;
height: 600px;
background-image: url(${Card});
background-position: right bottom;
  background-repeat: no-repeat;
`

const LeftTextContainer = styled.div`
width: 40%;
height: 100%;
background: linear-gradient(329.39deg, #1C1E53 -10.96%, rgba(28, 30, 83, 0.42) 103.96%);
display: flex;
flex-direction: column;
justify-content: flex-end;
`

const LeftTitle = styled.h2`
color: white;
font-size: 24px;
`
const LeftP = styled.p`
color: white;
opacity: 0.8;
font-size: 15px;
margin-top: 5px;
margin-bottom: 5px;
`
const ViewProject = styled.p`
color: rgba(252, 217, 128, 1);
`
const Right = styled.div`
width: 33%;
@media (max-width: 768px) {
    display: none;
}
`

const Top = styled.div`
height: 50%;
width: 100%;
background-image: url(${TopImg});
background-position: right top;
  background-repeat: no-repeat;
`
const Bottom = styled.div`
height: 50%;

background-image: url(${BottomImg});
background-position: right bottom;
  background-repeat: no-repeat;
  
`
const TextContainer = styled.div`
margin: 0 15px;
margin-bottom: 30px;`

const LayerTop = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
height: 100%;
width: 100%;
background: linear-gradient(329.39deg, #1C1E53 -10.96%, rgba(28, 30, 83, 0.42) 103.96%);`
const TopTextContainer = styled.div`
margin: 0 10px;
margin-bottom: 15px;`

function Section2() {
    return (
        <div>

            <Section>
                <Container>
                    <Menu>
                        <MenuTitle>View our projects</MenuTitle>
                        <ViewMoreText>View More</ViewMoreText>
                    </Menu>
                    <Body>
                        <Left>
                            <LeftTextContainer>
                                <TextContainer><LeftTitle>Workhub office React Design</LeftTitle>
                                    <LeftP>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </LeftP>
                                    <ViewProject>View project</ViewProject> </TextContainer>

                            </LeftTextContainer>

                        </Left>
                        <Right>
                            <Top>
                                <LayerTop>
                                    <TopTextContainer>
                                        <LeftTitle>Unisaas Website Design</LeftTitle>
                                        <ViewProject>View Portfolio</ViewProject>
                                    </TopTextContainer>
                                </LayerTop>

                            </Top>
                            <Bottom>

                            </Bottom>
                        </Right>
                    </Body>

                </Container>
            </Section>
        </div>
    )
}

export default Section2;