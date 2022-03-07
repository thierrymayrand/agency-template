import styled from "styled-components"
import Section5 from "../home/Section5"
import Section7 from "../home/Section7"

const MainContainer = styled.div`
margin: 0 10%;
`
const TextContainer = styled.div`
margin-top: 4em;
margin-bottom: 1em;
`

const Title = styled.h1`
text-align: center;
`
const Text = styled.p`

`
const PackageContainer = styled.div`
display: flex;
gap: 2%;
justify-content: space-between;
height: 745px;
`

const PackageItem = styled.div`
padding: 64px 48px;
background: #F4F6FC;
border-radius: 12px;
`

const PackagePrice = styled.h3`
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 38px;
line-height: 56px;
color: #282938;
`
const PackageTitle = styled.h6`
color: #282938;
margin: 20px 0;
`
const PackageText = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 28px;
color: #282938;
width: 70%;
`
const Included = styled.div`
`
const Flex = styled.div`
display: flex;
`
const Arrow = styled.div`
width: 26px;
height: 18px;




background: #97DAAD;
border-radius: 3px;
transform: rotate(90deg);
`
const IncludedTitle = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 28px;
`
function Pricing() {

    const items = [{ price: "299", title: "Landing Page", text: "When you’re ready to go beyond prototyping in Figma, ", website: true, loggin: false, chatbot: false, paymentGateway: false },
    { price: "399", title: "Website Page", text: "When you’re ready to go beyond prototyping in Figma, ", website: true, loggin: false, chatbot: false, paymentGateway: false },
    { price: "499 +", title: "Complex Project", text: "When you’re ready to go beyond prototyping in Figma, ", website: true, loggin: false, chatbot: false, paymentGateway: false }]
    return (
        <MainContainer>
            <TextContainer>
                <Title>Our Pricing Plans</Title>
                <Text>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</Text>
                <Included>
                    <Flex>

                    </Flex>
                </Included>
            </TextContainer>
            <PackageContainer>
                {items.map((item, index) => {
                    return (
                        <PackageItem>
                            <PackagePrice>${item.price}</PackagePrice>
                            <PackageTitle>{item.title}</PackageTitle>
                            <PackageText>{item.text}</PackageText>

                        </PackageItem>
                    )
                })}
            </PackageContainer>
            <Section5 />
            <Section7 />
        </MainContainer>
    )
}

export default Pricing;