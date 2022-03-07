import styled from "styled-components"
import img from "../../images/mansmile.png"
import imglft from "../../images/women.png"

const Section = styled.div`
display: flex;
justify-content: center;
gap: 5%;
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

const SubTitile = styled.h6`

`
const Title = styled.h2`
margin: 20px 0;
`
const Text = styled.p`
color: black;
`
const Image = styled.img`
border-radius: 10px;
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
                <Text>A website is at the heart of online branding. It brings every aspect of your business together on the Web. It helps you manage, distribute and share your content more efficiently. Website Design undoubtedly helps you improve your organizations image and build rapport. It’s often the first place to start, whether you’re changing your company’s brand image, launching a new product or you’re aiming for a responsive site.</Text>
            </TextContainer>
            <Image src={"https://elements-cover-images-0.imgix.net/5afeed53-78f8-475d-8eda-9f3ea1a5bcd0?auto=compress%2Cformat&fit=max&w=433&s=66ef8cc209f3c5d27f2be880a986c375"} />
        </Section>
    )
}

export function ImageLeft(props) {
    return (
        <Section>
            <Image src={"https://elements-cover-images-0.imgix.net/2eb70143-45ec-4c0b-97e4-4cc4ad1af8ba?auto=compress%2Cformat&fit=max&w=433&s=cb40719922c5c22f79f936d0f09410a9"} />
            <TextContainer>
                <SubTitile>{props.subtitle}</SubTitile>
                <Title>{props.title}</Title>
                <Text>Our goal is to provide our customers the means to effectively present and market themselves online successfully. We strategically help build your brand, improve your global web presence, and develop more meaningful relationships with your customers.</Text>
            </TextContainer>

        </Section>
    )
}