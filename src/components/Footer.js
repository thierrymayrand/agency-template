import styled from "styled-components"

const Section = styled.div`
display: flex;
justify-content: space-between;
margin: 0 20%;
padding: 20px 0;
`
const Left = styled.div`

`
const Text = styled.p`
color: black;
`
const Right = styled.div`
display: flex;
gap: 20px;

`



function Footer() {
    return (
        <Section>
            <Left>
                <Text>Copyright 2022, Finsweet.com</Text>
            </Left>
            <Right>
                <Text>Home</Text>
                <Text>About us</Text>
                <Text>Features</Text>
                <Text>Pricing</Text>
                <Text>FAQ</Text>
            </Right>
        </Section>
    )
}

export default Footer;