import styled from "styled-components"
import circle from "../../images/Circle.png"

const Section = styled.div`
margin: 10% 0;
`
const Title = styled.h1`

`
const ItemContainer = styled.div`
width: 30%;
@media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
    
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
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 28px;
/* or 175% */

text-align: justify;

/* Dark blue */

color: #282938;

opacity: 0.7;

`
const ItemsContainer = styled.div`
display: flex;
justify-content: space-between;
@media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    
}
`

const Circle = styled.img`
width: auto;
height: 100%;
`


function Section3() {
    const items = [{ title: "Planning", text: "Chose from over 500 templates" }, { title: "Conception", text: "We go back and forth with our clients to nail down the look they are going for" }, { title: "Design", text: "Incredibly talented designers will work on your website" }, { title: "Development", text: "Let's get your website mobile responsive and ready for production " }]
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
                                <ItemP>{item.text}</ItemP>
                            </ItemTextContainer>
                        </ItemContainer>
                    )
                })}
            </ItemsContainer>
        </Section>
    )
}

export default Section3;