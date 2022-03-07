import styled from "styled-components";

const Section = styled.div`


`

const Container = styled.div`
margin: 10% 20%;
display: flex;
gap: 20px;
@media (max-width: 768px) {
    flex-direction: column;
    margin: 10%;
}
`
const Title = styled.h2`
`
const P = styled.p`
color: rgba(36, 5, 242, 1);
;
`
const Text = styled.h6``

const Right = styled.div`
`
const Left = styled.div`
`

const ItemContainer = styled.div`
display: flex;
gap: 20px;
border-bottom: line;
margin-bottom: 20px;
padding-bottom: 5px;
border-bottom: 1px solid rgb(150,150,150);
`

const Number = styled.p`
color: rgba(36, 5, 242, 1);
font-size: 20px;
align-self: top;

`

const ItemTitle = styled.h6`
margin-bottom: 10px;
font-size: 20px;
`

const ItemText = styled.p`
color: black;
font-size: 14px;
opacity: 0.8;
padding-bottom: 10px;
`

const TextContainer = styled.div`
`

function Section5() {
    const items = [
        {
            title: "How much time does it take?",
            id: "01", text:
                "Our templates makes the creation process extremely fast. You can expect a production ready website within a week. After you're website is live landing pages will take a maximum of 24 hours to be produced. "
        },
        {
            title: "Can you do custom apps?",
            id: "02", text:
                "100% althought custom apps are a bit more expensive as we need to set up your backend infrastructure and manage it for you. Custom apps have custom prices"
        },
        {
            title: "How do you communicate?",
            id: "03", text:
                "For now, mainly through email, we'll have an application for our clients ready early july."
        },
        {
            title: "I have a bigger project. Can you handle it?",
            id: "04", text:
                "Absolutely, bigger projects are often custom applications. We can build custom management applications, sales application leveraging data scraping and much much more."
        },
        {
            title: "Where are you based?",
            id: "05", text:
                "Based in Montreal, working all around the world. "
        },]
    return (
        <Section>
            <Container>
                <Left><Title>Frequently asked questions</Title>
                    <P>Contact us for more info</P> </Left>
                <Right>
                    {items.map((item, index) => {
                        return (
                            <ItemContainer>
                                <Number>{item.id}</Number>
                                <TextContainer>
                                    <ItemTitle>{item.title}</ItemTitle>
                                    <ItemText>{item.text}</ItemText>
                                </TextContainer>
                            </ItemContainer>
                        )
                    })}
                </Right>
            </Container>
        </Section>
    )
}

export default Section5;