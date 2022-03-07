import styled from "styled-components"
import { templateData } from "../../store/TempateData"
const Maincontainer = styled.div`


`
const P = styled.p`
color: black`
const Image = styled.img`
width: 100%;
height: 100%;
border-radius: 20px;`
const TemplatesContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 80px 20px;
margin: 50px 0;

`
const ItemContainer = styled.div`
width: 433px;
height: 289px;
`
function Work() {
    return (
        <Maincontainer>
            <TemplatesContainer>

                {templateData.map((item, index) => {
                    return (
                        <ItemContainer>
                            <Image src={item.image} />
                            <P>{item.title}</P>
                        </ItemContainer>
                    )
                })}
            </TemplatesContainer>
        </Maincontainer>
    )
}

export default Work;