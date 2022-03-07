import styled from "styled-components"
import circle from "../../images/Circle.png"

const Section = styled.div`
margin: 10% 0;
`
const Title = styled.h1`
text-align: center;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 64px;
margin-bottom: 50px;
`
const ItemContainer = styled.div`
width: 30%;
@media (max-width: 768px) {
    width: 100%;
    
}
`
const ItemTop = styled.div`
display: flex;
gap: 10px;
align-items: center;
`

const ItemTextContainer = styled.div`
`

const ItemT = styled.h4`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
margin-top: 10px; 
margin-bottom: 15px;

@media (max-width: 768px) {
    display: none;
    
}
`

const ItemTScreen = styled.h4`
display: none;
@media (max-width: 768px) {
    display: inline;
    font-family: Poppins;
 
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
}
`
const ItemP = styled.p`
color: black;
`
const ItemsContainer = styled.div`
display: flex;
justify-content: space-between;
@media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    
}
`

const Circle = styled.img`
width: auto;
height: 100%;
`


function Section3() {
    const items = [{ title: "Planning" }, { title: "Conception" }, { title: "Design" }, { title: "Development" }]
    return (
        <Section>
            <Title>The process we follow</Title>
            <ItemsContainer>
                {items.map((item, index) => {
                    return (
                        <ItemContainer>
                            <ItemTop>
                                <Circle src={circle} />
                                <ItemTScreen>{item.title}</ItemTScreen>

                            </ItemTop>
                            <ItemTextContainer>
                                <ItemT>{item.title}</ItemT>
                                <ItemP>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</ItemP>
                            </ItemTextContainer>
                        </ItemContainer>
                    )
                })}
            </ItemsContainer>
        </Section>
    )
}

export default Section3;