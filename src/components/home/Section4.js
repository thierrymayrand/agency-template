import img from "../../images/user.png"
import styled from "styled-components";

const Section = styled.div`

background-color: rgb(250,251,254);

`

const Container = styled.div`
margin: 10% 20%;
display: flex;
gap: 20px;
@media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
    margin: 10%;
}
`
const Title = styled.h2`
`
const P = styled.p`
`
const Text = styled.h6``

const Right = styled.div`
`
const Left = styled.div`
`

const UserContainer = styled.div`
display: flex;
margin-top: 20px
`

const UserImage = styled.img`
width: 32px;
height: 32px;
border-radius: 40px;`

const UserName = styled.p`
color: black;
`

const UserTitle = styled.p`
color: black;

font-size: 12px;
`

const UserTextContainer = styled.div`
align-self:center;
margin-left: 20px;
`

function Section4() {
    return (
        <Section>
            <Container>
                <Left><Title>What our clients say about us</Title>
                    <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</P> </Left>
                <Right>
                    <Text>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</Text>
                    <UserContainer>
                        <UserImage src={img} />
                        <UserTextContainer>
                            <UserName>Jenny Wilson</UserName>
                            <UserTitle>Vice President</UserTitle>
                        </UserTextContainer>
                    </UserContainer>
                </Right>
            </Container>
        </Section>
    )
}

export default Section4;