import image from "../../images/check.svg"
import styled from "styled-components";


const Section = styled.div`
background: #F4F6FC;
padding: 2px;
margin-bottom: 100px;
`
const Container = styled.div`
margin: 10% 2%;
`

const Title = styled.h1`

`

const ItemContainer = styled.div`
display: flex;
justify-content: center;
gap: 20px;

margin-top: 30px;
flex-wrap: wrap;
@media (max-width: 768px) {
    flex-direction: column;
}

`


const ItemCard = styled.div`
width: 30%;
min-width: 400px;
height: 400px;
background-color: white;
@media (max-width: 768px) {
    width: 100%;
    min-width: 200px;
    height: 300px;
}
`
const CardContent = styled.div`
margin: 20px 10px;
`
const CardText = styled.p`

font-size: 16px;
color: black;

`
const CardTitle = styled.h6`
margin: 10px 0;
`
const CardImage = styled.img`
width: 32px;
height:32px;
`
function Section5() {
    const items = [
        { title: "Speed", image: "../../images/arrow.png", text: "Chose from over 500 production ready websites. Together we customize your website to your taste." },
        { title: "Cost Effective", image: "../../images/check.svg", text: "By leveraging our templates we save a tremendous amount of time. Allowing us to deliver. Fast. " },
        { title: "Template Customization", image: "../../images/check.svg", text: "Unlimited back and forth between you, your team and us. Create new landing page, modify the existing pages. Anytime." },

    ]
    return (
        <Section>
            <Container>
                <Title>The benefits of working with us</Title>
                <ItemContainer>
                    {items.map((item, index) => {
                        return (
                            <ItemCard>
                                <CardContent>
                                    <CardImage src={image} />
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardText>{item.text}</CardText>
                                </CardContent>
                            </ItemCard>
                        )
                    })}
                </ItemContainer>
            </Container>
        </Section>
    )
}
export default Section5;