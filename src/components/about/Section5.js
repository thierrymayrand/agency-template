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
color: black;
width: 100%;
text-align: center;
margin-left: auto;
margin-right: auto;
padding-top: 60px;

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
background-color: white;
@media (max-width: 768px) {
    width: 100%;
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
        { title: "Uses Client First", image: "../../images/arrow.png", text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. " },
        { title: "Two Free Revision Round", image: "../../images/check.svg", text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. " },
        { title: "Template Customization", image: "../../images/check.svg", text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. " },

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