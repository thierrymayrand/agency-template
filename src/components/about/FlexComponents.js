import styled from "styled-components"
import img from "../../images/mansmile.png"
import imglft from "../../images/women.png"

const Section = styled.div`
display: flex;
justify-content: space-between;
margin: 10% 0;
@media (max-width: 768px) {
    flex-direction: column;
}
`
const TextContainer = styled.div`
color: black;
width: 50%;
@media (max-width: 768px) {
    width: 100%;
}
`

const SubTitile = styled.p`
color: black;
`
const Title = styled.h2`
margin: 20px 0;
`
const Text = styled.p`
color: black;
`
const Image = styled.img`
@media (max-width: 768px) {
    margin-top: 20px;
}
`
export function ImageRight(props) {
    return (
        <Section>
            <TextContainer>
                <SubTitile>{props.subtitle}</SubTitile>
                <Title>{props.title}</Title>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </TextContainer>
            <Image src={img} />
        </Section>
    )
}

export function ImageLeft(props) {
    return (
        <Section>
            <Image src={imglft} />
            <TextContainer>
                <SubTitile>{props.subtitle}</SubTitile>
                <Title>{props.title}</Title>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </TextContainer>

        </Section>
    )
}