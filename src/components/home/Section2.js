import styled from "styled-components"
import Card from "../../images/Card.png"
import TopImg from "../../images/imgtop.png"
import BottomImg from "../../images/bottom.png"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { images } from "./images"


const Main = styled.div`

`
const Carousel = styled.div`

overflow: hidden;
cursor: grab;
`
const InnerCarousel = styled.div`
display: flex;



`

const Item = styled.div`

padding: 20px;

`

const Image = styled.img`
width: 30rem;
margin: 30px;
margin-left: 0;
pointer-events: none;
border-radius: 5px;
`

const Title = styled.h2`

margin: 0;
font-size: 40px; 
`

const Section1 = styled.div`
height: 100vh;
width: 100vw;

`

const Video = styled.video`
width: 100%;
height: 100%;
`

const Text = styled.h2`
color: white;
font-weight: 300;
font-size: 3em;
margin: 0;
cursor: grab;
`


const Section = styled.div`

`
const Container = styled.div`

margin: 10% 20%;
@media (max-width: 768px) {
    margin: 10% 10%;
}

`
const Menu = styled.div`
display: flex;
justify-content: space-between;
@media (max-width: 768px) {
    justify-content: center;
}
`
const MenuTitle = styled.h2`
@media (max-width: 768px) {
    text-align: center;
}
`
const ViewMoreText = styled.p`
color: black;
align-self: center;
@media (max-width: 768px) {
    display: none;
}
`
const Body = styled.div`
display: flex;
justify-content: space-between;
margin-top: 30px;

@media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
}
`
const Left = styled.div`
width: 100%;
height: 600px;
background-image: url(${Card});
background-position: right bottom;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
      background-size: cover;
      height: 400px;
    
}
`

const LeftTextContainer = styled.div`
width: 40%;
height: 100%;
background: linear-gradient(329.39deg, #1C1E53 -10.96%, rgba(28, 30, 83, 0.42) 103.96%);
display: flex;
flex-direction: column;
justify-content: flex-end;
@media (max-width: 768px) {
    width: 90%;
    
}
`

const LeftTitle = styled.h2`
color: white;
font-size: 24px;
`
const LeftP = styled.p`
color: white;
opacity: 0.8;
font-size: 15px;
margin-top: 5px;
margin-bottom: 5px;
`
const ViewProject = styled.p`
color: rgba(252, 217, 128, 1);
`
const Right = styled.div`
width: 33%;
@media (max-width: 768px) {
    display: none;
}
`

const Top = styled.div`
height: 50%;
width: 100%;
background-image: url(${TopImg});
background-position: right top;
  background-repeat: no-repeat;
`
const Bottom = styled.div`
height: 50%;

background-image: url(${BottomImg});
background-position: right bottom;
  background-repeat: no-repeat;
  
`
const TextContainer = styled.div`
margin: 0 15px;
margin-bottom: 30px;`

const LayerTop = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
height: 100%;
width: 100%;
background: linear-gradient(329.39deg, #1C1E53 -10.96%, rgba(28, 30, 83, 0.42) 103.96%);
`
const TopTextContainer = styled.div`
margin: 0 10px;
margin-bottom: 15px;`

const linkStyle = {
    width: "100%",
}
function Section2() {
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    const [width, setWidth] = useState(0)

    const carousel = useRef()

    useEffect(() => {
        let lenght = carousel.current.scrollWidth - carousel.current.offsetWidth + 60;
        console.log(carousel.current.scrollWidth, carousel.current.offsetWidth, lenght)
        setWidth(lenght)
    }, [])

    return (
        <div>

            <Section>
                <Container>


                    <Title as={motion.h2} animate={{ x: 20 }} transition={{ ease: "easeInOut", duration: 2 }} >Scroll Cards</Title>
                    <Carousel as={motion.div} ref={carousel}>
                        <InnerCarousel as={motion.div} drag="x" dragConstraints={{ right: 0, left: -width }}>
                            {images.map(image => {
                                return (
                                    <Item>

                                        <Image src={image.image} />
                                        <Title as={motion.h2} animate={{ x: 20 }} transition={{ ease: "easeInOut", duration: 2 }} >{image.title}</Title>
                                    </Item>

                                )
                            })}
                        </InnerCarousel>
                    </Carousel>



                </Container>
            </Section>
        </div>
    )
}

export default Section2;