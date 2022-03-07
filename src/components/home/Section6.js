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

margin-bottom: 100px;
display: flex;

@media (max-width: 768px) {
   
    flex-direction: column;
}
`
const Left = styled.div`
width: 50%;
background: url(${img});
background-size: fill;
background-repeat: no-repeat;
background:rgba(255, 0, 25, 0.3);
@media (max-width: 768px) {
    width: 100%;
}

`
const Right = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
padding-bottom: 20px;

background: #1C1E53;
@media (max-width: 768px) {
    width: 100vw;
    
    
}


`
const TextContainer = styled.div`

height: 100%;

margin: 20%;
`

const NewTextContainer = styled.div`

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
text-align: center;
margin-top: 30px;
`
const P2 = styled.p`
color: white;

font-size: 12px;
opacity: 0.8;
text-align: center;
margin: 20px;

`
const NameInput = styled.input`
width: 80%;
padding: 10px 0;
padding-left: 10px;
margin: 10px 0;
background-color: transparent;
border: 1.5px solid rgba(255, 255, 255, 0.05);
border-radius: 5px;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 28px;
margin-left: 10%;

`

const EmailInput = styled.input`
width: 80%;
padding: 10px 0;
padding-left: 10px;
margin: 10px 0;
background-color: transparent;
border: 1.5px solid rgba(255, 255, 255, 0.05);
border-radius: 5px;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 28px;
margin-left: 10%;
`

const Inquiry = styled.textarea`
width: 80%;
padding: 10px 0;
padding-left: 10px;
margin: 10px 0;
background-color: transparent;
border: 1.5px solid rgba(255, 255, 255, 0.05);
border-radius: 5px;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 28px;
margin-left: 10%;
`
const Form = styled.form`
width: 100%;

`

const Button = styled.button`
width: 80%;
margin: 10px;
padding: 15px 0;
border-radius: 10px;
border: none;
background: #FCD980;
color: white;
font-familly: Poppins, sans serif,
font-weight: 600;
margin-left: 10%;
font-size: 18px;
`

function Section6() {
    return (
        <Section>
            <Container>

                <Right>
                    <NewTextContainer>
                        <Title2>Send inquiry</Title2>

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