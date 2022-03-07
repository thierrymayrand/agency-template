import styled from "styled-components"
import img from "../../images/people.png"

const Section = styled.div`
display: flex;
justify-content: space-between;
margin: 10% 0;
@media (max-width: 768px) {
    flex-direction: column;
    
}
`
const SubT = styled.h6`
`
const Title = styled.h1`
margin: 30px 0;

`
const P = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 28px;
/* or 175% */

text-align: justify;

/* Dark blue */

color: #282938;

opacity: 0.7;
`
const Image = styled.img`
width: 100%;
height: auto;
margin-top: 20px;
`
const Left = styled.div`
width: 595px;
@media (max-width: 768px) {
    width: auto;
   
}
`

function Section1() {
    return (
        <Section>
            <Left>
                <SubT>About us</SubT>
                <Title>Our designs solve problems</Title>
                <P>We are web designers, developers, project managers, and digital marketing professionals dedicated to creative and results-driven web-based solutions using the latest trends and technologies.</P>
            </Left>
            <Left>
                <Image src={img} />
            </Left>
        </Section>
    )
}

export default Section1;