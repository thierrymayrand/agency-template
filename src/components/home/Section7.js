import styled from "styled-components";

const Section = styled.div`

background: #1C1E53;
padding: 10% 20%;
display: flex;
gap: 7%;
position: relative;
@media (max-width: 768px) {
    padding: 10%;
}

`
const PLeft = styled.p`
color: white;

`

const Contact = styled.div`
display: flex;
gap: 20px;
padding: 15px;
background: #FCD980;
position: absolute;
bottom:0;
color: black;
`
const ContactLeft = styled.div`


`
const EmailMe = styled.h6`
size: 18px;
`
const Email = styled.p`
color: #282938;
font-family: Poppins;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 28px;
`
const ContactInner = styled.div`
`
const Title = styled.h1`
color: white;

`
const PRight = styled.p`
color: white;
opacity: 0.9;`
function Section7() {
    return (
        <Section>
            <ContactLeft>

                <Contact>
                    <ContactInner>
                        <EmailMe>Email me at</EmailMe>
                        <Email>contact@website.com</Email>
                    </ContactInner>
                    <ContactInner>
                        <EmailMe>Call us</EmailMe>
                        <Email>0927 6277 28525</Email>
                    </ContactInner>
                </Contact>
            </ContactLeft>
            <ContactLeft>

            </ContactLeft>
        </Section>
    )
}

export default Section7;
