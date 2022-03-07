import image from "../../images/check.svg"
import styled from "styled-components";


const Section = styled.div`
background: #F4F6FC;

`
const Container = styled.div`
margin: 10% 20%;
@media (max-width: 768px) {
    margin: 10%;
}
`

const Title = styled.h1`
color: black;

text-align: center;
`

const ItemContainer = styled.div`
display: flex;
justify-content: center;
gap: 20px;
margin-top: 30px;
flex-wrap: wrap;
`


const ItemCard = styled.div`
width: 90%;
height: 316px;
background-color: white;
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
function Section3() {
    const items = [
        { title: "Uses Client First", image: "../../images/arrow.png", text: "Opportunity knocks whenever an online customer visits your website. Welcome them in. Help them find what they came for. Make them remember all your benefits. Ensure real buyers can enjoy browsing your web experience." },
        { title: "Mix & Match", image: "../../images/check.svg", text: "Play through our templates collections until you get the feel you're going for, chose from over 500 templates." },
        { title: "Template Customization", image: "../../images/check.svg", text: "Now that you found the right website template, let us do all the customization to bring it to life." },
        { title: "Optimization", image: "../../images/arrow.png", text: "You're website is now live, it's time to go to work. Tracking allows us to find pages, flows that we could optimize. We have a good look at your data and optimize your website for you." },
        { title: "Unlimited Content", image: "../../images/check.svg", text: "Yup you read that correctly. We leverage generative code to generate unlimited commercial assets. We create a folder with all your assets and generate unlimited variations with code.  " },
        { title: "Marketing", image: "../../images/check.svg", text: "This is our holy grail. The reason why this agency was founded was to bridge marketing code and design. The realease of quick new landing pages, our tracking our asset creation pipeline. All are to superpower your marketing efforts. " },
    ]
    return (
        <Section>
            <Container>
                <Title>Design that solves problems, one product at a time</Title>
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

export default Section3;