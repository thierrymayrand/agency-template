import img from "../../images/img.png"
import styled from "styled-components"

const Section = styled.div`
`


const ItemContainer = styled.div`
display: flex;
gap: 20px;
border-bottom: line;
margin-bottom: 20px;
padding-bottom: 5px;
border-bottom: 1px solid rgb(150,150,150);
`

const Container = styled.div`
margin: 0 20%;
margin-bottom: 100px;
display: flex;

@media (max-width: 768px) {
    margin: 10%;
    flex-direction: column;
}
`
const Left = styled.div`
width: 50%;
background: url(${img});
background-size: fill;
background-repeat: no-repeat;
@media (max-width: 768px) {
    width: 100%;
}

`
const Right = styled.div`
width: 50%;
background: #1C1E53;
@media (max-width: 768px) {
    width: 100%;
    
}

`
const TextContainer = styled.div`

height: 100%;
background: rgba(28, 30, 83, 0.5);
`

const NewTextContainer = styled.div`
padding: 20% 10%;
`
const Title = styled.h2`
color: white;
`
const P = styled.p`
color: white;
margin-top: 20px;
;
`

const Title2 = styled.h2`
color: white;
font-size: 26px;
font-weight: 500;
`
const P2 = styled.p`
color: white;
margin-top: 20px;
font-size: 12px;
opacity: 0.8;
;
`
const NameInput = styled.input`
padding: 10px;
margin: 10px 0;
background-color: transparent;
border: 1.5px solid rgba(255, 255, 255, 0.05);
border-radius: 5px;
width: 100%;
`

const EmailInput = styled.input`
padding: 10px;
margin: 10px 0;
background-color: transparent;
border: 1.5px solid rgba(255, 255, 255, 0.05);
border-radius: 5px;
width: 100%;
`

const Inquiry = styled.textarea`
padding: 10px;
margin: 10px 0;
background-color: transparent;
border: 1.5px solid rgba(255, 255, 255, 0.05);
border-radius: 5px;
width: 100%;
`
const Form = styled.form`
padding: 10px;

`

const Button = styled.button`
width: 100%;
padding: 15px 0;
border-radius: 10px;
border: none;
background: #FCD980;
color: white;
font-familly: Poppins, sans serif,
font-weight: 600;
`

function Section6() {
    return (
        <Section>
            <Container>
                <Left>

                    <TextContainer>
                        <NewTextContainer>
                            <Title>Building stellar websites for early startups</Title>
                            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</P>
                        </NewTextContainer>

                    </TextContainer>

                </Left>
                <Right>
                    <NewTextContainer>
                        <Title2>Send inquiry</Title2>
                        <P2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</P2>
                    </NewTextContainer>
                    <Form>
                        <NameInput type="text" placeholder="Your Name"></NameInput><br></br>
                        <EmailInput type="text" placeholder="Your Email"></EmailInput><br></br>
                        <Inquiry type="text" placeholder="How can we help?"></Inquiry><br></br>
                        <Button>Send Inquiry</Button>
                    </Form>
                </Right>
            </Container>
        </Section>
    )
}

export default Section6;